
#import "MobileCore.h"

@implementation MobileCore

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getDeviceMetrics:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSDictionary *deviceMetrics = @{
                                    @"platform": @"ios",
                                    @"platformVersion": @"1"
                                    };

    resolve(deviceMetrics);
}

@end
