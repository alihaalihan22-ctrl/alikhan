import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import type { Session } from '@supabase/supabase-js';
import { Auth } from './components/Auth';
import { supabase } from './lib/supabase';

type Phase = 'menu' | 'shift' | 'armed' | 'outside' | 'escaped' | 'dead';
type TaskKey = 'phone' | 'cashier' | 'stock' | 'trash' | 'cameras' | 'bandits' | 'outside';

type Hud = {
  phase: Phase;
  locked: boolean;
  message: string;
  battery: number;
  fear: number;
  health: number;
  served: number;
  stocked: number;
  trash: number;
  cameraOpen: boolean;
  screamer: string | null;
  heldItem: string | null;
  heldItemFromStock: boolean;
  inventory: number;
  outsideFinal: boolean;
  trashDelivered: number;
  tasks: Record<TaskKey, boolean>;
};

type GameSettings = {
  graphics: 'low' | 'medium' | 'high';
  volume: number;
  sensitivity: number;
  showHud: boolean;
  mobileControls: boolean;
};

type GameReview = {
  id: string;
  name: string;
  rating: number;
  text: string;
  createdAt: string;
};

type CashierSkinId = 'uniform' | 'security' | 'raincoat' | 'night';

type CashierSkin = {
  id: CashierSkinId;
  name: string;
  description: string;
  sleeve: number;
  glove: number;
  badge: number;
  skin: number;
};

type CustomerAi = {
  mesh: THREE.Group;
  stage: 'waiting' | 'browse' | 'checkout' | 'leave' | 'gone' | 'weird';
  target: THREE.Vector3;
  item: string;
  mood: 'calm' | 'searching' | 'impatient' | 'angry' | 'afraid';
  patience: number;
  weird: boolean;
  leaveTime: number;
  checkoutTime: number;
  angry: boolean;
  spawnAt: number;
};

type MonsterAi = {
  mesh: THREE.Group;
  active: boolean;
  emerging: number;
  mood: 'hidden' | 'watching' | 'stalking' | 'hunting';
};

const assetUrl = (name: string) => `${import.meta.env.BASE_URL}assets/${name}.png`;

type BanditAi = {
  mesh: THREE.Group;
  active: boolean;
  health: number;
  target: THREE.Vector3;
};

type FridgeUnit = {
  mesh: THREE.Group;
  door: THREE.Object3D;
  manualOpen: boolean;
};

const productNames = ['Pepsi', 'Fanta', 'Р’РѕРґР°', 'Р§РёРїСЃС‹', 'Р‘СѓСЂРіРµСЂ', 'РҐРѕС‚-РґРѕРі', 'РљРѕСЂРЅ-РґРѕРі', 'РЁРѕРєРѕР»Р°РґРєР°', 'РџРµС‡РµРЅСЊРµ', 'РћРІРѕС‰Рё', 'Р¤СЂСѓРєС‚С‹', 'РњРѕСЂРѕР¶РµРЅРѕРµ'];
const productColors = [0x1b4fff, 0xff7d19, 0x85d9ff, 0xd8b33a, 0x8d4b22, 0xe7422f, 0xf4f2d7, 0x48a64b, 0xd8f4ff, 0x4aa64d, 0xd84032, 0xf3e8ff];
const productColorFor = (name: string) => productColors[Math.max(0, productNames.indexOf(name)) % productColors.length];
const cashierSkins: CashierSkin[] = [
  {
    id: 'uniform',
    name: 'РќРѕС‡РЅР°СЏ С„РѕСЂРјР°',
    description: 'РљСЂР°СЃРЅР°СЏ С„РѕСЂРјР° РєР°СЃСЃРёСЂР°, Р±РµР№РґР¶ Рё РѕР±С‹С‡РЅС‹Рµ СЂСѓРєРё.',
    sleeve: 0xa51520,
    glove: 0x161719,
    badge: 0xffd56f,
    skin: 0xf0aa77,
  },
  {
    id: 'security',
    name: 'РћС…СЂР°РЅР°',
    description: 'РўРµРјРЅР°СЏ РєСѓСЂС‚РєР°, РїР»РѕС‚РЅС‹Рµ РїРµСЂС‡Р°С‚РєРё Рё РјРµС‚Р°Р»Р»РёС‡РµСЃРєРёР№ Р±РµР№РґР¶.',
    sleeve: 0x15191d,
    glove: 0x050607,
    badge: 0x9fb2bd,
    skin: 0xd09165,
  },
  {
    id: 'raincoat',
    name: 'Р”РѕР¶РґРµРІРёРє',
    description: 'Р–РµР»С‚С‹Р№ РїР»Р°С‰ РґР»СЏ РІС‹С…РѕРґР° Рє РєРѕРЅС‚РµР№РЅРµСЂР°Рј РїРѕРґ РґРѕР¶РґРµРј.',
    sleeve: 0xd8a928,
    glove: 0x2c2f2c,
    badge: 0xeef3ff,
    skin: 0xe0b08a,
  },
  {
    id: 'night',
    name: 'Р§РµСЂРЅР°СЏ СЃРјРµРЅР°',
    description: 'РњР°С‚РѕРІР°СЏ С‡РµСЂРЅР°СЏ С„РѕСЂРјР°, РјРµРЅСЊС€Рµ Р±Р»РёРєРѕРІ РЅР° РєР°РјРµСЂР°С….',
    sleeve: 0x07080a,
    glove: 0x101010,
    badge: 0x8b1f2a,
    skin: 0xb87954,
  },
];

const defaultCashierSkin = cashierSkins[0];

const getSavedSkin = (): CashierSkinId => {
  const saved = localStorage.getItem('shesterochka-cashier-skin') as CashierSkinId | null;
  return cashierSkins.some((skin) => skin.id === saved) ? saved! : 'uniform';
};

const defaultReviews: GameReview[] = [
  {
    id: 'default-1',
    name: 'РќРѕС‡РЅРѕР№ РёРіСЂРѕРє',
    rating: 5,
    text: 'РђС‚РјРѕСЃС„РµСЂР° СЃС‚Р°Р»Р° РЅР°РјРЅРѕРіРѕ СЃС‚СЂР°С€РЅРµРµ: СЃРІРµС‚ РјРѕСЂРіР°РµС‚, РєР»РёРµРЅС‚С‹ СЃРјРѕС‚СЂСЏС‚ СЃС‚СЂР°РЅРЅРѕ, Р° СѓР»РёС†Р° СЂРµР°Р»СЊРЅРѕ РЅР°РїСЂСЏРіР°РµС‚.',
    createdAt: '2026-06-23T00:00:00.000Z',
  },
  {
    id: 'default-2',
    name: 'РљР°СЃСЃРёСЂ 05:12',
    rating: 4,
    text: 'РљСЂСѓС‚Рѕ, С‡С‚Рѕ РјРѕР¶РЅРѕ РѕР±СЃР»СѓР¶РёРІР°С‚СЊ РєР»РёРµРЅС‚РѕРІ, РїРѕРїРѕР»РЅСЏС‚СЊ РїРѕР»РєРё Рё РїРѕС‚РѕРј РІС‹С…РѕРґРёС‚СЊ Рє РјСѓСЃРѕСЂРєРµ. РҐРѕС‡Сѓ РµС‰Рµ Р±РѕР»СЊС€Рµ Р·РІСѓРєРѕРІ.',
    createdAt: '2026-06-23T00:01:00.000Z',
  },
];

const getSavedReviews = (): GameReview[] => {
  try {
    const saved = localStorage.getItem('shesterochka-reviews');
    if (!saved) return defaultReviews;
    const parsed = JSON.parse(saved) as GameReview[];
    if (!Array.isArray(parsed)) return defaultReviews;
    return parsed
      .filter((review) => typeof review.text === 'string' && typeof review.name === 'string')
      .map((review) => ({
        id: String(review.id || crypto.randomUUID()),
        name: String(review.name).slice(0, 32) || 'РРіСЂРѕРє',
        rating: clamp(Number(review.rating) || 5, 1, 5),
        text: String(review.text).slice(0, 420),
        createdAt: String(review.createdAt || new Date().toISOString()),
      }));
  } catch {
    return defaultReviews;
  }
};

const taskLabels: Record<TaskKey, string> = {
  phone: 'РѕС‚РІРµС‚СЊ РЅР° С‚РµР»РµС„РѕРЅ РѕС…СЂР°РЅС‹',
  cashier: 'РѕР±СЃР»СѓР¶Рё РєР»РёРµРЅС‚РѕРІ РЅР° РєР°СЃСЃРµ',
  stock: 'РїРѕРїРѕР»РЅРё РїСѓСЃС‚С‹Рµ РїРѕР»РєРё',
  trash: 'СЃРѕР±РµСЂРё РјСѓСЃРѕСЂРЅС‹Рµ РїР°РєРµС‚С‹',
  cameras: 'РїСЂРѕРІРµСЂСЊ РєР°РјРµСЂС‹ РІ РєРѕРјРЅР°С‚Рµ РѕС…СЂР°РЅС‹',
  bandits: 'РѕС‚Р±РµР№СЃСЏ РѕС‚ Р±Р°РЅРґРёС‚РѕРІ',
  outside: 'РІС‹РЅРµСЃРё РјСѓСЃРѕСЂ РЅР°СЂСѓР¶Сѓ',
};

const customerWaypoints = [
  new THREE.Vector3(-15, 0, -13),
  new THREE.Vector3(-12, 0, 8),
  new THREE.Vector3(-7, 0, -13),
  new THREE.Vector3(-3, 0, 9),
  new THREE.Vector3(2, 0, -13),
  new THREE.Vector3(7, 0, 8),
  new THREE.Vector3(13, 0, -13),
  new THREE.Vector3(14, 0, 6),
];
const initialTasks: Record<TaskKey, boolean> = {
  phone: false,
  cashier: false,
  stock: false,
  trash: false,
  cameras: false,
  bandits: false,
  outside: false,
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function getInputKey(event: KeyboardEvent) {
  const byCode: Record<string, string> = {
    KeyW: 'w',
    KeyA: 'a',
    KeyS: 's',
    KeyD: 'd',
    ArrowUp: 'w',
    ArrowLeft: 'a',
    ArrowDown: 's',
    ArrowRight: 'd',
    KeyE: 'e',
    KeyQ: 'q',
    KeyI: 'i',
    KeyJ: 'j',
    KeyK: 'k',
    KeyL: 'l',
    ShiftLeft: 'shift',
    ShiftRight: 'shift',
    Escape: 'escape',
  };
  const byKey: Record<string, string> = {
    'ц': 'w',
    'ф': 'a',
    'ы': 's',
    'в': 'd',
    'у': 'e',
    'й': 'q',
  };
  const raw = event.key.toLowerCase();
  return byCode[event.code] ?? byKey[raw] ?? raw;
}

function box(w: number, h: number, d: number, color: number, pos: [number, number, number]) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color, roughness: 0.72 }),
  );
  mesh.position.set(...pos);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function cylinder(radius: number, height: number, color: number, pos: [number, number, number], segments = 20) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, height, segments),
    new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.04 }),
  );
  mesh.position.set(...pos);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function makeProduct(name: string, color: number) {
  const group = new THREE.Group();
  if (name.includes('Pepsi') || name.includes('Fanta') || name.includes('Р’РѕРґР°')) {
    const bottle = cylinder(0.13, 0.62, color, [0, 0.31, 0], 24);
    const cap = cylinder(0.1, 0.08, 0xeeeeee, [0, 0.66, 0], 18);
    const label = box(0.29, 0.16, 0.02, 0xf4f4f4, [0, 0.36, -0.13]);
    group.add(bottle, cap, label);
  } else if (name.includes('Р§РёРї')) {
    const bag = box(0.38, 0.72, 0.14, color, [0, 0.36, 0]);
    bag.rotation.z = 0.08;
    group.add(bag);
  } else if (name.includes('Р‘СѓСЂРіРµСЂ')) {
    group.add(cylinder(0.18, 0.13, 0xc9863b, [0, 0.33, 0], 24));
    group.add(cylinder(0.17, 0.08, 0x5b2a16, [0, 0.23, 0], 24));
    group.add(cylinder(0.18, 0.1, 0xe0a24c, [0, 0.14, 0], 24));
  } else if (name.includes('РґРѕРі')) {
    const bun = box(0.52, 0.14, 0.18, 0xd69a53, [0, 0.22, 0]);
    const sausage = box(0.48, 0.08, 0.09, 0xa93b24, [0, 0.31, 0]);
    group.add(bun, sausage);
  } else if (name.includes('РЁРѕРєРѕР»Р°Рґ')) {
    const bar = box(0.56, 0.1, 0.28, 0x4a2118, [0, 0.18, 0]);
    const wrap = box(0.6, 0.12, 0.08, color, [0, 0.2, -0.08]);
    group.add(bar, wrap);
  } else if (name.includes('РџРµС‡РµРЅСЊРµ')) {
    for (let i = 0; i < 4; i += 1) {
      const cookie = cylinder(0.12, 0.045, 0xb98045, [-0.18 + i * 0.12, 0.16 + i * 0.025, 0], 18);
      cookie.rotation.x = Math.PI / 2;
      group.add(cookie);
    }
  } else if (name.includes('РћРІРѕС‰')) {
    group.add(cylinder(0.16, 0.28, 0x49a644, [0, 0.18, 0], 14));
    group.add(cylinder(0.11, 0.22, 0xdd4a35, [0.18, 0.16, 0.04], 14));
  } else if (name.includes('Р¤СЂСѓРєС‚')) {
    const apple = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 18, 14),
      new THREE.MeshStandardMaterial({ color: 0xc23228, roughness: 0.42 }),
    );
    apple.position.set(-0.12, 0.18, 0);
    const orange = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 18, 14),
      new THREE.MeshStandardMaterial({ color: 0xe38b26, roughness: 0.45 }),
    );
    orange.position.set(0.14, 0.18, 0.04);
    group.add(apple, orange);
  } else {
    const pack = box(0.32, 0.42, 0.24, color, [0, 0.22, 0]);
    group.add(pack);
  }
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return group;
}

function makeShelfSlotMarker(requiredProduct: string, pos: THREE.Vector3) {
  const group = new THREE.Group();
  const trayMat = new THREE.MeshStandardMaterial({ color: 0x30383c, roughness: 0.5, metalness: 0.55 });
  const stripMat = new THREE.MeshStandardMaterial({ color: productColorFor(requiredProduct), roughness: 0.46, metalness: 0.08 });
  const tray = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.035, 0.48), trayMat);
  const backStop = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.18, 0.035), trayMat);
  const colorStrip = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.045, 0.035), stripMat);
  tray.position.set(0, -0.02, 0);
  backStop.position.set(0, 0.08, 0.25);
  colorStrip.position.set(0, 0.08, -0.25);
  group.add(tray, backStop, colorStrip);
  group.position.copy(pos);
  group.userData.requiredProduct = requiredProduct;
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return group;
}

function makeHuman(color: number, skin = 0xf0aa77, dark = false) {
  const group = new THREE.Group();
  const shirt = new THREE.MeshStandardMaterial({ color, roughness: 0.68, metalness: 0.02 });
  const pants = new THREE.MeshStandardMaterial({ color: 0x202226, roughness: 0.72 });
  const skinMat = new THREE.MeshStandardMaterial({ color: skin, roughness: 0.62 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.72, 8, 18), shirt);
  body.position.y = 0.96;
  body.scale.set(0.85, 1.08, 0.58);
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.25, 24, 18),
    skinMat,
  );
  head.position.y = 1.55;
  const hair = new THREE.Mesh(
    new THREE.SphereGeometry(0.27, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: dark ? 0x050505 : 0x1b120d, roughness: 0.9 }),
  );
  hair.position.y = 1.65;
  const eyeMat = new THREE.MeshBasicMaterial({ color: dark ? 0xffcf6c : 0x07110f });
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 8), eyeMat);
  const eyeR = eyeL.clone();
  eyeL.position.set(-0.08, 1.57, -0.22);
  eyeR.position.set(0.08, 1.57, -0.22);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.08, 8), skinMat);
  nose.position.set(0, 1.51, -0.245);
  nose.rotation.x = Math.PI / 2;
  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.018, 0.012), new THREE.MeshBasicMaterial({ color: 0x35130f }));
  mouth.position.set(0, 1.43, -0.235);
  const armL = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.6, 6, 10), skinMat);
  const armR = armL.clone();
  armL.position.set(-0.38, 0.91, -0.02);
  armR.position.set(0.38, 0.91, -0.02);
  armL.rotation.z = -0.18;
  armR.rotation.z = 0.18;
  const legL = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.62, 6, 10), pants);
  const legR = legL.clone();
  legL.position.set(-0.13, 0.31, 0);
  legR.position.set(0.13, 0.31, 0);
  const shoeL = box(0.18, 0.08, 0.28, 0x050505, [-0.13, 0.035, -0.04]);
  const shoeR = box(0.18, 0.08, 0.28, 0x050505, [0.13, 0.035, -0.04]);
  group.add(body, head, hair, eyeL, eyeR, nose, mouth, armL, armR, legL, legR, shoeL, shoeR);
  return group;
}

function paintCashierViewModel(group: THREE.Group, skin: CashierSkin) {
  group.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const part = child.userData.cashierPart;
    const color = part === 'skin' ? skin.skin : part === 'glove' ? skin.glove : part === 'badge' ? skin.badge : skin.sleeve;
    const metalness = part === 'badge' ? 0.55 : 0.03;
    child.material = new THREE.MeshStandardMaterial({
      color,
      roughness: part === 'glove' ? 0.38 : 0.62,
      metalness,
    });
  });
}

function makeCashierViewModel(skin: CashierSkin) {
  const group = new THREE.Group();
  group.name = 'cashier-view-model';
  group.position.set(0, -0.95, -1.18);
  const sleeveGeometry = new THREE.CapsuleGeometry(0.075, 0.62, 6, 12);
  const handGeometry = new THREE.SphereGeometry(0.095, 16, 12);
  [-1, 1].forEach((side) => {
    const sleeve = new THREE.Mesh(sleeveGeometry);
    sleeve.userData.cashierPart = 'sleeve';
    sleeve.position.set(side * 0.35, -0.08, 0.04);
    sleeve.rotation.set(0.82, 0, side * 0.24);
    const hand = new THREE.Mesh(handGeometry);
    hand.userData.cashierPart = 'skin';
    hand.position.set(side * 0.48, -0.34, -0.1);
    hand.scale.set(1, 0.72, 1.15);
    const glove = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.045, 0.2));
    glove.userData.cashierPart = 'glove';
    glove.position.set(side * 0.48, -0.28, -0.17);
    glove.rotation.z = side * 0.08;
    group.add(sleeve, hand, glove);
  });
  const badge = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.09, 0.02));
  badge.userData.cashierPart = 'badge';
  badge.position.set(-0.18, 0.12, 0.02);
  badge.rotation.x = -0.18;
  group.add(badge);
  paintCashierViewModel(group, skin);
  return group;
}

function makeCustomer(color: number, index = 0) {
  const group = makeHuman(color, [0xf0aa77, 0xd09165, 0xb87954, 0xe0b08a][index % 4], index % 3 === 0);
  const bag = box(0.22, 0.32, 0.12, 0x6b4a2f, [0.46, 0.78, 0.06]);
  bag.rotation.z = 0.16;
  group.add(bag);
  if (index >= 3 && index % 2 === 1) {
    const mask = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.34, 0.035),
      new THREE.MeshStandardMaterial({ color: 0xe8e1d4, roughness: 0.72, metalness: 0.02 }),
    );
    mask.position.set(0, 1.5, -0.255);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffcf6c });
    [-0.07, 0.07].forEach((x) => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.032, 8, 8), eyeMat);
      eye.position.set(x, 1.56, -0.285);
      group.add(eye);
    });
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.03, 0.018), new THREE.MeshBasicMaterial({ color: 0x050000 }));
    mouth.position.set(0, 1.42, -0.292);
    group.add(mask, mouth);
  }
  return group;
}

function giveCustomerProduct(customer: CustomerAi) {
  if (customer.mesh.userData.carryingProduct) return;
  const productColor = [0x1b4fff, 0xff7d19, 0x85d9ff, 0xf0d23c, 0xe7422f][Math.floor(Math.random() * 5)];
  const carried = makeProduct(customer.item, productColor);
  carried.name = 'carriedProduct';
  carried.scale.setScalar(0.46);
  carried.position.set(0.42, 0.86, -0.24);
  carried.rotation.set(-0.22, 0.18, 0.08);
  const priceTag = box(0.14, 0.08, 0.015, 0xf8f0c8, [0.1, 0.22, -0.15]);
  priceTag.name = 'carriedProduct';
  carried.add(priceTag);
  customer.mesh.add(carried);
  customer.mesh.userData.carryingProduct = true;
}

function makeBandit() {
  const group = makeHuman(0x111111, 0xb98a68, true);
  const weapon = box(0.12, 0.12, 0.72, 0x333333, [0.55, 0.9, -0.28]);
  weapon.rotation.x = 0.55;
  group.add(weapon);
  return group;
}

function makeCart(pos: [number, number, number]) {
  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: 0xb8c1c7, metalness: 0.75, roughness: 0.22 });
  const basket = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.62, 0.9), metal);
  basket.position.y = 0.62;
  basket.scale.set(1, 1, 1);
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.025, 8, 28), metal);
  handle.position.set(0, 1.05, 0.52);
  handle.rotation.x = Math.PI / 2;
  group.add(basket, handle);
  [-0.42, 0.42].forEach((x) => [-0.32, 0.32].forEach((z) => {
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.025, 8, 18), metal);
    wheel.position.set(x, 0.12, z);
    wheel.rotation.y = Math.PI / 2;
    group.add(wheel);
  }));
  group.position.set(...pos);
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  group.userData.kind = 'cart';
  group.userData.items = 0;
  return group;
}

function makeTrashBag(pos: [number, number, number]) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color: 0x050505,
    roughness: 0.92,
    metalness: 0,
  });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.38, 20, 14), mat);
  body.position.y = 0.36;
  body.scale.set(1, 0.82, 0.78);
  const knot = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.32, 12), mat);
  knot.position.y = 0.82;
  const wrinkleMat = new THREE.MeshStandardMaterial({ color: 0x181818, roughness: 0.98 });
  for (let i = 0; i < 6; i += 1) {
    const wrinkle = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.34, 0.02), wrinkleMat);
    wrinkle.position.set(Math.cos(i) * 0.28, 0.42, Math.sin(i) * 0.22);
    wrinkle.rotation.y = i;
    group.add(wrinkle);
  }
  group.add(body, knot);
  group.position.set(...pos);
  group.userData.kind = 'trashBag';
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return group;
}

function makeHandBasket(pos: [number, number, number]) {
  const group = new THREE.Group();
  const plastic = new THREE.MeshStandardMaterial({ color: 0xd82632, roughness: 0.42, metalness: 0.02 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.55 });
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.08, 0.62), plastic);
  base.position.y = 0.16;
  group.add(base);
  [-0.34, 0, 0.34].forEach((x) => {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.38, 0.66), plastic);
    rail.position.set(x, 0.4, 0);
    group.add(rail);
  });
  [-0.28, 0, 0.28].forEach((z) => {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.32, 0.04), plastic);
    rail.position.set(0, 0.42, z);
    group.add(rail);
  });
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.025, 8, 28), dark);
  handle.position.set(0, 0.78, 0);
  handle.rotation.x = Math.PI / 2;
  group.add(handle);
  group.position.set(...pos);
  group.userData.kind = 'basket';
  group.userData.items = 0;
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return group;
}

function makeParkedCar(pos: [number, number, number], color: number) {
  const group = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color, roughness: 0.24, metalness: 0.28 });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x9fc7d9,
    roughness: 0.05,
    metalness: 0,
    transmission: 0.35,
    transparent: true,
    opacity: 0.42,
    clearcoat: 1,
  });
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.55, 4.1), paint);
  body.position.y = 0.45;
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.55, 1.7), glass);
  cabin.position.set(0, 0.95, -0.25);
  group.add(body, cabin);
  [-0.82, 0.82].forEach((x) => [-1.45, 1.45].forEach((z) => {
    const wheel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.22, 18),
      new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.62 }),
    );
    wheel.position.set(x, 0.23, z);
    wheel.rotation.z = Math.PI / 2;
    group.add(wheel);
  }));
  const headlightMat = new THREE.MeshBasicMaterial({ color: 0xffefb2 });
  [-0.55, 0.55].forEach((x) => {
    const light = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.06), headlightMat);
    light.position.set(x, 0.56, -2.08);
    group.add(light);
  });
  group.position.set(...pos);
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return group;
}

function makeStoreSign(pos: [number, number, number]) {
  const group = new THREE.Group();
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#111418';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#bd1624';
  ctx.fillRect(26, 26, canvas.width - 52, canvas.height - 52);
  ctx.strokeStyle = '#f7f3e7';
  ctx.lineWidth = 12;
  ctx.strokeRect(42, 42, canvas.width - 84, canvas.height - 84);
  ctx.fillStyle = '#fff2d0';
  ctx.font = '900 96px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(255,255,255,.55)';
  ctx.shadowBlur = 16;
  ctx.fillText('6РЁР•РЎРўРЃР РђР§РљРђ', canvas.width / 2, canvas.height / 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const face = new THREE.Mesh(
    new THREE.BoxGeometry(8.4, 1.55, 0.18),
    new THREE.MeshStandardMaterial({
      map: texture,
      emissive: 0x8a111b,
      emissiveIntensity: 0.8,
      roughness: 0.22,
      metalness: 0.08,
    }),
  );
  const back = box(8.65, 1.75, 0.16, 0x1a1e22, [0, 0, 0.1]);
  const glow = new THREE.PointLight(0xff2038, 1.5, 12);
  glow.position.set(0, 0.2, -1.6);
  group.add(back, face, glow);
  group.position.set(...pos);
  group.rotation.y = Math.PI;
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return group;
}

function makePuddle(pos: [number, number, number], scale: [number, number, number]) {
  const puddle = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 0.018, 40),
    new THREE.MeshPhysicalMaterial({
      color: 0x0a1216,
      roughness: 0.04,
      metalness: 0,
      clearcoat: 1,
      transparent: true,
      opacity: 0.62,
    }),
  );
  puddle.position.set(...pos);
  puddle.scale.set(...scale);
  puddle.receiveShadow = true;
  return puddle;
}

function makeFenceSection(pos: [number, number, number], width = 6) {
  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: 0x5a6469, metalness: 0.78, roughness: 0.25 });
  const top = new THREE.Mesh(new THREE.BoxGeometry(width, 0.06, 0.08), metal);
  top.position.y = 1.45;
  const bottom = top.clone();
  bottom.position.y = 0.35;
  group.add(top, bottom);
  for (let x = -width / 2; x <= width / 2; x += 0.55) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.6, 0.06), metal);
    bar.position.set(x, 0.8, 0);
    group.add(bar);
  }
  group.position.set(...pos);
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return group;
}

function makeExitSign(pos: [number, number, number]) {
  const group = new THREE.Group();
  const panel = box(3.2, 0.9, 0.12, 0x184f34, [0, 0, 0]);
  const glow = new THREE.PointLight(0x50ff99, 1.15, 8);
  glow.position.set(0, 0, -1.2);
  group.add(panel, glow);
  group.position.set(...pos);
  return group;
}

function makeRainField() {
  const group = new THREE.Group();
  const rainMat = new THREE.MeshBasicMaterial({ color: 0x9fc7d9, transparent: true, opacity: 0.34 });
  for (let i = 0; i < 90; i += 1) {
    const drop = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.75, 0.018), rainMat);
    drop.position.set(-19 + Math.random() * 38, 1.2 + Math.random() * 5.2, 22 + Math.random() * 36);
    drop.rotation.z = -0.22;
    drop.userData.speed = 3.8 + Math.random() * 2.6;
    group.add(drop);
  }
  return group;
}

function makeShadowFigure() {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color: 0x020202,
    roughness: 0.96,
    emissive: 0x050000,
    transparent: true,
    opacity: 0.88,
  });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 1.6, 8, 12), mat);
  body.position.y = 1.05;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 10), mat);
  head.position.y = 2.05;
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2038 }));
  eye.position.set(0.06, 2.08, -0.2);
  const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 1.1, 5, 8), mat);
  arm.position.set(-0.32, 1.1, -0.02);
  arm.rotation.z = -0.35;
  group.add(body, head, eye, arm);
  group.visible = false;
  group.userData.hideAt = 0;
  return group;
}

function makeFridge(pos: [number, number, number]): FridgeUnit {
  const group = new THREE.Group();
  const frame = box(2.45, 3.18, 0.55, 0x1c2228, [0, 1.59, 0]);
  const inner = box(2.05, 2.62, 0.08, 0xd7f6ff, [0, 1.55, -0.33]);
  inner.userData.isFridgeGlow = true;
  const sideL = box(0.08, 2.82, 0.58, 0x303941, [-1.18, 1.55, -0.12]);
  const sideR = box(0.08, 2.82, 0.58, 0x303941, [1.18, 1.55, -0.12]);
  const handle = box(0.07, 1.5, 0.07, 0xdbe5ea, [0.86, 1.62, -0.34]);
  const glass = new THREE.Mesh(
    new THREE.BoxGeometry(1.85, 2.55, 0.05),
    new THREE.MeshPhysicalMaterial({
      color: 0xaedcff,
      metalness: 0,
      roughness: 0.03,
      transmission: 0.55,
      transparent: true,
      opacity: 0.34,
      reflectivity: 0.9,
      clearcoat: 1,
    }),
  );
  glass.position.set(0, 1.58, -0.26);
  glass.userData.closedZ = -0.26;
  glass.userData.openZ = -1.35;
  const glow = new THREE.PointLight(0xbdeeff, 1.35, 5.2);
  glow.position.set(0, 1.8, -0.45);
  group.add(frame, inner, sideL, sideR, glass, handle, glow);
  [0.7, 1.32, 1.94, 2.56].forEach((y) => {
    const shelf = box(2.02, 0.045, 0.42, 0xc9d1d6, [0, y, -0.3]);
    group.add(shelf);
  });
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 5; col += 1) {
      const i = row * 5 + col;
      const item = makeProduct(productNames[i % productNames.length], [0x1b4fff, 0xff7d19, 0x85d9ff, 0xd8f4ff, 0xffffff][i % 5]);
      item.position.set(-0.78 + col * 0.39, 0.58 + row * 0.62, -0.42);
      item.scale.setScalar(0.56);
      group.add(item);
    }
  }
  group.position.set(...pos);
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return { mesh: group, door: glass, manualOpen: false };
}

function makeMetalShelf(pos: [number, number, number]) {
  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: 0x9ba3a7, metalness: 0.86, roughness: 0.24 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x4f575c, metalness: 0.9, roughness: 0.2 });

  [-0.48, 0.48].forEach((x) => [-5.1, 5.1].forEach((z) => {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.35, 0.12), darkMetal);
    post.position.set(x, 1.18, z);
    group.add(post);
  }));

  [0.38, 0.95, 1.52, 2.08].forEach((y) => {
    const tray = new THREE.Mesh(new THREE.BoxGeometry(1.08, 0.09, 10.7), metal);
    tray.position.set(0, y, 0);
    group.add(tray);
    [-0.58, 0.58].forEach((x) => {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 10.8), darkMetal);
      rail.position.set(x, y + 0.1, 0);
      group.add(rail);
    });
    const labelRail = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.06, 10.6), darkMetal);
    labelRail.position.set(-0.62, y + 0.2, 0);
    group.add(labelRail);
  });

  [-4, -2, 0, 2, 4].forEach((z) => {
    const cross = new THREE.Mesh(new THREE.BoxGeometry(1.16, 0.08, 0.08), darkMetal);
    cross.position.set(0, 2.35, z);
    group.add(cross);
    const divider = new THREE.Mesh(new THREE.BoxGeometry(0.035, 1.7, 0.05), darkMetal);
    divider.position.set(0, 1.32, z);
    group.add(divider);
  });

  const backPanel = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 2.08, 10.5),
    new THREE.MeshStandardMaterial({ color: 0x727a7f, metalness: 0.72, roughness: 0.32 }),
  );
  backPanel.position.set(0.56, 1.21, 0);
  group.add(backPanel);

  group.position.set(...pos);
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return group;
}

function makeMonster() {
  const group = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({
    color: 0x2a0b0f,
    emissive: 0x120004,
    roughness: 0.78,
    metalness: 0.02,
  });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.68, 2.9, 10, 24), skin);
  body.position.y = 1.9;
  body.scale.set(0.82, 1.12, 1.05);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.68, 24, 18), skin);
  head.position.set(0.08, 3.55, -0.08);
  head.scale.set(0.86, 1.12, 1.28);
  group.add(body, head);
  const neck = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.85, 8, 14), skin);
  neck.position.set(-0.05, 3.02, 0.02);
  neck.rotation.z = -0.18;
  group.add(neck);
  const mouth = new THREE.Mesh(
    new THREE.SphereGeometry(0.34, 20, 12),
    new THREE.MeshStandardMaterial({ color: 0x050000, roughness: 0.95, emissive: 0x210004 }),
  );
  mouth.position.set(0, 3.16, -0.61);
  mouth.scale.set(1.45, 0.42, 0.34);
  group.add(mouth);
  const lowerJaw = new THREE.Mesh(
    new THREE.BoxGeometry(0.88, 0.12, 0.34),
    new THREE.MeshStandardMaterial({ color: 0x26070a, roughness: 0.7, emissive: 0x120002 }),
  );
  lowerJaw.position.set(0, 2.88, -0.64);
  lowerJaw.rotation.x = -0.2;
  group.add(lowerJaw);
  const innerGlow = new THREE.PointLight(0xff1935, 1.6, 3.5);
  innerGlow.position.set(0, 3.05, -0.72);
  group.add(innerGlow);
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffe083 });
  [[-0.26, 3.62, -0.64], [0.2, 3.47, -0.68], [0.02, 3.82, -0.58], [0.36, 3.72, -0.46]].forEach(([x, y, z], index) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(index === 2 ? 0.06 : 0.085, 12, 10), eyeMat);
    eye.position.set(x, y, z);
    group.add(eye);
  });
  for (let i = 0; i < 24; i += 1) {
    const tooth = new THREE.Mesh(
      new THREE.ConeGeometry(i % 3 === 0 ? 0.07 : 0.052, i % 3 === 0 ? 0.62 : 0.44, 10),
      new THREE.MeshStandardMaterial({ color: 0xe9dfc8, roughness: 0.34 }),
    );
    tooth.position.set(-0.58 + i * 0.05, 2.96 + (i % 2) * 0.34, -0.72);
    tooth.rotation.x = i % 2 ? 0 : Math.PI;
    group.add(tooth);
  }
  [-1, 1].forEach((side) => {
    const horn = new THREE.Mesh(
      new THREE.ConeGeometry(0.16, 0.95, 16),
      new THREE.MeshStandardMaterial({ color: 0xc9bba0, roughness: 0.28 }),
    );
    horn.position.set(side * 0.45, 3.92, -0.05);
    horn.rotation.z = -side * 0.48;
    group.add(horn);
  });
  for (let i = 0; i < 8; i += 1) {
    const spine = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.55, 10), skin);
    spine.position.set(0, 3.05 - i * 0.28, 0.72);
    spine.rotation.x = Math.PI / 2;
    group.add(spine);
  }
  for (let i = 0; i < 7; i += 1) {
    const rib = new THREE.Mesh(
      new THREE.TorusGeometry(0.48 - i * 0.025, 0.025, 6, 24, Math.PI * 1.18),
      new THREE.MeshStandardMaterial({ color: 0xeadfca, roughness: 0.34 }),
    );
    rib.position.set(0, 2.52 - i * 0.22, -0.08);
    rib.rotation.set(Math.PI / 2, 0, Math.PI * 0.08);
    rib.scale.x = 1.25;
    group.add(rib);
  }
  [-1, 1].forEach((side) => {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 1.8, 6, 10), skin);
    arm.position.set(side * 0.95, 2.1, -0.05);
    arm.rotation.z = side * 0.7;
    group.add(arm);
    for (let finger = 0; finger < 4; finger += 1) {
      const claw = new THREE.Mesh(
        new THREE.ConeGeometry(0.08, 0.62 + finger * 0.06, 12),
        new THREE.MeshStandardMaterial({ color: 0xd8cfb9, roughness: 0.2 }),
      );
      claw.position.set(side * (1.42 + finger * 0.07), 1.24 - finger * 0.035, -0.18 + finger * 0.08);
      claw.rotation.z = -side * (0.75 + finger * 0.08);
      claw.rotation.x = 0.35;
      group.add(claw);
    }
  });
  for (let i = 0; i < 5; i += 1) {
    const tentacle = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.06, 1.45 + i * 0.18, 5, 10),
      skin,
    );
    tentacle.position.set(-0.45 + i * 0.23, 1.2 - i * 0.06, 0.62);
    tentacle.rotation.set(0.85 + i * 0.12, 0.2 - i * 0.1, -0.45 + i * 0.22);
    group.add(tentacle);
  }
  const wetShine = new THREE.Mesh(
    new THREE.SphereGeometry(0.72, 16, 10),
    new THREE.MeshPhysicalMaterial({
      color: 0x3b1118,
      roughness: 0.18,
      metalness: 0,
      clearcoat: 1,
      transparent: true,
      opacity: 0.18,
    }),
  );
  wetShine.position.set(0.02, 2.16, -0.05);
  wetShine.scale.set(0.75, 1.6, 0.55);
  group.add(wetShine);
  [-1, 1].forEach((side) => {
    const wing = new THREE.Mesh(
      new THREE.ConeGeometry(0.24, 1.6, 5),
      new THREE.MeshStandardMaterial({ color: 0x19080a, roughness: 0.82, transparent: true, opacity: 0.82 }),
    );
    wing.position.set(side * 0.78, 2.45, 0.62);
    wing.rotation.set(1.15, 0, side * 0.52);
    wing.scale.set(0.65, 1.2, 1);
    group.add(wing);
  });
  [-1, 1].forEach((side) => {
    const horn = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.95, 10),
      new THREE.MeshStandardMaterial({ color: 0xd9cfb8, roughness: 0.26, metalness: 0.04 }),
    );
    horn.position.set(side * 0.38, 4.05, -0.18);
    horn.rotation.set(0.35, 0, side * -0.55);
    group.add(horn);
    const claw = new THREE.Mesh(
      new THREE.ConeGeometry(0.09, 0.72, 10),
      new THREE.MeshStandardMaterial({ color: 0xe8dfcf, roughness: 0.3 }),
    );
    claw.position.set(side * 0.96, 1.55, -0.62);
    claw.rotation.set(1.35, 0, side * 0.32);
    group.add(claw);
  });
  for (let i = 0; i < 10; i += 1) {
    const blisterEye = new THREE.Mesh(
      new THREE.SphereGeometry(0.045 + (i % 3) * 0.012, 10, 8),
      new THREE.MeshBasicMaterial({ color: i % 2 ? 0xffcf6c : 0xff3448 }),
    );
    blisterEye.position.set(-0.34 + (i % 5) * 0.17, 2.2 + Math.floor(i / 5) * 0.46, -0.58 - (i % 2) * 0.08);
    group.add(blisterEye);
  }
  const glow = new THREE.PointLight(0xff273f, 2.2, 8);
  glow.position.set(0, 2.8, 0);
  group.add(glow);
  group.visible = false;
  return group;
}

export default function App() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [skinsOpen, setSkinsOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const [coopMode, setCoopMode] = useState(false);
  const [onlineMode, setOnlineMode] = useState(false);
  const [onlineRoom, setOnlineRoom] = useState(() => localStorage.getItem('shesterochka-room') || 'night-512');
  const [equippedSkin, setEquippedSkin] = useState<CashierSkinId>(() => getSavedSkin());
  const [authOpen, setAuthOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [settings, setSettings] = useState<GameSettings>({
    graphics: 'high',
    volume: 80,
    sensitivity: 55,
    showHud: true,
    mobileControls: true,
  });
  const [geminiOpen, setGeminiOpen] = useState(false);
  const [geminiPrompt, setGeminiPrompt] = useState('');
  const [geminiAnswer, setGeminiAnswer] = useState('');
  const [geminiBusy, setGeminiBusy] = useState(false);
  const [reviews, setReviews] = useState<GameReview[]>(() => getSavedReviews());
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const engine = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    controls: PointerLockControls;
    clock: THREE.Clock;
    keys: Record<string, boolean>;
    customers: CustomerAi[];
    monster: MonsterAi;
    scareMesh: THREE.Group;
    flashlight: THREE.SpotLight;
    traces: THREE.Object3D[];
    colliders: THREE.Box3[];
    outsideColliders: THREE.Box3[];
    trashObjects: THREE.Object3D[];
    stockObjects: THREE.Object3D[];
    stockCrates: THREE.Object3D[];
    carts: THREE.Object3D[];
    fridges: FridgeUnit[];
    cashierView: THREE.Group;
    secondPlayer: THREE.Group;
    loreNotes: THREE.Object3D[];
    bandits: BanditAi[];
    phone: THREE.Object3D;
    cameraDesk: THREE.Object3D;
    exitDoor: THREE.Object3D;
    autoDoorLeft: THREE.Object3D;
    autoDoorRight: THREE.Object3D;
    helpExit: THREE.Object3D;
    dumpster: THREE.Object3D;
    outsideObjects: THREE.Object3D[];
    outsideLights: THREE.PointLight[];
    rain: THREE.Group;
    outsideShadow: THREE.Group;
    storeLight: THREE.PointLight;
    hemi: THREE.HemisphereLight;
    lastStepAt: number;
    lastDropAt: number;
    lastWhisperAt: number;
    lastBreathAt: number;
    lastNightEventAt: number;
    audio?: AudioContext;
    wind?: OscillatorNode;
  } | null>(null);
  const settingsRef = useRef(settings);
  const pausedRef = useRef(paused);
  const mobileMoveRef = useRef({ x: 0, y: 0 });
  const mobileLookRef = useRef({ active: false, lastX: 0, lastY: 0 });
  const canvasLookRef = useRef({ active: false, lastX: 0, lastY: 0 });
  const multiplayerRef = useRef<{
    id: string;
    room: string;
    lastSend: number;
    remoteSeen: number;
    channel?: BroadcastChannel;
  }>({
    id: crypto.randomUUID(),
    room: '',
    lastSend: 0,
    remoteSeen: 0,
  });

  const [hud, setHud] = useState<Hud>({
    phase: 'menu',
    locked: false,
    message: 'РЁРµСЃС‚С‘СЂРѕС‡РєР° Horror: РЅР°Р¶РјРё СЃС‚Р°СЂС‚, Р·Р°С‚РµРј РєР»РёРєРЅРё РїРѕ РёРіСЂРµ РґР»СЏ Р·Р°С…РІР°С‚Р° РјС‹С€Рё.',
    battery: 100,
    fear: 0,
    served: 0,
    stocked: 0,
    trash: 0,
    cameraOpen: false,
    screamer: null,
    heldItem: null,
    heldItemFromStock: false,
    inventory: 0,
    outsideFinal: false,
    trashDelivered: 0,
    health: 100,
    tasks: initialTasks,
  });
  const hudRef = useRef(hud);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (nextSession) setAuthOpen(false);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    hudRef.current = hud;
  }, [hud]);

  useEffect(() => {
    localStorage.setItem('shesterochka-reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    settingsRef.current = settings;
    const state = engine.current;
    if (!state) return;
    state.renderer.setPixelRatio(
      settings.graphics === 'high'
        ? Math.min(window.devicePixelRatio, 1.75)
        : settings.graphics === 'medium'
          ? Math.min(window.devicePixelRatio, 1.25)
          : 1,
    );
    state.renderer.shadowMap.enabled = settings.graphics !== 'low';
  }, [settings]);

  useEffect(() => {
    pausedRef.current = paused;
    if (paused) engine.current?.controls.unlock();
  }, [paused]);

  useEffect(() => {
    if (!engine.current) return;
    const skin = cashierSkins.find((item) => item.id === equippedSkin) ?? defaultCashierSkin;
    paintCashierViewModel(engine.current.cashierView, skin);
  }, [equippedSkin]);

  const patchHud = (patch: Partial<Hud>) => {
    setHud((current) => ({ ...current, ...patch }));
  };

  const completeTask = (task: TaskKey) => {
    setHud((current) => ({ ...current, tasks: { ...current.tasks, [task]: true } }));
  };

  const selectedSkin = cashierSkins.find((skin) => skin.id === equippedSkin) ?? defaultCashierSkin;

  const getLocalGameHint = (question: string) => {
    const current = hudRef.current;
    const state = engine.current;
    const lower = question.toLowerCase();
    const nextTask = (Object.keys(current.tasks) as TaskKey[]).find((task) => !current.tasks[task]);
    const angryCustomer = state?.customers.find((customer) => customer.mood === 'angry' || customer.mood === 'impatient');

    if (lower.includes('РјРѕРЅСЃС‚СЂ')) {
      if (state?.monster.mood === 'hunting') return 'РњРѕРЅСЃС‚СЂ СѓР¶Рµ РѕС…РѕС‚РёС‚СЃСЏ. РќРµ СЃС‚РѕР№ Сѓ РєРѕРЅС‚РµР№РЅРµСЂРѕРІ: Р±РµРіРё Рє Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРёРј РґРІРµСЂСЏРј РёР»Рё Рє РґР°Р»СЊРЅРµРјСѓ РІС‹С…РѕРґСѓ РЅР° РїР°СЂРєРѕРІРєРµ, С„РѕРЅР°СЂРёРє РґРµСЂР¶Рё РІРєР»СЋС‡РµРЅРЅС‹Рј РєРѕСЂРѕС‚РєРёРјРё РІСЃРїС‹С€РєР°РјРё.';
      if (state?.monster.mood === 'stalking') return 'РњРѕРЅСЃС‚СЂ СЂСЏРґРѕРј, РЅРѕ РµС‰Рµ РЅРµ СѓСЃРєРѕСЂРёР»СЃСЏ. РћС‚С…РѕРґРё РѕС‚ РјСѓСЃРѕСЂРєРё, РЅРµ СЃРјРѕС‚СЂРё РґРѕР»РіРѕ РІ РѕРґРЅСѓ С‚РѕС‡РєСѓ Рё РґРµСЂР¶Рё РїСѓС‚СЊ РѕР±СЂР°С‚РЅРѕ Рє РјР°РіР°Р·РёРЅСѓ.';
      if (state?.monster.mood === 'watching') return 'РњРѕРЅСЃС‚СЂ РїРѕРєР° РЅР°Р±Р»СЋРґР°РµС‚ С‡РµСЂРµР· РєР°РјРµСЂС‹ Рё РѕС‚СЂР°Р¶РµРЅРёСЏ. РџСЂРѕРІРµСЂСЊ РєРѕРјРЅР°С‚Сѓ РѕС…СЂР°РЅС‹, РїРѕС‚РѕРј РЅРµ Р·Р°РґРµСЂР¶РёРІР°Р№СЃСЏ Сѓ С…РѕР»РѕРґРёР»СЊРЅРёРєРѕРІ.';
      return 'РџРѕРєР° РјРѕРЅСЃС‚СЂ СЃРєСЂС‹С‚. РЎРЅР°С‡Р°Р»Р° РґРµР»Р°Р№ СЃРјРµРЅСѓ: С‚РµР»РµС„РѕРЅ, РєР°СЃСЃР°, РїРѕР»РєРё, РєР°РјРµСЂС‹, РјСѓСЃРѕСЂ. РћРЅ РїСЂРѕСЏРІРёС‚СЃСЏ СЃРёР»СЊРЅРµРµ Р±Р»РёР¶Рµ Рє СѓР»РёС†Рµ.';
    }

    if (lower.includes('РєР»РёРµРЅС‚') || lower.includes('Р·Р»РёС‚')) {
      if (angryCustomer) return `РљР»РёРµРЅС‚ СЃ С‚РѕРІР°СЂРѕРј "${angryCustomer.item}" С‚РµСЂСЏРµС‚ С‚РµСЂРїРµРЅРёРµ. РџРѕРґРѕР№РґРё Рє РєР°СЃСЃРµ Рё РЅР°Р¶РјРё E, РёРЅР°С‡Рµ РѕРЅ СѓР№РґРµС‚ Рё РїРѕРґРЅРёРјРµС‚ СЃС‚СЂР°С….`;
      return 'РљР»РёРµРЅС‚С‹ С…РѕРґСЏС‚ Рє РїРѕР»РєР°Рј, Р±РµСЂСѓС‚ 3D-С‚РѕРІР°СЂС‹ Рё РёРґСѓС‚ Рє РєР°СЃСЃРµ. Р•СЃР»Рё РєР»РёРµРЅС‚ СЃС‚РѕРёС‚ Сѓ РєР°СЃСЃС‹ СЃР»РёС€РєРѕРј РґРѕР»РіРѕ, РѕРЅ Р·Р»РёС‚СЃСЏ Рё СѓС…РѕРґРёС‚ С‡РµСЂРµР· РґРІРµСЂРё.';
    }

    if (lower.includes('РјСѓСЃРѕСЂ')) {
      if (current.phase === 'outside') return 'РќР° СѓР»РёС†Рµ РЅРµ Р·Р°РґРµСЂР¶РёРІР°Р№СЃСЏ РІРѕР·Р»Рµ РєРѕРЅС‚РµР№РЅРµСЂРѕРІ. Р‘СЂРѕСЃСЊ РїР°РєРµС‚ РІ РјСѓСЃРѕСЂРєСѓ Рё СЃСЂР°Р·Сѓ РІРѕР·РІСЂР°С‰Р°Р№СЃСЏ Рє РјР°РіР°Р·РёРЅСѓ РёР»Рё Р±РµРіРё Рє Р·РµР»РµРЅРѕРјСѓ РІС‹С…РѕРґСѓ.';
      return 'РњСѓСЃРѕСЂРЅС‹Рµ РїР°РєРµС‚С‹ Р»РµР¶Р°С‚ РІРЅСѓС‚СЂРё РјР°РіР°Р·РёРЅР°. РџРѕРґРѕР№РґРё Рє РїР°РєРµС‚Сѓ, РЅР°Р¶РјРё E, РїРѕС‚РѕРј РЅРµСЃРё РµРіРѕ Рє Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРёРј РґРІРµСЂСЏРј Рё РЅР° СѓР»РёС†Сѓ.';
    }

    if (lower.includes('СѓР»РёС†') || lower.includes('СЃР±РµР¶') || lower.includes('СѓРјРµСЂ')) {
      return current.outsideFinal
        ? 'Р¤РёРЅР°Р» РЅР°С‡Р°Р»СЃСЏ: РјРѕРЅСЃС‚СЂ РІС‹Р»РµР·Р°РµС‚ РёР· РєРѕРЅС‚РµР№РЅРµСЂР°. Р‘РµРіРё, РЅРµ РѕР±РѕСЂР°С‡РёРІР°Р№СЃСЏ, РґРµСЂР¶РёСЃСЊ С„РѕРЅР°СЂРµР№ Рё СѓС…РѕРґРё Рє РІС‹С…РѕРґСѓ РёР»Рё РѕР±СЂР°С‚РЅРѕ Рє РґРІРµСЂСЏРј РјР°РіР°Р·РёРЅР°.'
        : 'Р”Рѕ С„РёРЅР°Р»Р° РјРѕР¶РЅРѕ РІРµСЂРЅСѓС‚СЊСЃСЏ РІ РјР°РіР°Р·РёРЅ: РїРѕРґРѕР№РґРё Рє Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРёРј РґРІРµСЂСЏРј Рё РЅР°Р¶РјРё E. Р’ С„РёРЅР°Р»Рµ РїСЂРёРґРµС‚СЃСЏ Р±РµР¶Р°С‚СЊ Р±С‹СЃС‚СЂРµРµ.';
    }

    if (nextTask) return `РЎР»РµРґСѓСЋС‰Р°СЏ С†РµР»СЊ: ${taskLabels[nextTask]}. Р•СЃР»Рё РїРѕС‚РµСЂСЏР»СЃСЏ, РёС‰Рё РѕР±СЉРµРєС‚ СЂСЏРґРѕРј Рё РЅР°Р¶РёРјР°Р№ E.`;
    return 'Р’СЃРµ РѕСЃРЅРѕРІРЅС‹Рµ РґРµР»Р° РїРѕС‡С‚Рё Р·Р°РєСЂС‹С‚С‹. РџСЂРѕРІРµСЂСЊ, РЅРµС‚ Р»Рё РјСѓСЃРѕСЂР° РІ СЂСѓРєР°С…, Р·Р°С‚РµРј РІС‹С…РѕРґРё РЅР° СѓР»РёС†Сѓ Рё РіРѕС‚РѕРІСЊСЃСЏ Рє РїРѕРіРѕРЅРµ.';
  };

  const equipSkin = (skinId: CashierSkinId) => {
    const skin = cashierSkins.find((item) => item.id === skinId) ?? defaultCashierSkin;
    setEquippedSkin(skin.id);
    localStorage.setItem('shesterochka-cashier-skin', skin.id);
    if (engine.current) paintCashierViewModel(engine.current.cashierView, skin);
    patchHud({ message: `РЎРєРёРЅ РЅР°РґРµС‚: ${skin.name}. Р’ РїРµСЂРІРѕРј Р»РёС†Рµ РёР·РјРµРЅРёР»РёСЃСЊ СЂСѓРєРё РєР°СЃСЃРёСЂР°.` });
  };

  const removeSkin = () => {
    equipSkin('uniform');
    patchHud({ message: 'РЎРєРёРЅ СЃРЅСЏС‚. РќР°РґРµС‚Р° РѕР±С‹С‡РЅР°СЏ РЅРѕС‡РЅР°СЏ С„РѕСЂРјР° РєР°СЃСЃРёСЂР°.' });
  };

  const saveGame = async (data: Record<string, unknown>) => {
    const save = { ...data, updatedAt: new Date().toISOString() };
    localStorage.setItem('shesterochka-save', JSON.stringify(save));

    if (!supabase || !session?.user) return;
    await supabase.from('game_saves').upsert({
      user_id: session.user.id,
      slot: 'default',
      data: save,
    }, { onConflict: 'user_id,slot' });
  };

  const requestGemini = async (question: string) => {
    const cleanQuestion = question.trim();
    if (!cleanQuestion || geminiBusy) return;
    setGeminiBusy(true);
    setGeminiAnswer('');

    const system = [
      'РўС‹ РІСЃС‚СЂРѕРµРЅРЅС‹Р№ РїРѕРјРѕС‰РЅРёРє Gemini РІРЅСѓС‚СЂРё РёРіСЂС‹ "РЁРµСЃС‚С‘СЂРѕС‡РєР° Horror".',
      'РћС‚РІРµС‡Р°Р№ РїРѕ-СЂСѓСЃСЃРєРё, РєРѕСЂРѕС‚РєРѕ, РєР°Рє РІРЅСѓС‚СЂРёРёРіСЂРѕРІР°СЏ РїРѕРґСЃРєР°Р·РєР°, Р±РµР· РґР»РёРЅРЅС‹С… Р»РµРєС†РёР№.',
      'РќРµ Р»РѕРјР°Р№ Р°С‚РјРѕСЃС„РµСЂСѓ С…РѕСЂСЂРѕСЂР°: РїРѕРґСЃРєР°Р·С‹РІР°Р№ С‡РµСЂРµР· РґРµР№СЃС‚РІРёСЏ РёРіСЂРѕРєР°, РєР°РјРµСЂС‹, Р·РІСѓРє, СЃРІРµС‚, РєР°СЃСЃСѓ, РїРѕР»РєРё, РјСѓСЃРѕСЂ Рё СѓР»РёС†Сѓ.',
      'РЎСЋР¶РµС‚: РЅРѕС‡РЅР°СЏ СЃРјРµРЅР° РєР°СЃСЃРёСЂР°, СЃС‚СЂР°РЅРЅС‹Р№ Р·РІРѕРЅРѕРє РѕС…СЂР°РЅС‹, РєР»РёРµРЅС‚С‹, РїРѕРїРѕР»РЅРµРЅРёРµ РїРѕР»РѕРє, РєР°РјРµСЂС‹, РјСѓСЃРѕСЂРЅС‹Рµ РїР°РєРµС‚С‹, РєРѕРЅС‚РµР№РЅРµСЂС‹ Рё С„РёРЅР°Р»СЊРЅР°СЏ РїРѕРіРѕРЅСЏ 3D-РјРѕРЅСЃС‚СЂР°.',
      'Р•СЃР»Рё РёРіСЂРѕРє РїСЂРѕСЃРёС‚ "С‡С‚Рѕ РґР°Р»СЊС€Рµ", СЃРєР°Р¶Рё Р±Р»РёР¶Р°Р№С€СѓСЋ РїРѕР»РµР·РЅСѓСЋ С†РµР»СЊ. Р•СЃР»Рё РїСЂРѕСЃРёС‚ РІС‹Р¶РёС‚СЊ, РґР°Р№ С‚Р°РєС‚РёС‡РµСЃРєРёР№ СЃРѕРІРµС‚.',
    ].join(' ');
    const prompt = `${cleanQuestion}\n\nCurrent game state: ${JSON.stringify({
      phase: hudRef.current.phase,
      tasks: hudRef.current.tasks,
      served: hudRef.current.served,
      stocked: hudRef.current.stocked,
      trash: hudRef.current.trash,
      trashDelivered: hudRef.current.trashDelivered,
      health: hudRef.current.health,
      battery: hudRef.current.battery,
      fear: hudRef.current.fear,
      heldItem: hudRef.current.heldItem,
      selectedCashierSkin: selectedSkin.name,
      customers: engine.current?.customers.map((customer) => ({
        stage: customer.stage,
        item: customer.item,
        mood: customer.mood,
        patience: Math.round(Math.max(0, customer.patience - customer.checkoutTime)),
        carryingProduct: Boolean(customer.mesh.userData.carryingProduct),
      })) ?? [],
      monster: engine.current ? {
        mood: engine.current.monster.mood,
        active: engine.current.monster.active,
        emerging: Number(engine.current.monster.emerging.toFixed(2)),
        visible: engine.current.monster.mesh.visible,
      } : null,
      lore: 'РњРѕРЅСЃС‚СЂ Р¶РёРІРµС‚ Сѓ РјСѓСЃРѕСЂРЅС‹С… РєРѕРЅС‚РµР№РЅРµСЂРѕРІ Рё СЃРЅР°С‡Р°Р»Р° РїСЂРѕСЏРІР»СЏРµС‚СЃСЏ С‡РµСЂРµР· РєР°РјРµСЂС‹, РѕС‚СЂР°Р¶РµРЅРёСЏ, С€Р°РіРё Рё РёСЃС‡РµР·Р°СЋС‰РёС… РєР»РёРµРЅС‚РѕРІ.',
    })}`;

    try {
      if (!supabase) {
        setGeminiAnswer(getLocalGameHint(cleanQuestion));
        return;
      }
      const { data, error } = await supabase.functions.invoke('ai', {
        body: { prompt, system },
      });
      const answer = error ? getLocalGameHint(cleanQuestion) : data?.text ?? getLocalGameHint(cleanQuestion);
      setGeminiAnswer(answer);
    } catch {
      setGeminiAnswer(getLocalGameHint(cleanQuestion));
    } finally {
      setGeminiBusy(false);
    }
  };

  const askGemini = async (e: React.FormEvent) => {
    e.preventDefault();
    await requestGemini(geminiPrompt);
  };

  const addReview = (event: React.FormEvent) => {
    event.preventDefault();
    const cleanText = reviewText.trim();
    const cleanName = reviewName.trim();
    if (cleanText.length < 3) {
      patchHud({ message: 'РќР°РїРёС€Рё РѕС‚Р·С‹РІ С‡СѓС‚СЊ РїРѕРґСЂРѕР±РЅРµРµ, С…РѕС‚СЏ Р±С‹ РїР°СЂСѓ СЃР»РѕРІ.' });
      return;
    }
    const review: GameReview = {
      id: crypto.randomUUID(),
      name: cleanName.slice(0, 32) || session?.user.email?.split('@')[0] || 'РРіСЂРѕРє',
      rating: clamp(reviewRating, 1, 5),
      text: cleanText.slice(0, 420),
      createdAt: new Date().toISOString(),
    };
    setReviews((current) => [review, ...current].slice(0, 30));
    setReviewText('');
    setReviewName('');
    setReviewRating(5);
    patchHud({ message: 'РћС‚Р·С‹РІ СЃРѕС…СЂР°РЅРµРЅ. РЎРїР°СЃРёР±Рѕ, СЌС‚Рѕ РїРѕРјРѕР¶РµС‚ СѓР»СѓС‡С€РёС‚СЊ РЁРµСЃС‚С‘СЂРѕС‡РєСѓ Horror.' });
  };

  const getCustomerAiLine = (customer: CustomerAi) => {
    if (customer.weird) {
      const lines = [
        `РљР»РёРµРЅС‚ С€РµРїС‡РµС‚: "РЇ СѓР¶Рµ РїРѕРєСѓРїР°Р» ${customer.item} Р·Р°РІС‚СЂР°."`,
        `РљР»РёРµРЅС‚ СЃРјРѕС‚СЂРёС‚ РјРёРјРѕ С‚РµР±СЏ: "РќР° РєР°РјРµСЂРµ Р·Р° С‚РІРѕРµР№ СЃРїРёРЅРѕР№ РєС‚Рѕ-С‚Рѕ СЃС‚РѕРёС‚."`,
        `РљР»РёРµРЅС‚ СѓР»С‹Р±Р°РµС‚СЃСЏ СЃР»РёС€РєРѕРј С€РёСЂРѕРєРѕ: "${customer.item} РїСЂРѕР±РµР№ Р±РµР· С‡РµРєР°."`,
      ];
      return lines[Math.floor(Math.random() * lines.length)];
    }
    if (customer.mood === 'impatient') return `РљР»РёРµРЅС‚ РЅРµСЂРІРЅРѕ СЃС‚СѓС‡РёС‚ РїРѕ РєР°СЃСЃРµ: "РњРѕР¶РЅРѕ Р±С‹СЃС‚СЂРµРµ? РњРЅРµ РЅСѓР¶РµРЅ ${customer.item}."`;
    return `РљР»РёРµРЅС‚ СЃРїРѕРєРѕР№РЅРѕ РєР»Р°РґРµС‚ РЅР° РєР°СЃСЃСѓ: ${customer.item}.`;
  };

  const scare = (name: string) => {
    const screamerImage = name || 'screamer-grin';
    patchHud({ screamer: screamerImage, fear: clamp(hudRef.current.fear + 24, 0, 100) });
    const state = engine.current!;
    if (state) {
      const forward = new THREE.Vector3();
      state.camera.getWorldDirection(forward);
      state.scareMesh.visible = true;
      state.scareMesh.position.copy(state.camera.position).add(forward.multiplyScalar(1.05));
      state.scareMesh.position.y -= 0.1;
      state.scareMesh.lookAt(state.camera.position);
      state.scareMesh.scale.setScalar(0.9 + Math.random() * 0.25);
      window.setTimeout(() => {
        if (engine.current) engine.current.scareMesh.visible = false;
      }, 820);
    }
    const ctx = engine.current?.audio;
    if (ctx) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.value = 48 + Math.random() * 42;
      gain.gain.value = 0.18;
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.7);
    }
    window.setTimeout(() => patchHud({ screamer: null }), 950);
  };

  const angrySound = () => {
    const ctx = engine.current?.audio;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const growl = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    growl.type = 'sawtooth';
    osc.frequency.setValueAtTime(210, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(68, ctx.currentTime + 0.45);
    growl.frequency.setValueAtTime(42, ctx.currentTime);
    gain.gain.value = 0.001;
    gain.gain.exponentialRampToValueAtTime(0.13, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.75);
    osc.connect(gain);
    growl.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    growl.start();
    osc.stop(ctx.currentTime + 0.75);
    growl.stop(ctx.currentTime + 0.75);
  };

  const playFootstep = () => {
    const ctx = engine.current?.audio;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(72, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(38, ctx.currentTime + 0.08);
    gain.gain.value = 0.001;
    gain.gain.exponentialRampToValueAtTime(0.055 * (settingsRef.current.volume / 100), ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.18);
  };

  const playImpactSound = () => {
    const ctx = engine.current?.audio;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = 'square';
    osc.frequency.setValueAtTime(260, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(52, ctx.currentTime + 0.24);
    filter.type = 'lowpass';
    filter.frequency.value = 760;
    gain.gain.value = 0.001;
    gain.gain.exponentialRampToValueAtTime(0.12 * (settingsRef.current.volume / 100), ctx.currentTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.42);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.44);
  };

  const playWhisperSound = () => {
    const ctx = engine.current?.audio;
    if (!ctx) return;
    const noise = ctx.createBufferSource();
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.75, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    filter.type = 'bandpass';
    filter.frequency.value = 620 + Math.random() * 340;
    filter.Q.value = 8;
    gain.gain.value = 0.001;
    gain.gain.exponentialRampToValueAtTime(0.075 * (settingsRef.current.volume / 100), ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.78);
    noise.buffer = buffer;
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();
  };

  const playHeartbeatSound = () => {
    const ctx = engine.current?.audio;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(58, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(34, ctx.currentTime + 0.18);
    filter.type = 'lowpass';
    filter.frequency.value = 240;
    gain.gain.value = 0.001;
    gain.gain.exponentialRampToValueAtTime(0.1 * (settingsRef.current.volume / 100), ctx.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050607);
    scene.fog = new THREE.FogExp2(0x050607, 0.026);

    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 220);
    camera.position.set(0, 1.7, 14);
    scene.add(camera);
    const cashierView = makeCashierViewModel(cashierSkins.find((skin) => skin.id === equippedSkin) ?? defaultCashierSkin);
    camera.add(cashierView);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    mountRef.current.appendChild(renderer.domElement);

    const controls = new PointerLockControls(camera, renderer.domElement);
    controls.addEventListener('lock', () => patchHud({ locked: true }));
    controls.addEventListener('unlock', () => patchHud({ locked: false }));

    const hemi = new THREE.HemisphereLight(0xf2f6ff, 0x242424, 0.95);
    scene.add(hemi);
    const storeLight = new THREE.PointLight(0xfff6d8, 4.2, 58);
    storeLight.position.set(0, 6, 0);
    storeLight.castShadow = true;
    storeLight.shadow.mapSize.set(1024, 1024);
    scene.add(storeLight);
    [-12, -6, 0, 6, 12].forEach((x) => {
      [-11, -3, 5, 12].forEach((z) => {
        const strip = new THREE.RectAreaLight(0xf7fbff, 4.2, 5.6, 0.62);
        strip.position.set(x, 3.85, z);
        strip.rotation.x = -Math.PI / 2;
        scene.add(strip);
        const panel = new THREE.Mesh(
          new THREE.BoxGeometry(5.4, 0.05, 0.55),
          new THREE.MeshStandardMaterial({
            color: 0xf2f7ff,
            emissive: 0xe9f3ff,
            emissiveIntensity: 2.8,
            roughness: 0.18,
          }),
        );
        panel.position.set(x, 3.82, z);
        panel.receiveShadow = false;
        scene.add(panel);
      });
    });

    const flashlight = new THREE.SpotLight(0xffffff, 3.2, 20, Math.PI / 8, 0.35, 1.1);
    flashlight.position.copy(camera.position);
    flashlight.target.position.set(0, 1.7, 0);
    scene.add(flashlight, flashlight.target);

    const floor = new THREE.Mesh(
      new THREE.BoxGeometry(36, 0.16, 34),
      new THREE.MeshStandardMaterial({ color: 0x5f5b54, roughness: 0.18, metalness: 0.06 }),
    );
    floor.position.set(0, -0.08, 0);
    floor.receiveShadow = true;
    scene.add(floor);
    const wetMat = new THREE.MeshPhysicalMaterial({
      color: 0x9fb2bd,
      roughness: 0.05,
      metalness: 0,
      transparent: true,
      opacity: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.03,
    });
    [
      [-8, -9, 5.4, 1.1],
      [5.5, -5.5, 4.2, 0.82],
      [-2, 7.2, 6.8, 1.28],
      [11.5, 10.5, 3.6, 0.72],
    ].forEach(([x, z, width, depth], index) => {
      const wetPatch = new THREE.Mesh(new THREE.PlaneGeometry(width, depth), wetMat.clone());
      wetPatch.rotation.x = -Math.PI / 2;
      wetPatch.rotation.z = index * 0.28;
      wetPatch.position.set(x, 0.014 + index * 0.001, z);
      scene.add(wetPatch);
    });
    const groutMat = new THREE.MeshStandardMaterial({ color: 0x2a2927, roughness: 0.7 });
    for (let x = -17; x <= 17; x += 2) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.01, 33), groutMat);
      line.position.set(x, 0.006, 0);
      scene.add(line);
    }
    for (let z = -16; z <= 16; z += 2) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(35, 0.01, 0.025), groutMat);
      line.position.set(0, 0.007, z);
      scene.add(line);
    }
    const colliders: THREE.Box3[] = [];
    const addWall = (mesh: THREE.Mesh) => {
      scene.add(mesh);
      colliders.push(new THREE.Box3().setFromObject(mesh));
    };
    addWall(box(36, 4, 0.3, 0x3e4448, [0, 2, -17]));
    addWall(box(36, 4, 0.3, 0x3e4448, [0, 2, 17]));
    addWall(box(0.3, 4, 34, 0x3e4448, [-18, 2, 0]));
    addWall(box(0.3, 4, 24, 0x3e4448, [18, 2, -5]));

    const glassDoorMat = new THREE.MeshPhysicalMaterial({
      color: 0xb8e7ff,
      roughness: 0.02,
      metalness: 0,
      transmission: 0.65,
      transparent: true,
      opacity: 0.36,
      clearcoat: 1,
      reflectivity: 1,
    });
    const exitDoor = box(3.2, 3.2, 0.15, 0x111820, [18.05, 1.6, 12]);
    exitDoor.visible = false;
    scene.add(exitDoor);
    const autoDoorLeft = new THREE.Mesh(new THREE.BoxGeometry(1.35, 2.75, 0.08), glassDoorMat);
    autoDoorLeft.position.set(18.02, 1.42, 11.25);
    autoDoorLeft.rotation.y = Math.PI / 2;
    autoDoorLeft.castShadow = true;
    const autoDoorRight = autoDoorLeft.clone();
    autoDoorRight.position.z = 12.75;
    scene.add(autoDoorLeft, autoDoorRight);
    const doorFrameTop = box(0.18, 0.18, 3.55, 0x9aa8ad, [18.03, 2.95, 12]);
    const doorFrameBottom = box(0.14, 0.12, 3.55, 0x535f64, [18.03, 0.08, 12]);
    scene.add(doorFrameTop, doorFrameBottom);
    const helpExit = box(3.6, 3.3, 0.3, 0x2f6f47, [0, 1.65, 48]);
    helpExit.visible = false;
    scene.add(helpExit);
    const storeSign = makeStoreSign([5.5, 4.2, 18.35]);
    scene.add(storeSign);

    const phone = box(0.8, 0.35, 0.65, 0x111111, [-14, 1.1, 12]);
    scene.add(phone);

    const counter = box(5, 1.05, 1.4, 0x8d1c24, [-3, 0.52, 12]);
    scene.add(counter);
    colliders.push(new THREE.Box3().setFromObject(counter));
    const registerScreen = box(0.55, 0.38, 0.08, 0x111820, [-4.15, 1.28, 11.55]);
    const scanner = box(0.5, 0.1, 0.34, 0x101010, [-3.15, 1.1, 11.55]);
    const cardTerminal = box(0.22, 0.12, 0.32, 0x1d252b, [-2.25, 1.15, 11.55]);
    scene.add(registerScreen, scanner, cardTerminal);
    const cigaretteRack = new THREE.Group();
    const rackMat = new THREE.MeshStandardMaterial({ color: 0x23272b, metalness: 0.55, roughness: 0.28 });
    const rackBack = new THREE.Mesh(new THREE.BoxGeometry(3.7, 1.25, 0.08), rackMat);
    rackBack.position.set(-3, 2.08, 12.78);
    cigaretteRack.add(rackBack);
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 8; col += 1) {
        const pack = box(0.28, 0.38, 0.05, [0xf3f0e6, 0xb51d2a, 0x1f3f72, 0x2f2f2f][(row + col) % 4], [-4.45 + col * 0.42, 1.67 + row * 0.36, 12.72]);
        cigaretteRack.add(pack);
      }
      const shelfLip = new THREE.Mesh(new THREE.BoxGeometry(3.65, 0.04, 0.08), rackMat);
      shelfLip.position.set(-3, 1.48 + row * 0.36, 12.67);
      cigaretteRack.add(shelfLip);
    }
    scene.add(cigaretteRack);

    const cameraDesk = box(1.5, 1, 1.1, 0x1b1f25, [11.5, 0.5, 12.5]);
    scene.add(cameraDesk);

    const stockRoomFloor = box(8, 0.04, 8, 0x47433d, [-14, 0.02, -2]);
    const stockRoomSign = box(2.2, 0.45, 0.08, 0x1e2428, [-17.82, 2.35, -2]);
    const stockRoomCrates = productNames.map((productName, index) => {
      const column = index % 4;
      const row = Math.floor(index / 4);
      const crate = box(1.06, 0.82, 1.06, row % 2 === 0 ? 0x8a5a2b : 0x76502a, [-15.75 + column * 1.36, 0.41, -5.05 + row * 1.32]);
      const tape = new THREE.Mesh(
        new THREE.BoxGeometry(0.92, 0.035, 1.08),
        new THREE.MeshStandardMaterial({ color: productColorFor(productName), roughness: 0.52, metalness: 0.04 }),
      );
      tape.position.copy(crate.position).add(new THREE.Vector3(0, 0.43, 0));
      tape.userData.kind = 'stockCrateTape';
      scene.add(tape);
      return crate;
    });
    stockRoomCrates.forEach((crate, index) => {
      const productName = productNames[index % productNames.length];
      crate.userData.kind = 'stockCrate';
      crate.userData.product = productName;
      const sample = makeProduct(productName, productColorFor(productName));
      sample.position.copy(crate.position).add(new THREE.Vector3(0, 0.66, -0.08));
      sample.scale.setScalar(0.52);
      sample.userData.crateSample = true;
      scene.add(sample);
    });
    scene.add(stockRoomFloor, stockRoomSign, ...stockRoomCrates);
    stockRoomCrates.forEach((crate) => colliders.push(new THREE.Box3().setFromObject(crate)));

    const securityRoomFloor = box(6.5, 0.04, 5.5, 0x3a3f42, [12, 0.025, 12]);
    const monitorWall = box(5.6, 1.9, 0.16, 0x20282d, [12, 1.9, 16.65]);
    scene.add(securityRoomFloor, monitorWall);
    const securityWalls = [
      box(6.5, 2.7, 0.16, 0x555d61, [12, 1.35, 9.25]),
      box(0.16, 2.7, 5.5, 0x555d61, [8.75, 1.35, 12]),
      box(0.16, 2.7, 2.1, 0x555d61, [15.25, 1.35, 9.95]),
      box(0.16, 2.7, 1.8, 0x555d61, [15.25, 1.35, 14.75]),
    ];
    securityWalls.forEach((wall) => {
      scene.add(wall);
      colliders.push(new THREE.Box3().setFromObject(wall));
    });
    const securityDoorFrame = box(0.18, 2.3, 0.16, 0x81898f, [15.25, 1.15, 12.2]);
    scene.add(securityDoorFrame);
    const monitorNames = ['CHECKOUT', 'FRIDGES', 'PARKING', 'DUMPSTER'];
    monitorNames.forEach((name, index) => {
      const x = 9.9 + (index % 2) * 3.0;
      const y = 2.25 - Math.floor(index / 2) * 0.85;
      const monitor = box(2.55, 0.72, 0.08, 0x082330, [x, y, 16.52]);
      monitor.userData.cameraName = name;
      const scan = box(2.35, 0.035, 0.03, 0xb8f3ff, [x, y + 0.18, 16.46]);
      const glow = new THREE.PointLight(0x89dcff, 0.55, 2.6);
      glow.position.set(x, y, 16.08);
      const indicator = box(0.12, 0.12, 0.04, index === 3 ? 0xe02733 : 0x9cecff, [x - 1.12, y + 0.24, 16.44]);
      scene.add(monitor, scan, indicator, glow);
    });
    const securityCeilingLight = new THREE.PointLight(0xd8f0ff, 1.35, 7);
    securityCeilingLight.position.set(12, 3.15, 12);
    scene.add(securityCeilingLight);

    const stockObjects: THREE.Object3D[] = [];
    const shelfPositions = [-11, -6, -1, 4, 9, 14];
    shelfPositions.forEach((x, shelfIndex) => {
      const shelf = makeMetalShelf([x, 0, -3]);
      scene.add(shelf);
      colliders.push(new THREE.Box3().setFromObject(shelf));
      for (let i = 0; i < 7; i += 1) {
        const requiredProduct = productNames[(i + shelfIndex) % productNames.length];
        const product = makeProduct(requiredProduct, productColorFor(requiredProduct));
        product.position.set(x, 0.42 + (i % 3) * 0.62, -7 + Math.floor(i / 3) * 2.1);
        product.scale.setScalar(0.82);
        product.visible = shelfIndex < 2;
        product.userData.initialVisible = product.visible;
        product.userData.product = requiredProduct;
        product.userData.requiredProduct = requiredProduct;
        const slotMarker = makeShelfSlotMarker(requiredProduct, product.position.clone());
        slotMarker.visible = !product.visible;
        product.userData.slotMarker = slotMarker;
        scene.add(slotMarker);
        scene.add(product);
        stockObjects.push(product);
      }
    });

    const fridges = [makeFridge([-14.8, 0, -12.5]), makeFridge([-12.1, 0, -12.5]), makeFridge([-9.4, 0, -12.5])];
    fridges.forEach((fridge) => {
      scene.add(fridge.mesh);
      colliders.push(new THREE.Box3().setFromObject(fridge.mesh));
    });

    const carts = [
      makeCart([8, 0, 9]),
      makeCart([13, 0, 7]),
      makeCart([-12, 0, 9]),
      makeHandBasket([-4.2, 0, 13.1]),
      makeHandBasket([-3.4, 0, 13.1]),
      makeHandBasket([-2.6, 0, 13.1]),
    ];
    carts.forEach((cart) => {
      scene.add(cart);
    });

    const makeLoreNote = (pos: [number, number, number], lore: string) => {
      const note = box(0.7, 0.04, 0.46, 0xe0d2ad, pos);
      note.rotation.y = Math.random() * 0.3 - 0.15;
      note.userData.lore = lore;
      scene.add(note);
      return note;
    };
    const loreNotes = [
      makeLoreNote([11.3, 1.05, 12.8], 'Р—Р°РїРёСЃСЊ РѕС…СЂР°РЅС‹: РєР°РјРµСЂР° Сѓ РјСѓСЃРѕСЂРєРё РѕС‚РєР»СЋС‡Р°Р»Р°СЃСЊ СЂРѕРІРЅРѕ РІ 05:12 С‚СЂРё РЅРѕС‡Рё РїРѕРґСЂСЏРґ. РџРѕСЃР»Рµ РїРѕРјРµС… РєР»РёРµРЅС‚С‹ Р·Р°Р±С‹РІР°Р»Рё, Р·Р°С‡РµРј РїСЂРёС€Р»Рё.'),
      makeLoreNote([-15.3, 1.05, -4.6], 'РќР°РєР»Р°РґРЅР°СЏ СЃРєР»Р°РґР°: РїРѕСЃС‚Р°РІРєР° СЃ РјР°СЂРєРёСЂРѕРІРєРѕР№ РЁ-6 РїСЂРёС€Р»Р° Р±РµР· РІРѕРґРёС‚РµР»СЏ. Р’РЅСѓС‚СЂРё РєРѕСЂРѕР±РѕРє СЃР»С‹С€Р°Р»Рё РґС‹С…Р°РЅРёРµ.'),
      makeLoreNote([5.7, 0.45, 38.8], 'РЎС‚Р°СЂР°СЏ Р·Р°РїРёСЃРєР°: РЅРµ СЃС‚РѕР№ Сѓ РєРѕРЅС‚РµР№РЅРµСЂРѕРІ РґРѕР»СЊС€Рµ РјРёРЅСѓС‚С‹. РћРЅ СЃРЅР°С‡Р°Р»Р° РєРѕРїРёСЂСѓРµС‚ С€Р°РіРё, РїРѕС‚РѕРј РіРѕР»РѕСЃ.'),
    ];

    const trashObjects: THREE.Object3D[] = [
      makeTrashBag([-12, 0, 5]),
      makeTrashBag([6, 0, 4]),
      makeTrashBag([14, 0, -10]),
    ];
    trashObjects.forEach((trash) => scene.add(trash));

    const monster = makeMonster();
    monster.position.set(5, -1.5, 38);
    scene.add(monster);
    const scareMesh = makeMonster();
    scareMesh.visible = false;
    scareMesh.scale.setScalar(0.9);
    scene.add(scareMesh);

    const traces: THREE.Object3D[] = [];
    for (let i = 0; i < 12; i += 1) {
      const trace = box(0.55, 0.018, 0.18, 0x3b100b, [8 + Math.random() * 8, 0.01, 13 + Math.random() * 4]);
      trace.rotation.y = Math.random() * Math.PI;
      trace.visible = false;
      scene.add(trace);
      traces.push(trace);
    }

    const customers: CustomerAi[] = ['РђСЂСѓР¶Р°РЅ', 'РњР°СЂР°С‚', 'РЎС‚Р°СЂРёРє', 'РљР»РёРµРЅС‚ 05:12', 'РћС…СЂР°РЅРЅРёРє', 'РњР°РјР° СЃ РїР°РєРµС‚РѕРј', 'РќРѕС‡РЅРѕР№ РїРѕРєСѓРїР°С‚РµР»СЊ', 'РљР»РёРµРЅС‚ Р±РµР· Р»РёС†Р°'].map((_name, index) => {
      const customerMesh = makeCustomer([0x2d79c7, 0x9234a8, 0x59733c, 0x111111, 0x6b1f28, 0xd8a928, 0x335a72, 0x0c0c0d][index], index);
      customerMesh.position.set(15.5 + (index % 2) * 1.2, 0, 10.6 - Math.floor(index / 2) * 1.25);
      customerMesh.visible = false;
      customerMesh.userData.initialPosition = customerMesh.position.clone();
      scene.add(customerMesh);
      return {
        mesh: customerMesh,
        stage: 'waiting',
        target: new THREE.Vector3(-10 + index * 4, 0, -5 + (index % 2) * 8),
        item: productNames[index % productNames.length],
        weird: index >= 3 && index % 2 === 1,
        mood: 'calm',
        patience: 12 + index * 2,
        leaveTime: 0,
        checkoutTime: 0,
        angry: false,
        spawnAt: index < 4 ? 0.35 + index * 1.35 : 8 + (index - 4) * 4,
      };
    });

    const bandits: BanditAi[] = [
      { mesh: makeBandit(), active: false, health: 3, target: new THREE.Vector3(12, 0, -10) },
      { mesh: makeBandit(), active: false, health: 3, target: new THREE.Vector3(-13, 0, 4) },
    ];
    bandits.forEach((bandit, index) => {
      bandit.mesh.position.set(index === 0 ? 14 : -15, 0, -13);
      bandit.mesh.visible = false;
      scene.add(bandit.mesh);
    });

    const secondPlayer = makeHuman(0xa51520, 0xe0b08a, true);
    secondPlayer.position.set(1.6, 0, 13.2);
    secondPlayer.visible = false;
    secondPlayer.userData.active = false;
    scene.add(secondPlayer);

    const outsideColliders: THREE.Box3[] = [];
    const outsideFloor = box(42, 0.12, 70, 0x171a1d, [0, -0.06, 42]);
    outsideFloor.visible = true;
    scene.add(outsideFloor);
    const dumpster = box(4.5, 2.2, 2.6, 0x214c3a, [5, 1.1, 38]);
    dumpster.visible = true;
    scene.add(dumpster);
    outsideColliders.push(new THREE.Box3().setFromObject(dumpster));
    const dumpsterLid = box(4.7, 0.18, 2.8, 0x17382b, [5, 2.28, 38]);
    dumpsterLid.rotation.x = -0.18;
    scene.add(dumpsterLid);
    outsideColliders.push(new THREE.Box3().setFromObject(dumpsterLid));
    const outsideTrash = [
      makeTrashBag([2.2, 0, 39.4]),
      makeTrashBag([7.6, 0, 36.9]),
      makeTrashBag([5.9, 0, 41.1]),
      makeTrashBag([-7.2, 0, 44.5]),
      makeTrashBag([13.8, 0, 47.5]),
    ];
    outsideTrash.forEach((bag) => {
      bag.visible = true;
      scene.add(bag);
    });
    const parkingLines: THREE.Object3D[] = [];
    for (let x = -15; x <= 15; x += 5) {
      const line = box(0.08, 0.018, 9, 0xd8d5c8, [x, 0.02, 30]);
      line.visible = true;
      scene.add(line);
      parkingLines.push(line);
    }
    [makeParkedCar([-12, 0, 33], 0x23262c), makeParkedCar([-4, 0, 31], 0x611b22), makeParkedCar([12, 0, 35], 0x1d3347), makeParkedCar([15, 0, 50], 0x0d0f12)].forEach((car) => {
      car.visible = true;
      scene.add(car);
      parkingLines.push(car);
    });
    const outsideDetails: THREE.Object3D[] = [
      makePuddle([-8.5, 0.015, 38], [2.6, 1, 1.15]),
      makePuddle([3.5, 0.015, 48], [1.9, 1, 0.8]),
      makePuddle([12.5, 0.015, 28], [1.4, 1, 0.65]),
      makeFenceSection([-18.5, 0, 42], 18),
      makeFenceSection([18.5, 0, 42], 18),
      makeFenceSection([0, 0, 58.5], 30),
      makeExitSign([0, 2.8, 47.82]),
      box(1.4, 0.9, 1.2, 0x6e4728, [-14, 0.45, 45]),
      box(1.2, 0.8, 1.2, 0x5b3a20, [-12.5, 0.4, 46.2]),
      box(0.9, 0.7, 0.9, 0x4b301c, [9.5, 0.35, 45.5]),
    ];
    outsideDetails.forEach((object) => {
      object.visible = true;
      scene.add(object);
      parkingLines.push(object);
    });
    outsideDetails.slice(3, 6).forEach((fence) => outsideColliders.push(new THREE.Box3().setFromObject(fence)));
    const rain = makeRainField();
    rain.visible = true;
    scene.add(rain);
    const outsideShadow = makeShadowFigure();
    outsideShadow.position.set(-15.5, 0, 46);
    scene.add(outsideShadow);
    const lamp1 = new THREE.PointLight(0xffd37b, 0, 22);
    lamp1.position.set(-8, 6, 30);
    const lamp2 = new THREE.PointLight(0xffd37b, 0, 22);
    lamp2.position.set(10, 6, 52);
    const lamp3 = new THREE.PointLight(0xb8d8ff, 0.22, 18);
    lamp3.position.set(15, 4.2, 49);
    lamp1.intensity = 0.35;
    lamp2.intensity = 0.28;
    scene.add(lamp1, lamp2, lamp3);
    const outsideObjects: THREE.Object3D[] = [outsideFloor, dumpster, dumpsterLid, storeSign, rain, ...outsideTrash, ...parkingLines];
    const outsideLights = [lamp1, lamp2, lamp3];

    const keys: Record<string, boolean> = {};
    const controlKeys = new Set(['w', 'a', 's', 'd', 'i', 'j', 'k', 'l', 'shift', 'e', 'q', 'escape']);
    const onKeyDown = (event: KeyboardEvent) => {
      const key = getInputKey(event);
      if (controlKeys.has(key)) event.preventDefault();
      keys[key] = true;
      if (key === 'q') {
        flashlight.visible = !flashlight.visible;
        patchHud({ message: flashlight.visible ? 'Р¤РѕРЅР°СЂРёРє РІРєР»СЋС‡РµРЅ. РЎР»РµРґС‹ РІРѕР·Р»Рµ РјСѓСЃРѕСЂРєРё СЃС‚Р°Р»Рё РІРёРґРЅС‹.' : 'Р¤РѕРЅР°СЂРёРє РІС‹РєР»СЋС‡РµРЅ.' });
      }
      if (key === 'e') interact();
      if (key === 'escape' && hudRef.current.phase !== 'menu') {
        setPaused((value) => !value);
        controls.unlock();
      }
    };
    const onKeyUp = (event: KeyboardEvent) => {
      const key = getInputKey(event);
      if (controlKeys.has(key)) event.preventDefault();
      keys[key] = false;
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    renderer.domElement.tabIndex = 0;
    renderer.domElement.addEventListener('click', () => {
      renderer.domElement.focus();
      controls.lock();
    });
    const rotateCameraByDrag = (dx: number, dy: number) => {
      if (controls.isLocked || pausedRef.current || hudRef.current.phase === 'menu') return;
      const sensitivity = 0.0014 + settingsRef.current.sensitivity * 0.000035;
      camera.rotation.order = 'YXZ';
      camera.rotation.y -= dx * sensitivity;
      camera.rotation.x = clamp(camera.rotation.x - dy * sensitivity, -1.35, 1.35);
    };
    const onCanvasPointerDown = (event: PointerEvent) => {
      if (event.button !== 0 || hudRef.current.phase === 'menu') return;
      canvasLookRef.current = { active: true, lastX: event.clientX, lastY: event.clientY };
      renderer.domElement.setPointerCapture(event.pointerId);
    };
    const onCanvasPointerMove = (event: PointerEvent) => {
      if (!canvasLookRef.current.active) return;
      const dx = event.clientX - canvasLookRef.current.lastX;
      const dy = event.clientY - canvasLookRef.current.lastY;
      canvasLookRef.current.lastX = event.clientX;
      canvasLookRef.current.lastY = event.clientY;
      rotateCameraByDrag(dx, dy);
    };
    const onCanvasPointerUp = (event: PointerEvent) => {
      canvasLookRef.current.active = false;
      if (renderer.domElement.hasPointerCapture(event.pointerId)) renderer.domElement.releasePointerCapture(event.pointerId);
    };
    renderer.domElement.addEventListener('pointerdown', onCanvasPointerDown);
    renderer.domElement.addEventListener('pointermove', onCanvasPointerMove);
    renderer.domElement.addEventListener('pointerup', onCanvasPointerUp);
    renderer.domElement.addEventListener('pointercancel', onCanvasPointerUp);

    const clock = new THREE.Clock();
    engine.current = {
      renderer,
      scene,
      camera,
      controls,
      clock,
      keys,
      customers,
      monster: { mesh: monster, active: false, emerging: 0, mood: 'hidden' },
      scareMesh,
      flashlight,
      traces,
      colliders,
      outsideColliders,
      trashObjects,
      stockObjects,
      stockCrates: stockRoomCrates,
      carts,
      fridges,
      cashierView,
      secondPlayer,
      loreNotes,
      bandits,
      phone,
      cameraDesk,
      exitDoor,
      autoDoorLeft,
      autoDoorRight,
      helpExit,
      dumpster,
      outsideObjects,
      outsideLights,
      rain,
      outsideShadow,
      storeLight,
      hemi,
      lastStepAt: 0,
      lastDropAt: 0,
      lastWhisperAt: 0,
      lastBreathAt: 0,
      lastNightEventAt: 0,
    };

    const animate = () => {
      requestAnimationFrame(animate);
      const state = engine.current!;
      if (!state) return;
      const delta = Math.min(0.04, state.clock.getDelta());
      const current = hudRef.current;
      const isPaused = pausedRef.current;

      const move = new THREE.Vector3();
      if (state.keys.w) move.z -= 1;
      if (state.keys.s) move.z += 1;
      if (state.keys.a) move.x -= 1;
      if (state.keys.d) move.x += 1;
      move.x += mobileMoveRef.current.x;
      move.z += mobileMoveRef.current.y;
      const isMoving = move.lengthSq() > 0 && current.phase !== 'menu' && !isPaused;
      if (move.lengthSq() > 0 && current.phase !== 'menu' && !isPaused) {
        move.normalize();
        const speed = state.keys.shift ? 8.8 : 4.6;
        const old = state.camera.position.clone();
        const forwardDir = new THREE.Vector3();
        state.camera.getWorldDirection(forwardDir);
        forwardDir.y = 0;
        forwardDir.normalize();
        const rightDir = new THREE.Vector3().crossVectors(forwardDir, state.camera.up).normalize();
        state.camera.position.addScaledVector(forwardDir, -move.z * speed * delta);
        state.camera.position.addScaledVector(rightDir, move.x * speed * delta);
        state.camera.position.y = 1.7;
        if (current.phase !== 'outside') {
          state.camera.position.x = clamp(state.camera.position.x, -16.8, 17.2);
          state.camera.position.z = clamp(state.camera.position.z, -15.8, 16.4);
        } else {
          state.camera.position.x = clamp(state.camera.position.x, -19, 19);
          state.camera.position.z = clamp(state.camera.position.z, 17, 58);
        }
        const playerBox = new THREE.Box3().setFromCenterAndSize(state.camera.position, new THREE.Vector3(0.65, 1.7, 0.65));
        const activeColliders = current.phase === 'outside' ? state.outsideColliders : state.colliders;
        if (activeColliders.some((collider) => collider.intersectsBox(playerBox))) state.camera.position.copy(old);
      }

      const onlineRemote = Boolean(state.secondPlayer.userData.onlineRemote);
      if (multiplayerRef.current.channel && current.phase !== 'menu' && !isPaused) {
        const now = state.clock.elapsedTime;
        if (now - multiplayerRef.current.lastSend > 0.08) {
          multiplayerRef.current.lastSend = now;
          multiplayerRef.current.channel.postMessage({
            id: multiplayerRef.current.id,
            type: 'player',
            x: state.camera.position.x,
            z: state.camera.position.z,
            ry: state.camera.rotation.y,
          });
        }
        if (state.secondPlayer.visible && multiplayerRef.current.remoteSeen > 0 && now - multiplayerRef.current.remoteSeen > 3.2) {
          state.secondPlayer.visible = false;
        }
      }

      if (state.secondPlayer.userData.active && !onlineRemote && current.phase !== 'menu' && current.phase !== 'outside' && !isPaused) {
        const partnerMove = new THREE.Vector3(
          (state.keys.l ? 1 : 0) - (state.keys.j ? 1 : 0),
          0,
          (state.keys.k ? 1 : 0) - (state.keys.i ? 1 : 0),
        );
        if (partnerMove.lengthSq() > 0) {
          partnerMove.normalize();
          const oldPartnerPos = state.secondPlayer.position.clone();
          state.secondPlayer.position.add(partnerMove.multiplyScalar(delta * 4.2));
          state.secondPlayer.position.x = clamp(state.secondPlayer.position.x, -16.2, 16.5);
          state.secondPlayer.position.z = clamp(state.secondPlayer.position.z, -15.2, 15.8);
          state.secondPlayer.lookAt(
            state.secondPlayer.position.x + partnerMove.x,
            state.secondPlayer.position.y,
            state.secondPlayer.position.z + partnerMove.z,
          );
          const partnerBox = new THREE.Box3().setFromCenterAndSize(
            new THREE.Vector3(state.secondPlayer.position.x, 0.9, state.secondPlayer.position.z),
            new THREE.Vector3(0.58, 1.8, 0.58),
          );
          if (state.colliders.some((collider) => collider.intersectsBox(partnerBox))) state.secondPlayer.position.copy(oldPartnerPos);
        }
      }

      if (isMoving && state.audio) {
        const now = state.clock.elapsedTime;
        const interval = state.keys.shift ? 0.27 : 0.43;
        if (now - state.lastStepAt > interval) {
          state.lastStepAt = now;
          playFootstep();
        }
      }

      if (isPaused) {
        renderer.render(scene, camera);
        return;
      }

      state.flashlight.position.copy(state.camera.position);
      const forward = new THREE.Vector3();
      state.camera.getWorldDirection(forward);
      state.flashlight.target.position.copy(state.camera.position).add(forward.multiplyScalar(10));
      if (state.flashlight.visible && current.phase !== 'menu') {
        patchHud({ battery: clamp(current.battery - delta * 1.7, 0, 100) });
        if (current.battery <= 1) state.flashlight.visible = false;
      }

      const viewForward = new THREE.Vector3();
      state.camera.getWorldDirection(viewForward);
      state.carts.forEach((cart) => {
        if (!cart.userData.follow) return;
        const distance = cart.userData.kind === 'basket' ? 0.9 : 2.15;
        const target = state.camera.position.clone().add(viewForward.clone().multiplyScalar(distance));
        target.y = cart.userData.kind === 'basket' ? 0.65 : 0;
        cart.position.lerp(target, Math.min(1, delta * 9));
        cart.lookAt(state.camera.position.x, cart.position.y, state.camera.position.z);
      });

      state.fridges.forEach((fridge) => {
        const localPlayer = fridge.mesh.worldToLocal(state.camera.position.clone());
        const shouldOpen = fridge.manualOpen || (Math.abs(localPlayer.x) < 1.6 && Math.abs(localPlayer.z) < 2.1);
        const targetZ = shouldOpen ? fridge.door.userData.openZ : fridge.door.userData.closedZ;
        fridge.door.position.z += (targetZ - fridge.door.position.z) * Math.min(1, delta * 6);
        fridge.mesh.traverse((child) => {
          if (child instanceof THREE.PointLight) child.intensity += ((shouldOpen ? 2.1 : 1.05) - child.intensity) * Math.min(1, delta * 5);
        });
      });

      const doorShouldOpen =
        state.camera.position.distanceTo(state.exitDoor.position) < 4 ||
        state.customers.some((customer) => customer.stage === 'leave' && customer.mesh.position.distanceTo(state.exitDoor.position) < 5) ||
        current.phase === 'outside';
      const leftTarget = doorShouldOpen ? 10.35 : 11.25;
      const rightTarget = doorShouldOpen ? 13.65 : 12.75;
      state.autoDoorLeft.position.z += (leftTarget - state.autoDoorLeft.position.z) * Math.min(1, delta * 7);
      state.autoDoorRight.position.z += (rightTarget - state.autoDoorRight.position.z) * Math.min(1, delta * 7);

      const completedTasks = Object.values(current.tasks).filter(Boolean).length;
      const nightPressure = clamp(
        completedTasks * 0.1 + current.served * 0.025 + current.stocked * 0.012 + current.fear * 0.006,
        0,
        1,
      );
      if (current.phase === 'shift' || current.phase === 'armed') {
        const pulse = Math.sin(state.clock.elapsedTime * (1.2 + nightPressure * 2.4)) * 0.22 * nightPressure;
        state.storeLight.intensity += ((4.2 - nightPressure * 1.35 + pulse) - state.storeLight.intensity) * Math.min(1, delta * 2.4);
        state.hemi.intensity += ((0.95 - nightPressure * 0.35) - state.hemi.intensity) * Math.min(1, delta * 1.2);
        state.scene.fog = new THREE.FogExp2(0x050607, 0.026 + nightPressure * 0.012);
        if (state.audio && nightPressure > 0.18 && state.clock.elapsedTime - state.lastWhisperAt > 13 - nightPressure * 6) {
          state.lastWhisperAt = state.clock.elapsedTime;
          playWhisperSound();
          if (!current.screamer && Math.random() < 0.55) {
            patchHud({
              fear: clamp(current.fear + 3 + nightPressure * 5, 0, 100),
              message: nightPressure > 0.55
                ? 'РР· РґР°Р»СЊРЅРµР№ Р»РёРЅРёРё РїРѕР»РѕРє РґРѕРЅРµСЃСЃСЏ С€РµРїРѕС‚: РѕРЅ РЅР°Р·РІР°Р» С‚РІРѕРµ РёРјСЏ Рё РЅРѕРјРµСЂ РєР°СЃСЃС‹.'
                : 'РњРµР¶РґСѓ СЃС‚РµР»Р»Р°Р¶Р°РјРё РїСЂРѕС€РµР» С‚РёС…РёР№ С€РѕСЂРѕС…, С…РѕС‚СЏ РєР»РёРµРЅС‚РѕРІ СЂСЏРґРѕРј РЅРµС‚.',
            });
          }
        }
        if (state.audio && nightPressure > 0.42 && state.clock.elapsedTime - state.lastBreathAt > 9) {
          state.lastBreathAt = state.clock.elapsedTime;
          playHeartbeatSound();
        }
      }

      const atExitThreshold =
        current.phase !== 'menu' &&
        current.phase !== 'outside' &&
        current.phase !== 'dead' &&
        current.phase !== 'escaped' &&
        state.camera.position.x > 16.45 &&
        state.camera.position.z > 10 &&
        state.camera.position.z < 14.2;
      if (atExitThreshold) {
        const finalReady = current.phase === 'armed' || Object.values(current.tasks).filter(Boolean).length >= 6;
        completeTask('outside');
        if (finalReady) {
          state.customers.forEach((customer) => { customer.mesh.visible = false; });
          state.trashObjects.forEach((item) => { item.visible = false; });
          state.stockObjects.forEach((item) => { item.visible = false; });
        }
        state.helpExit.visible = true;
        state.outsideObjects.forEach((object) => { object.visible = true; });
        state.outsideLights.forEach((light) => { light.intensity = finalReady ? 1.55 : 0.86; });
        state.scene.fog = new THREE.FogExp2(0x090b10, 0.052);
        state.camera.position.set(0, 1.7, 24);
        state.monster.mesh.visible = false;
        state.monster.active = false;
        state.monster.mood = 'hidden';
        state.monster.mesh.position.set(5, -1.5, 38);
        state.monster.emerging = 0;
        state.traces.forEach((trace) => { trace.visible = true; });
        patchHud({
          phase: 'outside',
          outsideFinal: finalReady,
          message: finalReady
            ? 'РўС‹ РІС‹С€РµР» РЅР° РїР°СЂРєРѕРІРєСѓ СЃ РјСѓСЃРѕСЂРѕРј. РљРѕРЅС‚РµР№РЅРµСЂ СЃРґРІРёРЅСѓР»СЃСЏ СЃР°Рј.'
            : 'РђРІС‚РѕРјР°С‚РёС‡РµСЃРєРёРµ РґРІРµСЂРё СЂР°СЃРєСЂС‹Р»РёСЃСЊ. РўС‹ РІС‹С€РµР» РЅР° РїСѓСЃС‚СѓСЋ РїР°СЂРєРѕРІРєСѓ, С…РѕС‚СЏ СЃРјРµРЅР° РµС‰Рµ РЅРµ Р·Р°РєРѕРЅС‡РµРЅР°.',
        });
      }

      state.customers.forEach((customer) => {
        if (customer.stage === 'gone') return;
        if (customer.stage === 'waiting') {
          customer.leaveTime += delta;
          if (customer.leaveTime < customer.spawnAt) return;
          customer.stage = 'browse';
          customer.mood = customer.weird ? 'afraid' : 'searching';
          customer.mesh.visible = true;
          customer.mesh.position.copy(customer.mesh.userData.initialPosition as THREE.Vector3);
          customer.target.copy(customer.spawnAt < 6 ? new THREE.Vector3(-3 + Math.random() * 2, 0, 10.2 + Math.random()) : customerWaypoints[Math.floor(Math.random() * customerWaypoints.length)]);
          if (customer.spawnAt < 6) giveCustomerProduct(customer);
          customer.leaveTime = 0;
          return;
        }
        if (customer.stage === 'leave') {
          customer.leaveTime += delta;
          if (customer.leaveTime > 12) {
            customer.stage = 'gone';
            customer.mesh.visible = false;
            return;
          }
        }
        if (customer.stage === 'checkout') {
          customer.checkoutTime += delta;
          if (customer.checkoutTime > customer.patience * 0.55 && customer.mood !== 'angry') {
            customer.mood = 'impatient';
          }
          if (!customer.angry && customer.checkoutTime > customer.patience) {
            customer.angry = true;
            customer.mood = 'angry';
            customer.stage = 'leave';
            customer.leaveTime = 0;
            customer.target.set(19.5, 0, 12);
            const served = Math.min(current.served + 1, state.customers.length);
            patchHud({
              served,
              fear: clamp(current.fear + 10, 0, 100),
              message: `РљР»РёРµРЅС‚ СЂР°Р·РѕР·Р»РёР»СЃСЏ РёР·-Р·Р° РѕР¶РёРґР°РЅРёСЏ, РёР·РґР°Р» С…СЂРёРїР»С‹Р№ Р·РІСѓРє Рё СѓС€РµР» Р±РµР· РїРѕРєСѓРїРєРё: ${customer.item}.`,
            });
            angrySound();
            if (served >= state.customers.length) completeTask('cashier');
            return;
          }
        }
        if (
          customer.weird &&
          customer.mesh.visible &&
          (customer.stage === 'browse' || customer.stage === 'checkout') &&
          customer.mesh.position.distanceTo(state.camera.position) < 8
        ) {
          const stareUntil = Number(customer.mesh.userData.stareUntil ?? 0);
          const nextStareAt = Number(customer.mesh.userData.nextStareAt ?? 0);
          if (state.clock.elapsedTime < stareUntil) {
            customer.mesh.lookAt(state.camera.position.x, 1.55, state.camera.position.z);
            customer.mood = 'afraid';
            return;
          }
          if (state.clock.elapsedTime > nextStareAt && Math.random() < delta * (0.16 + nightPressure * 0.28)) {
            customer.mesh.userData.stareUntil = state.clock.elapsedTime + 1.2 + nightPressure * 1.4;
            customer.mesh.userData.nextStareAt = state.clock.elapsedTime + 8 + Math.random() * 8;
            playWhisperSound();
            patchHud({
              fear: clamp(current.fear + 4 + nightPressure * 8, 0, 100),
              message: 'РЎС‚СЂР°РЅРЅС‹Р№ РєР»РёРµРЅС‚ РїРµСЂРµСЃС‚Р°Р» РёРґС‚Рё Рё РїРѕРІРµСЂРЅСѓР» РіРѕР»РѕРІСѓ Р·Р° С‚РѕР±РѕР№. РўРµР»Рѕ РѕСЃС‚Р°Р»РѕСЃСЊ СЃРјРѕС‚СЂРµС‚СЊ РІ РґСЂСѓРіСѓСЋ СЃС‚РѕСЂРѕРЅСѓ.',
            });
            return;
          }
        }
        const pos = customer.mesh.position;
        const direction = customer.target.clone().sub(pos);
        if (direction.length() > 0.15) {
          const oldCustomerPos = pos.clone();
          direction.normalize();
          pos.add(direction.multiplyScalar(delta * (customer.stage === 'leave' ? 4.4 : 1.3)));
          customer.mesh.lookAt(customer.target.x, pos.y, customer.target.z);
          const customerBox = new THREE.Box3().setFromCenterAndSize(
            new THREE.Vector3(pos.x, 0.9, pos.z),
            new THREE.Vector3(0.58, 1.8, 0.58),
          );
          if (customer.stage !== 'leave' && state.colliders.some((collider) => collider.intersectsBox(customerBox))) {
            pos.copy(oldCustomerPos);
            customer.target.copy(customerWaypoints[Math.floor(Math.random() * customerWaypoints.length)]);
          }
        } else if (customer.stage === 'leave') {
          customer.stage = 'gone';
          customer.mesh.visible = false;
        } else if (customer.stage === 'browse') {
          customer.stage = 'checkout';
          customer.mood = customer.weird ? 'afraid' : 'calm';
          customer.checkoutTime = 0;
          customer.angry = false;
          giveCustomerProduct(customer);
          customer.target.set(-3 + Math.random() * 2, 0, 10.2 + Math.random());
          if (customer.weird) {
            patchHud({ message: 'РљР»РёРµРЅС‚ СЃР»РёС€РєРѕРј РґРѕР»РіРѕ СЃРјРѕС‚СЂРёС‚ РІ РєР°РјРµСЂСѓ. РќР° Р»РёС†Рµ РЅРµС‚ РјРѕСЂРіР°РЅРёСЏ.' });
            scare(customer.item === 'РїСѓСЃС‚РѕР№ С‡РµРє' ? 'screamer-mask' : 'screamer-grin');
          }
        }
      });

      const allServed = state.customers.every((customer) => customer.stage === 'gone');
      if (
        allServed &&
        current.tasks.cashier &&
        current.tasks.stock &&
        current.tasks.trash &&
        current.tasks.cameras &&
        current.tasks.bandits &&
        current.phase === 'shift'
      ) {
        patchHud({ phase: 'armed', message: 'РЎРјРµРЅР° РїРѕС‡С‚Рё Р·Р°РєСЂС‹С‚Р°. РўРµРїРµСЂСЊ РІС‹РЅРµСЃРё РјСѓСЃРѕСЂ РЅР° СѓР»РёС†Сѓ, РµСЃР»Рё СЂРµС€РёС€СЊСЃСЏ.' });
      }

      if (current.tasks.cameras && current.served >= 3) {
        state.bandits.forEach((bandit) => {
          if (!bandit.active && bandit.health > 0) {
            bandit.active = true;
            bandit.mesh.visible = true;
            if (!bandit.mesh.userData.announced) {
              bandit.mesh.userData.announced = true;
              patchHud({ message: 'РЈ РґР°Р»СЊРЅРёС… РїРѕР»РѕРє РїРѕСЏРІРёР»РёСЃСЊ Р±Р°РЅРґРёС‚С‹. РџРѕРґРѕР№РґРё Р±Р»РёР·РєРѕ Рё РЅР°Р¶РёРјР°Р№ E, С‡С‚РѕР±С‹ РѕС‚Р±РёС‚СЊСЃСЏ.' });
            }
          }
        });
      }

      let livingBandits = 0;
      state.bandits.forEach((bandit) => {
        if (!bandit.active || bandit.health <= 0) return;
        livingBandits += 1;
        const partnerActive = Boolean(state.secondPlayer.userData.active) && state.secondPlayer.visible;
        const targetPosition =
          partnerActive && state.secondPlayer.position.distanceTo(bandit.mesh.position) < state.camera.position.distanceTo(bandit.mesh.position)
            ? state.secondPlayer.position
            : state.camera.position;
        const toPlayer = targetPosition.clone().sub(bandit.mesh.position);
        toPlayer.y = 0;
        if (toPlayer.length() > 1.35) {
          bandit.mesh.position.add(toPlayer.normalize().multiplyScalar(delta * 2.15));
          bandit.mesh.lookAt(targetPosition.x, 1.4, targetPosition.z);
        } else if (Math.random() < delta * 1.2) {
          patchHud({
            health: clamp(current.health - 8, 0, 100),
            message: 'Р‘Р°РЅРґРёС‚ СѓРґР°СЂРёР» С‚РµР±СЏ Сѓ РїСЂРѕС…РѕРґР°. РќСѓР¶РЅРѕ РѕС‚Р±РёРІР°С‚СЊСЃСЏ СЂСЏРґРѕРј РєР»Р°РІРёС€РµР№ E.',
          });
        }
      });
      if (current.tasks.cameras && current.served >= 3 && livingBandits === 0 && !current.tasks.bandits) completeTask('bandits');

      if (current.phase === 'outside') {
        if (state.camera.position.y < 0.8 || Math.abs(state.camera.position.x) > 28 || state.camera.position.z > 64) {
          state.camera.position.set(0, 1.7, 24);
          patchHud({ message: 'РўС‹ СЃРїРѕС‚РєРЅСѓР»СЃСЏ Сѓ РїР°СЂРєРѕРІРєРё Рё РІРµСЂРЅСѓР»СЃСЏ Рє РґРІРµСЂСЏРј РјР°РіР°Р·РёРЅР°.' });
        }
        state.rain.children.forEach((drop) => {
          drop.position.y -= Number(drop.userData.speed ?? 4) * delta;
          drop.position.x -= delta * 0.45;
          if (drop.position.y < 0.25) {
            drop.position.y = 6.2;
            drop.position.x = -19 + Math.random() * 38;
            drop.position.z = 22 + Math.random() * 36;
          }
        });
        if (state.outsideShadow.visible) {
          state.outsideShadow.lookAt(state.camera.position.x, 1.7, state.camera.position.z);
          if (state.clock.elapsedTime > Number(state.outsideShadow.userData.hideAt ?? 0) || state.outsideShadow.position.distanceTo(state.camera.position) < 5) {
            state.outsideShadow.visible = false;
          }
        } else if (Math.random() < delta * 0.018 && !current.screamer) {
          const spots = [
            new THREE.Vector3(-16.2, 0, 45.5),
            new THREE.Vector3(16.2, 0, 44.5),
            new THREE.Vector3(8.5, 0, 55),
            new THREE.Vector3(-9.5, 0, 55),
          ];
          state.outsideShadow.position.copy(spots[Math.floor(Math.random() * spots.length)]);
          state.outsideShadow.userData.hideAt = state.clock.elapsedTime + 2.3;
          state.outsideShadow.visible = true;
          patchHud({
            fear: clamp(current.fear + 7, 0, 100),
            message: 'РЈ Р·Р°Р±РѕСЂР° РЅР° СЃРµРєСѓРЅРґСѓ РїРѕСЏРІРёР»СЃСЏ СЃРёР»СѓСЌС‚. РћРЅ СЃС‚РѕСЏР» РЅРµРїРѕРґРІРёР¶РЅРѕ, РїРѕРєР° С‚С‹ РЅРµ РјРѕСЂРіРЅСѓР».',
          });
        }
        if (Math.random() < delta * 0.08) {
          state.outsideLights.forEach((light, index) => {
            light.intensity = Math.max(0.08, light.intensity + (Math.random() - 0.5) * (index === 2 ? 0.5 : 0.32));
          });
        }
        if (Math.random() < delta * 0.025 && !current.screamer) {
          playImpactSound();
          patchHud({
            fear: clamp(current.fear + 5, 0, 100),
            message: 'РЎРЅР°СЂСѓР¶Рё РїРѕ РјРµС‚Р°Р»Р»Сѓ СѓРґР°СЂРёР»Рё С‚Р°Рє РіСЂРѕРјРєРѕ, С‡С‚Рѕ Р·Р°РґСЂРѕР¶Р°Р»Р° РІС‹РІРµСЃРєР° 6РЁР•РЎРўРЃР РђР§РљРђ.',
          });
        }
        if (state.camera.position.z < 18.5) {
          state.camera.position.set(16.25, 1.7, 12);
          state.scene.fog = new THREE.FogExp2(0x050607, 0.026);
          state.monster.mesh.visible = false;
          state.monster.active = false;
          state.monster.emerging = 0;
          state.outsideShadow.visible = false;
          patchHud({
            phase: current.outsideFinal ? 'escaped' : 'shift',
            outsideFinal: false,
            message: current.outsideFinal
              ? 'You slammed back into the store. The glass doors closed before the monster reached you.'
              : 'You returned to the store through the automatic doors.',
          });
        } else {
          const closeToDumpster = state.camera.position.distanceTo(state.dumpster.position) < 6.2;
          if (!current.outsideFinal && closeToDumpster) {
            state.monster.mesh.visible = true;
            state.monster.active = true;
            state.monster.mood = 'stalking';
            state.monster.mesh.position.set(5, -1.5, 38);
            state.monster.emerging = 0;
            patchHud({
              outsideFinal: true,
              fear: clamp(current.fear + 18, 0, 100),
              message: 'The dumpster lid moves by itself. Run back to the store.',
            });
            scare('screamer-trash3d');
          }
          if (current.outsideFinal) {
            state.monster.mesh.visible = true;
            state.monster.active = true;
            state.monster.mood = state.monster.emerging >= 0.7 ? 'hunting' : 'stalking';
            state.monster.emerging = clamp(state.monster.emerging + delta * 0.42, 0, 1);
            state.monster.mesh.position.y = -1.5 + state.monster.emerging * 1.75;
            state.monster.mesh.lookAt(state.camera.position.x, 1.7, state.camera.position.z);
            const toPlayer = state.camera.position.clone().sub(state.monster.mesh.position);
            toPlayer.y = 0;
            if (state.monster.emerging >= 0.7 && toPlayer.length() > 1.8) {
              const chaseSpeed = state.camera.position.distanceTo(state.dumpster.position) < 9 ? 4.15 : 3.35;
              state.monster.mesh.position.add(toPlayer.normalize().multiplyScalar(delta * chaseSpeed));
            }
            if (state.monster.mesh.position.distanceTo(state.camera.position) < 2.5) {
              patchHud({ phase: 'dead', message: 'The monster caught you near the dumpsters.' });
              scare('screamer-trash3d');
            }
            if (state.camera.position.distanceTo(state.helpExit.position) < 4) {
              patchHud({ phase: 'escaped', message: 'РўС‹ РґРѕР±СЂР°Р»СЃСЏ РґРѕ РІС‹С…РѕРґР° СЃ РїР°СЂРєРѕРІРєРё Рё РІС‹Р·РІР°Р» РїРѕРјРѕС‰СЊ.' });
            }
          } else {
            state.monster.mesh.visible = false;
            state.monster.active = false;
            state.monster.mood = 'hidden';
          }
        }
      }

      if (current.phase === 'shift' && current.tasks.cameras && state.monster.emerging < 0.26) {
        state.monster.mesh.visible = true;
        state.monster.mood = 'watching';
        state.monster.mesh.position.set(13.5, -0.9, -14.5);
        state.monster.mesh.rotation.y += delta * 0.25;
        state.monster.emerging += delta * 0.018;
        state.monster.mesh.scale.setScalar(0.38 + state.monster.emerging);
      }

      if (current.health <= 0 && current.phase !== 'dead') {
        patchHud({ phase: 'dead', message: 'РўС‹ РїРѕС‚РµСЂСЏР» СЃРѕР·РЅР°РЅРёРµ РјРµР¶РґСѓ РїРѕР»РєР°РјРё.' });
        scare('screamer-grin');
      }

      if (Math.random() < delta * (0.025 + nightPressure * 0.065) && current.phase === 'shift') {
        state.storeLight.intensity = state.storeLight.intensity > 1 ? 0.85 : 2.4;
        patchHud({ message: nightPressure > 0.55 ? 'РЎРІРµС‚ РїСЂРѕРІР°Р»РёР»СЃСЏ РїРѕС‡С‚Рё РґРѕ С‚РµРјРЅРѕС‚С‹. Р—Р° СЃРїРёРЅРѕР№ РєС‚Рѕ-С‚Рѕ СЃРґРµР»Р°Р» РґРІР° Р±С‹СЃС‚СЂС‹С… С€Р°РіР°.' : 'РЎРІРµС‚ РјРѕСЂРіРЅСѓР». Р—Р° СЃРїРёРЅРѕР№ РїСЂРѕР·РІСѓС‡Р°Р»Рё С€Р°РіРё.' });
      }

      if (
        Math.random() < delta * (0.014 + nightPressure * 0.045) &&
        current.phase === 'shift' &&
        current.served >= 1 &&
        state.clock.elapsedTime - state.lastDropAt > 10
      ) {
        const candidate = state.stockObjects.find((item) => item.visible && item.position.distanceTo(state.camera.position) < 8);
        if (candidate) {
          state.lastDropAt = state.clock.elapsedTime;
          const dropped = candidate.clone(true);
          dropped.position.copy(candidate.position);
          dropped.position.y = 0.18;
          dropped.rotation.set(Math.random() * 1.4, Math.random() * Math.PI, Math.random() * 1.4);
          dropped.scale.multiplyScalar(0.92);
          dropped.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          state.scene.add(dropped);
          playImpactSound();
          patchHud({
            fear: clamp(current.fear + 8, 0, 100),
            message: 'РЎ РїРѕР»РєРё СЃР°Рј СЃРѕСЂРІР°Р»СЃСЏ С‚РѕРІР°СЂ Рё СѓРґР°СЂРёР»СЃСЏ РѕР± РїРѕР». Р“РґРµ-С‚Рѕ СЂСЏРґРѕРј РєС‚Рѕ-С‚Рѕ Р±С‹СЃС‚СЂРѕ РѕС‚СЃС‚СѓРїРёР».',
          });
        }
      }

      if (Math.random() < delta * (0.003 + nightPressure * 0.014) && current.phase === 'shift' && !current.cameraOpen && !current.screamer && current.served >= 2) {
        patchHud({ message: 'РќР° СЃРµРєСѓРЅРґСѓ РІ СЃС‚РµРєР»Рµ С…РѕР»РѕРґРёР»СЊРЅРёРєР° РїРѕСЏРІРёР»РѕСЃСЊ Р»РёС†Рѕ.' });
        scare('screamer-mask');
      }

      if (
        Math.random() < delta * (0.006 + nightPressure * 0.025) &&
        current.phase === 'shift' &&
        !current.screamer &&
        state.customers.some((customer) => customer.weird && customer.mesh.visible && customer.mesh.position.distanceTo(state.camera.position) < 5)
      ) {
        patchHud({
          fear: clamp(current.fear + 14, 0, 100),
          message: 'РЎС‚СЂР°РЅРЅС‹Р№ РєР»РёРµРЅС‚ РѕРєР°Р·Р°Р»СЃСЏ СЃР»РёС€РєРѕРј Р±Р»РёР·РєРѕ. РўС‹ СЃР»С‹С€РёС€СЊ, РєР°Рє РѕРЅ С€РµРїС‡РµС‚ С†РµРЅСѓ С‚РѕРІР°СЂР° С‚РІРѕРёРј РіРѕР»РѕСЃРѕРј.',
        });
        scare('screamer-longneck');
      }

      if (
        Math.random() < delta * (0.006 + nightPressure * 0.018) &&
        current.phase === 'shift' &&
        !current.screamer &&
        state.monster.mood === 'watching'
      ) {
        patchHud({
          fear: clamp(current.fear + 10, 0, 100),
          message: 'РќР° РјРѕРЅРёС‚РѕСЂР°С… РѕС…СЂР°РЅС‹ РјРѕСЂРіРЅСѓР»Р° РјСѓСЃРѕСЂРєР°, С…РѕС‚СЏ С‚С‹ СЃС‚РѕРёС€СЊ РІ С‚РѕСЂРіРѕРІРѕРј Р·Р°Р»Рµ.',
        });
        scare('screamer-trash3d');
      }

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
      renderer.domElement.removeEventListener('pointerdown', onCanvasPointerDown);
      renderer.domElement.removeEventListener('pointermove', onCanvasPointerMove);
      renderer.domElement.removeEventListener('pointerup', onCanvasPointerUp);
      renderer.domElement.removeEventListener('pointercancel', onCanvasPointerUp);
      multiplayerRef.current.channel?.close();
      multiplayerRef.current.channel = undefined;
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
      engine.current = null;
    };
  }, []);

  const startAudio = () => {
    const state = engine.current!;
    if (!state || state.audio) return;
    const ctx = new AudioContext();
    const hum = ctx.createOscillator();
    const gain = ctx.createGain();
    hum.frequency.value = 47;
    hum.type = 'sine';
    gain.gain.value = 0.025 * (settingsRef.current.volume / 100);
    hum.connect(gain);
    gain.connect(ctx.destination);
    hum.start();
    state.audio = ctx;
    state.wind = hum;
    patchHud({ message: 'РџСЂРѕСЃС‚СЂР°РЅСЃС‚РІРµРЅРЅС‹Р№ С€СѓРј РІРєР»СЋС‡РµРЅ: РіСѓР» Р»Р°РјРї, РІРµС‚РµСЂ Рё С€РѕСЂРѕС…Рё РјР°РіР°Р·РёРЅР°.' });
  };

  const connectMultiplayer = (roomValue: string) => {
    const state = engine.current;
    if (!state) return;
    const cleanRoom = (roomValue || 'night-512').trim().slice(0, 24) || 'night-512';
    localStorage.setItem('shesterochka-room', cleanRoom);
    multiplayerRef.current.channel?.close();
    multiplayerRef.current.room = cleanRoom;
    multiplayerRef.current.remoteSeen = 0;
    const channel = new BroadcastChannel(`shesterochka-horror-${cleanRoom}`);
    multiplayerRef.current.channel = channel;
    channel.onmessage = (event: MessageEvent) => {
      const data = event.data as {
        id?: string;
        type?: string;
        x?: number;
        z?: number;
        ry?: number;
      };
      if (!data || data.id === multiplayerRef.current.id || data.type !== 'player') return;
      const live = engine.current;
      if (!live) return;
      multiplayerRef.current.remoteSeen = live.clock.elapsedTime;
      live.secondPlayer.userData.active = true;
      live.secondPlayer.userData.onlineRemote = true;
      live.secondPlayer.visible = true;
      live.secondPlayer.position.lerp(new THREE.Vector3(Number(data.x) || 0, 0, Number(data.z) || 0), 0.45);
      live.secondPlayer.rotation.y = Number(data.ry) || live.secondPlayer.rotation.y;
    };
  };

  const startGame = (coop: boolean | 'online' = false) => {
    const state = engine.current;
    if (!state) return;
    const localCoop = coop === true;
    const localOnline = coop === 'online';
    setCoopMode(localCoop);
    setOnlineMode(localOnline);
    setPaused(false);
    setSettingsOpen(false);
    setSkinsOpen(false);
    patchHud({
      phase: 'shift',
      message: localOnline ? `Online room: ${onlineRoom}. Open this game in another tab with the same room to see the second cashier.` : localCoop ? 'Два игрока на одном ПК: WASD и I/J/K/L.' : 'Ночная смена началась. Клиенты уже заходят в магазин.',
      tasks: initialTasks,
      served: 0,
      stocked: 0,
      trash: 0,
      fear: 0,
      health: 100,
      battery: 100,
      heldItem: null,
      heldItemFromStock: false,
      inventory: 0,
      outsideFinal: false,
      trashDelivered: 0,
    });
    state.camera.position.set(0, 1.7, 14);
    state.stockObjects.forEach((item) => {
      item.visible = Boolean(item.userData.initialVisible);
      const marker = item.userData.slotMarker as THREE.Object3D | undefined;
      if (marker) marker.visible = !item.visible;
    });
    state.trashObjects.forEach((item) => { item.visible = true; });
    state.customers.forEach((customer) => {
      customer.stage = 'waiting';
      customer.mood = 'calm';
      customer.patience = 12 + customer.spawnAt * 0.35;
      customer.leaveTime = 0;
      customer.checkoutTime = 0;
      customer.angry = false;
      customer.mesh.visible = false;
      customer.mesh.position.copy(customer.mesh.userData.initialPosition as THREE.Vector3);
      customer.mesh.children.filter((child) => child.name === 'carriedProduct').forEach((child) => customer.mesh.remove(child));
      customer.mesh.userData.carryingProduct = false;
      customer.mesh.userData.stareUntil = 0;
      customer.mesh.userData.nextStareAt = 0;
    });
    state.carts.forEach((item) => {
      item.userData.follow = false;
      item.userData.items = 0;
    });
    state.fridges.forEach((item) => { item.manualOpen = false; });
    state.bandits.forEach((bandit) => {
      bandit.active = false;
      bandit.health = 3;
      bandit.mesh.visible = false;
      bandit.mesh.userData.announced = false;
    });
    state.loreNotes.forEach((item) => { item.visible = true; });
    state.outsideObjects.forEach((object) => { object.visible = true; });
    state.outsideLights.forEach((light) => { light.intensity = 0.35; });
    state.monster.mesh.visible = false;
    state.monster.emerging = 0;
    state.monster.active = false;
    state.monster.mood = 'hidden';
    if (localOnline) connectMultiplayer(onlineRoom);
    if (!localOnline) {
      multiplayerRef.current.channel?.close();
      multiplayerRef.current.channel = undefined;
    }
    state.secondPlayer.visible = localCoop;
    state.secondPlayer.userData.active = localCoop;
    state.secondPlayer.userData.onlineRemote = localOnline;
    state.secondPlayer.position.set(1.6, 0, 13.2);
    state.lastWhisperAt = 0;
    state.lastBreathAt = 0;
    state.lastNightEventAt = 0;
    state.lastDropAt = 0;
    state.storeLight.intensity = 4.2;
    state.hemi.intensity = 0.95;
    state.renderer.domElement.focus();
    state.controls.lock();
    startAudio();
    window.setTimeout(() => {
      const live = engine.current;
      if (!live || hudRef.current.phase !== 'shift' || hudRef.current.screamer) return;
      const firstCustomer = live.customers.find((customer) => customer.mesh.visible);
      if (firstCustomer) {
        firstCustomer.mesh.userData.stareUntil = live.clock.elapsedTime + 1.5;
        firstCustomer.mesh.lookAt(live.camera.position.x, 1.55, live.camera.position.z);
      }
      scare('screamer-mask');
    }, 6200);
    saveGame({
      event: 'shift_started',
      phase: 'shift',
      cashierSkin: equippedSkin,
      startedAt: new Date().toISOString(),
    });
  };

  const toggleFlashlight = () => {
    const state = engine.current;
    if (!state) return;
    state.flashlight.visible = !state.flashlight.visible;
    patchHud({ message: state.flashlight.visible ? 'Р¤РѕРЅР°СЂРёРє РІРєР»СЋС‡РµРЅ.' : 'Р¤РѕРЅР°СЂРёРє РІС‹РєР»СЋС‡РµРЅ.' });
  };

  const setMobileRun = (value: boolean) => {
    const state = engine.current;
    if (!state) return;
    state.keys.shift = value;
  };

  const handleMoveStick = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    mobileMoveRef.current = {
      x: clamp(x, -1, 1),
      y: clamp(y, -1, 1),
    };
  };

  const resetMoveStick = () => {
    mobileMoveRef.current = { x: 0, y: 0 };
  };

  const handleLookStart = (event: React.PointerEvent<HTMLDivElement>) => {
    mobileLookRef.current = { active: true, lastX: event.clientX, lastY: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleLookMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = engine.current;
    if (!state || !mobileLookRef.current.active || pausedRef.current || hudRef.current.phase === 'menu') return;
    const dx = event.clientX - mobileLookRef.current.lastX;
    const dy = event.clientY - mobileLookRef.current.lastY;
    mobileLookRef.current.lastX = event.clientX;
    mobileLookRef.current.lastY = event.clientY;
    const sensitivity = 0.0014 + settingsRef.current.sensitivity * 0.000035;
    state.camera.rotation.order = 'YXZ';
    state.camera.rotation.y -= dx * sensitivity;
    state.camera.rotation.x = clamp(state.camera.rotation.x - dy * sensitivity, -1.35, 1.35);
  };

  const handleLookEnd = () => {
    mobileLookRef.current.active = false;
  };

  const interact = () => {
    const state = engine.current!;
    if (!state) return;
    const current = hudRef.current;
    const pos = state.camera.position;
    const near = (object: THREE.Object3D, range = 2.2) => object.position.distanceTo(pos) < range;

    if (current.phase === 'menu') {
      startGame();
      return;
    }

    if (current.phase === 'outside' && !current.outsideFinal && state.camera.position.distanceTo(new THREE.Vector3(0, 1.7, 22)) < 4.5) {
      state.camera.position.set(16.3, 1.7, 12);
      state.outsideObjects.forEach((object) => { object.visible = true; });
      state.outsideLights.forEach((light) => { light.intensity = 0.35; });
      state.traces.forEach((trace) => { trace.visible = false; });
      state.monster.mesh.visible = false;
      state.monster.active = false;
      state.monster.mood = 'hidden';
      state.monster.emerging = 0;
      state.scene.fog = new THREE.FogExp2(0x050607, 0.026);
      patchHud({
        phase: 'shift',
        outsideFinal: false,
        message: 'РўС‹ РІРµСЂРЅСѓР»СЃСЏ РІ РјР°РіР°Р·РёРЅ С‡РµСЂРµР· Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРёРµ РґРІРµСЂРё. РЎРЅР°СЂСѓР¶Рё С‡С‚Рѕ-С‚Рѕ РѕСЃС‚Р°Р»РѕСЃСЊ РІРѕР·Р»Рµ РїР°СЂРєРѕРІРєРё.',
      });
      return;
    }

    const fridge = state.fridges.find((item) => item.mesh.position.distanceTo(pos) < 3);
    if (fridge) {
      fridge.manualOpen = !fridge.manualOpen;
      patchHud({ message: fridge.manualOpen ? 'РўС‹ РѕС‚РєСЂС‹Р» С…РѕР»РѕРґРёР»СЊРЅРёРє. РҐРѕР»РѕРґРЅС‹Р№ СЃРІРµС‚ РІС‹С‚РµРєР°РµС‚ РІ РїСЂРѕС…РѕРґ.' : 'РўС‹ Р·Р°РєСЂС‹Р» РґРІРµСЂС†Сѓ С…РѕР»РѕРґРёР»СЊРЅРёРєР°.' });
      return;
    }

    const lore = state.loreNotes.find((item) => item.visible && item.position.distanceTo(pos) < 2);
    if (lore) {
      lore.visible = false;
      patchHud({ message: String(lore.userData.lore ?? 'Р—Р°РїРёСЃСЊ СЃС‚РµСЂС‚Р°. РћСЃС‚Р°Р»СЃСЏ С‚РѕР»СЊРєРѕ Р·Р°РїР°С… РјРѕРєСЂРѕР№ Р±СѓРјР°РіРё.'), fear: clamp(current.fear + 8, 0, 100) });
      return;
    }

    const cart = state.carts.find((item) => item.position.distanceTo(pos) < 2.7);
    if (cart) {
      if (current.heldItem) {
        cart.userData.items = Number(cart.userData.items ?? 0) + 1;
        patchHud({
          heldItem: null,
          heldItemFromStock: false,
          message: `${current.heldItem} Р»РµР¶РёС‚ РІ ${cart.userData.kind === 'basket' ? 'РєРѕСЂР·РёРЅРµ' : 'С‚РµР»РµР¶РєРµ'}. Р’РЅСѓС‚СЂРё С‚РѕРІР°СЂРѕРІ: ${cart.userData.items}.`,
        });
        return;
      }
      const nextFollow = !cart.userData.follow;
      state.carts.forEach((item) => { item.userData.follow = false; });
      cart.userData.follow = nextFollow;
      patchHud({
        message: nextFollow
          ? cart.userData.kind === 'basket' ? 'РўС‹ РІР·СЏР» СЂСѓС‡РЅСѓСЋ РєРѕСЂР·РёРЅСѓ. РћРЅР° РґРµСЂР¶РёС‚СЃСЏ РїРµСЂРµРґ С‚РѕР±РѕР№.' : 'РўС‹ РІР·СЏР» С‚РµР»РµР¶РєСѓ. РћРЅР° РєР°С‚РёС‚СЃСЏ РїРµСЂРµРґ С‚РѕР±РѕР№.'
          : cart.userData.kind === 'basket' ? 'РўС‹ РїРѕСЃС‚Р°РІРёР» РєРѕСЂР·РёРЅСѓ.' : 'РўС‹ РѕС‚РїСѓСЃС‚РёР» С‚РµР»РµР¶РєСѓ.',
      });
      return;
    }

    const stockCrate = state.stockCrates.find((item) => item.position.distanceTo(pos) < 2.4);
    if (stockCrate && !current.heldItem) {
      const productName = String(stockCrate.userData.product ?? productNames[0]);
      patchHud({
        heldItem: productName,
        heldItemFromStock: true,
        inventory: current.inventory + 1,
        message: `РўС‹ РІР·СЏР» РёР· РєРѕСЂРѕР±РєРё: ${productName}. РћС‚РЅРµСЃРё С‚РѕРІР°СЂ Рє РїСѓСЃС‚РѕРјСѓ РјРµСЃС‚Сѓ РЅР° РїРѕР»РєРµ Рё РЅР°Р¶РјРё E.`,
      });
      return;
    }
    if (stockCrate && current.heldItem) {
      patchHud({ message: `Р СѓРєРё Р·Р°РЅСЏС‚С‹: ${current.heldItem}. РЎРЅР°С‡Р°Р»Р° РїРѕР»РѕР¶Рё С‚РѕРІР°СЂ РЅР° РЅСѓР¶РЅСѓСЋ РїРѕР»РєСѓ, РІ РєРѕСЂР·РёРЅСѓ РёР»Рё С‚РµР»РµР¶РєСѓ.` });
      return;
    }

    const bandit = state.bandits.find((item) => item.active && item.health > 0 && item.mesh.position.distanceTo(pos) < 2.4);
    if (bandit) {
      bandit.health -= 1;
      bandit.mesh.position.add(bandit.mesh.position.clone().sub(pos).normalize().multiplyScalar(1.3));
      patchHud({ message: 'РўС‹ РѕС‚Р±РёР»СЃСЏ РѕС‚ Р±Р°РЅРґРёС‚Р°. Р’ РїСЂРѕС…РѕРґРµ СЃРЅРѕРІР° СЃР»С‹С€РµРЅ С‡СѓР¶РѕР№ Р±РµРі.' });
      if (bandit.health <= 0) {
        bandit.active = false;
        bandit.mesh.visible = false;
        patchHud({ message: 'Р‘Р°РЅРґРёС‚ СѓР±РµР¶Р°Р» РІ С‚РµРјРЅС‹Р№ РїСЂРѕС…РѕРґ. РќРѕ Р·Р° С…РѕР»РѕРґРёР»СЊРЅРёРєР°РјРё РєС‚Рѕ-С‚Рѕ РµС‰Рµ РґС‹С€РёС‚.' });
      }
      return;
    }

    const visibleProduct = state.stockObjects.find((item) => item.visible && item.position.distanceTo(pos) < 2.25);
    if (visibleProduct && !current.heldItem) {
      const productName = String(visibleProduct.userData.product ?? 'С‚РѕРІР°СЂ');
      visibleProduct.visible = false;
      const marker = visibleProduct.userData.slotMarker as THREE.Object3D | undefined;
      if (marker) marker.visible = true;
      patchHud({
        heldItem: productName,
        heldItemFromStock: false,
        inventory: current.inventory + 1,
        message: `РўС‹ РІР·СЏР» С‚РѕРІР°СЂ СЃ РїРѕР»РєРё: ${productName}. Р­С‚Рѕ РґР»СЏ РєРѕСЂР·РёРЅС‹/С‚РµР»РµР¶РєРё. Р”Р»СЏ РїРѕРїРѕР»РЅРµРЅРёСЏ Р±РµСЂРё С‚РѕРІР°СЂ РёР· РєРѕСЂРѕР±РѕРє РЅР° СЃРєР»Р°РґРµ.`,
      });
      return;
    }

    if (near(state.phone) && !current.tasks.phone) {
      completeTask('phone');
      patchHud({ message: 'Р“РѕР»РѕСЃ РІ С‚РµР»РµС„РѕРЅРµ: "РќРѕС‡СЊСЋ РЅРµР»СЊР·СЏ РІС‹С…РѕРґРёС‚СЊ Рє РјСѓСЃРѕСЂРЅС‹Рј РєРѕРЅС‚РµР№РЅРµСЂР°Рј."' });
      scare('screamer-dust');
      return;
    }
    const customer = state.customers.find((item) => item.stage === 'checkout' && item.mesh.position.distanceTo(pos) < 4.2);
    if (customer) {
      customer.stage = 'leave';
      customer.leaveTime = 0;
      customer.checkoutTime = 0;
      customer.angry = false;
      customer.mood = 'calm';
      customer.target.set(19.5, 0, 12);
      customer.mesh.children.filter((child) => child.name === 'carriedProduct').forEach((child) => customer.mesh.remove(child));
      customer.mesh.userData.carryingProduct = false;
      const served = current.served + 1;
      patchHud({ served, message: `${getCustomerAiLine(customer)} РџСЂРѕР±РёС‚ С‚РѕРІР°СЂ: ${customer.item}. РљР»РёРµРЅС‚ СѓС…РѕРґРёС‚ РёР· РјР°РіР°Р·РёРЅР°.` });
      if (served >= state.customers.length) completeTask('cashier');
      if (customer.weird) scare('screamer-longneck');
      return;
    }
    const nearbyEmptySlots = state.stockObjects.filter((item) => !item.visible && item.position.distanceTo(pos) < 5.5);
    const matchingSlot = nearbyEmptySlots.find((item) => item.userData.requiredProduct === current.heldItem);
    if (matchingSlot && current.heldItem && current.heldItemFromStock) {
      matchingSlot.visible = true;
      const marker = matchingSlot.userData.slotMarker as THREE.Object3D | undefined;
      if (marker) marker.visible = false;
      const stocked = current.stocked + 1;
      patchHud({
        stocked,
        heldItem: null,
        heldItemFromStock: false,
        message: `РџРѕР»РєР° РїРѕРїРѕР»РЅРµРЅР° С‚РѕРІР°СЂРѕРј РёР· РєРѕСЂРѕР±РєРё: ${current.heldItem}.`,
      });
      if (stocked === 2) scare('screamer-grin');
      if (stocked === 7) scare('screamer-longneck');
      if (stocked === 13) scare('screamer-mask');
      if (stocked >= 18) completeTask('stock');
      return;
    }
    if (nearbyEmptySlots.length > 0 && current.heldItem && current.heldItemFromStock) {
      const required = String(nearbyEmptySlots[0].userData.requiredProduct ?? 'РЅСѓР¶РЅС‹Р№ С‚РѕРІР°СЂ');
      patchHud({ message: `Р­С‚Р° РїРѕР»РєР° Р¶РґРµС‚ РґСЂСѓРіРѕР№ С‚РѕРІР°СЂ: ${required}. Р’РѕР·СЊРјРё РїСЂР°РІРёР»СЊРЅСѓСЋ РєРѕСЂРѕР±РєСѓ РЅР° СЃРєР»Р°РґРµ.` });
      return;
    }
    if (nearbyEmptySlots.length > 0 && current.heldItem && !current.heldItemFromStock) {
      patchHud({ message: 'Р­С‚РёРј РЅРµР»СЊР·СЏ РїРѕРїРѕР»РЅРёС‚СЊ РїРѕР»РєСѓ. Р’РѕР·СЊРјРё РЅРѕРІС‹Р№ С‚РѕРІР°СЂ РёР· РєРѕСЂРѕР±РєРё РЅР° СЃРєР»Р°РґРµ.' });
      return;
    }
    if (nearbyEmptySlots.length > 0 && !current.heldItem) {
      const required = String(nearbyEmptySlots[0].userData.requiredProduct ?? 'С‚РѕРІР°СЂ');
      patchHud({ message: `РџСѓСЃС‚РѕРµ РјРµСЃС‚Рѕ РЅР° РїРѕР»РєРµ. РќСѓР¶РµРЅ С‚РѕРІР°СЂ РёР· РєРѕСЂРѕР±РєРё: ${required}.` });
      return;
    }
    if (current.phase === 'outside' && current.heldItem === 'Trash bag' && near(state.dumpster, 5.5)) {
      const delivered = current.trashDelivered + 1;
      patchHud({
        heldItem: null,
        heldItemFromStock: false,
        trashDelivered: delivered,
        outsideFinal: true,
        fear: clamp(current.fear + 22, 0, 100),
        message: 'The trash bag drops into the dumpster. Something inside pushes back. Run to the store.',
      });
      state.monster.mesh.visible = true;
      state.monster.active = true;
      state.monster.mood = 'hunting';
      state.monster.mesh.position.set(5, -1.5, 38);
      state.monster.emerging = 0;
      scare('screamer-trash3d');
      return;
    }

    const trash = state.trashObjects.find((item) => item.visible && item.position.distanceTo(pos) < 2.2);
    if (trash) {
      if (current.heldItem && current.heldItem !== 'Trash bag') {
        patchHud({ message: 'Р СѓРєРё Р·Р°РЅСЏС‚С‹. РЎРЅР°С‡Р°Р»Р° РїРѕР»РѕР¶Рё С‚РѕРІР°СЂ РЅР° РїРѕР»РєСѓ, РІ РєРѕСЂР·РёРЅСѓ РёР»Рё С‚РµР»РµР¶РєСѓ, РїРѕС‚РѕРј СЃРѕР±РёСЂР°Р№ РјСѓСЃРѕСЂ.' });
        return;
      }
      trash.visible = false;
      const count = current.trash + 1;
      patchHud({
        trash: count,
        heldItem: 'Trash bag',
        heldItemFromStock: false,
        message: count >= state.trashObjects.length ? 'РњСѓСЃРѕСЂ СЃРѕР±СЂР°РЅ РІ РѕРґРёРЅ С‚СЏР¶РµР»С‹Р№ РїР°РєРµС‚. РўРµРїРµСЂСЊ РІС‹РЅРµСЃРё РµРіРѕ Рє РєРѕРЅС‚РµР№РЅРµСЂСѓ РЅР° СѓР»РёС†Рµ.' : `РњСѓСЃРѕСЂ СЃРѕР±СЂР°РЅ: ${count}/${state.trashObjects.length}. РќР°Р№РґРё РѕСЃС‚Р°Р»СЊРЅС‹Рµ РїР°РєРµС‚С‹ РІ РјР°РіР°Р·РёРЅРµ.`,
      });
      if (count === 1) scare('screamer-dust');
      if (count >= state.trashObjects.length) completeTask('trash');
      return;
    }
    if (near(state.cameraDesk, 2.5)) {
      completeTask('cameras');
      const cameraOpen = !current.cameraOpen;
      patchHud({ cameraOpen, message: cameraOpen ? 'РљР°РјРµСЂС‹ РѕС‚РєСЂС‹С‚С‹. РќР° РѕРґРЅРѕР№ РёР· РЅРёС… РІРёРґРЅР° РјСѓСЃРѕСЂРєР°.' : 'РљР°РјРµСЂС‹ Р·Р°РєСЂС‹С‚С‹.' });
      if (cameraOpen) scare('screamer-mask');
      return;
    }
    if (near(state.exitDoor, 3) && current.phase !== 'outside' && current.phase !== 'dead' && current.phase !== 'escaped') {
      const finalReady = current.phase === 'armed' || Object.values(current.tasks).filter(Boolean).length >= 6;
      completeTask('outside');
      if (finalReady) {
        state.customers.forEach((customer) => { customer.mesh.visible = false; });
        state.trashObjects.forEach((item) => { item.visible = false; });
        state.stockObjects.forEach((item) => { item.visible = false; });
      }
      state.helpExit.visible = true;
      state.outsideObjects.forEach((object) => { object.visible = true; });
      state.outsideLights.forEach((light) => { light.intensity = finalReady ? 1.45 : 0.82; });
      state.scene.fog = new THREE.FogExp2(0x090b10, 0.052);
      state.camera.position.set(0, 1.7, 24);
      state.monster.mesh.visible = false;
      state.monster.active = false;
      state.monster.mesh.position.set(5, -1.5, 38);
      state.monster.emerging = 0;
      state.traces.forEach((trace) => { trace.visible = true; });
      patchHud({
        phase: 'outside',
        outsideFinal: finalReady,
        message: finalReady
          ? 'Р¤РёРЅР°Р»СЊРЅР°СЏ СЃС†РµРЅР°: РЅРѕС‡СЊ, С‚СѓРјР°РЅ, С„РѕРЅР°СЂРё. РњРѕРЅСЃС‚СЂ РІС‹Р»РµР·Р°РµС‚ РёР· РјСѓСЃРѕСЂРєРё.'
          : 'РўС‹ РІС‹С€РµР» РЅР° СѓР»РёС†Сѓ СЂР°РЅСЊС€Рµ РІСЂРµРјРµРЅРё. РџР°СЂРєРѕРІРєР° РїСѓСЃС‚Р°СЏ, РЅРѕ Сѓ РєРѕРЅС‚РµР№РЅРµСЂРѕРІ СЃР»С‹С€РЅРѕ РјРѕРєСЂРѕРµ РґС‹С…Р°РЅРёРµ.',
      });
      return;
    }
    patchHud({ message: 'РџРѕРґРѕР№РґРё Р±Р»РёР¶Рµ: С‚РµР»РµС„РѕРЅ, РєР°СЃСЃР°, РїРѕР»РєРё, РјСѓСЃРѕСЂ, РєР°РјРµСЂС‹ РёР»Рё РІС‹С…РѕРґ.' });
  };

  return (
    <main className="three-game">
      <div className="viewport" ref={mountRef} />

      {hud.phase === 'menu' && (
        <section className="title-screen">
          <h1>РЁРµСЃС‚С‘СЂРѕС‡РєР° Horror</h1>
          <p>3D-С…РѕСЂСЂРѕСЂ РѕС‚ РїРµСЂРІРѕРіРѕ Р»РёС†Р°. РќРѕС‡РЅР°СЏ СЃРјРµРЅР°, РєР»РёРµРЅС‚С‹, РєР°РјРµСЂС‹ Рё РјРѕРЅСЃС‚СЂ Сѓ РјСѓСЃРѕСЂРЅС‹С… РєРѕРЅС‚РµР№РЅРµСЂРѕРІ.</p>
          <p className="menu-atmosphere">Р”РѕР¶РґСЊ РЅР° РїР°СЂРєРѕРІРєРµ. РҐРѕР»РѕРґРЅС‹Рµ С…РѕР»РѕРґРёР»СЊРЅРёРєРё. РљР»РёРµРЅС‚С‹, РєРѕС‚РѕСЂС‹Рµ Р·Р°Р±С‹РІР°СЋС‚ Р·Р°С‡РµРј РїСЂРёС€Р»Рё.</p>
          <div className="guest-login-actions">
            <button type="button" className="ghost" onClick={() => setReviewsOpen(true)}>РћС‚Р·С‹РІС‹</button>
            <button type="button" onClick={() => startGame(false)}>РРіСЂР°С‚СЊ РѕРґРЅРѕРјСѓ</button>
            <button type="button" className="ghost" onClick={() => startGame(true)}>РРіСЂР°С‚СЊ РІРґРІРѕРµРј</button>
            <label className="room-field">
              Room
              <input
                type="text"
                maxLength={24}
                value={onlineRoom}
                onChange={(event) => setOnlineRoom(event.target.value)}
              />
            </label>
            <button type="button" className="ghost" onClick={() => startGame('online')}>Online room</button>
            <button type="button" className="ghost" onClick={() => setSkinsOpen(true)}>РЎРєРёРЅС‹ РєР°СЃСЃРёСЂР°</button>
            <button type="button" className="ghost" onClick={() => setAuthOpen(true)}>Р’РѕР№С‚Рё</button>
            <span>{session?.user.email ? `Р’РѕС€РµР»: ${session.user.email}` : 'Р“РѕСЃС‚СЊ: РїСЂРѕРіСЂРµСЃСЃ С…СЂР°РЅРёС‚СЃСЏ РЅР° СЌС‚РѕРј СѓСЃС‚СЂРѕР№СЃС‚РІРµ'}</span>
            <span>РќР°РґРµС‚Рѕ: {selectedSkin.name}</span>
          </div>
        </section>
      )}

      <div className="account-panel">
        <span>{session?.user.email ?? 'Guest'}</span>
        <span>{onlineMode ? `Online: ${onlineRoom}` : coopMode ? 'Co-op: I/J/K/L' : 'Solo'}</span>
        {!session && <button type="button" onClick={() => setAuthOpen(true)}>Login</button>}
        <button type="button" onClick={() => setSkinsOpen(true)}>Skins</button>
        <button type="button" onClick={() => setReviewsOpen(true)}>Reviews</button>
        <button type="button" onClick={() => setSettingsOpen(true)}>Settings</button>
        <button type="button" onClick={() => setGeminiOpen((value) => !value)}>Gemini Help</button>
      </div>

      {authOpen && (
        <Auth
          onClose={() => setAuthOpen(false)}
          onSuccess={() => setAuthOpen(false)}
        />
      )}

      {reviewsOpen && (
        <section className="reviews-screen">
          <div className="reviews-panel">
            <span className="menu-kicker">Player feedback</span>
            <h2>РћС‚Р·С‹РІС‹ РѕР± РёРіСЂРµ</h2>
            <form className="review-form" onSubmit={addReview}>
              <label>
                РРјСЏ
                <input
                  type="text"
                  maxLength={32}
                  placeholder="РРіСЂРѕРє"
                  value={reviewName}
                  onChange={(event) => setReviewName(event.target.value)}
                />
              </label>
              <label>
                РћС†РµРЅРєР°
                <select value={reviewRating} onChange={(event) => setReviewRating(Number(event.target.value))}>
                  <option value={5}>5 - РѕС‚Р»РёС‡РЅРѕ</option>
                  <option value={4}>4 - С…РѕСЂРѕС€Рѕ</option>
                  <option value={3}>3 - РЅРѕСЂРјР°Р»СЊРЅРѕ</option>
                  <option value={2}>2 - РЅР°РґРѕ СѓР»СѓС‡С€РёС‚СЊ</option>
                  <option value={1}>1 - РїР»РѕС…Рѕ</option>
                </select>
              </label>
              <label className="review-text-field">
                РћС‚Р·С‹РІ
                <textarea
                  maxLength={420}
                  placeholder="РќР°РїРёС€Рё, С‡С‚Рѕ СѓР»СѓС‡С€РёС‚СЊ: РјРѕРЅСЃС‚СЂР°, СЃРІРµС‚, РєР»РёРµРЅС‚РѕРІ, СѓР»РёС†Сѓ, СЃРєСЂРёРјРµСЂС‹..."
                  value={reviewText}
                  onChange={(event) => setReviewText(event.target.value)}
                />
              </label>
              <button type="submit">РћСЃС‚Р°РІРёС‚СЊ РѕС‚Р·С‹РІ</button>
            </form>
            <div className="reviews-list">
              {reviews.map((review) => (
                <article key={review.id}>
                  <div>
                    <b>{review.name}</b>
                    <span>{'в…'.repeat(review.rating)}{'в†'.repeat(5 - review.rating)}</span>
                  </div>
                  <p>{review.text}</p>
                  <time>{new Date(review.createdAt).toLocaleDateString('ru-RU')}</time>
                </article>
              ))}
            </div>
            <div className="menu-actions">
              <button type="button" className="ghost" onClick={() => setReviews(defaultReviews)}>РЎР±СЂРѕСЃРёС‚СЊ РѕС‚Р·С‹РІС‹</button>
              <button type="button" onClick={() => setReviewsOpen(false)}>Р—Р°РєСЂС‹С‚СЊ</button>
            </div>
          </div>
        </section>
      )}

      {paused && hud.phase !== 'menu' && (
        <section className="pause-screen">
          <span className="menu-kicker">Paused</span>
          <h2>Shift suspended</h2>
          <div className="menu-actions">
            <button type="button" onClick={() => setPaused(false)}>Resume</button>
            <button type="button" className="ghost" onClick={() => setSkinsOpen(true)}>Cashier skins</button>
            <button type="button" className="ghost" onClick={() => setSettingsOpen(true)}>Settings</button>
            <button type="button" className="ghost" onClick={() => patchHud({ phase: 'menu' })}>Main menu</button>
          </div>
        </section>
      )}

      {skinsOpen && (
        <section className="skins-screen">
          <div className="skins-panel">
            <span className="menu-kicker">Locker room</span>
            <h2>РЎРєРёРЅС‹ РєР°СЃСЃРёСЂР°</h2>
            <div className="skin-showcase" aria-hidden="true">
              <div className="cashier-model-preview">
                <i className="preview-head" style={{ background: `#${selectedSkin.skin.toString(16).padStart(6, '0')}` }} />
                <i className="preview-hair" />
                <i className="preview-body" style={{ background: `#${selectedSkin.sleeve.toString(16).padStart(6, '0')}` }} />
                <i className="preview-badge" style={{ background: `#${selectedSkin.badge.toString(16).padStart(6, '0')}` }} />
                <i className="preview-arm left" style={{ background: `#${selectedSkin.sleeve.toString(16).padStart(6, '0')}` }} />
                <i className="preview-arm right" style={{ background: `#${selectedSkin.sleeve.toString(16).padStart(6, '0')}` }} />
                <i className="preview-glove left" style={{ background: `#${selectedSkin.glove.toString(16).padStart(6, '0')}` }} />
                <i className="preview-glove right" style={{ background: `#${selectedSkin.glove.toString(16).padStart(6, '0')}` }} />
                <i className="preview-leg left" />
                <i className="preview-leg right" />
              </div>
              <div>
                <b>{selectedSkin.name}</b>
                <span>{selectedSkin.description}</span>
              </div>
            </div>
            <p>РЎРєРёРЅ РјРµРЅСЏРµС‚ СЂСѓРєРё РёРіСЂРѕРєР° РІ РїРµСЂРІРѕРј Р»РёС†Рµ: СЂСѓРєР°РІР°, РїРµСЂС‡Р°С‚РєРё Рё Р±РµР№РґР¶. РЎРµР№С‡Р°СЃ РЅР°РґРµС‚Рѕ: <b>{selectedSkin.name}</b>.</p>
            <div className="skin-grid">
              {cashierSkins.map((skin) => (
                <article key={skin.id} className={skin.id === equippedSkin ? 'active' : ''}>
                  <div className="skin-preview">
                    <i style={{ background: `#${skin.sleeve.toString(16).padStart(6, '0')}` }} />
                    <i style={{ background: `#${skin.glove.toString(16).padStart(6, '0')}` }} />
                    <i style={{ background: `#${skin.badge.toString(16).padStart(6, '0')}` }} />
                  </div>
                  <h3>{skin.name}</h3>
                  <span>{skin.description}</span>
                  <button type="button" onClick={() => equipSkin(skin.id)}>
                    {skin.id === equippedSkin ? 'РќР°РґРµС‚Рѕ' : 'РќР°РґРµС‚СЊ'}
                  </button>
                </article>
              ))}
            </div>
            <div className="menu-actions">
              <button type="button" className="ghost" onClick={removeSkin}>РЎРЅСЏС‚СЊ СЃРєРёРЅ</button>
              <button type="button" onClick={() => setSkinsOpen(false)}>Р—Р°РєСЂС‹С‚СЊ</button>
            </div>
          </div>
        </section>
      )}

      {settingsOpen && (
        <section className="settings-screen">
          <div className="settings-panel">
            <span className="menu-kicker">Options</span>
            <h2>Steam-style settings</h2>
            <label>
              Graphics
              <select
                value={settings.graphics}
                onChange={(event) => setSettings((current) => ({ ...current, graphics: event.target.value as GameSettings['graphics'] }))}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
            <label>
              Volume {settings.volume}%
              <input
                type="range"
                min="0"
                max="100"
                value={settings.volume}
                onChange={(event) => setSettings((current) => ({ ...current, volume: Number(event.target.value) }))}
              />
            </label>
            <label>
              Touch sensitivity {settings.sensitivity}%
              <input
                type="range"
                min="10"
                max="100"
                value={settings.sensitivity}
                onChange={(event) => setSettings((current) => ({ ...current, sensitivity: Number(event.target.value) }))}
              />
            </label>
            <label className="check-row">
              <input
                type="checkbox"
                checked={settings.showHud}
                onChange={(event) => setSettings((current) => ({ ...current, showHud: event.target.checked }))}
              />
              Show HUD
            </label>
            <label className="check-row">
              <input
                type="checkbox"
                checked={settings.mobileControls}
                onChange={(event) => setSettings((current) => ({ ...current, mobileControls: event.target.checked }))}
              />
              Mobile controls
            </label>
            <button type="button" onClick={() => setSettingsOpen(false)}>Close</button>
          </div>
        </section>
      )}

      {geminiOpen && (
        <section className="gemini-panel">
          <b>Gemini РїРѕ РЁРµСЃС‚С‘СЂРѕС‡РєР° Horror</b>
          <form onSubmit={askGemini}>
            <textarea
              placeholder="РЎРїСЂРѕСЃРё: С‡С‚Рѕ РґРµР»Р°С‚СЊ РґР°Р»СЊС€Рµ, РіРґРµ РјСѓСЃРѕСЂ, РєР°Рє СЃР±РµР¶Р°С‚СЊ РѕС‚ РјРѕРЅСЃС‚СЂР°..."
              value={geminiPrompt}
              onChange={(e) => setGeminiPrompt(e.target.value)}
            />
            <button type="submit" disabled={geminiBusy}>
              {geminiBusy ? 'Р”СѓРјР°СЋ...' : 'РЎРїСЂРѕСЃРёС‚СЊ'}
            </button>
          </form>
          <div className="gemini-quick">
            {['Р§С‚Рѕ РґРµР»Р°С‚СЊ РґР°Р»СЊС€Рµ?', 'РљР°Рє РЅРµ СѓРјРµСЂРµС‚СЊ РЅР° СѓР»РёС†Рµ?', 'Р“РґРµ РёСЃРєР°С‚СЊ РјСѓСЃРѕСЂ?', 'РљР°Рє СЂР°Р±РѕС‚Р°СЋС‚ РєР»РёРµРЅС‚С‹?', 'РџРѕС‡РµРјСѓ РєР»РёРµРЅС‚ Р·Р»РёС‚СЃСЏ?', 'Р§С‚Рѕ РґРµР»Р°РµС‚ РјРѕРЅСЃС‚СЂ?'].map((question) => (
              <button
                key={question}
                type="button"
                className="ghost"
                disabled={geminiBusy}
                onClick={() => {
                  setGeminiPrompt(question);
                  requestGemini(question);
                }}
              >
                {question}
              </button>
            ))}
          </div>
          {geminiAnswer && <p>{geminiAnswer}</p>}
        </section>
      )}

      {settings.showHud && <section className="hud3d">
        <div>
          <b>{hud.phase === 'outside' ? 'Р¤РёРЅР°Р»: СѓР»РёС†Р°' : 'РќРѕС‡РЅР°СЏ СЃРјРµРЅР°'}</b>
          <span>{hud.message}</span>
          {hud.heldItem ? <em>Р’ СЂСѓРєР°С…: {hud.heldItem}</em> : null}
        </div>
        <div className="bars">
          <label>Р—РґРѕСЂРѕРІСЊРµ <i style={{ width: `${hud.health}%` }} /></label>
          <label>Р‘Р°С‚Р°СЂРµСЏ <i style={{ width: `${hud.battery}%` }} /></label>
          <label>РЎС‚СЂР°С… <i style={{ width: `${hud.fear}%` }} /></label>
        </div>
      </section>}

      {settings.showHud && <aside className="quest-log">
        <b>РљРІРµСЃС‚С‹</b>
        <span className={hud.tasks.phone ? 'done' : ''}>E: РѕС‚РІРµС‚РёС‚СЊ РЅР° С‚РµР»РµС„РѕРЅ</span>
        <span className={hud.tasks.cashier ? 'done' : ''}>РћР±СЃР»СѓР¶РёС‚СЊ РєР»РёРµРЅС‚РѕРІ: {hud.served}/8</span>
        <span className={hud.tasks.stock ? 'done' : ''}>РџРѕРїРѕР»РЅРёС‚СЊ РїРѕР»РєРё: {hud.stocked}/18</span>
        <span className={hud.tasks.trash ? 'done' : ''}>РЎРѕР±СЂР°С‚СЊ РјСѓСЃРѕСЂ: {hud.trash}/3</span>
        <span className={hud.tasks.cameras ? 'done' : ''}>РџРѕСЃРјРѕС‚СЂРµС‚СЊ РєР°РјРµСЂС‹</span>
        <span className={hud.tasks.bandits ? 'done' : ''}>РћС‚Р±РёС‚СЊСЃСЏ РѕС‚ Р±Р°РЅРґРёС‚РѕРІ</span>
        <span className={hud.tasks.outside ? 'done' : ''}>Р’С‹РЅРµСЃС‚Рё РјСѓСЃРѕСЂ РЅР°СЂСѓР¶Сѓ</span>
      </aside>}

      {settings.showHud && <div className="controls-note">
        WASD - С…РѕРґСЊР±Р° В· Shift - Р±РµРі В· РјС‹С€СЊ - РѕР±Р·РѕСЂ В· E - РґРµР№СЃС‚РІРёРµ В· Q - С„РѕРЅР°СЂРёРє В· Esc - РјРµРЅСЋ
        {!hud.locked && hud.phase !== 'menu' ? <strong>РљР»РёРєРЅРё РїРѕ РёРіСЂРµ, С‡С‚РѕР±С‹ Р·Р°С…РІР°С‚РёС‚СЊ РјС‹С€СЊ</strong> : null}
      </div>}

      {settings.mobileControls && hud.phase !== 'menu' && (
        <div className="mobile-controls">
          <div
            className="move-stick"
            onPointerDown={handleMoveStick}
            onPointerMove={handleMoveStick}
            onPointerUp={resetMoveStick}
            onPointerCancel={resetMoveStick}
          >
            <span />
          </div>
          <div
            className="look-pad"
            onPointerDown={handleLookStart}
            onPointerMove={handleLookMove}
            onPointerUp={handleLookEnd}
            onPointerCancel={handleLookEnd}
          />
          <div className="mobile-buttons">
            <button type="button" onPointerDown={() => setMobileRun(true)} onPointerUp={() => setMobileRun(false)} onPointerCancel={() => setMobileRun(false)}>Run</button>
            <button type="button" onClick={interact}>E</button>
            <button type="button" onClick={toggleFlashlight}>Light</button>
            <button type="button" className="ghost" onClick={() => setPaused(true)}>Pause</button>
          </div>
        </div>
      )}

      {hud.cameraOpen && (
        <div className="camera-panel">
          <b>CAM 05:12</b>
          <div className="camera-grid">
            <i>SHOP AISLE</i>
            <i>SECURITY</i>
            <i>PARKING</i>
            <i>TRASH ZONE</i>
          </div>
          <span>РџРѕРјРµС…Рё. РљРѕРЅС‚РµР№РЅРµСЂС‹. Р§С‚Рѕ-С‚Рѕ РґРІРёР¶РµС‚СЃСЏ РІРЅСѓС‚СЂРё РјСѓСЃРѕСЂРєРё.</span>
        </div>
      )}

      {hud.screamer && (
        <div className="screamer3d" style={{ backgroundImage: `url(${assetUrl(hud.screamer)})` }} />
      )}
    </main>
  );
}

