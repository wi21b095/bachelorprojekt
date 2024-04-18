<template>
  <div class="container">
    <div class="Time">
      <p>Today's date (short format): {{ $d(new Date(), 'short') }}</p>
  <p>Today's date (long format): {{ $d(new Date(), 'long') }}</p>
    </div>
  </div>
</template>

<style>
h1 {
  color: green;
}
</style>
