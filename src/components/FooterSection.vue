<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-container">


        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-brand-name">Tianna Rosita</div>
          <div class="footer-brand-subtitle">GOURMET</div>


          <p class="footer-description">
            Delicious food, made with love. Enjoy freshly prepared meals,
            memorable flavors and a beautiful dining experience in Awka.
          </p>


          <q-btn
            label="ORDER NOW"
            unelevated
            to="/menu"
            class="footer-order-btn"
          />
        </div>


        <!-- Quick Links -->
        <div class="footer-section">
          <h3>QUICK LINKS</h3>


          <q-btn flat no-caps to="/" label="Home" class="footer-link" />
          <q-btn flat no-caps to="/menu" label="Menu" class="footer-link" />
          <q-btn flat no-caps to="/about" label="About Us" class="footer-link" />
          <q-btn flat no-caps to="/login" label="Admin Login" class="footer-link" />
          <q-btn flat no-caps label="Find Us" class="footer-link" :href="'https://www.google.com/maps/place/Tianna+Rosita/@6.2127385,7.0647874,12z/data=!4m10!1m2!2m1!1stianna+rosita+awka!3m6!1s0x1043836de51840e5:0x58e0bac892328e3a!8m2!3d6.2136739!4d7.0651789!15sChJ0aWFubmEgcm9zaXRhIGF3a2FaFCISdGlhbm5hIHJvc2l0YSBhd2thkgEVaXRhbGlhbl9ncm9jZXJ5X3N0b3JlmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4T2ExTXhVbmxrUlRGd1lXNVNOV0Z0ZHpGWFJUbEpZakJzVGs5VlJSQULgAQD6AQQIABA3!16s%2Fg%2F11ymnd569f?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D'" target="_blank" rel="noopener noreferrer" />
          <q-btn flat no-caps to="/events" label="Events & Catering" class="footer-link" />
        </div>


        <!-- Visit Us -->
        <div class="footer-section">
          <h3>VISIT US</h3>


          <a
            href="https://www.google.com/maps/place/Tianna+Rosita/@6.2136739,7.0476694,14z/data=!4m10!1m2!2m1!1stianna+rosita+awka!3m6!1s0x1043836de51840e5:0x58e0bac892328e3a!8m2!3d6.2136739!4d7.0651789!15sChJ0aWFubmEgcm9zaXRhIGF3a2FaFCISdGlhbm5hIHJvc2l0YSBhd2thkgEVaXRhbGlhbl9ncm9jZXJ5X3N0b3JlmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4T2ExTXhVbmxrUlRGd1lXNVNOV0Z0ZHpGWFJUbEpZakJzVGs5VlJSQULgAQD6AQQIABA3!16s%2Fg%2F11ymnd569f?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-contact"
          >
            <span class="contact-icon">⌖</span>
            <span>Solution Fun City,<br />Awka, Anambra State</span>
          </a>


          <a href="tel:+2347069637571" class="footer-contact">
            <span class="contact-icon">☎</span>
            <span>+234 706 963 7571</span>
          </a>


          <a href="tel:+2348129691245" class="footer-contact">
            <span class="contact-icon">☎</span>
            <span>+234 812 969 1245</span>
          </a>


          <a href="mailto:tiannarosita@gmail.com" class="footer-contact">
            <span class="contact-icon">✉</span>
            <span>tiannarosita@gmail.com</span>
          </a>
        </div>


        <!-- Opening Hours -->
        <div class="footer-section">
          <h3>OPENING HOURS</h3>


          <div class="hours-card">
            <div class="hours-row">
              <span>Mon - Sat</span>
              <strong>10AM - 9PM</strong>
            </div>


            <div class="hours-row">
              <span>Sunday</span>
              <strong>12PM - 10PM</strong>
            </div>
          </div>


          <p class="hours-note">
            We're ready to serve you.
          </p>


          <!-- Social Links -->
          <div class="social-links">
            <a
              href="https://www.instagram.com/tiannas_treats.ng/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="social-btn"
            >
              <q-icon name="fa-brands fa-instagram" />
            </a>


            <a
              href="https://m.facebook.com/TiannastreatsGranola/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="social-btn"
            >
              <q-icon name="fa-brands fa-facebook-f" />
            </a>


            <a
              href="https://wa.me/+2347069637571"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              class="social-btn"
            >
              <q-icon name="fa-brands fa-whatsapp" />
            </a>
          </div>
        </div>


      </div>
    </div>


    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <span>
          © {{ new Date().getFullYear() }} Tianna Rosita Gourmet
        </span>


        <span class="footer-divider">•</span>


        <span>All Rights Reserved</span>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.site-footer {
  background: #fffaf5;
  color: #2b1712;
  border-top: 1px solid #f1e2d7;
}


.footer-top {
  padding: 64px 5% 50px;
}


.footer-container {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.25fr 1.1fr;
  gap: 42px;
}


.footer-brand {
  max-width: 330px;
}


.footer-brand-name {
  font-family: "Playfair Display", Georgia, serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  color: #2b1712;
}


.footer-brand-subtitle {
  margin-top: 7px;
  color: #e87524;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 4px;
}


.footer-description {
  margin: 22px 0 24px;
  color: #70584d;
  font-size: 14px;
  line-height: 1.75;
}


.footer-order-btn {
  min-height: 44px;
  padding: 0 24px;
  border-radius: 12px;
  background: #e87524;
  color: #ffffff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  box-shadow: 0 8px 20px rgba(232, 117, 36, 0.18);
}


.footer-section h3 {
  margin: 5px 0 20px;
  color: #2b1712;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
}


.footer-link {
  display: block;
  width: fit-content;
  min-height: 34px;
  padding: 0;
  color: #70584d;
  font-size: 14px;
  justify-content: flex-start;
}


.footer-link:hover {
  color: #e87524;
}


.footer-contact {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  margin-bottom: 15px;
  color: #70584d;
  text-decoration: none;
  font-size: 13px;
  line-height: 1.55;
  transition: color 0.2s ease;
}


.footer-contact:hover {
  color: #e87524;
}


.contact-icon {
  width: 25px;
  height: 25px;
  flex: 0 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff0e4;
  color: #e87524;
  font-size: 14px;
}


.hours-card {
  padding: 16px;
  border: 1px solid #f1e2d7;
  border-radius: 14px;
  background: #ffffff;
}


.hours-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 9px 0;
  color: #70584d;
  font-size: 12px;
  border-bottom: 1px solid #f4ebe5;
}


.hours-row:last-child {
  border-bottom: none;
}


.hours-row strong {
  color: #2b1712;
  white-space: nowrap;
}


.hours-note {
  margin: 12px 0 18px;
  color: #e87524;
  font-size: 12px;
  font-weight: 600;
}


.social-links {
  display: flex;
  gap: 9px;
}


.social-btn {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #f0dfd3;
  color: #2b1712;
  text-decoration: none;
  transition: all 0.2s ease;
}


.social-btn:hover {
  background: #e87524;
  border-color: #e87524;
  color: #ffffff;
  transform: translateY(-2px);
}


.footer-bottom {
  border-top: 1px solid #f1e2d7;
  padding: 20px 5%;
}


.footer-bottom-inner {
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  color: #927b70;
  font-size: 11px;
}


.footer-divider {
  color: #e87524;
}


/* Tablet */
@media (max-width: 900px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 38px 30px;
  }


  .footer-brand {
    max-width: 100%;
  }
}


/* Mobile */
@media (max-width: 599px) {
  .footer-top {
    padding: 45px 20px 35px;
  }


  .footer-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }


  .footer-brand {
    max-width: 100%;
  }


  .footer-brand-name {
    font-size: 29px;
  }


  .footer-description {
    max-width: 360px;
  }


  .footer-section h3 {
    margin-bottom: 14px;
  }


  .footer-bottom {
    padding: 18px 20px;
  }


  .footer-bottom-inner {
    flex-wrap: wrap;
    text-align: center;
    line-height: 1.5;
  }
}
</style>
