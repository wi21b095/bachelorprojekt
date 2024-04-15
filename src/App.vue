<template>
  <div class="container-fluid text-center">
    <nav>
      <Navigation />
      <hr>
    </nav>
  </div>
  <router-view />
  <Footer />
</template>

<script>
import Navigation from '@/components/molecules/Navigation.vue';
import Footer from '@/components/molecules/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
  
}
</script>