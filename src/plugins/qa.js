import Vue from 'vue'
import axios from 'axios'

class qa {
  constructor() {
    this.httpClient = axios.create({
      baseURL: process.env.qaApiBasePath,
    })
  }

  async getQuestions(search = '') {
    var url = '/api/QA/questions'
    if (search) url = url + '?search=' + search

    const res = await this.httpClient.get(url)

    return res.data
  }

  async addQuestion(user, text) {
    var params = {
      user,
      text,
    }
    return await this.httpClient.post('/api/QA/addquestion', params)
  }

  async addQuestion(user, text) {
    var payload = {
      user,
      text,
    }
    return await this.httpClient.post('/api/QA/addquestion', payload)
  }
}

Vue.prototype.$qa = new qa()
