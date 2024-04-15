<template>
    <form @submit.prevent="submitForm">

      <label for="username">{{$t('registerForm.gender')}}</label>
      <br />
      <div>
        <label>
          <input type="radio" v-model="formData.gender" name="picGender" value="Herr"> {{$t('registerForm.male')}}
        </label>
      </div>
      <div>
        <label>
          <input type="radio" v-model="formData.gender" name="picGender" value="Frau"> {{$t('registerForm.female')}}
        </label>
      </div>
      <div>
        <label>
          <input type="radio" v-model="formData.selectedGender" name="picGender" value="diverse"> {{$t('registerForm.diverse')}}
        </label>

        <div v-if="formData.selectedGender === 'diverse'">
          <label>
            {{$t('registerForm.diverseDetails')}}
            <input v-model="formData.gender" type="text" id="gender" />
          </label>
        </div>
      </div>


      <label for="username">{{$t('registerForm.username')}}</label>
      <br />
      <input v-model="formData.username" type="text" id="username" />
      <br />
      <label for="email">{{$t('registerForm.email')}}</label>
      <br />
      <input v-model="formData.email" type="email" id="email" />
      <br />
      <label for="password">{{$t('registerForm.password')}}</label>
      <br />
      <input v-model="formData.password" type="password" id="password" />
      <br />
      <button type="submit">{{$t('registerForm.register')}}</button>
    </form>
</template>

<script>
import { ref } from "vue";

export default {
  name: "RegisterForm",
  setup(_, { emit }) {
    // Reactive properties for form fields

    const formData = ref({
      username: "",
      email: "",
      password: "",
      gender: "",
    });

    const submitForm = () => {
      // Validate form data and perform any necessary actions
      console.log("Form data before emit:", formData.value);
      // Emit a custom event with the form data
      emit("form-submitted", formData.value);
    };

    return { formData, submitForm };
  },
};
</script>
