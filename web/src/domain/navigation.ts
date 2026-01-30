export type View =
  | 'landing'
  | 'pricing'
  | 'how-it-works'
  | 'verification'
  | 'api'
  | 'dashboard'
  | 'not-found';

export type Modal = 'login' | 'register' | null;

const viewList: View[] = [
  'landing',
  'pricing',
  'how-it-works',
  'verification',
  'api',
  'dashboard',
  'not-found',
];

export const isView = (value: string): value is View => {
  return viewList.includes(value as View);
};
