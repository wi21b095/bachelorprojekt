<template>
  <div class="container">
    <div class="Home">
      <Title :type="titleType">{{ $t('home.title') }}</Title>
      <div>
        <Paragraph>{{ $t('home.subtitleContent') }}</Paragraph>
      </div>

<Cards/>


      </div>
    </div>

</template>

<script>

import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";
import Cards from "@/components/organism/Cards.vue";

export default {
  name: "Home",
  components: {
    Title,
    Paragraph,
    Cards,
  }
};

   
</script>

