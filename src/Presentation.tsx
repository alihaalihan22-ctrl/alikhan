import { useEffect, useMemo, useState } from 'react';

const gameUrl = 'https://alikhan.vercel.app';
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=12&data=${encodeURIComponent(gameUrl)}`;

const slides = [
  {
    kicker: 'Slide 01',
    title: 'Алихан Сулейменов',
    text: 'Маленький факт: я создаю собственный 3D-хоррор и люблю добавлять в игру атмосферу, звук, монстров и настоящие игровые задания.',
    type: 'intro',
  },
  {
    kicker: 'Slide 02',
    title: 'Шестёрочка Horror',
    text: 'Это реалистичный first-person horror про ночную смену кассира, где обычный супермаркет постепенно превращается в место охоты монстра.',
    type: 'app',
  },
  {
    kicker: 'Slide 03',
    title: 'Скриншоты из игры',
    text: 'Касса, склад, полки, камеры, парковка и зона мусорных контейнеров работают как части одной ночной смены.',
    type: 'screens',
  },
  {
    kicker: 'Slide 04',
    title: 'Video Demo',
    text: 'Короткая демонстрация игрового цикла: ответить на звонок, обслужить клиента, взять товар из коробки, пополнить полку и выйти на улицу.',
    type: 'demo',
  },
  {
    kicker: 'Slide 05',
    title: 'Играй сейчас',
    text: 'Зайди в Шестёрочка Horror и проверь, сможешь ли закончить ночную смену до того, как мусорка начнет дышать.',
    type: 'qr',
  },
] as const;

function StoreScene() {
  return (
    <div className="presentation-store" aria-hidden="true">
      <i className="store-sign">6ШЕСТЕРАЧКА</i>
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

function ScreenshotGrid() {
  return (
    <div className="presentation-shots">
      <figure>
        <span className="shot-label">Касса</span>
        <i className="shot-ceiling" />
        <i className="shot-counter" />
        <i className="shot-customer" />
      </figure>
      <figure>
        <span className="shot-label">Склад</span>
        <i className="shot-shelf" />
        <i className="shot-box a" />
        <i className="shot-box b" />
        <i className="shot-box c" />
      </figure>
      <figure>
        <span className="shot-label">Контейнеры</span>
        <img src={`${import.meta.env.BASE_URL}assets/monster-mouth.png`} alt="" />
      </figure>
    </div>
  );
}

function DemoPlayer() {
  return (
    <div className="demo-player">
      <div className="demo-screen">
        <i className="demo-aisle" />
        <i className="demo-client" />
        <i className="demo-box" />
        <i className="demo-product" />
        <i className="demo-monster" />
        <span className="demo-caption">E: взять товар из коробки</span>
      </div>
      <div className="demo-timeline">
        <i />
      </div>
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
      <section className={`presentation-slide slide-${slide.type}`} key={slide.type}>
        <div className="presentation-copy">
          <span>{slide.kicker}</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          {slide.type === 'app' && (
            <div className="feature-line">
              <b>3D</b>
              <b>Horror</b>
              <b>First Person</b>
              <b>Night Shift</b>
            </div>
          )}
          {slide.type === 'qr' && (
            <a className="presentation-cta" href={gameUrl}>
              Открыть игру
            </a>
          )}
        </div>

        <div className="presentation-visual">
          {slide.type === 'intro' && (
            <div className="author-card">
              <i>AS</i>
              <strong>Game Developer</strong>
              <small>3D horror, atmosphere, AI clients</small>
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
              <img src={qrUrl} alt="QR code на игру Шестёрочка Horror" />
              <strong>{gameUrl}</strong>
            </div>
          )}
        </div>
      </section>

      <nav className="presentation-nav" aria-label="Presentation navigation">
        <button type="button" onClick={() => setIndex((value) => Math.max(0, value - 1))} disabled={index === 0}>
          Назад
        </button>
        <div className="presentation-progress">
          <i style={{ width: `${progress}%` }} />
        </div>
        <button type="button" onClick={() => setIndex((value) => Math.min(slides.length - 1, value + 1))} disabled={index === slides.length - 1}>
          Далее
        </button>
      </nav>
    </main>
  );
}
