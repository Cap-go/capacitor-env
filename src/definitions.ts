export interface EnvPlugin {
  getKey(options: { key: string }): Promise<{ value: string }>;
}
