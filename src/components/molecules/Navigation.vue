<template>
  <div>
    <router-link class="nav-link" to="/">{{ $t('navbar.welcome') }}</router-link>
    <router-link class="nav-link" to="plural">{{ $t('navbar.plural') }}</router-link>
    <router-link class="nav-link" to="time">{{ $t('navbar.time') }}</router-link>
    <div class="language-select">
      <select v-model="selectedLanguage" @change="handleChange">
        <option value="de" class="de-option">{{ $t('navbar.german') }}</option>
        <option value="en" class="en-option">{{ $t('navbar.english') }}</option>
        <option value="ja-JP" class="ja-JP-option">{{ $t('navbar.japanese') }}</option>
      </select>
  </div>
  </div>
</template>

<script>


export default {
  name: "Navigation",

  data() {
    return {
      selectedLanguage: "de",
    };
  },
  mounted() {
    this.$i18n.locale = "de";
  },
  methods: {
    handleChange() {
  if (this.selectedLanguage === 'de') {
    this.changeLanguageDe();
  } else if (this.selectedLanguage === 'en') {
    this.changeLanguageEn();
  } else if (this.selectedLanguage === 'ja-JP') {
    this.changeLanguageJp();
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
    },
    changeLanguageJp() {
      // Handle language change to Japanese
      this.$i18n.locale = "ja-JP";
      this.selectedLanguage = "ja-JP";
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
  color: green;;
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
