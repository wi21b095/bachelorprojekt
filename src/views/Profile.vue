<template>
  <div class="container">
    <div class="Profile">
      <Title :type="titleType">{{ titleContent }}</Title>
      <div>
        <Button @click="this.store.user">Userdetails</Button>

        <div>
          {{ this.store.token }}
        </div>
        <Paragraph v-if="this.store.isLoggedIn">
          <div>
            <b> uuid: </b>
            {{ this.store.uuid }}
          </div>
          <div>
            <b> Profile Picture: </b>
          </div>
          <div>
            <Image :url="imageUrl" />
          </div>
          <div>
            <b> Gender: </b>
            {{ this.store.gender }}
          </div>
          <div>
            <b> Anrede: </b>
            {{ this.store.salutation }}
          </div>
          <div>
            <b> Name: </b>
            {{ this.store.username }}
          </div>
          <div>
            <b> Email: </b>
            {{ this.store.email }}
          </div>
          <div>
            <b> Role: </b>
            {{ this.store.role }}
          </div>
        </Paragraph>
      </div>
      <UpdateForm @form-submitted="handleFormSubmitted" />

      <hr />
    </div>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";
import Image from '@/components/atoms/Image.vue';
import { useUserStore } from "@/pinia-store/user";
import Button from "@/components/atoms/Button.vue";
import UpdateForm from "@/components/molecules/UpdateForm.vue";
import { ref } from "vue";

export default {
  name: "Profile",
  components: {
    Title,
    Paragraph,
    Button,
    UpdateForm,
    Image,
  },
  setup() {
    const registeredUser = ref(null);

    const handleFormSubmitted = async (formData) => {
      try {

        const accessToken = localStorage.getItem("access_token");
        const uuid = useUserStore().uuid;
        console.log("/api/user/" + uuid);
        // Your API call code here
        const response = await fetch("/api/user/" + uuid, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        });
        console.log(formData);
        if (response.ok) {
          // API call succeeded, handle success
          registeredUser.value = formData;
        } else {
          // API call failed, handle error
          console.error("API call failed:", response.statusText);
        }
      } catch (error) {
        // Handle other errors (e.g., network error)
        console.error("Error submitting form:", error);
      }
    };
    return { registeredUser, handleFormSubmitted };
  },
  data() {
    return {
      store: useUserStore(),
      titleType: "h1",
      titleContent: "Über uns",
      imageUrl: '/img/'+ useUserStore().gender +'.png',
      
    };
  },
  async mounted() {
    try {
      // Fetch user data or perform any necessary actions on page reload
      await this.store.fetchUserData(); // Assume you have a method in your store to fetch user data
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  },
};
</script>
