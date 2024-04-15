<!-- CardBody.vue -->
<template>
  <div class="card-body">
    <Image :url="imageUrl" class="product-image" />
  </div>
</template>

<script>
import Image from '@/components/atoms/Image.vue';

export default {
  components: {
    Image,
  },
  props: ['imageUrl'],
}
</script>

<style scoped>
.card-body {
  /* Set the maximum height for the card body */
  max-height: 200px; /* Zum Beispiel - passt es nach Bedarf an */
  overflow: hidden; /* Verhindert das Überlaufen des Inhalts */
  position: relative; /* Positionierung für das Overlay */
}

.product-image {
  width: 100%; /* Set the width to fill the container */
  height: auto; /* Maintain the aspect ratio */
  max-width: 100%; /* Ensure the image doesn't exceed the container width */
}
</style>
