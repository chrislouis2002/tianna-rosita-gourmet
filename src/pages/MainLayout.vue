<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-toolbar-title>
          Tianna Rosita Gourmet
        </q-toolbar-title>
        <q-btn flat to="/" label="Home" />
        <q-btn flat to="/checkout" label="Checkout" />
        <q-btn flat to="/login" label="Admin Login" />
      </q-toolbar>
    </q-header>

    <!-- Page Container -->
    <q-page-container>
      <router-view />   <!-- 👈 THIS IS CRITICAL -->
    </q-page-container>
  </q-layout>
</template>

<script setup>
// no script needed for now
</script>
