//
//  RNUMConfigure.m
//  medusa
//
//  Created by 赵琳阳 on 2020/7/14.
//

#import "RNUMConfigure.h"

@implementation RNUMConfigure

+ (void)initWithAppkey:(NSString *)appkey channel:(NSString *)channel
{
  SEL sel = NSSelectorFromString(@"setWraperType:wrapperVersion:");
  if ([UMConfigure respondsToSelector:sel]) {
    [UMConfigure performSelector:sel withObject:@"react-native" withObject:@"2.0"];
  }
  [UMConfigure initWithAppkey:appkey channel:channel];
}
@end
