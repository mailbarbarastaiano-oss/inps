/* PECS — motore dei brani con spazi vuoti, quiz e simulazioni della prova scritta INPS 1695 Funzionari PECS.
   Dati in pecs-data.js (window.PECS_DATA). Le opzioni vengono mescolate a ogni caricamento. */
(function () {
  'use strict';
  var D = window.PECS_DATA;

  function shuffle(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t;
    }
    return b;
  }
  function optsOf(n) { var r = []; for (var i = 0; i < n; i++) r.push(i); return shuffle(r); }

  /* ---------- costruzione HTML ---------- */
  function clozeHtml(b, prefix) {
    var h = '<p class="brano">';
    b.parts.forEach(function (p) {
      if (typeof p === 'number') {
        var g = b.gaps[p];
        h += '<select data-k="' + prefix + ':' + p + '"><option value="">scegli</option>';
        optsOf(g.o.length).forEach(function (j) { h += '<option value="' + j + '">' + g.o[j] + '</option>'; });
        h += '</select>';
      } else h += p;
    });
    return h + '</p>' + (b.tr ? '<div class="tr">' + b.tr + '</div>' : '');
  }
  function qHtml(q, prefix, n) {
    var h = '<div class="q"><div class="qt">' + (n ? n + '. ' : '') + q.t + '</div>';
    optsOf(q.o.length).forEach(function (j) {
      h += '<label><input type="radio" name="' + prefix + '" value="' + j + '"> ' + q.o[j] + '</label>';
    });
    return h + '</div>';
  }

  /* ---------- modalità allenamento (feedback immediato con "Verifica") ---------- */
  function mountPractice(el, cfg) {
    var h = '';
    (cfg.brani || []).forEach(function (id, i) {
      var b = D.brani[id];
      h += '<div class="sc" id="pb_' + id + '"><h3>' + b.title + '</h3>' + (b.lead ? '<div class="lead">' + b.lead + '</div>' : '') +
        clozeHtml(b, id) + '<button class="btn" data-act="vf-b" data-id="' + id + '">' + (b.en ? 'Check' : 'Verifica') +
        '</button><div class="msg"></div><div class="ex" style="display:none"></div></div>';
    });
    if ((cfg.quesiti || []).length) {
      h += '<div class="sc" id="pq_' + (cfg.key || 'q') + '"><h3>' + (cfg.qtitle || 'Quesiti di comprensione e applicazione') + '</h3>';
      cfg.quesiti.forEach(function (id, i) { h += qHtml(D.quesiti[id], 'pq_' + id, i + 1); });
      h += '<button class="btn" data-act="vf-q">Verifica</button><div class="msg"></div><div class="ex" style="display:none"></div></div>';
    }
    el.innerHTML = h;
    el.addEventListener('click', function (e) {
      var t = e.target; if (t.tagName !== 'BUTTON') return;
      var box = t.closest('.sc'), msg = box.querySelector('.msg'), ex = box.querySelector('.ex'), ok = 0, n = 0, html = '', miss = false;
      if (t.getAttribute('data-act') === 'vf-b') {
        var b = D.brani[t.getAttribute('data-id')], sel = box.querySelectorAll('select');
        sel.forEach(function (s) { if (s.value === '') miss = true; });
        if (miss) { msg.className = 'msg err'; msg.textContent = 'Rispondi a tutti gli spazi prima di verificare.'; return; }
        sel.forEach(function (s) {
          var gi = +s.getAttribute('data-k').split(':').pop(), g = b.gaps[gi], r = +s.value === g.c;
          s.className = r ? 'ok' : 'ko'; n++; if (r) ok++;
          html += '<div>' + (gi + 1) + '. ' + (r ? 'Corretto' : 'Errato') + ': ' + g.e + '</div>';
        });
      } else if (t.getAttribute('data-act') === 'vf-q') {
        var ids = []; box.querySelectorAll('input[type=radio]').forEach(function (r) { if (ids.indexOf(r.name) < 0) ids.push(r.name); });
        ids.forEach(function (nm) { if (!box.querySelector('input[name="' + nm + '"]:checked')) miss = true; });
        if (miss) { msg.className = 'msg err'; msg.textContent = 'Rispondi a tutte le domande prima di verificare.'; return; }
        ids.forEach(function (nm, i) {
          var q = D.quesiti[nm.replace('pq_', '')], inputs = box.querySelectorAll('input[name="' + nm + '"]'), pick = -1;
          inputs.forEach(function (inp) { inp.parentNode.className = ''; if (inp.checked) pick = +inp.value; });
          inputs.forEach(function (inp) {
            if (+inp.value === q.c) inp.parentNode.className = 'ok';
            else if (+inp.value === pick) inp.parentNode.className = 'ko';
          });
          n++; if (pick === q.c) ok++;
          html += '<div>' + (i + 1) + '. ' + (pick === q.c ? 'Corretto' : 'Errato') + ': ' + q.e + '</div>';
        });
      } else return;
      msg.className = 'msg'; msg.textContent = ok + ' su ' + n + ' corrette';
      ex.innerHTML = html; ex.style.display = 'block';
    });
  }

  /* ---------- modalità simulazione della prova ---------- */
  var HKEY = 'pecs_sim_hist';
  function loadHist() { try { return JSON.parse(localStorage.getItem(HKEY) || '[]'); } catch (e) { return []; } }
  function saveHist(r) { try { var h = loadHist(); h.unshift(r); localStorage.setItem(HKEY, JSON.stringify(h.slice(0, 15))); } catch (e) {} }
  function fmt(s) { var m = Math.floor(s / 60), r = s % 60; return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r; }

  function mountSim(el) {
    var timer = null;

    function home() {
      if (timer) { clearInterval(timer); timer = null; }
      var h = '<div class="nota">Come nella prova vera: le risposte sono <b>definitive</b> (una volta scelta un\'opzione non si cambia), ogni quesito ha <b>3 opzioni</b> e serve <b>almeno 21/30 in ciascuna delle due sezioni</b>. I pesi dei punteggi sono una stima: il bando indica solo i trentesimi e la soglia di 21/30 per sezione.</div>';
      D.sims.forEach(function (s) {
        h += '<div class="simcard"><h3>' + s.title + '</h3><p>' + s.desc + '</p><button class="btn" data-sim="' + s.id + '">Inizia la simulazione</button></div>';
      });
      var hist = loadHist();
      if (hist.length) {
        h += '<h3 class="sotto">Ultimi risultati (salvati in questo browser)</h3><table class="rif"><tr><th>Data</th><th>Simulazione</th><th>Sezione A</th><th>Sezione B</th><th>Esito</th><th>Tempo</th></tr>';
        hist.forEach(function (r) { h += '<tr><td>' + r.d + '</td><td>' + r.n + '</td><td>' + r.a + '/30</td><td>' + r.b + '/30</td><td>' + (r.p ? 'Superata' : 'Non superata') + '</td><td>' + r.t + '</td></tr>'; });
        h += '</table>';
      }
      el.innerHTML = h;
    }

    function run(sim) {
      var items = [], h = '', started = Date.now();
      h += '<div class="simbar"><span><b>' + sim.title + '</b></span><span>Tempo: <b id="tm">00:00</b> · Risposte: <b id="cnt">0</b>/<b id="tot">0</b></span></div>';
      h += '<div id="restop"></div><h2 class="sezione" style="margin-top:6px">Sezione A · Brani tecnico-giuridici e quesiti</h2>';
      sim.units.forEach(function (u, bi) {
        var b = D.brani[u.b], gid = 'g' + bi;
        h += '<div class="sc"><h3>Brano ' + (bi + 1) + (b.en ? ' (inglese)' : '') + ' · ' + b.title.replace(/^Brano \d+ · /, '').replace(/^Brano · /, '') + '</h3>' + clozeHtml(b, 'A' + u.b);
        b.gaps.forEach(function (g, gi) { items.push({ sec: 'A', grp: gid, key: 'A' + u.b + ':' + gi, c: g.c, e: g.e, ans: g.o[g.c], lab: 'Spazio ' + (gi + 1) }); });
        h += '<h4 class="sotto">Quesiti sul brano ' + (bi + 1) + '</h4>';
        u.q.forEach(function (id, qi) {
          var q = D.quesiti[id];
          h += qHtml(q, 'A' + u.b + '_' + id, qi + 1);
          items.push({ sec: 'A', grp: gid, key: 'A' + u.b + '_' + id, c: q.c, e: q.e, ans: q.o[q.c], lab: 'Quesito ' + (qi + 1) });
        });
        h += '<div class="corr" id="corr_' + gid + '"></div></div>';
      });
      h += '<h2 class="sezione">Sezione B · Scenari operativi</h2>';
      sim.scenari.forEach(function (id, si) {
        var s = D.scenari[id], gid = 'sc' + si;
        h += '<div class="sc"><h3>Scenario ' + (si + 1) + ' · ' + s.title + '</h3><div class="scen">' + s.text + '</div>';
        s.qs.forEach(function (q, qi) {
          h += qHtml(q, 'B' + id + '_' + qi, (qi + 1));
          items.push({ sec: 'B', grp: gid, key: 'B' + id + '_' + qi, c: q.c, e: q.e, ans: q.o[q.c], lab: 'Quesito ' + (qi + 1) });
        });
        h += '<div class="corr" id="corr_' + gid + '"></div></div>';
      });
      h += '<div id="sub"><button class="btn" data-act="deliver">Consegna la prova</button> <button class="btn sec" data-act="home">Esci senza consegnare</button><div class="msg" id="smsg"></div></div><div id="out"></div>';
      el.innerHTML = h;
      var tot = items.length; el.querySelector('#tot').textContent = tot;
      var answers = {}, done = false;

      timer = setInterval(function () { var t = el.querySelector('#tm'); if (t) t.textContent = fmt(Math.round((Date.now() - started) / 1000)); }, 1000);

      function count() { var n = Object.keys(answers).length; var c = el.querySelector('#cnt'); if (c) c.textContent = n; }
      el.onchange = function (e) {
        var t = e.target; if (done) return;
        if (t.tagName === 'SELECT' && t.value !== '') {
          answers[t.getAttribute('data-k').replace(/^(A[^:]+):(\d+)$/, '$1:$2')] = +t.value; t.disabled = true; t.className = 'lock'; count();
        } else if (t.type === 'radio') {
          answers[t.name] = +t.value;
          el.querySelectorAll('input[name="' + t.name + '"]').forEach(function (r) { r.disabled = true; r.parentNode.className = r.checked ? 'lock' : ''; });
          count();
        }
      };
      el.onclick = function (e) {
        var t = e.target; if (t.tagName !== 'BUTTON') return;
        var act = t.getAttribute('data-act');
        if (act === 'home') { el.onclick = null; el.onchange = null; home(); bind(); return; }
        if (act === 'deliver' || act === 'force') {
          var left = tot - Object.keys(answers).length;
          if (act === 'deliver' && left > 0) {
            var m = el.querySelector('#smsg'); m.className = 'msg err';
            m.innerHTML = 'Ti mancano ' + left + ' risposte (contano come errate). <button class="btn sec" data-act="force">Consegna comunque</button>'; return;
          }
          finish();
        }
      };

      function finish() {
        done = true; if (timer) { clearInterval(timer); timer = null; }
        var ca = 0, na = 0, cb = 0, nb = 0, groups = {};
        items.forEach(function (it) {
          var ok = answers[it.key] === it.c;
          if (it.sec === 'A') { na++; if (ok) ca++; } else { nb++; if (ok) cb++; }
          var g = groups[it.grp] || (groups[it.grp] = { h: '', ok: 0, n: 0 });
          g.n++; if (ok) g.ok++;
          g.h += '<div class="rev ' + (ok ? 'ok' : 'ko') + '"><b>' + it.lab + '</b>: ' + (ok ? 'corretto' : (answers[it.key] === undefined ? 'non risposto' : 'errato')) + ' · risposta corretta: <b>' + it.ans + '</b><br>' + it.e + '</div>';
        });
        Object.keys(groups).forEach(function (k) {
          var box = el.querySelector('#corr_' + k);
          if (box) box.innerHTML = '<h4 class="sotto">✅ Correzione commentata · ' + groups[k].ok + ' su ' + groups[k].n + ' corrette</h4>' + groups[k].h;
        });
        var sa = Math.round(ca / na * 300) / 10, sb = Math.round(cb / nb * 300) / 10, pass = sa >= 21 && sb >= 21;
        var secs = Math.round((Date.now() - started) / 1000);
        saveHist({ d: new Date().toLocaleDateString('it-IT'), n: sim.title, a: sa, b: sb, p: pass, t: fmt(secs) });
        el.querySelectorAll('select,input').forEach(function (x) { x.disabled = true; });
        el.querySelector('#sub').style.display = 'none';
        var o = '<h2 class="sezione">Risultato</h2><div class="res">' +
          '<div class="box ' + (sa >= 21 ? 'pass' : 'fail') + '"><div class="n">' + sa + '/30</div><small>Sezione A (' + ca + ' su ' + na + ' corrette)</small></div>' +
          '<div class="box ' + (sb >= 21 ? 'pass' : 'fail') + '"><div class="n">' + sb + '/30</div><small>Sezione B (' + cb + ' su ' + nb + ' corrette)</small></div>' +
          '<div class="box ' + (pass ? 'pass' : 'fail') + '"><div class="n">' + (pass ? 'Superata' : 'Non superata') + '</div><small>Servono 21/30 in entrambe le sezioni · tempo ' + fmt(secs) + '</small></div></div>' +
          '<p class="nota">La correzione di ogni brano e di ogni scenario si trova <b>subito sotto di esso</b>: scorri la pagina e leggi le spiegazioni.</p>' +
          '<p><button class="btn" data-act="home">Torna alle simulazioni</button></p>';
        el.querySelector('#restop').innerHTML = o;
        el.querySelector('#out').innerHTML = '<p><button class="btn" data-act="home">Torna alle simulazioni</button></p>';
        window.scrollTo(0, 0);
      }
    }

    function bind() {
      el.onchange = null;
      el.onclick = function (e) {
        var t = e.target;
        if (t.tagName === 'BUTTON' && t.getAttribute('data-sim')) {
          var sim = D.sims.filter(function (s) { return s.id === t.getAttribute('data-sim'); })[0];
          el.onclick = null; run(sim); window.scrollTo(0, 0);
        }
      };
    }
    home(); bind();
  }

  window.PECS = { mountPractice: mountPractice, mountSim: mountSim };
})();
