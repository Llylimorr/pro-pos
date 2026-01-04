<template>
  <h2 class="text-2xl font-bold mb-6">Dashboard</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div v-for="card in stats" :key="card.label" class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <p class="text-gray-400 text-sm font-semibold uppercase tracking-wider">{{ card.label }}</p>
      <p class="text-4xl font-bold mt-2 text-gray-900">{{ card.value }}</p>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { label: 'Total Products', value: '0' },
  { label: 'Today Sales', value: '$0' },
  { label: 'Users', value: '0' }
]
</script>