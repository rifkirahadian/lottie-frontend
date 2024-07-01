import { Animation } from '@/types';
import { openDB } from 'idb';

const dbPromise = openDB('animations-store', 1, {
  upgrade(db) {
    db.createObjectStore('animations', { keyPath: 'id' });
  },
});

export async function getAllAnimations() {
  const db = await dbPromise;
  return db.getAll('animations');
}

export async function saveAnimation(animation: Animation) {
  const db = await dbPromise;
  return db.put('animations', animation);
}

export async function getAnimationById(id: string) {
  const db = await dbPromise;
  return db.get('animations', id);
}