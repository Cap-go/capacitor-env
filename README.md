# @capgo/capacitor-env
 <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin_env"> ➡️ Get Instant updates for your App with Capgo</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin_env"> Missing a feature? We’ll build the plugin for you 💪</a></h2>
</div>

Set Env var in Capacitor config and read them at runtime, This plugin is helpful for multitenant app or white label, when you want to keep the same code but some config have to differ.

## Documentation

The most complete doc is available here: https://capgo.app/docs/plugins/env/

## Compatibility

| Plugin version | Capacitor compatibility | Maintained |
| -------------- | ----------------------- | ---------- |
| v8.\*.\*       | v8.\*.\*                | ✅          |
| v7.\*.\*       | v7.\*.\*                | On demand   |
| v6.\*.\*       | v6.\*.\*                | ❌          |
| v5.\*.\*       | v5.\*.\*                | ❌          |

> **Note:** The major version of this plugin follows the major version of Capacitor. Use the version that matches your Capacitor installation (e.g., plugin v8 for Capacitor 8). Only the latest major version is actively maintained.

## Install

```bash
npm install @capgo/capacitor-env
npx cap sync
```

## API

<docgen-index>

* [`getKey(...)`](#getkey)
* [`getPluginVersion()`](#getpluginversion)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Capacitor plugin for accessing environment variables in native code.

This plugin provides a secure way to access environment variables that were
compiled into the native application at build time. Environment variables
can be configured during the build process and accessed at runtime without
exposing them in the web bundle.

### getKey(...)

```typescript
getKey(options: { key: string; }) => Promise<{ value: string; }>
```

Retrieves the value of a specific environment variable by key.

This method fetches environment variables that were set during the native
build process. The variables must be configured in the native project
before they can be accessed at runtime.

| Param         | Type                          | Description                                                    |
| ------------- | ----------------------------- | -------------------------------------------------------------- |
| **`options`** | <code>{ key: string; }</code> | - Configuration object containing the environment variable key |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### getPluginVersion()

```typescript
getPluginVersion() => Promise<{ version: string; }>
```

Get the version of the native Capacitor plugin.

This method returns the current version of the capacitor-env plugin
that is installed in the native application. Useful for debugging
and ensuring compatibility between the web and native components.

**Returns:** <code>Promise&lt;{ version: string; }&gt;</code>

--------------------

</docgen-api>
