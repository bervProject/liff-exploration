import { defineComponent, ref, onMounted } from 'vue';
import liff from '@line/liff';
import { initLiff } from '@/liff';

export default defineComponent({
  name: 'MyNavBar',
  setup() {
    const isLogin = ref(false);
    const activator = ref(false);
    const userData = ref({ userId: '', displayName: '' });

    onMounted(async () => {
      await initLiff();
      isLogin.value = liff.isLoggedIn();
      if (isLogin.value) {
        const profile = await liff.getProfile();
        userData.value = { userId: profile.userId, displayName: profile.displayName };
      }
    });

    function makeBurger() {
      activator.value = !activator.value;
    }

    async function login() {
      await initLiff();
      liff.login();
    }

    function logout() {
      liff.logout();
      window.location.reload();
    }

    return { isLogin, activator, userData, makeBurger, login, logout };
  },
});
