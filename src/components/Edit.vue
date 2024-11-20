<script setup>
import ProductsForm from './partials/ProductsForm.vue'
import { useRoute } from 'vue-router'
import { getProductById, editProduct } from '../store/Inventory'
import { router } from '../router';

const productToEdit = getProductById(useRoute().params.id)

const modifyProduct = (submittedProduct) => {
    editProduct(submittedProduct)
    router.push('/')
}
</script>

<template>
    <h3>Edit your product here</h3>
    <ProductsForm :product="productToEdit" @customSubmit="modifyProduct"></ProductsForm>
</template>