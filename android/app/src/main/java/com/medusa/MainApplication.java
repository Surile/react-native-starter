package com.medusa;

import android.app.Application;
import android.content.Context;
import android.os.Handler;
import android.util.Log;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

import com.umeng.commonsdk.UMConfigure;
// import com.umeng.message.IUmengRegisterCallback;
// import com.umeng.message.MsgConstant;
// import com.umeng.message.PushAgent;
// import com.umeng.message.UTrack;
// import com.umeng.message.UmengMessageHandler;
// import com.umeng.message.UmengNotificationClickHandler;
// import com.umeng.message.entity.UMessage;
import com.medusa.umeng.DplusReactPackage;
import com.medusa.umeng.RNUMConfigure;
// import com.medusa.umeng.PushApplication;
import com.umeng.commonsdk.UMConfigure;
import com.umeng.message.PushAgent;
import com.umeng.message.IUmengRegisterCallback;
import com.umeng.socialize.PlatformConfig;



public class MainApplication extends Application implements ReactApplication {

  private static final String TAG = MainApplication.class.getName();
  private Handler handler;

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          packages.add(new DplusReactPackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
    /**
    * 设置组件化的Log开关
    * 参数: boolean 默认为false，如需查看LOG设置为true
    */
    UMConfigure.setLogEnabled(true);

    UMConfigure.init(this, "5f1681e2dbc2ec08135766e4", "Umeng", UMConfigure.DEVICE_TYPE_PHONE, "a68dc5f74040fea6bf6888da9d2dcf12");

    //获取消息推送代理示例
    PushAgent mPushAgent = PushAgent.getInstance(this);
    //mPushAgent.setNotificationPlaySound(MsgConstant.NOTIFICATION_PLAY_SERVER); //服务端控制声音


    //注册推送服务，每次调用register方法都会回调该接口
    mPushAgent.register(new IUmengRegisterCallback() {

        @Override
        public void onSuccess(String deviceToken) {
            //注册成功会返回deviceToken deviceToken是推送消息的唯一标志
            Log.i(TAG,"注册成功：deviceToken：-------->  " + deviceToken);
        }

        @Override
        public void onFailure(String s, String s1) {
            Log.e(TAG,"注册失败：-------->  " + "s:" + s + ",s1:" + s1);
        }
    });


    /**
      * 初始化厂商通道
      */
    //小米通道
    // MiPushRegistar.register(this, "填写您在小米后台APP对应的xiaomi id", "填写您在小米后台APP对应的xiaomi key");
    // //华为通道，注意华为通道的初始化参数在minifest中配置
    // HuaWeiRegister.register(this);
    // //魅族通道
    // MeizuRegister.register(this, "填写您在魅族后台APP对应的app id", "填写您在魅族后台APP对应的app key");
    // //OPPO通道
    // OppoRegister.register(this, "填写您在OPPO后台APP对应的app key", "填写您在魅族后台APP对应的app secret");
    // //VIVO 通道，注意VIVO通道的初始化参数在minifest中配置
    // VivoRegister.register(this);
  }

  

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.medusa.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
  {
    PlatformConfig.setWeixin("wxdc1e388c3822c80b", "3baf1193c85774b3fd9d18447d76cab0");
    PlatformConfig.setSinaWeibo("3921700954", "04b48b094faeb16683c32669824ebdad", "http://sns.whalecloud.com");
    PlatformConfig.setQQZone("10042446842", "c7394704798a158208a74ab60104f0ba");
    // PlatformConfig.setQQFileProvider("com.tencent.sample2.fileprovider");
  }
}
