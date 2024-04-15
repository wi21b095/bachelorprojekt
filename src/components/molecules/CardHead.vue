<!-- CardHead.vue -->
<template>
  <div>
    <Title :type="titleType" :text="name">{{ name }}</Title>
    <Paragraph :text="price">{{ price }}</Paragraph>
    <Paragraph :text="category">{{ category }}</Paragraph>
  </div>
</template>

<script>
import Title from '@/components/atoms/Title.vue';
import Paragraph from '@/components/atoms/Paragraph.vue';

export default {
  components: {
    Title,
    Paragraph
  },
  props: ['name', 'price', 'category', 'type'],

  data() {
    return {
      titleType: 'h2',
    };
  },
}
</script>
