import Vue from 'vue';
import Components from 'vue-class-component';
import liff from '@line/liff';

@Components({
  name: 'MyNavBar',
})
export default class MyNavBar extends Vue {
  protected isLogin = false

  protected userData: any = {
    userId: null,
    displayName: null,
  }

  public mounted() {
    this.isLogin = liff.isLoggedIn();
    if (this.isLogin) {
      liff.getProfile().then((value) => {
        this.userData = value;
      });
    }
  }

  protected login() {
    liff.login();
  }

  protected logout() {
    liff.logout();
    window.location.reload();
  }

  protected openAnother() {
    liff.openWindow({
      url: 'https://line.me',
      external: true,
    });
  }

  protected getAccessToken() {
    const accessToken = liff.getAccessToken();
    alert(accessToken);
    // console.log(accessToken);
  }
}
