import { NativeModules } from "react-native";
import { MetricsService } from "@aerogearservices/core";

const RNMobileCore = NativeModules.MobileCore;

// class RNMetricsService extends MetricsService {
class RNMetricsService extends MetricsService {

  async sendAppAndDeviceMetrics() {
    const metrics = await RNMobileCore.getDeviceMetrics()
    return super.sendAppAndDeviceMetrics(metrics);
  }
}

export default RNMetricsService;
