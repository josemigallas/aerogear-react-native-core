import { NativeModules } from "react-native";
import { MetricsService } from "@aerogearservices/core";

const RNMobileCore = NativeModules.MobileCore;

class RNMetricsService extends MetricsService {

  async sendAppAndDeviceMetrics() {
    console.log("getting device metrics..");
    const deviceMetrics = await RNMobileCore.getDeviceMetrics();
    console.log(deviceMetrics);
    console.log("getting app metrics..");
    const appMetrics = await RNMobileCore.getAppMetrics();
    console.log(appMetrics);

    // What platform? Android/iOS or RN-Android, RN-iOS, Cordova-Android...

    // What SDK? Core or Cordova/RN-Core?
    appMetrics.sdkVersion = "0.0.1";

    const metrics = {
      clientId: super.getClientId(),
      timestamp: new Date().getTime(),
      data: {
        app: appMetrics,
        device: deviceMetrics
      }
    }

    console.log(this);
    console.log(metrics);

    return super.sendAppAndDeviceMetrics(metrics);
  }
}

export default RNMetricsService;
