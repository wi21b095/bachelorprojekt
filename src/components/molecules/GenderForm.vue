<template>
    <label>
    <input type="radio" v-model="selectedGender" value="male"> Male
  </label>

  <label>
    <input type="radio" v-model="selectedGender" value="female"> Female
  </label>

  <label>
    <input type="radio" v-model="selectedGender" value="diverse"> Diverse
  </label>

  <div v-if="selectedGender === 'diverse'">
    <label>
      Diverse Details:
      <input type="text" v-model="diverseDetails">
    </label>
  </div>
</template>