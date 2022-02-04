<template>
  <div class="submit-form">
    <h2>Add Application</h2>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="application.name"
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          required
          v-model="application.description"
          name="description"
        />
      </div>

      <div class="form-group">
        <label for="type">Type</label>
        <select
          class="form-control"
          id="type"
          required
          v-model="application.type"
          name="type"
        >
          <option value="Web">Web</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>

      <div class="form-group">
        <label for="framework">Framework</label>
        <select
          class="form-control"
          id="framework"
          required
          v-model="application.framework"
          name="framework"
        >
          <option value="Django">Django</option>
          <option value="React Native">React Native</option>
        </select>
      </div>

      <div class="form-group">
        <label for="domain_name">Domain Name</label>
        <input
          type="text"
          class="form-control"
          id="domain_name"
          required
          v-model="application.domain_name"
          name="domain_name"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
      <button @click="$router.go(-1)" class="btn btn-info float-right">
        Back
      </button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Service from "@/services";
import Tutorial from "@/types/Tutorial";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "add-application",
  data() {
    return {
      application: {
        name: "",
        description: "",
        type: "Web",
        framework: "Django",
        domain_name: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveTutorial() {
      Service.create(this.application)
        .then((res) => {
          console.log(res, "== res");
        })
        .catch(() => {
          alert("failed");
        });
      //   TutorialDataService.create(data)
      //     .then((response: ResponseData) => {
      //       this.tutorial.id = response.data.id;
      //       console.log(response.data);
      //       this.submitted = true;
      //     })
      //     .catch((e: Error) => {
      //       console.log(e);
      //     });
    },

    newTutorial() {
      this.submitted = false;
      this.application = {
        name: "",
        description: "",
        type: "Web",
        framework: "Django",
        domain_name: "",
      };
    },
  },
});
</script>
