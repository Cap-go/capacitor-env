/**
 * Capacitor plugin for accessing environment variables in native code.
 *
 * This plugin provides a secure way to access environment variables that were
 * compiled into the native application at build time. Environment variables
 * can be configured during the build process and accessed at runtime without
 * exposing them in the web bundle.
 */
export interface EnvPlugin {
  /**
   * Retrieves the value of a specific environment variable by key.
   *
   * This method fetches environment variables that were set during the native
   * build process. The variables must be configured in the native project
   * before they can be accessed at runtime.
   *
   * @param options - Configuration object containing the environment variable key
   * @param options.key - The name of the environment variable to retrieve
   * @returns A promise that resolves with an object containing the environment variable value
   *
   * @example
   * ```typescript
   * const result = await EnvPlugin.getKey({ key: 'API_URL' });
   * console.log(result.value); // 'https://api.example.com'
   * ```
   *
   * @example
   * ```typescript
   * // Retrieving multiple environment variables
   * const apiUrl = await EnvPlugin.getKey({ key: 'API_URL' });
   * const apiKey = await EnvPlugin.getKey({ key: 'API_KEY' });
   *
   * console.log('API URL:', apiUrl.value);
   * console.log('API Key:', apiKey.value);
   * ```
   */
  getKey(options: { key: string }): Promise<{ value: string }>;

  /**
   * Get the version of the native Capacitor plugin.
   *
   * This method returns the current version of the capacitor-env plugin
   * that is installed in the native application. Useful for debugging
   * and ensuring compatibility between the web and native components.
   *
   * @returns A promise that resolves with an object containing the plugin version string
   *
   * @example
   * ```typescript
   * const versionInfo = await EnvPlugin.getPluginVersion();
   * console.log('Plugin version:', versionInfo.version);
   * ```
   *
   * @throws An error if the plugin version cannot be retrieved
   */
  getPluginVersion(): Promise<{ version: string }>;
}
