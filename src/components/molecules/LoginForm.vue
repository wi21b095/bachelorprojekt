<template>
  <form @submit.prevent="submitForm">
    <label for="username">{{ $t('loginForm.username') }}</label>
    <br />
    <input v-model="formData.username" type="text" id="username" />
    <br />
    <label for="password">{{ $t('loginForm.password') }}</label>
    <br />
    <input v-model="formData.password" type="password" id="password" />
    <br />
    <button type="submit">{{ $t('loginForm.login') }}</button>
  </form>
  <div>
    <Modal v-if="showModal" @closeModal="closeModal">
      <!-- Content to display in the modal goes here -->
      <p>{{ $t('loginForm.missingCredentials') }}</p>
    </Modal>
  </div>
</template>

<script>
import { ref } from "vue";
//import FormField from "@/components/molecules/FormField.vue";

export default {
  name: "LoginForm",
  components: {
    //FormField,
  },
  setup(_, { emit }) {
    // Reactive properties for form fields
    const formData = ref({
      username: "",
      password: "",
    });

    const submitForm = () => {
      console.log("Form data before emit:", formData.value);

      // Validate form data and perform any necessary actions

      // Emit a custom event with the form data
      emit("form-submitted", formData.value);

      console.log("Form submitted event emitted");
    };

    return { formData, submitForm };
  },
};
</script>
