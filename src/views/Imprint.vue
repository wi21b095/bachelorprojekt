<template>
  <div class="container">
    <div class="Imprint">
      <Title :type="titleType">{{ $t('imprint.title') }}</Title>
      <hr />
      <div>
        <Title :type="subTitle">{{ $t('imprint.paragraph') }}</Title>
        <Paragraph>
          {{ $t('imprint.name') }} <br />

          {{ $t('imprint.address') }}
        </Paragraph>
        <Title :type="subTitle">{{ $t('imprint.contact') }}</Title>
        <Paragraph>
          {{ $t('imprint.phone') }} <br />
          {{ $t('imprint.email') }}
        </Paragraph>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";

export default {
  name: "Imprint",
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
