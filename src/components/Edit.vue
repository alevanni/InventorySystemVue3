<script setup>
import ProductsForm from './partials/ProductsForm.vue'
import { useRoute } from 'vue-router'
import { getProductById, editProduct } from '../store/Inventory'

const productToEdit = getProductById(useRoute().params.id)

</script>

<template>
    <h3>Edit your product here</h3>
    <ProductsForm :product="productToEdit" @customSubmit="editProduct"></ProductsForm>
</template>