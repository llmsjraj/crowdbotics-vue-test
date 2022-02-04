<template>
  <div>
    <!-- <button class="btn btn-primary m-2 float-left"  data-toggle="modal" data-target="#myModal">Add</button> -->
    <router-link to="/add_application" class="btn btn-primary m-2 float-left"
      >Add</router-link
    >
    <h3 class="text-center m-2">Applications</h3>
    <table class="table">
      <thead>
        <th>No</th>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Framework</th>
        <th>Domain Name</th>
        <th>Subscription</th>
        <th>User</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="application in applications" v-bind:key="application.id">
          <td>{{ application.id }}</td>
          <td>{{ application.name }}</td>
          <td>{{ application.description }}</td>
          <td>{{ application.type }}</td>
          <td>{{ application.framework }}</td>
          <td>{{ application.domain_name }}</td>
          <td>{{ application.subscription }}</td>
          <td>{{ application.user }}</td>
          <td>
            <router-link to="/pricing" class="btn btn-success m-1"
              >Pricing</router-link
            >
            <!-- <button class="btn btn-success m-1">Pricing</button> -->
            <button class="btn btn-info m-1">
              <!-- <font-awesome-icon icon="coffee" /> -->
              Edit
            </button>
            <button
              class="btn btn-danger m-1"
              @click="onDelete(application.id)"
            >
              Delete
            </button>
          </td>
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
      applications: [
        {
          id: 642,
          name: "string",
          description: "string",
          type: "Web",
          framework: "Django",
          domain_name: "string",
          screenshot: null,
          subscription: null,
          user: 366,
          created_at: "2022-02-02T19:08:31.667465Z",
          updated_at: "2022-02-02T19:08:31.667485Z",
        },
        {
          id: 644,
          name: "string",
          description: "string",
          type: "Web",
          framework: "Django",
          domain_name: "string",
          screenshot: null,
          subscription: null,
          user: 366,
          created_at: "2022-02-03T06:19:55.130865Z",
          updated_at: "2022-02-03T06:19:55.130919Z",
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

    onDelete(id: number) {
      (this as any).$swal("Deleted!");
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

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
