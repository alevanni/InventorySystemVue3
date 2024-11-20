<script setup>
import ProductsForm from './partials/ProductsForm.vue'
import { ref }  from 'vue'
import { addProduct } from '../store/Inventory'
import { router } from '../router';

const newProduct=ref({name: "", actualAmount: 0, minimumAmount: 0, price: 0})

const submitProduct = (submittedProduct) => {
    addProduct(submittedProduct)
    router.push('/')
}

</script>

<template>
    <h3>Add your item here:</h3>

    <ProductsForm :product="newProduct" @customSubmit="submitProduct"></ProductsForm>
</template>