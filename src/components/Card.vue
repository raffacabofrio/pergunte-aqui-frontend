<template>
  <v-card class="mx-auto" max-width="560" min-height="200" outlined style="float: left !important;">
    <v-list-item three-line>
      <v-list-item-content>
        <p class="display-1">{{ title }}</p>
        <v-list-item-subtitle
          >{{ type == 'question' ? 'Perguntado por' : 'Respondido por' }} {{ userName }} em
          {{ date }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-actions class="d-flex justify-center">
      <v-badge :content="totalLikes" :value="totalLikes" color="green" overlap>
        <v-btn icon><v-icon large>mdi-thumb-up</v-icon></v-btn>
      </v-badge>

      <v-flex xs3 v-if="type == 'question'" />

      <v-badge :content="totalAnswers" :value="totalAnswers" color="green" overlap v-if="type == 'question'">
        <v-btn icon to="/perguntas/123/respostas"><v-icon large>mdi-message</v-icon></v-btn>
      </v-badge>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Título da pergunta.',
    },
    userName: {
      type: String,
      default: 'Anônimo',
      required: true,
    },
    date: {
      type: String,
      required: true,
      default: '01/01/2020 19:00',
    },
    totalLikes: {
      type: Number,
      default: 0,
    },
    totalAnswers: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: 'question',
    },
  },
}
</script>
