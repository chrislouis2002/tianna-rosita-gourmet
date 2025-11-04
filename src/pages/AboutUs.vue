<template>
  <div class="about-page">

    <!-- ✅ Hero Section -->
    <section class="about-hero">
      <div class="overlay">
        <!-- <h1>About Tianna Rosita Gourmet</h1>
        <p>Crafting unforgettable flavors and heartfelt experiences.</p> -->
      </div>
    </section>

    <!-- ✅ Our Story Section -->
    <section class="our-story">
      <div class="story-container">
        <h3>OUR STORY</h3>
        <p class="intro-text">
          Introducing Tianna Rosita Gourmet — our newest branch, located inside Solution Fun City, Awka, is where Italian-inspired recipes meet gourmet dining. At Tianna Rosita Gourmet, we’ve created a space that blends vibrant flavors with a fine dining atmosphere, perfect for family outings, date nights, or simply treating yourself.
        </p>
        <p class="intro-text">
          From a wide variety of treats to carefully prepared à la carte dishes, every plate is crafted with love and a touch of sophistication. Whether you’re here for a quick bite, a celebration, or to explore authentic Italian-inspired meals, Tianna Rosita Gourmet promises a dining experience you’ll never forget.
        </p>
      </div>

       <!-- ✅ Horizontal Image Section -->
      <div class="image-gallery">
        <img src="/slider/IMG_0191.JPG" alt="Restaurant interior" />
        <img src="/slider/IMG_0188.JPG" alt="Chef cooking" />

      </div>


      <div class="story-container">
        <h3>OUR JOURNEY</h3>
        <p class="intro-text">
          Tianna Treats Café began as a passion for bringing people together over delicious food. What started as a cozy spot in Awka has now grown into a franchise with three branches across the city — each one serving quality, creativity, and unforgettable flavors.
        </p>
      </div>


    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMeta } from 'quasar';

// 🧠 SEO setup for the About Page
useMeta({
  title: 'About Tianna Rosita Gourmet — Fine Dining & Outdoor Restaurant in Awka',
  meta: [
    {
      name: 'description',
      content:
        'Learn about Tianna Rosita Gourmet, Awka’s top restaurant offering delicious Nigerian and continental meals, outdoor dining, and premium catering services.',
    },
    {
      property: 'og:title',
      content: 'About Tianna Rosita Gourmet — Awka’s Best Restaurant Experience',
    },
    {
      property: 'og:description',
      content:
        'Discover our story at Tianna Rosita Gourmet, where gourmet flavors meet relaxation. Located inside Solution Fun City, Awka.',
    },
    {
      property: 'og:image',
      content: '/logo.png',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://tiannarosita.netlify.app/about', // ✅ Replace later with your real domain
    },
  ],
});

// 🥗 You can keep your current About page content here
const restaurantStory = ref(`
Tianna Rosita Gourmet is a proudly Nigerian restaurant located in the heart of Awka, Anambra.
We blend traditional flavors with a modern touch — serving fresh meals, grilled delights, and chef-curated buffets in a cozy indoor and outdoor space.
From romantic dinners to Sunday family feasts, we offer an unforgettable dining experience.
`);

</script>

<style scoped>
.about-hero {
  position: relative;
  background-image: url('/slider/IMG_0189.JPG');
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-hero .overlay {
  text-align: center;
  color: white;
  padding: 0 20px;
}

.about-hero h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.about-hero p {
  font-size: 1.2rem;
}

.our-story {
  padding: 60px 20px;
  background: #07070a;

  color: #fdfdfd;
}

.story-container {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.intro-text {
  max-width: 800px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
  line-height: 1.6;
}


.image-gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap; /* Makes it responsive */
  margin-top: 40px;
}

.image-gallery img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.image-gallery img:hover {
  transform: scale(1.05);
}

</style>
