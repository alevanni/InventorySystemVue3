<script setup>
import ProductsTable from './partials/ProductsTable.vue'
import { getLowProducts } from '../store/Inventory'

const productsToOrder = getLowProducts
</script>

<template>
    Products that have to be ordered:
    <ProductsTable :products="productsToOrder"></ProductsTable>
</template>