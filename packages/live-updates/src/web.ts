import { WebPlugin } from '@capacitor/core';

import type { LiveUpdatesPlugin } from './definitions';

export class LiveUpdatesWeb extends WebPlugin implements LiveUpdatesPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
