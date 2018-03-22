
#import "MobileCore.h"
@import UIKit;

@implementation MobileCore

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getDeviceMetrics:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSDictionary *deviceMetrics = @{
                                    @"platform": @"ios",
                                    @"platformVersion": [[UIDevice currentDevice] systemVersion],
                                    @"device": [[UIDevice currentDevice] model]
                                    };

    resolve(deviceMetrics);
}

@end
