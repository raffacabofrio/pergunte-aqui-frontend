<template>
  <v-layout column justify-center align-left>
    <v-alert type="info" dismissible="true">Buscando por "Goku"</v-alert>

    <div class="float-left">
      <Card
        v-for="i in 10"
        :key="i"
        title="Quem é mais forte, goku ou superman?"
        userName="João Maia"
        date="01/01/2018"
        :totalLikes="5"
        :totalAnswers="3"
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
}
</script>
