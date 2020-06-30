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

  async getQuestion(id) {
    var url = `/api/QA/question/${id}`
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

  async getAnswers(questionId) {
    var url = `/api/QA/question/${questionId}/answers`
    const res = await this.httpClient.get(url)
    return res.data
  }

  async addAnswer(user, text, questionId) {
    var payload = {
      user,
      text,
      questionId,
    }
    return await this.httpClient.post('/api/QA/addAnswer', payload)
  }
}

Vue.prototype.$qa = new qa()
