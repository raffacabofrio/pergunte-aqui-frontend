<template>
  <v-layout column justify-center align-left>
    <v-alert v-model="showSearchAlert" v-if="searchText" type="info" :dismissible="true">
      Buscando por "{{ searchText }}"
    </v-alert>

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

    <Form :onAdd="onAdd" />
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
      searchText: '',
      showSearchAlert: true,
    }
  },
  async mounted() {
    var search = this.$route.query.search
    this.questions = await this.$qa.getQuestions(search)
    this.searchText = search
  },
  watch: {
    showSearchAlert(val) {
      if (!val) {
        this.$nuxt.$loading.start()
        location.href = '/perguntas'
      }
    },
  },
  methods: {
    async onAdd(user, text) {
      await this.$qa.addQuestion(user, text)
    },
  },
}
</script>
