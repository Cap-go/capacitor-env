<br />
 <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin"> ➡️ Get Instant updates for your App with Capgo 🚀</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin"> Fix your annoying bug now, Hire a Capacitor expert 💪</a></h2>
</div>
<h3 align="center">Capacitor Plugins</h3>
<br />
<p align="center">
  <a href="https://github.com/Cap-go/capacitor-plugins"><img src="https://img.shields.io/maintenance/yes/2024?style=flat-square" /></a>
  <a href="https://github.com/Cap-go/capacitor-plugins/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/Cap-go/capacitor-plugins/ci.yml?branch=main&style=flat-square" /></a>
  <a href="https://github.com/Cap-go"><img src="https://img.shields.io/badge/part%20of-capgo-%234f46e5?style=flat-square" /></a>
  <a href="https://turborepo.org/"><img src="https://img.shields.io/badge/maintained%20with-turborepo-%237f6ab2?style=flat-square" /></a>
</p>

## Maintainers

| Maintainer | GitHub                                    | Social                                        |
| ---------- | ----------------------------------------- | --------------------------------------------- |
| Martin Donadieu | [riderx](https://github.com/riderx) | [@martindonadieu](https://twitter.com/martindonadieu) |
| Michael| [WcaleNieWolny](https://github.com/WcaleNieWolny) | ****** |

## Sponsors

This is an open source project.
It can grow thanks to the support by these awesome people.
If you'd like to join them, please read more [here](https://github.com/sponsors/Cap-go).

<!-- <p align="center">
  <a href="https://cdn.jsdelivr.net/gh/Cap-go/static/images/sponsors/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/Cap-go/static/images/sponsors/sponsors.svg" />
  </a>
</p> -->

## Installation

Each plugin has its own installation instructions.
Click on the name of the desired plugin under the [`Plugins`](#plugins) section to get to the installation guide.

## Plugins

| Name                                                                    | Package                                                   | Version                                                                                                                                                                                                                              | Downloads                                                                                                                                                                                                          |
| ----------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

## Changelogs

Each plugin has its own `CHANGELOG.md` file which contains information about version changes.
Click on the name of the desired plugin under the [`Plugins`](#plugins) section to get to the plugin folder.

## Breaking Changes

Each plugin has its own `BREAKING.md` file which contains information about breaking changes.
Click on the name of the desired plugin under the [`Plugins`](#plugins) section to get to the plugin folder.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Adding new plugin

```shell
cd packages
npm init @capacitor/plugin@latest
# Package name should be like: @capgo/plugin-name
directory name should be like: plugin-name
Package ID should be like: app.capgo.plugins.plugin_name
Class name should be like: PluginName
Repo URL should be like: https://github.com/Cap-go/capacitor-plugins
Author name should be like: Capgo <support@capgo.app>
License should be like: MIT
Description should be like: Plugin for plugin_name to do something
```

## License

Each plugin has its own `LICENSE` file which contains license information.
Click on the name of the desired plugin under the [`Plugins`](#plugins) section to get to the plugin folder.


## Credits

Thanks to [@robin_genz](https://twitter.com/robin_genz) for the monorepo setup he did in the original [Capawesome](https://github.com/capawesome-team/capacitor-plugins) project.
