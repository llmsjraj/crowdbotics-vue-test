import http from "@/http-common";

const BASE_URL = "https://hiring-example-25770.botics.co";

/* eslint-disable */
class Auth {
  register(data: any): Promise<any> {
    return http.post(BASE_URL + "/rest-auth/registration/", data);
  }

  login(data: any): Promise<any> {
    return http.post(BASE_URL + "/rest-auth/login/", data);
  }

  resetpassword(data: any): Promise<any> {   
    return http.post(BASE_URL + "/rest-auth/password/reset/", data);
  }

}

export default new Auth();
