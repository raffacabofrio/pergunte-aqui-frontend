<template>
  <v-card class="mx-auto" max-width="560" min-height="200" outlined style="float: left !important;">
    <v-list-item three-line>
      <v-list-item-content>
        <p class="display-1">{{ title }}</p>
        <v-list-item-subtitle
          >{{ type == 'question' ? 'Perguntado por' : 'Respondido por' }} {{ userName }} em
          {{ date | date }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-actions class="d-flex justify-center">
      <v-badge :content="totalLikes" :value="totalLikes" color="green" overlap>
        <v-btn icon @click="like" :loading="likeLoading"><v-icon large>mdi-thumb-up</v-icon></v-btn>
      </v-badge>

      <v-flex xs3 v-if="type == 'question'" />

      <v-badge :content="totalAnswers" :value="totalAnswers" color="green" overlap v-if="type == 'question'">
        <v-btn icon :to="`/perguntas/${id}/respostas`"><v-icon large>mdi-message</v-icon></v-btn>
      </v-badge>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      likeLoading: false,
    }
  },
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
      default: '???',
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
    // id can be questionId or answerId, depending on type.
    id: {
      type: String,
    },
    onLike: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async like() {
      try {
        var userName = this.$user.getName()

        if (!userName) {
          alert('Ocorreu um erro. Por favor volte para tela inicial e informe seu nome.')
          return
        }

        this.likeLoading = true
        await this.onLike(userName, this.id) // onLike prop
        this.likeLoading = false
      } catch (err) {
        this.likeLoading = false
        var msg = err.response.data.messages[0]
        alert(msg)
      }
    },
  },
}
</script>
