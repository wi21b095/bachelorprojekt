<!-- Login.vue -->
<template>
  <div class="container">
    <div class="login">
      <Title :type="titleType">{{ titleContent }}</Title>
      <hr />
      <!-- call the submit function when clicking enter or when clicking the button -->
      <!-- the button needs to be a type submit -->
      <div class="justify-content-center"></div>
      <LoginForm @form-submitted="handleFormSubmitted" />
    </div>
  </div>
  <div>
    <Modal v-if="showModal" @closeModal="closeModal">
      <!-- Content to display in the modal goes here -->
      <p>Wrong Credentials</p>
    </Modal>
  </div>
</template>

<script>
import { ref } from "vue";
import LoginForm from "@/components/molecules/LoginForm.vue";
import Title from "@/components/atoms/Title.vue";
import Modal from "@/views/Modal.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
    Title,
    Modal,
  },

  setup() {
    const titleType = "h1";
    const titleContent = "Login";
    const registeredUser = ref(null);
    const showModal = ref(false);

    const handleFormSubmitted = async (formData) => {
      console.log("Form data received:", formData);
      try {
        // Überprüfe, ob formData Werte für username und password enthält
        if (!formData.username || !formData.password) {
          showModal.value = true;
          console.error("Username and password are required.");
          return;
        }

        // Your API call code here
        const response = await fetch("/api/auth/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log(response);

        if (response.ok) {
          const isLoggedIn = true;
          // API call succeeded, handle success
          registeredUser.value = formData;
          const data = await response.json();
          const { token } = data;

          // Store the JWT token in the state
          localStorage.setItem("access_token", token);
          localStorage.setItem("isLoggedIn", isLoggedIn);
          localStorage.setItem("username", formData.username);

          window.location.href = "/profile";
        } else {
          // API call failed, handle error
          showModal.value = true;
          console.error("API call failed:", response.statusText);
        }
        const apiUrl2 = "/api/user/" + formData.username;
        const accessToken = localStorage.getItem("access_token");
        const response2 = await fetch(apiUrl2, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response2.json();
        //const firstRow = data.user[0];
        //const usersArray = data.users;

        this.email = data.email;
        this.username = data.username;
        this.role = data.role;
      } catch (error) {
        // Handle other errors (e.g., network error)
        showModal.value = true;
        console.error("Error submitting form:", error);
      }
      console.log(localStorage.getItem("access_token"));
    };

    const openModal = () => {
      console.log("Opening modal");
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      registeredUser,
      handleFormSubmitted,
      showModal,
      openModal,
      closeModal,
      titleType,
      titleContent,
    };
  },
};
</script>
