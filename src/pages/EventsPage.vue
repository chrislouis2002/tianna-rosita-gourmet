<template>
  <q-page class="events-page q-pa-md">
    <!-- HERO -->
    <section class="hero q-pa-xl column flex-center">
      <div class="hero-inner">
        <h1 class="hero-title">NO EVENT IS TOO LARGE, OR TOO SMALL...</h1>

        <div class="hero-cta">
          <q-btn unelevated class="btn-gold" label="Book an Event" @click="goToWhatsApp" />
        </div>
      </div>
    </section>

    <!-- SERVICES GRID -->
    <section class="services q-pa-lg">
      <div class="service-grid">
        <div
          v-for="(s, i) in services"
          :key="i"
          class="service-card fade-up"
          :style="{ animationDelay: (i * 100) + 'ms' }"
        >
          <div class="img-wrap">
            <img :src="s.image" :alt="s.title" />
          </div>

          <div class="service-body">
            <h3 class="service-title">{{ s.title }}</h3>
            <p class="service-desc" v-html="s.desc"></p>

            <div class="service-actions">
 <q-btn
            flat
            round
            icon="fa-brands fa-whatsapp"
            href="https://wa.me/+2347069637571"
            target="_blank"
            class="text-white"
          />            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-wrap q-pa-xl">
      <div class="cta-card">
        <h2>Ready to host an unforgettable event?</h2>
        <p>Contact us for custom menus, seating, and event planning.</p>
        <div class="cta-actions">
          <q-btn unelevated class="btn-gold" label="Contact Us (WhatsApp)" @click="goToWhatsApp" />
          <q-btn flat class="btn-outline" label="Request Quote" @click="openContactForm" />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useMeta } from 'quasar';

// 🧠 SEO Meta setup
useMeta({
  title: 'Events & Catering — Tianna Rosita Gourmet Awka',
  meta: [
    {
      name: 'description',
      content:
        'Host your private events, corporate parties, and Sunday buffets with Tianna Rosita Gourmet. We offer premium catering services and event spaces in Awka, Anambra.',
    },
    {
      property: 'og:title',
      content: 'Events & Catering — Tianna Rosita Gourmet Awka',
    },
    {
      property: 'og:description',
      content:
        'Book Tianna Rosita Gourmet for your next event in Awka. Perfect venue for birthdays, meetings, and celebrations with excellent catering service.',
    },
    {
      property: 'og:image',
      content: '/logo.png',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
});

const services = ref([
  {
    title: 'Private Events & Celebrations',
    image: '/slider/_ (6).jpeg',
    desc:
      'Reserve our elegant indoor space for birthdays, meetings, corporate gatherings and memorable celebrations. Full-service event planning available.',
  },
  {
    title: 'Sunday Buffet Experience',
    image: '/slider/_ (7).jpeg',
    desc:
      'Sunday Buffet — Adults: ₦25,000 • Ages 5–12: ₦15,000 • 0–4yrs: FREE. A lavish buffet with live stations and family-friendly options.',
  },
  {
    title: 'Full Bar & Evening Ambience',
    image: '/slider/hero5.jpeg',
    desc:
      'Cozy bar with premium drinks and mood lighting — perfect for after-parties and intimate gatherings.',
  },
  {
    title: 'Outdoor Park Packages',
    image: '/slider/_ (8).jpeg',
    desc:
      'Lightweight outdoor setups near the rides — casual food stands, quick bites and open-air vibes.',
  },
]);

const goToWhatsApp = () => {
  window.open('https://wa.me/+2347069637571', '_blank');
};

const openDetails = (i) => {
  alert(services.value[i].title + '\n\nMore details will be here.');
};

const openContactForm = () => {
  alert('Contact form / booking flow coming soon.');
};
</script>

<style scoped>
/* Page background */
.events-page {
  background: #07070a;
  color: #fff;
  min-height: 100vh;
}

/* HERO */
.hero {
  background-image:
    linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
    url('/slider/Glamorous-black-and-gold-wedding-reception.jpeg'); /* 👈 your actual image here */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 12px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.25rem;
  position: relative;
  overflow: hidden;
}

.hero-inner {
  max-width: 960px;
}

.hero-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin: 0 0 0.5rem 0;
  color: #ffd700;
  text-shadow: 0 2px 10px rgba(0,0,0,0.6);
  font-weight: 700;
  letter-spacing: 1px;
}

.hero-sub {
  color: rgba(255,255,255,0.85);
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

/* Gold button */
.btn-gold {
  background: linear-gradient(90deg,#d4af37,#b28c2f);
  color: #07070a;
  padding: 0.75rem 1.6rem;
  border-radius: 10px;
  font-weight: 700;
}
.btn-gold:hover { transform: translateY(-3px); }

/* SERVICES GRID */
.services {
  max-width: 1200px;
  margin: 0 auto;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

/* Responsive breakpoints */
@media (max-width: 1024px) {
  .service-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .service-grid { grid-template-columns: 1fr; }
}

/* single card */
.service-card {
  background: rgba(255,255,255,0.02);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.6);
  transition: transform 300ms ease, box-shadow 300ms ease;
  display: flex;
  flex-direction: column;
}

/* image area */
.img-wrap {
  height: 190px;
  overflow: hidden;
  display: block;
  transform-origin: center bottom;
  transition: transform 300ms ease;
  background: #111;
}

.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 450ms ease;
}

/* tilt/angle effect on hover */
.service-card:hover {
  transform: translateY(-8px) rotate(-0.6deg);
  box-shadow: 0 18px 40px rgba(0,0,0,0.7);
}
.service-card:hover .img-wrap {
  transform: translateY(-6px) rotate(-1deg) scale(1.03);
}
.service-card:hover img {
  transform: scale(1.06);
}

/* body */
.service-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.service-title {
  margin: 0;
  color: #ffd700;
  font-size: 1.05rem;
}

.service-desc {
  color: rgba(255,255,255,0.82);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

/* actions inside card */
.service-actions {
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

/* link style button */
.link-gold {
  color: #d4af37;
  border-radius: 8px;
  padding: 0.4rem 0.8rem;
}

/* CTA box */
.cta-wrap {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  padding-bottom: 4rem;
}

.cta-card {
  max-width: 920px;
  text-align: center;
  padding: 2.2rem;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  box-shadow: 0 10px 30px rgba(0,0,0,0.6);
}

.cta-card h2 {
  margin: 0 0 0.5rem 0;
  color: #ffd700;
}

.cta-card p {
  color: rgba(255,255,255,0.85);
  margin-bottom: 1rem;
}

.btn-outline {
  color: #d4af37;
  border: 1px solid rgba(212,175,55,0.18);
  margin-left: 0.75rem;
}

/* small animation: fade-up */
.fade-up {
  opacity: 0;
  transform: translateY(8px);
  animation: fadeUp 500ms forwards ease;
}
@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}
</style>
