import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(EnvPlugin)
public class EnvPlugin: CAPPlugin, CAPBridgedPlugin {
    private let PLUGIN_VERSION: String = "7.0.12"
    public let identifier = "EnvPlugin"
    public let jsName = "Env"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getKey", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getPluginVersion", returnType: CAPPluginReturnPromise)
    ]

    @objc func getKey(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""
        call.resolve([
            "value": getConfig().getString(key, "")
        ])
    }

    @objc func getPluginVersion(_ call: CAPPluginCall) {
        call.resolve(["version": self.PLUGIN_VERSION])
    }

}
