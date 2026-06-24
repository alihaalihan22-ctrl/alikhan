import { useEffect, useMemo, useState } from 'react';

const ru = (text: string) => text;

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
    kicker: ru('\u0421\u043b\u0430\u0439\u0434 01'),
    title: ru('\u0410\u043b\u0438\u0445\u0430\u043d \u0421\u0443\u043b\u0435\u0439\u043c\u0435\u043d\u043e\u0432'),
    text: ru('\u042f \u0441\u043e\u0437\u0434\u0430\u044e 3D-\u0445\u043e\u0440\u0440\u043e\u0440 \u043e\u0442 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043b\u0438\u0446\u0430 \u043f\u0440\u043e \u043d\u043e\u0447\u043d\u0443\u044e \u0441\u043c\u0435\u043d\u0443 \u043a\u0430\u0441\u0441\u0438\u0440\u0430 \u0432 \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u043c \u0441\u0443\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442\u0435.'),
    type: 'intro',
  },
  {
    kicker: ru('\u0421\u043b\u0430\u0439\u0434 02'),
    title: ru('\u0428\u0435\u0441\u0442\u0451\u0440\u043e\u0447\u043a\u0430 Horror'),
    text: ru('\u0418\u0433\u0440\u043e\u043a \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432, \u043f\u043e\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043f\u043e\u043b\u043a\u0438, \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043a\u0430\u043c\u0435\u0440\u044b, \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u043c\u0443\u0441\u043e\u0440 \u0438 \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u0436\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u0445\u043e\u0434\u0430 \u043d\u0430 \u0443\u043b\u0438\u0446\u0443.'),
    type: 'app',
  },
  {
    kicker: ru('\u0421\u043b\u0430\u0439\u0434 03'),
    title: ru('\u0427\u0442\u043e \u0435\u0441\u0442\u044c \u0432 \u0438\u0433\u0440\u0435'),
    text: ru('3D-\u043f\u043e\u043b\u043a\u0438, \u0442\u043e\u0432\u0430\u0440\u044b, \u043a\u043b\u0438\u0435\u043d\u0442\u044b \u0441 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c\u0438, \u043a\u0430\u0441\u0441\u0430, \u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a\u0438, \u0442\u0435\u043b\u0435\u0436\u043a\u0438, \u043a\u043e\u043c\u043d\u0430\u0442\u0430 \u043e\u0445\u0440\u0430\u043d\u044b, \u0441\u043a\u0440\u0438\u043c\u0435\u0440\u044b, \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438 \u043e\u043d\u043b\u0430\u0439\u043d-\u043a\u043e\u043c\u043d\u0430\u0442\u0430.'),
    type: 'screens',
  },
  {
    kicker: ru('\u0421\u043b\u0430\u0439\u0434 04'),
    title: ru('\u0412\u0438\u0434\u0435\u043e 35 \u0441\u0435\u043a\u0443\u043d\u0434'),
    text: ru('\u041a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u043d\u0430\u0440\u0435\u0437\u043a\u0430 \u0438\u0437 \u0438\u0433\u0440\u044b: \u043c\u0430\u0433\u0430\u0437\u0438\u043d, \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0430, \u0441\u0432\u0435\u0442, \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 \u0438 \u0445\u043e\u0440\u0440\u043e\u0440-\u043c\u043e\u043c\u0435\u043d\u0442\u044b.'),
    type: 'demo',
  },
  {
    kicker: ru('\u0421\u043b\u0430\u0439\u0434 05'),
    title: ru('\u0418\u0433\u0440\u0430\u0439 \u0441\u0435\u0439\u0447\u0430\u0441'),
    text: ru('\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0439 QR-\u043a\u043e\u0434, \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0439 \u0438\u0433\u0440\u0443 \u043d\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0435 \u0438\u043b\u0438 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0435\u043d\u0443 \u0434\u043e \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u043d\u0441\u0442\u0440\u0430.'),
    type: 'qr',
  },
  {
    kicker: ru('\u0421\u043b\u0430\u0439\u0434 06'),
    title: ru('\u0424\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f'),
    text: ru('\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u0442 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u0438\u0434, \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432, \u0441\u043a\u0438\u043d\u044b \u043a\u0430\u0441\u0441\u0438\u0440\u0430, \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044e, \u0432\u0438\u0434\u0435\u043e \u0438 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u043e\u043c.'),
    type: 'update',
  },
] as const;

function StoreScene() {
  return (
    <div className="presentation-store" aria-hidden="true">
      <i className="store-sign">6{ru('\u0428\u0415\u0421\u0422\u0401\u0420\u0410\u0427\u041a\u0410')}</i>
      <i className="store-door left" />
      <i className="store-door right" />
      <i className="store-light one" />
      <i className="store-light two" />
      <i className="store-light three" />
      <i className="store-fog" />
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

function PresentationEffects() {
  return (
    <div className="presentation-effects" aria-hidden="true">
      <i className="alarm-sweep" />
      <i className="camera-signal one" />
      <i className="camera-signal two" />
      <i className="camera-signal three" />
      <i className="floating-dust a" />
      <i className="floating-dust b" />
      <i className="floating-dust c" />
      <i className="floating-dust d" />
      <i className="floating-dust e" />
      <i className="floating-dust f" />
      <i className="warning-time">05:12</i>
    </div>
  );
}

function ScreenshotGrid() {
  return (
    <div className="presentation-shots">
      <figure>
        <span className="shot-label">{ru('\u041a\u0430\u0441\u0441\u0430')}</span>
        <i className="shot-ceiling" />
        <i className="shot-counter" />
        <i className="shot-customer" />
      </figure>
      <figure>
        <span className="shot-label">{ru('\u041f\u043e\u043b\u043a\u0438 \u0438 \u0441\u043a\u043b\u0430\u0434')}</span>
        <i className="shot-shelf" />
        <i className="shot-box a" />
        <i className="shot-box b" />
        <i className="shot-box c" />
      </figure>
      <figure>
        <span className="shot-label">{ru('\u041c\u043e\u043d\u0441\u0442\u0440 \u0443 \u043c\u0443\u0441\u043e\u0440\u043a\u0438')}</span>
        <img src={`${import.meta.env.BASE_URL}assets/monster-mouth.png`} alt="" />
      </figure>
    </div>
  );
}

function DemoPlayer() {
  return (
    <div className="demo-player real-game-video">
      <video
        src={`${import.meta.env.BASE_URL}assets/game-demo-35.webm`}
        controls
        autoPlay
        muted
        loop
        playsInline
        poster={`${import.meta.env.BASE_URL}assets/screamer-trash3d.png`}
      />
      <span className="demo-caption">{ru('35 \u0441\u0435\u043a\u0443\u043d\u0434 \u0438\u0437 \u0438\u0433\u0440\u044b: \u043c\u0430\u0433\u0430\u0437\u0438\u043d, \u043f\u043e\u043b\u043a\u0438, \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0441\u0432\u0435\u0442 \u0438 \u0445\u043e\u0440\u0440\u043e\u0440-\u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0430.')}</span>
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
      <PresentationEffects />
      <section className={`presentation-slide slide-${slide.type}`} key={slide.type}>
        <div className="presentation-copy">
          <span className="slide-kicker">{slide.kicker}</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="slide-status">
            <i />
            <b>{ru('\u0421\u043c\u0435\u043d\u0430 05:12')}</b>
            <em>{String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</em>
          </div>
          {slide.type === 'app' && (
            <div className="feature-line">
              <b>3D</b>
              <b>{ru('\u0425\u043e\u0440\u0440\u043e\u0440')}</b>
              <b>{ru('\u041e\u043d\u043b\u0430\u0439\u043d')}</b>
              <b>{ru('\u0422\u0435\u043b\u0435\u0444\u043e\u043d')}</b>
            </div>
          )}
          {slide.type === 'qr' && (
            <a className="presentation-cta" href={gameUrl}>
              {ru('\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u0433\u0440\u0443')}
            </a>
          )}
        </div>

        <div className="presentation-visual">
          {slide.type === 'intro' && (
            <div className="author-card">
              <i>AS</i>
              <strong>{ru('\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0438\u0433\u0440\u044b')}</strong>
              <small>{ru('\u0424\u0430\u043a\u0442: \u043b\u044e\u0431\u043b\u044e \u0434\u0435\u043b\u0430\u0442\u044c \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0443, \u0433\u0434\u0435 \u0441\u0442\u0440\u0430\u0448\u043d\u043e \u0434\u0430\u0436\u0435 \u0431\u0435\u0437 \u0441\u043a\u0440\u0438\u043c\u0435\u0440\u0430.')}</small>
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
              <img src={qrUrl} alt="QR code" />
              <strong>{gameUrl}</strong>
            </div>
          )}
          {slide.type === 'update' && (
            <div className="update-card">
              <span>vNext</span>
              <strong>{ru('\u0413\u043e\u0442\u043e\u0432\u043e \u043a \u043f\u043e\u043a\u0430\u0437\u0443')}</strong>
              <ul>
                <li>{ru('\u041a\u043b\u0438\u0435\u043d\u0442\u044b \u0434\u0432\u0438\u0433\u0430\u044e\u0442\u0441\u044f \u043f\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c \u0438 \u0443\u0445\u043e\u0434\u044f\u0442 \u0447\u0435\u0440\u0435\u0437 \u0434\u0432\u0435\u0440\u0438')}</li>
                <li>{ru('\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441\u0442\u0430\u043b \u0447\u0438\u0449\u0435 \u0438 \u0431\u044b\u0441\u0442\u0440\u0435\u0435')}</li>
                <li>{ru('\u0421\u043a\u0438\u043d\u044b \u043a\u0430\u0441\u0441\u0438\u0440\u0430 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0444\u043e\u0440\u043c\u044b')}</li>
                <li>{ru('\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u044f\u0440\u0447\u0435, \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u0438 \u0441 \u0432\u0438\u0434\u0435\u043e 35 \u0441\u0435\u043a\u0443\u043d\u0434')}</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <nav className="presentation-nav" aria-label="Presentation navigation">
        <button type="button" onClick={() => setIndex((value) => Math.max(0, value - 1))} disabled={index === 0}>
          {ru('\u041d\u0430\u0437\u0430\u0434')}
        </button>
        <div className="presentation-progress">
          <i style={{ width: `${progress}%` }} />
          <span style={{ left: `calc(${progress}% - 8px)` }} />
        </div>
        <button type="button" onClick={() => setIndex((value) => Math.min(slides.length - 1, value + 1))} disabled={index === slides.length - 1}>
          {ru('\u0412\u043f\u0435\u0440\u0435\u0434')}
        </button>
      </nav>
    </main>
  );
}
