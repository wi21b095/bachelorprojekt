<template>
    <label>
    <input type="radio" v-model="selectedGender" value="male"> {{ $t('genderForm.male') }}
  </label>

  <label>
    <input type="radio" v-model="selectedGender" value="female"> {{ $t('genderForm.female') }}
  </label>

  <label>
    <input type="radio" v-model="selectedGender" value="diverse"> {{ $t('genderForm.diverse') }}
  </label>

  <div v-if="selectedGender === 'diverse'">
    <label>
      {{ $t('genderForm.diverseDetails') }}
      <input type="text" v-model="diverseDetails">
    </label>
  </div>
</template>