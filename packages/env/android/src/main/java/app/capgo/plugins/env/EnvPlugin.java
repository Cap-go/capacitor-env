package app.capgo.plugins.env;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Env")
public class EnvPlugin extends Plugin {

    @PluginMethod
    public void getKey(PluginCall call) {
        String key = call.getString("key");

        JSObject ret = new JSObject();
        ret.put("value",  this.getConfig().getString("publicKey", ""));
        call.resolve(ret);
    }
}
