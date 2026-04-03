import liff from '@line/liff';

let initPromise: Promise<void> | null = null;

export function initLiff(): Promise<void> {
  if (!initPromise) {
    initPromise = liff.init({ liffId: '1653651913-rzZXA2dX' });
  }
  return initPromise;
}
