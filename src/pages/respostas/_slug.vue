<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">Parcerias</v-card-title>
        <v-card-text style="text-align: center;">
          <div v-if="pageState == 'loading'">
            <h2 class="sc-green-congrats">
              <v-icon class="sc-green-congrats"> fas fa-circle-notch fa-spin</v-icon>Carregando ...
            </h2>
          </div>

          <div v-if="pageState == 'ready'">
            <img :src="partner.logoUrl" class="partner-logo" />
            <br />
            <h2>{{ partner.name }}</h2>
            <p>{{ partner.description }}</p>
            <br />
            <v-btn color="primary" to="/redeem"> Resgatar</v-btn>
          </div>

          <div v-if="pageState == 'error'">
            <h2><i class="fas fa-bug"></i> Ocorreu um erro :/</h2>
            <p>
              Por favor tente novamente em alguns minutos, ou entre em contato com nosso
              <a href="https://sharecarebr.zendesk.com/hc/pt-br" target="_blank">atendimento</a>.
            </p>
            <p>Detalhes: {{ lastError }}</p>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.partner-logo {
  width: 50%;
  min-width: 80px;
  max-width: 300px;
}
</style>

<script>
export default {
  data() {
    return {
      pageState: 'loading', // loading, ready, error
      lastError: '',
      partners: [],
      partner: {},
    }
  },
  async mounted() {
    // try {
    //   await this.getPartners()
    //   await this.getPartner()
    //   this.pageState = 'ready'
    // } catch (err) {
    //   console.log('error: ', err)
    //   this.pageState = 'error'
    //   this.lastError = err.message
    // }
  },
  methods: {},
}
</script>
