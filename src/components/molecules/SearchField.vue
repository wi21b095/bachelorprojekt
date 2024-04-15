<template>
  <div>
    <Input
      :id="inputId"
      :type="inputType"
      :value="searchQuery"
      :placeholder="placeholder"
      @input="handleInput"
    
    ></Input>
  </div>
</template>

<script>
import Input from "@/components/atoms/Input.vue";

export default {
  name: "SearchField",
  components: {
    Input,
  },
  props: {
    labelId: String,
    labelType: String,
    labelValue: String,
    inputId: String,
    inputType: String,
    placeholder: String,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  watch: {
    searchQuery(newQuery) {
      this.$emit("search", newQuery);
    },
  },
  methods: {
    handleInput(event) {
      this.searchQuery = event.target.value;
      // Emit the search event
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}

.input {
  margin: 10px;
  width: 400px;
}
</style>
