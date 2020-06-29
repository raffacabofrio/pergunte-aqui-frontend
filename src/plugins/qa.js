import Vue from 'vue'
import axios from 'axios'

class qa {
  constructor() {
    // todo: set axios base path.
    // todo: get base path from env file.
  }

  async getQuestions(search = '') {
    var url = 'http://localhost:33216/api/QA/questions'
    const res = await axios.get(url)
    return res.data
  }
}

Vue.prototype.$qa = new qa()
