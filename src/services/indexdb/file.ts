/* eslint-disable @typescript-eslint/no-explicit-any */
import { Animation } from '@/types';
import { openDB } from 'idb';

let dbPromise: Promise<any> | null = null;

if (typeof window !== 'undefined') {
  dbPromise = openDB('animations-store', 1, {
    upgrade(db) {
      db.createObjectStore('animations', { keyPath: 'id' });
    },
  });
}

export async function getAllAnimations() {
  if (!dbPromise) throw new Error('IndexedDB is not available');
  const db = await dbPromise;
  return db.getAll('animations');
}

export async function saveAnimation(animation: Animation) {
  if (!dbPromise) throw new Error('IndexedDB is not available');
  const db = await dbPromise;
  return db.put('animations', animation);
}

export async function getAnimationById(id: string) {
  if (!dbPromise) throw new Error('IndexedDB is not available');
  const db = await dbPromise;
  return db.get('animations', id);
}
