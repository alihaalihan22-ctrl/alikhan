const STORAGE_KEY = "reelify_ai_history";
const USERS_KEY = "reelify_ai_users";
const SESSION_KEY = "reelify_ai_session";
const MERCHANT_KEY = "reelify_ai_merchant";
const IMAGE_ENDPOINT = "https://image.pollinations.ai/prompt/";
const SUBSCRIPTION_PRICE = 1000;
const SUBSCRIPTION_DAYS = 15;
const BASE_PHOTO_PROMPT = [
  "Ultra realistic",
  "8K",
  "Professional lighting",
  "Photorealistic",
  "Instagram Reel Cover",
  "High details",
  "Sharp focus"
];

const STYLE_DETAILS = {
  "Super Realistic": "real textures, true-to-life materials, natural shadows, premium camera lens",
  Luxury: "expensive editorial mood, marble, gold accents, elegant premium composition",
  Minimalism: "clean background, negative space, refined typography area, modern product layout",
  "Commercial Advertising": "high-converting ad visual, product hero shot, strong brand focus",
  Lifestyle: "natural human context, warm environment, believable social media moment",
  Cinematic: "movie still, dramatic depth, anamorphic lighting, rich contrast"
};

const SCRIPT_PLAYBOOKS = {
  Эксперт: {
    proof: "мини-разбор, понятная причина и один профессиональный совет",
    trust: "покажите экспертность без сложных терминов"
  },
  Магазин: {
    proof: "демонстрация товара, выгода, отзыв или быстрый результат",
    trust: "сделайте акцент на выборе, наличии и простом заказе"
  },
  Путешествия: {
    proof: "видовая сцена, маршрут, эмоция, цена или скрытое место",
    trust: "дайте ощущение, что зритель уже там"
  },
  Бьюти: {
    proof: "до/после, текстура, нанесение, крупный план результата",
    trust: "снимайте чисто, близко и с мягким светом"
  },
  "Личный блог": {
    proof: "личная история, честный вывод, контраст было/стало",
    trust: "говорите как человек, не как реклама"
  }
};

const PERSONAS = {
  realistic: { label: "Реалистичный AI-диктор", rate: 0.94, pitch: 1.0, hint: "естественно, с микропаузами, без роботичного темпа" },
  female: { label: "Женский премиум", rate: 0.96, pitch: 1.12, hint: "мягко, уверенно, дорого" },
  male: { label: "Мужской уверенный", rate: 0.92, pitch: 0.82, hint: "низко, спокойно, авторитетно" },
  child: { label: "Детский веселый", rate: 1.08, pitch: 1.65, hint: "легко, радостно, с улыбкой" },
  soft: { label: "Мягкий спокойный", rate: 0.86, pitch: 1.05, hint: "медленно, тепло, заботливо" },
  seller: { label: "Продающий диктор", rate: 1.03, pitch: 1.0, hint: "энергично, четко, с акцентом на выгоду" },
  cinema: { label: "Кино-трейлер", rate: 0.82, pitch: 0.72, hint: "глубоко, драматично, с паузами" }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

function loadUsers() {
  try {
    const parsed = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem(USERS_KEY);
    return [];
  }
}

function loadMerchantDetails() {
  try {
    const raw = localStorage.getItem(MERCHANT_KEY);
    if (!raw) return emptyMerchant();
    if (!raw.trim().startsWith("{")) {
      return { ...emptyMerchant(), phone: raw };
    }
    return { ...emptyMerchant(), ...JSON.parse(raw) };
  } catch {
    return emptyMerchant();
  }
}

function emptyMerchant() {
  return {
    name: "",
    bank: "",
    card: "",
    phone: "",
    link: "",
    comment: ""
  };
}

const state = {
  history: loadHistory(),
  users: loadUsers(),
  sessionEmail: localStorage.getItem(SESSION_KEY) || "",
  merchant: loadMerchantDetails(),
  lastScript: "",
  selectedImageUrl: "",
  lastAssistantIdea: "",
  voices: [],
  utterance: null
};

const toast = $("#toast");
const indicator = $("#generationIndicator");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function setGenerating(isGenerating) {
  indicator.classList.toggle("show", isGenerating);
}

function saveHistory(type, title, content) {
  const item = {
    id: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    type,
    title,
    content,
    createdAt: new Date().toLocaleString("ru-RU", { dateStyle: "short", timeStyle: "short" })
  };
  state.history.unshift(item);
  state.history = state.history.slice(0, 40);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history));
  renderHistory();
}

function renderHistory() {
  const list = $("#historyList");
  const count = $("#historyCount");
  count.textContent = `${state.history.length} сохранений`;

  if (!state.history.length) {
    list.innerHTML = '<div class="empty-state">Пока нет сохраненных генераций.</div>';
    return;
  }

  list.innerHTML = state.history.map((item) => `
    <article class="history-item">
      <header>
        <span>${escapeHtml(item.type)} • ${escapeHtml(item.title)}</span>
        <time>${escapeHtml(item.createdAt)}</time>
      </header>
      <p>${escapeHtml(item.content)}</p>
    </article>
  `).join("");
}

function saveUsers() {
  localStorage.setItem(USERS_KEY, JSON.stringify(state.users));
}

function currentUser() {
  return state.users.find((user) => user.email === state.sessionEmail) || null;
}

function isPremiumActive() {
  const user = currentUser();
  return Boolean(user?.subscriptionUntil && new Date(user.subscriptionUntil).getTime() > Date.now());
}

function subscriptionDaysLeft() {
  const user = currentUser();
  if (!user?.subscriptionUntil) return 0;
  const diff = new Date(user.subscriptionUntil).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / 86400000));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function smartValue(value, fallback) {
  return value.trim() || fallback;
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function withGeneration(callback, delay = 760) {
  setGenerating(true);
  return new Promise((resolve) => {
    window.setTimeout(() => {
      callback();
      setGenerating(false);
      resolve();
    }, delay);
  });
}

function imageSize(format) {
  if (format === "1:1") return { width: 1024, height: 1024 };
  if (format === "16:9") return { width: 1280, height: 720 };
  return { width: 768, height: 1344 };
}

function buildPhotoPrompt() {
  const description = smartValue($("#photoDescription").value, "Роскошный хамам с мрамором, мягким паром и теплым светом");
  const format = $("#photoFormat").value;
  const style = $("#photoStyle").value;
  const mood = $("#photoMood").value;
  const styleDetail = STYLE_DETAILS[style] || "";
  const context = analyzeVisualTopic(description);
  const smartScene = mood === "Smart auto scene" ? context.scene : mood;

  return [
    description,
    context.subject,
    context.location,
    context.camera,
    context.light,
    context.palette,
    `${style} style`,
    styleDetail,
    smartScene,
    `composition for ${format} social media reel`,
    "clear main object, subject fills the frame, strong foreground and background separation",
    "no text, no watermark, no distorted hands, no extra logos, clean frame",
    ...BASE_PHOTO_PROMPT
  ].filter(Boolean).join(", ");
}

function analyzeVisualTopic(text) {
  const value = text.toLowerCase();
  const contexts = [
    {
      match: /(шампун|крем|сыворот|космет|баноч|флакон|парфюм|масл)/i,
      subject: "premium beauty product photography, hero bottle, visible texture, glossy label area",
      location: "luxury bathroom counter, marble, water droplets, soft steam",
      camera: "85mm lens, macro details, shallow depth of field, product centered",
      light: "large softbox reflection, rim light, clean commercial highlights",
      palette: "champagne, pearl white, aqua reflections",
      scene: "commercial beauty ad scene with realistic product placement"
    },
    {
      match: /(хамам|spa|спа|саун|бан|массаж|релакс)/i,
      subject: "luxury spa atmosphere, marble surfaces, warm steam, elegant towels",
      location: "premium hammam interior with arched stone walls and soft vapor",
      camera: "wide cinematic lens, symmetrical composition, inviting depth",
      light: "warm lantern light mixed with soft natural glow",
      palette: "gold, warm stone, deep teal shadows",
      scene: "cinematic luxury wellness scene"
    },
    {
      match: /(каньон|горы|закат|путеше|тур|отел|пляж|город|кафе)/i,
      subject: "travel reel cover, epic landscape, human scale, emotional destination",
      location: "dramatic natural viewpoint with clear depth and atmospheric haze",
      camera: "24mm cinematic lens, leading lines, golden ratio composition",
      light: "golden hour sunset, glowing edges, realistic sky",
      palette: "amber, clay red, deep blue shadows",
      scene: "viral travel photography scene"
    },
    {
      match: /(еда|кофе|ресторан|десерт|бургер|пицц|суши|напит)/i,
      subject: "appetizing food hero shot, texture, steam, glossy highlights",
      location: "modern restaurant table with premium plating",
      camera: "45 degree food photography angle, macro texture, crisp focus",
      light: "soft window light, appetizing shadows, warm bounce",
      palette: "natural food colors, warm wood, clean contrast",
      scene: "commercial restaurant reel cover"
    },
    {
      match: /(фитнес|спорт|зал|трениров|йога|тело)/i,
      subject: "fitness lifestyle scene, dynamic body movement, aspirational energy",
      location: "modern gym or clean studio with cinematic depth",
      camera: "fast shutter, dynamic angle, motion frozen sharply",
      light: "dramatic side light, sweat highlights, strong contrast",
      palette: "black, silver, electric cyan accent",
      scene: "high-energy fitness reel cover"
    }
  ];
  const found = contexts.find((item) => item.match.test(value));
  return found || {
    subject: "high-end social media visual, clear main subject, premium editorial composition",
    location: "context-aware environment matching the description",
    camera: "professional camera, shallow depth of field, crisp focal point",
    light: "cinematic professional lighting with realistic shadows",
    palette: "balanced premium colors with strong contrast",
    scene: "smart AI-generated reel cover scene based on the topic"
  };
}

function createImageUrl(prompt, seed) {
  const format = $("#photoFormat").value;
  const { width, height } = imageSize(format);
  const query = new URLSearchParams({
    width,
    height,
    seed,
    nologo: "true",
    enhance: "true",
    model: "flux"
  });
  return `${IMAGE_ENDPOINT}${encodeURIComponent(prompt)}?${query}`;
}

function createFallbackImage(prompt, label) {
  const context = analyzeVisualTopic(prompt);
  const palette = context.palette.includes("amber") ? ["#ffb703", "#9b2226", "#001219"] :
    context.palette.includes("aqua") ? ["#41e8ff", "#f7f7fb", "#0b1320"] :
      context.palette.includes("gold") ? ["#ffd166", "#6d597a", "#101014"] :
        ["#ff4fd8", "#41e8ff", "#07080d"];
  const cleanLabel = escapeHtml(label || "Reelify AI");
  const cleanPrompt = escapeHtml(prompt.slice(0, 110));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1400" viewBox="0 0 900 1400">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${palette[0]}"/>
          <stop offset="0.55" stop-color="${palette[1]}"/>
          <stop offset="1" stop-color="${palette[2]}"/>
        </linearGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="45"/></filter>
      </defs>
      <rect width="900" height="1400" fill="url(#bg)"/>
      <circle cx="230" cy="260" r="190" fill="rgba(255,255,255,.22)" filter="url(#blur)"/>
      <circle cx="720" cy="940" r="260" fill="rgba(0,0,0,.26)" filter="url(#blur)"/>
      <rect x="72" y="94" width="756" height="1212" rx="46" fill="rgba(5,6,10,.34)" stroke="rgba(255,255,255,.35)" stroke-width="2"/>
      <text x="110" y="190" fill="#ffffff" font-family="Inter, Arial" font-size="34" font-weight="800">AI Reel Cover</text>
      <text x="110" y="250" fill="#c7ff5a" font-family="Inter, Arial" font-size="24" font-weight="700">${cleanLabel}</text>
      <foreignObject x="110" y="980" width="680" height="210">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Inter,Arial;color:white;font-size:44px;font-weight:900;line-height:1.08">${cleanPrompt}</div>
      </foreignObject>
      <text x="110" y="1220" fill="rgba(255,255,255,.74)" font-family="Inter, Arial" font-size="26">Fallback preview • prompt ready</text>
    </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function selectImage(url, label, prompt = $("#photoPrompt").textContent) {
  state.selectedImageUrl = url;
  const img = $("#generatedImage");
  const skeleton = $("#photoSkeleton");
  const preview = $(".preview-art");
  skeleton.classList.remove("hidden");
  img.onload = () => {
    preview.classList.add("has-image");
    skeleton.classList.add("hidden");
  };
  img.onerror = () => {
    const fallback = createFallbackImage(prompt, label);
    state.selectedImageUrl = fallback;
    img.onerror = null;
    img.src = fallback;
    $("#downloadImageBtn").href = fallback;
    preview.classList.add("has-image");
    skeleton.classList.add("hidden");
    showToast("AI-сервер не ответил, показан запасной тематический превью-вариант");
  };
  img.src = url;
  $("#downloadImageBtn").href = url;
  $("#previewLabel").textContent = label;
  $$(".image-option").forEach((item) => item.classList.toggle("active", item.dataset.url === url));
}

function generatePhoto() {
  const prompt = buildPhotoPrompt();
  let count = Number($("#photoCount").value);
  if (count > 4 && !isPremiumActive()) {
    count = 4;
    $("#photoCount").value = "4";
    showToast("6 вариантов доступны по Premium-подписке");
  }
  const seedBase = Date.now();
  const urls = Array.from({ length: count }, (_, index) => createImageUrl(prompt, seedBase + index * 37));

  $("#photoPrompt").textContent = prompt;
  $("#imageOptions").innerHTML = urls.map((url, index) => `
    <button class="image-option${index === 0 ? " active" : ""}" type="button" data-url="${url}">
      <img src="${url}" alt="AI вариант ${index + 1}" loading="lazy">
      <span>Вариант ${index + 1}</span>
    </button>
  `).join("");

  $$(".image-option").forEach((button, index) => {
    button.querySelector("img").addEventListener("error", (event) => {
      event.currentTarget.src = createFallbackImage(prompt, `Вариант ${index + 1}`);
    }, { once: true });
    button.addEventListener("click", () => selectImage(button.dataset.url, `Вариант ${index + 1}`, prompt));
  });

  withGeneration(() => {
    selectImage(urls[0], "Вариант 1", prompt);
    saveHistory("Картинка", $("#photoStyle").value, `${prompt}\n\n${urls[0]}`);
    showToast(`Создано ${count} вариантов картинки`);
  }, 900);
}

function generateText() {
  const topic = smartValue($("#textTopic").value, "ваш продукт");
  const niche = smartValue($("#textNiche").value, "ваша ниша");
  const tone = $("#textTone").value;
  const pain = inferPain(topic, niche);
  const hooks = buildHooks(topic, niche, tone, pain);
  const main = buildMainText(topic, niche, tone, pain);
  const cta = buildCta(tone);
  const hashtags = `#reels #reelsideas #${slugify(niche)} #${slugify(topic)} #reelifyai #контент`;

  withGeneration(() => {
    $("#hooksList").innerHTML = hooks.map((hook) => `<li>${escapeHtml(hook)}</li>`).join("");
    $("#mainText").textContent = main;
    $("#ctaText").textContent = cta;
    $("#hashtagsText").textContent = hashtags;
    saveHistory("Текст", topic, `${hooks.join("\n")}\n\n${main}\n\n${cta}\n${hashtags}`);
    showToast("Reels-текст создан по улучшенной логике");
  });
}

function inferPain(topic, niche) {
  if (/шампун|космет|уход|кож|волос|бьюти/i.test(`${topic} ${niche}`)) {
    return "люди хотят быстрый видимый результат, но боятся ошибиться с выбором";
  }
  if (/тур|путеше|отел|каньон|город/i.test(`${topic} ${niche}`)) {
    return "люди хотят красивую поездку без хаоса, переплат и разочарований";
  }
  if (/магаз|товар|продаж|бренд/i.test(`${topic} ${niche}`)) {
    return "покупатель не понимает, почему нужно выбрать именно вас";
  }
  return "зритель быстро теряет внимание, если не видит личной пользы";
}

function buildHooks(topic, niche, tone, pain) {
  const banks = {
    Эксперт: [
      `3 ошибки в теме "${topic}", из-за которых результат выглядит слабее.`,
      `Если вы в нише "${niche}", проверьте это перед следующим роликом.`,
      `Вот почему ${topic} работает не у всех.`,
      `Разберем ${topic} простыми словами за 20 секунд.`,
      `Я бы начал с этого, если бы запускал ${topic} заново.`
    ],
    Продажи: [
      `Не покупайте ${topic}, пока не проверите эти 3 пункта.`,
      `Вот как понять, что вам действительно нужен ${topic}.`,
      `Эта деталь в нише "${niche}" решает, купят у вас или пролистают.`,
      `Покажу, почему ${topic} стоит внимания прямо сейчас.`,
      `Если вы сомневаетесь, начните с этого предложения.`
    ],
    Развлекательная: [
      `Я думал, ${topic} будет обычным, но случилось вот что...`,
      `POV: вы впервые пробуете ${topic} и не ожидали такого.`,
      `Никто: ... Абсолютно никто: ... ${topic} в реальности.`,
      `Проверяем миф про ${topic}.`,
      `Эта вещь изменила всё, и это не шутка.`
    ],
    Эмоциональная: [
      `Если вам знакомо это чувство, ролик для вас.`,
      `Я долго не понимал, почему ${pain}.`,
      `Иногда маленькое решение меняет весь день.`,
      `Вот момент, после которого я посмотрел на ${topic} иначе.`,
      `Сохраните это, когда снова понадобится уверенность.`
    ],
    Премиум: [
      `Тихая роскошь начинается с деталей: ${topic}.`,
      `Неочевидный признак премиального уровня в нише "${niche}".`,
      `Когда продукт говорит сам за себя, выглядит это так.`,
      `Минимум слов, максимум ощущения: ${topic}.`,
      `Вот как выглядит решение для тех, кто выбирает лучшее.`
    ]
  };
  return banks[tone] || banks.Эксперт;
}

function buildMainText(topic, niche, tone, pain) {
  const toneLead = {
    Эксперт: "Сначала назовите проблему, затем покажите причину и дайте один понятный шаг.",
    Продажи: "Начните с боли, покажите выгоду, уберите главное возражение и дайте простой следующий шаг.",
    Развлекательная: "Сделайте быстрый контраст ожидание/реальность и держите темп короткими фразами.",
    Эмоциональная: "Покажите состояние зрителя до и после, чтобы ролик ощущался личным.",
    Премиум: "Говорите меньше, показывайте больше: свет, детали, фактура, уверенный ритм."
  }[tone];

  return `${toneLead} Тема: ${topic}. Ниша: ${niche}. Главная боль: ${pain}. Сильный Reels строится так: первый кадр цепляет, второй показывает узнаваемую проблему, третий дает решение, четвертый доказывает результат, пятый переводит внимание в действие.`;
}

function buildCta(tone) {
  const ctas = {
    Эксперт: "Сохраните, чтобы свериться перед следующим роликом.",
    Продажи: "Напишите «ХОЧУ» в директ, и мы подберем решение под вашу задачу.",
    Развлекательная: "Отправьте другу, который точно узнает себя.",
    Эмоциональная: "Сохраните на момент, когда снова понадобится опора.",
    Премиум: "Оставьте заявку, если хотите такой же уровень подачи."
  };
  return ctas[tone] || ctas.Эксперт;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replaceAll(" ", "")
    .replace(/[^\p{L}\p{N}_-]/gu, "")
    .slice(0, 28) || "reels";
}

function generateScript() {
  const category = $("#scriptCategory").value;
  const topic = smartValue($("#scriptTopic").value, "ваша идея");
  const audience = smartValue($("#scriptAudience").value, "люди, которым важен быстрый и понятный результат");
  const pain = smartValue($("#scriptPain").value, inferPain(topic, category));
  const goal = $("#scriptGoal").value;
  const pace = $("#scriptPace").value;
  const playbook = SCRIPT_PLAYBOOKS[category] || SCRIPT_PLAYBOOKS.Эксперт;
  const offer = buildOffer(goal, topic);
  const frames = buildScriptFrames({ category, topic, audience, pain, goal, pace, playbook, offer });

  withGeneration(() => {
    $("#scriptOutput").innerHTML = frames.map((frame, index) => `
      <div>
        <span>Кадр ${index + 1}</span>
        <strong>${escapeHtml(frame.title)}</strong>
        <p>${escapeHtml(frame.text)}</p>
        <p><b>Визуал:</b> ${escapeHtml(frame.visual)}</p>
        <p><b>Озвучка:</b> ${escapeHtml(frame.voice)}</p>
      </div>
    `).join("");
    state.lastScript = frames.map((frame, index) => (
      `Кадр ${index + 1}: ${frame.title}\n` +
      `Текст: ${frame.text}\n` +
      `Визуал: ${frame.visual}\n` +
      `Озвучка: ${frame.voice}`
    )).join("\n\n");
    saveHistory("Сценарий", `${category} • ${goal}`, state.lastScript);
    showToast("Сценарий собран по маркетинговой структуре");
  });
}

function buildOffer(goal, topic) {
  const offers = {
    Продажа: `выбрать ${topic} и сразу понять, почему это выгодно`,
    Охваты: `досмотреть ролик и поделиться знакомым инсайтом`,
    Доверие: `поверить, что вы разбираетесь в теме и можете помочь`,
    Подписка: `подписаться за следующей практичной частью`,
    "Заявка в директ": `написать в директ и получить персональную рекомендацию`
  };
  return offers[goal] || offers.Продажа;
}

function buildScriptFrames(data) {
  const paceLine = {
    Быстрый: "резкие склейки 0.5-1 сек, крупные планы, динамичный монтаж",
    Средний: "чистые переходы, 2-3 сек на кадр, комфортный ритм",
    Кинематографичный: "медленные движения камеры, свет, детали, глубина",
    Разговорный: "лицо в кадре, живые фразы, ощущение личного совета"
  }[data.pace];

  return [
    {
      title: "Хук",
      text: randomFrom([
        `${data.audience}: если вам знакомо "${data.pain}", посмотрите это до конца.`,
        `Не начинайте с ${data.topic}, пока не поймете одну важную деталь.`,
        `Вот почему ${data.topic} не дает результата у большинства.`
      ]),
      visual: `${paceLine}. Первый кадр: крупный план результата или самой сильной детали.`,
      voice: "Начать без приветствия. Первая фраза должна звучать как срочная польза."
    },
    {
      title: "Проблема",
      text: `Главная ошибка: зритель видит картинку, но не понимает, какую проблему вы решаете. Боль: ${data.pain}.`,
      visual: "Покажите контраст: плохой вариант, хаос, сомнение, пустой результат или типичную ошибку.",
      voice: "Сделать короткую паузу после проблемы, чтобы зритель узнал себя."
    },
    {
      title: "Решение",
      text: `Дайте один простой шаг: ${data.playbook.trust}. Свяжите это с темой "${data.topic}".`,
      visual: "Показать процесс руками, экраном, жестом, стрелкой, сменой до/после или демонстрацией продукта.",
      voice: "Говорить уверенно, без сложных слов. Один кадр равен одной мысли."
    },
    {
      title: "Доказательство",
      text: `Добавьте доверие: ${data.playbook.proof}. Это помогает зрителю поверить и не пролистать.`,
      visual: "Крупный план результата, отзыв, цифра, чек-лист, сравнение или красивый финальный кадр.",
      voice: "Подчеркнуть конкретику: результат, факт, выгода, эмоция."
    },
    {
      title: "Призыв к действию",
      text: `Финал должен вести к цели "${data.goal}": зритель должен ${data.offer}.`,
      visual: "Чистый финальный кадр, свободное место под текст, бренд/лицо/товар в фокусе.",
      voice: "Закончить одной командой: сохранить, написать, подписаться или перейти к следующему шагу."
    }
  ];
}

function generateVoice() {
  const topic = smartValue($("#voiceTopic").value, "ваш Reels");
  const duration = $("#voiceDuration").value;
  const persona = PERSONAS[$("#voicePersona").value] || PERSONAS.female;
  const intensity = {
    "15 секунд": "коротко: 3 фразы, сильные паузы, сразу к сути",
    "30 секунд": "средний темп: хук, польза, доказательство, действие",
    "60 секунд": "подробнее: больше воздуха, объяснение, эмоциональная кульминация"
  }[duration];

  $("#voiceRate").value = persona.rate;
  $("#voicePitch").value = persona.pitch;

  const text = buildVoiceScript(topic, duration, persona, intensity);

  withGeneration(() => {
    $("#voiceText").textContent = text;
    saveHistory("Озвучка", `${persona.label} • ${duration}`, text);
    showToast("Озвучка настроена: текст, паузы, интонации и голос");
  });
}

function buildVoiceScript(topic, duration, persona, intensity) {
  const human = $("#voiceHumanize").checked;
  const pause = human ? "[пауза 0.5с]" : "[пауза 0.2с]";
  const micro = human ? "[микропауза]" : "";
  const breath = human ? "[легкий вдох]" : "";
  return `[голос: ${persona.label}; стиль: ${persona.hint}] ${breath} ${topic}. ${pause} Сначала покажите результат крупно. ${micro} Затем назовите проблему, которую зритель узнает с первых секунд. ${pause} Дайте одно простое решение. ${micro} Покажите доказательство кадром: до и после, отзыв, цифру или красивую деталь. [интонация: теплее] В финале скажите одно действие: сохранить, написать в директ или перейти к заказу. Формат: ${duration}, ${intensity}.`;
}

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  state.voices = window.speechSynthesis.getVoices();
  const voiceSelect = $("#browserVoice");
  const current = voiceSelect.value;
  const options = state.voices
    .map((voice, index) => `<option value="${index}">${escapeHtml(voice.name)} • ${escapeHtml(voice.lang)}</option>`)
    .join("");
  voiceSelect.innerHTML = `<option value="">Авто</option>${options}`;
  voiceSelect.value = current;
}

async function copyText(text) {
  try {
    if (!navigator.clipboard?.writeText) {
      throw new Error("Clipboard API is unavailable");
    }
    await navigator.clipboard.writeText(text);
    showToast("Скопировано");
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    showToast("Скопировано");
  }
}

function speakVoice() {
  const rawText = $("#voiceText").textContent;
  const text = voiceTextToSpeech(rawText);
  if (!("speechSynthesis" in window)) {
    showToast("SpeechSynthesis не поддерживается в этом браузере");
    return;
  }

  const persona = PERSONAS[$("#voicePersona").value] || PERSONAS.female;
  const selectedVoice = state.voices[Number($("#browserVoice").value)];

  window.speechSynthesis.cancel();
  state.utterance = new SpeechSynthesisUtterance(text);
  state.utterance.lang = selectedVoice?.lang || "ru-RU";
  state.utterance.voice = selectedVoice || pickVoice(persona);
  state.utterance.rate = humanizedRate(Number($("#voiceRate").value) || persona.rate);
  state.utterance.pitch = humanizedPitch(Number($("#voicePitch").value) || persona.pitch);
  window.speechSynthesis.speak(state.utterance);
  showToast(`Играет: ${persona.label}`);
}

function voiceTextToSpeech(rawText) {
  return rawText
    .replace(/\[пауза 0\.6с\]/g, "... ")
    .replace(/\[пауза 0\.5с\]/g, "... ")
    .replace(/\[пауза 0\.4с\]/g, ".. ")
    .replace(/\[микропауза\]/g, ", ")
    .replace(/\[легкий вдох\]/g, " ")
    .replace(/\[[^\]]+\]/g, ". ")
    .replace(/\s+/g, " ")
    .trim();
}

function humanizedRate(baseRate) {
  if (!$("#voiceHumanize").checked) return baseRate;
  return Math.max(0.72, Math.min(1.18, baseRate + (Math.random() * 0.04 - 0.02)));
}

function humanizedPitch(basePitch) {
  if (!$("#voiceHumanize").checked) return basePitch;
  return Math.max(0.65, Math.min(1.75, basePitch + (Math.random() * 0.06 - 0.03)));
}

function pickVoice(persona) {
  const ruVoices = state.voices.filter((voice) => voice.lang.toLowerCase().startsWith("ru"));
  const voices = ruVoices.length ? ruVoices : state.voices;
  if (!voices.length) return null;

  const name = persona.label.toLowerCase();
  if (name.includes("муж")) {
    return voices.find((voice) => /male|dmit|pavel|алекс|никол/i.test(voice.name)) || voices[0];
  }
  if (name.includes("жен")) {
    return voices.find((voice) => /female|anna|elena|мар|ирина|алена/i.test(voice.name)) || voices[0];
  }
  return voices[0];
}

function pauseVoice() {
  if (window.speechSynthesis?.speaking) {
    window.speechSynthesis.pause();
    showToast("Озвучка на паузе");
  }
}

function stopVoice() {
  window.speechSynthesis?.cancel();
  showToast("Озвучка остановлена");
}

function registerUser() {
  const name = smartValue($("#authName").value, "Пользователь");
  const email = $("#authEmail").value.trim().toLowerCase();
  const password = $("#authPassword").value;
  if (!email.includes("@") || password.length < 6) {
    showToast("Введите email и пароль минимум 6 символов");
    return;
  }
  if (state.users.some((user) => user.email === email)) {
    showToast("Такой email уже зарегистрирован");
    return;
  }
  state.users.push({
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
    subscriptionUntil: "",
    paymentStatus: "none"
  });
  saveUsers();
  state.sessionEmail = email;
  localStorage.setItem(SESSION_KEY, email);
  renderAccount();
  showToast("Аккаунт создан");
}

function loginUser() {
  const email = $("#authEmail").value.trim().toLowerCase();
  const password = $("#authPassword").value;
  const user = state.users.find((item) => item.email === email && item.password === password);
  if (!user) {
    showToast("Неверный email или пароль");
    return;
  }
  state.sessionEmail = email;
  localStorage.setItem(SESSION_KEY, email);
  renderAccount();
  showToast("Вы вошли в аккаунт");
}

function logoutUser() {
  state.sessionEmail = "";
  localStorage.removeItem(SESSION_KEY);
  renderAccount();
  showToast("Вы вышли");
}

function saveMerchantContact() {
  state.merchant = {
    name: $("#merchantName").value.trim(),
    bank: $("#merchantBank").value.trim(),
    card: formatCardNumber($("#merchantCard").value),
    phone: $("#merchantPhone").value.trim(),
    link: $("#merchantLink").value.trim(),
    comment: $("#merchantComment").value.trim()
  };
  localStorage.setItem(MERCHANT_KEY, JSON.stringify(state.merchant));
  renderAccount();
  showToast("Реквизиты сохранены");
}

function createPaymentRequest() {
  const user = currentUser();
  if (!user) {
    showToast("Сначала зарегистрируйтесь или войдите");
    return;
  }
  if (!hasMerchantDetails()) {
    showToast("Сначала укажите свои реквизиты для оплаты");
    return;
  }
  user.paymentStatus = "pending";
  user.paymentAmount = SUBSCRIPTION_PRICE;
  user.paymentCreatedAt = new Date().toISOString();
  saveUsers();
  renderAccount();
  showToast("Инструкция оплаты создана");
}

function confirmPayment() {
  const user = currentUser();
  if (!user) {
    showToast("Сначала войдите в аккаунт");
    return;
  }
  const until = new Date();
  until.setDate(until.getDate() + SUBSCRIPTION_DAYS);
  user.subscriptionUntil = until.toISOString();
  user.paymentStatus = "paid";
  saveUsers();
  renderAccount();
  saveHistory("Подписка", "Premium", `Активирована на ${SUBSCRIPTION_DAYS} дней за ${SUBSCRIPTION_PRICE} ₸`);
  showToast("Premium активирован на 15 дней");
}

function renderAccount() {
  const user = currentUser();
  $("#merchantName").value = state.merchant.name;
  $("#merchantBank").value = state.merchant.bank;
  $("#merchantCard").value = state.merchant.card;
  $("#merchantPhone").value = state.merchant.phone;
  $("#merchantLink").value = state.merchant.link;
  $("#merchantComment").value = state.merchant.comment;
  const authStatus = $("#authStatus");
  const paymentBox = $("#paymentBox");
  const merchantReady = hasMerchantDetails();

  if (!user) {
    authStatus.textContent = "Вы не вошли в аккаунт.";
    authStatus.classList.remove("active");
    $("#subscriptionStatus").textContent = "Подписка не активна";
    $("#subscriptionInfo").textContent = "Premium открывает больше генераций, 6 картинок, AI-календарь и бренд-голос.";
    paymentBox.textContent = merchantReady
      ? `Реквизиты продавца сохранены:\n${merchantInstruction("email покупателя")}`
      : "Укажите реквизиты, чтобы покупатель видел куда перевести 1000 ₸.";
    paymentBox.classList.toggle("ready", merchantReady);
    return;
  }

  authStatus.textContent = `Вы вошли как ${user.name} (${user.email}).`;
  authStatus.classList.add("active");

  if (isPremiumActive()) {
    $("#subscriptionStatus").textContent = `Premium активен: осталось ${subscriptionDaysLeft()} дней`;
    $("#subscriptionInfo").textContent = "Открыты расширенные генерации, AI-календарь, бренд-голос и 6 вариантов картинок.";
  } else {
    $("#subscriptionStatus").textContent = "Подписка не активна";
    $("#subscriptionInfo").textContent = "Стоимость: 1000 ₸ за 15 дней. После оплаты нажмите подтверждение.";
  }

  paymentBox.classList.toggle("ready", merchantReady);
  paymentBox.textContent = merchantReady
    ? `Оплата Premium ${SUBSCRIPTION_PRICE} ₸ / ${SUBSCRIPTION_DAYS} дней\n${merchantInstruction(user.email)}\nПосле проверки платежа нажмите «Подтвердить оплату».`
    : "Добавьте свои реквизиты Kaspi/телефон/ссылку, чтобы оплата приходила вам.";
}

function formatCardNumber(value) {
  return value.replace(/\D/g, "").slice(0, 19).replace(/(.{4})/g, "$1 ").trim();
}

function hasMerchantDetails() {
  return Boolean(state.merchant.card || state.merchant.phone || state.merchant.link);
}

function merchantInstruction(email) {
  return [
    state.merchant.name && `Получатель: ${state.merchant.name}`,
    state.merchant.bank && `Банк: ${state.merchant.bank}`,
    state.merchant.card && `Номер карты: ${state.merchant.card}`,
    state.merchant.phone && `Kaspi/телефон: ${state.merchant.phone}`,
    state.merchant.link && `Ссылка оплаты: ${state.merchant.link}`,
    `Сумма: ${SUBSCRIPTION_PRICE} ₸`,
    `Комментарий: ${state.merchant.comment || `Reelify Premium ${email}`}`
  ].filter(Boolean).join("\n");
}

function requirePremium(featureName) {
  if (isPremiumActive()) return true;
  showToast(`${featureName} доступен по Premium за ${SUBSCRIPTION_PRICE} ₸ / ${SUBSCRIPTION_DAYS} дней`);
  return false;
}

function generateCalendar() {
  if (!requirePremium("Контент-календарь")) return;
  const niche = smartValue($("#calendarNiche").value, collectCurrentIdea());
  const days = [
    ["День 1", "Ошибка", `3 ошибки в теме "${niche}", из-за которых зритель не покупает.`],
    ["День 2", "Доказательство", `Покажите до/после, отзыв или конкретный результат по "${niche}".`],
    ["День 3", "Процесс", "Снимите короткий backstage: как создается продукт или услуга."],
    ["День 4", "Личный кадр", "Расскажите честную историю: почему вы делаете это именно так."],
    ["День 5", "Продажа", `Оффер: что человек получает, если выберет "${niche}" сегодня.`],
    ["День 6", "Разбор", "Ответьте на частый вопрос или возражение клиента."],
    ["День 7", "Вирусный тест", "Сделайте быстрый формат ожидание/реальность или миф/правда."]
  ];
  const plan = days.map((day) => `${day[0]} — ${day[1]}\nХук: ${day[2]}\nCTA: сохранить, написать в директ или подписаться.`).join("\n\n");
  $("#calendarOutput").textContent = plan;
  saveHistory("AI календарь", niche, plan);
  showToast("Контент-план на 7 дней готов");
}

function generateBrandVoice() {
  if (!requirePremium("Бренд-голос")) return;
  const brand = smartValue($("#brandDescription").value, "премиальный бренд, которому важны доверие, стиль и результат");
  const voice = [
    `Позиционирование: ${brand}.`,
    "Тон: уверенный, теплый, конкретный, без дешевого давления.",
    "Слова бренда: результат, забота, эстетика, доверие, качество, спокойно, точно.",
    "Запрещено: кричащие обещания, капслок, агрессивные скидки, слишком много эмодзи.",
    "Хук: «Вот деталь, по которой сразу видно уровень бренда».",
    "CTA: «Напишите в директ, и мы подберем решение под вашу задачу».",
    "Формула текста: боль -> эстетичное решение -> доказательство -> мягкое действие."
  ].join("\n");
  $("#brandVoiceOutput").textContent = voice;
  saveHistory("AI бренд-голос", "Tone of voice", voice);
  showToast("Tone of voice создан");
}

function generateFreeHooks() {
  const idea = smartValue($("#freeHookIdea").value, collectCurrentIdea());
  const pain = inferPain(idea, "обычный пользователь");
  const hooks = [
    `Не начинайте ${idea}, пока не увидите эту ошибку.`,
    `Если вы хотите результат без лишних шагов, начните с этого.`,
    `Вот почему ${pain}, и как исправить это в одном Reels.`
  ];
  $("#freeHooksOutput").textContent = hooks.map((hook, index) => `${index + 1}. ${hook}`).join("\n");
  saveHistory("Бесплатные хуки", idea, hooks.join("\n"));
  showToast("3 бесплатных хука готовы");
}

function bindEvents() {
  $("#generatePhotoBtn").addEventListener("click", generatePhoto);
  $("#regenPhotoBtn").addEventListener("click", generatePhoto);
  $("#generateTextBtn").addEventListener("click", generateText);
  $("#generateScriptBtn").addEventListener("click", generateScript);
  $("#generateVoiceBtn").addEventListener("click", generateVoice);
  $("#askAssistantBtn").addEventListener("click", askAssistant);
  $("#scoreIdeaBtn").addEventListener("click", scoreIdea);
  $("#useAssistantIdeaBtn").addEventListener("click", useAssistantIdea);
  $("#registerBtn").addEventListener("click", registerUser);
  $("#loginBtn").addEventListener("click", loginUser);
  $("#logoutBtn").addEventListener("click", logoutUser);
  $("#saveMerchantBtn").addEventListener("click", saveMerchantContact);
  $("#createPaymentBtn").addEventListener("click", createPaymentRequest);
  $("#confirmPaymentBtn").addEventListener("click", confirmPayment);
  $("#generateCalendarBtn").addEventListener("click", generateCalendar);
  $("#generateBrandVoiceBtn").addEventListener("click", generateBrandVoice);
  $("#generateFreeHooksBtn").addEventListener("click", generateFreeHooks);
  $("#merchantCard").addEventListener("input", () => {
    $("#merchantCard").value = formatCardNumber($("#merchantCard").value);
  });
  $("#copyScriptBtn").addEventListener("click", () => copyText(state.lastScript || $("#scriptOutput").innerText));
  $("#playVoiceBtn").addEventListener("click", speakVoice);
  $("#pauseVoiceBtn").addEventListener("click", pauseVoice);
  $("#stopVoiceBtn").addEventListener("click", stopVoice);
  $("#voicePersona").addEventListener("change", () => {
    const persona = PERSONAS[$("#voicePersona").value] || PERSONAS.female;
    $("#voiceRate").value = persona.rate;
    $("#voicePitch").value = persona.pitch;
  });
  $("#clearHistoryBtn").addEventListener("click", () => {
    state.history = [];
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
    showToast("История очищена");
  });

  $$("[data-example]").forEach((button) => {
    button.addEventListener("click", () => {
      $("#photoDescription").value = button.dataset.example;
      showToast("Пример добавлен");
    });
  });

  $$("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = $(`#${button.dataset.copyTarget}`);
      copyText(target.textContent);
    });
  });
}

function askAssistant() {
  const input = smartValue($("#assistantInput").value, collectCurrentIdea());
  state.lastAssistantIdea = input;
  appendAssistantMessage(input, "user");
  withGeneration(() => {
    const advice = buildAssistantAdvice(input);
    appendAssistantMessage(advice, "ai");
    saveHistory("AI ассистент", "Reelify Copilot", advice);
    showToast("Ассистент собрал рекомендации");
  }, 620);
}

function appendAssistantMessage(text, type) {
  const chat = $("#assistantChat");
  chat.insertAdjacentHTML("beforeend", `<div class="assistant-message ${type}">${escapeHtml(text)}</div>`);
  chat.scrollTop = chat.scrollHeight;
}

function collectCurrentIdea() {
  return [
    $("#photoDescription").value,
    $("#textTopic").value,
    $("#textNiche").value,
    $("#scriptTopic").value,
    $("#scriptAudience").value,
    $("#scriptPain").value,
    $("#voiceTopic").value
  ].filter((item) => item.trim()).join(". ") || "Reels для продвижения продукта";
}

function buildAssistantAdvice(idea) {
  const visual = analyzeVisualTopic(idea);
  const pain = inferPain(idea, $("#textNiche").value || "ниша");
  const hook = buildHooks(idea, $("#textNiche").value || "ниша", $("#textTone").value || "Эксперт", pain)[0];
  return [
    `Стратегия: начни с конкретной боли, потом покажи результат, затем одно доказательство.`,
    `Хук: ${hook}`,
    `Картинка: ${visual.subject}; ${visual.location}; ${visual.light}.`,
    `Сценарий: 1) результат, 2) ошибка, 3) решение, 4) доказательство, 5) CTA.`,
    `CTA: ${buildCta($("#textTone").value || "Эксперт")}`,
    `Совет: убери лишний текст с картинки, оставь один главный объект и сильный свет.`
  ].join("\n");
}

function useAssistantIdea() {
  const idea = smartValue(state.lastAssistantIdea || $("#assistantInput").value, collectCurrentIdea());
  $("#photoDescription").value = idea;
  $("#textTopic").value = idea;
  $("#scriptTopic").value = idea;
  $("#voiceTopic").value = idea;
  showToast("Идея вставлена во все модули");
}

function scoreIdea() {
  const idea = collectCurrentIdea();
  const scoreParts = [
    { name: "Хук", ok: idea.length > 28 },
    { name: "Визуал", ok: /(покаж|фото|вид|баноч|товар|результат|закат|хамам|крем|шампун|до\/после)/i.test(idea) },
    { name: "Аудитория", ok: $("#scriptAudience").value.trim().length > 8 || /(для|люди|клиент|девуш|мужчин|турист|покупател)/i.test(idea) },
    { name: "Боль", ok: $("#scriptPain").value.trim().length > 8 || /(ошиб|боль|проблем|хоч|не знает|сложно|боится)/i.test(idea) },
    { name: "CTA", ok: /(директ|куп|сохран|подпис|заявк|заказ|напиш)/i.test(idea) || $("#scriptGoal").value !== "Охваты" }
  ];
  const score = Math.round(scoreParts.filter((part) => part.ok).length / scoreParts.length * 100);
  $("#scoreRing").textContent = score;
  $("#scoreRing").style.setProperty("--score", score);
  $("#scoreSummary").textContent = score >= 80
    ? "Идея сильная: можно генерировать сценарий и картинку."
    : "Идею стоит усилить: добавьте аудиторию, боль, доказательство или CTA.";
  $("#scoreList").innerHTML = scoreParts.map((part) => (
    `<li>${part.ok ? "Готово" : "Усилить"}: ${part.name}</li>`
  )).join("");
  saveHistory("Strategy Score", `${score}/100`, idea);
  showToast(`Оценка идеи: ${score}/100`);
}

bindEvents();
renderHistory();
renderAccount();
loadVoices();

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
