<template>
  <div class="container">
    <div class="Time">
      <p>{{ $t('time.short') }} {{ $d(new Date(), 'short') }}</p>
      <p>{{ $t('time.long') }} {{ $d(new Date(), 'long') }}</p>
      <p>{{ $t('time.long') }} {{ $d(new Date(1990, 9, 1, 23, 21), 'long') }}</p>
      <p>{{ $t('time.short') }} {{ $d(new Date(1990, 9, 1, 23, 21), 'short') }}</p>

    </div>
  </div>
</template>
