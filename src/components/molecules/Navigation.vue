<template>
  <div>
    <router-link class="nav-link" to="/">{{ $t('navbar.welcome') }}</router-link>
    <router-link v-if="isUserLoggedIn" class="nav-link" to="/profile"
      >{{ $t('navbar.profile') }}</router-link
    >
    <router-link v-if="isUserLoggedIn" class="nav-link" to="/logout"
      >{{ $t('navbar.logout') }}</router-link
    >
    <router-link v-if="!isUserLoggedIn" class="nav-link" to="/login"
      >{{ $t('navbar.login') }}</router-link
    >
    <router-link v-if="!isUserLoggedIn" class="nav-link" to="/register"
      >{{ $t('navbar.register') }}</router-link
    >
    <router-link
      v-if="adminRole === store.role"
      class="nav-link"
      to="/management"
      >{{ $t('navbar.management') }}</router-link
    >

    <div class="language-select">
      <select v-model="selectedLanguage" @change="handleChange">
        <option value="de" class="de-option">{{ $t('navbar.german') }}</option>
        <option value="en" class="en-option">{{ $t('navbar.english') }}</option>
      </select>
  </div>

    <div v-if="isUserLoggedIn">
      Welcome, {{ store.salutation }} {{ username }} !
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/pinia-store/user";

export default {
  name: "Navigation",
  props: ["usernameProp"],
  data() {
    return {
      store: useUserStore(),
      isUserLoggedIn: localStorage.getItem("isLoggedIn"),
      username: this.usernameProp,
      adminRole: "ROLE_ADMIN",
      selectedLanguage: "de",
    };
  },
  mounted() {
    this.getUser();
    this.$i18n.locale = "de";
  },
  methods: {
    getUser() {
      this.username = localStorage.getItem("username");
    },
    handleChange() {
      if (this.selectedLanguage === 'de') {
        this.changeLanguageDe();
      } else if (this.selectedLanguage === 'en') {
        this.changeLanguageEn();
      }
    },
    changeLanguageDe() {
      // Handle language change to German
      this.$i18n.locale = "de";
      this.selectedLanguage = "de";
    },
    changeLanguageEn() {
      // Handle language change to English
      this.$i18n.locale = "en";
      this.selectedLanguage = "en";
    }
  }

};
</script>

<style>
.nav-link {
  display: inline;
  list-style: none;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
  padding: 1rem;
}

.nav-link:hover {
  color: rgb(209, 6, 6);
}

.img_flag {
  width: 30px;
  height: 30px;
  padding: 5px;
}

.language-select {
  position: absolute;
  top: 50px; /* Beispiel: Abstand vom oberen Rand des übergeordneten Elements entsprechend der Höhe der nav-links */
  right: 0; /* Dropdown-Menü am rechten Rand des übergeordneten Elements positionieren */
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  padding: 1rem;
}


</style>
