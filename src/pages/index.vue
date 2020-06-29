<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <v-img src="logo.png"></v-img>
        <center>
          <v-text-field
            label="Nome"
            filled
            style="width: 50%;"
            v-model="userName"
            @keyup="checkMayEnter"
          ></v-text-field>
        </center>
        <v-btn color="primary" @click="enter()" :disabled="!mayEnter"> Entrar </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      mayEnter: false,
    }
  },
  mounted() {
    this.userName = this.$user.getName()
    this.checkMayEnter()
  },
  methods: {
    checkMayEnter() {
      if (!this.userName) {
        this.mayEnter = false
        return
      }

      this.mayEnter = this.userName.length > 3 ? true : false
    },
    enter() {
      this.$user.setName(this.userName)
      this.$router.push('/perguntas')
    },
  },
}
</script>
