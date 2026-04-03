import liff from '@line/liff';
import { initLiff } from '@/liff';
import { useOruga } from '@oruga-ui/oruga-next';
import { defineComponent, ref, watch, onMounted } from 'vue';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const oruga = useOruga();
    const isLogin = ref(false);
    const isClient = ref(false);
    const message = ref<string>('');
    const notes = ref<string[]>([]);
    const userData = ref<{ userId: string | null; pictureUrl: string | null }>({
      userId: null,
      pictureUrl: null,
    });

    function showNotification({ message: msg, type }: { message: string; type: string }) {
      oruga.notification.open({
        message: msg,
        position: 'bottom-right',
        variant: type,
        closable: true,
      });
    }

    function loadLocalStorage(userId: string | null) {
      if (!userId) return;
      const res = localStorage.getItem(`notes-${userId}`);
      if (!res) return;
      const notesList = JSON.parse(res);
      if (notesList != null) notes.value = notesList;
    }

    watch(notes, (newNotes) => {
      if (Array.isArray(newNotes)) {
        localStorage.setItem(`notes-${userData.value.userId}`, JSON.stringify(newNotes));
      }
    });

    onMounted(async () => {
      await initLiff();
      isLogin.value = liff.isLoggedIn();
      if (isLogin.value) {
        const profile = await liff.getProfile();
        userData.value = { userId: profile.userId, pictureUrl: profile.pictureUrl ?? null };
        loadLocalStorage(profile.userId);
        isClient.value = liff.isInClient();
      }
    });

    function logout() {
      liff.logout();
      window.location.reload();
    }

    function openAnother() {
      liff.openWindow({ url: 'https://www.berviantoleo.my.id', external: true });
    }

    function getAccessToken() {
      alert(liff.getAccessToken());
    }

    function addNote() {
      if (!message.value) return;
      notes.value.push(message.value);
      message.value = '';
    }

    function deleteNote(index: number) {
      notes.value.splice(index, 1);
    }

    function submit(index: number) {
      const loadingComponent = oruga.loading.open({});
      liff
        .sendMessages([{ type: 'text', text: notes.value[index] }])
        .then(() => {
          loadingComponent.close();
          showNotification({ message: 'Success Send Message', type: 'success' });
        })
        .catch((err) => {
          loadingComponent.close();
          showNotification({ message: `Can't Send Message! Error: ${err}`, type: 'danger' });
        });
    }

    return {
      isLogin, isClient, message, notes, userData,
      logout, openAnother, getAccessToken, addNote, deleteNote, submit,
    };
  },
});
