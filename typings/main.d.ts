import { ServiceConfiguration } from "@aerogearservices/core";

declare class RNMetricsService {

  constructor(configuration: ServiceConfiguration);
  sendAppAndDeviceMetrics(): Promise<any>;

}