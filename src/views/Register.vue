<template>
  <div class="container">
    <h1>Registrierung</h1>
    <hr />
    <RegisterForm @form-submitted="handleFormSubmitted" />
    <div v-if="registeredUser">
      <h3>Registered User:</h3>
      <p>Gender: {{ registeredUser.gender }}</p>
      <p>Username: {{ registeredUser.username }}</p>
      <p>Email: {{ registeredUser.email }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import RegisterForm from "@/components/molecules/RegisterForm.vue";

export default {
  components: {
    RegisterForm,
  },
  setup() {
    const registeredUser = ref(null);

    const handleFormSubmitted = async (formData) => {
      try {
        // Your API call code here
        const response = await fetch("/api/adduser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log(formData);
        if (response.ok) {
          // API call succeeded, handle success
          registeredUser.value = formData;
        } else {
          // API call failed, handle error
          //console.error("API call failed:", response.statusText);
        }
      } catch (error) {
        // Handle other errors (e.g., network error)
        //console.error("Error submitting form:", error);
      }
    };
    return { registeredUser, handleFormSubmitted };
  },
};
</script>
