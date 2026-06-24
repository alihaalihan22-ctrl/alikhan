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
    kicker: 'Слайд 01',
    title: 'Алихан Сулейменов',
    text: 'Я создаю 3D-хоррор от первого лица про ночную смену в странном супермаркете.',
    type: 'intro',
  },
  {
    kicker: 'Слайд 02',
    title: 'Шестёрочка Horror',
    text: 'Веб-хоррор, где нужно обслуживать клиентов, пополнять полки, отвечать на красный телефон, проверять камеры, собирать мусор и выжить на улице.',
    type: 'app',
  },
  {
    kicker: 'Слайд 03',
    title: 'Системы игры',
    text: 'В игре есть 3D-полки, клиенты с товарами, автоматические двери, холодильники, тележки, комната охраны, мусорные пакеты, скримеры, телефонное управление и онлайн-комната.',
    type: 'screens',
  },
  {
    kicker: 'Слайд 04',
    title: 'Демо 20 секунд',
    text: 'Видео показывает атмосферу 3D-магазина: полки, клиента, камеры, мерцающий свет и монстра вдалеке.',
    type: 'demo',
  },
  {
    kicker: 'Слайд 05',
    title: 'Играй сейчас',
    text: 'Сканируй QR-код, открой игру, создай комнату, пригласи друга и попробуй закрыть смену до того, как проснется контейнер.',
    type: 'qr',
  },
  {
    kicker: 'Слайд 06',
    title: 'Последнее обновление',
    text: 'Новая версия улучшает свет, зеркало с отражением, атмосферу магазина, логику возрождения и полировку перед выпуском.',
    type: 'update',
  },
] as const;

function StoreScene() {
  return (
    <div className="presentation-store" aria-hidden="true">
      <i className="store-sign">6ШЕСТЁРАЧКА</i>
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
        <span className="shot-label">Монстр у мусорки</span>
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
      <span className="demo-caption">20 секунд 3D-геймплея: полки, клиент, камеры, свет и монстр.</span>
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
              <b>Хоррор</b>
              <b>Онлайн</b>
              <b>Телефон</b>
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
              <strong>Разработчик игры</strong>
              <small>3D-хоррор, атмосфера, клиенты, мультиплеер</small>
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
          {slide.type === 'update' && (
            <div className="update-card">
              <span>vNext</span>
              <strong>Зеркало + атмосфера</strong>
              <ul>
                <li>Черная тень убрана</li>
                <li>Зеркало с отражением внутри магазина</li>
                <li>Чище свет и сильнее хоррор-настроение</li>
                <li>Больше реалистичных предметов</li>
              </ul>
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
          Вперед
        </button>
      </nav>
    </main>
  );
}
