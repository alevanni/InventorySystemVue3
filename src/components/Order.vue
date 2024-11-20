<script setup>
import ProductsTable from './partials/ProductsTable.vue'
import { getAllProducts } from '../store/Inventory'
import { computed } from 'vue';

const productsToOrder = computed(() => getAllProducts.value.filter((item) => item.actualAmount <= item.minimumAmount))
</script>

<template>
    Products that have to be ordered:
    <ProductsTable :products="productsToOrder"></ProductsTable>
</template>