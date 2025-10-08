import { WebPlugin } from '@capacitor/core';

import type { EnvPlugin } from './definitions';

export class EnvWeb extends WebPlugin implements EnvPlugin {
  async getKey(options: { key: string }): Promise<{ value: string }> {
    console.log('GET_KEY', options);
    return { value: '' };
  }
}
