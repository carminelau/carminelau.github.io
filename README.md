# Carmine Laudato

Sito personale bilingue: ricerca, software, dati ambientali e manifattura additiva.

Sito pubblico: https://carminelau.github.io/

## Anteprima locale

Richiede Node.js 22 o successivo. Non occorre installare pacchetti.

```sh
npm run dev
```

Aprire http://127.0.0.1:52471/.

```sh
npm run check
npm run build
```

La build salva in `dist/` solo i file destinati al pubblico. Documenti di sviluppo, script, screenshot e configurazioni non sono inclusi.

## Modificare il sito

- `index.html`: contenuti italiani, struttura, progetti, pubblicazioni e metadati.
- `app.js`: entrambe le traduzioni e interazioni. Quando cambia un testo italiano, aggiornare anche la corrispondente voce nel dizionario.
- `styles.css`: grafica, tipografia e comportamento responsive.
- `assets/`: foto, font locali, icona e anteprima social.

La lingua inglese si può condividere con `?lang=en`. La preferenza viene salvata solo nel browser del visitatore. Nessun servizio di analytics o cookie di profilazione.

## Pubblicazione

Ogni push su `main` avvia `.github/workflows/deploy.yml`: verifica, build statica, distribuzione su GitHub Pages. Il repository deve avere Pages impostato su GitHub Actions. Per un dominio personalizzato, aggiornare canonical, Open Graph, JSON-LD, robots.txt e sitemap.xml.

## Fonti dei contenuti

- [GitHub personale](https://github.com/carminelau)
- [Dipartimento di Informatica UNISA](https://www.di.unisa.it/en/department/faculty-and-staff)
- [Team Sense Square](https://sensesquare.eu/company/)
- [Team ADIVO](https://adivo.it/it/chi-siamo)
- [Ricerca e contatto pubblico](https://github.com/carminelau/asita2026-air-quality-reconstruction)
- [Articolo 2024](https://doi.org/10.3390/app14188542)
- [Articolo 2025](https://doi.org/10.3303/CET25117194)
- [Record IRIS 2026](https://www.iris.unisa.it/handle/11386/4968035)

Il repository ASITA viene presentato come progetto di ricerca con codice e risultati, senza attribuirgli uno stato editoriale non documentato. Le figure del sito sono geometriche e illustrative: non mostrano misure ambientali reali.

## Asset e licenze

Ritratto professionale di Carmine dal sito pubblico ADIVO; usato per il sito personale del soggetto. Fonte e trattamento documentati in `assets/provenance.json`. Manrope e Instrument Serif sono distribuiti con SIL Open Font License: testi delle licenze in `assets/fonts/`. La scultura è geometria generata dal codice del sito; l'immagine social è una cattura del sito.

## Verifiche

Controlli su sintassi JavaScript, file locali, ancore, ID HTML e link esterni. Verifica browser: italiano/inglese, scultura, pausa, movimento ridotto, copia email, privacy, menu mobile e chiusura con Escape. Layout controllato da 320 a 1440 px. Controllo axe per WCAG A/AA: nessuna violazione automatica rilevata; non equivale a una certificazione di accessibilità.

## Logo personale

Monogramma CL: [SVG vettoriale](assets/logo-carmine-laudato.svg), [PNG trasparente 512px](assets/logo-carmine-laudato-flat.png), [concept originale](assets/logo-carmine-laudato.png). La favicon condivide la stessa geometria. Prompt e processo sono documentati in [design/logo-generation.md](design/logo-generation.md).
