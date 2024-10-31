import { registerPlugin } from '@capacitor/core';

import type { LiveUpdatesPlugin } from './definitions';

const LiveUpdates = registerPlugin<LiveUpdatesPlugin>('LiveUpdates', {
  web: () => import('./web').then((m) => new m.LiveUpdatesWeb()),
});

export * from './definitions';
export { LiveUpdates };
