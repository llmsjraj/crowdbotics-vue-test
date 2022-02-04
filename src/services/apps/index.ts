import http from "@/http-common";

const BASE_URL = "https://hiring-example-25770.botics.co";

/* eslint-disable */
class Service {
  getAll(): Promise<any> {
    console.log(http.defaults.headers, "=== before request");
    return http.get(BASE_URL + "/api/v1/apps/");
  }

  create(data: any): Promise<any> {
    return http.post(BASE_URL + "/api/v1/apps/", data);
  }
}

export default new Service();
