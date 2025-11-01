<template>
  <q-page class="home-page q-pa-md">
    <!-- HERO / SLIDER -->
    <div class="hero">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        navigation
        control-color="white"
        height="600px"
        class="hero-carousel"
        :autoplay="4000"
        infinite
      >
        <q-carousel-slide
          v-for="(s, i) in slides"
          :key="i"
          :name="i"
          :img-src="s.image"
    fit="cover"
          :style="{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(' + s.image + ')'
          }"
          class="hero-slide"
        >
          <div class="hero-content">
            <h1 class="hero-title">{{ s.title }}</h1>
            <p class="hero-sub">{{ s.subtitle }}</p>
            <div class="hero-ctas">
                <!-- ✅ Menu Button -->
        <q-btn
        label="Order Now"
        color="red"
        class="menu-btn"
        unelevated
        @click="$router.push('/menu')"
      />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <!-- SIGNATURE DISHES SECTION -->
<!-- ✅ Signature Dishes Slider -->
<section class="signature-slider">
  <h2 class="section-title">CUSTOMER FAVOURITES</h2>
  <p class="section-subtitle">Some of our customers top picks</p>

  <Swiper
    :breakpoints="breakpoints"
    :space-between="20"
    :loop="true"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    :navigation="true"
    :modules="[Autoplay, Navigation]"
    class="signature-swiper"
  >
    <SwiperSlide
      v-for="(dish, index) in signatureDishes"
      :key="index"
    >
      <div class="dish-card">
        <img :src="dish.image" :alt="dish.name" class="dish-image" />
      </div>
    </SwiperSlide>
  </Swiper>
</section>

<section class="delivery">
  <div class="delivery-img">
    <img
      src="/slider/pngtree-food-delivery-rider-on-red-scooter-png-image_15870715-removebg-preview.png"
      alt="Fast Delivery"
    />
  </div>

  <div class="delivery-text">
    <h1>Fastest Delivery & Easy Pick</h1>
    <p>Hot meals delivered to your door in minutes — quick, reliable, and fresh!</p>
    <q-btn
      color="red"
      label="Order Now"
      class="q-mt-md q-px-lg q-py-sm"
      glossy
      no-caps
      @click="$router.push('/menu')"
    />
  </div>
</section>


  <section class="category-grid q-pa-lg">
    <div class="row q-col-gutter-lg justify-center">

      <!-- Single Category Card -->
      <router-link
        v-for="(item, index) in categories"
        :key="index"
        :to="item.route"
        class="col-12 col-md-6 category-card"
      >
        <q-img
          :src="item.image"
          :ratio="16/9"
          class="image-card"
        >
          <div class="overlay flex flex-center">
            <h2 class="text-white text-h4 text-bold">{{ item.title }}</h2>
          </div>
        </q-img>
      </router-link>


    </div>
  </section>

<FooterSection />
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

    // hero slides (dummy images — replace with actual ones later)
    const slides = [
      {
        title: "FRESH OFF THE GRILL",
        subtitle: "Perfectly grilled fish & chicken, seasoned to perfection",
        image: "/slider/ikan-bakar-semporna-scaled.webp",
      },
      {
        title: "SUNDAY BUFFET FEAST",
        subtitle: "Eat all you can • Every Sunday • From 12 PM",
        image: "/slider/hero1.jpeg",
      },
     
      {
        title:
          "ENJOY EXCLUSIVE DISCOUNTS WHEN YOU ORDER DIRECTLY FROM OUR WEBSITE",
        subtitle: "",
        image: "/slider/gourmetpasta.jpeg",
      },
    ];

    // ✅ Signature dishes slider items
    const signatureDishes = ref([
      { name: "Loaded Fries", image: "/slider/IMG_0158.jpg" },
      { name: "Loaded Fries", image: "/slider/IMG_0159.jpg" },
      { name: "Loaded Fries", image: "/slider/hero2.JPG" },
      { name: "Loaded Fries", image: "/slider/hero6.JPG" },
      {
        name: "Loaded Fries",
        image: "/category_images/Loaded-Fries-735x490.webp/",
      },
      {
        name: "Loaded Fries",
        image:
          "/slider/chicken_wings_lolipop _food _foodie_ food lover_ delicious street food _chicken recipe_ snacks.jpeg",
      },
      { name: "Loaded Fries", image: "/slider/19a277a8-d746-4ff2-982f-d372d4b250ba.JPG" },
      {
        name: "Buffet Sunday Special",
        image: "/slider/417378f1-36e0-44d4-9ad9-c263b8802354.JPG",
      },
      { name: "Grilled Chicken Platter", image: "/slider/hero2.JPG" },
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
        image: "/slider/chef.jpeg",
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
.home-page {
  background: #0d0b09; /* Warm espresso tone */
  color: #fff;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
}

/* HERO (kept as is, with subtle polish) */
.hero-carousel .hero-slide {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
}

.hero-content {
  text-align: center;
  width: 100%;
  max-width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  color: #fff;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.4);
}

.hero-title {
  display: block;
  width: 100%;
  font-size: clamp(2rem, 5vw, 5rem);
  line-height: 1.2;
  word-wrap: break-word;
  font-weight: 700;
  letter-spacing: 1px;
  padding-top: 1rem;
  color: rgba(255, 255, 255, 1);
}

.hero-sub {
  opacity: 0.9;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.hero-ctas {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.menu-btn {
  font-size: 1.2rem;
  padding: 0.8rem 2.5rem;
  border-radius: 8px;
  font-weight: bold;
  background-color: #d4af37;
  color: #0d0b09;
  transition: all 0.3s ease;
}

.menu-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0px 6px 14px rgba(212, 175, 55, 0.3);
}

@media (max-width: 800px) {
  .hero-title { font-size: 1.8rem; }
  .hero-content { margin: 1rem; text-align: center; }
  .hero-ctas { justify-content: center; }
}

/* SIGNATURE DISHES SECTION */
.signature-slider {
  padding: 4rem 1.5rem 8rem;
  text-align: center;
  background: linear-gradient(180deg, rgba(13,11,9,1) 0%, rgba(20,16,12,1) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.section-title {
  font-size: 2.3rem;
  font-weight: 700;
  color: #d4af37;
  margin-bottom: 0.3rem;
  letter-spacing: 1px;
}

.section-subtitle {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 2.5rem;
}

.signature-swiper {
  max-width: 100%;
  margin-top: 1.5rem;
}

.dish-card {
  width: 100%;
  height: 270px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 6px 15px rgba(0,0,0,0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.dish-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0,0,0,0.6);
}

.dish-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.dish-card:hover .dish-image {
  transform: scale(1.07);
}

/* CATEGORY GRID */
.category-grid {
  padding: 6rem 1rem;
  background: #0c0a08;
}

.category-card {
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.image-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.5s ease;
  width: 100%;
  height: 480px;
  object-fit: cover;
}

.category-card:hover .image-card {
  transform: scale(1.04);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.category-card:hover .overlay {
  opacity: 1;
}

.overlay h2 {
  font-weight: 700;
  letter-spacing: 1px;
  color: #d4af37;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.7);
}

/* Small Screen Adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }
  .dish-card {
    height: 220px;
  }
  .image-card {
    height: 300px;
  }
}

.delivery {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(135deg, #1a1a1a, #2a0000);
  padding: 4rem 2rem;
  border-radius: 25px;
  color: white;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: center;
}

.delivery-img img {
  width: 370px;
  max-width: 100%;
  transition: transform 0.3s ease-in-out;
}

.delivery-img img:hover {
  transform: scale(1.05);
}

.delivery-text h1 {
  /* font-family: "rubik", sans-serif; */
  font-weight: 800;
  font-size: 2.5rem;
  color: #d4af37;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
  margin-bottom: 1rem;
}

.delivery-text p {
  font-family: "martian", monospace;
  font-weight: 400;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 400px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .delivery {
    flex-direction: column;
    padding: 3rem 1.5rem;
  }

  .delivery-text h1 {
    font-size: 2rem;
  }

  .delivery-img img {
    width: 220px;
  }
}
</style>
