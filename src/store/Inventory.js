import { ref, computed } from 'vue'
import { router } from '../router/index.js'
// STATE

const products = ref([
    { id: 1, name: "rice", actualAmount: 10, minimumAmount: 15, price: 1.99 },
    { id: 2, name: "beans", actualAmount: 20, minimumAmount: 15, price: 0.89 },
    { id: 3, name: "tomatoes", actualAmount: 3, minimumAmount: 15, price: 1.43 },
    { id: 4, name: "eggs", actualAmount: 100, minimumAmount: 150, price: 0.37 },
    { id: 5, name: "carrots", actualAmount: 43, minimumAmount: 65, price: 0.76 },
    { id: 6, name: "cabbage", actualAmount: 64, minimumAmount: 55, price: 1.04 },
    { id: 7, name: "milk", actualAmount: 58, minimumAmount: 60, price: 1.27 },
    { id: 8, name: "corn", actualAmount: 33, minimumAmount: 45, price: 1.13 }
]);

const nextId = products.value.length + 1

// GETTERS

export const getAllProducts = computed(() => products.value);

export const getProductById = (id) => computed(() => products.value.find(item => item.id == id))

// ACTIONS

export const addProduct = (newProduct) => {
    const product = {
        id: nextId,
        ...newProduct
    }
    products.value.push(product)
}

export const editProduct = (newProduct) => {
    let productToEdit = products.value.find(item => item.id == newProduct.id)

    productToEdit.name = newProduct.name
    productToEdit.price = newProduct.price
    productToEdit.actualAmount = newProduct.actualAmount
    productToEdit.minimumAmount = newProduct.minimumAmount
}