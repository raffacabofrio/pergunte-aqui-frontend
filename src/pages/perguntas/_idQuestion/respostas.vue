<template>
  <v-layout column justify-center align-left>
    <h1 class="display3">Respostas para a pergunta "Quem é mais forte? Goku ou Superman?"</h1>
    <div class="float-left">
      <Card
        v-for="i in 10"
        :key="i"
        title="Resposta da pergunta."
        userName="João Maia"
        date="01/01/2018"
        :totalLikes="5"
        class="card-margin"
        type="answer"
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
}
</script>
