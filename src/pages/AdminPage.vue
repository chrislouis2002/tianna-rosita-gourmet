<template>
  <q-page class="q-pa-md">
    <div class="row items-center justify-between q-mb-md">
      <div class="text-h5">Restaurant Orders</div>
      <q-btn label="Logout" color="negative" @click="logout" />
    </div>

    <q-table
      title="Orders"
      :rows="orders"
      :columns="columns"
      row-key="id"
      flat
      bordered
    />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { collection, onSnapshot } from "firebase/firestore"
import { signOut } from "firebase/auth"
import { auth, db } from "src/firebase"
import { useRouter } from "vue-router"

const router = useRouter()
const orders = ref([])

// Define table columns
const columns = [
  { name: "id", label: "Order ID", field: "id" },
  { name: "customerName", label: "Customer", field: "customerName" },
  { name: "total", label: "Total (₦)", field: "total" },
  { name: "status", label: "Status", field: "status" },
  {
    name: "createdAt",
    label: "Created",
    field: row => row.createdAt?.toDate ? row.createdAt.toDate().toLocaleString() : ""
  }
]

// Fetch orders in realtime
onMounted(() => {
  const q = collection(db, "orders")
  onSnapshot(q, snapshot => {
    orders.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
})

// Logout function
async function logout() {
  await signOut(auth)
  router.push("/login")
}
</script>
