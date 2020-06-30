<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="8">
                <v-textarea v-model="text" name="input-7-1" filled :label="title" rows="2" max></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*campo obrigatório mínimo 20 letras</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secundary" @click="dialog = false">Cancelar</v-btn>
          <v-btn color="primary" @click="add" :disabled="text.length < 20">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn @click="showModal" color="pink" dark fixed bottom right fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'Form',
  props: {
    type: {
      type: String,
      default: 'question',
    },
  },
  data: () => ({
    dialog: false,
    title: '',
    text: '',
  }),
  methods: {
    showModal() {
      this.dialog = !this.dialog
    },
    async add() {
      try {
        var userName = this.$user.getName()
        await this.$qa.addQuestion(userName, this.text)
        this.dialog = false
        this.text = ''
      } catch (err) {
        var msg = err.response.data.messages[0]
        alert(msg)
      }
    },
  },
  mounted: async function () {
    this.title = this.type == 'question' ? 'Escreva sua pergunta' : 'Escreva sua resposta'
  },
}
</script>
