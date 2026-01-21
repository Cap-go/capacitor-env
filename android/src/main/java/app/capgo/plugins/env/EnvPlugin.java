package app.capgo.plugins.env;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Env")
public class EnvPlugin extends Plugin {

    private final String pluginVersion = "8.1.6";

    @PluginMethod
    public void getKey(PluginCall call) {
        String key = call.getString("key");

        JSObject ret = new JSObject();
        ret.put("value", this.getConfig().getString(key, ""));
        call.resolve(ret);
    }

    @PluginMethod
    public void getPluginVersion(final PluginCall call) {
        try {
            final JSObject ret = new JSObject();
            ret.put("version", this.pluginVersion);
            call.resolve(ret);
        } catch (final Exception e) {
            call.reject("Could not get plugin version", e);
        }
    }
}
