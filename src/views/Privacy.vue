<template>
    <div class="container">
      <div class="login">
        <Title :type="titleType"> {{ $t('privacy.title') }} </Title>
        <hr>
       <div>
        <Paragraph>
          <Title :type="subTitle">{{ $t('privacy.collection') }}</Title>
          <Paragraph>{{ $t('privacy.collectionDescription') }}</Paragraph>
          <Title :type="subTitle">{{ $t('privacy.usage') }}</Title>
          <Paragraph>{{ $t('privacy.usageDescription') }}</Paragraph>
          <Title :type="subTitle">{{ $t('privacy.protection') }}</Title>
          <Paragraph>{{ $t('privacy.protectionDescription') }}</Paragraph>
          <Title :type="subTitle">{{ $t('privacy.disclosure') }}</Title>
          <Paragraph>{{ $t('privacy.disclosureDescription') }}</Paragraph>
          <Paragraph>{{ $t('privacy.consent') }}</Paragraph>
          <Paragraph>{{ $t('privacy.contact') }}</Paragraph>
        </Paragraph>
       </div>
      </div>
    </div>
      
    </template>
  
    <script>
    import Title from "@/components/atoms/Title.vue";
    import Paragraph from "@/components/atoms/Paragraph.vue";
  
    export default {
      name: "privacy",
      components: {
        Title,
        Paragraph,
      },
  
      data() {
      return {
        titleType: 'h1',
        subTitle: 'h2',

      };
    },
    };
    
    </script>