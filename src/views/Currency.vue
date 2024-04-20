<template>
    <div class="container">
        <div class="Currency">
            <p>{{ $n(10000, 'currency') }}</p>
            <p>{{ $n(10000, 'currency') }}</p>
            <p>{{ $n(10000, 'currency', { useGrouping: false }) }}</p>
            <p>{{ $n(987654321, 'currency', { notation: 'compact' }) }}</p>
            <p>{{ $n(0.99123, 'percent') }}</p>
            <p>{{ $n(0.99123, 'percent', { minimumFractionDigits: 2 }) }}</p>
            <p>{{ $n(12.11612345, 'decimal') }}</p>
            <p>{{ $n(12145281111, 'decimal') }}</p>
        </div>
    </div>
</template>

