/* PECS — banca dati, parte 2: novità 2026, contratti pubblici, previdenza complementare, tecnologie e scenari situazionali.
   Estende window.PECS_DATA (caricare dopo pecs-data.js). Risposta corretta sempre per prima (c:0). Testi originali, in forma di sintesi.
   Fonti: dispense del corso 324/A «INPS 1695 funzionari PECS», testo della L. 119/2026 (Normattiva), Errata Corrige Smart. */
(function () {
  var D = window.PECS_DATA;

  Object.assign(D.brani, {

  b_nov_119: { title: "Brano · La legge Merito (L. 119/2026): performance",
   parts: ["La L. 2 luglio 2026, n. 119 (cd. legge Merito) è in vigore dal ", 0, " e modifica il D.Lgs. 150/2009 e il ", 1, ". Le fasi di definizione degli obiettivi, dei valori attesi e del collegamento con le risorse devono concludersi entro il ", 2, " di ogni anno. In ciascun ufficio dirigenziale generale i punteggi apicali non possono superare il ", 3, " delle valutazioni per categoria o qualifica, mentre il riconoscimento delle eccellenze non può superare il ", 4, " delle valutazioni apicali. Il parere dell'OIV sull'adozione del sistema di misurazione e valutazione, a differenza del passato, ", 5, "."],
   gaps: [
    { o: ["19 luglio 2026", "4 luglio 2026", "1° gennaio 2027"], c: 0, e: "Pubblicata in G.U. n. 153 del 4 luglio 2026, in vigore dal 19 luglio 2026 (Normattiva)." },
    { o: ["D.Lgs. 165/2001 (T.U. pubblico impiego)", "D.Lgs. 33/2013", "L. 241/1990"], c: 0, e: "La legge modifica i due pilastri del lavoro pubblico: D.Lgs. 150/2009 (performance) e D.Lgs. 165/2001 (dirigenza)." },
    { o: ["primo trimestre", "primo semestre", "30 giugno"], c: 0, e: "Art. 4 D.Lgs. 150/2009 come modificato: definizione di obiettivi, valori attesi, indicatori e raccordo con le risorse entro il primo trimestre." },
    { o: ["30%", "50%", "10%"], c: 0, e: "Punteggi apicali: massimo 30% delle valutazioni per categoria o qualifica." },
    { o: ["20%", "30%", "5%"], c: 0, e: "Eccellenze (art. 21 D.Lgs. 150/2009): massimo 20% delle valutazioni apicali." },
    { o: ["non è più vincolante", "resta vincolante", "è abolito"], c: 0, e: "Art. 7 D.Lgs. 150/2009 modificato: il parere dell'OIV non è più vincolante; l'OIV formula proposte non vincolanti." }
   ]},

  b_nov_dir: { title: "Brano · La legge Merito: accesso alla dirigenza",
   parts: ["Per l'accesso alla dirigenza di seconda fascia nelle amministrazioni statali e negli enti pubblici non economici, il 50% dei posti è coperto con corso-concorso bandito dalla ", 0, ", il 20% con concorso pubblico e il 30% mediante ", 1, " del personale non dirigenziale con almeno ", 2, " anni di servizio a tempo indeterminato nell'area dei funzionari. L'inserimento nei ruoli segue un incarico temporaneo di almeno ", 3, " anni con valutazione positiva. Per la prima fascia, il ", 4, "% dei posti è riservato allo sviluppo di carriera dalla seconda fascia."],
   gaps: [
    { o: ["Scuola nazionale dell'amministrazione (SNA)", "Corte dei conti", "Corte costituzionale"], c: 0, e: "Art. 28 D.Lgs. 165/2001: corso-concorso selettivo di formazione bandito dalla SNA (50%)." },
    { o: ["sviluppo di carriera", "mobilità volontaria", "concorso riservato esterno"], c: 0, e: "30% dei posti per sviluppo di carriera, con valutazione comparativa e prova scritta e orale." },
    { o: ["5", "2", "10"], c: 0, e: "Almeno 5 anni a tempo indeterminato nell'area dei funzionari, oppure almeno 2 anni nell'area di elevata qualificazione." },
    { o: ["4", "2", "6"], c: 0, e: "Incarico dirigenziale temporaneo osservato e valutato per almeno 4 anni." },
    { o: ["50", "20", "30"], c: 0, e: "Art. 28-bis: prima fascia 50% per concorso per titoli ed esami e 50% per sviluppo di carriera dalla seconda fascia, dopo almeno 5 anni di servizio nel ruolo." }
   ]},

  b_pa_contratti: { title: "Brano · Contratti pubblici (D.Lgs. 36/2023)",
   parts: ["Il Codice dei contratti pubblici (D.Lgs. ", 0, ") pone tre principi come chiave interpretativa di tutte le altre norme: il principio del ", 1, ", quello della fiducia e quello dell'accesso al mercato. Il RUP, previsto dall'art. ", 2, ", è nominato tra i dipendenti della stazione appaltante e l'incarico ", 3, ". Dal 1° gennaio 2026 la soglia europea per gli appalti di lavori nei settori ordinari è di ", 4, " euro. Prima di affidare un contratto la stazione appaltante adotta la ", 5, "."],
   gaps: [
    { o: ["36/2023", "50/2016", "82/2005"], c: 0, e: "D.Lgs. 36/2023, che ha sostituito il D.Lgs. 50/2016; il RUP è stato ritoccato dal D.Lgs. 209/2024." },
    { o: ["risultato", "profitto", "controllo"], c: 0, e: "Artt. 1-3: principio del risultato (tempestività e miglior rapporto qualità/prezzo), della fiducia e dell'accesso al mercato; chiave di lettura del Codice (art. 4)." },
    { o: ["15", "5", "50"], c: 0, e: "Art. 15: Responsabile unico del progetto." },
    { o: ["è obbligatorio e non può essere rifiutato", "è facoltativo", "richiede il consenso scritto dell'interessato"], c: 0, e: "L'ufficio di RUP è obbligatorio; il nominativo va indicato nel bando, nell'avviso o nell'invito." },
    { o: ["5.404.000", "140.000", "216.000"], c: 0, e: "5.404.000 € per lavori e concessioni; 140.000 € forniture e servizi per autorità governative centrali; 216.000 € per le amministrazioni sub-centrali." },
    { o: ["decisione a contrarre", "relazione sulla performance", "delibera di bilancio"], c: 0, e: "La decisione a contrarre individua elementi essenziali del contratto e criteri di selezione; nell'affidamento diretto indica anche contraente e ragioni della scelta." }
   ]},

  b_p_compl: { title: "Brano · Previdenza complementare",
   parts: ["Dal 1° luglio 2026, per i lavoratori dipendenti privati di prima assunzione (esclusi i domestici), vale l'adesione ", 0, " alla previdenza complementare, salvo rinuncia entro ", 1, " dall'assunzione. Chi aderisce compie una scelta ", 2, ", mentre il diniego è revocabile. Il Fondo tesoreria INPS raccoglie le quote di TFR dei lavoratori che non aderiscono, per i datori con almeno ", 3, " addetti. La RITA è l'erogazione frazionata della posizione individuale fino all'età della pensione di ", 4, "."],
   gaps: [
    { o: ["automatica", "volontaria", "obbligatoria per ogni dipendente"], c: 0, e: "L. 199/2025, art. 1, cc. 204-205: adesione automatica con rinuncia entro 60 giorni (delibera COVIP 19/6/2026)." },
    { o: ["60 giorni", "30 giorni", "6 mesi"], c: 0, e: "Il vecchio meccanismo del silenzio-assenso dava 6 mesi e vale per gli assunti fino al 30/6/2026; dal 1/7/2026 i giorni sono 60." },
    { o: ["irrevocabile", "revocabile in qualunque momento", "revocabile ogni anno"], c: 0, e: "L'adesione è irrevocabile; il diniego è invece sempre rivedibile." },
    { o: ["50", "15", "100"], c: 0, e: "Fondo tesoreria (dal 2007): datori con almeno 50 addetti (soglia rivista dalla legge di bilancio 2026)." },
    { o: ["vecchiaia", "anticipata", "invalidità"], c: 0, e: "RITA: rendita integrativa temporanea anticipata fino alla pensione di vecchiaia; è analoga all'APE del sistema obbligatorio." }
   ]},

  b_c_tecn: { title: "Brano · Tecnologie e sistemi informativi a supporto del controllo",
   parts: ["I sistemi informativi gestionali (", 0, ") utilizzano i dati raccolti dai sistemi transazionali (TPS). I sistemi ", 1, " integrano in un'unica piattaforma contabilità, personale, acquisti, patrimonio e controllo di gestione; un esempio nella PA è il sistema ", 2, " della Ragioneria generale dello Stato. Gli strumenti di ", 3, " trasformano i dati in dashboard e indicatori per confrontare risultati e obiettivi. L'analisi dei dati può essere descrittiva, diagnostica, predittiva e ", 4, ". L'intelligenza artificiale nel controllo è uno strumento di supporto e richiede ", 5, "."],
   gaps: [
    { o: ["MIS", "PDND", "SPID"], c: 0, e: "MIS = Management Information Systems; si alimentano dei dati dei TPS (Transaction Processing Systems)." },
    { o: ["ERP", "MIS", "TPS"], c: 0, e: "ERP = Enterprise Resource Planning: una piattaforma unica per più aree gestionali, riduce archivi separati." },
    { o: ["InIt", "SIUSS", "PDND"], c: 0, e: "InIt: sistema gestionale di contabilità pubblica della RGS; integra contabilità finanziaria, economico-patrimoniale e analitica per centri di costo." },
    { o: ["Business Intelligence", "break-even", "protocollo informatico"], c: 0, e: "La BI aggrega dati, costruisce indicatori e dashboard; utile al controllo di gestione per rilevare scostamenti." },
    { o: ["prescrittiva", "retrospettiva", "cronologica"], c: 0, e: "Descrittiva (cosa è successo), diagnostica (perché), predittiva (cosa potrebbe accadere), prescrittiva (quali azioni intraprendere)." },
    { o: ["supervisione umana", "la sostituzione della responsabilità amministrativa", "la decisione automatica definitiva"], c: 0, e: "L'IA supporta ma non sostituisce la responsabilità amministrativa e decisionale: servono qualità dei dati, trasparenza dei criteri, verificabilità, supervisione umana e rispetto della privacy." }
   ]},

  b_c_analitica: { title: "Brano · Contabilità analitica",
   parts: ["La contabilità analitica è un sistema di rilevazioni per la determinazione, il controllo e l'analisi di costi, ricavi e risultati di singole parti dell'organizzazione, come i ", 0, ". Nel sistema ", 1, " il piano dei conti è unico e diviso in due blocchi, collegati da conti di collegamento; nel sistema ", 2, " ci sono due contabilità autonome, con libro giornale e piano dei conti distinti. Nel duplice misto non c'è collegamento contabile formale e la contabilità analitica è extracontabile. La contabilità a costi consuntivi rileva i costi ", 3, " sostenuti."],
   gaps: [
    { o: ["centri di responsabilità e di costo", "soli organi di governo", "soli fornitori"], c: 0, e: "Oggetti di costo: prodotti, operazioni, centri di responsabilità e di costo." },
    { o: ["unico contabile", "duplice contabile", "duplice misto"], c: 0, e: "Sistema unico: un solo piano dei conti con due blocchi collegati." },
    { o: ["duplice contabile", "unico contabile", "duplice misto"], c: 0, e: "Sistema duplice: due contabilità autonome, ciascuna con proprio libro giornale e piano dei conti; quello analitico è più dettagliato." },
    { o: ["effettivamente", "preventivati", "standard"], c: 0, e: "Costi consuntivi = effettivamente sostenuti; costi standard = predeterminati. Con i soli costi variabili si arriva al margine lordo di contribuzione." }
   ]}
  });

  Object.assign(D.quesiti, {
   q_n_119: { t: "Una PA vorrebbe attribuire punteggi apicali all'80% dei dipendenti di una categoria. È compatibile con la L. 119/2026?",
    o: ["No: i punteggi apicali non possono superare il 30% delle valutazioni per categoria o qualifica", "Sì, se l'OIV dà parere favorevole", "Sì, purché l'amministrazione motivi la scelta"], c: 0,
    e: "Tetto del 30% per i punteggi apicali; il parere dell'OIV non è più vincolante e non può derogare al limite." },
   q_n_oiv: { t: "Secondo la L. 119/2026, il parere dell'OIV sull'adozione del sistema di misurazione e valutazione della performance è:",
    o: ["non più vincolante", "ancora vincolante", "abolito insieme all'OIV"], c: 0,
    e: "Art. 7 D.Lgs. 150/2009 modificato: l'OIV propone, non vincola; resta una delega al Governo per la revisione degli OIV." },
   q_n_rup: { t: "Un dipendente della stazione appaltante, in possesso dei requisiti, è nominato RUP e vorrebbe rifiutare l'incarico. Può?",
    o: ["No: l'ufficio di RUP è obbligatorio e non può essere rifiutato", "Sì, entro 10 giorni dalla nomina", "Sì, se ha più di 5 anni di servizio"], c: 0,
    e: "Art. 15 D.Lgs. 36/2023: ufficio obbligatorio; nomina dal responsabile dell'unità con potere di spesa." },
   q_n_compl: { t: "Un lavoratore del settore privato, assunto per la prima volta il 1° settembre 2026, non comunica nulla sulla previdenza complementare entro 60 giorni. Che cosa accade?",
    o: ["Scatta l'adesione automatica: TFR e contribuzione sono versati a una forma pensionistica individuata per legge", "Il TFR resta in azienda", "Può aderire solo dopo 6 mesi"], c: 0,
    e: "Dal 1/7/2026 vale l'adesione automatica salvo rinuncia entro 60 giorni (L. 199/2025). Il vecchio silenzio-assenso a 6 mesi riguarda gli assunti fino al 30/6/2026." },
   q_n_bi: { t: "Quale strumento trasforma i dati dei sistemi gestionali in dashboard e indicatori utili a confrontare risultati e obiettivi?",
    o: ["Business Intelligence", "Sistema transazionale (TPS)", "Archivio cartaceo"], c: 0,
    e: "La BI aggrega, confronta nel tempo e nel territorio e visualizza gli scostamenti; i TPS registrano le transazioni." }
  });

  /* ---------- scenari situazionali (testi originali; opzioni: più efficace, neutra, meno efficace) ---------- */
  Object.assign(D.scenari, {
   s_f: { title: "Passaggio di consegne",
    text: "Un collega viene trasferito in un altro ufficio e ti lascia in carico una ventina di pratiche, senza note né elenco. Alcune hanno scadenze vicine.",
    qs: [
     { t: "Qual è la prima mossa più efficace?",
       o: ["Chiedi al collega un incontro di consegna rapido e prepari un elenco con stato e scadenze di ogni pratica", "Parti dalla pratica in cima alla pila", "Aspetti che qualcuno si lamenti per decidere cosa trattare"], c: 0,
       e: "Più efficace: raccogliere informazioni e mappare le scadenze. Neutra: ordine casuale. Meno efficace: attendere solleciti." },
     { t: "Trovi una pratica con termine già scaduto. Che cosa fai?",
       o: ["La tratti subito, informi il dirigente e l'interessato e documenti l'accaduto", "La sistemi in silenzio, senza segnalare il ritardo", "Scrivi a tutto l'ufficio che la colpa è del collega trasferito"], c: 0,
       e: "Più efficace: responsabilità, trasparenza e tracciabilità. Meno efficace: scaricare la colpa e creare tensioni." },
     { t: "Il dirigente ti chiede perché i tempi si sono allungati. Come rispondi?",
       o: ["Illustri i dati, indichi le cause e proponi un piano di recupero con tempi", "Dici che farai del tuo meglio", "Neghi che ci siano ritardi"], c: 0,
       e: "Più efficace: dati e proposta. Neutra: generica e senza impegni. Meno efficace: negare l'evidenza." }
    ]},
   s_g: { title: "Nuovo applicativo",
    text: "Il tuo ufficio adotta un nuovo applicativo per l'istruttoria delle domande. Molti colleghi lo usano in modo diverso e i dati risultano incoerenti.",
    qs: [
     { t: "Che cosa proponi?",
       o: ["Una sessione di formazione mirata con esempi reali e una guida breve condivisa", "Di aspettare che i colleghi imparino con l'uso", "Di continuare di nascosto con il vecchio sistema in parallelo"], c: 0,
       e: "Più efficace: intervento concreto e collaborativo. Neutra: passiva. Meno efficace: elusione delle regole." },
     { t: "Scopri che un collega ha inserito dati errati per mesi. Come ti comporti?",
       o: ["Lo segnali al responsabile e proponi una correzione con controlli a campione", "Correggi tu i dati senza dire nulla", "Lo accusi apertamente durante la riunione"], c: 0,
       e: "Più efficace: segnalazione corretta e soluzione. Neutra: risolve ma non previene. Meno efficace: umiliare il collega." },
     { t: "Il responsabile chiede il tuo parere sull'applicativo. Che cosa rispondi?",
       o: ["Un feedback concreto, con casi ed esempi, punti di forza, criticità e proposte", "Che va bene così", "Che è inutilizzabile, senza spiegare perché"], c: 0,
       e: "Più efficace: costruttivo e documentato. Neutra: non aiuta. Meno efficace: critica generica." }
    ]},
   s_h: { title: "Informazione sbagliata a un utente",
    text: "Dopo aver risposto a un utente, ti accorgi di avergli fornito un'informazione errata sui requisiti di una prestazione.",
    qs: [
     { t: "Che cosa fai subito?",
       o: ["Lo ricontatti per rettificare e spiegare l'errore", "Speri che non agisca sulla base dell'informazione", "Aspetti che sia lui a scoprire l'errore"], c: 0,
       e: "Più efficace: correggere subito. Neutra e meno efficace: lasciare che l'errore produca effetti." },
     { t: "L'utente aveva già presentato una domanda sbagliata a causa dell'errore. Come procedi?",
       o: ["Informi il responsabile, verifichi come tutelare l'utente (per esempio nuova domanda) e documenti l'accaduto", "Lasci che sia l'utente a risolvere", "Gli dici che ha frainteso lui"], c: 0,
       e: "Più efficace: responsabilità e tutela dell'utenza. Meno efficace: scaricare la colpa." },
     { t: "Come eviti che si ripeta?",
       o: ["Proponi di aggiornare una scheda informativa o checklist condivisa dall'ufficio", "Prometti a te stessa di stare più attenta", "Eviti in futuro di rispondere ai quesiti"], c: 0,
       e: "Più efficace: soluzione strutturale. Neutra: dipende solo dall'attenzione individuale. Meno efficace: evitare il problema." }
    ]},
   s_i: { title: "Priorità e scadenze",
    text: "Il dirigente ti assegna un'attività urgente mentre hai già tre scadenze nella stessa settimana. Nello stesso momento un collega ti chiede un favore personale che richiede tempo.",
    qs: [
     { t: "Come gestisci l'attività urgente?",
       o: ["Rappresenti al dirigente il quadro delle scadenze e concordi le priorità", "Accetti tutto sperando di farcela", "Rifiuti l'attività senza spiegare"], c: 0,
       e: "Più efficace: trasparenza e priorità condivise. Neutra: rischiosa. Meno efficace: rifiuto senza motivazione." },
     { t: "E la richiesta del collega?",
       o: ["Spieghi che al momento non puoi e proponi di risentirvi dopo le scadenze", "Lo aiuti nei ritagli di tempo", "Ignori la richiesta"], c: 0,
       e: "Più efficace: chiarezza e relazione. Neutra: aggrava il carico. Meno efficace: ignorare." },
     { t: "A metà settimana capisci che una scadenza è a rischio. Che cosa fai?",
       o: ["Avvisi subito il dirigente con una proposta (riassegnazione o, dove possibile, proroga motivata)", "Lavori la sera in silenzio", "Aspetti che la scadenza arrivi"], c: 0,
       e: "Più efficace: segnalazione tempestiva con soluzione. Neutra: non risolve il problema organizzativo. Meno efficace: inerzia." }
    ]}
  });

  /* quesiti di allenamento derivati dagli scenari (testo dello scenario + domanda) */
  ['s_f', 's_g', 's_h', 's_i'].forEach(function (id) {
    D.scenari[id].qs.forEach(function (q, i) {
      D.quesiti['q_sit_' + id + '_' + i] = { t: '<i>' + D.scenari[id].title + ':</i> ' + D.scenari[id].text + ' <b>' + q.t + '</b>', o: q.o, c: 0, e: q.e };
    });
  });

  D.sims.push({
    id: 's4', title: 'Simulazione 4 · Novità 2026, contratti pubblici, previdenza complementare',
    desc: 'Tre brani (legge Merito, contratti pubblici, previdenza complementare), cinque quesiti e due scenari situazionali.',
    brani: ['b_nov_119', 'b_pa_contratti', 'b_p_compl'], quesiti: ['q_n_119', 'q_n_oiv', 'q_n_rup', 'q_n_compl', 'q_n_bi'], scenari: ['s_f', 's_i']
  });
})();
