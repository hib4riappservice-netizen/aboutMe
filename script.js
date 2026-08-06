function xIcon() {
  return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.4 22h-7l-5.5-7.2L4.6 22H1.5l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L7.4 4h-1.8l12.1 16Z"/></svg>`;
}

function renderProfile() {
  document.getElementById("avatar-img").src = PROFILE.avatar;
  document.getElementById("avatar-img").alt = PROFILE.name;
  document.getElementById("tagline").textContent = PROFILE.tagline;
  document.getElementById("brand-name").textContent = PROFILE.name;
  document.getElementById("bio").textContent = PROFILE.bio;

  const socialWrap = document.getElementById("social-links");
  socialWrap.innerHTML = PROFILE.social
    .map(
      (s) => `
      <a class="social-link" href="${s.url}" target="_blank" rel="noopener noreferrer">
        ${s.icon === "x" ? xIcon() : ""}
        <span>${s.label}</span>
      </a>`
    )
    .join("");
}

function renderSites() {
  const grid = document.getElementById("site-grid");
  document.getElementById("site-count").textContent = `${SITES.length}件`;

  grid.innerHTML = SITES.map(
    (site) => `
    <article class="site-card">
      <a class="site-logo-banner" href="${site.url}" target="_blank" rel="noopener noreferrer">
        <img src="${site.image}" alt="${site.name}のロゴ" loading="lazy" />
      </a>
      <div class="site-body">
        <span class="site-category">${site.category}</span>
        <h3 class="site-name">${site.name}</h3>
        <p class="site-desc">${site.description}</p>
        <a class="site-link" href="${site.url}" target="_blank" rel="noopener noreferrer">サイトを見る →</a>
      </div>
    </article>`
  ).join("");
}

renderProfile();
renderSites();
