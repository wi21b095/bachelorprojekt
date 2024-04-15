<template>
  <div class="container">
    <div class="login">
      <Title :type="titleType">{{ titleContent }}</Title>
      <hr>
     <div>
      <Paragraph>
        <Title type="h2">Wie kann ich mich registrieren?</Title>
        <Paragraph>Um sich zu registrieren, klicken Sie auf den Button "Registrieren" und füllen Sie das Formular aus.</Paragraph>
        <Title type="h2">Wie kann ich mich einloggen?</Title>
        <Paragraph>Um sich einzuloggen, klicken Sie auf den Button "Login" und füllen Sie das Formular aus.</Paragraph>
        <Title type="h2">Wie kann ich mich ausloggen?</Title>
        <Paragraph>Um sich auszuloggen, klicken Sie auf den Button "Logout".</Paragraph>
        <Title type="h2">Wie kann ich meine Daten ändern?</Title>
        <Paragraph>Um Ihre Daten zu ändern, klicken Sie auf den Button "Profil" und füllen Sie das Formular aus.</Paragraph>
        <Title type="h2">Wie kann ich meine Daten löschen?</Title>
        <Paragraph>Um Ihre Daten zu löschen, klicken Sie auf den Button "Profil" und klicken Sie auf den Button "Löschen".</Paragraph>
        <Title type="h2">Wie kann ich ein neues Passwort anfordern?</Title>
        <Paragraph>Um ein neues Passwort anzufordern, klicken Sie auf den Button "Login" und klicken Sie auf den Button "Passwort vergessen".</Paragraph>
        <Title type="h2">Wie kann ich ein neues Passwort setzen?</Title>
        <Paragraph>Um ein neues Passwort zu setzen, klicken Sie auf den Button "Login" und klicken Sie auf den Button "Passwort vergessen".</Paragraph>
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
      titleContent: 'FAQ',
    };
  },
  };
  
  </script>