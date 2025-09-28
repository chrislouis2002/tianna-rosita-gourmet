<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card class="q-pa-md" style="max-width:400px; width:100%;">
      <q-card-section>
        <div class="text-h6">Restaurant Admin Login</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="email" label="Email" type="email" class="q-mb-md" />
        <q-input v-model="password" label="Password" type="password" class="q-mb-md" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn @click="login" label="Login" color="primary" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "src/firebase";
import { useRouter } from "vue-router";


const email = ref("");
const password = ref("");
const router = useRouter();

async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/admin"); // redirect to admin dashboard
  } catch (err) {
    alert("Login failed: " + err.message);
  }
}
</script>
