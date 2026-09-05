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
          navigation
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
                    @click="$router.push('/menu')"
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

      </div>
    </section>


    <!-- WELCOME -->
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
    </section>


    <!-- CUSTOMER FAVOURITES -->
    <section class="favourites-section">
      <div class="section-container">
        <div class="section-heading-wrap">
          <div>
            <span class="section-eyebrow">WHAT OUR GUESTS LOVE</span>

            <h2 class="section-heading">
              CUSTOMER FAVOURITES
            </h2>

            <p class="section-intro section-intro-left">
              A few of the dishes our guests keep coming back for.
            </p>
          </div>

          <q-btn
            label="VIEW FULL MENU"
            unelevated
            class="orange-btn desktop-only-btn"
            @click="$router.push('/menu')"
          />
        </div>

        <Swiper
          :breakpoints="breakpoints"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 2800, disableOnInteraction: false }"
          :navigation="true"
          :modules="[Autoplay, Navigation]"
          class="signature-swiper"
        >
          <SwiperSlide
            v-for="(dish, index) in signatureDishes"
            :key="index"
          >
            <div class="dish-card">
              <div class="dish-image-wrap">
                <img
                  :src="dish.image"
                  :alt="dish.name"
                  class="dish-image"
                />
              </div>

              <div class="dish-card-content">
                <h3>{{ dish.name }}</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <q-btn
          label="VIEW FULL MENU"
          unelevated
          class="orange-btn mobile-menu-btn"
          @click="$router.push('/menu')"
        />
      </div>
    </section>


    <!-- BROWSE BY CATEGORY -->
    <section class="categories-section">
      <div class="section-container">
        <div class="section-heading-wrap centered-heading">
          <div>
            <span class="section-eyebrow">EXPLORE OUR MENU</span>

            <h2 class="section-heading">
              BROWSE BY CATEGORY
            </h2>

            <p class="section-intro">
              Whatever you are craving, there is something waiting for you.
            </p>
          </div>
        </div>

        <div class="category-grid">
          <router-link
            v-for="(item, index) in categories"
            :key="index"
            :to="item.route"
            class="category-card"
          >
            <q-img
              :src="item.image"
              :ratio="1"
              class="category-image"
            >
              <div class="category-overlay">
                <h3>{{ item.title }}</h3>
                <span>VIEW MENU →</span>
              </div>
            </q-img>
          </router-link>
        </div>
      </div>
    </section>


    <!-- RESTAURANT EXPERIENCE -->
    <section class="experience-section">
      <div class="experience-image">
        <img
          src="/slider/Tianna-chef1.jpg"
          alt="Tianna Rosita Gourmet chef"
        />
      </div>

      <div class="experience-content">
        <span class="section-eyebrow">THE TIANNA ROSITA EXPERIENCE</span>

        <h2 class="section-heading">
          MADE WITH PASSION,
          <span>SERVED WITH HEART.</span>
        </h2>

        <p>
          Step into a dining experience where carefully crafted recipes,
          quality ingredients and genuine hospitality come together.
        </p>

        <p>
          Whether it is a relaxed meal, a special date night or time spent
          with family and friends, we are here to make every visit memorable.
        </p>

        <q-btn
          label="ABOUT US"
          unelevated
          class="orange-btn"
          @click="$router.push('/about')"
        />
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


    <!-- DELIVERY -->
    <section class="delivery-section">
      <div class="delivery-image">
        <img
          src="/slider/delivery-rider-motorcycle_941625-2559.jpg"
          alt="Tianna Rosita food delivery"
        />
      </div>

      <div class="delivery-content">
        <span class="section-eyebrow">CRAVING SOMETHING DELICIOUS?</span>

        <h2 class="section-heading">
          YOUR FAVOURITES,
          <span>DELIVERED.</span>
        </h2>

        <p>
          Enjoy Tianna Rosita Gourmet from wherever you are. Browse our menu,
          place your order online and let us bring the experience to you.
        </p>

        <q-btn
          label="ORDER FOOD"
          unelevated
          class="orange-btn"
          @click="$router.push('/menu')"
        />
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
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
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
    const slide = ref(0);

    // Hero slides
    const slides = [
      {
        title: "Good Food, Great Moments",
        subtitle:
          "From satisfying meals to unforgettable flavors, we bring gourmet experiences right to your table.",
        image: "/slider/cream-hero1.png",
      },
      {
        title: "Freshly Made, Full of Flavor",
        subtitle:
          "Delicious meals prepared with quality ingredients and served just the way you love them.",
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

    // ✅ Signature dishes slider items
    const signatureDishes = ref([
      { name: "asun rice", image: "/slider/asun-rice.jpg" },
      { name: "asun", image: "/slider/Asun.jpg" },
      { name: "chicken shawarma", image: "/slider/chicken-shawarma.jpg" },
      { name: "pizza", image: "/slider/IMG_0158.jpg" },
      { name: "carribean rice", image: "/slider/carribean-rice.jpg" },
      { name: "waffles-and-icecream", image: "/slider/waffles-and-icecream.jpg" },
      { name: "seafood boil", image: "/slider/IMG_0159.jpg" },
      { name: "jollof spaghetti", image: "/slider/jollof-spaghetti.jpg" },
      { name: "chocolate milkshake", image: "/slider/chocolate-milkshake.jpg" },
      { name: "protein platter", image: "/slider/protein-platter.jpg" },

      { name: "alfredo pasta", image: "/slider/alfredo-pasta-penne.jpg" },

      { name: "Loaded Fries", image: "/slider/19a277a8-d746-4ff2-982f-d372d4b250ba.JPG" },
      {
        name: "Buffet Sunday Special",
        image: "/slider/417378f1-36e0-44d4-9ad9-c263b8802354.JPG",
      },

    ]);

    // responsive breakpoints
    const breakpoints = {
      100: { slidesPerView: 1 },
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
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
      slide,
      slides,
      signatureDishes,
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
    background: #fffaf5;
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
    object-fit: cover;
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
   CUSTOMER FAVOURITES
   --------------------------------------------------------- */

.favourites-section {
  padding: 85px 0 95px;
  background: #fff;
}

.section-heading-wrap {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 38px;
}

.signature-swiper {
  width: 100%;
  padding: 5px 2px 45px;
}

.dish-card {
  height: 100%;
  overflow: hidden;
  background: #fff;
  border: 1px solid #eee3da;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(61, 35, 20, 0.08);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.dish-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 35px rgba(61, 35, 20, 0.13);
}

.dish-image-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #f4eee9;
}

.dish-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.dish-card:hover .dish-image {
  transform: scale(1.04);
}

.dish-card-content {
  padding: 14px 16px 17px;
  text-align: center;
}

.dish-card-content h3 {
  margin: 0;
  color: #2b1712;
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: capitalize;
}

.signature-swiper :deep(.swiper-button-next),
.signature-swiper :deep(.swiper-button-prev) {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.15);
}

.signature-swiper :deep(.swiper-button-next::after),
.signature-swiper :deep(.swiper-button-prev::after) {
  font-size: 15px;
  font-weight: 900;
  color: #e87519;
}

.signature-swiper :deep(.swiper-pagination-bullet-active) {
  background: #e87519;
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
    display: none;
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

  .signature-swiper :deep(.swiper-slide) {
    width: 100% !important;
    flex-shrink: 0;
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

</style>
