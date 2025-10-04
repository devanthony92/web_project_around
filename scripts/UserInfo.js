export default class UserInfo {
  constructor({ name, about }) {
    this._name = name;
    this._about = about;
    this._input_name = document.querySelector("#inputEditName");
    this._input_about = document.querySelector("#inputEditAbout");
    this.getUserInfo();
  }
  getUserInfo() {
    this._name_profile = document.querySelector("#profileName");
    this._about_profile = document.querySelector("#profileProfesion");
    this._input_name.value = this._name_profile.textContent.trim();
    this._input_about.value = this._about_profile.textContent.trim();
  }
  setUserInfo() {
    console.log(this._name);
    if (this._name != "") {
      this._name_profile.textContent = this._name;
    }
    if (this._about != "") {
      this._about_profile.textContent = this._about;
    }
  }
}
