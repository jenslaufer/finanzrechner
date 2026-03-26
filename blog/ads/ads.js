// Blog ad configuration — mirrors src/ads/config.js for static HTML articles
// URLs marked # are placeholders — replace with real tracking links after network registration

const blogAdConfig = {
  default: {
    de: { text: 'Noch kein Depot? Vergleiche die besten Anbieter.', url: '#', cta: 'Jetzt vergleichen', program: 'Scalable Capital' },
    en: { text: "Don't have a brokerage account yet? Compare the best providers.", url: '#', cta: 'Compare now', program: 'Scalable Capital' },
  },
  investing: {
    de: { text: 'Kostenloses Depot eröffnen und ETF-Sparplan ab 1 \u20ac starten.', url: '#', cta: 'Depot eröffnen', program: 'Scalable Capital' },
    en: { text: 'Open a free brokerage account and start an ETF savings plan from \u20ac1.', url: '#', cta: 'Open account', program: 'Scalable Capital' },
  },
  property: {
    de: { text: 'Baufinanzierung vergleichen \u2014 Deutschlands gr\u00f6\u00dfter Vermittler.', url: '#', cta: 'Zinsen vergleichen', program: 'Interhyp' },
    en: { text: "Compare mortgage rates \u2014 Germany's largest broker.", url: '#', cta: 'Compare rates', program: 'Interhyp' },
  },
  fire: {
    de: { text: 'Finanzielle Freiheit planen? ETF-Sparplan ab 1 \u20ac starten.', url: '#', cta: 'Sparplan starten', program: 'Scalable Capital' },
    en: { text: 'Planning financial freedom? Start an ETF savings plan from \u20ac1.', url: '#', cta: 'Start saving', program: 'Scalable Capital' },
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
