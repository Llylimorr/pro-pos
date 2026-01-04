<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-800 tracking-tight">Product Management</h2>
      <button 
        @click="openAddMode"
        class="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm"
      >
        {{ showForm ? 'Cancel' : '+ New Product' }}
      </button>
    </div>

    <div v-if="showForm" class="bg-white p-6 rounded-xl border border-blue-100 shadow-md animate-in fade-in duration-300">
      <h3 class="text-lg font-bold mb-4 text-blue-600">{{ isEditing ? 'Update Product' : 'Create New Product' }}</h3>
      <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label class="text-xs font-bold uppercase text-gray-400">Name</label>
          <input v-model="form.name" type="text" required class="w-full mt-1 border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Product name...">
        </div>
        <div>
          <label class="text-xs font-bold uppercase text-gray-400">Price ($)</label>
          <input v-model.number="form.price" type="number" step="0.01" required class="w-full mt-1 border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="0.00">
        </div>
        <div>
          <label class="text-xs font-bold uppercase text-gray-400">Category</label>
          <select v-model="form.category" class="w-full mt-1 border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Drinks</option>
            <option>Snacks</option>
            <option>Food</option>
          </select>
        </div>
        <div class="md:col-span-3">
          <button type="submit" class="w-full bg-green-600 text-white py-2.5 rounded-lg font-bold hover:bg-green-700 shadow-lg">
            {{ isEditing ? 'Save Changes' : 'Add to Inventory' }}
          </button>
        </div>
      </form>
    </div>

    <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Product Name</th>
            <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Price</th>
            <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Category</th>
            <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="(item, index) in products" :key="index" class="hover:bg-blue-50/30 transition-colors">
            <td class="px-6 py-4 font-medium text-gray-800">{{ item.name }}</td>
            <td class="px-6 py-4 text-gray-600">${{ item.price.toFixed(2) }}</td>
            <td class="px-6 py-4"><span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">{{ item.category }}</span></td>
            <td class="px-6 py-4 text-right space-x-4">
              <button @click="startEdit(index)" class="text-blue-600 font-bold hover:text-blue-800 transition">Edit</button>
              <button @click="deleteItem(index)" class="text-red-500 font-bold hover:text-red-700 transition">Delete</button>
            </td>
          </tr>
          <tr v-if="products.length === 0">
            <td colspan="4" class="px-6 py-10 text-center text-gray-400 italic">No products added yet.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([]);
const showForm = ref(false);
const isEditing = ref(false);
const currentIdx = ref(null);

const form = ref({ name: '', price: 0, category: 'Drinks' });


const openAddMode = () => {
  isEditing.value = false;
  form.value = { name: '', price: 0, category: 'Drinks' };
  showForm.value = !showForm.value;
};

const handleSubmit = () => {
  if (isEditing.value) {
    products.value[currentIdx.value] = { ...form.value };
  } else {
    products.value.push({ ...form.value });
  }
  showForm.value = false;
};

const startEdit = (index) => {
  isEditing.value = true;
  currentIdx.value = index;
  form.value = { ...products.value[index] };
  showForm.value = true;
};

const deleteItem = (index) => {
  if (confirm('Delete this product?')) {
    products.value.splice(index, 1);
  }
};
</script>
