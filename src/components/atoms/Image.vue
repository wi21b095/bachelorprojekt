<!-- Image.vue -->
<template>
    <img :src="url" class="img-fluid" alt="Responsive Image" />
</template>

<script>
export default {
    name: 'Image',
    props: {
    url: String,
  },
};
</script>

<style scoped>

</style>