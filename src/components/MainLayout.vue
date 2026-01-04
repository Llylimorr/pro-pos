<template>
  <div class="min-h-screen flex flex-col font-sans">
    <header class="bg-[#2563eb] text-white h-14 flex items-center justify-between px-6 shadow-sm">
      <h1 class="text-xl font-bold tracking-tight">POS System</h1>
      <div class="text-sm font-medium">Admin</div>
    </header>

    <div class="flex flex-1">
      <aside class="w-56 bg-white border-r border-gray-200 pt-4 px-3 space-y-1">
        <router-link to="/" class="block px-4 py-2 rounded-md bg-blue-50 text-blue-700 font-bold">Dashboard</router-link>
        <router-link to="/products" class="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition">Products</router-link>
        <router-link to="/pos" class="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition">POS</router-link>
      </aside>

      <main class="flex-1 bg-[#f8fafc] p-8">
        <slot />
      </main>
    </div>
  </div>
</template>