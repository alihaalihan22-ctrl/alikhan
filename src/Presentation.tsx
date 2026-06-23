import { useEffect, useMemo, useState } from 'react';

const getGameUrl = () => {
  const url = new URL(window.location.href);
  url.search = '';
  url.hash = '';
  url.pathname = url.pathname.replace(/\/presentation\/?$/, '/');
  if (!url.pathname.endsWith('/')) url.pathname += '/';
  return url.toString();
};

const gameUrl = getGameUrl();
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=12&data=${encodeURIComponent(gameUrl)}`;

const slides = [
  {
    kicker: 'Slide 01',
    title: 'Alikhan Suleymenov',
    text: 'I am building a first-person 3D horror game about a night shift inside a strange supermarket.',
    type: 'intro',
  },
  {
    kicker: 'Slide 02',
    title: 'Shesterochka Horror',
    text: 'A web horror game where you serve customers, restock shelves, answer the red phone, check cameras, collect trash, and survive the monster outside.',
    type: 'app',
  },
  {
    kicker: 'Slide 03',
    title: 'Gameplay Systems',
    text: 'The game has 3D shelves, customers with products, automatic doors, fridges, carts, security room, trash bags, screamers, mobile controls, and an online room mode.',
    type: 'screens',
  },
  {
    kicker: 'Slide 04',
    title: '20 Second Demo',
    text: 'The video shows the 3D supermarket mood: shelves, customer, camera screen, flickering light, and the monster appearing in the distance.',
    type: 'demo',
  },
  {
    kicker: 'Slide 05',
    title: 'Play Now',
    text: 'Scan the QR code, open the game, create a room, invite a friend, and try to finish the shift before the dumpster wakes up.',
    type: 'qr',
  },
] as const;

function StoreScene() {
  return (
    <div className="presentation-store" aria-hidden="true">
      <i className="store-sign">6SHESTEROCHKA</i>
      <i className="store-door left" />
      <i className="store-door right" />
      <i className="store-light one" />
      <i className="store-light two" />
      <i className="store-light three" />
      <i className="store-fog" />
      <i className="store-shadow" />
    </div>
  );
}

function MildScares() {
  return (
    <div className="presentation-scares" aria-hidden="true">
      <img className="soft-scare one" src={`${import.meta.env.BASE_URL}assets/screamer-mask.png`} alt="" />
      <img className="soft-scare two" src={`${import.meta.env.BASE_URL}assets/screamer-grin.png`} alt="" />
      <img className="soft-scare three" src={`${import.meta.env.BASE_URL}assets/screamer-trash3d.png`} alt="" />
    </div>
  );
}

function ScreenshotGrid() {
  return (
    <div className="presentation-shots">
      <figure>
        <span className="shot-label">Checkout</span>
        <i className="shot-ceiling" />
        <i className="shot-counter" />
        <i className="shot-customer" />
      </figure>
      <figure>
        <span className="shot-label">Stock Room</span>
        <i className="shot-shelf" />
        <i className="shot-box a" />
        <i className="shot-box b" />
        <i className="shot-box c" />
      </figure>
      <figure>
        <span className="shot-label">Dumpster Monster</span>
        <img src={`${import.meta.env.BASE_URL}assets/monster-mouth.png`} alt="" />
      </figure>
    </div>
  );
}

function DemoPlayer() {
  return (
    <div className="demo-player real-game-video">
      <video
        src={`${import.meta.env.BASE_URL}assets/game-demo-20.webm`}
        controls
        autoPlay
        muted
        loop
        playsInline
        poster={`${import.meta.env.BASE_URL}assets/screamer-trash3d.png`}
      />
      <span className="demo-caption">20 seconds of 3D gameplay mood: shelves, customer, cameras, light, and monster.</span>
    </div>
  );
}

export default function Presentation() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const progress = useMemo(() => ((index + 1) / slides.length) * 100, [index]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') setIndex((value) => Math.min(slides.length - 1, value + 1));
      if (event.key === 'ArrowLeft') setIndex((value) => Math.max(0, value - 1));
      if (event.key === 'Home') setIndex(0);
      if (event.key === 'End') setIndex(slides.length - 1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <main className="presentation-page">
      <StoreScene />
      <MildScares />
      <section className={`presentation-slide slide-${slide.type}`} key={slide.type}>
        <div className="presentation-copy">
          <span>{slide.kicker}</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          {slide.type === 'app' && (
            <div className="feature-line">
              <b>3D</b>
              <b>Horror</b>
              <b>Online Room</b>
              <b>Mobile</b>
            </div>
          )}
          {slide.type === 'qr' && (
            <a className="presentation-cta" href={gameUrl}>
              Open Game
            </a>
          )}
        </div>

        <div className="presentation-visual">
          {slide.type === 'intro' && (
            <div className="author-card">
              <i>AS</i>
              <strong>Game Developer</strong>
              <small>3D horror, atmosphere, clients, multiplayer</small>
            </div>
          )}
          {slide.type === 'app' && (
            <div className="hero-monster">
              <img src={`${import.meta.env.BASE_URL}assets/screamer-trash3d.png`} alt="" />
            </div>
          )}
          {slide.type === 'screens' && <ScreenshotGrid />}
          {slide.type === 'demo' && <DemoPlayer />}
          {slide.type === 'qr' && (
            <div className="qr-card">
              <img src={qrUrl} alt="QR code to Shesterochka Horror" />
              <strong>{gameUrl}</strong>
            </div>
          )}
        </div>
      </section>

      <nav className="presentation-nav" aria-label="Presentation navigation">
        <button type="button" onClick={() => setIndex((value) => Math.max(0, value - 1))} disabled={index === 0}>
          Back
        </button>
        <div className="presentation-progress">
          <i style={{ width: `${progress}%` }} />
        </div>
        <button type="button" onClick={() => setIndex((value) => Math.min(slides.length - 1, value + 1))} disabled={index === slides.length - 1}>
          Next
        </button>
      </nav>
    </main>
  );
}
