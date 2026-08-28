<template>
  <q-layout view="hHh lpR fFf" :class="!isExcluded ? 'bg-dark-layout' : ''">
    <!-- Header -->
    <q-header elevated class="bg-black">
      <q-toolbar>

        <!-- Hamburger button for mobile -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="lt-md"
        />
        <q-toolbar-title class="title">
          <q-btn flat to="/" label="TIANNA ROSITA" />
        </q-toolbar-title>

        <!-- Desktop navigation buttons -->
        <div class="gt-sm">
          <q-btn flat to="/" label="Home" />
          <q-btn flat to="/menu" label="Menu" />
          <!-- <q-btn flat to="/about" label="About" /> -->
          <q-btn flat to="/checkout" label="Checkout" />
          <q-btn flat to="/login" label="Admin Login" />
        </div>

      </q-toolbar>
    </q-header>

    <!-- Drawer (slides in on mobile) -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      class="bg-black text-white lt-md"
    >
      <q-btn
        flat
        round
        dense
        icon="close"
        @click="leftDrawerOpen = false"
        class="text-white drawer-close-btn"
      />
      <q-list>
        <q-item clickable to="/">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable to="/menu">
          <q-item-section>Menu</q-item-section>
        </q-item>
        <q-item clickable to="/checkout">
          <q-item-section>Checkout</q-item-section>
        </q-item>
        <q-item clickable to="/login">
          <q-item-section>Admin Login</q-item-section>
        </q-item>
        <q-item clickable to="/about">
          <q-item-section>About Us</q-item-section>
        </q-item>
        <q-item clickable to="/find">
          <q-item-section>Find Us</q-item-section>
        </q-item>
        <q-item clickable to="/events">
          <q-item-section>Events And Catering</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- ✅ Shared Floating Cart -->
    <div
      v-if="store.cart.length"
      @click.stop="cart_list = true"
      class="cart-outer"
    >
      <div class="cart-inner">
        <img
          src="/13.png"
          style="
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100%;
          "
        />
      </div>
      <span class="cart-count">{{ store.cart.length }}</span>
    </div>


    <!-- Page Container -->
    <q-page-container>
      <router-view />

      <!-- Footer hidden only on excluded pages -->
      <FooterSection v-if="!isExcluded" />
    </q-page-container>


    <!-- ✅ Shared Cart Modal -->
    <q-dialog v-model="cart_list" persistent>
      <q-card class="cartm">
        <div style="margin-bottom: 2.5rem; padding: 5px 5px">
          <q-btn
            @click.stop="cart_list = false"
            flat
            class="float-right bg-red-2 text-red"
            fab-mini
          >
            <q-icon name="close" />
          </q-btn>
        </div>


        <q-scroll-area style="height: 400px; max-width: 450px">
          <div
            v-for="(item, i) in store.cart"
            :key="i"
            class="listx"
            style="
              position: relative;
              padding: 10px;
              min-width: 100%;
              display: grid;
              grid-template-rows: auto;
              grid-template-columns: 30% 75%;
              justify-content: space-between;
            "
          >
            <div style="display: flex; justify-content: flex-start">
              <div class="outer-countindex">
                <div class="inner-countindex">{{ i + 1 }}</div>
              </div>
            </div>


            <div class="food-infoindex text-white">
              <div>
                <div>{{ item.name }}</div>
                <div v-if="item.size" style="font-family: 'rubik'">
                  {{ item.size }}
                </div>
              </div>


              <q-btn
                style="position: absolute; right: 0.5rem; top: 1.5rem"
                @click.stop="store.removeFromCart(item)"
                flat
                class="bg-transparent text-red"
                fab-mini
              >
                <q-icon name="close" />
              </q-btn>


              <div>
                Price
                {{
                  new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  }).format(item.price)
                }}
              </div>


              <div
                style="
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  margin-top: 5px;
                "
              >
                <q-btn
                  dense
                  flat
                  icon="remove"
                  @click="store.decreaseQuantity(item)"
                />
                <span>{{ item.quantity }}</span>
                <q-btn
                  dense
                  flat
                  icon="add"
                  @click="store.addToCart(item)"
                />
              </div>
            </div>
          </div>
        </q-scroll-area>


        <div style="text-align: center; margin-top: 1rem; padding: 10px">
          <q-btn
            color="red"
            label="Checkout"
            class="q-px-lg q-py-sm"
            to="/checkout"
          />
        </div>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import FooterSection from 'src/components/FooterSection.vue'
import { useMenu } from 'stores/menus'

const leftDrawerOpen = ref(false)
const route = useRoute()


// ✅ Shared cart state for all pages
const store = useMenu()
const cart_list = ref(false)

// Pages where footer & background should NOT show
const excludePages = ['login', 'admin', 'checkout']

// ✅ Make it reactive so it updates on route change
const isExcluded = computed(() => excludePages.includes(route.name))
</script>

<style>
/* ✅ Shared floating cart */
.cart-outer {
  position: fixed;
  right: 20px;
  bottom: 25px;
  z-index: 9999;


  width: 70px;
  height: 70px;


  background: rgba(255, 255, 255, 0.98);
  border-radius: 50%;


  display: flex;
  justify-content: center;
  align-items: center;


  box-shadow:
    0 4px 18px rgba(0, 0, 0, 0.35),
    0 2px 6px rgba(0, 0, 0, 0.2);


  cursor: pointer;
}


.cart-inner {
  width: 54px;
  height: 54px;


  background: rgba(0, 0, 0, 0.08);
  border-radius: 50%;


  display: flex;
  justify-content: center;
  align-items: center;


  overflow: hidden;
}


.cart-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}


.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;


  min-width: 25px;
  height: 25px;


  padding: 0 6px;


  display: flex;
  justify-content: center;
  align-items: center;


  background: #e57373;
  color: white;


  border-radius: 50%;


  font-family: "rubik";
  font-size: 14px;
  font-weight: bold;


  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}


/* ✅ Keep it comfortably away from screen edges on phones */
@media (max-width: 600px) {
  .cart-outer {
    right: 16px;
    bottom: 20px;
    width: 64px;
    height: 64px;
  }


  .cart-inner {
    width: 50px;
    height: 50px;
  }
}


.title {
  font-size: 1.3rem;
  font-weight: bold;
}

.bg-dark-layout {
  background-color: #07070a;
}
</style>
