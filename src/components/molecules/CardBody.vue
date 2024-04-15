<!-- CardBody.vue -->
<template>
  <div>
    <Image :url="imageUrl" />
  </div>
    <div>
      <!-- <Paragraph :text="uuid">{{ uuid }}</Paragraph> -->
    </div>
  </template>
  
  <script>
  // import Paragraph from '@/components/atoms/Paragraph.vue';
  import Image from '@/components/atoms/Image.vue';
  
  export default {
    components: {
      // Paragraph,
      Image,
    },
    props: ['uuid', 'imageUrl'],
  }
  </script>
  