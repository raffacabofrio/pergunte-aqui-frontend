<template>
  <v-layout column justify-center align-left>
    <h1 class="display-3">{{ question.text }}</h1>

    <v-alert v-if="answers.length == 0" type="info" style="margin-top: 20px !important;">
      Nenhuma resposta encontrada. Seja o primeiro a responder. Clique no botão + abaixo. ;)
    </v-alert>

    <div class="float-left" style="margin-top: 20px !important;">
      <Card
        v-for="a in answers"
        :key="a.id"
        :title="a.text"
        :userName="a.user"
        :date="a.creationDate"
        :totalLikes="a.totalLikes"
        class="card-margin"
        type="answer"
        :id="a.id"
        :onLike="onLike"
      />
    </div>

    <Form type="answer" :onAdd="onAdd" />
  </v-layout>
</template>

<style scoped>
.card-margin {
  margin-right: 10px !important;
  margin-bottom: 10px !important;
}
</style>

<script>
import Card from '~/components/Card.vue'
import Form from '~/components/Form.vue'

export default {
  data() {
    return {
      question: {},
      answers: [],
    }
  },
  components: {
    Card,
    Form,
  },
  async mounted() {
    var questionId = this.$route.params.questionId
    this.question = await this.$qa.getQuestion(questionId)
    this.answers = await this.$qa.getAnswers(questionId)
  },
  methods: {
    async onAdd(user, text) {
      var questionId = this.$route.params.questionId
      await this.$qa.addAnswer(user, text, questionId)
      await this.reloadAnswers()
    },
    async onLike(user, answerId) {
      await this.$qa.addLike(user, null, answerId)
      await this.reloadAnswers()
    },
    async reloadAnswers() {
      //todo: push on store for cache and offline experience.
      this.answers = await this.$qa.getAnswers(this.question.id)
    },
  },
}
</script>
