import liff from '@line/liff';
import { useOruga } from '@oruga-ui/oruga-next';
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'homePage',
  setup() {
    const oruga = useOruga();
    function showNotification({ message, type }: {message: string, type: string}) {
      oruga.notification.open({
        message,
        position: 'bottom-right',
        variant: type,
        closable: true,
      });
    }
    const notes = ref<string[]>([]);
    const userData = ref({
      userId: null,
      pictureUrl: null,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    watch(notes, async (newNotes, _) => {
      if (Array.isArray(newNotes)) {
        const { userId } = userData.value;
        localStorage.setItem(`notes-${userId}`, JSON.stringify(newNotes));
      }
    });
    return {
      notes,
      userData,
      showNotification,
      oruga,
    };
  },
  data() : {
    isLogin: boolean,
    isClient: boolean,
    message: string | null,
    } {
    return {
      isLogin: false,
      isClient: false,
      message: null,
    };
  },
  methods: {
    created() {
      this.isLogin = liff.isLoggedIn();
      if (this.isLogin) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        liff.getProfile().then((value: any) => {
          this.userData = value;
          this.loadLocalStorage(this.userData.userId);
        });
        this.isClient = liff.isInClient();
      }
    },
    login() {
      liff.login();
    },
    logout() {
      liff.logout();
      window.location.reload();
    },
    openAnother() {
      liff.openWindow({
        url: 'https://www.berviantoleo.my.id',
        external: true,
      });
    },
    getAccessToken() {
      const accessToken = liff.getAccessToken();
      alert(accessToken);
      // console.log(accessToken);
    },
    addNote() {
      if (!this.message) {
        return;
      }
      this.notes.push(this.message);
      this.message = '';
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deleteNote(index: any) {
      this.notes.splice(index, 1);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    submit(index: any) {
      const message = this.notes[index];
      const loadingComponent = this.oruga.loading.open({});
      liff
        .sendMessages([
          {
            type: 'text',
            text: message,
          },
        ])
        .then(() => {
          loadingComponent.close({});
          this.showNotification({
            message: 'Success Send Message',
            type: 'success',
          });
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((err: any) => {
          loadingComponent.close({});
          this.showNotification({
            message: `Can't Send Message! Error: ${err}`,
            type: 'danger',
          });
        });
    },
    loadLocalStorage(userId: string | null) {
      if (!userId) {
        return;
      }
      const res = localStorage.getItem(`notes-${userId}`);
      if (!res) {
        return;
      }
      const notesList = JSON.parse(res);
      if (notesList == null) {
        return;
      }
      this.notes = notesList;
    },
  },
});
