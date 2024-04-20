<template>
  <div class="container">
    <div class="Time">
      <p>{{ $t('time.short') }} {{ $d(new Date(), 'short') }}</p>
      <p>{{ $t('time.long') }} {{ $d(new Date(), 'long') }}</p>
    </div>
  </div>
</template>
