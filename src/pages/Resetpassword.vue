<template>
  <div class="col-md-6 resetpassword">
    <h2>Forgot Password?</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          v-model="email"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && !email }"
        />
        <div v-show="submitted && !email" class="invalid-feedback">
          Email is required
        </div>
      </div>      
      <div class="form-group">
        <button class="btn btn-primary">
          Reset Password
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useRouter } from 'vue-router'
import AuthService from "@/services/auth"

export default defineComponent({
  name: "resetpassword",
  setup() {
    const router = useRouter()

    const email = ref()
    const submitted = ref(false)

    const handleSubmit = () => {
      submitted.value = true
      
      const data = {
        "email": email.value,
      }

      const response = AuthService.resetpassword(data)
      
      // if(response) {
      //   router.push('/login')
      // }     
    }

    return {
      email,
      submitted,
      handleSubmit
    }
  }  
});
</script>

<style scoped>
@import '../assets/sytles/auth/Resetpassword.css';
</style>

