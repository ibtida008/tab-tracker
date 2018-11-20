<template>
  <div class="register">
    <h1>Register</h1>
    <hr>
    <input type="email" name="email" placeholder="Email Address" v-model="email">
    <input type="password" name="password" placeholder="Password" v-model="password">
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
