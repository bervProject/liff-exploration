import { Component, Vue, Watch } from 'vue-property-decorator';
import liff from '@line/liff';

@Component({
  name: 'home',
})
export default class Home extends Vue {
  protected isLogin = false

  protected userData: any = {
    userId: null,
    pictureUrl: null,
  }

  protected isClient = false

  protected message: any = null

  protected notes: any[] = []

  @Watch('notes')
  public onNotesChanged() {
    const { userId } = this.userData;
    localStorage.setItem(`notes-${userId}`, JSON.stringify(this.notes));
  }

  public created() {
    this.isLogin = liff.isLoggedIn();
    if (this.isLogin) {
      liff.getProfile().then((value: any) => {
        this.userData = value;
        this.loadLocalStorage(this.userData.userId);
      });
      this.isClient = liff.isInClient();
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
      url: 'https://www.berviantoleo.my.id',
      external: true,
    });
  }

  protected getAccessToken() {
    const accessToken = liff.getAccessToken();
    alert(accessToken);
    // console.log(accessToken);
  }

  protected addNote() {
    if (!this.message) {
      return;
    }
    this.notes.push(this.message);
    this.message = '';
  }

  protected deleteNote(index: any) {
    this.notes.splice(index, 1);
  }

  protected submit(index: any) {
    const message = this.notes[index];
    const loadingComponent = this.$buefy.loading.open({
      container: null,
    });
    liff
      .sendMessages([
        {
          type: 'text',
          text: message,
        },
      ])
      .then(() => {
        loadingComponent.close();
        this.$buefy.notification.open({
          message: 'Success Send Message',
          type: 'is-success',
        });
      })
      .catch((err: any) => {
        loadingComponent.close();
        this.$buefy.notification.open({
          message: `Can't Send Message! Error: ${err}`,
          type: 'is-danger',
        });
      });
  }

  protected loadLocalStorage(userId: string) {
    const res = localStorage.getItem(`notes-${userId}`);
    if (!res) {
      return;
    }
    const notesList = JSON.parse(res);
    if (notesList == null) {
      return;
    }
    this.notes = notesList;
  }
}
