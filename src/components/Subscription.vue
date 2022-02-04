<template>
  <div>
    <!-- <button class="btn btn-primary m-2 float-left">Add</button> -->
    <h3 class="text-center m-2">Subscriptions</h3>
    <table class="table">
      <thead>
        <th>No</th>
        <th>Plan</th>
        <th>App</th>
        <th>User</th>
        <th>Acive</th>
      </thead>
      <tbody>
        <tr v-for="subscription in subscriptions" v-bind:key="subscription.id">
          <td>{{ subscription.id }}</td>
          <td>{{ subscription.user }}</td>
          <td>{{ subscription.plan }}</td>
          <td>{{ subscription.app }}</td>
          <td>{{ subscription.active ? "Enabled" : "Disabled" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppServices from "@/services/apps";
import Application from "@/types/Application";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "add-tutorial",
  data() {
    return {
      subscriptions: [
        {
          id: 642,
          user: 21,
          plan: 33,
          app: 12,
          active: true,
        },
        {
          id: 642,
          user: 22,
          plan: 33,
          app: 12,
          active: false,
        },
      ],
      submitted: false,
    };
  },
  methods: {
    saveTutorial() {
      // let data = {
      //   title: this.tutorial.title,
      //   description: this.tutorial.description,
      // };
      // Services.create(data)
      //   .then((response: ResponseData) => {
      //     this.tutorial.id = response.data.id;
      //     console.log(response.data);
      //     this.submitted = true;
      //   })
      //   .catch((e: Error) => {
      //     console.log(e);
      //   });
    },

    newTutorial() {
      // this.submitted = false;
      // this.tutorial = {} as Tutorial;
    },
  },
  mounted() {
    // this.$modal.show()
    AppServices.getAll().then((response: ResponseData) => {
      console.log(response.data);
    });
  },
});
</script>