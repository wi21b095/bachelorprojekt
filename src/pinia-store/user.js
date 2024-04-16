import { defineStore } from "pinia";
import { i18n } from "@/translation/index.js";


// Create a new store instance.
export const useUserStore = defineStore("user", {
  state() {
    return {
      uuid: "",
      email: "",
      username: "",
      token: "",
      role: "",
      gender: "",
      salutation: "",
    };
  },
  exports: {
    i18n,
  },
  getters: {
    isLoggedIn() {
      return this.email !== "" && this.username !== "";
    },
  },
  actions: {
    changeMail() {
      this.email = this.token;
    },
    async user() {

      const { t } = i18n();
      try {
        const username = localStorage.getItem("username");

        const apiUrl = "/api/user/" + username;
        const accessToken = localStorage.getItem("access_token");

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        //const firstRow = data.user[0];
        //const usersArray = data.users;

        this.uuid = data.uuid;
        this.salutation = data.salutation;
        this.email = data.email;
        this.username = data.username;
        this.role = data.role;
        this.gender = data.gender;
      } catch (error) {
        console.error(t("loginError"), error);
        throw error;
      }
    },
    async login() {
      try {
        const apiUrl = "/api/auth/token";

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "",
            password: "",
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const { token } = data;

        // Store the JWT token in the state
        this.token = token;
        localStorage.setItem("access_token", this.token);
      } catch (error) {
        console.error("Error during login:", error);
        throw error;
      }
    },
    async update() {
      try {
        const apiUrl = "/api/user/";
        const accessToken = localStorage.getItem("access_token");

        const response = await fetch(apiUrl, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            username: "",
            email: "",
            password: "",
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error during login:", error);
        throw error;
      }
    },
    async deleteFunction(emailToDelete) {
      try {
        const apiUrl = "/api/admin/user/" + emailToDelete;
        const accessToken = localStorage.getItem("access_token");

        const response = await fetch(apiUrl, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            username: "",
            email: "",
            password: "",
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error during delete:", error);
        throw error;
      }
    },
    async deleteFunction2(uuidToDelete) {
      try {
        const apiUrl = "/api/admin/product/" + uuidToDelete;
        const accessToken = localStorage.getItem("access_token");

        const response = await fetch(apiUrl, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            username: "",
            email: "",
            password: "",
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error during delete:", error);
        throw error;
      }
    },
  },
});
