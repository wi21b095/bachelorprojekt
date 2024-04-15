<template>
    <button @click="handleClick" class="btn btn-dark">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'Button',
    props: {
      handleClick: Function,
    }
  }
  </script>
  
  <style scoped>
  
  </style>