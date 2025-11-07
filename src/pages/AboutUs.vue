<template>
  <div class="about-page">

    <!-- ✅ Hero Section -->
    <section class="about-hero">
      <div class="overlay">
        <h1>About Tianna Rosita Gourmet</h1>
        <p>Where gourmet flavors meet elegant dining experiences.</p>
      </div>
    </section>

    <!-- ✅ Our Story Section -->
    <section class="our-story fade-in">
      <div class="story-container">
        <h3>OUR STORY</h3>
        <p class="intro-text">
          Introducing <strong>Tianna Rosita Gourmet</strong> — our newest branch located inside Solution Fun City, Awka, where Italian-inspired recipes meet Nigerian soul. We've created a space that blends vibrant flavors with an inviting fine-dining atmosphere, perfect for family outings, date nights, or simply treating yourself.
        </p>
        <p class="intro-text">
          From handcrafted à la carte dishes to signature desserts, every meal is prepared with passion, artistry, and love. Whether it’s a celebration or a quiet evening out, <strong>Tianna Rosita Gourmet</strong> promises a dining experience you’ll always remember.
        </p>
      </div>

      <!-- ✅ Horizontal Image Section -->
      <div class="image-gallery">
        <img src="/slider/IMG_0190.JPG" alt="Restaurant interior" />
        <img src="/slider/IMG_0188.JPG" alt="Chef cooking" />
      </div>

      <div class="divider"></div>

      <div class="story-container fade-in">
        <h3>OUR JOURNEY</h3>
        <p class="intro-text">
          <strong>Tianna Treats Café</strong> began as a small dream — a cozy café built to bring people together over the love of food. Today, that dream has blossomed into a growing franchise across Awka, serving creativity, comfort, and unforgettable taste at every branch.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useMeta } from "quasar";

useMeta({
  title: "About Tianna Rosita Gourmet — Fine Dining in Awka",
  meta: [
    { name: "description", content: "Learn about Tianna Rosita Gourmet, Awka’s premier restaurant offering fine dining and outdoor experiences with Paystack ordering." },
    { property: "og:title", content: "About Tianna Rosita Gourmet — Awka’s Fine Dining Experience" },
    { property: "og:image", content: "/logo.png" },
  ],
});
</script>

<style scoped>
/* 🌅 HERO SECTION */
.about-hero {
  position: relative;
  background-image: url('/slider/IMG_0189.JPG');
  background-size: cover;
  background-position: center;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(7, 7, 10, 0.4), rgba(7, 7, 10, 0.8));
}

.overlay {
  position: relative;
  text-align: center;
  color: #fff;
  z-index: 2;
}

.overlay h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.overlay p {
  font-size: 1.2rem;
  font-weight: 300;
  color: #f2f2f2;
}

/* 🥂 OUR STORY SECTION */
.our-story {
  padding: 80px 20px;
  background: #0a0a0d;
  color: #fdfdfd;
}

.story-container {
  max-width: 950px;
  margin: 0 auto 60px;
  text-align: center;
}

.story-container h3 {
  font-size: 1.8rem;
  color: #e7b96a;
  margin-bottom: 25px;
  letter-spacing: 1px;
}

.intro-text {
  max-width: 800px;
  margin: 0 auto 25px;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #d9d9d9;
}

/* 📸 IMAGE GALLERY */
.image-gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
  margin: 60px auto;
}

.image-gallery img {
  width: 350px;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  filter: brightness(90%) contrast(105%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  transition: all 0.35s ease;
}

.image-gallery img:hover {
  transform: scale(1.06);
  filter: brightness(100%) contrast(110%);
}

/* ✨ DIVIDER */
.divider {
  width: 80px;
  height: 3px;
  background: #e7b96a;
  margin: 50px auto;
  border-radius: 3px;
}

/* 💫 ANIMATIONS */
.fade-in {
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
