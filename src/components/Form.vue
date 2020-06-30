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
          <v-btn color="primary" @click="add" :disabled="text.length < 20" :loading="loading">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn @click="showModal" color="pink" dark fixed bottom right fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-snackbar v-model="snackbar" :bottom="true" color="success" timeout="3000">
      Inserção efetuada com sucesso.

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          Ok
        </v-btn>
      </template>
    </v-snackbar>
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
    onAdd: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    snackbar: false,
    title: '',
    text: '',
    loading: false,
  }),
  methods: {
    showModal() {
      this.dialog = !this.dialog
    },
    async add() {
      try {
        var userName = this.$user.getName()

        if (!userName) {
          alert('Ocorreu um erro. Por favor volte para tela inicial e informe seu nome.')
          return
        }
        this.loading = true
        await this.onAdd(userName, this.text) // onAdd prop
        this.loading = false
        this.dialog = false
        this.text = ''
        this.snackbar = true
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
