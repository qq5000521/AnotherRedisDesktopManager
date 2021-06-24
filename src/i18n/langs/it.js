const it = {
  message: {
    new_connection: 'Nuova Connessione',
    refresh_connection: 'Ricaricare',
    edit_connection: 'Modificare Connessione',
    del_connection: 'Elimina Connessione',
    close_connection: 'Chiudere Connessione',
    add_new_line: 'Inserisci Nuova Riga',
    redis_version: 'Versione del Redis',
    process_id: 'ID del Processi',
    used_memory: 'Memoria Usata',
    used_memory_peak: 'Picco di Memoria Utilizzato',
    used_memory_lua: 'Memoria Utilizzato Lua',
    connected_clients: 'Clienti Connessi',
    total_connections_received: 'Connessioni Totali',
    total_commands_processed: 'Comandi Totali',
    key_statistics: 'Principale Statistiche',
    all_redis_info: 'Tutte le Informazioni su Redis',
    server: 'Server',
    memory: 'Memoria',
    stats: 'Statistiche',
    settings: 'Impostazioni',
    confirm_to_delete_row_data: 'Confermare per eliminare i dati della riga?',
    delete_success: 'Eliminato con successo',
    delete_failed: 'Eliminazione non riuscita',
    modify_success: 'Modificato con successo',
    modify_failed: 'Modificazione non riuscita',
    add_success: 'Aggiunto con successo',
    add_failed: 'Aggiunzione non riuscita',
    value_exists: 'Valore esistente',
    refresh_success: 'Ricaricato con successo',
    click_enter_to_rename: 'Fare clic o premere Invio per rinominare',
    click_enter_to_ttl: 'Fare clic o premere Invio per modificare TTL',
    confirm_to_delete_key: 'Conferma per eliminare {key} ?',
    confirm_to_rename_key: 'Conferma per rinominare {old} -> {new} ?',
    edit_line: 'Modificare linea',
    auto_refresh: 'Auto aggiornamento',
    auto_refresh_tip: 'Interruttore di aggiornamento automatico, Aggiorna ogni {interval} secondi',
    key_not_exists: 'La chiave non esiste',
    collapse_all: 'Comprimi tutti',
    expand_all: 'Espandi tutti',
    json_format_failed: 'Analisi Json non riuscita',
    msgpack_format_failed: 'Analisi Msgpack non riuscita',
    php_unserialize_format_failed: 'Serializzazione PHP non riuscito',
    clean_up: 'Pulizia',
    redis_console: 'Console del Redis',
    confirm_to_delete_connection: 'Confermare per eliminare la connessione?',
    connection_exists: 'La configurazione della connessione già esiste',
    close_to_edit_connection: 'È necessario chiudere la connessione prima di modificare',
    close_to_connection: 'Confermare per chiudere la connessione?',
    ttl_delete: 'Impostare TTL<=0 Eliminerà la chiave direttamente',
    max_page_reached: 'Pagina massima raggiunta',
    add_new_key: 'Nuova chiave',
    enter_new_key: 'Immettere prima il nuovo nome della chiave',
    key_type: 'Tipo di chiave',
    save: 'Salva',
    enter_to_search: 'Premere Invio per cercare',
    export_success: 'Esportazione riuscita',
    select_import_file: 'Seleziona un file',
    import_success: 'Importazione riuscita',
    put_file_here: 'Trascina il file qui o fai clic per selezionare',
    config_connections: 'Connessioni',
    import: 'Importare',
    export: 'Esportare',
    open: 'Apri',
    close: 'Chiude',
    open_new_tab: 'Apri in una nuova scheda',
    exact_search: 'Ricerca esatta',
    enter_to_exec: 'Premi Invio per eseguire i comandi, su e giù per cambiare la cronologia',
    pre_version: 'Versione',
    manual_update: 'Scaricare Manuale',
    retry_too_many_times: 'Troppi tentativi di riconnessione. Si prega di controllare lo stato del server',
    key_to_search: 'Ricerca per parole chiave',
    begin_update: 'Aggiornare',
    ignore_this_version: 'Ignora questa versione',
    check_update: 'Ricerca aggiornamenti',
    update_checking: 'Alla ricerca di aggiornamenti esistenti, aspetta un attimo...',
    update_available: 'Nuova versione trovata',
    update_not_available: 'A sua applicazione è stata l\'ultima versione recente',
    update_error: 'Aggiornamento non riuscito',
    update_downloading: 'Scaricando...',
    update_download_progress: 'Download in corso',
    update_downloaded: 'Aggiornamento download completato, riavvia la app per favore.\
    [Tips]: Se stai utilizzando Windows, dopo aver chiuso l\'app, attendi che l\'icona del desktop si aggiorni a uno stato normale (circa 10 secondi), quindi puoi riaprirla',
    mac_not_support_auto_update: 'Il Mac non supporta l\'aggiornamento automatico, Si prega di <a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases">scaricare</a> e reinstallare manualmente,\
    o eseguire "brew reinstall --cask another-redis-desktop-manager"\
    <br><br>🧡se ti è utile, puoi sponsorizzare <a href="https://apps.apple.com/app/id1516451072">AppStore</a>, e AppStore lo aggiornerà automaticamente per te.',
    font_family: 'Famiglia di font',
    font_faq_title: 'Istruzioni per l\'impostazione dei fonti',
    font_faq: '1. È possibile definire più sorgenti<br>\
    2. La selezione della Font è ordinata. Si consiglia di scegliere prima il carattere inglese e poi il carattere nella tua lingua<br>\
    3. Quando l\'elenco dei caratteri di sistema non può essere caricato in alcuni casi eccezionali, è possibile immettere manualmente il nome del carattere installato.',
    private_key_faq: 'La chiave privata in formato RSA è compatibile e inizia con <pre>-----BEGIN RSA PRIVATE KEY-----</pre>\
    ma se inizi con<pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre>è necessario convertire il formato tramite <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre>Questa operazione non influirà sul precedente accesso con chiave privata',
    dark_mode: 'Modalità scura',
    load_more_keys: 'Carica più chiavi',
    key_name: 'Nome della chiave',
    project_home: 'Progetto Home',
    cluster_faq: 'Seleziona qualsiasi nodo nel cluster da compilare e gli altri nodi verranno identificati automaticamente.',
    redis_status: 'Informazione su Redis',
    confirm_flush_db: 'Confermare per eliminare tutte le chiavi in ​​db {db}?',
    flushdb: 'Flush DB',
    flushdb_prompt: 'ingresso "{txt}"',
    info_disabled: 'Eccezione di esecuzione del comando Info (potrebbe essere stata disabilitata), le informazioni redis non possono essere visualizzate',
    page_zoom: 'Zoom della pagina',
    scan_disabled: 'Eccezione di esecuzione del comando di scansione (potrebbe essere stata disabilitata), l\'elenco delle chiavi non può essere visualizzato',
    key_type_not_support: 'La visualizzazione visiva non è supportata per questo tipo. Si prega di utilizzare la console',
    delete_folder: 'Scansiona ed elimina l\'intera cartella',
    multiple_select: 'Selezione multipla',
    copy: 'Copia',
    copy_success: 'Copia realizzata con successo',
    keys_to_be_deleted: 'Chiavi da eliminare',
    delete_all: 'Cancella Tutto',
    clear_cache: 'Cancella cache',
    mark_color: 'Segna colore',
    key_no_permission: 'Il permesso di lettura del file è scaduto, riseleziona manualmente il file della chiave',
    toggle_check_all: 'Seleziona tutto | Deseleziona tutto',
    select_lang: 'Seleziona la lingua',
    clear_cache_tip: 'Quando si verifica un problema con il client, questa operazione eliminerà tutte le connessioni e le configurazioni per ripristinare il client',
    detail: 'Dettaglio',
    separator_tip: 'Il separatore della vista ad albero, impostato su vuoto per disabilitare l\'albero e visualizzare i tasti come elenco',
    confirm_modify_unvisible_content: 'Il contenuto contiene caratteri invisibili, puoi modificare in sicurezza nella "Hex View". Se continuare a modificare nella "Text View" può causare errori di codifica, continuare?',
    keys_per_loading: 'Numero di chiavi',
    keys_per_loading_tip: 'Il numero di chiavi caricate ogni volta. Un\'impostazione troppo grande potrebbe influire sulle prestazioni',
    host: 'Indirizzo',
    port: 'Porta',
    username: 'Nome utente',
    password: 'Parola d\'ordine',
    connection_name: 'Nome personalizzato',
    separator: 'Delimitatore',
    timeout: 'Tempo scaduto',
    private_key: 'Chiave privata',
    public_key: 'Chiave pubblica',
    authority: 'Autorità',
  },
};

export default it;
