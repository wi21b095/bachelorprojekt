<template>
  <div class="container">
    <div class="Imprint">
      <Title :type="titleType">{{ titleContent }}</Title>
      <hr />
      <div>
        <Title type="h2">Angaben gemäß § 5 ECG</Title>
        <Paragraph>
          Max Mustermann<br />
          Musterstraße 1<br />
          12345 Musterstadt
        </Paragraph>
        <Title type="h2">Kontakt</Title>
        <Paragraph>
          Telefon: 01234-789456<br />
          Telefax: 1234-56789<br />
          E-Mail: max@musterperson.at
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
      titleContent: "Imprint",
    };
  },
};
</script>
