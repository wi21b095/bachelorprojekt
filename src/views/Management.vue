<template>
  <div class="container">
    <div class="management">
      <Title :type="titleType">{{ titleContent }}</Title>
      <hr />
      <Button @click="getAllUsers">Get All Users</Button>
      <div class="row" v-if="users.length > 0">
        <div v-for="(user, index) in users" :key="index">
          {{ user.uuid }} - {{ user.gender }} - {{ user.salutation }} -
          {{ user.username }} - {{ user.email }} - {{ user.password }}
        </div>
      </div>
      <div v-else>
        {{ users.length === 0 ? "No users available" : "Loading users..." }}
      </div>
      <hr />
      <form @submit.prevent="handleSubmit">
        <label for="uuid">User-UUID:</label>
        <input type="text" id="uuid" v-model="formData.uuid" />
        <Button type="submit">Delete User by UUID</Button>
      </form>
      <hr />
      <Button @click="getAllProducts">Get All Products</Button>
      <div class="row" v-if="products.length > 0">
        <div v-for="(product, index) in products" :key="index">
          {{ product.uuid }} - {{ product.name }} - {{ product.price }}
        </div>
      </div>
      <div v-else>
        {{
          products.length === 0
            ? "No products available"
            : "Loading products..."
        }}
      </div>
      <hr />
      <div class="justify-content-center"></div>
      <form @submit.prevent="handleSubmit2">
        <label for="uuid">Produkt-UUID:</label>
        <input type="text" id="uuid" v-model="formData.uuid" />
        <Button type="submit">Delete Product by UUID</Button>
      </form>
    </div>
  </div>
</template>
<script>
import Title from "@/components/atoms/Title.vue";
import { useUserStore } from "@/pinia-store/user";
import Button from "@/components/atoms/Button.vue";

export default {
  name: "Management",
  components: {
    Title,
    Button,
  },
  data() {
    return {
      store: useUserStore(),
      titleType: "h1",
      titleContent: "Management",
      formData: {
        email: "",
      },
      users: [],
      products: [],
    };
  },
  methods: {
    async handleSubmit() {
      console.log("Form Data:", this.formData);

      try {
        await this.store.deleteFunction(this.formData.email);
        // Weitere Verarbeitung, Erfolgsmeldungen, etc.
      } catch (error) {
        // Fehlerbehandlung, z.B. Anzeigen einer Fehlermeldung
        console.error("Error during delete:", error);
      }
    },
    async handleSubmit2() {
      console.log("Form Data:", this.formData);

      try {
        await this.store.deleteFunction2(this.formData.uuid);
        // Weitere Verarbeitung, Erfolgsmeldungen, etc.
      } catch (error) {
        // Fehlerbehandlung, z.B. Anzeigen einer Fehlermeldung
        console.error("Error during delete:", error);
      }
    },
    async getAllUsers() {
      try {
        const apiUrl = "/api/admin/users";
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

        const users = await response.json();
        this.users = users;
        console.log(users);
      } catch (error) {
        console.error("Error during api-call:", error);
        throw error;
      }
    },
    async getAllProducts() {
      try {
        const apiUrl = "/api/products";

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        this.products = products;
        console.log(products);
      } catch (error) {
        console.error("Error during api-call:", error);
        throw error;
      }
    },
  },
};
</script>
