<!-- Modal.vue -->
<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <p>hi</p>
      <slot></slot>
      <button @click="closeModal">Close Modal</button>
    </div>
  </div>
</template>

<script>
let isExported = true;

export default isExported
  ? {
      data() {
        return {
          showModal: true,
        };
      },
      methods: {
        closeModal() {
          this.showModal = false;
        },
      },
    }
  : null;
</script>

<style scoped>
/* Add your modal styling here */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>
