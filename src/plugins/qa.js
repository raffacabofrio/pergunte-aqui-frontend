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

    if (res.data.error === true) this.throwMktPlaceApiError(res)

    return res.data
  }

  throwError(res) {
    let myError = new TypeError(`${res.status} - ${res.message}`)
    myError.errorCode = res.errorCode
    myError.status = res.status
    console.error('Error: ', myError)
    throw myError
  }
}

Vue.prototype.$qa = new qa()
