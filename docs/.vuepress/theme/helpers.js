import {MOBILE_MQ} from './constants';

export function isMobile() {
  if (typeof window === 'undefined') {
    // SSR
    return false;
  }

  return matchMedia(MOBILE_MQ).matches;
}

export function addLayoutListener(listener) {
  if (typeof window === 'undefined') {
    // SSR
    return () => {};
  }

  const handler = ({matches}) => {listener(matches)};

  window.matchMedia(MOBILE_MQ).addEventListener('change', handler);

  return () => window.matchMedia(MOBILE_MQ).removeEventListener('change', handler);
}
