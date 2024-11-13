import { ref, computed } from 'vue'

// STATE

const products = ref([
    { id: 1, name: "rice", actualAmount: 10, minimumAmount: 15 },
    { id: 2, name: "beans", actualAmount: 20, minimumAmount: 15 },
    { id: 3, name: "tomatoes", actualAmount: 3, minimumAmount: 15 },
    { id: 4, name: "eggs", actualAmount: 100, minimumAmount: 150 }
]);

// GETTERS

export const getAllProducts = computed(() => products.value);

// ACTIONS