<script setup>

const props = defineProps(['products'])
</script>

<template>
    <table>
        <thead>
            <th>Product Name</th>
            <th>Price</th>
            <th>Current Amount</th>
            <th>Minimum Amount</th>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.price }} &#8364;</td>
              <td><input type="number" v-model="product.actualAmount" min="0" max="2000"/></td>
              <td>{{ product.minimumAmount }}</td>
              <td><RouterLink :to="{name: 'Edit', params: {id: product.id}}">Edit</RouterLink></td>
            </tr>
        </tbody>
    </table>
</template>