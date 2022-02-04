import VueRouter, { Route } from 'vue-router'
import VModal from 'vue-js-modal'

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter,
    // $modal: VModal
  }
}

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}