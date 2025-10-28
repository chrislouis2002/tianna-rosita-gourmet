<template>
  <div class="about-page">

    <!-- ✅ Hero Section -->
    <section class="about-hero">
      <div class="overlay">
        <h1>About Tianna Rosita Gourmet</h1>
        <p>Crafting unforgettable flavors and heartfelt experiences.</p>
      </div>
    </section>

    <!-- ✅ Our Story Section -->
    <section class="our-story">
      <div class="story-container">
        <h3>OUR STORY</h3>
        <p class="intro-text">
Introducing Tianna Rosita Gourmet Our newest branch, located inside Solution Fun City, Awka, is where Italian-inspired recipes meet gourmet dining. At Tianna Rosita Gourmet, we’ve created a space that blends vibrant flavors with a fine dining atmosphere, perfect for family outings, date nights, or simply treating yourself.        </p>
        <p class="intro-text">
What We Offer From a wide variety of treats to carefully prepared à la carte dishes, every plate is crafted with love and a touch of sophistication. Whether you’re here for a quick bite, a celebration, or to explore authentic Italian-inspired meals, Tianna Rosita Gourmet promises a dining experience you’ll never forget. Our Promise At every branch of Tianna Treats Café, freshness, quality, and great service are at the heart of what we do. Tianna Rosita Gourmet takes this tradition further — serving you not just food, but an experience.        </p>


      </div>
      <div class="story-container">
        <h3>OUR JOURNEY</h3>
        <p class="intro-text">
Tianna Treats Café began as a passion for bringing people together over delicious food. What started as a cozy spot in Awka has now grown into a franchise with three branches across the city — each one serving quality, creativity, and unforgettable flavors.</p>

      </div>

    </section>

  </div>
</template>

<script setup>
</script>

<style scoped>
.about-hero {
  position: relative;
  background-image: url('slider/about.jpeg');
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




</style>
