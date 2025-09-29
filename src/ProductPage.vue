<template>
  <div>
    <!-- This could just show a loading text -->
    <h2>Loading product...</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

// 1. Get the route info (like /product/shawarma)
const route = useRoute()

onMounted(() => {
  const productId = route.params.id  // example: "shawarma"
  console.log("Open popup for:", productId)

  // ⬇️ Here you will later add code that opens your checkout popup for that product
})
</script>
