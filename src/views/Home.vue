<template>
  <div class="container">
    <div class="Home">
      <Title :type="titleType">{{ $t('home.title') }}</Title>
      <div>
        <Paragraph :type="subTitle">{{ $t('home.subtitle') }}</Paragraph>
        <Paragraph>{{ $t('home.content1') }}</Paragraph>
        <Paragraph>{{ $t('home.content2') }}</Paragraph>
        <Paragraph>{{ $t('home.content3') }}</Paragraph>
      </div>


      </div>
    </div>

</template>

<script>

import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";


export default {
  name: "Home",
  components: {
    Title,
    Paragraph,
  },
  data() {
    return {
      titleType: "h1",
      subTitle: "h2",
    };
  },
};  
</script>

