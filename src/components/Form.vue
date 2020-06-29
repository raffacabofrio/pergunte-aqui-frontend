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
                <v-textarea name="input-7-1" filled :label="title" rows="2"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*campo obrigatório</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Salvar</v-btn>
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
  }),
  methods: {
    showModal() {
      this.dialog = !this.dialog
    },
  },
  mounted: async function () {
    this.title = this.type == 'question' ? 'Escreva sua pergunta' : 'Escreva sua resposta'
  },
}
</script>
