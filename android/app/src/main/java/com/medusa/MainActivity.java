package com.medusa;

import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.ReactActivity;

import com.umeng.analytics.MobclickAgent;
import com.umeng.socialize.UMShareAPI;
import com.medusa.umeng.ShareModule;
import com.medusa.umeng.PushModule;
import com.umeng.message.PushAgent;


public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      ShareModule.initSocialSDK(this);
      PushModule.initPushSDK(this);
      PushAgent.getInstance(this).onAppStart();
      MobclickAgent.setSessionContinueMillis(1000);
  }

  @Override
  public void onResume(){
    super.onResume();
    android.util.Log.e("xxxxxx","onResume=");
    MobclickAgent.onResume(this);
  }

  @Override
  protected void onPause() {
      super.onPause();
      android.util.Log.e("xxxxxx","onPause=");
      MobclickAgent.onPause(this);
  }

  @Override
  protected void onDestroy() {
      super.onDestroy();
      //MobclickAgent.onKillProcess(this);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "medusa";
  }

  @Override
  public void onActivityResult(int requestCode, int resultCode, Intent data) {
      super.onActivityResult(requestCode, resultCode, data);
      UMShareAPI.get(this).onActivityResult(requestCode,resultCode,data);
  }
}
