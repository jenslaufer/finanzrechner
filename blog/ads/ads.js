// Blog ad configuration — mirrors src/ads/config.js for static HTML articles
// Programs updated 2026-04-02 from active financeAds partnerships

const blogAdConfig = {
  default: {
    de: { text: 'Geldanlage neu gedacht: Investieren, bezahlen und sparen in einer App.', url: 'https://www.financeads.net/tc.php?t=83062C4514102816T', cta: 'Jetzt entdecken', program: 'UnitPlus' },
    en: { text: 'Investing reimagined: invest, pay and save in one app.', url: 'https://www.financeads.net/tc.php?t=83062C4514102816T', cta: 'Discover now', program: 'UnitPlus' },
  },
  investing: {
    de: { text: 'Geldanlage neu gedacht: Investieren, bezahlen und sparen in einer App.', url: 'https://www.financeads.net/tc.php?t=83062C4514102816T', cta: 'Konto eröffnen', program: 'UnitPlus' },
    en: { text: 'Investing reimagined: invest, pay and save in one app.', url: 'https://www.financeads.net/tc.php?t=83062C4514102816T', cta: 'Open account', program: 'UnitPlus' },
  },
  property: {
    de: { text: 'Baufinanzierung vergleichen \u2014 günstige Zinsen bei DTW.', url: 'https://www.financeads.net/tc.php?t=83062C74932702T', cta: 'Zinsen vergleichen', program: 'DTW Immobilienfinanzierung' },
    en: { text: 'Compare mortgage rates \u2014 low rates at DTW.', url: 'https://www.financeads.net/tc.php?t=83062C74932702T', cta: 'Compare rates', program: 'DTW Immobilienfinanzierung' },
  },
  loans: {
    de: { text: 'Kredit gesucht? Santander BestCredit — schnell, flexibel, günstig.', url: 'https://www.financeads.net/tc.php?t=83062C19318411T', cta: 'Kredit berechnen', program: 'Santander Consumer Bank' },
    en: { text: 'Need a loan? Santander BestCredit — fast, flexible, affordable.', url: 'https://www.financeads.net/tc.php?t=83062C19318411T', cta: 'Calculate loan', program: 'Santander Consumer Bank' },
  },
  fire: {
    de: { text: 'Finanzielle Freiheit planen? Digitale Vermögensverwaltung ab 1.500 €.', url: 'https://www.financeads.net/tc.php?t=83062C4278103360T', cta: 'Jetzt starten', program: 'froots' },
    en: { text: 'Planning financial freedom? Digital wealth management from €1,500.', url: 'https://www.financeads.net/tc.php?t=83062C4278103360T', cta: 'Get started', program: 'froots' },
  },
  tagesgeld: {
    de: { text: 'Attraktive Tagesgeld-Zinsen bei der DISTINGO Bank — sicher und flexibel.', url: 'https://www.financeads.net/tc.php?t=83062C5423128408T', cta: 'Konto eröffnen', program: 'DISTINGO Bank' },
    en: { text: 'Attractive savings rates at DISTINGO Bank — secure and flexible.', url: 'https://www.financeads.net/tc.php?t=83062C5423128408T', cta: 'Open account', program: 'DISTINGO Bank' },
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const lang = document.documentElement.lang === 'en' ? 'en' : 'de';
  const label = lang === 'de' ? 'Anzeige' : 'Ad';

  document.querySelectorAll('.affiliate-banner[data-context]').forEach((el) => {
    const ctx = el.dataset.context || 'default';
    const config = (blogAdConfig[ctx] && blogAdConfig[ctx][lang]) || blogAdConfig.default[lang];

    el.innerHTML = `
      <div>
        <p class="affiliate-banner-label">${label}</p>
        <p class="affiliate-banner-text">${config.text}</p>
      </div>
      <a href="${config.url}" rel="noopener sponsored" target="_blank" class="affiliate-banner-cta">${config.cta}</a>
    `;
  });
});
