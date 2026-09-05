<template>
  <div class="menu-nav">
    <div class="menu-nav__header">
      <button
        type="button"
        class="view-all-btn"
        @click="showAllCategories = !showAllCategories"
      >
        <span class="menu-nav__title">VIEW ALL</span>
        <q-icon
          :name="showAllCategories ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          size="18px"
        />
      </button>
    </div>


    <div
      v-if="showAllCategories"
      class="all-categories-panel"
    >
      <button
        v-for="(cat, index) in categories"
        :key="'all-' + index"
        type="button"
        class="all-category-card"
        :class="{ active: activeCategory === index }"
        @click="navigateToCategory(index)"
      >
        <div class="all-category-image-wrap">
          <img
            v-if="categoryImages[index]"
            :src="`/category_images/${categoryImages[index]}`"
            :alt="cat"
            class="all-category-image"
          />


          <div
            v-else
            class="all-category-placeholder"
          >
            <q-icon
              :name="categoryIcons[index] || 'restaurant'"
              size="32px"
            />
          </div>
        </div>


        <span class="all-category-name">
          {{ cat }}
        </span>


        <q-icon
          name="arrow_forward"
          class="all-category-arrow"
          size="20px"
        />
      </button>
    </div>


    <div class="category-scroll">
      <button
        v-for="(cat, index) in categories"
        :key="index"
        class="category-item"
        :class="{ active: activeCategory === index }"
        @click="navigateToCategory(index)"
      >
        <div class="category-image">
          <img
            v-if="categoryImages[index]"
            :src="`/category_images/${categoryImages[index]}`"
            :alt="cat"
          />


          <div v-else class="category-placeholder">
            <q-icon :name="categoryIcons[index] || 'restaurant'" size="28px" />
          </div>


          <div class="category-overlay"></div>
        </div>


        <span class="category-name">
          {{ cat }}
        </span>
      </button>
    </div>
  </div>
</template>


<script>
import { defineComponent } from "vue"


export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => []
    },


    categoryImages: {
      type: Array,
      default: () => []
    }
  },


  data() {
    return {
      activeCategory: null,
      showAllCategories: false,


      categoryIcons: [
        "restaurant",
        "fastfood",
        "local_dining",
        "bakery_dining",
        "lunch_dining",
        "local_pizza"
      ]
    }
  },


  methods: {
    navigateToCategory(index) {
      this.activeCategory = index
      this.showAllCategories = false


      const sections = document.getElementsByClassName("bgg")


      if (sections[index]) {
        sections[index].scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }
    }
  }
})
</script>


<style scoped>
.menu-nav {
  position: sticky;
  top: 0;
  z-index: 1000;


  width: 100%;
  background: #fff;
  padding: 12px 0 14px;


  overflow: visible;


  box-shadow: 0 8px 20px rgba(43, 23, 18, 0.08);
}


.menu-nav__header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px 12px;
  color: #2b1712;
}


.menu-nav__title {
  font-size: 0.72rem;
  font-weight: 700;
}


.view-all-btn {
  display: flex;
  align-items: center;
  gap: 6px;


  padding: 8px 12px;


  border: 0;
  border-radius: 10px;


  background: #fff7f1;
  color: #2b1712;


  cursor: pointer;
  font-family: inherit;


  transition:
    background 0.2s ease,
    transform 0.2s ease;
}


.view-all-btn:hover {
  background: #fff0e7;
}


.view-all-btn:active {
  transform: scale(0.96);
}




/* =========================================
   VIEW ALL — EXPANDED CATEGORY GALLERY
   ========================================= */


.all-categories-panel {
  width: min(100% - 24px, 700px);


  max-height: 65vh;


  margin: 0 auto 18px;


  padding: 8px;


  display: flex;
  flex-direction: column;
  gap: 8px;


  overflow-y: auto;


  background: #fffaf5;


  border: 1px solid #eaded6;
  border-radius: 20px;


  box-shadow: 0 14px 35px rgba(43, 23, 18, 0.12);


  scrollbar-width: thin;
}




.all-category-card {
  width: 100%;
  min-height: 86px;


  display: flex;
  align-items: center;
  gap: 14px;


  padding: 10px 14px;


  border: 1px solid transparent;
  border-radius: 16px;


  background: #fff;


  cursor: pointer;


  text-align: left;


  font-family: inherit;


  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}




.all-category-card:hover {
  transform: translateX(4px);


  border-color: #f7c9b7;


  box-shadow: 0 6px 18px rgba(43, 23, 18, 0.08);
}




.all-category-card.active {
  border-color: #f4511e;


  background: #fff8f3;
}




.all-category-image-wrap {
  flex: 0 0 64px;


  width: 64px;
  height: 64px;


  overflow: hidden;


  border-radius: 50%;


  display: flex;
  align-items: center;
  justify-content: center;


  background: #fff7f1;


  border: 3px solid #fff;


  box-shadow: 0 4px 12px rgba(43, 23, 18, 0.1);
}




.all-category-image {
  width: 100%;
  height: 100%;


  object-fit: cover;


  display: block;
}




.all-category-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;


  width: 100%;
  height: 100%;


  color: #f4511e;
}




.all-category-name {
  flex: 1;


  color: #2b1712;


  font-size: 0.9rem;
  font-weight: 700;


  line-height: 1.35;
}




.all-category-arrow {
  color: #f4511e;


  flex-shrink: 0;
}




.all-category-card.active .all-category-name {
  color: #f4511e;
}




.category-scroll {
  width: 100%;
  display: flex;
  gap: 2px;
  overflow-x: auto;
  padding: 4px 2px 12px;
  scrollbar-width: none;
}


.category-scroll::-webkit-scrollbar {
  display: none;
}


.category-item {
  flex: 0 0 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
}


.category-image {
  position: relative;
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


.category-item:hover .category-image,
.category-item.active .category-image {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(244, 81, 30, 0.18);
}


.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


.category-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}


.category-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}


.category-placeholder .q-icon {
  color: #f4511e;
  font-size: 32px;
}


.category-name {
  width: 108px;
  color: #2b1712;
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
}


.category-item.active .category-name {
  color: #f4511e;
}
</style>