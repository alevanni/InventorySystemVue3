<script setup>
import ProductsForm from './partials/ProductsForm.vue'
import { ref }  from 'vue'
import { addProduct } from '../store/Inventory'

const newProduct=ref({name: "", actualAmount: 0, minimumAmount: 0, price: 0})

</script>

<template>
    <h3>Add your item here:</h3>

    <ProductsForm :product="newProduct" @customSubmit="addProduct"></ProductsForm>
</template>