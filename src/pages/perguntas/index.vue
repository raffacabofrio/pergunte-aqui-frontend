<template>
  <v-layout column justify-center align-left>
    <v-alert type="info" :dismissible="true">Buscando por "Goku"</v-alert>

    <div class="float-left">
      <Card
        v-for="q in questions"
        :key="q.id"
        :title="q.text"
        :userName="q.user"
        :date="q.creationDate"
        :totalLikes="q.totalLikes"
        :totalAnswers="q.totalAnswers"
        class="card-margin"
      />
    </div>

    <Form />
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
  components: {
    Card,
    Form,
  },
  data() {
    return {
      questions: [],
    }
  },
  async mounted() {
    this.questions = await this.$qa.getQuestions()
  },
}
</script>
