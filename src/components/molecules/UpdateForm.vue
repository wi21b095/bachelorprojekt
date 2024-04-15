<template>
  <form @submit.prevent="submitForm">
    <label for="gender">Gender:</label>
    <br />
    <input v-model="formData.gender" type="text" id="gender" />
    <br />
    <label for="salutation">Salutation:</label>
    <br />
    <input v-model="formData.salutation" type="text" id="salutation" />
    <br />
    <label for="email">Email:</label>
    <br />
    <input v-model="formData.email" type="text" id="email" />
    <br />
    <label for="username">Username:</label>
    <br />
    <input v-model="formData.username" type="text" id="username" />
    <br />
    <label for="password">Password:</label>
    <br />
    <input v-model="formData.password" type="text" id="password" />
    <br />
    <Button type="submit">Update</Button>
  </form>
</template>

<script>
import { ref, onMounted } from "vue";
import Button from "@/components/atoms/Button.vue";
import { useUserStore } from "@/pinia-store/user";

export default {
  name: "UpdateForm",
  components: {
    Button,
  },
  setup(_, { emit }) {
    // Reactive properties for form fields

    const formData = ref({
      salutation: "",
      gender: "",
      username: "",
      email: "",
      password: "",
    });

    const submitForm = () => {
      // Validate form data and perform any necessary actions
      console.log("Form data before emit:", formData.value);
      // Emit a custom event with the form data
      emit("form-submitted", formData.value);
    };

    onMounted(() => {
      // Example: Set a default value for the password field on page load
      formData.value.username = useUserStore().username;
      formData.value.password = "DefaultPassword";
      formData.value.email = useUserStore().email;
      formData.value.gender = useUserStore().gender;
      formData.value.salutation = useUserStore().salutation;
    });

    return { formData, submitForm };
  },
};
</script>
