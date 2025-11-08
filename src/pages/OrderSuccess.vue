<template>
  <q-page class="flex flex-center column q-pa-xl">
    <div v-if="loading" class="text-center">
      <q-spinner color="primary" size="50px" />
      <p class="text-grey-8 q-mt-md">Verifying your payment...</p>
    </div>

    <div v-else-if="success" class="text-center">
      <q-icon name="check_circle" color="green" size="80px" />
      <h3 class="q-mt-md">Payment Successful!</h3>
      <p>Your order has been received. We'll start preparing it right away 🍔🔥</p>
      <q-btn color="primary" label="Back to Menu" to="/menu" class="q-mt-md" />
    </div>

    <div v-else class="text-center">
      <q-icon name="error" color="red" size="80px" />
      <h3 class="q-mt-md">Payment Failed</h3>
      <p>We couldn’t verify your payment. Please contact support or try again.</p>
      <q-btn color="primary" label="Try Again" to="/checkout" class="q-mt-md" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(true)
const success = ref(false)

onMounted(async () => {
  const reference = route.query.reference

  if (!reference) {
    loading.value = false
    success.value = false
    return
  }

  try {
    // 🔹 STEP 1: Verify with Paystack API
    const res = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer sk_test_ad864ebf5cefe30bd9593955965bd418ea61cd4b` // ⚠️ Replace for now (we'll move to backend later)
      }
    })

    const data = await res.json()

    // 🔹 STEP 2: Check if verification was successful
    if (data.status && data.data.status === 'success') {
      success.value = true
    } else {
      success.value = false
    }
  } catch (err) {
    console.error('Verification error:', err)
    success.value = false
  } finally {
    loading.value = false
  }
})
</script>
