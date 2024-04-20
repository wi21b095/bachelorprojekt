<template>
  <div>
    <router-link class="nav-link" to="/">{{ $t('navbar.welcome') }}</router-link>
    <router-link class="nav-link" to="plural">{{ $t('navbar.plural') }}</router-link>
    <router-link class="nav-link" to="time">{{ $t('navbar.time') }}</router-link>
    <router-link class="nav-link" to="currency">{{ $t('navbar.currency') }}</router-link>
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

  methods: {
    changeLanguage(newLocale) {
      this.$i18n.locale = newLocale;
      this.selectedLanguage = newLocale;
    },
    handleChange() {
      this.changeLanguage(this.selectedLanguage);
    },
  },
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

.language-select {
  position: absolute;
  top: 50px;
  right: 0;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  padding: 1rem;
}

</style>
