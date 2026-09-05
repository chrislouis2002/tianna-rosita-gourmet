<template>
  <q-page class="home-page">

    <!-- HERO -->
    <section class="hero-section">
      <div class="hero-container">

        <q-carousel
          v-model="slide"
          animated
          swipeable
          infinite
          :autoplay="5000"
          control-color="primary"
          height="auto"
          class="hero-carousel"
        >
          <q-carousel-slide
            v-for="(s, i) in slides"
            :key="i"
            :name="i"
            class="hero-slide"
          >
            <div class="hero-card">

              <div class="hero-card-content">
                <span class="hero-eyebrow">
                  TIANNA ROSITA GOURMET
                </span>

                <h1 class="hero-title">
                  {{ s.title }}
                </h1>

                <p
                  v-if="s.subtitle"
                  class="hero-subtitle"
                >
                  {{ s.subtitle }}
                </p>

                <div class="hero-actions">
                  <q-btn
                    label="ORDER NOW"
                    unelevated
                    class="hero-primary-btn"
                    @click="$router.push({ path: '/menu', query: { category: category.name } })"
                  />

                  <q-btn
                    label="VIEW MENU"
                    flat
                    class="hero-secondary-btn"
                    @click="$router.push('/menu')"
                  />
                </div>
              </div>

              <div class="hero-card-image">
                <img
                  :src="s.image"
                  :alt="s.title"
                  draggable="false"
                />
              </div>

            </div>
          </q-carousel-slide>


        </q-carousel>


        <div class="hero-indicators">
          <button
            v-for="(s, i) in slides"
            :key="'indicator-' + i"
            type="button"
            class="hero-indicator"
            :class="{ active: slide === i }"
            :aria-label="`Go to slide ${i + 1}`"
            @click="slide = i"
          />


        </div>



      </div>
    </section>


    <!-- BENEFITS -->
    <section class="benefits-section">
      <div class="benefits-container">


        <div class="benefit-item">
          <div class="benefit-icon">
            <q-icon name="local_shipping" />
          </div>
          <div class="benefit-text">
            <strong>Fast Delivery</strong>
            <span>Quick &amp; reliable</span>
          </div>
        </div>


        <div class="benefit-divider"></div>


        <div class="benefit-item">
          <div class="benefit-icon">
            <q-icon name="restaurant" />
          </div>
          <div class="benefit-text">
            <strong>Freshly Made</strong>
            <span>Quality ingredients</span>
          </div>
        </div>


        <div class="benefit-divider"></div>


        <div class="benefit-item">
          <div class="benefit-icon">
            <q-icon name="verified_user" />
          </div>
          <div class="benefit-text">
            <strong>Secure Payment</strong>
            <span>100% safe checkout</span>
          </div>
        </div>


      </div>
    </section>




    <!-- WELCOME
    <section class="welcome-section">
      <div class="section-container">
        <span class="section-eyebrow">WELCOME TO TIANNA ROSITA</span>

        <h2 class="section-heading">
          GOOD FOOD. GREAT MOMENTS.
        </h2>

        <p class="section-intro">
          From carefully prepared local favourites to delicious continental
          dishes, we bring together great food, warm hospitality and an
          unforgettable dining experience in Awka.
        </p>

        <q-btn
          label="DISCOVER OUR STORY"
          unelevated
          class="outline-orange-btn"
          @click="$router.push('/about')"
        />
      </div>
    </section> -->


    <!-- SEARCH -->
    <section class="home-search-section">
      <div class="home-search-container">


        <div class="home-search-label">
          <span>WHAT ARE YOU CRAVING?</span>
        </div>


        <div class="home-search-box">
          <q-icon name="search" class="home-search-icon" />


          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for food, drinks, desserts..."
            aria-label="Search for food, drinks, desserts"
          />


        </div>


        <div v-if="searchQuery.trim() && searchResults.length" class="home-search-results">
          <button
            v-for="item in searchResults"
            :key="item.id"
            type="button"
            class="home-search-result"
            @click="$router.push(`/product/${item.id}`)"
          >
            <img :src="item.image" :alt="item.name" />


            <span class="home-search-result-info">
              <strong>{{ item.name }}</strong>
              <small>{{ item.category }}</small>
            </span>


            <span class="home-search-result-price">
              ₦{{ Number(item.price || 0).toLocaleString() }}
            </span>
          </button>
        </div>


        <div v-else-if="searchQuery.trim() && !searchResults.length" class="home-search-empty">
          <q-icon name="search_off" />
          <span>No food found for "{{ searchQuery }}"</span>
        </div>



      </div>
    </section>




    <!-- POPULAR PICKS -->
    <section class="favourites-section">
      <div class="section-container">


        <div class="section-heading-wrap">
          <div>
            <span class="section-eyebrow">OUR BEST SELLERS</span>


            <!-- <h2 class="section-heading">
              POPULAR PICKS
            </h2> -->
          </div>


          <q-btn
            label="VIEW ALL →"
            flat
            class="popular-view-all desktop-only-btn"
            @click="$router.push('/menu')"
          />
        </div>


        <Swiper
          :breakpoints="breakpoints"
          :space-between="12"
          :loop="true"
          :autoplay="{ delay: 2800, disableOnInteraction: false }"
          :modules="[Autoplay]"
          class="signature-swiper"
        >
          <SwiperSlide
            v-for="(dish, index) in signatureDishes"
            :key="index"
          >
            <div class="dish-card"
              role="button"
              tabindex="0"
              @click="openPopularDish(dish)"
              @keydown.enter="openPopularDish(dish)">


              <div class="dish-image-wrap">
                <img
                  :src="dish.image"
                  :alt="dish.name"
                  class="dish-image"
                />
              </div>


              <div class="dish-card-content">
                <h3>{{ dish.name }}</h3>


                <div class="dish-card-bottom">
                  <span class="dish-price">
                    ₦{{ Number(dish.price || 0).toLocaleString() }}
                  </span>


                  <q-btn
                    round
                    unelevated
                    icon="add"
                    size="sm"
                    class="dish-add-btn"
                    @click.stop="menuStore.addToCart(dish)"
                    aria-label="Add to cart"
                  />
                </div>
              </div>


            </div>
          </SwiperSlide>
        </Swiper>


      </div>
    </section>

   

    <!-- FOOD CATEGORIES -->
    <section class="home-categories-section">
      <div class="section-container">
        <div class="section-heading-wrap">

          <q-btn
            label="VIEW ALL CATEGORIES →"
            flat
            class="popular-view-all"
            @click="$router.push('/menu')"
          />
        </div>


        <div class="home-categories-scroll">
          <button
            v-for="category in homeCategories"
            :key="category.name"
            type="button"
            class="home-category-item"
            @click="$router.push({
              path: '/menu',
              query: { category: category.name }
            })"
          >
            <div class="home-category-image-wrap">
              <img
                v-if="category.image"
                :src="`/category_images/${category.image}`"
                :alt="category.name"
                class="home-category-image"
              />
              <q-icon v-else name="restaurant" />
            </div>


            <span class="home-category-name">
              {{ category.name }}
            </span>
          </button>
        </div>
      </div>
    </section>




    <!-- HOW TO ORDER -->
    <section class="order-section">
      <div class="section-container">
        <div class="centered-heading">
          <span class="section-eyebrow">SIMPLE & EASY</span>

          <h2 class="section-heading">
            HOW TO ORDER
          </h2>

          <p class="section-intro">
            Your favourite meal is only a few clicks away.
          </p>
        </div>

        <div class="order-steps">
          <div
            class="order-step clickable-step"
            @click="$router.push('/menu')"
          >
            <div class="step-number">01</div>
            <q-icon
              name="restaurant_menu"
              size="42px"
            />
            <h3>Browse Menu</h3>
            <p>Explore our dishes and choose your favourites.</p>
          </div>

          <div class="order-step">
            <div class="step-number">02</div>
            <q-icon
              name="add_shopping_cart"
              size="42px"
            />
            <h3>Add to Cart</h3>
            <p>Select your meals and add them to your order.</p>
          </div>

          <div class="order-step">
            <div class="step-number">03</div>
            <q-icon
              name="payment"
              size="42px"
            />
            <h3>Checkout</h3>
            <p>Confirm your details and pay securely.</p>
          </div>

          <div class="order-step">
            <div class="step-number">04</div>
            <q-icon
              name="delivery_dining"
              size="42px"
            />
            <h3>Enjoy</h3>
            <p>Relax while your freshly prepared meal comes to you.</p>
          </div>
        </div>

        <div class="order-cta">
          <q-btn
            label="ORDER FOOD NOW"
            unelevated
            class="orange-btn large-orange-btn"
            @click="$router.push('/menu')"
          />
        </div>
      </div>
    </section>



    <!-- EVENTS -->
    <section class="events-section">
      <div class="section-container">
        <div class="events-card">
          <div class="events-image">
            <img
              src="/slider/Glamorous-black-and-gold-wedding-reception.jpeg"
              alt="Tianna Rosita Gourmet event"
            />
          </div>

          <div class="events-content">
            <span class="section-eyebrow">MAKE IT SPECIAL</span>

            <h2 class="section-heading">
              EVENTS, CELEBRATIONS
              <span>& CATERING</span>
            </h2>

            <p>
              Planning a celebration, private gathering or corporate event?
              Let Tianna Rosita Gourmet help make it memorable.
            </p>

            <q-btn
              label="EXPLORE EVENTS"
              unelevated
              class="orange-btn"
              @click="$router.push('/events')"
            />
          </div>
        </div>
      </div>
    </section>


    <!-- LOCATION -->
    <section class="location-section">
      <div class="section-container location-content">
        <span class="section-eyebrow">COME VISIT US</span>

        <h2 class="section-heading">
          FIND US IN AWKA
        </h2>

        <p>
          Come dine with us at Solution Fun City, Awka, Anambra State.
        </p>

        <div class="location-actions">
          <q-btn
            label="FIND US"
            unelevated
            class="orange-btn"
            :href="'https://www.google.com/maps/place/Tianna+Rosita/@6.2127385,7.0647874,12z/data=!4m10!1m2!2m1!1stianna+rosita+awka!3m6!1s0x1043836de51840e5:0x58e0bac892328e3a!8m2!3d6.2136739!4d7.0651789!15sChJ0aWFubmEgcm9zaXRhIGF3a2FaFCISdGlhbm5hIHJvc2l0YSBhd2thkgEVaXRhbGlhbl9ncm9jZXJ5X3N0b3JlmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4T2ExTXhVbmxrUlRGd1lXNVNOV0Z0ZHpGWFJUbEpZakJzVGs5VlJSQULgAQD6AQQIABA3!16s%2Fg%2F11ymnd569f?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D'" target="_blank" rel="noopener noreferrer"
          />

          <q-btn
            label="ORDER ONLINE"
            flat
            class="outline-orange-btn"
            @click="$router.push('/menu')"
          />
        </div>
      </div>
    </section>

  </q-page>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useMenu } from "src/stores/menus";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default {
  name: "HomePage",
  components: { Swiper, SwiperSlide },

  // 🧠 Added this "meta" section for SEO
  meta: {
    title: "Order Food Online in Awka — Tianna Rosita Gourmet",
    meta: [
      {
        name: "description",
        content:
          "Order delicious meals from Tianna Rosita Gourmet in Awka. Freshly prepared, fast delivery, and the best local and continental dishes in town!",
      },
      {
        property: "og:title",
        content: "Order Food Online in Awka — Tianna Rosita Gourmet",
      },
      {
        property: "og:description",
        content:
          "Order delicious meals from Tianna Rosita Gourmet in Awka. Freshly prepared and delivered fast to your doorstep.",
      },
      {
        property: "og:image",
        content: "/logo.png",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
  },

  setup() {
    const router = useRouter();
    const slide = ref(0);

    // Hero slides
    const slides = [
      {
        title: "Good Food, Great Moments",
        subtitle:
          "From satisfying meals to unforgettable flavors.",
        image: "/slider/cream-hero1.png",
      },
      {
        title: "Free Popcorn & Ice-cream",
        subtitle:
          "Get free popcorn and ice-cream when you order online.",
        image: "/slider/cream-hero2.png",
      },
      {
        title: "Yummy and Satisfying",
        subtitle:
          "Delicious meals prepared with quality ingredients and served just the way you love them.",
        image: "/slider/cream-hero3.png",
      },
      {
        title: "Made for Every Occasion",
        subtitle:
          "Enjoy delicious food for everyday meals, celebrations, date nights and special events.",
        image: "/slider/cream-hero4.png",
      },
    ];

    // Popular Picks are controlled from the Admin page.
    const menuStore = useMenu();


    const signatureDishes = computed(() =>
      menuStore.menu
        .flatMap((category) => category.items || [])
        .filter((item) => item.popular === true && item.available !== false)
    );


    // Open a Popular Pick and pass its menu category to the product page.
    const openPopularDish = (dish) => {
      const menuCategory = menuStore.menu.find((category) =>
        (category.items || []).some(
          (item) => String(item.id) === String(dish.id)
        )
      );


      router.push({
        name: "product",
        params: {
          id: dish.id,
        },
        query: {
          category: menuCategory?.category || "",
        },
      });
    };


    const categoryImageMap = {
      "Starters": "starters.jpeg",
      "Pizza": "pizza.png",
      "Extras": "Loaded-Fries-735x490.webp",
      "Salads": "salad.jpeg",
      "Drinks": "wine.png",
      "Desserts": "dessert.jpg",
      "Finger Foods & Sides": "fingerfoods&sides.jpeg",
      "Main Dishes": "rice.jpg",
      "Burgers/Sandwiches/Wraps": "burgers.png"
    };




    const homeCategories = computed(() =>
      menuStore.menu
        .filter((category) => category.items && category.items.length)
        .map((category) => ({
          name: category.category,
          image: categoryImageMap[category.category] || "",
        }))
    );




    // Homepage search
    const searchQuery = ref("");


    const searchResults = computed(() => {
      const query = searchQuery.value.trim().toLowerCase();


      if (!query) return [];


      return menuStore.menu
        .flatMap((category) =>
          (category.items || []).map((item) => ({
            ...item,
            category: category.category,
          }))
        )
        .filter((item) => {
          const name = (item.name || "").toLowerCase();
          const description = (item.description || "").toLowerCase();
          const category = (item.category || "").toLowerCase();


          return (
            name.includes(query) ||
            description.includes(query) ||
            category.includes(query)
          );
        })
        .slice(0, 8);
    });




    onMounted(async () => {
      if (!menuStore.menu.length) {
        await menuStore.fetchMenu();
      }
    });


    // responsive breakpoints
    const breakpoints = {
      0: { slidesPerView: 2.15 },
      390: { slidesPerView: 2.35 },
      480: { slidesPerView: 3 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 4 },
    };

    function openContact() {
      alert("Contact modal will be added later!"); // temporary
    }

    const categories = [
      {
        title: "MENU",
        image: "/slider/_ (2).jpeg",
        route: "/menu",
      },
      {
        title: "ABOUT US",
        image: "/slider/Tianna-chef1.jpg",
        route: "/about",
      },
      {
        title: "FIND US",
        image: "/slider/park.jpeg",
        route: "/find",
      },
      {
        title: "EVENTS & CATERING",
        image: "/slider/_ (3).jpeg",
        route: "/events",
      },
    ];


    return {
      openPopularDish,
      slide,
      slides,
      signatureDishes,
      homeCategories,
      menuStore,
      searchQuery,
      searchResults,
      Autoplay,
      Navigation,
      breakpoints,
      categories,
      openContact,
    };
  },
};
</script>

<style scoped>
/* =========================================================
   TIANNA ROSITA GOURMET — LIGHT RESTAURANT HOMEPAGE
   ========================================================= */

/* =========================================================
   BENEFITS ROW
   ========================================================= */

/* =========================================================
   HOMEPAGE SEARCH
   ========================================================= */


.home-categories-section {
  width: 100%;
  background: #fff;
  padding: 34px 0 38px;
}


.home-categories-scroll {
  width: 100%;
  display: flex;
  gap: 2px;
  overflow-x: auto;
  padding: 4px 2px 12px;
  scrollbar-width: none;
}


.home-categories-scroll::-webkit-scrollbar {
  display: none;
}


.home-category-item {
  flex: 0 0 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}


.home-category-image-wrap {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff7f1;
  border: 4px solid #fff;
  box-shadow: 0 5px 18px rgba(43, 23, 18, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}


.home-category-item:hover .home-category-image-wrap {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(244, 81, 30, 0.18);
}


.home-category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.home-category-image-wrap .q-icon {
  color: #f4511e;
  font-size: 32px;
}


.home-category-name {
  width: 108px;
  color: #2b1712;
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
}


.home-search-section {
  width: 100%;
  background: #fffaf5;
  padding: 24px 0 30px;
}


.home-search-container {
  width: min(100% - 32px, 900px);
  margin: 0 auto;
}


.home-search-label {
  margin-bottom: 9px;
}


.home-search-label span {
  color: #806f68;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}


.home-search-box {
  width: 100%;
  min-height: 58px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 18px;
  background: #fff;
  border: 1px solid #eaded6;
  border-radius: 16px;
  box-shadow: 0 5px 18px rgba(43, 23, 18, 0.06);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}


.home-search-box:focus-within {
  border-color: #f4511e;
  box-shadow: 0 6px 20px rgba(244, 81, 30, 0.1);
}


.home-search-icon {
  color: #f4511e;
  font-size: 24px;
  flex-shrink: 0;
}


.home-search-box input {
  width: 100%;
  height: 54px;
  border: 0;
  outline: 0;
  background: transparent;
  color: #2b1712;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
}


.home-search-box input::placeholder {
  color: #a49790;
  opacity: 1;
}


.home-search-results {
  width: 100%;
  margin-top: 10px;
  padding: 6px;
  background: #fff;
  border: 1px solid #eaded6;
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(43, 23, 18, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 10;
}


.home-search-result {
  width: 100%;
  min-height: 70px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 10px;
  border: 0;
  border-bottom: 1px solid #f1e8e2;
  background: #fff;
  text-align: left;
  cursor: pointer;
  transition: background 0.2s ease;
}


.home-search-result:last-child {
  border-bottom: 0;
}


.home-search-result:hover {
  background: #fff8f3;
}


.home-search-result img {
  width: 52px;
  height: 52px;
  flex: 0 0 52px;
  object-fit: cover;
  border-radius: 12px;
  background: #fff4ed;
}


.home-search-result-info {
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}


.home-search-result-info strong {
  color: #2b1712;
  font-size: 0.82rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


.home-search-result-info small {
  color: #8d7d75;
  font-size: 0.68rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


.home-search-result-price {
  flex-shrink: 0;
  color: #f4511e;
  font-size: 0.78rem;
  font-weight: 800;
}


.home-search-empty {
  width: 100%;
  margin-top: 10px;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #eaded6;
  border-radius: 14px;
  color: #806f68;
  font-size: 0.78rem;
  box-shadow: 0 8px 22px rgba(43, 23, 18, 0.07);
}


.home-search-empty .q-icon {
  color: #f4511e;
  font-size: 20px;
}




.benefits-section {
  width: 100%;
  background: #fffaf5;
  padding: 18px 0 20px;
}


.benefits-container {
  width: min(100% - 32px, 1180px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 18px;
}


.benefit-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 0;
}


.benefit-icon {
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff;
  color: #f4511e;
  box-shadow: 0 3px 12px rgba(43, 23, 18, 0.07);
}


.benefit-icon .q-icon {
  font-size: 23px;
}


.benefit-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}


.benefit-text strong {
  color: #2b1712;
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.25;
}


.benefit-text span {
  margin-top: 3px;
  color: #806f68;
  font-size: 0.72rem;
  line-height: 1.3;
}


.benefit-divider {
  width: 1px;
  height: 38px;
  flex: 0 0 1px;
  background: #eaded6;
}



.home-page {
  background: #fffaf5;
  color: #2b1712;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

/* ---------------------------------------------------------
   SHARED
   --------------------------------------------------------- */

.section-container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.section-eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  color: #e87519;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.section-heading {
  margin: 0;
  color: #2b1712;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.025em;
}

.section-heading span {
  display: block;
  color: #e87519;
}

.section-intro {
  max-width: 700px;
  margin: 18px auto 25px;
  color: #765f56;
  font-size: 1rem;
  line-height: 1.8;
}

.section-intro-left {
  margin-left: 0;
  margin-right: 0;
}

.centered-heading {
  text-align: center;
}

.orange-btn {
  min-height: 48px;
  padding: 0 24px;
  border-radius: 6px;
  background: #e87519 !important;
  color: #fff !important;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.large-orange-btn {
  min-height: 54px;
  padding: 0 32px;
}

.outline-orange-btn {
  min-height: 48px;
  padding: 0 24px;
  border: 1px solid #e87519;
  border-radius: 6px;
  color: #e87519 !important;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.mobile-menu-btn {
  display: none;
}

/* ---------------------------------------------------------
   HERO
   --------------------------------------------------------- */

.hero-section {
  width: 100%;
  padding: 24px 0 28px;
  background: #fffaf5;
}

.hero-container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.hero-carousel {
  width: 100%;
  background: transparent;
  border-radius: 0;
  overflow: visible;
  position: relative;
}


.hero-indicators {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
}


.hero-indicator {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(43, 23, 18, 0.28);
  cursor: pointer;
  appearance: none;
  transition: all 0.25s ease;
}


.hero-indicator.active {
  width: 24px;
  border-radius: 999px;
  background: #f4511e;
}

.hero-slide {
  padding: 0;
  background: transparent;
}

  .hero-card {
    display: grid;
    grid-template-columns: 0.88fr 1.12fr;
    min-height: 430px;
    overflow: hidden;
    background: #f5f6ff;
    border: none;
    border-radius: 28px;
    box-shadow: none;
  }


  .hero-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 48px clamp(28px, 4vw, 58px);
    background: #fffaf5;
    position: relative;
    z-index: 2;
  }


  .hero-eyebrow {
    display: inline-block;
    margin-bottom: 12px;
    color: #e87519;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.12em;
  }


  .hero-title {
    max-width: 520px;
    margin: 0;
    color: #2b1712;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(2.35rem, 4vw, 4rem);
    line-height: 1.04;
    font-weight: 700;
    letter-spacing: -0.025em;
    text-transform: capitalize;
  }


  .hero-subtitle {
    max-width: 440px;
    margin: 16px 0 0;
    color: #67534b;
    font-size: 0.94rem;
    line-height: 1.65;
  }


  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 24px;
  }


  .hero-primary-btn {
    min-height: 48px;
    padding: 0 26px;
    border-radius: 24px;
    background: #f4511e !important;
    color: #fff !important;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    box-shadow: 0 7px 18px rgba(244, 81, 30, 0.18);
  }


  .hero-secondary-btn {
    min-height: 48px;
    padding: 0 24px;
    border: 1px solid #f4511e;
    border-radius: 24px;
    color: #f4511e !important;
    font-size: 0.8rem;
    font-weight: 700;
  }


  .hero-card-image {
    min-height: 430px;
    overflow: hidden;
    background: transparent;
    margin-left: -55px;
    position: relative;
    z-index: 1;
  }


  .hero-card-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    object-position: center;
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.35) 10%,
      #000 24%,
      #000 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.35) 10%,
      #000 24%,
      #000 100%
    );
  }

.hero-carousel :deep(.q-carousel__navigation) {
  bottom: 10px;
}

.hero-carousel :deep(.q-carousel__navigation .q-btn) {
  margin: 0 2px;
}

.hero-carousel :deep(.q-carousel__arrow) {
  color: #f4511e;
}

/* ---------------------------------------------------------
   WELCOME
   --------------------------------------------------------- */

.welcome-section {
  padding: 95px 20px;
  text-align: center;
  background: #fffaf5;
}

.welcome-section .section-intro {
  max-width: 760px;
}

/* ---------------------------------------------------------
   LAR PICKS
   --------------------------------------------------------- */


.favourites-section {
  padding: 55px 0 65px;
  background: #fffaf5;
}


.section-heading-wrap {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}


.signature-swiper {
  width: 100%;
  padding: 4px 2px 20px;
  overflow: hidden;
}


.dish-card {
  position: relative;
  overflow: hidden;
  background: #fff;
  border: 1px solid #eee5de;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(61, 35, 20, 0.07);
}


.dish-image-wrap {
  width: 100%;
  aspect-ratio: 1 / 0.78;
  overflow: hidden;
  background: #f4eee9;
}


.dish-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
}


.dish-card:hover .dish-image {
  transform: scale(1.04);
}


.dish-card-content {
  position: relative;
  min-height: 48px;
  padding: 8px 34px 9px 9px;
}


.dish-card-content h3 {
  margin: 0;
  color: #2b1712;
  font-size: 0.78rem;
  line-height: 1.25;
  font-weight: 700;
  text-transform: capitalize;
}


.dish-add-btn {
  position: absolute;
  right: 7px;
  bottom: 7px;
  width: 28px;
  height: 28px;
  min-height: 28px;
  background: #f4511e !important;
  color: #fff !important;
}


.popular-view-all {
  color: #e87519 !important;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}


.signature-swiper :deep(.swiper-button-next),
.signature-swiper :deep(.swiper-button-prev) {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
}


.signature-swiper :deep(.swiper-button-next::after),
.signature-swiper :deep(.swiper-button-prev::after) {
  font-size: 13px;
  font-weight: 900;
  color: #e87519;
}


/* ---------------------------------------------------------
   CATEGORIES
   --------------------------------------------------------- */

.categories-section {
  padding: 90px 0 100px;
  background: #fffaf5;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 45px;
}

.category-card {
  display: block;
  overflow: hidden;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(61, 35, 20, 0.1);
}

.category-image {
  display: block;
  transition: transform 0.4s ease;
}

.category-card:hover .category-image {
  transform: scale(1.04);
}

.category-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 25px 15px;
  text-align: center;
  background: linear-gradient(
    transparent 25%,
    rgba(24, 11, 5, 0.82) 100%
  );
}

.category-overlay h3 {
  margin: 0 0 6px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 800;
}

.category-overlay span {
  color: #ffb15c;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

/* ---------------------------------------------------------
   EXPERIENCE
   --------------------------------------------------------- */

.experience-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 620px;
  background: #2b1712;
}

.experience-image {
  min-height: 500px;
  overflow: hidden;
}

.experience-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.experience-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 80px clamp(35px, 7vw, 110px);
}

.experience-content .section-heading {
  color: #fff;
}

.experience-content p {
  max-width: 570px;
  margin: 20px 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1rem;
  line-height: 1.85;
}

.experience-content .orange-btn {
  margin-top: 30px;
}

/* ---------------------------------------------------------
   ORDER PROCESS
   --------------------------------------------------------- */

.order-section {
  padding: 95px 0;
  background: #fff;
}

.order-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 50px;
}

.order-step {
  position: relative;
  padding: 35px 25px;
  text-align: center;
  background: #fffaf5;
  border: 1px solid #eee3da;
  border-radius: 12px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.order-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(61, 35, 20, 0.1);
}

.clickable-step {
  cursor: pointer;
}

.order-step .q-icon {
  color: #e87519;
}

.step-number {
  margin-bottom: 15px;
  color: #e87519;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.15em;
}

.order-step h3 {
  margin: 16px 0 8px;
  color: #2b1712;
  font-size: 1.05rem;
  font-weight: 800;
}

.order-step p {
  margin: 0;
  color: #765f56;
  font-size: 0.88rem;
  line-height: 1.7;
}

.order-cta {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

/* ---------------------------------------------------------
   DELIVERY
   --------------------------------------------------------- */

.delivery-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f2e7dc;
}

.delivery-image {
  min-height: 520px;
  overflow: hidden;
}

.delivery-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.delivery-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 70px clamp(35px, 7vw, 100px);
}

.delivery-content p {
  max-width: 570px;
  margin: 20px 0 0;
  color: #765f56;
  line-height: 1.85;
}

.delivery-content .orange-btn {
  margin-top: 30px;
}

/* ---------------------------------------------------------
   EVENTS
   --------------------------------------------------------- */

.events-section {
  padding: 95px 0;
  background: #fffaf5;
}

.events-card {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  overflow: hidden;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 12px 40px rgba(61, 35, 20, 0.1);
}

.events-image {
  min-height: 480px;
  overflow: hidden;
}

.events-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.events-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 60px;
}

.events-content p {
  max-width: 520px;
  margin: 20px 0 0;
  color: #765f56;
  line-height: 1.85;
}

.events-content .orange-btn {
  margin-top: 30px;
}

/* ---------------------------------------------------------
   LOCATION
   --------------------------------------------------------- */

.location-section {
  padding: 100px 20px;
  text-align: center;
  background: #2b1712;
}

.location-content .section-heading {
  color: #fff;
}

.location-content p {
  margin: 20px auto 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1rem;
  line-height: 1.8;
}

.location-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.location-actions .outline-orange-btn {
  border-color: #ffb15c;
  color: #ffb15c !important;
}

/* ---------------------------------------------------------
   TABLET
   --------------------------------------------------------- */

@media (max-width: 900px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .order-steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .experience-section,
  .delivery-section {
    grid-template-columns: 1fr;
  }

  .experience-image,
  .delivery-image {
    min-height: 430px;
    max-height: 520px;
  }

  .experience-content,
  .delivery-content {
    padding: 65px 35px;
  }

  .events-card {
    grid-template-columns: 1fr;
  }

  .events-image {
    min-height: 400px;
  }
}

/* ---------------------------------------------------------
   MOBILE
   --------------------------------------------------------- */

@media (max-width: 640px) {
  .hero-carousel {
    height: auto !important;
    min-height: 0;
  }


  .benefits-section {
    padding: 14px 0 16px;
  }
  .home-search-section {
    padding: 18px 0 24px;
  }


  .home-search-container {
    width: calc(100% - 28px);
  }


  .home-search-label {
    margin-bottom: 7px;
  }


  .home-search-label span {
    font-size: 0.62rem;
  }


  .home-search-box {
    min-height: 52px;
    padding: 0 14px;
    border-radius: 14px;
  }


  .home-search-box input {
    height: 50px;
    font-size: 0.82rem;
  }


  .home-search-icon {
    font-size: 21px;
  }




  .benefits-container {
    width: calc(100% - 28px);
    gap: 8px;
  }


  .benefit-item {
    gap: 7px;
  }


  .benefit-icon {
    width: 34px;
    height: 34px;
    flex-basis: 34px;
  }


  .benefit-icon .q-icon {
    font-size: 18px;
  }


  .benefit-text strong {
    font-size: 0.68rem;
  }


  .benefit-text span {
    font-size: 0.58rem;
  }


  .benefit-divider {
    height: 32px;
  }


  .section-container {
    width: min(100% - 28px, 1180px);
  }

  .section-eyebrow {
    font-size: 0.68rem;
    letter-spacing: 0.15em;
  }

  .section-heading {
    font-size: 2rem;
  }

  .section-intro {
    font-size: 0.9rem;
    line-height: 1.7;
  }

  .desktop-only-btn {
    display: inline-flex;
    margin-left: auto;
    flex-shrink: 0;
  }

  .mobile-menu-btn {
    display: flex;
    margin: 5px auto 0;
  }

  /* Hero */

  .hero-carousel {
    height: 610px !important;
  }

  .hero-slide {
    align-items: flex-end;
    background-position: center;
  }

  .hero-overlay {
    background:
      linear-gradient(
        180deg,
        rgba(15, 7, 3, 0.15) 0%,
        rgba(15, 7, 3, 0.35) 35%,
        rgba(15, 7, 3, 0.9) 100%
      );
  }

  .hero-content {
    width: calc(100% - 32px);
    margin: 0 auto;
    padding: 35px 0 65px;
  }

  .hero-eyebrow {
    margin-bottom: 12px;
    font-size: 0.67rem;
  }

  .hero-title {
    font-size: clamp(2.25rem, 12vw, 3.6rem);
    line-height: 1;
  }

  .hero-subtitle {
    margin-top: 16px;
    font-size: 0.88rem;
    line-height: 1.6;
  }

  .hero-actions {
    gap: 9px;
    margin-top: 22px;
  }

  .hero-primary-btn,
  .hero-secondary-btn {
    min-height: 46px;
    padding: 0 18px;
    font-size: 0.72rem;
  }

  /* Sections */

  .welcome-section,
  .favourites-section,
  .categories-section,
  .order-section,
  .events-section {
    padding: 65px 0;
  }

  .section-heading-wrap {
    align-items: flex-start;
    margin-bottom: 25px;
  }

  /* Favourites */

  .signature-swiper {
    width: 100%;
    padding-bottom: 35px;
    overflow: hidden;
  }

  .dish-card {
    width: 100%;
  }

  .signature-swiper :deep(.swiper-button-next),
  .signature-swiper :deep(.swiper-button-prev) {
    display: none;
  }

  .dish-card-content {
    padding: 12px 10px 14px;
  }

  .dish-card-content h3 {
    font-size: 0.82rem;
  }

  /* Categories */

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 30px;
  }

  .category-card {
    border-radius: 9px;
  }

  .category-overlay {
    padding: 16px 8px;
  }

  .category-overlay h3 {
    font-size: 0.9rem;
  }

  .category-overlay span {
    font-size: 0.58rem;
  }

  /* Experience */

  .experience-image,
  .delivery-image {
    min-height: 330px;
    max-height: 390px;
  }

  .experience-content,
  .delivery-content {
    padding: 55px 25px;
  }

  .experience-content p,
  .delivery-content p {
    font-size: 0.9rem;
    line-height: 1.75;
  }

  /* Video */

  /* Order */

  .order-steps {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 30px;
  }

  .order-step {
    padding: 25px 13px;
    border-radius: 9px;
  }

  .order-step .q-icon {
    font-size: 34px !important;
  }

  .step-number {
    font-size: 0.65rem;
  }

  .order-step h3 {
    font-size: 0.88rem;
  }

  .order-step p {
    font-size: 0.76rem;
    line-height: 1.55;
  }

  .large-orange-btn {
    min-height: 50px;
    padding: 0 22px;
    font-size: 0.75rem;
  }

  /* Delivery */

  .delivery-section {
    grid-template-columns: 1fr;
  }

  /* Events */

  .events-image {
    min-height: 300px;
  }

  .events-content {
    padding: 45px 25px;
  }

  /* Location */

  .location-section {
    padding: 70px 20px;
  }

  .location-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .location-actions .q-btn {
    width: 100%;
  }
}

/* ---------------------------------------------------------
   SMALL PHONES
   --------------------------------------------------------- */

@media (max-width: 700px) {
  .favourites-section {
    padding: 38px 0 45px;
  }


  .section-heading-wrap {
    margin-bottom: 16px;
  }


  .section-heading-wrap .section-eyebrow {
    font-size: 0.62rem;
    margin-bottom: 5px;
  }


  .favourites-section .section-heading {
    font-size: 1.45rem;
  }


  .signature-swiper {
    width: 100%;
    padding-bottom: 12px;
    overflow: hidden;
  }


  .signature-swiper :deep(.swiper-slide) {
    width: auto;
    flex-shrink: 0;
  }


  .dish-card {
    border-radius: 9px;
  }


  .dish-image-wrap {
    aspect-ratio: 1 / 0.82;
  }


  .dish-card-content {
    min-height: 38px;
    padding: 6px 27px 7px 7px;
  }


  .dish-card-content h3 {
    font-size: 0.62rem;
    line-height: 1.2;
  }


  .dish-add-btn {
    right: 5px;
    bottom: 5px;
    width: 22px;
    height: 22px;
    min-height: 22px;
  }


  .dish-add-btn :deep(.q-icon) {
    font-size: 13px !important;
  }


  .signature-swiper :deep(.swiper-button-next),
  .signature-swiper :deep(.swiper-button-prev) {
    display: none;
  }


  .popular-view-all.mobile-menu-btn {
    display: block;
    margin: 5px auto 0;
  }
}


@media (max-width: 380px) {
  .hero-carousel {
    height: 570px !important;
  }

  .hero-title {
    font-size: 2.15rem;
  }

  .category-grid {
    gap: 8px;
  }

  .order-step {
    padding: 22px 9px;
  }

  .order-step p {
    font-size: 0.7rem;
  }
}

@media (max-width: 700px) {
  .hero-section {
    padding: 14px 0 26px;
  }

  .hero-container {
    width: calc(100% - 20px);
  }

  .hero-carousel {
    height: 300px !important;
    min-height: 300px !important;
    border-radius: 22px;
  }

  .hero-card {
    display: grid;
    grid-template-columns: 45% 55%;
    width: 100%;
    min-height: 300px;
    height: 300px;
    border-radius: 22px;
    box-shadow: 0 10px 28px rgba(74, 45, 30, 0.09);
  }

  .hero-card-content {
    grid-column: 1;
    grid-row: 1;
    padding: 24px 10px 24px 20px;
    justify-content: center;
    background: #fffaf5;
    z-index: 2;
  }

  .hero-card-image {
    grid-column: 2;
    grid-row: 1;
    min-height: 300px;
    height: 300px;
  }

  .hero-card-image img {
    object-position: center;
  }

  .hero-eyebrow {
    margin-bottom: 9px;
    font-size: 0.54rem;
    letter-spacing: 0.08em;
  }

  .hero-title {
    max-width: 170px;
    font-size: clamp(1.75rem, 7.5vw, 2.2rem);
    line-height: 1.04;
    letter-spacing: -0.02em;
  }

  .hero-subtitle {
    max-width: 165px;
    margin-top: 10px;
    font-size: 0.67rem;
    line-height: 1.45;
  }

  .hero-actions {
    width: 100%;
    gap: 7px;
    margin-top: 17px;
  }

  .hero-primary-btn,
  .hero-secondary-btn {
    flex: 1;
    min-height: 38px;
    padding: 0 9px;
    font-size: 0.56rem;
    border-radius: 20px;
  }

  .hero-carousel :deep(.q-carousel__navigation) {
    bottom: 7px;
  }

  .hero-carousel :deep(.q-carousel__navigation .q-btn) {
    margin: 0;
    transform: scale(0.78);
  }
}


/* FINAL HERO — FULL IMAGE BACKGROUND */


.hero-section {
  width: 100%;
  padding: clamp(12px, 2.5vw, 30px) 0 clamp(24px, 4vw, 46px);
  background: #fffaf5;
}


.hero-container {
  width: min(1180px, calc(100% - 24px));
  margin: 0 auto;
}


.hero-carousel {
  width: 100%;
  height: auto !important;
  aspect-ratio: 1180 / 500;
  min-height: 0 !important;


  background: transparent !important;
  border-radius: clamp(16px, 2.5vw, 28px);
  overflow: hidden !important;
  position: relative;
}


.hero-slide {
  width: 100%;
  height: 100%;
  padding: 0 !important;
  background: transparent !important;
  position: relative;
}


.hero-card {
  width: 100%;
  height: 100%;
  min-height: 0 !important;


  display: block !important;


  background: transparent !important;
  border: none !important;
  border-radius: inherit !important;
  box-shadow: none !important;


  overflow: hidden !important;
  position: relative;
}




/* FULL HERO IMAGE */


.hero-card-image {
  position: absolute !important;
  inset: 0 !important;


  width: 100% !important;
  height: 100% !important;


  margin: 0 !important;
  padding: 0 !important;


  display: block !important;


  background: transparent !important;
  overflow: hidden !important;


  z-index: 1;
}


.hero-card-image img {
  position: absolute !important;
  inset: 0 !important;


  width: 100% !important;
  height: 100% !important;


  min-width: 0 !important;
  min-height: 0 !important;


  display: block !important;


  /*
   * The generated hero image itself provides the cream background.
   * It therefore becomes the background for the entire hero.
   */
  object-fit: cover !important;
  object-position: center !important;


  background: transparent !important;


  -webkit-mask-image: none !important;
  mask-image: none !important;


  transform: none !important;
}




/* TEXT + BUTTONS OVER THE IMAGE */


.hero-card-content {
  position: relative !important;
  z-index: 3;


  width: 55%;
  height: 100%;


  min-width: 0;
  min-height: 0;


  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


  /*
   * IMPORTANT:
   * No background here.
   * The image is visible directly behind the text.
   */
  background: transparent !important;


  padding: clamp(20px, 4vw, 58px);
}


.hero-eyebrow {
  display: inline-block;


  margin: 0 0 clamp(7px, 1vw, 14px);


  color: #e87519;


  font-size: clamp(0.48rem, 0.75vw, 0.7rem);
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: 0.12em;


  text-transform: uppercase;
}


.hero-title {
  width: 100%;
  max-width: 520px;


  margin: 0;


  color: #2b1712 !important;


  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(1.65rem, 3.4vw, 3.7rem);
  line-height: 1.04;
  font-weight: 700;
  letter-spacing: -0.03em;


  overflow-wrap: normal;
  word-break: normal;
}


.hero-subtitle {
  width: 100%;
  max-width: 410px;


  margin: clamp(8px, 1.2vw, 16px) 0 0;


  color: #67534b !important;


  font-size: clamp(0.64rem, 0.85vw, 0.92rem);
  line-height: 1.5;
}


.hero-actions {
  display: flex !important;
  flex-wrap: wrap;
  align-items: center;


  gap: 8px;
  margin-top: clamp(12px, 1.7vw, 22px);
}


.hero-primary-btn,
.hero-secondary-btn {
  min-height: clamp(34px, 3.5vw, 46px);


  white-space: nowrap;
  font-size: clamp(0.55rem, 0.7vw, 0.78rem);
}


.hero-primary-btn {
  padding: 0 clamp(14px, 2vw, 24px);


  border-radius: 999px;


  background: #f4511e !important;
  color: #fff !important;


  font-weight: 800;


  box-shadow: 0 5px 14px rgba(244, 81, 30, 0.15);
}


.hero-secondary-btn {
  padding: 0 clamp(13px, 1.8vw, 22px);


  border: 1px solid #f4511e !important;
  border-radius: 999px;


  color: #f4511e !important;
  font-weight: 700;
}




/* CAROUSEL */


.hero-carousel :deep(.q-carousel__navigation) {
  display: none !important;
}


.hero-carousel :deep(.q-carousel__arrow) {
  color: #f4511e !important;
}




/* INDICATORS */


.hero-indicators {
  display: flex;
  align-items: center;
  justify-content: center;


  gap: 7px;
  margin-top: 12px;
}


.hero-indicator {
  width: 7px;
  height: 7px;


  padding: 0;
  border: 0;
  border-radius: 50%;


  background: rgba(43, 23, 18, 0.25);


  cursor: pointer;
  appearance: none;


  transition:
    width 0.25s ease,
    background 0.25s ease;
}


.hero-indicator.active {
  width: 20px;


  border-radius: 999px;


  background: #f4511e;
}




/* TABLETS */


@media (max-width: 900px) {
  .hero-container {
    width: calc(100% - 20px);
  }


  .hero-carousel {
    aspect-ratio: 1.75 / 1;
  }


  .hero-card-content {
    width: 57%;
    padding: clamp(18px, 4vw, 34px);
  }


  .hero-title {
    font-size: clamp(1.4rem, 4.5vw, 2.7rem);
  }


  .hero-subtitle {
    font-size: clamp(0.58rem, 1.4vw, 0.8rem);
  }
}




/* PHONES */


@media (max-width: 640px) {
  .hero-section {
    padding: 8px 0 26px;
  }


  .hero-container {
    width: calc(100% - 10px);
  }


  .hero-carousel {
    aspect-ratio: 1.45 / 1;
    border-radius: 15px;
  }


  .hero-card-content {
    width: 55%;
    padding: 13px 8px 14px;
  }


  .hero-eyebrow {
    margin-bottom: 5px;
    font-size: 0.4rem;
    letter-spacing: 0.07em;
  }


  .hero-title {
    font-size: clamp(0.95rem, 5.2vw, 1.5rem);
    line-height: 1.04;
  }


  .hero-subtitle {
    margin-top: 6px;
    font-size: clamp(0.48rem, 1.8vw, 0.62rem);
    line-height: 1.35;
  }


  .hero-actions {
    gap: 4px;
    margin-top: 9px;
  }


  .hero-primary-btn,
  .hero-secondary-btn {
    min-height: 29px;
    padding: 0 8px;
    font-size: 0.45rem;
  }


  .hero-indicators {
    margin-top: 8px;
    gap: 5px;
  }


  .hero-indicator {
    width: 5px;
    height: 5px;
  }


  .hero-indicator.active {
    width: 16px;
  }
}




/* VERY SMALL PHONES */


@media (max-width: 380px) {
  .hero-carousel {
    aspect-ratio: 1.35 / 1;
    border-radius: 13px;
  }


  .hero-card-content {
    width: 56%;
    padding: 11px 6px 12px;
  }


  .hero-eyebrow {
    font-size: 0.36rem;
  }


  .hero-title {
    font-size: clamp(0.88rem, 5.8vw, 1.25rem);
  }


  .hero-subtitle {
    font-size: 0.45rem;
  }


  .hero-primary-btn,
  .hero-secondary-btn {
    min-height: 27px;
    padding: 0 7px;
    font-size: 0.43rem;
  }
}




/* LANDSCAPE PHONES */


@media (max-height: 500px) and (orientation: landscape) {
  .hero-carousel {
    aspect-ratio: 2.2 / 1;
  }


  .hero-card-content {
    width: 52%;
    padding: 13px 22px;
  }


  .hero-title {
    font-size: clamp(1.2rem, 4.5vw, 2.4rem);
  }


  .hero-subtitle {
    font-size: 0.65rem;
  }
}




/* LARGE SCREENS */


@media (min-width: 1400px) {
  .hero-container {
    width: min(1240px, calc(100% - 60px));
  }


  .hero-carousel {
    aspect-ratio: 1240 / 520;
  }


  .hero-card-content {
    width: 52%;
  }
}


</style>
