<template>
  <div class="col-md-6 login">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && !username }"
        />
        <div v-show="submitted && !username" class="invalid-feedback">
          Username is required
        </div>
      </div>
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
        <label htmlFor="password">Password</label>
        <router-link to="/resetpassword" class="btn btn-link forgot-password"
          >Forgot password?</router-link
        >
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !password }"
        />
        <div v-show="submitted && !password" class="invalid-feedback">
          Password is required
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
        <router-link to="/register" class="btn btn-link">Register</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { setAuthHeader } from "@/http-common";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import AuthService from "@/services/auth";

export default defineComponent({
  name: "login",
  setup() {
    const router = useRouter();

    const username = ref();
    const password = ref();
    const email = ref();
    const submitted = ref(false);

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    const handleSubmit = () => {
      submitted.value = true;

      const data = {
        username: username.value,
        email: email.value,
        password: password.value,
      };

      AuthService.login(data)
        .then((res) => {
          if (res.data.key) {
            setAuthHeader(res.data.key);
            router.push("/");
          }
          else alert("went something wrong");
        })
        .catch((err) => {
          alert("wrong information")
        });

      // if(response) {
      //   router.push('/')
      // }
    };

    return {
      username,
      password,
      email,
      submitted,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
@import "../assets/sytles/auth/Login.css";
</style>
