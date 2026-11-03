/* PECS — banca dati, parte 4: 10 simulazioni complete.
   Ogni simulazione = 3 brani, ciascuno con i propri 2 quesiti (correzione sotto il brano) + 2 scenari operativi.
   Carica DOPO pecs-data.js, pecs-data2.js, pecs-data3.js. Risposta corretta sempre per prima (c:0): il motore mescola le opzioni. */
(function () {
  var D = window.PECS_DATA;
  var Q = D.quesiti;
  function q(id, t, o, e) { Q[id] = { t: t, o: o, c: 0, e: e }; }

  q('q_y_proc2', "Qual è il termine generale di conclusione del procedimento amministrativo, se non è previsto un termine diverso?", ["30 giorni", "60 giorni", "90 giorni"], "Art. 2 L. 241/1990: 30 giorni; fino a 90 per complessità, mai oltre 180 salvo eccezioni.");
  q('q_y_licenz2', "Che cosa significa «obbligo di repêchage»?", ["Verificare, prima di licenziare per giustificato motivo oggettivo, se il lavoratore può essere ricollocato in mansioni disponibili", "Pagare il preavviso in anticipo", "Riassumere il lavoratore entro un anno dal licenziamento"], "Il repêchage è condizione di legittimità del licenziamento per giustificato motivo oggettivo.");
  q('q_y_perf2', "Entro quando va adottata la Relazione sulla performance?", ["Entro il 30 giugno", "Entro il 31 gennaio", "Entro il 31 dicembre"], "Art. 10 D.Lgs. 150/2009: entro il 30 giugno; nel PIAO confluisce solo il Piano, la Relazione resta autonoma.");
  q('q_y_pens2', "Nel sistema contributivo la pensione si calcola moltiplicando il montante contributivo per:", ["Il coefficiente di trasformazione", "Il tasso di sostituzione", "Il massimale contributivo"], "Pensione = montante × coefficiente di trasformazione (tabella A L. 335/1995), aggiornato ogni due anni.");
  q('q_y_nis2a', "According to the NIS2 rules, an entity that suffers a significant incident must send its notification within:", ["72 hours (after an early warning within 24 hours)", "24 hours only", "one month"], "Pre-notifica in 24 ore, notifica in 72 ore, relazione finale entro un mese (D.Lgs. 138/2024).");
  q('q_y_nis2b', "NIS2 applies to which categories of entities?", ["Essential and important entities", "Only public administrations", "Only telecommunications operators"], "Direttiva UE 2022/2555: soggetti essenziali e soggetti importanti.");
  q('q_y_pub2', "Quali termini del procedimento disciplinare nel pubblico impiego sono perentori secondo l'Errata Corrige?", ["30 giorni (contestazione) e 120 giorni (conclusione)", "Tutti i termini previsti", "Solo i 180 giorni"], "Errata Corrige: perentori solo i 30 giorni per la contestazione e i 120 per la conclusione; la violazione degli altri non causa decadenza o nullità.");
  q('q_y_pub3', "Quanti differenziali economici di professionalità si possono ottenere al massimo nell'Area (CCNL Funzioni Centrali 2019-2021)?", ["5, da 2.250 euro annui", "3, da 2.250 euro annui", "Nessun limite"], "Errata Corrige: massimo 5 differenziali da 2.250 euro annui, per la permanenza nell'Area.");
  q('q_y_contr2', "Quale principio dell'art. 1 D.Lgs. 36/2023 richiama tempestività e miglior rapporto qualità/prezzo?", ["Il principio del risultato", "Il principio della fiducia", "Il principio di rotazione"], "Artt. 1-3: risultato, fiducia, accesso al mercato; il risultato è chiave di lettura del Codice.");
  q('q_y_compl2', "Che cos'è la RITA nella previdenza complementare?", ["Una rendita integrativa temporanea anticipata, fino alla pensione di vecchiaia", "Un contributo per il lavoro agile", "Una prestazione INAIL per infortunio"], "RITA = rendita integrativa temporanea anticipata; analoga all'APE del sistema obbligatorio.");
  q('q_y_silenzio2', "Il silenzio assenso dell'art. 20 L. 241/1990 opera:", ["Nei procedimenti ad istanza di parte, se la PA non comunica il rigetto né indice una conferenza di servizi entro il termine", "In tutti i procedimenti, anche d'ufficio", "Soltanto se lo prevede espressamente ogni singola legge di settore"], "Regola generale dal 2005 per i procedimenti su istanza, con le eccezioni dell'art. 20, c. 4.");
  q('q_y_malattia2', "Per la visita fiscale, le fasce di reperibilità dei dipendenti pubblici sono:", ["10-12 e 17-19, tutti i giorni, festivi compresi", "9-13 e 15-18, esclusi i festivi", "Solo 9-13"], "Dopo TAR Lazio 16305/2023 le fasce nel pubblico sono uguali al privato (messaggio INPS 4640/2023).");
  q('q_y_costi2', "I costi comuni dello Stato sono:", ["Oneri riferibili all'amministrazione statale nel suo complesso e non al singolo centro di costo", "I costi di personale di un singolo ufficio", "Gli oneri finanziari di un ente"], "Costi propri = costi di funzionamento dei centri; costi comuni = riferibili allo Stato nel suo insieme.");
  q('q_y_mans2', "Nel pubblico impiego la disciplina delle mansioni è dettata da:", ["Art. 52 D.Lgs. 165/2001", "Art. 2103 c.c.", "Art. 2094 c.c."], "Nel pubblico impiego vale l'art. 52 D.Lgs. 165/2001, non l'art. 2103 c.c.");
  q('q_y_inail2', "L'indennità INAIL per inabilità temporanea assoluta spetta dal:", ["Quarto giorno successivo all'infortunio", "Primo giorno", "Decimo giorno"], "I primi giorni sono di carenza, a carico del datore; l'INAIL paga dal quarto giorno successivo.");
  q('q_y_priv1', "Quale figura ha compiti di informazione, consulenza e sorveglianza sull'applicazione del GDPR in un ente?", ["Il DPO (Responsabile della protezione dei dati)", "Il RUP", "L'RPCT"], "L'RPCT riguarda anticorruzione e trasparenza, il RUP i contratti pubblici.");
  q('q_y_priv2', "Quando è richiesta la valutazione d'impatto (DPIA)?", ["Per i trattamenti che possono presentare un rischio elevato per i diritti e le libertà", "Per qualunque trattamento di dati", "Solo per i dati dei dipendenti"], "DPIA = Data Protection Impact Assessment, per trattamenti ad alto rischio.");
  q('q_y_disab2', "Un datore con 40 dipendenti quanti lavoratori con disabilità deve assumere?", ["Due", "Uno", "Tre"], "Da 36 a 50 dipendenti: due lavoratori.");
  q('q_y_cig1', "A quanto ammonta l'integrazione salariale per le ore non lavorate?", ["All'80% della retribuzione globale", "Al 100% della retribuzione", "Al 60% della retribuzione"], "80% della retribuzione globale, entro il massimale.");
  q('q_y_cig2', "Quale anzianità minima di effettivo lavoro serve per le integrazioni salariali?", ["30 giorni presso l'unità produttiva", "90 giorni", "12 mesi"], "Art. 1, c. 2, D.Lgs. 148/2015: 30 giorni di anzianità di effettivo lavoro.");
  q('q_y_motiv2', "Per «presupposti di fatto» nella motivazione si intendono:", ["Gli elementi e i dati fattuali acquisiti in istruttoria e valutati dalla PA", "Le norme applicate al caso", "Le opinioni del dirigente"], "I presupposti di fatto vengono dall'istruttoria; le ragioni giuridiche sono le norme applicate.");
  q('q_y_tfr1', "In quanto tempo si prescrive il diritto al TFR?", ["5 anni dalla cessazione", "10 anni", "3 anni"], "Il TFR si prescrive in 5 anni dalla cessazione del rapporto.");
  q('q_y_tfr2', "L'anticipazione sul TFR durante il rapporto può essere chiesta:", ["Una sola volta, entro il 70% del TFR maturato", "Più volte, fino al 100%", "Solo alla cessazione"], "Una sola volta in costanza di rapporto, non oltre il 70%.");
  q('q_y_spe1', "Con quale cadenza si adeguano i requisiti pensionistici alla speranza di vita?", ["Biennale", "Annuale", "Triennale"], "Cadenza biennale, sulla base dei dati ISTAT.");
  q('q_y_spe2', "Qual è l'incremento massimo per un singolo adeguamento alla speranza di vita?", ["Tre mesi", "Sei mesi", "Un anno"], "Massimo tre mesi; l'eccedenza è recuperata negli adeguamenti successivi.");
  q('q_y_dir1', "Quale quota dei posti di dirigente di seconda fascia è coperta tramite corso-concorso della SNA?", ["50%", "30%", "20%"], "Art. 28 D.Lgs. 165/2001: 50% corso-concorso SNA.");
  q('q_y_dir2', "Quale quota dei posti di seconda fascia è riservata allo sviluppo di carriera?", ["30%", "50%", "10%"], "30% per sviluppo di carriera con valutazione comparativa, prova scritta e orale.");
  q('q_y_tecn2', "Quale tipo di analisi dei dati risponde alla domanda «quali azioni intraprendere?»?", ["Prescrittiva", "Descrittiva", "Diagnostica"], "Descrittiva = cosa è successo; diagnostica = perché; predittiva = cosa può accadere; prescrittiva = che cosa fare.");

  /* nuovi scenari (Sezione B) */
  var S = D.scenari;
  S.s_j = { title: "Richiesta di dati personali da un collega",
    text: "Un collega di un altro ufficio ti chiede per e-mail l'indirizzo di residenza e il recapito telefonico di un utente, «per sbrigare più in fretta una pratica». Non è assegnatario della pratica.",
    qs: [
     { t: "Come rispondi?", o: ["Verifichi se la richiesta ha una base normativa e una finalità legittima; altrimenti non comunichi i dati", "Invii i dati, è un collega", "Ignori l'e-mail"], c: 0, e: "Più efficace: minimizzazione e finalità. Neutra: ignorare non risolve. Meno efficace: comunicare senza verifica." },
     { t: "Il collega insiste dicendo che c'è urgenza. Che cosa fai?", o: ["Gli suggerisci di chiedere l'assegnazione della pratica o la richiesta formale tramite il responsabile", "Cedi per evitare il conflitto", "Gli invii i dati ma in forma parziale"], c: 0, e: "Più efficace: canale formale. Neutra: la comunicazione parziale è comunque un trattamento non verificato. Meno efficace: cedere." },
     { t: "Dopo l'episodio, che cosa è utile fare?", o: ["Segnalare al responsabile o al DPO la richiesta anomala", "Dimenticare l'accaduto", "Avvisare l'utente senza coinvolgere nessuno"], c: 0, e: "Più efficace: tracciare e coinvolgere i presìdi privacy." }
    ]};
  S.s_k = { title: "Errore nel calcolo di una prestazione già pagata",
    text: "Controllando una pratica chiusa da settimane ti accorgi che un importo è stato calcolato in eccesso: l'utente ha già incassato la somma.",
    qs: [
     { t: "Qual è il primo passo?", o: ["Verifichi con certezza l'errore e lo segnali subito al responsabile", "Lasci correre: la pratica è chiusa", "Ricalcoli e correggi in silenzio il dato"], c: 0, e: "Più efficace: verifica e trasparenza. Neutra: lasciar correre. Meno efficace: correggere senza traccia." },
     { t: "Come ti comporti con l'utente?", o: ["Contribuisci a una comunicazione chiara e motivata, secondo le procedure dell'ente", "Lo chiami e gli dici di restituire la somma", "Non lo avvisi finché non te lo chiede"], c: 0, e: "Più efficace: comunicazione formale e motivata nel rispetto del procedimento." },
     { t: "Come eviti che l'errore si ripeta?", o: ["Proponi un controllo a campione o una verifica nel flusso di lavoro", "Ti prometti di fare più attenzione", "Nulla: è un caso isolato"], c: 0, e: "Più efficace: soluzione strutturale." }
    ]};
  S.s_l = { title: "Utente in tensione allo sportello",
    text: "Un utente si presenta molto agitato: attende da mesi una prestazione e alza la voce contro di te davanti ad altre persone.",
    qs: [
     { t: "Come reagisci nell'immediato?", o: ["Mantieni calma e tono fermo, ascolti e proponi di spostarvi in un luogo riservato", "Rispondi con lo stesso tono", "Chiudi lo sportello"], c: 0, e: "Più efficace: de-escalation. Neutra: chiudere. Meno efficace: rispondere con aggressività." },
     { t: "Come gestisci la sua pratica?", o: ["Verifichi lo stato e spieghi con chiarezza tempi e passaggi", "Prometti una data che non puoi garantire", "Lo rinvii al sito web"], c: 0, e: "Più efficace: informazioni verificate. Meno efficace: promesse non garantite." },
     { t: "Se l'utente continua a minacciare?", o: ["Interrompi il colloquio e informi il responsabile secondo le procedure di sicurezza", "Continui finché non si calma", "Lo accompagni fuori da solo"], c: 0, e: "Più efficace: tutela di sé e dell'ufficio con segnalazione." }
    ]};
  S.s_m = { title: "Carico di lavoro sbilanciato nel gruppo",
    text: "Nel tuo gruppo un collega ha molte più pratiche degli altri ed è in ritardo. Il responsabile non se n'è accorto.",
    qs: [
     { t: "Che cosa fai?", o: ["Proponi al responsabile, dati alla mano, una redistribuzione del carico", "Aspetti che il problema esploda", "Prendi le pratiche del collega di nascosto"], c: 0, e: "Più efficace: dati e canale gerarchico. Meno efficace: soluzioni non trasparenti." },
     { t: "Il collega non vuole ammettere la difficoltà. Come ti comporti?", o: ["Gli offri aiuto concreto e ne parli in modo riservato", "Lo critichi davanti al gruppo", "Segnali subito a tutti che è inefficiente"], c: 0, e: "Più efficace: collaborazione e rispetto." },
     { t: "Come si previene il problema in futuro?", o: ["Con un monitoraggio periodico condiviso dell'avanzamento delle pratiche", "Con un richiamo generale", "Non si può prevenire"], c: 0, e: "Più efficace: strumento strutturale condiviso." }
    ]};
  S.s_n = { title: "Richiesta di accesso con terzi coinvolti",
    text: "Un utente chiede copia di un documento che contiene anche dati di un'altra persona. Il termine per rispondere scade tra pochi giorni.",
    qs: [
     { t: "Che cosa verifichi per prima cosa?", o: ["Il tipo di accesso richiesto e la presenza di controinteressati", "Solo che la domanda sia firmata", "Niente: invii tutto"], c: 0, e: "Più efficace: valutare tipologia di accesso e controinteressati (L. 241/1990, D.Lgs. 33/2013)." },
     { t: "Se ci sono controinteressati, che cosa fai?", o: ["Segui la procedura di comunicazione e valuti le loro eventuali opposizioni nei termini", "Neghi l'accesso senza motivare", "Oscuri i dati di nascosto senza avvisare"], c: 0, e: "Più efficace: contraddittorio e motivazione." },
     { t: "Come tratti la scadenza?", o: ["Verifichi i termini (30 giorni) e, se serve, informi il responsabile in tempo", "Rispondi dopo la scadenza", "Estendi il termine da solo"], c: 0, e: "Più efficace: rispetto dei termini e segnalazione tempestiva." }
    ]};

  /* 10 simulazioni: ogni unità = brano + 2 quesiti sul brano */
  function U(b, q1, q2) { return { b: b, q: [q1, q2] }; }
  D.sims = [
   { id: 's1', title: 'Simulazione 1 · Procedimento, licenziamento, NASpI', desc: 'Procedimento amministrativo, licenziamento e tutele, NASpI. Due scenari: pratiche in scadenza e accesso.',
     units: [U('b_pa_proc', 'q_pa_10bis', 'q_y_proc2'), U('b_l_licenz', 'q_l_collettivo', 'q_y_licenz2'), U('b_p_naspi', 'q_p_naspi68', 'q_p_naspi_dim')], scenari: ['s_a', 's_b'] },
   { id: 's2', title: 'Simulazione 2 · Accesso, ADI, performance', desc: 'Accesso e trasparenza, ADI e contenzioso previdenziale, performance e PIAO.',
     units: [U('b_pa_accesso', 'q_pa_foia', 'q_pa_difensore'), U('b_p_adi', 'q_p_adi', 'q_p_silenzio'), U('b_c_perf', 'q_c_relazione', 'q_y_perf2')], scenari: ['s_c', 's_e'] },
   { id: 's3', title: 'Simulazione 3 · Pubblico impiego, pensioni, inglese (NIS2)', desc: 'Disciplina nel pubblico impiego, pensioni e un brano in inglese sulla sicurezza informatica.',
     units: [U('b_l_pubblico', 'q_y_pub2', 'q_y_pub3'), U('b_p_pens', 'q_p_dini', 'q_y_pens2'), U('b_e_nis2', 'q_y_nis2a', 'q_y_nis2b')], scenari: ['s_d', 's_j'] },
   { id: 's4', title: 'Simulazione 4 · Novità 2026, contratti pubblici, previdenza complementare', desc: 'Legge Merito 119/2026, D.Lgs. 36/2023, previdenza complementare.',
     units: [U('b_nov_119', 'q_n_119', 'q_n_oiv'), U('b_pa_contratti', 'q_n_rup', 'q_y_contr2'), U('b_p_compl', 'q_n_compl', 'q_y_compl2')], scenari: ['s_f', 's_i'] },
   { id: 's5', title: 'Simulazione 5 · Controllo di gestione, silenzio assenso, malattia', desc: 'D.Lgs. 286/1999, silenzio assenso e preavviso di rigetto, comporto e visita fiscale.',
     units: [U('b_c_cdg', 'q_x_cdg', 'q_c_diff'), U('b_pa_silenzio', 'q_x_10bis', 'q_y_silenzio2'), U('b_l_malattia', 'q_x_comporto', 'q_y_malattia2')], scenari: ['s_g', 's_h'] },
   { id: 's6', title: 'Simulazione 6 · Budget, costi, mansioni', desc: 'Fasi del controllo, budget e reporting; contabilità analitica e costi; mansioni e jus variandi.',
     units: [U('b_c_fasi', 'q_x_budget', 'q_x_rep'), U('b_c_costi', 'q_x_costi', 'q_y_costi2'), U('b_l_mansioni', 'q_l_mansioni', 'q_y_mans2')], scenari: ['s_k', 's_l'] },
   { id: 's7', title: 'Simulazione 7 · Autotutela, contratto a termine, INAIL', desc: 'Validità degli atti e autotutela, contratto a termine, infortuni e malattie professionali.',
     units: [U('b_pa_atti', 'q_pa_21non', 'q_pa_motiv'), U('b_l_termine', 'q_l_termine', 'q_l_pa'), U('b_p_inail', 'q_x_franchigia', 'q_y_inail2')], scenari: ['s_m', 's_n'] },
   { id: 's8', title: 'Simulazione 8 · Privacy, assunzioni obbligatorie, CIG', desc: 'GDPR, quote di riserva per i disabili, integrazioni salariali.',
     units: [U('b_pa_privacy', 'q_y_priv1', 'q_y_priv2'), U('b_l_disabili', 'q_x_quote', 'q_y_disab2'), U('b_p_cig', 'q_y_cig1', 'q_y_cig2')], scenari: ['s_e', 's_k'] },
   { id: 's9', title: 'Simulazione 9 · Motivazione, TFR, speranza di vita', desc: 'Motivazione e responsabile del procedimento, TFR e dimissioni, adeguamento dei requisiti pensionistici.',
     units: [U('b_pa_motiv', 'q_x_motiv', 'q_y_motiv2'), U('b_l_tfr', 'q_y_tfr1', 'q_y_tfr2'), U('b_p_speranza', 'q_y_spe1', 'q_y_spe2')], scenari: ['s_b', 's_m'] },
   { id: 's10', title: 'Simulazione 10 · Dirigenza, tecnologie, CAD', desc: 'Accesso alla dirigenza (legge Merito), sistemi informativi e BI, CAD e firme digitali.',
     units: [U('b_nov_dir', 'q_y_dir1', 'q_y_dir2'), U('b_c_tecn', 'q_n_bi', 'q_y_tecn2'), U('b_i_cad', 'q_i_firma', 'q_i_pagopa')], scenari: ['s_h', 's_n'] }
  ];
})();
