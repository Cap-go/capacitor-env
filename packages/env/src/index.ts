import { registerPlugin } from '@capacitor/core';

import type { EnvPlugin } from './definitions';

const Env = registerPlugin<EnvPlugin>('Env', {
  web: () => import('./web').then((m) => new m.EnvWeb()),
});

export * from './definitions';
export { Env };
