<template>
  <div id="contact">
    <!-- HERO SECTION -->
    <section class="visit-section">
      <div class="overlay"></div>
      <div class="overlay-content">
        <h2>COME SAY HI! FIND US AT SOLUTION FUN CITY, AWKA</h2>
        <q-btn
          label="Visit Us"
          unelevated
          rounded
          class="q-mt-md custom-visit-btn"
          href="https://www.google.com/maps/place/Solution+Fun+City/@6.2175551,7.0617862,3a,75y,90t/data=!3m8!1e5!3m6!1sCIABIhDDzqejtUf8FZe8FAFz6Hbf!2e10!3e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAG0ilSznzCVkU0pxv_TzfnZ_v5y40dgHd03lJkJawHNSOkKzrjI1PzE7kul8rxCBAt00uxQdrjnVknNsxqQMGmDnqRkDN1wGgXOUkKzQBwx08vpVV4f8wQsTWcft_tmodkmsKLW9ibLst2QdBYc%3Dw86-h152-k-no!7i1080!8i1920!4m7!3m6!1s0x104383ffde16a36f:0x2e1fa0f31309a13e!8m2!3d6.2175551!4d7.0617862!10e5!16s%2Fg%2F11yd9x38tk?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        />
      </div>
    </section>

    <!-- MAP SECTION -->
    <div class="q-pa-md map-container">
      <iframe
        class="map-frame"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.000000000000!2d7.0617862!3d6.2175551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104383ffde16a36f%3A0x2e1fa0f31309a13e!2sSolution+Fun+City!5e0!3m2!1sen!2sng!4v0000000000000!5m2!1sen!2sng"
  width="100%"
  height="450"
  style="border:0; border-radius:12px;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Google Map Location"
      >
    </iframe>
    </div>
  </div>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
/* HERO SECTION */
.visit-section {
  position: relative;
  background-image: url('slider/istockphoto-1065651036-612x612.jpg'); /* Change to your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Dark Overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45); /* Adjust darkness here */
  z-index: 1;
}

.overlay-content {
  text-align: center;
  color: white;
  padding: 20px;
  max-width: 85%;
  z-index: 2; /* Ensures content stays above overlay */
  position: relative;
}

.overlay-content h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.overlay-content p {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

/* MAP FRAME RESPONSIVENESS */
.map-frame {
  width: 100%;
  height: 450px;
  border: 0;
  border-radius: 12px;
}

.map-container {
  background-color: #000; /* Or your site’s background */
}

@media (max-width: 768px) {
  .visit-section {
    height: 50vh;
  }

  .overlay-content h2 {
    font-size: 1.6rem;
  }

  .overlay-content p {
    font-size: 1rem;
  }

  .map-frame {
    height: 350px;

  }
}

.custom-visit-btn {
  background-color: red;
  color: white;
  transition: 0.3s ease;
}

.custom-visit-btn:hover {
  filter: brightness(1.1);
}
</style>
