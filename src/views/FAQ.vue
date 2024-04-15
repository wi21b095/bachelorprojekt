<template>
  <div class="container">
    <div class="login">
      <Title :type="titleType">{{ $t('faq.title') }}</Title>
      <hr>
     <div>
      <Paragraph>
          <Title :type="subTitle">{{ $t('faq.register') }}</Title>
          <Paragraph>{{ $t('faq.registerDescription') }}</Paragraph>
          <Title :type="subTitle">{{ $t('faq.login') }}</Title>
          <Paragraph>{{ $t('faq.loginDescription') }}</Paragraph>
          <Title :type="subTitle">{{ $t('faq.logout') }}</Title>
          <Paragraph>{{ $t('faq.logoutDescription') }}</Paragraph>
          <Title :type="subTitle">{{ $t('faq.updateData') }}</Title>
          <Paragraph>{{ $t('faq.updateDataDescription') }}</Paragraph>
          <Title :type="subTitle">{{ $t('faq.deleteAccount') }}</Title>
          <Paragraph>{{ $t('faq.deleteAccountDescription') }}</Paragraph>
          <Title :type="subTitle">{{ $t('faq.forgotPassword') }}</Title>
          <Paragraph>{{ $t('faq.forgotPasswordDescription') }}</Paragraph>
          <Title :type="subTitle">{{ $t('faq.resetPassword') }}</Title>
          <Paragraph>{{ $t('faq.resetPasswordDescription') }}</Paragraph>
        </Paragraph>
     </div>
    </div>
  </div>
    
  </template>

  <script>
  import Title from "@/components/atoms/Title.vue";
  import Paragraph from "@/components/atoms/Paragraph.vue";

  export default {
    name: "Help",
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