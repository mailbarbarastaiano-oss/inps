/* PECS — banca dati, parte 3: adempimenti e retribuzione, malattia e TFR, adeguamento alla speranza di vita, AUU, CIG, INAIL, ispezioni.
   Brani originali costruiti sugli argomenti ricorrenti nelle prove tipo (controllati con le soluzioni di un testo di preparazione fotografato dalla candidata)
   e con le dispense e l'Errata Corrige. Risposta corretta sempre per prima (c:0). */
(function () {
  var D = window.PECS_DATA;
  Object.assign(D.brani, {

  b_l_occasionali: { title: "Brano · Prestazioni occasionali",
   parts: ["Le prestazioni di lavoro occasionale si gestiscono tramite un'apposita piattaforma dell'", 0, ". Il limite massimo di durata verso lo stesso utilizzatore nell'anno civile è di ", 1, "; se è superato, il rapporto si trasforma in lavoro a tempo pieno e indeterminato. L'acquisizione può avvenire con il libretto di famiglia, utilizzabile da ", 2, ", oppure con il contratto di prestazione occasionale. Il compenso al prestatore è di regola pagato dall'", 3, "."],
   gaps: [
    { o: ["INPS", "INAIL", "ANPAL"], c: 0, e: "La piattaforma è dell'INPS: registrazione di utilizzatori e prestatori, erogazione dei compensi e valorizzazione della posizione contributiva." },
    { o: ["280 ore", "300 ore", "150 ore"], c: 0, e: "280 ore annue verso lo stesso utilizzatore; oltre, il rapporto diventa a tempo pieno e indeterminato." },
    { o: ["persone fisiche non nell'esercizio di attività professionale o d'impresa", "soli imprenditori", "soli liberi professionisti"], c: 0, e: "Libretto di famiglia: persone fisiche fuori dall'attività professionale o d'impresa. Contratto di prestazione occasionale: gli altri utilizzatori nei limiti di legge." },
    { o: ["INPS", "datore di lavoro tramite F24", "INAIL"], c: 0, e: "Il pagamento avviene tramite la piattaforma INPS con sistema di pagamento elettronico." }
   ]},

  b_l_comunic: { title: "Brano · Comunicazioni obbligatorie del datore di lavoro",
   parts: ["La comunicazione di assunzione del lavoratore subordinato va inviata al ", 0, " entro il giorno ", 1, " l'instaurazione del rapporto (comunicazione preventiva). Le agenzie di somministrazione possono inviarla entro il ", 2, " giorno del mese successivo. La comunicazione di cessazione va effettuata entro ", 3, " giorni dall'evento. La comunicazione di assunzione ", 4, " gli obblighi di comunicazione verso INPS e INAIL."],
   gaps: [
    { o: ["Ministero del Lavoro (sistema informatico delle comunicazioni obbligatorie)", "INPS", "Ispettorato del Lavoro"], c: 0, e: "La comunicazione d'assunzione è unica e telematica, inviata al sistema del Ministero del Lavoro; vale anche verso gli altri enti." },
    { o: ["antecedente", "successivo", "stesso"], c: 0, e: "È comunicazione preventiva (o anticipata): entro il giorno antecedente l'instaurazione." },
    { o: ["ventesimo", "decimo", "quinto"], c: 0, e: "Per le agenzie di somministrazione: entro il ventesimo giorno del mese successivo alla data di assunzione." },
    { o: ["5", "15", "30"], c: 0, e: "Cessazione del rapporto: comunicazione entro 5 giorni dal verificarsi dell'evento." },
    { o: ["assolve", "non assolve", "sostituisce soltanto"], c: 0, e: "La comunicazione unica assolve anche gli obblighi verso INPS, INAIL e altri enti." }
   ]},

  b_l_disabili: { title: "Brano · Assunzioni obbligatorie di lavoratori con disabilità",
   parts: ["I datori che occupano almeno 15 dipendenti devono assumere lavoratori con disabilità: con più di 50 dipendenti nella misura del ", 0, " dei lavoratori occupati; da 36 a 50 dipendenti ", 1, " lavoratori; da 15 a 35 dipendenti ", 2, " lavoratore. La richiesta di assunzione agli uffici competenti va presentata entro ", 3, " giorni dal momento in cui scatta l'obbligo."],
   gaps: [
    { o: ["7%", "5%", "10%"], c: 0, e: "Quota di riserva del 7% oltre i 50 dipendenti (L. 68/1999)." },
    { o: ["2", "3", "5"], c: 0, e: "Da 36 a 50 dipendenti: 2 lavoratori." },
    { o: ["1", "2", "nessun"], c: 0, e: "Da 15 a 35 dipendenti: un solo lavoratore. Con 20 dipendenti, dunque, soltanto uno." },
    { o: ["60", "30", "90"], c: 0, e: "Richiesta di assunzione entro 60 giorni da quando scatta l'obbligo." }
   ]},

  b_l_retrib: { title: "Brano · Retribuzione",
   parts: ["Il diritto alla retribuzione nasce a lavoro compiuto, secondo il principio della ", 0, ". Il sistema classico è la retribuzione a ", 1, ", in cui l'orario di lavoro fa da base; un altro sistema fondamentale è il ", 2, ", che tiene conto del risultato e del rendimento. Quando il cottimo è una maggiorazione della paga-base si parla di cottimo ", 3, ". Il termine di pagamento è di regola stabilito dal ", 4, "."],
   gaps: [
    { o: ["postnumerazione", "prenumerazione", "anticipazione"], c: 0, e: "Postnumerazione: la retribuzione è dovuta dopo la prestazione." },
    { o: ["tempo", "provvigione", "partecipazione agli utili"], c: 0, e: "Retribuzione a tempo: l'orario di lavoro è la base di calcolo." },
    { o: ["cottimo", "premio di produzione", "provvigione"], c: 0, e: "Cottimo: retribuzione commisurata al risultato e alla produttività del lavoro." },
    { o: ["misto", "puro", "aggiuntivo"], c: 0, e: "Cottimo misto = maggiorazione della paga-base; cottimo puro = unico criterio, per esempio nel lavoro a domicilio." },
    { o: ["CCNL", "datore di lavoro, unilateralmente", "giudice"], c: 0, e: "In mancanza del CCNL decidono gli usi." }
   ]},

  b_l_malattia: { title: "Brano · Malattia e periodo di comporto",
   parts: ["Durante la malattia il lavoratore non può essere licenziato per tutto il cd. periodo di ", 0, ". L'indennità giornaliera di malattia per operai dell'industria, dell'artigianato, dell'agricoltura e per operai e impiegati del commercio e del terziario è a carico dell'", 1, ", mentre per gli impiegati dell'industria il trattamento è di regola interamente a carico del ", 2, ". Le fasce di reperibilità per la visita fiscale sono ", 3, "."],
   gaps: [
    { o: ["comporto", "garantito", "coperto"], c: 0, e: "Periodo di comporto: durata massima della conservazione del posto durante la malattia." },
    { o: ["INPS", "INAIL", "INL"], c: 0, e: "L'indennità di malattia è a carico dell'INPS per le categorie indicate; l'INAIL riguarda infortuni e malattie professionali." },
    { o: ["datore di lavoro", "Comune", "ANPAL"], c: 0, e: "Impiegati dell'industria e, più in generale, nei casi previsti da legge o CCNL: trattamento a carico del datore." },
    { o: ["10-12 e 17-19, festivi compresi", "9-13 e 15-18", "solo la mattina"], c: 0, e: "Dopo TAR Lazio 16305/2023 le fasce nel pubblico sono uguali al privato: 10-12 e 17-19, festivi compresi (messaggio INPS 4640/2023)." }
   ]},

  b_l_tfr: { title: "Brano · TFR e dimissioni",
   parts: ["Il TFR spetta in ogni caso di cessazione del rapporto, qualunque sia la tipologia di contratto, e si prescrive in ", 0, " dalla cessazione. Durante il rapporto si può chiedere un'anticipazione, per una sola volta, entro il ", 1, " del TFR maturato alla data della richiesta. Le dimissioni si presentano ", 2, " con i moduli del Ministero del Lavoro; l'assenza ingiustificata oltre ", 3, " giorni (o il diverso termine del CCNL) porta alla risoluzione per volontà del lavoratore (dimissioni di fatto)."],
   gaps: [
    { o: ["5 anni", "10 anni", "3 anni"], c: 0, e: "Il TFR si prescrive in 5 anni dalla cessazione." },
    { o: ["70%", "50%", "30%"], c: 0, e: "Anticipazione sul TFR: non oltre il 70% di quello maturato alla data della richiesta, per una sola volta in costanza di rapporto." },
    { o: ["telematicamente", "a voce", "con raccomandata"], c: 0, e: "Procedura telematica, salve eccezioni (per esempio le dimissioni di fatto)." },
    { o: ["15", "30", "10"], c: 0, e: "L. 203/2024: assenza oltre il termine del CCNL o, in mancanza, oltre 15 giorni; il datore comunica all'ITL. L'effetto risolutivo è facoltà del datore e non opera con forza maggiore o fatto imputabile al datore." }
   ]},

  b_p_contrib2: { title: "Brano · Finanziamento del sistema e automaticità",
   parts: ["Lo Stato partecipa al finanziamento del sistema previdenziale con la ", 0, ", cioè assumendo in proprio parte della contribuzione. Per i lavoratori dipendenti privati iscritti all'assicurazione generale obbligatoria i contributi IVS affluiscono al ", 1, ". Il principio dell'automaticità delle prestazioni (art. 2116 c.c.) garantisce le prestazioni anche se il datore non ha versato, nei limiti della ", 2, " dei contributi."],
   gaps: [
    { o: ["fiscalizzazione degli oneri sociali", "perequazione dei trattamenti", "sostenibilità finanziaria"], c: 0, e: "Fiscalizzazione: lo Stato si fa carico di una parte degli oneri sociali." },
    { o: ["Fondo pensioni lavoratori dipendenti (FPLD)", "Fondo previdenziale obbligatorio", "Fondo IVS INPS"], c: 0, e: "I contributi IVS dei dipendenti privati affluiscono al FPLD." },
    { o: ["prescrizione", "decadenza", "compensazione"], c: 0, e: "Se i contributi sono prescritti l'INPS può non corrispondere in tutto o in parte le prestazioni; resta la rendita vitalizia (art. 13 L. 1338/1962)." }
   ]},

  b_p_speranza: { title: "Brano · Adeguamento dei requisiti alla speranza di vita",
   parts: ["L'adeguamento dei requisiti pensionistici alla speranza di vita opera in base alle rilevazioni dell'", 0, ", con cadenza ", 1, ". L'aumento si applica in proporzione nel limite massimo di ", 2, " mesi; se l'incremento è superiore, la parte eccedente è ", 3, " in sede di adeguamento successivo."],
   gaps: [
    { o: ["ISTAT", "INPS", "Eurostat"], c: 0, e: "Rilevazioni ISTAT sulla media della popolazione residente in Italia." },
    { o: ["biennale", "annuale", "triennale"], c: 0, e: "Cadenza biennale (dopo la Fornero); per il 2027-2028 la L. 199/2025 fissa 67 anni e 1 mese e poi 67 anni e 3 mesi." },
    { o: ["tre", "sei", "due"], c: 0, e: "Limite massimo di tre mesi per singolo adeguamento." },
    { o: ["recuperata", "annullata", "rimborsata"], c: 0, e: "La parte oltre i tre mesi è recuperata negli adeguamenti successivi." }
   ]},

  b_p_contributivi: { title: "Brano · Contributivi puri",
   parts: ["Sono contributivi puri i lavoratori con primo accredito contributivo dal ", 0, ". La pensione di vecchiaia contributiva richiede, oltre ai requisiti ordinari, un importo almeno pari a una misura minima detta importo ", 1, ", pari all'assegno sociale. Con almeno ", 2, " anni di età e 5 anni di contribuzione effettiva si ", 3, " dall'importo soglia."],
   gaps: [
    { o: ["1° gennaio 1996", "1° gennaio 1995", "1° gennaio 2012"], c: 0, e: "Contributivi puri: primo accredito dal 1996 (riforma Dini)." },
    { o: ["soglia", "massimale", "minimale"], c: 0, e: "Importo soglia: misura minima del trattamento maturato; vecchiaia ≥ 1× assegno sociale, anticipata contributiva a 64 anni ≥ 3×." },
    { o: ["71", "67", "64"], c: 0, e: "A 71 anni con 5 anni di contribuzione effettiva non serve l'importo soglia." },
    { o: ["prescinde", "non prescinde", "dipende"], c: 0, e: "Si prescinde dall'importo soglia." }
   ]},

  b_p_auu: { title: "Brano · Assegno unico e universale",
   parts: ["L'assegno unico e universale è attribuito mensilmente per il periodo da ", 0, " ai nuclei con figli a carico, sulla base dell'", 1, ". Spetta per i figli minorenni e, a determinate condizioni, fino ai ", 2, " anni; per i figli con disabilità non ci sono limiti di età. In assenza di ISEE o con ISEE superiore alla soglia massima è comunque garantito in ", 3, "."],
   gaps: [
    { o: ["marzo a febbraio dell'anno successivo", "gennaio a dicembre dello stesso anno", "febbraio a gennaio dell'anno successivo"], c: 0, e: "Annualità da marzo a febbraio; con DSU entro il 30 giugno gli arretrati partono da marzo." },
    { o: ["ISEE", "reddito personale del richiedente", "patrimonio mobiliare"], c: 0, e: "Importi modulati sull'ISEE: da 203,80 € a 58,30 € per figlio minorenne nel 2026." },
    { o: ["21", "18", "26"], c: 0, e: "Figli maggiorenni fino a 21 anni a determinate condizioni." },
    { o: ["misura minima", "misura massima", "nessuna misura"], c: 0, e: "È «universale»: garantito in misura minima a tutte le famiglie con figli a carico." }
   ]},

  b_p_cig: { title: "Brano · Integrazioni salariali (CIGO e CIGS)",
   parts: ["Le integrazioni salariali intervengono in costanza di rapporto, quando il lavoro è sospeso o ridotto. Coprono tutti i lavoratori subordinati, esclusi i dirigenti, con un'anzianità di effettivo lavoro di almeno ", 0, " presso l'unità produttiva. L'integrazione è pari all'", 1, " della retribuzione globale per le ore non prestate. La durata massima complessiva è di ", 2, " mesi in un quinquennio mobile, salvo eccezioni. Di regola paga il ", 3, ", poi rimborsato dall'", 4, "."],
   gaps: [
    { o: ["30 giorni", "60 giorni", "90 giorni"], c: 0, e: "Bastano 30 giorni di anzianità di effettivo lavoro (art. 1, c. 2, D.Lgs. 148/2015)." },
    { o: ["80%", "100%", "60%"], c: 0, e: "80% della retribuzione globale per le ore non lavorate, entro il limite dell'orario contrattuale; con il massimale unico di 1.423,69 € lordi mensili." },
    { o: ["24", "36", "12"], c: 0, e: "24 mesi in un quinquennio mobile per CIGO+CIGS; i contratti di solidarietà arrivano a 36." },
    { o: ["datore di lavoro", "INPS direttamente", "INAIL"], c: 0, e: "Di regola anticipa il datore, poi rimborsato dall'INPS." },
    { o: ["INPS", "INAIL", "ANPAL"], c: 0, e: "Rimborso dell'INPS (o pagamento diretto nei casi previsti)." }
   ]},

  b_p_inail: { title: "Brano · Infortuni e malattie professionali (INAIL)",
   parts: ["In caso di inabilità temporanea assoluta l'INAIL eroga l'indennità giornaliera dal ", 0, " giorno successivo a quello dell'infortunio. L'inabilità permanente è tutelata col sistema del danno ", 1, ": sotto il ", 2, "% di menomazione non spetta alcuna prestazione (franchigia); dal 6% al 15% si ha un indennizzo in capitale; dal 16% al 100% una ", 3, "."],
   gaps: [
    { o: ["quarto", "terzo", "primo"], c: 0, e: "Indennità giornaliera dal quarto giorno successivo (i primi giorni sono di carenza a carico del datore)." },
    { o: ["biologico", "patrimoniale", "morale"], c: 0, e: "Danno biologico: lesione all'integrità psicofisica suscettibile di valutazione medico-legale (D.Lgs. 38/2000); indennizzo areddituale." },
    { o: ["6", "10", "16"], c: 0, e: "Menomazioni inferiori al 6%: in franchigia, nessuna prestazione." },
    { o: ["rendita", "pensione di inabilità", "assegno sociale"], c: 0, e: "Dal 16% in poi indennizzo in rendita." }
   ]},

  b_p_inl: { title: "Brano · Vigilanza e lavoro nero",
   parts: ["Il datore di lavoro senza violazioni all'esito degli accertamenti è iscritto nella lista di conformità INL ed è considerato a basso rischio di irregolarità per ", 0, " mesi; restano possibili ulteriori verifiche in materia di ", 1, ". Per il lavoro nero si applica la ", 2, ", irrogata dall'", 3, ", che non si applica al lavoro domestico."],
   gaps: [
    { o: ["12", "6", "24"], c: 0, e: "Attestato INL e iscrizione in lista: basso rischio per 12 mesi dall'iscrizione." },
    { o: ["salute e sicurezza nei luoghi di lavoro", "contributi previdenziali", "orario di lavoro"], c: 0, e: "La materia della sicurezza resta sempre verificabile." },
    { o: ["maxisanzione", "sanzione penale", "diffida"], c: 0, e: "Maxisanzione: sanzione amministrativa pecuniaria graduata per fasce in base alla durata dell'impiego irregolare." },
    { o: ["Ispettorato (INL)", "INPS", "INAIL"], c: 0, e: "La maxisanzione è irrogata dall'Ispettorato; non si applica al lavoro domestico né se il datore regolarizza spontaneamente e integralmente." }
   ]},

  b_c_cdg: { title: "Brano · Controllo di gestione (D.Lgs. 286/1999)",
   parts: ["Il controllo di gestione è la verifica di efficacia, efficienza ed economicità dell'azione amministrativa, per ottimizzare, anche con tempestivi interventi correttivi, il rapporto tra ", 0, " e ", 1, ". Ciascuna amministrazione definisce gli obiettivi, le unità responsabili, la ", 2, " di rilevazione delle informazioni e gli indicatori. Esso va distinto dal controllo sulla gestione, che è un controllo ", 3, " della Corte dei conti."],
   gaps: [
    { o: ["costi", "entrate", "organici"], c: 0, e: "Si ottimizza il rapporto tra costi e risultati." },
    { o: ["risultati", "preventivi", "dirigenti"], c: 0, e: "Costi e risultati: è la logica dell'economicità." },
    { o: ["frequenza", "durata massima", "riservatezza"], c: 0, e: "L'art. 4 D.Lgs. 286/1999 affida a ogni amministrazione la definizione, fra l'altro, della frequenza di rilevazione." },
    { o: ["esterno", "interno", "politico"], c: 0, e: "Il controllo sulla gestione è esterno (Corte dei conti); il controllo di gestione è un controllo interno." }
   ]},

  b_c_fasi: { title: "Brano · Fasi, budget e reporting",
   parts: ["Il controllo di gestione parte dalla definizione di un piano dettagliato degli ", 0, " cui seguono la rilevazione dei dati e la ", 1, " del grado di attuazione. Lo strumento che collega le risorse ai risultati preventivati è il ", 2, ", che fraziona la struttura in centri di ", 3, ". Il flusso continuo di informazioni sull'andamento economico della gestione è garantito dal ", 4, ", articolato su due livelli: direzionale e ", 5, "."],
   gaps: [
    { o: ["obiettivi", "indicatori di bilancio", "organici"], c: 0, e: "Prima fase: piano dettagliato degli obiettivi." },
    { o: ["valutazione", "programmazione", "revisione"], c: 0, e: "La fase di valutazione misura efficacia, efficienza ed economicità." },
    { o: ["budget", "reporting", "piano dei conti"], c: 0, e: "Il budget lega distribuzione delle risorse e risultati attesi." },
    { o: ["responsabilità", "vigilanza", "bilancio"], c: 0, e: "Centri di responsabilità/spesa: a ciascuno si assegnano obiettivi e risorse." },
    { o: ["reporting", "budget", "indicatore"], c: 0, e: "Il reporting è il sistema di flusso informativo continuo." },
    { o: ["operativo", "verticale", "orizzontale"], c: 0, e: "Reporting direzionale (alta direzione) e operativo (responsabili)." }
   ]},

  b_c_costi: { title: "Brano · Contabilità analitica e costi",
   parts: ["La contabilità ", 0, " rileva costi, ricavi e risultati per singoli centri di responsabilità; la contabilità ", 1, " serve invece a redigere il bilancio di esercizio. Secondo il collegamento tra le due si distinguono il sistema unico contabile, il sistema ", 2, " contabile e il sistema duplice misto. I costi di funzionamento delle amministrazioni centrali sono detti costi ", 3, "; quelli riferibili allo Stato nel suo complesso, e non al singolo centro, sono i costi ", 4, "."],
   gaps: [
    { o: ["analitica", "generale", "finanziaria"], c: 0, e: "Contabilità analitica = per centri di costo/responsabilità." },
    { o: ["generale", "analitica", "patrimoniale soltanto"], c: 0, e: "La contabilità generale porta al bilancio di esercizio." },
    { o: ["duplice", "triplo", "aggregato"], c: 0, e: "Tre sistemi: unico contabile, duplice contabile, duplice misto." },
    { o: ["propri", "comuni", "concessi"], c: 0, e: "I costi di funzionamento sono i costi propri (risorse umane e strumentali)." },
    { o: ["comuni", "propri", "finanziari"], c: 0, e: "Costi comuni: oneri riferibili all'amministrazione statale nel suo complesso." }
   ]},

  b_pa_silenzio: { title: "Brano · Silenzio assenso e preavviso di rigetto",
   parts: ["Il silenzio assenso (art. 20 L. 241/1990) è una forma di ", 0, " amministrativa: nei procedimenti ad istanza di parte il silenzio dell'amministrazione vale accoglimento se, nel termine, non viene comunicato il ", 1, " né indetta una conferenza di servizi. Il preavviso di rigetto (art. 10-bis) interviene prima della formale adozione di un provvedimento ", 2, " e concede agli interessati ", 3, " giorni per le osservazioni. Non si applica alle procedure concorsuali e ai procedimenti previdenziali e assistenziali ", 4, " gli enti previdenziali."],
   gaps: [
    { o: ["semplificazione", "sanzione", "autotutela"], c: 0, e: "Il silenzio assenso è uno strumento di semplificazione." },
    { o: ["provvedimento di rigetto", "provvedimento di accoglimento", "parere"], c: 0, e: "Se non c'è rigetto nel termine, la domanda si intende accolta." },
    { o: ["negativo", "favorevole", "definitivo"], c: 0, e: "Il preavviso precede un provvedimento negativo." },
    { o: ["10", "30", "5"], c: 0, e: "Dieci giorni dal ricevimento della comunicazione; la comunicazione sospende i termini." },
    { o: ["gestiti dal", "esclusi dal", "controllati da"], c: 0, e: "Esclusione per i procedimenti previdenziali e assistenziali su istanza di parte gestiti dagli enti previdenziali, quindi anche INPS." }
   ]},

  b_pa_motiv: { title: "Brano · Motivazione e responsabile del procedimento",
   parts: ["Ogni provvedimento amministrativo, compresi quelli concernenti organizzazione, concorsi e personale, deve essere ", 0, ", salvo gli atti ", 1, " e quelli a contenuto generale. La motivazione indica i presupposti di ", 2, " e le ragioni giuridiche. Si dice per ", 3, " quando richiama un altro atto. L'unità organizzativa responsabile è individuata dall'amministrazione per ciascun tipo di procedimento (art. 4); all'interno di essa si individua il ", 4, " (artt. 5 e 6)."],
   gaps: [
    { o: ["motivato", "pubblicato", "notificato"], c: 0, e: "Art. 3 L. 241/1990: obbligo di motivazione." },
    { o: ["normativi", "organizzativi", "concorsuali"], c: 0, e: "Esclusi atti normativi e atti a contenuto generale." },
    { o: ["fatto", "opportunità", "equità"], c: 0, e: "Presupposti di fatto = dati acquisiti in istruttoria; ragioni giuridiche = norme applicate." },
    { o: ["relationem", "excludendum", "verbum"], c: 0, e: "Motivazione per relationem: rinvio ad altro atto." },
    { o: ["responsabile del procedimento (RUP/RPA)", "dirigente generale", "garante"], c: 0, e: "Il RPA è l'interlocutore tra amministrazione e cittadino." }
   ]}
  });

  Object.assign(D.quesiti, {
   q_x_cdg: { t: "Qual è la finalità del controllo di gestione?", o: ["Ottimizzare il rapporto tra costi e risultati", "Verificare la legittimità degli atti", "Controllare i singoli dipendenti"], c: 0, e: "Efficacia, efficienza, economicità; rapporto costi-risultati." },
   q_x_budget: { t: "Quale strumento collega la distribuzione delle risorse ai risultati preventivati?", o: ["Il budget", "Il reporting", "Il piano dei conti"], c: 0, e: "Il budget assegna obiettivi e risorse ai centri di responsabilità." },
   q_x_rep: { t: "Su quali livelli è articolato il reporting?", o: ["Direzionale e operativo", "Verticale e orizzontale", "Direzionale e a cascata"], c: 0, e: "Direzionale (vertice) e operativo (responsabili)." },
   q_x_costi: { t: "Come si definiscono i costi di funzionamento delle amministrazioni centrali?", o: ["Costi propri", "Oneri finanziari", "Contributi concessi"], c: 0, e: "Costi propri; costi comuni = riferibili allo Stato nel suo complesso." },
   q_x_10bis: { t: "Il preavviso di rigetto si applica ai procedimenti previdenziali a istanza di parte gestiti dall'INPS?", o: ["No, sono esclusi", "Sì, sempre", "Sì, ma solo con ISEE"], c: 0, e: "Art. 10-bis: non si applica a concorsi e procedimenti previdenziali/assistenziali gestiti dagli enti previdenziali." },
   q_x_motiv: { t: "Quali atti sono esclusi dall'obbligo di motivazione ex art. 3 L. 241/1990?", o: ["Atti normativi e atti a contenuto generale", "Atti sui concorsi", "Atti sul personale"], c: 0, e: "Concorsi e personale sono invece soggetti a motivazione." },
   q_x_quote: { t: "Un datore di lavoro ha 20 dipendenti. Quanti lavoratori con disabilità deve assumere in base alla quota di riserva?",
    o: ["Soltanto uno", "Nessuno", "Cinque"], c: 0, e: "Da 15 a 35 dipendenti: un lavoratore; da 36 a 50: due; oltre 50: 7% dei lavoratori occupati." },
   q_x_naspi: { t: "Un lavoratore assunto nel 2025 si dimette volontariamente il 15/2/2026, viene riassunto il 10/3/2026 da un nuovo datore e licenziato il 10/4/2026. Ha diritto alla NASpI?",
    o: ["No: nel nuovo rapporto non ha maturato 13 settimane di contribuzione", "Sì, perché il licenziamento è involontario", "Sì, se ha più di 60 anni"], c: 0,
    e: "Dal 1/1/2025, dopo dimissioni volontarie nei 12 mesi precedenti, servono 13 settimane maturate dopo l'ultima cessazione (circa 4 settimane e mezza qui)." },
   q_x_franchigia: { t: "Un lavoratore subisce un infortunio con menomazione permanente del 4%. Quale prestazione gli spetta dall'INAIL per l'inabilità permanente?",
    o: ["Nessuna prestazione: sotto il 6% c'è la franchigia", "Un indennizzo in capitale", "Una rendita ridotta a un sesto"], c: 0,
    e: "Danno biologico: sotto il 6% nessuna prestazione; 6-15% indennizzo in capitale; 16-100% rendita." },
   q_x_sanz: { t: "In caso di mancata comunicazione all'INPS dell'instaurazione di un rapporto di lavoro domestico, si applica la maxisanzione per lavoro nero?",
    o: ["No", "Sì, irrogata dall'INPS", "Sì, in misura maggiore"], c: 0,
    e: "La maxisanzione non si applica al lavoro domestico; negli altri casi la irroga l'Ispettorato." },
   q_x_comporto: { t: "Come si chiama il periodo durante il quale il lavoratore malato non può essere licenziato?",
    o: ["Periodo di comporto", "Periodo garantito", "Periodo coperto"], c: 0, e: "Comporto: durata massima di conservazione del posto." }
  });

  D.sims.push({
    id: 's5', title: 'Simulazione 5 · Controllo di gestione, PA e lavoro/previdenza',
    desc: 'Cinque brani (controllo di gestione, costi, silenzio assenso/10-bis, motivazione, comporto/TFR) e quesiti; modellata sul formato del libro di preparazione.',
    brani: ['b_c_cdg', 'b_c_fasi', 'b_pa_silenzio'], quesiti: ['q_x_cdg', 'q_x_budget', 'q_x_10bis', 'q_x_comporto', 'q_x_franchigia'], scenari: ['s_g', 's_h']
  });
})();
