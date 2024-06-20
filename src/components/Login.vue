  <template>
    <div class="auth-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label>Username:</label>
        <input type="text" id="username" required placeholder="Enter your username" v-model="username">

        <label>Password:</label>
        <input type="password" id="password" required placeholder="Enter your password" v-model="password">

        <p>you are {{username}}, born in {{password}}</p>
        <button type="submit">Login</button>
        <p v-if="errormessage" class="error">{{ errormessage }}</p>
    </form>
    </div>
  </template>

<script>
import wish from './wish.vue';
export default {
  name: 'Login',
  components: {
    wish
  },
  data(){
    return{
      username:'',
      password:'',
      errormessage:''
    };
  },
  methods:
  {
    login(){
      const validusername= 'abhi';
      const validpassword= '061014';
      if(this.username===validusername && this.password===validpassword){
        this.$router.push({name:'wish', params: { username: this.username}});
      }else{
        this.errormessage='invalid username or password';
      }
    }
  }
};

</script>

<style scoped>
.error {
  color: red;
  margin-top: 1rem;
}
</style>
