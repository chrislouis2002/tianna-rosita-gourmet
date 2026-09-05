<template>
  <q-layout view="hHh LpR fFf" class="light-layout">
    <!-- Premium Restaurant Header -->
    <q-header class="restaurant-header">
      <q-toolbar class="restaurant-toolbar">

        <!-- Logo / Brand -->
        <div class="brand-area" @click="$router.push('/')">

          <div class="brand-name">
            <span>TIANNA ROSITA</span>
            <small>GOURMET</small>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav gt-sm">
          <q-btn flat to="/" label="HOME" />
          <q-btn flat to="/menu" label="MENU" />
          <q-btn flat to="/about" label="ABOUT US" />
          <q-btn flat label="FIND US" :href="'https://www.google.com/maps/place/Tianna+Rosita/@6.2127385,7.0647874,12z/data=!4m10!1m2!2m1!1stianna+rosita+awka!3m6!1s0x1043836de51840e5:0x58e0bac892328e3a!8m2!3d6.2136739!4d7.0651789!15sChJ0aWFubmEgcm9zaXRhIGF3a2FaFCISdGlhbm5hIHJvc2l0YSBhd2thkgEVaXRhbGlhbl9ncm9jZXJ5X3N0b3JlmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4T2ExTXhVbmxrUlRGd1lXNVNOV0Z0ZHpGWFJUbEpZakJzVGs5VlJSQULgAQD6AQQIABA3!16s%2Fg%2F11ymnd569f?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D'" target="_blank" rel="noopener noreferrer" />
          <q-btn flat to="/events" label="EVENTS & CATERING" />
        </nav>

        <!-- Desktop CTA -->
        <div class="desktop-order gt-sm">
          <q-btn
            label="ORDER NOW"
            unelevated
            class="header-order-btn"
            to="/menu"
          />
        </div>

        <!-- Mobile Menu -->
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="mobile-menu-btn lt-md"
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Open menu"
        />

      </q-toolbar>
    </q-header>

    <!-- Mobile Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="right"
      overlay
      class="mobile-drawer lt-md"
    >
      <div class="drawer-header">
        <div class="drawer-brand">
          <div>
            <strong>TIANNA ROSITA</strong>
            <small>GOURMET</small>
          </div>
        </div>

        <q-btn
          flat
          round
          dense
          icon="close"
          @click="leftDrawerOpen = false"
        />
      </div>

      <q-list class="drawer-list">
        <q-item
          clickable
          v-close-popup
          to="/"
        >
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          to="/menu"
        >
          <q-item-section>Menu</q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          to="/about"
        >
          <q-item-section>About Us</q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          to="/find"
        >
          <q-item-section>Find Us</q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          to="/events"
        >
          <q-item-section>Events & Catering</q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          to="/checkout"
        >
          <q-item-section>Checkout</q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          to="/login"
        >
          <q-item-section>Admin Login</q-item-section>
        </q-item>
      </q-list>

      <div class="drawer-order">
        <q-btn
          label="ORDER NOW"
          unelevated
          class="header-order-btn full-width"
          to="/menu"
        />
      </div>
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
      <span class="cart-count">{{ store.totalItems }}</span>
    </div>


    <!-- Page Container -->
    <q-page-container>
      <router-view />

      <!-- Footer hidden only on excluded pages -->
      <FooterSection v-if="!isExcluded" />
    </q-page-container>


    <!-- ✅ Shared Cart Modal -->
<q-dialog v-model="cart_list" persistent>
  <q-card class="modern-cart">


    <!-- Cart Header -->
    <div class="modern-cart-header">
      <div>
        <div class="modern-cart-title">Your Order</div>
        <div class="modern-cart-subtitle">
          {{ store.totalItems }} {{ store.totalItems === 1 ? 'item' : 'items' }}
        </div>
      </div>


      <q-btn
        flat
        round
        dense
        icon="close"
        class="modern-cart-close"
        @click.stop="cart_list = false"
        aria-label="Close cart"
      />
    </div>


    <!-- Cart Items -->
    <q-scroll-area class="modern-cart-scroll">
      <div
        v-for="item in store.cart"
        :key="item.id"
        class="modern-cart-item"
      >


        <!-- Item Image -->
        <div class="modern-cart-image">
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.name"
          />
          <q-icon
            v-else
            name="restaurant"
            size="28px"
          />
        </div>


        <!-- Item Information -->
        <div class="modern-cart-info">


          <div class="modern-cart-item-top">
            <div class="modern-cart-item-name">
              {{ item.name }}
            </div>


            <q-btn
              flat
              round
              dense
              icon="delete_outline"
              class="modern-cart-remove"
              @click.stop="store.removeFromCart(item)"
              aria-label="Remove item"
            />
          </div>


          <div v-if="item.size" class="modern-cart-size">
            {{ item.size }}
          </div>


          <div class="modern-cart-item-bottom">


            <div class="modern-cart-price">
              {{
                new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  maximumFractionDigits: 0
                }).format(item.price)
              }}
            </div>


            <!-- Quantity -->
            <div class="modern-quantity">
              <q-btn
                flat
                round
                dense
                icon="remove"
                @click="store.decreaseQuantity(item)"
              />


              <span>{{ item.quantity }}</span>


              <q-btn
                flat
                round
                dense
                icon="add"
                @click="store.addToCart(item)"
              />
            </div>


          </div>
        </div>
      </div>


      <!-- Empty state -->
      <div
        v-if="!store.cart.length"
        class="modern-cart-empty"
      >
        <q-icon name="shopping_bag" size="48px" />
        <div>Your cart is empty</div>
      </div>
    </q-scroll-area>


    <!-- Cart Summary -->
    <div
      v-if="store.cart.length"
      class="modern-cart-summary"
    >
      <div class="modern-cart-total-row">
        <span>Total</span>


        <strong>
          {{
            new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
              maximumFractionDigits: 0
            }).format(cartTotal)
          }}
        </strong>
      </div>


      <q-btn
        unelevated
        label="PROCEED TO CHECKOUT"
        icon-right="arrow_forward"
        class="modern-checkout-btn"
        to="/checkout"
        @click="cart_list = false"
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


// ✅ Calculate total price of all items in the cart
const cartTotal = computed(() => {
  return store.cart.reduce((total, item) => {
    return total + (Number(item.price) * Number(item.quantity || 1))
  }, 0)
})

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

/* ================================
   PREMIUM RESTAURANT HEADER
   ================================ */

.restaurant-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 7000;
  background: #ffffff;
  color: #2b1712;
  box-shadow: 0 2px 14px rgba(43, 23, 18, 0.08);
}

.restaurant-toolbar {
  min-height: 82px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  gap: 36px;
}

.brand-area {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  flex-shrink: 0;
}

.brand-logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
  background: #e87524;
  border-radius: 50%;
  padding: 5px;
  box-sizing: border-box;
}

.brand-name {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-name span {
  font-family: "Playfair Display", Georgia, serif;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #2b1712;
  font-style: normal;
}

.brand-name small {
  margin-top: 5px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #e87524;
}

.desktop-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;
}

.desktop-nav .q-btn {
  color: #4a3028;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.6px;
  min-height: 42px;
  padding: 0 15px;
}

.desktop-nav .q-btn:hover {
  color: #e87524;
}

.desktop-order {
  flex-shrink: 0;
}

.header-order-btn {
  background: #e87524;
  color: #ffffff;
  border-radius: 12px;
  min-height: 46px;
  padding: 0 25px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.8px;
  box-shadow: 0 7px 18px rgba(232, 117, 36, 0.22);
}

.header-order-btn:hover {
  background: #d96518;
}

.mobile-menu-btn {
  margin-left: auto;
  color: #2b1712;
  width: 44px;
  height: 44px;
}

.mobile-drawer {
  background: #ffffff;
  color: #2b1712;
}

.drawer-header {
  min-height: 82px;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1e5dc;
}

.drawer-brand {
  display: flex;
  align-items: center;
  gap: 9px;
}

.drawer-brand img {
  width: 44px;
  height: 44px;
  object-fit: contain;
}

.drawer-brand div {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.drawer-brand strong {
  font-size: 13px;
  letter-spacing: 1px;
}

.drawer-brand small {
  margin-top: 5px;
  font-size: 8px;
  letter-spacing: 2.5px;
  color: #e87524;
  font-weight: 700;
}

.drawer-header .q-btn {
  color: #2b1712;
}

.drawer-list {
  padding: 14px 12px;
}

.drawer-list .q-item {
  min-height: 52px;
  border-radius: 10px;
  margin-bottom: 4px;
  color: #3b2720;
  font-size: 15px;
  font-weight: 600;
}

.drawer-list .q-item:hover {
  background: #fff4eb;
  color: #e87524;
}

.drawer-order {
  padding: 20px;
  border-top: 1px solid #f1e5dc;
}

/* Tablet */
@media (max-width: 1023px) {
  .restaurant-toolbar {
    min-height: 72px;
    padding: 0 18px;
  }

  .brand-logo {
    width: 46px;
    height: 46px;
  }

  .brand-name span {
    font-size: 14px;
  }
}

/* Mobile */
@media (max-width: 599px) {
  .restaurant-toolbar {
    min-height: 68px;
    padding: 0 14px;
  }

  .brand-logo {
    width: 42px;
    height: 42px;
  }

  .brand-name span {
    font-size: 17px;
    letter-spacing: 0.3px;
  }

  .brand-name small {
    font-size: 7px;
    letter-spacing: 2.2px;
    margin-top: 4px;
  }

  .mobile-menu-btn {
    width: 42px;
    height: 42px;
  }
}


/* =========================================================
   MODERN SHARED CART
   ========================================================= */


.modern-cart {
  width: min(520px, calc(100vw - 24px));
  max-width: 520px;
  background: #fffaf5;
  color: #2b1712;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(43, 23, 18, 0.22);
}


/* Header */


.modern-cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 22px 17px;
  border-bottom: 1px solid #eee1d7;
  background: #fff;
}


.modern-cart-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #2b1712;
  line-height: 1.2;
}


.modern-cart-subtitle {
  margin-top: 4px;
  font-size: 0.82rem;
  color: #8b7469;
}


.modern-cart-close {
  color: #6f574d;
}


/* Scroll area */


.modern-cart-scroll {
  height: min(430px, 55vh);
  padding: 6px 18px;
}


/* Individual item */


.modern-cart-item {
  display: flex;
  gap: 14px;
  padding: 16px 4px;
  border-bottom: 1px solid #eee1d7;
}


.modern-cart-item:last-child {
  border-bottom: none;
}


/* Item image */


.modern-cart-image {
  width: 76px;
  height: 76px;
  flex: 0 0 76px;
  overflow: hidden;
  border-radius: 14px;
  background: #f3e9e1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e87519;
}


.modern-cart-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}


/* Item info */


.modern-cart-info {
  min-width: 0;
  flex: 1;
}


.modern-cart-item-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}


.modern-cart-item-name {
  font-size: 0.98rem;
  line-height: 1.35;
  font-weight: 700;
  color: #2b1712;
  text-transform: capitalize;
}


.modern-cart-size {
  margin-top: 3px;
  font-size: 0.76rem;
  color: #92796e;
}


.modern-cart-remove {
  color: #b56a50;
  flex: 0 0 auto;
}


.modern-cart-item-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
}


.modern-cart-price {
  color: #e87519;
  font-size: 0.92rem;
  font-weight: 800;
}


/* Quantity controls */


.modern-quantity {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 3px;
  border: 1px solid #e8d8cd;
  border-radius: 10px;
  background: #fff;
}


.modern-quantity .q-btn {
  width: 30px;
  height: 30px;
  min-height: 30px;
  color: #e87519;
}


.modern-quantity span {
  min-width: 24px;
  text-align: center;
  font-size: 0.88rem;
  font-weight: 800;
  color: #2b1712;
}


/* Empty cart */


.modern-cart-empty {
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #9a8278;
  font-size: 0.95rem;
}


/* Summary */


.modern-cart-summary {
  padding: 18px 20px 20px;
  border-top: 1px solid #eadcd2;
  background: #fff;
}


.modern-cart-total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  color: #2b1712;
}


.modern-cart-total-row span {
  font-size: 0.95rem;
  color: #765f56;
}


.modern-cart-total-row strong {
  font-size: 1.35rem;
  color: #2b1712;
}


.modern-checkout-btn {
  width: 100%;
  min-height: 52px;
  border-radius: 12px;
  background: #e87519 !important;
  color: #fff !important;
  font-weight: 800;
  letter-spacing: 0.03em;
}


/* Mobile */


@media screen and (max-width: 600px) {
  .modern-cart {
    width: calc(100vw - 20px);
    border-radius: 20px;
  }


  .modern-cart-header {
    padding: 18px 17px 15px;
  }


  .modern-cart-scroll {
    padding: 4px 13px;
    height: min(430px, 58vh);
  }


  .modern-cart-item {
    gap: 11px;
    padding: 13px 3px;
  }


  .modern-cart-image {
    width: 64px;
    height: 64px;
    flex-basis: 64px;
    border-radius: 12px;
  }


  .modern-cart-item-name {
    font-size: 0.9rem;
  }


  .modern-cart-price {
    font-size: 0.86rem;
  }


  .modern-cart-summary {
    padding: 15px 16px 17px;
  }


  .modern-cart-total-row strong {
    font-size: 1.2rem;
  }
}

</style>
