package org.aerogear.mobile.core;

import android.os.Build;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import org.json.JSONObject;

public class MobileCoreModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public MobileCoreModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "MobileCore";
  }

  @ReactMethod
  public void getDeviceMetrics(Promise promise) {
    try {
      final WritableMap map = Arguments.createMap();
      map.putString("platform", "android");
      map.putString("platformVersion", String.valueOf(Build.VERSION.SDK_INT));
      promise.resolve(map);

    } catch (Exception e) {
      promise.reject("GetDeviceMetricsError", e.getMessage());
    }

  }
}