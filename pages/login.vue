<template>
<div>
	<form @submit.prevent="onLogin">
		<input type="text" placeholder="email" v-model="form.email"><br>
		<input type="password" placeholder="password" v-model="form.password"><br>
		<button type="submit">Login</button>	
	</form>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    	form:{},
    }
  },
  methods: {
  	onLogin: function(){
  		this.$auth.loginWith('local', {
  			data: {
			    email: this.form.email,
			    password: this.form.password
  			}
		});
		// this.$router.push({path: '/'});
  	}
  }
}
</script>

<style lang="css" scoped>
</style>