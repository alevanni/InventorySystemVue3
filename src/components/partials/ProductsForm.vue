<script setup>
import { ref } from 'vue'
const props = defineProps(['product'])

const productCopy=ref({...props.product})

const emit = defineEmits(['customSubmit'])

const submitForm = () => {
    emit('customSubmit', productCopy.value)
}
</script>

<template>
    
    <form @submit.prevent="submitForm">
        <table>
            <tr>
                <td><label for="name">Name</label></td>
                <td><input type="text" v-model="productCopy.name" id="name"></input></td>
            </tr>
            <tr>
                <td><label for="price">Price</label></td>
                <td><input type="number" v-model="productCopy.price" min="0" step="0.01" max="100" id="price"  /></td>
            </tr>
            <tr>
                <td><label for="actual-amount">Amount</label></td>
                <td><input type="number" v-model="productCopy.actualAmount" min="0" max="2000" id="actual-amount"  /></td>
            </tr>
            <tr>
                <td><label for="minimum-amount">Minimum Amount</label></td>
                <td><input type="number" v-model="productCopy.minimumAmount" min="0" max="2000" id="minimum-amount"></td>
            </tr>
            <tr>
                <td><input type="submit" :value=" product.name == '' ? 'Add' : 'Edit' "></td>
                <td><RouterLink to="/">Cancel</RouterLink></td>
            </tr>
        </table>
    </form>
</template>


        