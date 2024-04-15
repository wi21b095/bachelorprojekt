<!-- Card.vue -->
<template>
    <div class="card">
      <CardHead :name="cardData.name" :price="cardData.price" :category="cardData.category" />
      <hr>
      <CardBody :uuid="cardData.uuid" :imageUrl="imageUrl" />
      <hr>
      <CardFooter :buttonText="cardData.buttonText" @footer-button-click="onFooterButtonClick" />
    </div>
  </template>
  
  <script>
  import CardHead from '@/components/molecules/CardHead.vue';
  import CardBody from '@/components/molecules/CardBody.vue';
  import CardFooter from '@/components/molecules/CardFooter.vue';

  // Define a map of product names to image URLs
const productNameToImageMap = {
  'Brot': '/img/Brot.jpg',
  'Milch': '/img/Milch.jpg',
  'Eier': '/img/Eier.jpg',
  'Käse': '/img/Käse.jpg',
  'Wurst': '/img/Wurst.jpg',
  'Butter': '/img/Butter.jpg',
};
  
  export default {
    components: {
      CardHead,
      CardBody,
      CardFooter
    },
    props: ['cardData'],
    data(){
     return {
      imageUrl: productNameToImageMap[this.cardData.name] || '/img/SYS_logo.jpg',
     };
    },
    
    methods: {
      onFooterButtonClick() {
        // Handle the button click event
      }
    }
  }
  </script>
  
  <style scoped>

  .card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  </style>
  