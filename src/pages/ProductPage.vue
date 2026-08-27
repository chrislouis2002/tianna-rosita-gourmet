<template>
  <div class="product-page">
    <div v-if="loading" class="product-state">
      Loading product...
    </div>


    <div v-else-if="!product" class="product-state">
      <h3>Product not found</h3>


      <q-btn
        label="Back to Menu"
        color="red"
        to="/menu"
        class="q-mt-md"
      />
    </div>


    <div v-else class="product-container">


      <!-- Back button -->
      <q-btn
        flat
        icon="arrow_back"
        label="Back to Menu"
        color="white"
        to="/menu"
        class="back-btn"
      />


      <!-- Main product -->
      <section class="product-hero">


        <div class="product-image-section">
          <img
            v-if="product.image"
            :src="product.image"
            :alt="product.name"
            class="product-main-image"
          />


          <div v-else class="product-image-placeholder">
            <q-icon name="restaurant" size="70px" />
          </div>
        </div>


        <div class="product-details">


          <div class="product-category">
            {{ productCategory }}
          </div>


          <h1>{{ product.name }}</h1>


          <div v-if="product.size" class="product-size">
            {{ product.size }}
          </div>


          <p class="product-description">
            {{ product.description || "Freshly prepared and made to order." }}
          </p>


          <div class="product-price">
            {{
              new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(product.price)
            }}
          </div>


          <!-- Quantity and cart -->
          <div class="product-actions">


            <div class="quantity-controls product-quantity">
              <q-btn
                dense
                flat
                round
                icon="remove"
                color="white"
                @click="decreaseQuantity"
              />


              <span class="quantity-display">
                {{ quantity }}
              </span>


              <q-btn
                dense
                flat
                round
                icon="add"
                color="white"
                @click="increaseQuantity"
              />
            </div>


            <q-btn
              unelevated
              color="red"
              icon="add_shopping_cart"
              label="Add to Cart"
              class="add-cart-btn"
              @click="addToCart"
            />


          </div>


        </div>
      </section>


      <!-- Related foods -->
      <section v-if="relatedFoods.length" class="related-section">


        <div class="related-heading">
          <div>
            <div class="related-kicker">MORE TO ENJOY</div>
            <h2>You may also like</h2>
          </div>


          <q-btn
            flat
            label="View Menu"
            color="red-3"
            to="/menu"
          />
        </div>


        <div class="related-grid">


          <article
            v-for="item in relatedFoods"
            :key="item.id"
            class="related-card"
            @click="openProduct(item)"
          >


            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.name"
              class="related-image"
            />


            <div v-else class="related-placeholder">
              <q-icon name="restaurant" size="38px" />
            </div>


            <div class="related-content">
              <div class="related-name">{{ item.name }}</div>


              <div class="related-price">
                {{
                  new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  }).format(item.price)
                }}
              </div>
            </div>


          </article>


        </div>
      </section>


    </div>
  </div>
</template>


<script>
import { defineComponent, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMenu } from "stores/menus";


export default defineComponent({
  name: "ProductPage",


  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useMenu();


    const productId = computed(() => route.params.id);


    onMounted(async () => {
      if (!store.menu.length) {
        await store.fetchMenu();
      }
    });


    const productCategoryData = computed(() => {
      return store.menu.find((category) =>
        category.items.some((item) => item.id === productId.value)
      );
    });


    const product = computed(() => {
      return productCategoryData.value?.items.find(
        (item) => item.id === productId.value
      ) || null;
    });


    const productCategory = computed(() => {
      return productCategoryData.value?.category || "";
    });


    const quantity = computed(() => {
      const item = store.cart.find(
        (item) => item.id === productId.value
      );


      return item ? item.quantity : 0;
    });


    const relatedFoods = computed(() => {
      if (!product.value) return [];


      // First suggest foods from the same category
      const sameCategory = productCategoryData.value?.items
        .filter((item) => item.id !== product.value.id) || [];


      // If there are not enough foods in that category,
      // add foods from other categories.
      const otherFoods = store.menu
        .flatMap((category) => category.items)
        .filter((item) =>
          item.id !== product.value.id &&
          !sameCategory.some((food) => food.id === item.id)
        );


      return [...sameCategory, ...otherFoods].slice(0, 4);
    });


    const increaseQuantity = () => {
      if (product.value) {
        store.addToCart(product.value);
      }
    };


    const decreaseQuantity = () => {
      if (product.value) {
        store.decreaseQuantity(product.value);
      }
    };


    const addToCart = () => {
      if (product.value) {
        store.addToCart(product.value);
      }
    };


    const openProduct = (item) => {
      router.push({
        name: "product",
        params: {
          id: item.id,
        },
      });
    };


    return {
      store,
      product,
      productCategory,
      relatedFoods,
      quantity,
      loading: computed(() => store.loading),
      increaseQuantity,
      decreaseQuantity,
      addToCart,
      openProduct,
    };
  },
});
</script>


<style scoped>
.product-page {
  min-height: 100vh;
  padding: 30px 16px 60px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.94)),
    url("../6.png");
  background-size: cover;
  background-position: center;
  color: white;
}


.product-container {
  width: min(1100px, 100%);
  margin: 0 auto;
}


.product-state {
  min-height: 60vh;
  display: grid;
  place-items: center;
  text-align: center;
  font-family: "martian", sans-serif;
}


.back-btn {
  margin-bottom: 24px;
}


.product-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.85fr);
  gap: 40px;
  align-items: center;
  padding: 22px;
  border-radius: 28px;
  background: rgba(18, 18, 18, 0.94);
  border: 1px solid rgba(229, 115, 115, 0.25);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4);
}


.product-image-section {
  overflow: hidden;
  border-radius: 22px;
  aspect-ratio: 1 / 0.9;
  background: rgba(0, 0, 0, 0.4);
}


.product-main-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}


.product-image-placeholder {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: rgba(229, 115, 115, 0.8);
}


.product-category,
.related-kicker {
  font-family: "rubik", sans-serif;
  letter-spacing: 2px;
  font-size: 13px;
  color: rgba(255, 215, 64, 1);
}


.product-details h1 {
  margin: 10px 0;
  font-family: "rubik", sans-serif;
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1;
}


.product-size {
  display: inline-block;
  margin-bottom: 16px;
  padding: 5px 12px;
  border-radius: 20px;
  background: rgba(229, 115, 115, 0.14);
  color: rgba(255, 255, 255, 0.75);
}


.product-description {
  max-width: 520px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  font-family: "martian", sans-serif;
  font-size: 14px;
}


.product-price {
  margin: 24px 0;
  font-family: "martian", sans-serif;
  font-size: 27px;
  font-weight: 700;
  color: rgba(255, 215, 64, 1);
}


.product-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}


.product-quantity {
  justify-content: center;
}


.add-cart-btn {
  min-height: 48px;
  padding: 0 22px;
  border-radius: 14px;
}


.quantity-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 8px;
  border-radius: 14px;
  background: rgba(229, 115, 115, 0.12);
}


.quantity-display {
  min-width: 26px;
  text-align: center;
  font-weight: 700;
}


.related-section {
  margin-top: 55px;
}


.related-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}


.related-heading h2 {
  margin: 5px 0 0;
  font-family: "rubik", sans-serif;
  font-size: 32px;
}


.related-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}


.related-card {
  overflow: hidden;
  border-radius: 18px;
  cursor: pointer;
  background: rgba(28, 28, 28, 0.96);
  border: 1px solid rgba(229, 115, 115, 0.2);
  transition: transform 0.2s ease, border-color 0.2s ease;
}


.related-card:hover {
  transform: translateY(-5px);
  border-color: rgba(229, 115, 115, 0.7);
}


.related-image,
.related-placeholder {
  width: 100%;
  aspect-ratio: 1 / 0.78;
}


.related-image {
  display: block;
  object-fit: cover;
}


.related-placeholder {
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.35);
}


.related-content {
  padding: 12px;
}


.related-name {
  font-family: "martian", sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: white;
}


.related-price {
  margin-top: 8px;
  font-family: "martian", sans-serif;
  font-size: 12px;
  color: rgba(255, 215, 64, 1);
}


@media screen and (max-width: 800px) {
  .product-page {
    padding: 18px 10px 45px;
  }


  .product-hero {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 14px;
    border-radius: 22px;
  }


  .product-image-section {
    aspect-ratio: 1 / 0.85;
  }


  .product-details {
    padding: 4px 8px 12px;
  }


  .related-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }


  .related-heading h2 {
    font-size: 25px;
  }
}
</style>
