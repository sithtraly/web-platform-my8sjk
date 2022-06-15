export default class LoginView {
  static async html() {
    try {
      let res = await fetch(location.host + '/views/login/login.html');
      let html;
      if (res.ok) {
        html = await res.text();
      } else {
        console.log(res.statusText);
      }
      return html;
    } catch (e) {
      console.log(err);
    }
  }
}
