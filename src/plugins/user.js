import Vue from 'vue'

class User {
  constructor() {}

  setName(name) {
    sessionStorage.setItem('userName', name)
  }

  getName() {
    return sessionStorage.getItem('userName')
  }
}

Vue.prototype.$user = new User()
