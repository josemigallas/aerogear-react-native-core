import { ServiceConfiguration } from "aerogear-core";

declare class RNMetricsService {

  constructor(configuration: ServiceConfiguration);
  sendAppAndDeviceMetrics(): Promise<any>;

}