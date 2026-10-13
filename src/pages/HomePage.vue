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
  <template v-if="s.title === 'Freshly baked Meaty Pizza with extra cheese'">
    Freshly baked Meaty Pizza with
    <span class="hero-title-accent">extra cheese</span>
  </template>


  <template v-else-if="s.title === 'Free Popcorn & Ice-cream'">
    Free
    <span class="hero-title-accent">Popcorn & Ice-cream</span>
  </template>


  <template v-else-if="s.title.trim() === 'Come for our  Sunday Buffet'">
    Come for our
    <span class="hero-title-accent">Sunday Buffet</span>
  </template>


  <template v-else-if="s.title === 'Made for Every Occasion'">
    Made for
    <span class="hero-title-accent">Every Occasion</span>
  </template>


  <template v-else>
    {{ s.title }}
  </template>
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
                     @click="$router.push('/menu')"                  />

                  <!-- <q-btn
                    label="VIEW MENU"
                    flat
                    class="hero-secondary-btn"
                    @click="$router.push('/menu')"
                  /> -->
                </div>
              </div>

              <div class="hero-card-image">
                <img
                  :src="isDarkTheme ? s.darkImage : s.image"
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




    <!-- PROMOTIONAL FOOD BANNERS -->
    <section class="promo-banners-section">
      <div class="section-container promo-banners-container">


        <!-- SOUL BURGER COMBO -->
        <article class="promo-banner promo-banner-soul">
          <img
            src="/slider/soul-burger-banner.png"
            alt="Soul Burger Combo"
            class="promo-banner-image"
            draggable="false"
          />


          <div class="promo-banner-content">
            <span class="promo-banner-badge">
              <q-icon name="workspace_premium" />
              SPECIAL COMBO
            </span>


            <h2 class="promo-banner-title">
              Soul Burger Combo
              <span>₦14,500 Only!</span>
            </h2>


            <p class="promo-banner-description">
              1 Juicy Burger + Crispy Fries + Coke + Chicken
            </p>


            <p class="promo-banner-subtitle">
              The perfect combo for your cravings!
            </p>


            <q-btn
              label="ORDER NOW →"
              unelevated
              class="promo-banner-btn"
              @click.stop="addPromoItemToCart('Soul Burger combo (burger, crispy chicken & chips)')"
            />
          </div>
        </article>




        <!-- SUYA PIZZA FEAST -->
        <article class="promo-banner promo-banner-pizza">
          <img
            src="/slider/pizza-combo-banner.png"
            alt="Suya Pizza Feast"
            class="promo-banner-image"
            draggable="false"
          />


          <div class="promo-banner-content">
            <span class="promo-banner-badge">
              <q-icon name="local_fire_department" />
              LIMITED TIME
            </span>


            <h2 class="promo-banner-title">
              Suya Pizza Feast
              <span>₦10,500 Only!</span>
            </h2>


            <p class="promo-banner-description">
              Beef Suya Pizza + 2 Cokes
            </p>


            <p class="promo-banner-subtitle">
              Bold flavours, unforgettable moments.
            </p>


            <q-btn
              label="ORDER NOW →"
              unelevated
              class="promo-banner-btn"
              @click.stop="addPromoItemToCart('Beef suya pizza Feast ( plus 2 bottles of coke)')"
            />
          </div>
        </article>


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
            v-for="(step, index) in orderSteps"
            :key="step.number"
            class="order-step"
            :class="{ 'clickable-step': step.route }"
            @click="step.route && $router.push(step.route)"
          >


            <div class="step-number">
              {{ step.number }}
            </div>


            <div class="step-visual">
              <img
                :src="step.image"
                :alt="step.title"
                class="step-image"
                draggable="false"
              />
            </div>


            <h3>{{ step.title }}</h3>


            <p>{{ step.description }}</p>


            <div
              v-if="index < orderSteps.length - 1"
              class="order-step-arrow"
            >
              <q-icon name="arrow_forward" />
            </div>


          </div>


        </div>


        <div class="order-cta">
          <q-btn
            label="ORDER FOOD NOW →"
            unelevated
            class="orange-btn large-orange-btn"
            @click="$router.push('/menu')"
          />
        </div>


      </div>
    </section>


    <!-- LOCATION -->
    <section class="location-section">
      <div class="location-container">


        <div class="location-heading">
          <span class="section-eyebrow">COME VISIT US</span>


          <h2 class="section-heading">
            FIND US IN AWKA
          </h2>


          <p>
            Come dine with us at Solution Fun City, Awka, Anambra State.
          </p>
        </div>


         <div class="q-pa-md location-map-card">
      <iframe
        class="map-frame"
       src="https://maps.google.com/maps?q=Tianna+Rosita%2C+Solution+Fun+City%2C+Onitsha+-+Enugu+Expy%2C+Awka+420103%2C+Anambra&output=embed"
  width="100%"
  height="300"
  style="border:0; border-radius:12px;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Google Map Location"
      >
    </iframe>
    </div>



        <div class="location-info-card">


          <div class="location-info-item">
            <div class="location-info-icon">
              <q-icon name="location_on" />
            </div>


            <div>
              <span class="location-info-label">LOCATION</span>
              <strong>Solution Fun City, Awka</strong>
              <p>Anambra State, Nigeria</p>
            </div>
          </div>


          <div class="location-divider"></div>


          <div class="location-info-item">
            <div class="location-info-icon">
              <q-icon name="schedule" />
            </div>


            <div>

              <span class="location-info-label">OPENING HOURS</span>
              <strong>Mon–Sat · 10:00 AM–9:00 PM</strong>
              <p>Sun · 12:00 PM–10:00 PM</p>
            </div>
          </div>


        </div>


        <div class="location-actions">
          <q-btn
            label="GET DIRECTIONS"
            icon="directions"
            unelevated
            class="orange-btn"
            :href="'https://www.google.com/maps/dir/?api=1&destination=Tianna%20Rosita%2C%20Solution%20Fun%20City%2C%20Onitsha%20-%20Enugu%20Expy%2C%20Awka%20420103%2C%20Anambra&destination_place_id=ChIJ5UAY5W2DQxAROo4yksi64Fg'"
            target="_blank"
            rel="noopener noreferrer"
          />


          <q-btn
            label="ORDER ONLINE"
            icon="shopping_bag"
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


    // Track the existing global theme toggle.
    const isDarkTheme = ref(
      typeof document !== "undefined" &&
        document.documentElement.getAttribute("data-theme") === "dark"
    );


    // Keep hero images synchronized with the active theme.
    const updateHeroTheme = () => {
      if (typeof document !== "undefined") {
        isDarkTheme.value =
          document.documentElement.getAttribute("data-theme") === "dark";
      }
    };


    if (typeof document !== "undefined") {
      const themeObserver = new MutationObserver(updateHeroTheme);


      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
    }

    // Hero slides
    const slides = [
      {
        title: "Freshly baked Pepperoni Pizza with extra cheese",
        subtitle:
          "Can't get away from that cheese pull.",
        image: "/slider/pizza-hero.png",
        darkImage: "/dark-theme-images/pizza-hero-dark.png",
      },
      {
        title: "Free Popcorn & Ice-cream",
        subtitle:
          "Get free popcorn and ice-cream when you order online.",
        image: "/slider/cream-hero2.png",
        darkImage: "/dark-theme-images/icecream&popcorn-darktheme.png",
      },
      {
        title: "Come for our  Sunday Buffet",
        subtitle:
          "Bring your appetite for our all you can eat Buffet with variety of exquisite mouth watering dishes every Sunday. ",
        image: "/slider/cream-hero3.png",
        darkImage: "/dark-theme-images/buffet-dark.png",
      },
      {
        title: "Made for Every Occasion",
        subtitle:
          "Enjoy delicious food for everyday meals, celebrations, date nights and special events.",
        image: "/slider/cream-hero4.png",
        darkImage: "/dark-theme-images/spaghetti-hero-darktheme.png",
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


    // Add a promotional banner item directly from the Firestore menu.
    const addPromoItemToCart = async (itemName) => {
      if (!menuStore.menu.length) {
        await menuStore.fetchMenu();
      }


      const item = menuStore.menu
        .flatMap((category) => category.items || [])
        .find(
          (item) =>
            String(item.name || "").trim().toLowerCase() ===
            itemName.trim().toLowerCase()
        );


      if (!item) {
        console.error(`❌ Promo item not found in Firestore menu: ${itemName}`);
        return;
      }


      menuStore.addToCart(item);
      console.log(`✅ Added to cart: ${item.name}`, item);
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
      "Burgers/Sandwiches/Wraps": "burgers.png",
       "Grills & Fries": "bbq-chicken.jpg"
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


    // HOW TO ORDER steps
    // Edit the text, icon or route here whenever you want.
    const orderSteps = [
      {
        number: "01",
        icon: "restaurant_menu",
        image: "/how-to-order/browse-menu.png",
        title: "Browse Menu",
        description: "Explore our delicious dishes and choose your favourites.",
        route: "/menu",
      },
      {
        number: "02",
        icon: "add_shopping_cart",
        image: "/how-to-order/add-to-cart.png",
        title: "Add to Cart",
        description: "Select your meals and add them to your order.",
        route: "/menu",
      },
      {
        number: "03",
        icon: "credit_card",
        image: "/how-to-order/checkout.png",
        title: "Checkout",
        description: "Confirm your details and pay securely.",
        route: "/checkout",
      },
      {
        number: "04",
        icon: "delivery_dining",
        image: "/how-to-order/enjoy.png",
        title: "Enjoy",
        description: "Relax while your freshly prepared meal comes to you.",
        route: null,
      },
    ];


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
      addPromoItemToCart,
      slide,
      slides,
      isDarkTheme,
      signatureDishes,
      homeCategories,
      menuStore,
      searchQuery,
      searchResults,
      Autoplay,
      Navigation,
      breakpoints,
      orderSteps,
      categories,
      openContact,
    };
  },
};
</script>

<style scoped>


/* 🎛️ HOMEPAGE DIMENSIONS — CHANGE THESE NUMBERS */
/* 📏 DEFAULT SPACE BETWEEN HOMEPAGE SECTIONS */
.home-page > section {
  padding-top: var(--section-space);
  padding-bottom: var(--section-space);
}



:root {
  --section-space: 20px;
  --content-width: 1200px;
  --side-space: 24px;
  --card-gap: 12px;
}




.home-categories-section {
  width: 100%;
  background: var(--trg-bg);
  color: var(--trg-text);
  padding: 18px 0 22px;
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
  background: var(--trg-surface);
  border: 4px solid var(--trg-bg);
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
  color: var(--trg-text);
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
}


.home-search-section {
  width: 100%;
  background: var(--trg-bg);
  color: var(--trg-text);
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
  color: var(--trg-text-secondary);
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
  background: var(--trg-surface);
  color: var(--trg-text);
  border: 1px solid var(--trg-border);
  border-radius: 16px;
  box-shadow: var(--trg-shadow);
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
  color: var(--trg-text);
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
}


.home-search-box input::placeholder {
  color: var(--trg-text-muted);
  opacity: 1;
}


.home-search-results {
  width: 100%;
  margin-top: 10px;
  padding: 6px;
  background: var(--trg-surface);
  color: var(--trg-text);
  border: 1px solid var(--trg-border);
  border-radius: 16px;
  box-shadow: var(--trg-shadow);
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
  border-bottom: 1px solid var(--trg-divider);
  background: var(--trg-surface);
  text-align: left;
  cursor: pointer;
  transition: background 0.2s ease;
}


.home-search-result:last-child {
  border-bottom: 0;
}


.home-search-result:hover {
  background: var(--trg-surface-hover);
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
  color: var(--trg-text);
  font-size: 0.82rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


.home-search-result-info small {
  color: var(--trg-text-secondary);
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
  background: var(--trg-surface);
  border: 1px solid var(--trg-border);
  border-radius: 14px;
  color: var(--trg-text-secondary);
  font-size: 0.78rem;
  box-shadow: 0 8px 22px rgba(43, 23, 18, 0.07);
}


.home-search-empty .q-icon {
  color: #f4511e;
  font-size: 20px;
}




.benefits-section {
  width: 100%;
  background: var(--trg-bg);
  color: var(--trg-text);
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
  background: var(--trg-surface);
  color: #f4511e;
  box-shadow: var(--trg-shadow);
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
  color: var(--trg-text);
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.25;
}


.benefit-text span {
  margin-top: 3px;
  color: var(--trg-text-secondary);
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
  background: var(--trg-bg);
  color: var(--trg-text);
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
  color: var(--trg-text);
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
  color: var(--trg-text-secondary);
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
  background: var(--trg-bg);
  color: var(--trg-text);
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
  background: var(--trg-border);
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
    background: var(--trg-surface);
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
    background: var(--trg-bg-elevated);
    color: var(--trg-text);
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
    color: var(--trg-text);
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
    color: var(--trg-text-secondary);
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
  background: var(--trg-bg);
  color: var(--trg-text);
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
  color: var(--trg-text);
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
   REDESIGNED LOCATION / FIND US
   --------------------------------------------------------- */


.location-section {
  padding: 90px 20px 100px;
  background: #2b1712;
  color: #fff;
  padding-bottom: 35px !important;
}


.location-container {
  width: min(1100px, 100%);
  margin: 0 auto;
}


.location-heading {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 34px;
}


.location-heading .section-eyebrow {
  display: inline-block;
  margin-bottom: 10px;
}


.location-heading .section-heading {
  margin: 0;
  color: #fff;
}


.location-heading p {
  margin: 16px auto 0;
  max-width: 620px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1rem;
  line-height: 1.75;
}


/* Map */
.location-map-card {
  width: 100%;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.25);
}


.location-map-placeholder {
  position: relative;
  min-height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(rgba(255, 250, 245, 0.78), rgba(255, 250, 245, 0.78)),
    repeating-linear-gradient(
      45deg,
      #e8ddd3 0,
      #e8ddd3 2px,
      #f4ece5 2px,
      #f4ece5 42px
    );
}


.location-map-pin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50% 50% 50% 0;
  background: #a83f19;
  color: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.22);
  transform: translate(-50%, -75%) rotate(-45deg);
}


.location-map-pin .q-icon {
  font-size: 32px;
  transform: rotate(45deg);
}


.location-map-label {
  position: absolute;
  top: calc(50% + 38px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 210px;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.96);
  color: #2b1712;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.14);
}


.location-map-label strong,
.location-map-label span {
  display: block;
}


.location-map-label strong {
  font-size: 0.9rem;
}


.location-map-label span {
  margin-top: 3px;
  font-size: 0.74rem;
  color: #765c51;
}


/* Information card */
.location-info-card {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 28px;
  margin-top: 18px;
  padding: 26px 30px;
  border-radius: 22px;
  background: #fffaf5;
  color: #2b1712;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.16);
}


.location-info-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;

}

find
.location-info-icon {
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(168, 63, 25, 0.1);
  color: #a83f19;
}


.location-info-icon .q-icon {
  font-size: 22px;
}


.location-info-label {
  display: block;
  margin-bottom: 5px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #a83f19;
}


.location-info-item strong {
  display: block;
  font-size: 0.92rem;
  line-height: 1.4;
}


.location-info-item p {
  margin: 4px 0 0;
  color: #765c51;
  font-size: 0.8rem;
}


.location-divider {
  width: 1px;
  height: 60px;
  background: rgba(43, 23, 18, 0.12);
}


/* Actions */
.location-actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 24px;
}


.location-actions .q-btn {
  min-height: 50px;
  padding: 0 25px;
  border-radius: 12px;
  font-weight: 700;
  letter-spacing: 0.03em;
}


.location-actions .orange-btn {
  background: #ff8a1f !important;
  color: #fff !important;
}


.location-actions .outline-orange-btn {
  border: 1px solid #ffb15c;
  color: #ffb15c !important;
}


/* ---------------------------------------------------------
   LOCATION MOBILE
   --------------------------------------------------------- */


@media (max-width: 640px) {
  .location-section {
    padding: 62px 14px 70px;
  }


  .location-heading {
    margin-bottom: 24px;
  }


  .location-heading p {
    font-size: 0.86rem;
    line-height: 1.6;
  }


  .location-map-card {
    border-radius: 18px;
  }


  .location-map-placeholder {
    min-height: 330px;
  }


  .location-map-label {
    min-width: 190px;
  }


  .location-info-card {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 12px;
    padding: 20px;
    border-radius: 18px;
  }


  .location-divider {
    width: 100%;
    height: 1px;
  }


  .location-actions {
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
  }


  .location-actions .q-btn {
    width: 100%;
    min-height: 48px;
  }
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


  .signature-swiper :deep(.-slide) {
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
    font-size: 0.78rem;
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
    flex: 0 0 auto;
    width: fit-content;
    max-width: 100%;
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
  touch-action: pan-y !important;
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
  pointer-events: none !important;
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
    aspect-ratio: 1 / 1;
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
  width: 130px;
  min-height: 38px;
  padding: 0 12px;
  font-size: 11px;
  font-weight: 800;
  border-radius: 24px;
  transform: translate(0px, 0px);
  margin-left: 0px;
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



/* =========================================================
   HOW TO ORDER
   Edit this section to change the four ordering steps,
   their cards, illustrations, arrows, and call-to-action.
   ========================================================= */


/* 1. Section heading and overall layout */
.order-section {
  background: #ffffff !important;
}


.order-section .centered-heading {
  margin-bottom: 38px !important;
  text-align: center !important;
}


.order-section .section-eyebrow {
  display: block !important;
  margin-bottom: 8px !important;
  color: #f4511e !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  letter-spacing: 2px !important;
}


.order-section .section-heading {
  margin: 0 !important;
  color: var(--trg-text) !important;
  font-size: 32px !important;
  font-weight: 800 !important;
  line-height: 1.15 !important;
}


.order-section .section-intro {
  max-width: 520px !important;
  margin: 10px auto 0 !important;
  color: #777777 !important;
  font-size: 14px !important;
  line-height: 1.6 !important;
}


/* 2. Four ordering cards */
.order-section .order-steps {
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  gap: 20px !important;
  margin: 0 !important;
  align-items: stretch !important;
}


.order-section .order-step {
  position: relative !important;
  box-sizing: border-box !important;
  min-width: 0 !important;
  min-height: 250px !important;
  padding: 28px 22px 25px !important;
  border: 1px solid #f0e2da !important;
  border-radius: 22px !important;
  background: #fffaf7 !important;
  text-align: center !important;
  box-shadow: 0 8px 24px rgba(43, 23, 18, 0.06) !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}


.order-section .order-step:hover {
  transform: translateY(-6px) !important;
  box-shadow: 0 14px 32px rgba(43, 23, 18, 0.11) !important;
}


/* 3. Step numbers and illustrations */
.order-section .step-number {
  margin: 0 0 16px !important;
  color: #f4511e !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  letter-spacing: 2px !important;
}


.order-section .step-visual {
  display: flex !important;
  width: 100% !important;
  height: 145px !important;
  margin: 0 auto 16px !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: hidden !important;
  border: 0 !important;
  border-radius: 20px !important;
  background: #fff1e8 !important;
  color: #f4511e !important;
}


.order-section .step-visual .q-icon {
  color: #f4511e !important;
}


.order-section .step-image {
  display: block !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
  object-position: center !important;
}


/* 4. Step titles and descriptions */
.order-section .order-step h3 {
  margin: 0 0 9px !important;
  color: var(--trg-text) !important;
  font-size: 18px !important;
  font-weight: 800 !important;
  line-height: 1.3 !important;
}


.order-section .order-step p {
  max-width: 220px !important;
  margin: 0 auto !important;
  color: #786b66 !important;
  font-size: 13px !important;
  line-height: 1.6 !important;
}


/* 5. Connecting arrows between cards */
.order-section .order-step-arrow {
  position: absolute !important;
  top: 50% !important;
  right: -26px !important;
  z-index: 10 !important;
  display: flex !important;
  width: 34px !important;
  height: 34px !important;
  box-sizing: border-box !important;
  align-items: center !important;
  justify-content: center !important;
  transform: translateY(-50%) !important;
  border: 1px solid #f0e2da !important;
  border-radius: 50% !important;
  background: #ffffff !important;
  color: #f4511e !important;
  box-shadow: 0 4px 12px rgba(43, 23, 18, 0.08) !important;
}


/* 6. Call-to-action button */
.order-section .order-cta {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-top: 34px !important;
  padding: 0 0 4px !important;
}


/* 7. Tablet layout */
@media (min-width: 768px) and (max-width: 900px) {
  .order-section .order-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 14px !important;
  }


  .order-section .order-step-arrow {
    display: none !important;
  }
}


/* 8. Mobile layout — four compact cards in one row */
@media (max-width: 767px) {
  .order-section {
    padding: 10px 0 2px !important;
  }


  .order-section .section-container {
    width: 100% !important;
    max-width: 100% !important;
    padding-right: 8px !important;
    padding-left: 8px !important;
  }


  .order-section .centered-heading {
    margin-bottom: 16px !important;
  }


  .order-section .section-eyebrow {
    font-size: 10px !important;
    letter-spacing: 2px !important;
  }


  .order-section .section-heading {
    margin: 5px 0 7px !important;
    font-size: 27px !important;
    line-height: 1 !important;
  }


  .order-section .section-intro {
    margin: 0 !important;
    font-size: 12px !important;
    line-height: 1.3 !important;
  }


  .order-section .order-steps {
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    gap: 6px !important;
    width: 100% !important;
    margin: 0 !important;
    align-items: start !important;
    overflow: visible !important;
  }


  .order-section .order-step {
    display: flex !important;
    min-width: 0 !important;
    min-height: 0 !important;
    height: auto !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: flex-start !important;
    margin: 0 !important;
    padding: 10px 3px 9px !important;
    overflow: hidden !important;
    border: 1px solid #f3e5dc !important;
    border-radius: 12px !important;
    background: #fffaf6 !important;
    box-shadow: 0 2px 8px rgba(43, 23, 18, 0.05) !important;
  }


  .order-section .step-number {
    display: flex !important;
    width: 30px !important;
    height: 30px !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 auto 8px !important;
    border-radius: 50% !important;
    background: #fff0e5 !important;
    color: #f4511e !important;
    font-size: 10px !important;
    letter-spacing: 0 !important;
  }


  .order-section .step-visual {
    width: 52px !important;
    min-width: 52px !important;
    height: 52px !important;
    margin: 0 auto 8px !important;
    border-radius: 50% !important;
    background: #fff0e5 !important;
  }


  .order-section .step-visual .q-icon {
    font-size: 34px !important;
  }


  .order-section .order-step h3 {
    width: 100% !important;
    margin: 0 !important;
    color: var(--trg-text) !important;
    font-size: 10px !important;
    font-weight: 700 !important;
    line-height: 1.15 !important;
    text-align: center !important;
    white-space: normal !important;
  }


  /* Descriptions stay hidden on mobile, as in the existing design. */
  .order-section .order-step p,
  .order-section .order-step-arrow {
    display: none !important;
  }


  .order-section .order-cta {
    margin-top: 0 !important;
    padding: 12px 0 0 !important;
  }


  .order-section .large-orange-btn {
    height: 36px !important;
    min-height: 36px !important;
    padding: 0 20px !important;
    border-radius: 20px !important;
    font-size: 10px !important;
  }
}


/* =========================================================
   PROMOTIONAL FOOD BANNERS
   ========================================================= */


.promo-banners-section {
  width: 100%;
  padding: 8px 0 24px;
  background: #fffaf5;
}


.promo-banners-container {
  display: flex;
  flex-direction: column;
  gap: 18px;
}


.promo-banner {
  position: relative;
  width: 100%;
  height: clamp(250px, 26vw, 315px);
  overflow: hidden;
  border-radius: 24px;
  isolation: isolate;
  background: #eadbca;
}


.promo-banner-image {
  position: absolute;
  inset: 0;
  z-index: 0;


  width: 100%;
  height: 100%;


  display: block;


  object-fit: cover;
  object-position: center;


  user-select: none;
  -webkit-user-drag: none;
}




/* LEFT-SIDE READABILITY */


/* NO IMAGE BLUR / GRADIENT OVERLAY */


.promo-banner::after {
  display: none;
}




/* CONTENT */


.promo-banner-content {
  position: relative;
  z-index: 2;


  width: 50%;
  height: 100%;


  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;


  padding: 28px clamp(24px, 4vw, 54px);
}




/* BADGE */


.promo-banner-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;


  margin-bottom: 10px;
  padding: 7px 14px;


  border-radius: 999px;


  background: #f4511e;
  color: #fff;


  font-size: clamp(0.58rem, 0.7vw, 0.72rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.06em;
  text-transform: uppercase;


  box-shadow: 0 5px 14px rgba(244, 81, 30, 0.18);
}


.promo-banner-badge .q-icon {
  font-size: 16px;
}




/* TITLE */


.promo-banner-title {
  max-width: 470px;


  margin: 0;


  color: #2b1712;


  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(2rem, 3.8vw, 3.55rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.035em;
}


.promo-banner-title span {
  display: block;


  margin-top: 2px;


  color: #f4511e;


  font-family: "Poppins", Arial, sans-serif;
  font-size: 0.82em;
  font-style: italic;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
}




/* PIZZA TITLE */


.promo-banner-pizza .promo-banner-title {
  color: #fff;
}


.promo-banner-pizza .promo-banner-title span {
  color: #ff7043;
}




/* DESCRIPTION */


.promo-banner-description {
  max-width: 410px;


  margin: 12px 0 0;


  color: #2b1712;


  font-size: clamp(0.75rem, 1vw, 0.96rem);
  font-weight: 700;
  line-height: 1.4;
}


.promo-banner-pizza .promo-banner-description {
  color: #fff;
}




/* SUBTITLE */


.promo-banner-subtitle {
  max-width: 330px;


  margin: 5px 0 0;


  color: #6f5b52;


  font-size: clamp(0.66rem, 0.85vw, 0.84rem);
  line-height: 1.45;
}


.promo-banner-pizza .promo-banner-subtitle {
  color: rgba(255, 255, 255, 0.78);
}




/* BUTTON */


.promo-banner-btn {
  min-height: 42px;


  margin-top: 16px;
  padding: 0 22px;


  border-radius: 999px;


  background: #f4511e !important;
  color: #fff !important;


  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.03em;


  box-shadow: 0 7px 18px rgba(244, 81, 30, 0.2);
}


.promo-banner-btn:hover {
  background: #e74312 !important;
}




/* =========================================================
   PROMO BANNERS — TABLETS
   ========================================================= */


@media (max-width: 900px) {
  .promo-banner {
    height: clamp(220px, 31vw, 275px);
    border-radius: 20px;
  }


  .promo-banner-content {
    width: 54%;
    padding: 22px clamp(18px, 4vw, 36px);
  }


  .promo-banner-title {
    font-size: clamp(1.65rem, 5vw, 2.8rem);
  }


  .promo-banner-description {
    font-size: 0.72rem;
  }


  .promo-banner-subtitle {
    font-size: 0.62rem;
  }


  .promo-banner-btn {
    min-height: 38px;
    margin-top: 12px;
    padding: 0 17px;
    font-size: 0.62rem;
  }
}




/* =========================================================
   PROMO BANNERS — PHONES
   ========================================================= */


@media (max-width: 640px) {
  .promo-banners-section {
    padding: 4px 0 20px;
  }


  .promo-banners-container {
    gap: 12px;
  }


  .promo-banner {
    height: 190px;
    border-radius: 16px;
  }


  .promo-banner-content {
    width: 58%;
    padding: 14px 10px 14px 16px;
  }


  .promo-banner-badge {
    gap: 4px;


    margin-bottom: 6px;
    padding: 5px 9px;


    font-size: 0.44rem;
    letter-spacing: 0.04em;
  }


  .promo-banner-badge .q-icon {
    font-size: 11px;
  }


  .promo-banner-title {
    font-size: clamp(1.25rem, 7vw, 1.75rem);
    line-height: 0.98;
  }


  .promo-banner-title span {
    margin-top: 1px;
  }


  .promo-banner-description {
    margin-top: 7px;


    font-size: 0.52rem;
    line-height: 1.35;
  }


  .promo-banner-subtitle {
    margin-top: 3px;


    font-size: 0.47rem;
    line-height: 1.3;
  }


  .promo-banner-btn {
    min-height: 29px;


    margin-top: 8px;
    padding: 0 10px;


    font-size: 0.45rem;
  }
}




/* =========================================================
   PROMO BANNERS — VERY SMALL PHONES
   ========================================================= */


@media (max-width: 380px) {
  .promo-banner {
    height: 175px;
    border-radius: 14px;
  }


  .promo-banner-content {
    width: 60%;
    padding-left: 13px;
    padding-right: 7px;
  }


  .promo-banner-title {
    font-size: 1.15rem;
  }


  .promo-banner-description {
    font-size: 0.48rem;
  }


  .promo-banner-subtitle {
    font-size: 0.43rem;
  }


  .promo-banner-btn {
    min-height: 27px;
    padding: 0 9px;
    font-size: 0.42rem;
  }
}




/* FINAL FIND US MOBILE DESIGN */


.location-section {
  background:
    radial-gradient(circle at 15% 20%, rgba(255, 130, 40, 0.07), transparent 28%),
    radial-gradient(circle at 90% 80%, rgba(255, 130, 40, 0.05), transparent 30%),
    #2b1712;
}


.location-container {
  width: min(1080px, calc(100% - 32px));
  margin: 0 auto;
}


.location-heading {
  text-align: center;
}


.location-heading .section-eyebrow {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 13px;
  color: #ff9a32;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
}


.location-heading .section-eyebrow::before,
.location-heading .section-eyebrow::after {
  content: "";
  width: 42px;
  height: 2px;
  border-radius: 99px;
  background: #e87519;
}


.location-heading .section-heading {
  margin: 0;
  color: #fffaf5;
  font-size: clamp(2.35rem, 9vw, 4rem);
  line-height: 0.98;
  font-weight: 800;
  letter-spacing: -0.035em;
}


.location-heading p {
  max-width: 700px;
  margin: 18px auto 0;
  color: rgba(255, 250, 245, 0.82);
  font-size: clamp(0.9rem, 2.8vw, 1.08rem);
  line-height: 1.65;
}


/* Map */


.location-map-card {
  width: 100%;
  min-height: 360px;
  margin-top: 30px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 24px;
  background: #e8dfd6;
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.28),
    0 2px 0 rgba(255, 255, 255, 0.08) inset;
}


.location-map-placeholder {
  background:
    linear-gradient(
      rgba(249, 244, 237, 0.76),
      rgba(249, 244, 237, 0.76)
    ),
    repeating-linear-gradient(
      28deg,
      #d7cec4 0,
      #d7cec4 2px,
      #f5efe8 2px,
      #f5efe8 46px
    );
}


.location-map-pin {
  width: 66px;
  height: 66px;
  background: #e84b1a;
  box-shadow: 0 12px 30px rgba(70, 20, 8, 0.32);
}


.location-map-label {
  top: calc(50% + 48px);
  min-width: 220px;
  padding: 13px 17px;
  border-radius: 14px;
}


/* Information card */


.location-info-card {
  margin-top: 14px;
  padding: 22px;
  border: 1px solid rgba(255, 177, 92, 0.22);
  border-radius: 22px;
  background: #fffaf5;
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.2);
}


.location-info-item {
  gap: 14px;
}


.location-info-icon {
  flex: 0 0 46px;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: #fff0df;
  color: #d95b19;
}


.location-info-label {
  margin-bottom: 5px;
  color: #d15e20;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.15em;
}


.location-info-item strong {
  color: #2b1712;
  font-size: 0.91rem;
  line-height: 1.45;
}


.location-info-item p {
  margin: 4px 0 0;
  color: #765c51;
  font-size: 0.77rem;
}


.location-divider {
  margin: 20px 0;
  background: rgba(43, 23, 18, 0.1);
}


/* Buttons */


.location-actions {
  display: grid;
  grid-template-columns: 1fr;
  gap: 11px;
  margin-top: 14px;
}


.location-actions .q-btn {
  width: 100%;
  min-height: 56px;
  border-radius: 15px;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.045em;
}


.location-actions .q-btn .q-icon {
  font-size: 21px;
}


.location-actions .orange-btn {
  background: #ff7f18 !important;
  color: #fff !important;
  box-shadow: 0 10px 25px rgba(255, 127, 24, 0.22);
}


.location-actions .outline-orange-btn {
  border: 1.5px solid #ffab52 !important;
  background: transparent !important;
  color: #ffb15c !important;
}


/* Mobile-first refinement */


@media (max-width: 640px) {
  .location-section {
    padding: 64px 0 70px;
  }


  .location-container {
    width: calc(100% - 28px);
  }


  .location-heading {
    padding: 0 4px;
  }


  .location-heading .section-eyebrow {
    margin-bottom: 12px;
    font-size: 0.64rem;
    letter-spacing: 0.15em;
  }


  .location-heading .section-eyebrow::before,
  .location-heading .section-eyebrow::after {
    width: 28px;
  }


  .location-heading .section-heading {
    font-size: clamp(2rem, 10vw, 2.8rem);
  }


  .location-heading p {
    margin-top: 15px;
    font-size: 0.86rem;
    line-height: 1.6;
  }


  .location-map-card {
    min-height: 310px;
    margin-top: 26px;
    border-radius: 21px;
  }


  .location-map-label {
    min-width: 190px;
    padding: 11px 14px;
  }


  .location-map-label strong {
    font-size: 0.82rem;
  }


  .location-map-label span {
    font-size: 0.68rem;
  }


  .location-info-card {
    margin-top: 12px;
    padding: 20px 18px;
    border-radius: 20px;
  }


  .location-info-item strong {
    font-size: 0.84rem;
  }


  .location-info-item p {
    font-size: 0.73rem;
  }


  .location-actions {
    margin-top: 12px;
    gap: 9px;
  }


  .location-actions .q-btn {
    min-height: 54px;
  }
}


/* Very small phones */


@media (max-width: 380px) {
  .location-section {
    padding-top: 56px;
  }


  .location-container {
    width: calc(100% - 22px);
  }


  .location-heading .section-heading {
    font-size: 1.9rem;
  }


  .location-map-card {
    min-height: 285px;
  }


  .location-info-card {
    padding: 17px 15px;
  }
}




/* =========================================================
   LOCATION — MOBILE POLISH
   ========================================================= */


@media (max-width: 640px) {


  /* Keep the map exactly as it is for now */


  /* Dark information card — remove the oversized white look */
  .location-info-card {
    background: rgba(255, 255, 255, 0.045) !important;
    border: 1px solid rgba(255, 177, 92, 0.20) !important;
    border-radius: 18px !important;
    box-shadow: none !important;
    padding: 18px 16px !important;
    color: #fff !important;
  }


  .location-info-item {
    align-items: flex-start;
  }


  .location-info-icon {
    flex-shrink: 0;
  }


  .location-info-label {
    color: #ffb15c !important;
  }


  .location-info-item strong {
    color: #fffaf5 !important;
  }


  .location-info-item p {
    color: rgba(255, 250, 245, 0.68) !important;
  }


  .location-divider {
    background: rgba(255, 177, 92, 0.18) !important;
  }


  /* BUTTONS */
  .location-actions {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 10px !important;
    width: 100% !important;
    margin-top: 18px !important;
  }


  .location-actions .q-btn {
    width: 100% !important;
    min-height: 58px !important;
    height: 58px !important;
    padding: 0 10px !important;
    border-radius: 30px !important;
    font-size: 0.72rem !important;
    font-weight: 800 !important;
    letter-spacing: 0.03em !important;
  }


  .location-actions .orange-btn {
    background: #ff641f !important;
    color: #fff !important;
    box-shadow: none !important;
  }


  .location-actions .outline-orange-btn {
    background: transparent !important;
    border: 2px solid #ff8a22 !important;
    color: #ffb15c !important;
  }


  .location-actions .q-btn .q-icon {
    font-size: 22px !important;
    margin-right: 7px !important;
  }
}




/* =========================================================
   FIND US — FINAL MOBILE CLEANUP
   ========================================================= */


@media (max-width: 640px) {


  /* -------------------------------------------------------
     KEEP MAP UNTOUCHED
     ------------------------------------------------------- */


  .location-map-card {
    /* intentionally unchanged */
  }




  /* -------------------------------------------------------
     COMPACT HORIZONTAL LOCATION / HOURS BAR
     ------------------------------------------------------- */


  .location-info-card {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1fr) !important;
    align-items: center !important;
    gap: 10px !important;


    margin-top: 12px !important;
    padding: 13px 10px !important;


    min-height: 0 !important;
    border-radius: 16px !important;


    background: rgba(255, 255, 255, 0.045) !important;
    border: 1px solid rgba(255, 177, 92, 0.18) !important;
    box-shadow: none !important;
  }




  .location-info-item {
    min-width: 0 !important;
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
  }




  .location-info-icon {
    flex: 0 0 31px !important;
    width: 31px !important;
    height: 31px !important;
    border-radius: 50% !important;


    background: rgba(255, 177, 92, 0.12) !important;
    color: #ffb15c !important;
  }




  .location-info-icon .q-icon {
    font-size: 17px !important;
  }




  .location-info-label {
    margin-bottom: 2px !important;
    font-size: 0.52rem !important;
    line-height: 1 !important;
    letter-spacing: 0.12em !important;
    color: #ffb15c !important;
  }




  .location-info-item strong {
    font-size: 0.68rem !important;
    line-height: 1.25 !important;
    color: #fffaf5 !important;


    white-space: nowrap !important;
  }




  .location-info-item p {
    margin: 2px 0 0 !important;
    font-size: 0.58rem !important;
    line-height: 1.2 !important;
    color: rgba(255, 250, 245, 0.65) !important;


    white-space: nowrap !important;
  }




  /* Vertical divider */
  .location-divider {
    width: 1px !important;
    height: 38px !important;
    margin: 0 !important;
    background: rgba(255, 177, 92, 0.20) !important;
  }




  /* -------------------------------------------------------
     COMPACT BUTTON ROW
     ------------------------------------------------------- */


  .location-actions {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 10px !important;


    width: 100% !important;
    margin-top: 16px !important;
    margin-bottom: 0 !important;
  }




  .location-actions .q-btn {
    width: 100% !important;
    min-width: 0 !important;
    min-height: 52px !important;
    height: 52px !important;


    padding: 0 7px !important;
    border-radius: 28px !important;


    font-size: 0.68rem !important;
    font-weight: 800 !important;
    letter-spacing: 0.025em !important;
  }




  .location-actions .q-btn .q-icon {
    font-size: 20px !important;
    margin-right: 6px !important;
  }




  .location-actions .orange-btn {
    background: #ff641f !important;
    color: #fff !important;
    box-shadow: none !important;
  }




  .location-actions .outline-orange-btn {
    background: transparent !important;
    border: 2px solid #ff8a22 !important;
    color: #ffb15c !important;
  }




  /* -------------------------------------------------------
     BREATHING ROOM BEFORE FOOTER
     ------------------------------------------------------- */


  .location-section {
    padding-bottom: 35px !important;
    margin-bottom: 0 !important;
    border-bottom: 1px solid rgba(255, 177, 92, 0.08);
  }
}




/* Extra-tight phones */
@media (max-width: 380px) {


  .location-info-card {
    padding: 11px 7px !important;
    gap: 7px !important;
  }


  .location-info-item {
    gap: 6px !important;
  }


  .location-info-icon {
    flex-basis: 28px !important;
    width: 28px !important;
    height: 28px !important;
  }


  .location-info-icon .q-icon {
    font-size: 15px !important;
  }


  .location-info-item strong {
    font-size: 0.61rem !important;
  }


  .location-info-item p {
    font-size: 0.52rem !important;
  }


  .location-actions .q-btn {
    min-height: 50px !important;
    height: 50px !important;
    font-size: 0.62rem !important;
  }
}





/* =========================================================
   FINAL LOCATION CLEANUP
   Keep the map as-is.
   ========================================================= */


.location-info-card {
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 24px;
  margin-top: 18px;
  padding: 18px 24px;
  border: 1px solid rgba(255, 177, 92, 0.22);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.055);
  color: #fff;
  box-shadow: none;
}


.location-info-item {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}


.location-info-icon {
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 155, 45, 0.16);
  color: #ff9a32;
}


.location-info-label {
  margin-bottom: 3px;
  color: #ffb15c;
  font-size: 0.64rem;
}


.location-info-item strong {
  color: #fffaf5;
  font-size: 0.9rem;
  line-height: 1.25;
}


.location-info-item p {
  margin: 3px 0 0;
  color: rgba(255, 250, 245, 0.7);
  font-size: 0.76rem;
}


.location-divider {
  width: 1px;
  height: 54px;
  background: rgba(255, 177, 92, 0.28);
}


.location-actions {
  display: flex;
  justify-content: center;
  gap: 26px;
  margin-top: 20px;
}


.location-actions .q-btn {
  flex: 1 1 0;
  max-width: 435px;
  min-height: 54px;
  border-radius: 28px;
  padding: 0 24px;
  font-size: 0.95rem;
  font-weight: 700;
}


.location-actions .orange-btn {
  background: #ff7617 !important;
  color: #fff !important;
}


.location-actions .outline-orange-btn {
  border: 2px solid #ff9a32;
  color: #ffb15c !important;
  background: transparent !important;
}




/* -------------------------
   MOBILE LOCATION
   ------------------------- */


@media (max-width: 640px) {


  .location-section {
    padding: 42px 10px 18px;
  }


  .location-heading {
    margin-bottom: 18px;
  }


  .location-heading .section-eyebrow {
    margin-bottom: 7px;
    font-size: 0.62rem;
  }


  .location-heading .section-heading {
    font-size: clamp(1.65rem, 7vw, 2.2rem);
    line-height: 1.05;
  }


  .location-heading p {
    margin-top: 9px;
    font-size: 0.74rem;
    line-height: 1.45;
  }


  /* MAP: deliberately unchanged in size */


  .location-info-card {
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    gap: 8px;
    margin-top: 10px;
    padding: 12px 9px;
    border-radius: 16px;
  }


  .location-info-item {
    min-width: 0;
    gap: 7px;
  }


  .location-info-icon {
    flex: 0 0 30px;
    width: 30px;
    height: 30px;
  }


  .location-info-icon .q-icon {
    font-size: 16px;
  }


  .location-info-label {
    margin-bottom: 2px;
    font-size: 0.48rem;
    letter-spacing: 0.09em;
  }


  .location-info-item strong {
    font-size: 0.61rem;
    line-height: 1.2;
    white-space: nowrap;
  }


  .location-info-item p {
    margin-top: 2px;
    font-size: 0.52rem;
    line-height: 1.2;
    white-space: nowrap;
  }


  .location-divider {
    height: 44px;
  }


  .location-actions {
    flex-direction: row;
    gap: 10px;
    margin-top: 12px;
  }


  .location-actions .q-btn {
    width: auto;
    flex: 1 1 0;
    min-height: 43px;
    max-width: none;
    padding: 0 8px;
    border-radius: 24px;
    font-size: 0.61rem;
    letter-spacing: 0.02em;
  }


  .location-actions .q-btn .q-icon {
    font-size: 17px;
  }
}

</style>


<style>
/* Dark theme: premium warm-ivory hero headline */
html[data-theme="dark"] .hero-section .hero-title {
  color: #FFF0DE !important;
}
</style>


<style>
/* Brand-orange emphasis in dark-theme hero titles */
html[data-theme="dark"] .hero-section .hero-title-accent {
  color: #FF641C !important;
}
</style>
