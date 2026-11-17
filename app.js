'use strict';

const translations = {
  it: {
    skip:'Vai al contenuto', mainNav:'Menu principale', navWork:'Progetti', navResearch:'Ricerca', navAbout:'Chi sono', navContact:'Parliamone', openMenu:'Apri menu', closeMenu:'Chiudi menu',
    heroLine1:'Connetto dati,', heroLine2:'codice e', heroLine3:'materia.', heroIntro:'Sono Carmine. Faccio ricerca in informatica e costruisco sistemi che mettono in dialogo il mondo digitale con quello fisico.',
    exploreWork:'Esplora il mio lavoro', artCaption:'Una forma, tre prospettive.', location:'Salerno, Italia · aperto alle connessioni', exploreForm:'Esplora la forma generativa', data:'Dati', code:'Codice', matter:'Materia',
    pauseMotion:'Metti in pausa l’animazione', resumeMotion:'Riprendi l’animazione', affiliations:'Le realtà di cui faccio parte', connections:'La ricerca incontra<br>il mondo reale.', unisaRole:'Dottorando in Informatica', adivoRole:'Cofondatore · Stampa 3D',
    workTitle:'Le idee, messe alla prova.', workIntro:'Dal primo dato al prototipo.<br>Una selezione di ciò su cui lavoro.', featureTitle:'Dove il dato manca,<br><em>inizia la ricerca.</em>', featureContext:'Ricostruzione spaziale della qualità dell’aria',
    featureDescription:'Integrare fonti diverse, confrontare modelli e ricostruire informazioni nello spazio. Codice e risultati aggregati degli esperimenti ASITA 2026, con metodi e limiti documentati.', viewResearch:'Esplora il progetto', networkNote:'Fonti diverse. Una visione connessa.', diagramLabel:'Schema illustrativo',
    senseTitle:'Rendere leggibile<br>l’ambiente.', senseDescription:'Sensoristica, integrazione dati e software per il monitoraggio ambientale. Il punto in cui un segnale diventa informazione utile.', viewSense:'Scopri Sense Square',
    adivoTitle:'Dall’idea<br>alla materia.', adivoDescription:'Manifattura additiva, prototipazione e sviluppo di sistemi connessi. In ADIVO unisco software, automazione e stampa 3D.', viewAdivo:'Entra in ADIVO',
    openSourceTitle:'A codice aperto.', modbusDescription:'Una libreria per far dialogare sensori, Arduino ed ESP32.', mcpDescription:'Screening di testi accademici, con indicatori e limiti espliciti.', allGithub:'Tutti i repository su GitHub',
    researchTitle:'La ricerca continua.', researchIntro:'Dati ambientali e processi di stampa 3D.<br>Domande diverse, lo stesso metodo.', publication2026:'Reti di sensori e ricostruzione della qualità dell’aria · IRIS UNISA', researchProfile:'Il mio profilo scientifico',
    aboutTitle:'La curiosità è il filo.<br><em>Il resto si connette.</em>', aboutLead:'Mi interessa quello che succede quando discipline diverse iniziano a parlarsi.',
    aboutParagraph1:'Sono dottorando in Informatica all’Università degli Studi di Salerno. La mia ricerca incontra i dati ambientali, la ricostruzione spaziale e l’ingegneria del software.',
    aboutParagraph2:'In Sense Square lavoro all’integrazione dei dati e ai sistemi IoT. Come cofondatore di ADIVO, porto lo stesso approccio nella manifattura additiva: progettare, sperimentare, costruire.',
    aboutParagraph3:'Dal sensore al software, dal modello al pezzo stampato. Mi piace seguire le idee fino a quando diventano qualcosa che funziona.',
    contactInvitation:'Le cose interessanti iniziano con una conversazione.', contactTitle:'Facciamo<br><em>connessioni.</em>', copyEmail:'Copia indirizzo email', copied:'Email copiata', copyFailed:'Copia non disponibile: seleziona l’indirizzo.',
    footerNote:'Pensato a Salerno. Connesso al resto.', backTop:'Torna all’inizio', privacy:'Questo sito non usa cookie di profilazione, analytics o moduli di raccolta dati. Font e immagini sono ospitati insieme al sito. GitHub Pages gestisce l’hosting e può trattare dati tecnici di accesso. I siti esterni applicano le proprie informative.', githubPrivacy:'Informativa privacy GitHub',
    title:'Carmine Laudato — Dati, codice e materia', description:'Carmine Laudato. Dottorando in Informatica all’Università di Salerno, Data Integration Developer in Sense Square e cofondatore ADIVO. Dati, codice e materia.'
  },
  en: {
    skip:'Skip to content', mainNav:'Main navigation', navWork:'Work', navResearch:'Research', navAbout:'About me', navContact:'Let’s talk', openMenu:'Open menu', closeMenu:'Close menu',
    heroLine1:'Connecting data,', heroLine2:'code and', heroLine3:'matter.', heroIntro:'I’m Carmine. I research computer science and build systems that bring the digital and physical worlds into conversation.',
    exploreWork:'Explore my work', artCaption:'One form, three perspectives.', location:'Salerno, Italy · open to connections', exploreForm:'Explore the generative form', data:'Data', code:'Code', matter:'Matter',
    pauseMotion:'Pause animation', resumeMotion:'Resume animation', affiliations:'The organisations I work with', connections:'Where research meets<br>the real world.', unisaRole:'PhD student in Computer Science', adivoRole:'Co-founder · 3D Printing',
    workTitle:'Ideas, put to the test.', workIntro:'From the first data point to the prototype.<br>A selection of what I work on.', featureTitle:'Where data ends,<br><em>research begins.</em>', featureContext:'Spatial air-quality reconstruction',
    featureDescription:'Integrating sources, comparing models and reconstructing information across space. Code and aggregate results from the ASITA 2026 experiments, with documented methods and limitations.', viewResearch:'Explore the project', networkNote:'Different sources. One connected view.', diagramLabel:'Illustrative diagram',
    senseTitle:'Making the environment<br>understandable.', senseDescription:'Sensors, data integration and software for environmental monitoring. Where a signal becomes useful information.', viewSense:'Discover Sense Square',
    adivoTitle:'From an idea<br>to something real.', adivoDescription:'Additive manufacturing, prototyping and connected systems. At ADIVO, I bring together software, automation and 3D printing.', viewAdivo:'Explore ADIVO',
    openSourceTitle:'Out in the open.', modbusDescription:'A library connecting sensors, Arduino and ESP32.', mcpDescription:'Screening academic writing, with explicit indicators and limitations.', allGithub:'All repositories on GitHub',
    researchTitle:'Research keeps going.', researchIntro:'Environmental data and 3D printing.<br>Different questions, the same method.', publication2026:'Sensor networks and air-quality reconstruction · IRIS UNISA', researchProfile:'My research profile',
    aboutTitle:'Curiosity is the thread.<br><em>The rest connects.</em>', aboutLead:'I’m interested in what happens when different disciplines start talking to each other.',
    aboutParagraph1:'I’m a PhD student in Computer Science at the University of Salerno. My research brings together environmental data, spatial reconstruction and software engineering.',
    aboutParagraph2:'At Sense Square, I work on data integration and IoT systems. As a co-founder of ADIVO, I bring the same approach to additive manufacturing: design, experiment, build.',
    aboutParagraph3:'From the sensor to the software, from the model to the printed part. I like following ideas until they become something that works.',
    contactInvitation:'Interesting things start with a conversation.', contactTitle:'Let’s make<br><em>connections.</em>', copyEmail:'Copy email address', copied:'Email copied', copyFailed:'Copy unavailable: select the email address.',
    footerNote:'Thought up in Salerno. Connected to the rest.', backTop:'Back to top', privacy:'This website uses no profiling cookies, analytics or data-collection forms. Fonts and images are hosted with the website. GitHub Pages provides hosting and may process technical access data. External websites have their own privacy policies.', githubPrivacy:'GitHub privacy statement',
    title:'Carmine Laudato — Data, code and matter', description:'Carmine Laudato. PhD student in Computer Science at the University of Salerno, Data Integration Developer at Sense Square and ADIVO co-founder. Data, code and matter.'
  }
};

let language = 'it';
const languageToggle = document.querySelector('#language-toggle');
const motionToggle = document.querySelector('#motion-toggle');
const menuToggle = document.querySelector('#menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = motionPreference.matches;

function updateMotionLabel() {
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.setAttribute('aria-label', translations[language][paused ? 'resumeMotion' : 'pauseMotion']);
  motionToggle.querySelector('use').setAttribute('href', paused ? '#play' : '#pause');
}
function setLanguage(next) {
  language = next === 'en' ? 'en' : 'it';
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    const value = dictionary[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute('aria-label', value);
  });
  document.title = dictionary.title;
  document.querySelector('meta[name="description"]').content = dictionary.description;
  document.querySelector('meta[property="og:title"]').content = dictionary.title;
  document.querySelector('meta[property="og:description"]').content = dictionary.description;
  document.querySelector('meta[property="og:locale"]').content = language === 'en' ? 'en_GB' : 'it_IT';
  languageToggle.textContent = language === 'it' ? 'EN' : 'IT';
  languageToggle.setAttribute('aria-label', language === 'it' ? 'Switch to English' : 'Passa all’italiano');
  menuToggle.setAttribute('aria-label', dictionary[mobileNav.hidden ? 'openMenu' : 'closeMenu']);
  document.querySelector('#copy-status').textContent = '';
  updateMotionLabel();
  try { localStorage.setItem('portfolio-language', language); } catch { /* Language still works when storage is unavailable. */ }
  const url = new URL(window.location.href);
  if (language === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
  try { history.replaceState(null, '', url); } catch { /* Local file previews may not allow history updates. */ }
}
const queryLanguage = new URLSearchParams(window.location.search).get('lang');
let savedLanguage;
try { savedLanguage = localStorage.getItem('portfolio-language'); } catch { /* No storage required. */ }
setLanguage(queryLanguage || savedLanguage || 'it');
languageToggle.addEventListener('click', () => setLanguage(language === 'it' ? 'en' : 'it'));
document.querySelector('#year').textContent = String(new Date().getFullYear());

function closeMenu() {
  mobileNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', translations[language].openMenu);
}
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = expanded;
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', translations[language][expanded ? 'openMenu' : 'closeMenu']);
});
mobileNav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuToggle.focus(); } });
window.matchMedia('(min-width: 381px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

let copyTimer;
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  clearTimeout(copyTimer);
  try {
    await navigator.clipboard.writeText('claudato@unisa.it');
    status.textContent = translations[language].copied;
  } catch {
    status.textContent = translations[language].copyFailed;
  }
  copyTimer = setTimeout(() => { status.textContent = ''; }, 4500);
});
document.querySelector('#privacy-button').addEventListener('click', event => {
  const note = document.querySelector('#privacy-note');
  note.hidden = !note.hidden;
  event.currentTarget.setAttribute('aria-expanded', String(!note.hidden));
});

// Each mode is a mathematical perspective on the same toroidal surface.
// This artwork is generative geometry, not environmental observations.
const canvas = document.querySelector('#sculpture');
const context = canvas.getContext('2d');
if (context) {
  let width = 0;
  let height = 0;
  let phase = 0.4;
  let lastTime = 0;
  let animationId = null;
  let visible = true;
  let targetMode = 2;
  let mode = 2;
  let pointerX = 0;
  let pointerY = 0;
  let rotationX = 0;
  let rotationY = 0;
  const rings = 62;
  const steps = 100;
  const tau = Math.PI * 2;
  const unitCircle = Array.from({ length: steps + 1 }, (_, i) => ({ u: i / steps * tau, c: Math.cos(i / steps * tau), s: Math.sin(i / steps * tau) }));
  const ringCircle = Array.from({ length: rings }, (_, i) => ({ v: i / rings * tau, c: Math.cos(i / rings * tau), s: Math.sin(i / rings * tau) }));

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    render();
  }
  function project(x, y, z, angle) {
    const a = angle + rotationX;
    const b = -.52 + rotationY;
    const x1 = x * Math.cos(a) + z * Math.sin(a);
    const z1 = -x * Math.sin(a) + z * Math.cos(a);
    const y1 = y * Math.cos(b) - z1 * Math.sin(b);
    const z2 = y * Math.sin(b) + z1 * Math.cos(b);
    const scale = Math.min(width * .25, height * .34);
    const perspective = 5.5 / (5.5 + z2);
    return { x: width * .51 + x1 * scale * perspective, y: height * .48 + y1 * scale * perspective, z: z2 };
  }
  function render() {
    if (!width || !height) return;
    context.clearRect(0, 0, width, height);
    const contours = [];
    const terrainAmount = Math.max(0, 1 - Math.abs(mode - 0));
    const nodeAmount = Math.max(0, 1 - Math.abs(mode - 1));
    for (let j = 0; j < rings; j++) {
      const ring = ringCircle[j];
      const points = [];
      let depth = 0;
      for (const circle of unitCircle) {
        const ripple = .09 * Math.sin(circle.u * 3 + ring.v * 2);
        const major = 1.04 + .12 * Math.cos(circle.u * 3);
        const minor = .43 + ripple;
        const x = (major + minor * ring.c) * circle.c;
        const z = (major + minor * ring.c) * circle.s;
        const y = minor * ring.s + .19 * Math.sin(circle.u * 2);
        const flatten = 1 - terrainAmount * .5;
        const point = project(x, y * flatten, z, phase * .15 + .62);
        points.push(point);
        depth += point.z;
      }
      contours.push({ points, depth: depth / points.length, j });
    }
    contours.sort((a, b) => b.depth - a.depth);
    for (const contour of contours) {
      const alpha = Math.max(.16, Math.min(.9, .55 - contour.depth * .23));
      context.lineWidth = nodeAmount > .5 ? .6 : .85;
      context.strokeStyle = 'rgba(23,58,44,' + alpha * (1 - nodeAmount * .65) + ')';
      context.beginPath();
      contour.points.forEach((point, i) => {
        if (i === 0) context.moveTo(point.x, point.y); else context.lineTo(point.x, point.y);
      });
      context.stroke();
      if (nodeAmount > .02 && contour.j % 3 === 0) {
        context.fillStyle = 'rgba(23,58,44,' + alpha * nodeAmount + ')';
        for (let k = 0; k < steps; k += 6) {
          const point = contour.points[k];
          context.beginPath(); context.arc(point.x, point.y, 1.35, 0, tau); context.fill();
        }
      }
      if (terrainAmount > .05 && contour.j % 5 === 0) {
        context.strokeStyle = 'rgba(166,71,46,' + alpha * terrainAmount * .5 + ')';
        context.stroke();
      }
    }
  }
  function tick(time) {
    animationId = null;
    if (!visible || document.hidden || paused) return;
    if (time - lastTime >= 32) {
      const delta = Math.min(time - lastTime, 64) / 1000;
      phase += delta;
      mode += (targetMode - mode) * .07;
      rotationX += (pointerX - rotationX) * .035;
      rotationY += (pointerY - rotationY) * .035;
      lastTime = time;
      render();
    }
    animationId = requestAnimationFrame(tick);
  }
  function syncAnimation() {
    if (animationId !== null) { cancelAnimationFrame(animationId); animationId = null; }
    if (!paused && visible && !document.hidden) { lastTime = performance.now(); animationId = requestAnimationFrame(tick); }
    else render();
  }
  motionToggle.addEventListener('click', () => { paused = !paused; updateMotionLabel(); syncAnimation(); });
  motionPreference.addEventListener('change', event => { paused = event.matches; updateMotionLabel(); syncAnimation(); });
  document.querySelectorAll('[data-mode]').forEach(button => {
    button.addEventListener('click', () => {
      targetMode = { data: 0, code: 1, matter: 2 }[button.dataset.mode];
      document.querySelectorAll('[data-mode]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      if (paused) { mode = targetMode; render(); } else syncAnimation();
    });
  });
  canvas.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || paused) return;
    const bounds = canvas.getBoundingClientRect();
    pointerX = ((event.clientX - bounds.left) / bounds.width - .5) * .45;
    pointerY = ((event.clientY - bounds.top) / bounds.height - .5) * .25;
  });
  canvas.addEventListener('pointerleave', () => { pointerX = 0; pointerY = 0; });
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; syncAnimation(); }, { threshold: .05 }).observe(canvas);
  document.addEventListener('visibilitychange', syncAnimation);
  resize();
  syncAnimation();
} else {
  motionToggle.hidden = true;
  document.querySelector('.art-controls').hidden = true;
}
