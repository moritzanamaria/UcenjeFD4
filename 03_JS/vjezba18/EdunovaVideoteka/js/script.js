/* =========================================================
   Edunova Videoteka — Frontend Developer
   js/script.js
   =========================================================
   PODACI POLAZNIKA
   -----------------
   - "video" je putanja do stvarne datoteke u mapi /video, relativno
     na index.html (dakle uvijek "video/naziv.webm", bez "../").
   - "ime" upisuješ ručno.
   - "slika" je automatski generirani avatar (inicijali imena) koji
     služi kao poster/thumbnail za video dok se ne učita.
   ========================================================= */

const POLAZNICI = [
  { id: 1, ime: "Anamaria", video: "video/anamaria.webm" },
  { id: 2, ime: "Tomislav", video: "video/tomislav.webm" },
  { id: 3, ime: "Đurđica", video: "video/durdica.webm" },
  { id: 4, ime: "Marta", video: "video/marta.webm" },
];

/** Generira URL avatara s inicijalima na temelju imena polaznika. */
function avatarUrl(ime) {
  const boje = ["5eead4", "a78bfa", "f0b429", "60a5fa", "fb7185", "34d399"];
  const boja = boje[ime.length % boje.length];
  const name = encodeURIComponent(ime);
  return `https://ui-avatars.com/api/?name=${name}&background=${boja}&color=0d1117&size=400&font-size=0.38&bold=true`;
}

/** Redoslijed svih video elemenata u kartičnom pregledu — puni se pri
 *  renderiranju, koristi se za prebacivanje strijelicama u fullscreenu. */
let videoRedoslijed = [];

/** Otvara zadani video preko cijelog zaslona (s fallbackom za starije preglednike). */
function otvoriPuniZaslon(video) {
  const zahtjev =
    video.requestFullscreen ||
    video.webkitRequestFullscreen ||
    video.msRequestFullscreen;

  if (zahtjev) {
    zahtjev.call(video);
  }
}

/** Prebacuje fullscreen na prethodni/sljedeći video (kruži na krajevima). */
function prebaciNaVideo(smjer) {
  const trenutni = document.fullscreenElement || document.webkitFullscreenElement;
  const trenutniIndex = videoRedoslijed.indexOf(trenutni);
  if (trenutniIndex === -1) return;

  trenutni.pause();

  const sljedeciIndex =
    (trenutniIndex + smjer + videoRedoslijed.length) % videoRedoslijed.length;
  otvoriPuniZaslon(videoRedoslijed[sljedeciIndex]);
}

/** Klikom na karticu video ide u fullscreen, sa zvukom i kontrolama;
 *  po izlasku iz fullscreena vraća se na tihi ambijentalni loop.
 *  Strijelice lijevo/desno u fullscreenu prebacuju na susjedni video. */
function attachFullscreenOnClick(video, wrapper) {
  wrapper.addEventListener("click", () => otvoriPuniZaslon(video));
  wrapper.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      otvoriPuniZaslon(video);
    }
  });

  const naPromjenuZaslona = () => {
    const uFullscreenu =
      document.fullscreenElement === video || document.webkitFullscreenElement === video;
    video.muted = !uFullscreenu;
    video.controls = uFullscreenu;
    if (!uFullscreenu) video.play().catch(() => {});
  };

  document.addEventListener("fullscreenchange", naPromjenuZaslona);
  document.addEventListener("webkitfullscreenchange", naPromjenuZaslona);
}

/** Globalna kontrola strijelicama — radi samo dok je neki video u fullscreenu. */
document.addEventListener("keydown", (e) => {
  const uFullscreenu = document.fullscreenElement || document.webkitFullscreenElement;
  if (!uFullscreenu) return;

  if (e.key === "ArrowRight") {
    e.preventDefault();
    prebaciNaVideo(1);
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    prebaciNaVideo(-1);
  }
});

/** Kartica polaznika (kartični pregled). */
function createStudentCard(polaznik, index) {
  const { ime } = polaznik;
  const card = document.createElement("article");
  card.className = "student-card";
  card.tabIndex = 0;

  card.innerHTML = `
    <div class="media">
      <span class="card-index">#${String(index + 1).padStart(2, "0")}</span>
      <video
        src="${polaznik.video}"
        poster="${avatarUrl(ime)}"
        autoplay
        muted
        loop
        playsinline
        preload="auto">
      </video>
    </div>
    <div class="info">
      <p class="name">${ime}</p>
      <p class="role">frontend developer</p>
    </div>
  `;

  attachFullscreenOnClick(card.querySelector("video"), card);
  return card;
}

/** Stavka galerije (uniformna veličina + overlay s imenom na hover). */
function createGalleryItem(polaznik) {
  const { ime } = polaznik;
  const item = document.createElement("figure");
  item.className = "gallery-item";
  item.tabIndex = 0;

  item.innerHTML = `
    <video
      src="${polaznik.video}"
      poster="${avatarUrl(ime)}"
      autoplay
      muted
      loop
      playsinline
      preload="auto">
    </video>
    <figcaption class="overlay">
      <p class="overlay-name">${ime}</p>
    </figcaption>
  `;

  return item;
}

function renderCards(polaznici) {
  const grid = document.getElementById("cards-grid");
  const kartice = polaznici.map((p, i) => createStudentCard(p, i));
  grid.replaceChildren(...kartice);
  videoRedoslijed = kartice.map((kartica) => kartica.querySelector("video"));
}

function renderGallery(polaznici) {
  const grid = document.getElementById("gallery-grid");
  grid.replaceChildren(...polaznici.map((p) => createGalleryItem(p)));
}

function init() {
  renderCards(POLAZNICI);
  renderGallery(POLAZNICI);
}

document.addEventListener("DOMContentLoaded", init);