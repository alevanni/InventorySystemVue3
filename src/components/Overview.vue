<script setup>

import { getAllProducts } from '../store/Inventory.js'
import ProductsTable from './partials/ProductsTable.vue'

const products = getAllProducts.value;

</script>

<template>
    <ProductsTable :products="products"></ProductsTable>
</template>