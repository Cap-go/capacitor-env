export interface LiveUpdatesPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
