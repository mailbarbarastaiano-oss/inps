/* PECS — banca dati di brani, quesiti, scenari e simulazioni (concorso INPS 1695 Funzionari PECS).
   Convenzione: in ogni elenco di opzioni la risposta corretta è la PRIMA (c:0); il motore mescola l'ordine.
   Fonti: bando e avviso di convocazione, Appendici A-D Smart, Errata Corrige (27/9/2026), dispense FP Formazione (CGIL),
   testo consolidato L. 182/2025 (art. 21-nonies). Dove le fonti divergono vale l'Errata. */
window.PECS_DATA = {
brani: {

/* ---------------- PA ---------------- */
b_pa_proc: { title: "Brano · Il procedimento amministrativo",
 parts: ["Se leggi e regolamenti non prevedono un termine diverso, il procedimento amministrativo statale deve concludersi entro ", 0, ". Quando è avviato su istanza di parte, l'amministrazione ha l'obbligo di ", 1, ". L'istruttoria è diretta dal ", 2, ", individuato ai sensi degli artt. 4-6 della L. 241/1990. Se intende respingere l'istanza, la PA comunica i motivi ostativi e l'interessato può presentare osservazioni entro ", 3, " (art. 10-bis), salvo che si tratti di un procedimento previdenziale o assistenziale a istanza di parte gestito da un ente previdenziale. Decorso il termine senza risposta, nei procedimenti a istanza di parte per il rilascio di provvedimenti vale in via generale il ", 4, ", con le eccezioni previste dalla legge (ad esempio patrimonio culturale, ambiente, salute). Il provvedimento illegittimo di autorizzazione o di attribuzione di vantaggi economici può essere annullato d'ufficio entro un termine ragionevole e comunque non oltre ", 5, " (art. 21-nonies)."],
 gaps: [
  { o: ["30 giorni", "60 giorni", "90 giorni"], c: 0, e: "Termine generale di 30 giorni (art. 2 L. 241/1990). Fino a 90 per complessità, mai oltre 180 (salvo cittadinanza e immigrazione)." },
  { o: ["provvedere con provvedimento espresso", "archiviare l'istanza dopo il termine", "chiedere un nuovo parere all'interessato"], c: 0, e: "Obbligo di provvedere (art. 2): la PA deve concludere con provvedimento espresso." },
  { o: ["responsabile del procedimento", "dirigente generale", "segretario dell'ente"], c: 0, e: "Artt. 4-6 L. 241/1990: il responsabile del procedimento dirige l'istruttoria." },
  { o: ["10 giorni", "30 giorni", "60 giorni"], c: 0, e: "Preavviso di rigetto (art. 10-bis): 10 giorni. Non si applica ai procedimenti previdenziali e assistenziali a istanza di parte degli enti previdenziali." },
  { o: ["silenzio-assenso", "silenzio-rigetto", "silenzio-inadempimento"], c: 0, e: "Art. 20: silenzio-assenso come regola generale dal 2005, con eccezioni. Sulle prestazioni INPS vale invece il silenzio-rigetto dopo 120 giorni." },
  { o: ["sei mesi", "dodici mesi", "diciotto mesi"], c: 0, e: "Sei mesi dopo la L. 182/2025 (in vigore dal 18/12/2025). I 12 mesi erano del D.L. 77/2021, i 18 della L. 124/2015: attenzione ai manuali non aggiornati." }
 ]},

b_pa_accesso: { title: "Brano · Accesso, trasparenza e whistleblowing",
 parts: ["Nel nostro ordinamento convivono tre forme di accesso. L'accesso documentale della L. 241/1990 richiede un interesse ", 0, " ed è l'unico per cui l'istanza va ", 1, ". L'accesso civico semplice (D.Lgs. 33/2013) riguarda i dati che l'amministrazione aveva l'obbligo di ", 2, ", mentre l'accesso civico generalizzato (FOIA) può essere chiesto da ", 3, ", senza motivazione. In tutti i casi la PA risponde in ", 4, ". Contro un diniego dell'INPS il difensore civico non è esperibile, perché opera solo per ", 5, "."],
 gaps: [
  { o: ["diretto, concreto e attuale", "meramente culturale o di studio", "collettivo e indeterminato"], c: 0, e: "Accesso documentale: interesse diretto, concreto e attuale, collegato al documento (artt. 22-28 L. 241/1990)." },
  { o: ["motivata", "presentata solo in forma cartacea", "notificata ai controinteressati"], c: 0, e: "Solo l'accesso documentale richiede la motivazione; i due accessi civici no." },
  { o: ["pubblicare", "archiviare", "classificare"], c: 0, e: "L'accesso civico semplice riguarda gli obblighi di pubblicazione omessi (D.Lgs. 33/2013, art. 5, c. 1)." },
  { o: ["chiunque", "solo i cittadini residenti", "solo chi ha un interesse diretto"], c: 0, e: "FOIA (art. 5, c. 2): chiunque, senza motivare, con i limiti di legge." },
  { o: ["30 giorni", "60 giorni", "90 giorni"], c: 0, e: "30 giorni per tutte e tre le forme (Appendice D); nell'accesso documentale, poi, silenzio-rigetto." },
  { o: ["regioni ed enti locali", "ministeri", "enti previdenziali"], c: 0, e: "Errata Corrige: il difensore civico vale solo per regioni ed enti locali (art. 5, c. 8, D.Lgs. 33/2013); contro l'INPS restano RPCT e TAR." }
 ]},

b_pa_atti: { title: "Brano · Validità degli atti e autotutela",
 parts: ["Un provvedimento viziato per violazione di legge, eccesso di potere o incompetenza è ", 0, " e si impugna davanti al TAR entro ", 1, ". La nullità, riservata ai vizi più gravi, si fa valere con un'azione che decade in ", 2, " (art. 31 c.p.a.). L'amministrazione può ritirare un proprio atto illegittimo con l'", 3, ", mentre un atto legittimo ma non più rispondente all'interesse pubblico può essere ritirato con la ", 4, "."],
 gaps: [
  { o: ["annullabile", "nullo", "inesistente"], c: 0, e: "I tre vizi dell'art. 21-octies, c. 1 rendono l'atto annullabile. Anche la mancanza di motivazione (art. 3) è violazione di legge: atto annullabile, non nullo (Errata)." },
  { o: ["60 giorni", "30 giorni", "120 giorni"], c: 0, e: "Ricorso al TAR: 60 giorni dalla notifica o piena conoscenza. Il ricorso straordinario al Presidente della Repubblica: 120 giorni." },
  { o: ["180 giorni", "nessun termine", "30 giorni"], c: 0, e: "Errata: l'azione di nullità decade in 180 giorni; restano senza termine l'eccezione e il rilievo d'ufficio." },
  { o: ["annullamento d'ufficio", "revoca", "conferma"], c: 0, e: "Atto illegittimo = annullamento d'ufficio (art. 21-nonies), con efficacia retroattiva." },
  { o: ["revoca", "annullamento d'ufficio", "sanatoria"], c: 0, e: "Atto legittimo ma superato da ragioni di interesse pubblico = revoca (art. 21-quinquies), di regola con effetto per il futuro e indennizzo." }
 ]},

b_pa_en: { title: "Brano · Principles of administrative action (inglese)", en: true,
 parts: ["Article 97 of the Italian Constitution requires public offices to be organised so as to ensure good ", 0, " and impartiality. Law 241/1990 lists the principles of cost-effectiveness, effectiveness, publicity and ", 1, ". Since 2020 the law also includes proportionality, legitimate ", 2, ", cooperation and good faith. When the administration acts as a private party, for example when it signs a contract, it is governed by ", 3, " law."],
 gaps: [
  { o: ["functioning (andamento)", "revenue (entrate)", "planning (pianificazione)"], c: 0, e: "Buon andamento = good functioning. Art. 97 Cost." },
  { o: ["transparency (trasparenza)", "secrecy (segretezza)", "hierarchy (gerarchia)"], c: 0, e: "Transparency = trasparenza, uno dei principi dell'art. 1 L. 241/1990." },
  { o: ["reliance (affidamento)", "delegation (delega)", "interest (interesse)"], c: 0, e: "Legitimate reliance = legittimo affidamento, aggiunto nel 2020." },
  { o: ["private (privato)", "criminal (penale)", "constitutional (costituzionale)"], c: 0, e: "Art. 1, c. 1-bis: gli atti non autoritativi seguono il diritto privato, salvo diversa previsione di legge." }
 ],
 tr: "Traduzione: l'art. 97 della Costituzione richiede che gli uffici pubblici siano organizzati in modo da assicurare buon andamento e imparzialità. La L. 241/1990 elenca i principi di economicità, efficacia, pubblicità e trasparenza. Dal 2020 la legge comprende anche proporzionalità, legittimo affidamento, collaborazione e buona fede. Quando l'amministrazione agisce come soggetto privato, per esempio quando stipula un contratto, è regolata dal diritto privato." },

b_pa_privacy: { title: "Brano · Privacy e protezione dei dati",
 parts: ["Il GDPR (Reg. UE 2016/679) fissa i principi di ", 0, ", limitazione della finalità, minimizzazione, esattezza, limitazione della conservazione e integrità e riservatezza. Per i trattamenti che presentano rischi elevati va svolta una ", 1, "; la figura che sorveglia l'applicazione del regolamento in ogni ente è il ", 2, ". In ambito previdenziale il trattamento dei dati è disciplinato anche dal ", 3, ", adeguato al GDPR dal D.Lgs. 101/2018. Il D.Lgs. 24/2023 regola invece il ", 4, ": canali interni ed esterni di segnalazione e tutela da ritorsioni."],
 gaps: [
  { o: ["liceità, correttezza e trasparenza", "segretezza e gerarchia", "gratuità e reciprocità"], c: 0, e: "Primo principio del GDPR (art. 5): liceità, correttezza e trasparenza." },
  { o: ["valutazione d'impatto (DPIA)", "autorizzazione del Garante in ogni caso", "certificazione ISO obbligatoria"], c: 0, e: "DPIA = Data Protection Impact Assessment, per i trattamenti ad alto rischio." },
  { o: ["Responsabile della protezione dei dati (DPO)", "Responsabile della prevenzione della corruzione (RPCT)", "Responsabile unico del procedimento (RUP)"], c: 0, e: "DPO = Data Protection Officer. L'RPCT riguarda anticorruzione e trasparenza, il RUP i contratti pubblici." },
  { o: ["D.Lgs. 196/2003 (Codice privacy)", "D.Lgs. 33/2013", "D.Lgs. 82/2005"], c: 0, e: "Codice privacy, adeguato al GDPR dal D.Lgs. 101/2018 (Appendice A). Il D.Lgs. 33/2013 è sulla trasparenza, l'82/2005 è il CAD." },
  { o: ["whistleblowing", "accesso civico", "silenzio-assenso"], c: 0, e: "D.Lgs. 24/2023: nel settore pubblico il canale interno è obbligatorio senza soglia di dipendenti (i 50 valgono solo nel privato)." }
 ]},

/* ---------------- LAVORO ---------------- */
b_l_qualif: { title: "Brano · Qualificazione del rapporto di lavoro",
 parts: ["Il lavoro subordinato è caratterizzato dall'", 0, " del datore di lavoro (art. 2094 c.c.). Per il principio di indisponibilità del tipo contrattuale prevale l'", 1, " sul nome dato dalle parti. La collaborazione coordinata e continuativa (art. 409 n. 3 c.p.c.) si distingue perché il collaboratore conserva l'", 2, ". L'art. 2 del D.Lgs. 81/2015 estende la disciplina del lavoro subordinato alle collaborazioni etero-organizzate dal committente, anche mediante piattaforme digitali, quando la prestazione è ", 3, ". Nelle pubbliche amministrazioni le collaborazioni esclusivamente personali e continuative etero-organizzate sono ", 4, " (art. 7, c. 5-bis, D.Lgs. 165/2001)."],
 gaps: [
  { o: ["eterodirezione", "autonomia", "coordinamento paritario"], c: 0, e: "Eterodirezione: il datore dirige e controlla la prestazione. È il tratto della subordinazione." },
  { o: ["effettivo svolgimento del rapporto", "nome scelto dalle parti nel contratto", "volontà del committente"], c: 0, e: "Corte cost. 121/1993 e 115/1994: prevale la realtà del rapporto sul nomen iuris." },
  { o: ["autonomia organizzativa", "potere disciplinare", "vincolo di orario"], c: 0, e: "Nella co.co.co. manca l'eterodirezione: coordinamento concordato e autonomia organizzativa." },
  { o: ["prevalentemente personale e continuativa", "esclusivamente personale", "occasionale e discontinua"], c: 0, e: "La L. 128/2019 ha sostituito «esclusivamente» con «prevalentemente» e inserito le piattaforme digitali. Cass. 1663/2020: norma di disciplina, non di fattispecie." },
  { o: ["vietate", "ammesse senza limiti", "ammesse solo con autorizzazione ministeriale"], c: 0, e: "Divieto per le PA; restano ammessi incarichi individuali di lavoro autonomo a esperti di comprovata specializzazione." }
 ]},

b_l_mansioni: { title: "Brano · Mansioni e jus variandi (art. 2103 c.c.)",
 parts: ["Dopo la riforma del 2015 l'art. 2103 c.c. consente di adibire il lavoratore a mansioni dello stesso ", 0, " delle ultime effettivamente svolte. In caso di modifica degli assetti organizzativi è possibile l'assegnazione a mansioni di ", 1, ", purché della stessa categoria legale e con comunicazione scritta a pena di ", 2, ". Le parti possono derogare anche oltre questi limiti con un patto stipulato in ", 3, ", se sorretto da un interesse del lavoratore tipizzato dalla legge, come la conservazione dell'occupazione. Nel lavoro pubblico le mansioni sono disciplinate dall'art. ", 4, "."],
 gaps: [
  { o: ["livello e categoria legale", "settore e luogo di lavoro", "equivalenza professionale (regola previgente)"], c: 0, e: "Dal 2015 il limite è formale: stesso livello e stessa categoria legale. L'equivalenza era la regola del vecchio art. 2103." },
  { o: ["un solo livello inferiore", "due livelli inferiori", "qualsiasi livello inferiore"], c: 0, e: "Art. 2103, c. 2: un solo livello inferiore, stessa categoria legale." },
  { o: ["nullità", "decadenza", "inefficacia temporanea"], c: 0, e: "La forma scritta è richiesta a pena di nullità." },
  { o: ["sede protetta", "azienda, con la sola firma del lavoratore", "presenza di un familiare"], c: 0, e: "Art. 2103, c. 6: sedi protette (art. 2113, c. 4, c.c. o commissioni di certificazione) a garanzia della genuinità del consenso." },
  { o: ["52 del D.Lgs. 165/2001", "2103 del codice civile", "36 della Costituzione"], c: 0, e: "Nel pubblico impiego vige l'art. 52 D.Lgs. 165/2001, non l'art. 2103 c.c." }
 ]},

b_l_licenz: { title: "Brano · Licenziamento e tutele",
 parts: ["Il licenziamento per giusta causa (art. 2119 c.c.) avviene ", 0, ". Nel giustificato motivo oggettivo il datore deve provare l'impossibilità di ", 1, ", cioè di ricollocare il lavoratore in altre mansioni disponibili. Nel D.Lgs. 23/2015, dopo il Decreto Dignità, l'indennità per licenziamento ingiustificato va da ", 2, ". La procedura di licenziamento collettivo si applica ai datori con più di ", 3, " che intendono effettuare almeno ", 4, " in 120 giorni; l'eventuale esame congiunto va esaurito in ", 5, "."],
 gaps: [
  { o: ["senza preavviso", "con il preavviso previsto dal CCNL", "solo dopo tre contestazioni"], c: 0, e: "Giusta causa: causa che non consente la prosecuzione neppure provvisoria del rapporto; nessun preavviso." },
  { o: ["repêchage", "patto di non concorrenza", "preavviso"], c: 0, e: "Repêchage: obbligo di verificare la ricollocazione in mansioni disponibili, anche inferiori." },
  { o: ["6 a 36 mensilità", "4 a 24 mensilità", "2 a 12 mensilità"], c: 0, e: "D.L. 87/2018: forbice 6-36 per l'ingiustificatezza; per i vizi formali resta 2-12. Dopo Corte cost. 194/2018 il giudice non è più vincolato alle due mensilità per anno." },
  { o: ["15 dipendenti", "5 dipendenti", "50 dipendenti"], c: 0, e: "Art. 24 L. 223/1991: più di 15 dipendenti (dirigenti inclusi)." },
  { o: ["5 licenziamenti", "3 licenziamenti", "10 licenziamenti"], c: 0, e: "Almeno 5 licenziamenti in 120 giorni, nella stessa unità produttiva o in più unità della stessa provincia." },
  { o: ["45 giorni", "30 giorni", "90 giorni"], c: 0, e: "Esame congiunto: 45 giorni; poi fase amministrativa di ulteriori 30 giorni; termini dimezzati se gli esuberi sono meno di 10." }
 ]},

b_l_pubblico: { title: "Brano · Disciplina nel pubblico impiego",
 parts: ["Nel procedimento disciplinare dei dipendenti pubblici sono perentori solo la contestazione, entro ", 0, ", e la conclusione, entro ", 1, " (art. 55-bis D.Lgs. 165/2001). La sospensione disciplinare prevista dal CCNL arriva al massimo a ", 2, ". I differenziali stipendiali sono al massimo ", 3, ", da 2.250 euro annui. Il codice di comportamento (D.P.R. 62/2013) vieta i regali, salvo quelli di ", 4, ", con limite orientativo di 150 euro."],
 gaps: [
  { o: ["30 giorni", "60 giorni", "10 giorni"], c: 0, e: "Errata Corrige: perentori solo i termini di 30 giorni (contestazione) e 120 giorni (conclusione); la violazione degli altri non causa decadenza o nullità." },
  { o: ["120 giorni", "90 giorni", "180 giorni"], c: 0, e: "Conclusione del procedimento disciplinare: 120 giorni." },
  { o: ["6 mesi", "12 mesi", "3 mesi"], c: 0, e: "Errata: non esiste una sospensione fino a 12 mesi; il CCNL arriva a 6 mesi." },
  { o: ["5", "6", "3"], c: 0, e: "Errata: massimo 5 differenziali da 2.250 euro annui, per la permanenza nell'Area (CCNL Funzioni Centrali 2019-2021)." },
  { o: ["modico valore", "qualsiasi valore se non in contanti", "valore pari a una mensilità"], c: 0, e: "Art. 4 D.P.R. 62/2013: divieto generale salvo modico valore e occasionalità; i 150 euro sono orientativi, il Codice INPS vieta il contante." }
 ]},

b_l_termine: { title: "Brano · Contratto a termine",
 parts: ["Il contratto a termine può essere stipulato senza causale fino a ", 0, "; tra 12 e 24 mesi occorrono le condizioni previste dalla legge e dai contratti collettivi. La proroga è libera nei primi 12 mesi e consentita al massimo ", 1, " in 24 mesi. Nelle pubbliche amministrazioni la violazione dei limiti non comporta la ", 2, " a tempo indeterminato, per il principio del concorso (art. 36 D.Lgs. 165/2001), ma il diritto al ", 3, "."],
 gaps: [
  { o: ["12 mesi", "24 mesi", "6 mesi"], c: 0, e: "Art. 19 D.Lgs. 81/2015: fino a 12 mesi acausale." },
  { o: ["4 volte", "2 volte", "senza limiti"], c: 0, e: "Proroghe: massimo 4 in 24 mesi." },
  { o: ["trasformazione", "riduzione", "sospensione"], c: 0, e: "La trasformazione è esclusa nelle PA (art. 36 D.Lgs. 165/2001) per il principio costituzionale del concorso." },
  { o: ["risarcimento del danno", "preavviso", "trattamento di fine rapporto doppio"], c: 0, e: "Resta il risarcimento del danno e la responsabilità dei dirigenti." }
 ]},

/* ---------------- PREVIDENZA ---------------- */
b_p_contrib: { title: "Brano · Rapporto contributivo",
 parts: ["L'obbligo contributivo nasce ", 0, " con l'inizio del rapporto di lavoro, a prescindere dall'iscrizione. Nel lavoro subordinato è obbligato ", 1, ", che versa l'intero contributo trattenendo la quota del lavoratore. Il massimale contributivo (122.295 euro nel 2026) si applica solo a chi è interamente nel sistema ", 2, ". L'aliquota IVS del FPLD è pari al ", 3, ". I contributi si prescrivono in ", 4, " (dieci se denunciati); se sono prescritti il lavoratore può ottenere la prestazione chiedendo la ", 5, " (art. 13 L. 1338/1962)."],
 gaps: [
  { o: ["per legge", "per accordo tra le parti", "con l'iscrizione all'INPS"], c: 0, e: "L'obbligo nasce ex lege; un patto contrario è nullo (art. 2115, c. 3, c.c.)." },
  { o: ["il datore di lavoro", "il lavoratore", "il Comune"], c: 0, e: "Art. 19 L. 218/1952: il datore versa tutto e trattiene la quota del lavoratore." },
  { o: ["contributivo", "retributivo", "misto"], c: 0, e: "Massimale: per i lavoratori interamente nel sistema contributivo (iscritti dal 1996); la retribuzione eccedente non è imponibile né pensionabile." },
  { o: ["33%", "24%", "35,03%"], c: 0, e: "FPLD 33% (23,81% datore, 9,19% lavoratore). 24% artigiani; 35,03% Gestione separata con DIS-COLL." },
  { o: ["5 anni", "3 anni", "10 anni"], c: 0, e: "Art. 3, c. 9, L. 335/1995: 5 anni, 10 se denunciati. Errata: non esiste prescrizione decennale per i volontari." },
  { o: ["rendita vitalizia", "ricostituzione d'ufficio", "pensione supplementare"], c: 0, e: "Se i contributi sono prescritti non si perde tutto: rendita vitalizia o risarcimento da parte del datore." }
 ]},

b_p_pens: { title: "Brano · Pensioni",
 parts: ["La riforma Dini (L. 335/1995) ha introdotto il metodo ", 0, ". Chi aveva almeno ", 1, " di contributi al 31/12/1995 ha il calcolo retributivo fino al ", 2, ". L'età per la pensione di vecchiaia è di 67 anni, che salgono a 67 anni e 1 mese nel 2027 e a ", 3, " dal 2028 (L. 199/2025). La pensione anticipata contributiva a 64 anni richiede un importo pari ad almeno ", 4, " l'assegno sociale (1.638,72 euro nel 2026). Nel sistema contributivo la pensione è pari al montante moltiplicato per il ", 5, "."],
 gaps: [
  { o: ["contributivo", "retributivo", "a ripartizione pura"], c: 0, e: "Dini: metodo contributivo, tre platee, Gestione separata." },
  { o: ["18 anni", "15 anni", "20 anni"], c: 0, e: "Retributivi: almeno 18 anni al 31/12/1995. Meno di 18 anni: misti, retributivo fino al 1995." },
  { o: ["2011", "1995", "2019"], c: 0, e: "Dopo la Fornero: per i retributivi il calcolo retributivo vale fino al 2011, contributivo dal 2012." },
  { o: ["67 anni e 3 mesi", "68 anni", "67 anni e 6 mesi"], c: 0, e: "L. 199/2025: 67 anni e 1 mese nel 2027, 67 anni e 3 mesi dal 2028." },
  { o: ["3 volte", "1,5 volte", "2 volte"], c: 0, e: "3 × 546,24 = 1.638,72 euro; 2,8 per le madri con un figlio, 2,6 con due o più (art. 24, c. 11, D.L. 201/2011)." },
  { o: ["coefficiente di trasformazione", "tasso di capitalizzazione", "massimale contributivo"], c: 0, e: "Pensione = montante × coefficiente di trasformazione (tabella A L. 335/1995), aggiornato ogni due anni. Il tasso di capitalizzazione rivaluta il montante." }
 ]},

b_p_naspi: { title: "Brano · NASpI",
 parts: ["La NASpI spetta a chi è in stato di disoccupazione ", 0, " e ha almeno ", 1, " di contribuzione nei quattro anni precedenti; il requisito delle 30 giornate di lavoro effettivo non si applica più dal 2022. La domanda va presentata entro ", 2, " dalla cessazione, a pena di decadenza. La durata è pari alla metà delle settimane contribuite negli ultimi quattro anni, fino a un massimo di ", 3, ". L'importo si riduce del ", 4, " al mese dal sesto mese (dall'ottavo per chi ha almeno 55 anni). Nel 2026 l'importo massimo è di ", 5, " lordi mensili."],
 gaps: [
  { o: ["involontaria", "volontaria", "temporanea"], c: 0, e: "La NASpI tutela la disoccupazione involontaria; le dimissioni volontarie ordinarie sono escluse." },
  { o: ["13 settimane", "30 settimane", "52 settimane"], c: 0, e: "13 settimane di contribuzione nei quattro anni precedenti (art. 3 D.Lgs. 22/2015)." },
  { o: ["68 giorni", "30 giorni", "120 giorni"], c: 0, e: "Errata: i 68 giorni sono decadenza piena; oltre si perde il diritto." },
  { o: ["24 mesi", "12 mesi", "36 mesi"], c: 0, e: "Metà delle settimane degli ultimi 4 anni (208 settimane), massimo 104 settimane = 24 mesi." },
  { o: ["3%", "5%", "10%"], c: 0, e: "Décalage del 3% mensile: dal 6° mese; dall'8° per gli over 55." },
  { o: ["1.584,70 euro", "1.423,69 euro", "1.456,72 euro"], c: 0, e: "Importo massimo 1.584,70 euro. 1.456,72 è la soglia della retribuzione di riferimento; 1.423,69 è il massimale della CIG." }
 ]},

b_p_famiglia: { title: "Brano · Famiglia, maternità e disabilità",
 parts: ["Il congedo di maternità obbligatorio dura ", 0, ". Il congedo di paternità obbligatorio è di ", 1, " (20 in caso di parto plurimo), spetta solo ai lavoratori dipendenti ed è pagato al 100%. Il congedo parentale è indennizzato all'80% per ", 2, " entro i 6 anni del figlio, solo per i dipendenti. I permessi della L. 104/1992 sono di ", 3, " per persona assistita: il referente unico è stato abolito nel 2022. La Valutazione di Base della disabilità si conclude in 90 giorni, ", 4, " per i malati oncologici e 30 per i minori."],
 gaps: [
  { o: ["5 mesi", "3 mesi", "7 mesi"], c: 0, e: "5 mesi (D.Lgs. 151/2001); dal 2019 la lavoratrice può astenersi solo dopo il parto, con attestazione medica." },
  { o: ["10 giorni", "7 giorni", "5 giorni"], c: 0, e: "10 giorni (art. 27-bis D.Lgs. 151/2001); solo dipendenti, 100%; esclusi Gestione Separata e autonomi." },
  { o: ["3 mesi", "1 mese", "6 mesi"], c: 0, e: "Fino a 3 mesi all'80% entro i 6 anni, poi 30%. Non esiste una fascia al 60%." },
  { o: ["3 giorni al mese", "5 giorni al mese", "1 giorno a settimana"], c: 0, e: "Art. 33 L. 104/1992: 3 giorni al mese per assistito (o 2 ore al giorno). Nel pubblico retribuiti dall'amministrazione." },
  { o: ["15 giorni", "60 giorni", "45 giorni"], c: 0, e: "D.Lgs. 62/2024, art. 6, c. 8: 90 giorni, 15 per gli oncologici, 30 per i minori." }
 ]},

b_p_adi: { title: "Brano · ADI, silenzio e contenzioso previdenziale",
 parts: ["L'Assegno di inclusione richiede un ISEE fino a ", 0, ". Dura 18 mesi, rinnovabili per ", 1, "; dal 2026 il rinnovo non prevede il mese di sospensione e la prima mensilità è al 50%. Per le prestazioni INPS, se dopo ", 2, " non c'è provvedimento si forma il silenzio-rigetto; il ricorso ai Comitati va presentato entro ", 3, ". La decadenza dall'azione giudiziaria è di ", 4, " per le pensioni e di ", 5, " per NASpI, maternità e malattia."],
 gaps: [
  { o: ["10.140 euro", "6.000 euro", "9.360 euro"], c: 0, e: "ISEE ≤ 10.140 euro per ADI e SFL (L. 207/2024). 9.360 e 6.000 sono valori precedenti, segnalati come errori nell'Errata." },
  { o: ["12 mesi", "6 mesi", "18 mesi"], c: 0, e: "Dopo i 18 mesi il rinnovo è di 12 mesi (D.L. 48/2023; L. 199/2025)." },
  { o: ["120 giorni", "60 giorni", "90 giorni"], c: 0, e: "Art. 7 L. 533/1973: silenzio-rigetto dopo 120 giorni dalla domanda." },
  { o: ["90 giorni", "30 giorni", "120 giorni"], c: 0, e: "Ricorso ai Comitati (art. 46 L. 88/1989) entro 90 giorni dalla comunicazione o dal silenzio; è condizione di procedibilità." },
  { o: ["3 anni", "1 anno", "5 anni"], c: 0, e: "Art. 47 D.P.R. 639/1970: 3 anni solo per le pensioni." },
  { o: ["1 anno", "3 anni", "10 anni"], c: 0, e: "Per le prestazioni temporanee (NASpI, maternità, malattia) la decadenza è di 1 anno." }
 ]},

/* ---------------- CONTROLLO DI GESTIONE ---------------- */
b_c_gestione: { title: "Brano · Controllo di gestione",
 parts: ["Il controllo di gestione è uno strumento ", 0, " che osserva il rapporto tra risorse impiegate e risultati per orientare le scelte future, a differenza del controllo di regolarità, che verifica a posteriori la ", 1, " alle regole. Il controllo manageriale si articola in tre fasi: budget (ex ante), controllo in senso stretto (in itinere) e ", 2, " (ex post). Nel direct costing il margine di contribuzione di primo livello (MdC-IL) è pari ai ricavi meno i ", 3, ". Il Break Even Point è il livello di attività in cui ricavi totali e ", 4, " si eguagliano."],
 gaps: [
  { o: ["direzionale", "sanzionatorio", "notarile"], c: 0, e: "Il controllo di gestione orienta la direzione sulle scelte future; il controllo di regolarità è di conformità." },
  { o: ["conformità", "redditività", "efficienza"], c: 0, e: "Controllo di regolarità amministrativo-contabile: conformità degli atti a legge e regole contabili." },
  { o: ["reporting e analisi degli scostamenti", "pianificazione strategica", "certificazione del bilancio"], c: 0, e: "Fasi: budget, controllo in itinere, reporting o analisi delle varianze." },
  { o: ["costi diretti variabili", "costi indiretti", "costi fissi complessivi"], c: 0, e: "MdC-IL = ricavi − costi diretti variabili; MdC-IIL = MdC-IL − costi diretti fissi; MOL = MdC-IIL − costi indiretti." },
  { o: ["costi totali", "costi variabili", "investimenti"], c: 0, e: "BEP = punto di pareggio: ricavi totali = costi totali. Più alti i costi fissi, più a destra si colloca." }
 ]},

b_c_controlli: { title: "Brano · Governance e controlli nell'INPS",
 parts: ["Nell'INPS il CdA predispone piani e bilanci, ma l'approvazione definitiva del bilancio spetta al ", 0, ", entro 60 giorni dalla delibera del CdA. Il Collegio dei sindaci ha ", 1, " componenti effettivi (5 designati dal Lavoro e 4 dal MEF) con mandato ", 2, ". Tra i controlli esterni rientra quello della ", 3, ", oltre alla vigilanza dei Ministeri del lavoro e dell'", 4, "."],
 gaps: [
  { o: ["CIV (Consiglio di indirizzo e vigilanza)", "Collegio dei sindaci", "Ministero del lavoro con decreto"], c: 0, e: "Errata: il CIV approva i bilanci entro 60 giorni dalla delibera del CdA; nessun decreto ministeriale (art. 3, cc. 4-5, D.Lgs. 479/1994)." },
  { o: ["9", "7", "5"], c: 0, e: "9 membri effettivi (5 Lavoro + 4 MEF) più supplenti, non 7." },
  { o: ["quadriennale", "triennale", "quinquennale"], c: 0, e: "Mandato quadriennale (Errata)." },
  { o: ["Corte dei conti", "Consiglio di Stato", "Autorità garante della concorrenza"], c: 0, e: "Controllo della Corte dei conti (art. 100 Cost.; L. 259/1958): magistrato delegato e referto al Parlamento." },
  { o: ["economia e delle finanze", "interno", "università e ricerca"], c: 0, e: "Vigilanza di Ministero del lavoro e MEF." }
 ]},

b_c_perf: { title: "Brano · Performance e PIAO",
 parts: ["La norma cardine sulla valutazione della performance è il D.Lgs. ", 0, " (riforma Brunetta), modificato dal D.Lgs. 74/2017. Si misurano tre dimensioni: l'amministrazione nel suo complesso, le ", 1, " e i singoli dipendenti. Nel PIAO (D.P.R. 81/2022) confluisce solo il ", 2, ", mentre la Relazione sulla performance resta autonoma, va adottata entro il ", 3, " ed è validata dall'", 4, "."],
 gaps: [
  { o: ["150/2009", "165/2001", "33/2013"], c: 0, e: "D.Lgs. 150/2009 (riforma Brunetta); il 165/2001 è il T.U. pubblico impiego, il 33/2013 la trasparenza." },
  { o: ["unità organizzative", "società partecipate", "organi di governo"], c: 0, e: "Art. 3, c. 2, D.Lgs. 150/2009: amministrazione nel suo complesso, unità organizzative, singoli dipendenti." },
  { o: ["Piano della performance", "Relazione sulla performance", "bilancio consuntivo"], c: 0, e: "Errata: nel PIAO confluisce solo il Piano; la Relazione resta autonoma." },
  { o: ["30 giugno", "31 dicembre", "30 aprile"], c: 0, e: "Relazione sulla performance: entro il 30 giugno (art. 10 D.Lgs. 150/2009)." },
  { o: ["OIV", "Corte dei conti", "Collegio dei sindaci"], c: 0, e: "OIV = Organismo indipendente di valutazione della performance." }
 ]},

/* ---------------- INGLESE E INFORMATICA ---------------- */
b_e_naspi: { title: "Brano · NASpI (inglese)", en: true,
 parts: ["NASpI is the unemployment benefit for workers who lose their job ", 0, ". To qualify, a worker must have at least 13 weeks of ", 1, " in the previous four years. The application must be filed within 68 days of the end of employment, otherwise the right is lost. The amount is reduced by ", 2, " per month from the sixth month, and the maximum duration is ", 3, " months."],
 gaps: [
  { o: ["involuntarily (involontariamente)", "voluntarily (volontariamente)", "temporarily (temporaneamente)"], c: 0, e: "NASpI tutela la disoccupazione involontaria: involuntarily." },
  { o: ["contributions (contributi)", "holidays (ferie)", "salary (stipendio)"], c: 0, e: "Contributions = contributi previdenziali; 13 settimane nei quattro anni." },
  { o: ["3 per cent (3%)", "13 per cent (13%)", "30 per cent (30%)"], c: 0, e: "Riduzione del 3% al mese dal sesto mese." },
  { o: ["24 (ventiquattro)", "12 (dodici)", "36 (trentasei)"], c: 0, e: "Durata massima 24 mesi." }
 ],
 tr: "Traduzione: la NASpI è l'indennità di disoccupazione per i lavoratori che perdono il lavoro involontariamente. Per averla servono almeno 13 settimane di contributi nei quattro anni precedenti. La domanda va presentata entro 68 giorni dalla fine del rapporto, altrimenti si perde il diritto. L'importo si riduce del 3% al mese dal sesto mese e la durata massima è di 24 mesi." },

b_e_nis2: { title: "Brano · NIS2 e sicurezza informatica (inglese)", en: true,
 parts: ["Under the NIS2 rules, an entity that suffers a significant incident must send an early warning within 24 hours, a notification within ", 0, " hours and a final report within ", 1, ". The directive distinguishes between essential and ", 2, " entities and requires appropriate ", 3, " measures to manage risk."],
 gaps: [
  { o: ["72 (settantadue)", "48 (quarantotto)", "12 (dodici)"], c: 0, e: "Pre-notifica entro 24 ore, notifica entro 72 ore (D.Lgs. 138/2024)." },
  { o: ["one month (un mese)", "one week (una settimana)", "one year (un anno)"], c: 0, e: "Relazione finale entro un mese." },
  { o: ["important (importanti)", "optional (facoltativi)", "foreign (stranieri)"], c: 0, e: "Soggetti essenziali e soggetti importanti (Dir. UE 2022/2555)." },
  { o: ["security (sicurezza)", "tax (fiscali)", "hiring (di assunzione)"], c: 0, e: "Misure di sicurezza per la gestione del rischio e notifica degli incidenti." }
 ],
 tr: "Traduzione: secondo la NIS2, un soggetto che subisce un incidente significativo deve inviare un preallarme entro 24 ore, una notifica entro 72 ore e una relazione finale entro un mese. La direttiva distingue tra soggetti essenziali e importanti e richiede adeguate misure di sicurezza per gestire il rischio." },

b_i_cad: { title: "Brano · CAD, identità digitale e firme",
 parts: ["Il CAD (D.Lgs. 82/2005) è il Codice dell'Amministrazione ", 0, ". Il sistema pubblico di identità digitale SPID ha tre livelli di sicurezza; la carta d'identità elettronica con PIN corrisponde al livello ", 1, ". La firma elettronica ", 2, " (o digitale) gode della presunzione di riconducibilità al titolare, mentre la firma elettronica avanzata ha comunque forma scritta. PagoPA serve ai pagamenti ", 3, ", non ai rimborsi o alle prestazioni erogate dall'INPS. Per le notifiche tramite SEND, l'atto si perfeziona di regola al ", 4, " dalla consegna dell'avviso al domicilio digitale."],
 gaps: [
  { o: ["Digitale", "Documentale", "Dematerializzato"], c: 0, e: "CAD = Codice dell'Amministrazione Digitale (D.Lgs. 82/2005)." },
  { o: ["3 (elevato)", "2 (significativo)", "1 (basso)"], c: 0, e: "Errata: carta+PIN = livello 3, elevato; il «PIN esteso» non esiste." },
  { o: ["qualificata", "semplice", "vocale"], c: 0, e: "Solo FEQ e firma digitale hanno la presunzione di riconducibilità (art. 25 Reg. UE 910/2014)." },
  { o: ["verso la PA", "da parte della PA verso i cittadini", "tra privati"], c: 0, e: "Art. 5 CAD: PagoPA per i pagamenti verso la PA; resta valido l'F24 per alcuni contributi." },
  { o: ["7° giorno", "15° giorno", "giorno stesso"], c: 0, e: "Art. 26, c. 9, D.L. 76/2020: 7° giorno dalla consegna dell'avviso (15° o 10° in altri casi), salvo accesso anteriore all'atto." }
 ]}
},

quesiti: {
 q_pa_10bis: { t: "Un cittadino presenta all'INPS domanda di pensione e riceve un preavviso di rigetto per mancanza di requisiti. Può usare le osservazioni dell'art. 10-bis?",
  o: ["No: l'art. 10-bis non si applica ai procedimenti previdenziali a istanza di parte degli enti previdenziali", "Sì, sempre, entro 10 giorni", "Sì, ma entro 30 giorni"], c: 0,
  e: "L'esclusione vale per i procedimenti previdenziali e assistenziali a istanza di parte (Errata, p. 78)." },
 q_pa_21non: { t: "Un'autorizzazione illegittima è stata rilasciata 8 mesi fa. Può la PA annullarla d'ufficio per illegittimità?",
  o: ["In linea di principio no: oltre sei mesi il potere è precluso, salvo i casi previsti dalla legge", "Sì, in qualunque momento", "Sì, fino a dodici mesi dal rilascio"], c: 0,
  e: "Art. 21-nonies dopo la L. 182/2025: sei mesi per autorizzazioni e vantaggi economici; oltre, solo nei casi di legge (es. falsa rappresentazione, reato accertato)." },
 q_pa_foia: { t: "Un giornalista chiede all'INPS dati e documenti detenuti dall'ente, senza spiegare il motivo. Quale accesso è questo e che cosa vale?",
  o: ["Accesso civico generalizzato: non serve motivare, ma valgono i limiti di legge (riservatezza, segretezza)", "Accesso documentale: l'istanza va respinta perché manca l'interesse", "Accesso civico semplice: si ottengono solo i dati già pubblicati"], c: 0,
  e: "FOIA (art. 5, c. 2 D.Lgs. 33/2013): chiunque, senza motivazione, con le eccezioni di legge." },
 q_pa_difensore: { t: "Il richiedente impugna un diniego di accesso civico opposto dall'INPS. Può rivolgersi al difensore civico?",
  o: ["No: il difensore civico vale solo per regioni ed enti locali; restano RPCT e ricorso al TAR", "Sì, come per qualsiasi altra amministrazione", "Sì, ma solo entro 10 giorni"], c: 0,
  e: "Errata, p. 83: art. 5, c. 8, D.Lgs. 33/2013." },
 q_pa_motiv: { t: "Un provvedimento sfavorevole privo di motivazione, in un caso in cui questa era obbligatoria, è:",
  o: ["annullabile, perché viola l'art. 3 L. 241/1990", "nullo, perché manca un elemento essenziale", "inesistente e quindi non impugnabile"], c: 0,
  e: "Errata, p. 93: violazione di legge (art. 3) che rende l'atto annullabile (art. 21-octies, c. 1), non nullo." },
 q_pa_giur: { t: "Il pagamento dello stipendio a un dipendente pubblico privatizzato è un atto di gestione del rapporto. Che tipo di atto è e quale giudice è competente?",
  o: ["Atto paritetico: diritto soggettivo, giudice ordinario", "Atto di autorità: interesse legittimo, TAR", "Atto normativo: Corte costituzionale"], c: 0,
  e: "Atti di autorità = interesse legittimo = giudice amministrativo; atti paritetici (es. gestione del personale privatizzato) = diritto soggettivo = giudice ordinario." },

 q_l_collettivo: { t: "Un datore con 12 dipendenti intende licenziarne 6 in 3 mesi per riduzione di attività. Si applica la procedura di licenziamento collettivo?",
  o: ["No: la procedura richiede più di 15 dipendenti", "Sì, perché i licenziamenti sono almeno 5", "Sì, ma solo se ci sono dirigenti"], c: 0,
  e: "Art. 24 L. 223/1991: più di 15 dipendenti (dirigenti inclusi) e almeno 5 licenziamenti in 120 giorni. Qui manca il primo requisito." },
 q_l_mansioni: { t: "Un datore assegna unilateralmente un lavoratore a mansioni di due livelli inferiori, senza alcun accordo. È legittimo?",
  o: ["No: l'assegnazione unilaterale può arrivare a un solo livello inferiore; oltre serve un patto in sede protetta", "Sì, se comunicato per iscritto", "Sì, per le esigenze organizzative"], c: 0,
  e: "Art. 2103, c. 2, c.c.: un solo livello inferiore, stessa categoria legale, forma scritta a pena di nullità. Oltre: patto ex art. 2103, c. 6." },
 q_l_termine: { t: "Un datore stipula un contratto a termine di 15 mesi senza indicare alcuna causale. È legittimo?",
  o: ["No: oltre i 12 mesi occorrono le condizioni previste dalla legge e dai contratti collettivi", "Sì, fino a 24 mesi è sempre acausale", "Sì, se si prevede una proroga"], c: 0,
  e: "Art. 19 D.Lgs. 81/2015: acausale solo fino a 12 mesi." },
 q_l_pa: { t: "Una PA supera i limiti del contratto a termine. Il lavoratore può ottenere la conversione a tempo indeterminato?",
  o: ["No: art. 36 D.Lgs. 165/2001; ha diritto al risarcimento del danno", "Sì, come nel settore privato", "Sì, solo dopo 24 mesi"], c: 0,
  e: "Principio costituzionale del concorso (art. 97, c. 4): niente trasformazione." },

 q_p_naspi68: { t: "Una lavoratrice licenziata il 1° marzo presenta domanda di NASpI il 12 maggio (72 giorni dopo). Cosa accade?",
  o: ["Perde il diritto: la domanda oltre i 68 giorni comporta decadenza", "Ottiene la NASpI con decorrenza dalla domanda", "Ottiene la NASpI ridotta del 3%"], c: 0,
  e: "Errata: i 68 giorni sono decadenza piena." },
 q_p_naspi_dim: { t: "Un lavoratore si è dimesso volontariamente da un posto a tempo indeterminato 6 mesi fa; ora viene licenziato dal nuovo datore dopo 5 settimane di lavoro. Ha diritto alla NASpI?",
  o: ["No: dopo le dimissioni volontarie servono almeno 13 settimane maturate nel nuovo rapporto (eventi dal 1/1/2025)", "Sì, perché il licenziamento è involontario", "Sì, ma ridotta del 50%"], c: 0,
  e: "L. 207/2024, art. 1, c. 171; circ. INPS 98/2025." },
 q_p_silenzio: { t: "Una domanda di pensione è stata presentata 130 giorni fa e l'INPS non ha risposto. Cosa si è formato e quale è il passo successivo?",
  o: ["Silenzio-rigetto (oltre 120 giorni): si ricorre al Comitato, poi al giudice del lavoro", "Silenzio-assenso: la pensione è concessa", "Silenzio-inadempimento: si ricorre al TAR"], c: 0,
  e: "Art. 7 L. 533/1973; Errata pp. 80 e 102: il ricorso ai Comitati è condizione di procedibilità." },
 q_p_adi: { t: "Un nucleo ha ISEE di 11.000 euro. Può ottenere l'Assegno di inclusione?",
  o: ["No: la soglia ISEE è 10.140 euro", "Sì, la soglia è 11.500 euro", "Sì, ma solo con ISEE inferiore a 9.360 euro"], c: 0,
  e: "ISEE ≤ 10.140 euro per ADI e SFL (L. 207/2024)." },
 q_p_dini: { t: "Un lavoratore aveva 20 anni di contributi al 31/12/1995. Come si calcola la sua pensione dopo la riforma Fornero?",
  o: ["Retributivo fino al 2011, contributivo dal 2012", "Interamente contributivo", "Retributivo fino al 1995, contributivo dal 1996"], c: 0,
  e: "Platea dei retributivi (almeno 18 anni al 31/12/1995): pro rata contributivo dal 2012. L'ultima opzione riguarda i misti (meno di 18 anni)." },

 q_c_relazione: { t: "Dove va collocata la Relazione sulla performance rispetto al PIAO?",
  o: ["È autonoma: entro il 30 giugno e validata dall'OIV", "Confluisce nel PIAO insieme al Piano", "Va approvata entro il 31 dicembre dal CdA"], c: 0,
  e: "Errata Cap. 19: nel PIAO confluisce solo il Piano; la Relazione resta autonoma." },
 q_c_mdc: { t: "In un servizio i ricavi sono 100, i costi diretti variabili 40, i costi diretti fissi 20 e i costi indiretti 25. Quanto valgono MdC-IL, MdC-IIL e MOL?",
  o: ["60, 40, 15", "60, 15, 40", "40, 20, 15"], c: 0,
  e: "MdC-IL = 100 − 40 = 60; MdC-IIL = 60 − 20 = 40; MOL = 40 − 25 = 15." },
 q_c_bep: { t: "Se aumentano i costi fissi di un'organizzazione, il Break Even Point:",
  o: ["si sposta più a destra: serve un volume maggiore per il pareggio", "si sposta a sinistra", "non cambia"], c: 0,
  e: "Più alti i costi fissi, più tardi si raggiunge il pareggio." },
 q_c_diff: { t: "Qual è la differenza tra controllo di gestione e controllo di regolarità amministrativo-contabile?",
  o: ["Il primo è manageriale e guida la gestione (efficienza, efficacia, economicità); il secondo verifica la conformità degli atti alla legge", "Sono sinonimi", "Il primo è esterno, il secondo interno"], c: 0,
  e: "Dispensa controlli: strumento direzionale e prospettico contro controllo di conformità a posteriori." },

 q_i_firma: { t: "Quale affermazione sulla firma elettronica avanzata (FEA) è corretta?",
  o: ["Ha sempre forma scritta ed efficacia ex art. 2702 c.c.; la presunzione di riconducibilità è solo di FEQ e firma digitale", "Ha forma scritta solo se il firmatario non la disconosce", "Equivale alla firma autografa in ogni caso per l'art. 21 CAD"], c: 0,
  e: "Errata, pp. 165-166: art. 20, c. 1-bis, CAD; i commi 1-2 dell'art. 21 sono stati abrogati." },
 q_i_pagopa: { t: "PagoPA può essere usato per i rimborsi e le prestazioni che l'INPS eroga ai beneficiari?",
  o: ["No: serve solo ai pagamenti verso la PA", "Sì, per tutti i pagamenti dell'INPS", "Sì, solo per i rimborsi"], c: 0,
  e: "Errata, p. 174: art. 5, cc. 1-2, CAD." }
},

scenari: {
 s_a: { title: "Pratiche in scadenza",
  text: "Sei funzionario in una sede INPS. Lunedì mattina hai in carico: (1) una domanda di prestazione il cui termine di conclusione scade giovedì; (2) una richiesta di accesso civico generalizzato arrivata 20 giorni fa; (3) un reclamo di un utente che chiede una risposta «appena possibile». Il dirigente è in ferie fino a mercoledì; hai un collega di supporto.",
  qs: [
   { t: "Qual è il primo passo più adeguato?",
     o: ["Mappare le scadenze di legge e ordinare le attività per termine e impatto, partendo dalla domanda che scade giovedì e dall'accesso civico (30 giorni)", "Rispondere subito al reclamo, perché l'utente è insistente", "Attendere il rientro del dirigente per decidere le priorità"], c: 0,
     e: "Priorità = termini di legge e impatto sull'utenza, senza aspettare autorizzazioni per ciò che rientra nella tua competenza." },
   { t: "Il collega di supporto si offre di occuparsi del reclamo. Che cosa fai?",
     o: ["Accetti, gli passi il fascicolo e le informazioni necessarie e concordi i tempi di ritorno", "Rifiuti: le pratiche devono essere seguite tutte da te", "Accetti ma non gli dai alcuna indicazione, per non perdere tempo"], c: 0,
     e: "Delega efficace: organizzazione del lavoro e collaborazione, con passaggio di informazioni e tempi condivisi." },
   { t: "Giovedì mattina manca ancora un'integrazione documentale e non riuscirai a concludere la domanda nei termini. Cosa fai?",
     o: ["Richiedi subito l'integrazione all'interessato e, se ricorrono i presupposti, valuti la sospensione del termine (una sola volta, massimo 30 giorni), informando interessato e dirigente", "Lasci scadere il termine: il silenzio varrà come assenso", "Respingi la domanda senza chiedere nulla"], c: 0,
     e: "Art. 2 L. 241/1990: obbligo di provvedere; la sospensione è ammessa una sola volta per massimo 30 giorni. Sulle prestazioni INPS il silenzio vale rigetto dopo 120 giorni, non assenso." }
  ]},
 s_b: { title: "Errore di calcolo dell'ente",
  text: "Durante una verifica scopri che a un pensionato è stato pagato per otto mesi un importo superiore al dovuto per un errore di calcolo dell'ufficio. Il pensionato non ha omesso alcuna comunicazione.",
  qs: [
   { t: "Che cosa fai per prima cosa?",
     o: ["Segnali l'errore al responsabile e documenti i fatti, per avviare la rettifica secondo le procedure", "Recuperi subito l'intera differenza con una trattenuta sul prossimo rateo", "Non dici nulla: l'errore è dell'ufficio"], c: 0,
     e: "Trasparenza e correttezza: segnalazione interna e rettifica nelle forme di legge, non iniziative unilaterali." },
   { t: "Quanto alle somme già pagate?",
     o: ["Con errore imputabile all'ente, di regola non si recuperano, salvo dolo o omessa segnalazione dell'interessato; la rettifica vale per il futuro", "Si recuperano sempre per intero", "Si recuperano solo se il pensionato è in ritardo con altre domande"], c: 0,
     e: "Errata p. 98: art. 52, c. 2, L. 88/1989 e art. 13 L. 412/1991." },
   { t: "Come comunichi la rettifica al pensionato?",
     o: ["Con comunicazione scritta, chiara e motivata, che spiega errore, rettifica e possibili rimedi (ricorso ai Comitati)", "Con una telefonata, senza lasciare traccia", "Non comunichi: applichi la rettifica e basta"], c: 0,
     e: "Motivazione obbligatoria e partecipazione dell'interessato (L. 241/1990)." }
  ]},
 s_c: { title: "Accesso civico di un giornalista",
  text: "Un giornalista chiede, con accesso civico generalizzato, i dati sui contratti di fornitura dell'ufficio, comprensivi dei nominativi di alcune persone fisiche. L'istanza non indica alcun motivo. Il termine di risposta è di 30 giorni.",
  qs: [
   { t: "La mancanza di motivazione è un problema?",
     o: ["No: nell'accesso generalizzato non serve motivare", "Sì: l'istanza va respinta", "Sì: va chiesto di integrare con un interesse diretto"], c: 0,
     e: "Solo l'accesso documentale richiede la motivazione." },
   { t: "Che cosa fai riguardo ai dati delle persone fisiche?",
     o: ["Valuti i limiti di legge (tutela dei dati personali), coinvolgendo se serve il DPO o l'RPCT, e fornisci i dati ammissibili oscurando quelli da proteggere", "Fornisci tutto senza valutazioni", "Rifiuti tutto senza motivare"], c: 0,
     e: "Bilanciamento tra trasparenza e riservatezza; il diniego va comunque motivato." },
   { t: "Il termine di 30 giorni sta per scadere e la valutazione non è conclusa. Cosa fai?",
     o: ["Chiedi un confronto urgente a dirigente/RPCT per chiudere nei termini ed eviti di lasciare l'istanza senza risposta", "Attendi: il silenzio vale assenso", "Rispondi con un rifiuto generico"], c: 0,
     e: "L'inerzia non è assenso: obbligo di provvedere entro 30 giorni." }
  ]},
 s_d: { title: "Credenziali e sicurezza informatica",
  text: "Un collega in difficoltà con una scadenza ti chiede la tua password per accedere a un applicativo con dati di utenti, perché la sua utenza è bloccata.",
  qs: [
   { t: "Che cosa rispondi?",
     o: ["Non condividi le credenziali, che sono personali, e lo inviti a chiedere subito lo sblocco al servizio informatico", "Gliela dai e gli chiedi di cambiarla dopo", "Gliela dai e ti assenti"], c: 0,
     e: "Le credenziali sono personali: accessi tracciati e responsabilità individuale (GDPR, sicurezza)." },
   { t: "Il collega insiste: dice che il dirigente lo ha autorizzato a voce. Cosa fai?",
     o: ["Mantieni il rifiuto e proponi di chiedere conferma scritta al dirigente e di attivare l'assistenza", "Cedi, visto che il dirigente è informato", "Cedi se il collega promette di non usare dati sensibili"], c: 0,
     e: "Nessuna autorizzazione orale può derogare alle regole di sicurezza." },
   { t: "Nei giorni dopo noti accessi anomali con la tua utenza. Cosa fai?",
     o: ["Cambi subito la password e segnali l'incidente al referente per la sicurezza/DPO secondo le procedure sulle violazioni di dati", "Aspetti per vedere se succede ancora", "Cancelli i registri degli accessi"], c: 0,
     e: "Segnalazione tempestiva: i tempi di notifica degli incidenti sono stretti (es. 24 ore e 72 ore nella NIS2)." }
  ]},
 s_e: { title: "Utente aggressivo allo sportello",
  text: "Un utente si presenta allo sportello molto agitato perché la sua domanda è stata respinta. Alza la voce e ti accusa di non fare il tuo lavoro. Dietro di lui c'è una fila di persone.",
  qs: [
   { t: "Come reagisci inizialmente?",
     o: ["Mantieni la calma, lo ascolti e riformuli il problema, proponendo di spostarvi in un luogo più riservato", "Gli rispondi sullo stesso tono", "Gli dici di tornare un altro giorno"], c: 0,
     e: "Competenze relazionali: de-escalation, ascolto, rispetto dell'utenza." },
   { t: "Controllando la pratica vedi che il rigetto è fondato, perché mancano i requisiti. Che cosa fai?",
     o: ["Spieghi con chiarezza i motivi e indichi i rimedi disponibili (ricorso ai Comitati, nuova domanda se ricorrono i requisiti)", "Gli prometti di riesaminare la pratica anche se sai che non cambierà", "Eviti di spiegare e lo rinvii all'ufficio ricorsi"], c: 0,
     e: "Chiarezza e motivazione: non promettere nulla di non dovuto e indicare le tutele." },
   { t: "L'utente continua con minacce verbali. Cosa fai?",
     o: ["Interrompi il colloquio in modo educato, avvisi il collega o il responsabile e, se serve, la vigilanza, seguendo le procedure", "Chiudi lo sportello senza dire nulla", "Gli concedi ciò che chiede per farlo andare via"], c: 0,
     e: "Tutela della sicurezza propria e dell'utenza; nessuna deroga alle regole sotto pressione." }
  ]}
},

sims: [
 { id: "s1", title: "Simulazione 1 · Procedimento, lavoro e previdenza",
   desc: "Tre brani (procedimento amministrativo, licenziamento, NASpI), cinque quesiti e due scenari operativi.",
   brani: ["b_pa_proc", "b_l_licenz", "b_p_naspi"], quesiti: ["q_pa_10bis", "q_pa_21non", "q_l_collettivo", "q_p_naspi68", "q_p_naspi_dim"], scenari: ["s_a", "s_b"] },
 { id: "s2", title: "Simulazione 2 · Accesso, assistenza e performance",
   desc: "Tre brani (accesso e trasparenza, ADI e contenzioso previdenziale, performance e PIAO), cinque quesiti e due scenari.",
   brani: ["b_pa_accesso", "b_p_adi", "b_c_perf"], quesiti: ["q_pa_foia", "q_pa_difensore", "q_p_silenzio", "q_p_adi", "q_c_relazione"], scenari: ["s_c", "s_e"] },
 { id: "s3", title: "Simulazione 3 · Lavoro pubblico, pensioni, inglese e informatica",
   desc: "Tre brani (disciplina nel pubblico impiego, pensioni, NIS2 in inglese), cinque quesiti tra lavoro, pensioni, controllo e digitale, e due scenari.",
   brani: ["b_l_pubblico", "b_p_pens", "b_e_nis2"], quesiti: ["q_l_mansioni", "q_p_dini", "q_c_mdc", "q_i_firma", "q_pa_motiv"], scenari: ["s_d", "s_a"] }
]
};
