<template>
  <div class="container">
    <div class="Home">
      <Title :type="titleType">{{ $t('home.title') }}</Title>
      <div>
        <Paragraph>{{ $t('home.subtitleContent') }}</Paragraph>
      </div>

      <SearchField
        :labelId="labelId"
        :labelType="labelType"
        :labelValue="labelValue"
        :inputId="inputId"
        :inputType="inputType"
        :placeholder="$t('home.search')"
        @search="handleInput"
      ></SearchField>


      <div class="row">
        <Card
          v-for="(product, index) in displayedProducts"
          :key="index"
          :cardData="product"
          :class="ClassStyle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import mitt from "mitt";
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";
import Card from "@/components/organism/Card.vue";
import SearchField from "@/components/molecules/SearchField.vue";

export default {
  name: "Home",
  components: {
    Title,
    Paragraph,
    Card,
    SearchField,
  },
  data() {
    return {
      titleType: "h1",
      ClassStyle: "col-sm-7 col-md-5 col-lg-3",
      emitter: mitt(),
      labelId: "searchLabel1",
      labelType: "text",
      labelValue: "Search",
      inputId: "searchInput1",
      inputType: "text",
      searchQuery: "",
      searchResults: [],
      products: [],
    };
  },
  computed: {
    displayedProducts() {
      return this.searchQuery ? this.searchResults : this.products;
    },
  },
  methods: {
     async getProducts() {
    try {
      this.isLoading = true;

      // Lade die Produkte aus der JSON-Datei im public-Ordner
      const response = await fetch("/products.json");
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
      }
      this.products = await response.json();

      // Überprüfe, ob die Produkte geladen wurden
      if (!this.products || !Array.isArray(this.products)) {
        throw new Error("Invalid product data format");
      }
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      this.isLoading = false;
    }
  },

    handleInput(query) {
      this.searchQuery = query;
      // Update searchResults based on the new searchQuery
      this.searchResults = this.products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
  created() {
    // Listen for the search event from Navigation.vue
    mitt().on("search", this.handleInput);
    this.getProducts();
  },
};
</script>

<style scoped></style>
