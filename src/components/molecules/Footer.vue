<template>
    <div class="footer">
      <router-link class="nav-link" to="/imprint">{{ $t('footer.imprint') }}</router-link>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "Footer",
    props: ["usernameProp"],

    mounted() {
      this.$i18n.locale = "de";
    },
  };
  </script>
  <style>
  .footer {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    padding: 1rem;
  }
  .nav-link {
    display: inline-block;
    list-style: none;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 2rem;
    padding: 1rem;
    margin: 0 10px;
  }
  
  .nav-link:hover {
    color: rgb(209, 6, 6);
  }
  </style>
  