<template>
  <section class="pricing">
      <h2 class="text-center m-2">Pricing</h2>
    <div class="container page">
      <div class="row">
        <!-- Free Tier -->
        <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">
                Free
              </h5>
              <h6 class="card-price text-center">
                $0<span class="period">/month</span>
              </h6>
              <hr />
              <div class="d-grid text-center">
                <a href="#" class="btn btn-primary text-uppercase">Upgrade</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Plus Tier -->
        <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">
                Standard
              </h5>
              <h6 class="card-price text-center">
                $10<span class="period">/month</span>
              </h6>
              <hr />
              <div class="d-grid text-center">
                <a href="#" class="btn btn-primary text-uppercase">Upgrade</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Pro Tier -->
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">
                Pro
              </h5>
              <h6 class="card-price text-center">
                $25<span class="period">/month</span>
              </h6>
              <hr />
              <div class="d-grid text-center">
                <a href="#" class="btn btn-primary text-uppercase">Upgrade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TutorialDataService from "@/services";
import Tutorial from "@/types/Tutorial";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "pricing",
  data() {
    return {
      //   tutorial: {
      //     id: null,
      //     title: "",
      //     description: "",
      //     published: false,
      //   } as Tutorial,
      //   submitted: false,
    };
  },
  methods: {
    // saveTutorial() {
    //   let data = {
    //     title: this.tutorial.title,
    //     description: this.tutorial.description,
    //   };
    //   TutorialDataService.create(data)
    //     .then((response: ResponseData) => {
    //       this.tutorial.id = response.data.id;
    //       console.log(response.data);
    //       this.submitted = true;
    //     })
    //     .catch((e: Error) => {
    //       console.log(e);
    //     });
    // },
    // newTutorial() {
    //   this.submitted = false;
    //   this.tutorial = {} as Tutorial;
    // },
  },
});
</script>

<style scoped>
.pricing .card {
  border: none;
  border-radius: 1rem;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.pricing hr {
  margin: 1.5rem 0;
}

.pricing .card-title {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
}

.pricing .card-price {
  font-size: 3rem;
  margin: 0;
}

.pricing .card-price .period {
  font-size: 0.8rem;
}

.pricing ul li {
  margin-bottom: 1rem;
}

.pricing .text-muted {
  opacity: 0.7;
}

.pricing .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  opacity: 0.7;
  transition: all 0.2s;
}

/* Hover Effects on Card */

@media (min-width: 992px) {
  .pricing .card:hover {
    margin-top: -0.25rem;
    margin-bottom: 0.25rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
  }

  .pricing .card:hover .btn {
    opacity: 1;
  }
}
</style>
