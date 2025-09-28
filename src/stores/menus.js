import { defineStore } from "pinia";

export const useMenu = defineStore("menus", {
  state: () => ({
    menu: [
      /**
       * Starters
       */
      {
        name: "Starters",
        category_image: "starters.jpeg",
        items: [
          {
            name: "Spring Rolls",
            size: "",
            price: 4000,
          },
          {
            name: "Samosas",
            size: "",
            price: 4000,
          },
          {
            name: "Shrimp rolls",
            size: "",
            price: 9000,
          },
          {
            name: "Chicken Wings",
            size: "",
            price: 6000,
          },
          {
            name: "Buffalo Wings",
            size: "",
            price: 8000,
          },
          {
            name: "Butterfly Prawns",
            size: "",
            price: 10500,
          },
          {
            name: "Peppered Half Chicken ",
            size: "",
            price: 10000,
          },
          {
            name: "Peppered Full Chicken ",
            size: "",
            price: 20000,
          },
          {
            name: " Peppered Goat meat ",
            size: "",
            price: 7000,
          },
          {
            name: "Peppered Turkey",
            size: "",
            price: 7000,
          },
          {
            name: "Asian Chicken",
            size: "",
            price: 8000,
          },
          {
            name: "Chicken Corn Soup",
            size: "",
            price: 4000,
          },
          {
            name: "Catfish Pepper Soup",
            size: "",
            price: 6000,
          },
          {
            name: "Full Catfish Pepper Soup",
            size: "",
            price: 20000,
          },
          {
            name: "Chicken Escalope",
            size: "",
            price: 8000,
          },
          {
            name: "Chicken Popcorn",
            size: "",
            price: 7000,
          },
          {
            name: "Chicken Kebab",
            size: "",
            price: 8000,
          },
          {
            name: "Beef Kebab",
            size: "",
            price: 6000,
          },
        ],
      },
      /**
       * BURGERS/SANDWICHES/WRAPS
       */
      {
        name: "Burgers/Sandwiches/Wraps",
        category_image: "burgers.png",
        items: [
          {
            name: "Double King Burger",
            size: "",
            price: 9500,
          },

          {
            name: "Chicken & Beef Shawarma",
            size: "",
            price: 7000,
          },

          {
            name: "Beef Shawarma",
            size: "",
            price: 4500,
          },

          {
            name: "Chicken Shawarma",
            size: "",
            price: 5000,
          },

          {
            name: "Club Sandwich Special",
            size: "",
            price: 5000,
          },
          {
            name: "Chicken/Beef Sandwich",
            size: "",
            price: 7000,
          },
        ],
      },

      /**
       * Desserts
       */
      {
        name: "Desserts",
        category_image: "dessert.jpg",
        items: [
          {
            name: "Ice Cream",
            size: "Small Cup",
            price: 3000,
          },
          {
            name: "Ice Cream",
            size: "Medium Cup",
            price: 4000,
          },
          {
            name: "Ice Cream with toppings",
            size: "Medium Cup",
            price: 4500,
          },
          {
            name: "Parfait (cup)",
            size: "",
            price: 5000,
          },
          {
            name: "Parfait (Bowl)",
            size: "",
            price: 8500,
          },
          {
            name: "Pancake & Icecream",
            size: "",
            price: 8000,
          },
          {
            name: "Waffle & Icecream",
            size: "",
            price: 8000,
          },
          {
            name: "Vanilla Milkshake",
            size: "",
            price: 7000,
          },
          {
            name: "Strawberry Milkshake",
            size: "",
            price: 7000,
          },
          {
            name: "Chocolate Milkshake",
            size: "",
            price: 7000,
          },
          {
            name: "Oreos Milkshake",
            size: "",
            price: 8500,
          },
        ],
      },
      /**
       * Finger Foods & Sides
       */
      {
        name: "Finger Foods & Sides",
        category_image: "fingerfoods&sides.jpeg",
        items: [
          {
            name: "Peppered Chicken & Chips",
            size: "",
            price: 8500,
          },
          {
            name: "BBQ Chicken & Chips",
            size: "",
            price: 10000,
          },
          {
            name: "Fried Cripsy Chicken & Chips",
            size: "",
            price: 9000,
          },
          {
            name: "Peppered Turkey & Chips",
            size: "",
            price: 10000,
          },
          {
            name: "Crispy Fish & Chips",
            size: "",
            price: 9000,
          },
          {
            name: "Peppered Fish & Chips",
            size: "",
            price: 8500,
          },
          {
            name: "Seafood Boil",
            size: "",
            price: 35000,
          },
          {
            name: "Seafood Skewer",
            size: "",
            price: 12500,
          },
          {
            name: "Grilled Tilapia",
            size: "",
            price: 18000,
          },
          {
            name: "Meaty Platter",
            size: "",
            price: 35000,
          },
          {
            name: "Seafood Platter",
            size: "",
            price: 50000,
          },
          {
            name: "Tianna's Special Platter",
            size: "",
            price: 75000,
          },
          {
            name: "Potato, Plantain or Yam Fries",
            size: "",
            price: 4000,
          },
          {
            name: "Yamarita",
            size: "",
            price: 5000,
          },
          {
            name: "Sausages",
            size: "",
            price: 2000,
          },
          {
            name: "Plantain Frittata",
            size: "",
            price: 6500,
          },
        ],
      },

      /**
       * PIZZAS
       */
      {
        name: "Pizza",
        category_image: "pizza.png",
        items: [
          {
            name: "Beef Suya Pizza",
            size: "",
            price: 15500,
          },

          {
            name: "Overload Pizza",
            size: "",
            price: 24000,
          },
          {
            name: "Chicken Suya Pizza",
            size: "",
            price: 16000,
          },

          {
            name: "BBQ Chicken Pizza",
            size: "",
            price: 16500,
          },

          {
            name: "Tropical Pizza",
            size: "",
            price: 16000,
          },

          {
            name: "Half n Half",
            size: "",
            price: 16500,
          },

          {
            name: "Extra Cheese",
            size: "",
            price: 4000,
          },

          {
            name: "Extra Protein Toppings",
            size: "",
            price: 4000,
          },
        ],
      },
      /**
       * Proteins
       */
      {
        name: "Proteins",
        category_image: "whole-grilled-chicken-fp.jpg",
        items: [
          {
            name: "Beef",
            size: "",
            price: 2000,
          },
          {
            name: "Chicken",
            size: "",
            price: 5000,
          },
          {
            name: "Turkey",
            size: "",
            price: 6500,
          },

          {
            name: "Catfish",
            size: "",
            price: 5000,
          },
          {
            name: "Goatmeat",
            size: "",
            price: 5000,
          },
          {
            name: "Ice Fish",
            size: "",
            price: 2500,
          },
          {
            name: "Boiled Egg",
            size: "",
            price: 1000,
          },
        ],
      },
      /**
       * Main Dishes
       */
      {
        name: "Main Dishes",
        category_image: "rice.jpg",
        items: [
          {
            name: "Chinese Special Fried Rice",
            size: "",
            price: 8000,
          },
          {
            name: "Fried Rice",
            size: "",
            price: 4000,
          },
          {
            name: "Tianna Special Rice",
            size: "",
            price: 9000,
          },
          {
            name: "Asun Rice",
            size: "",
            price: 8000,
          },
          {
            name: "Rice and catfish sauce",
            size: "",
            price: 12000,
          },
          {
            name: "Penne Chicken Arrabbiata",
            size: "",
            price: 9000,
          },
          {
            name: "Plain basmati rice",
            size: "",
            price: 4000,
          },
          {
            name: "Smoky Jollof Basmati Rice",
            size: "",
            price: 6500,
          },
          {
            name: "Smoky Jollof Rice",
            size: "",
            price: 4000,
          },

          {
            name: "Chicken & Shrimp fried rice",
            size: "",
            price: 11000,
          },
          {
            name: "Seafood Paella",
            size: "",
            price: 12000,
          },
          {
            name: "Jambalaya Rice",
            size: "",
            price: 8000,
          },
          {
            name: "Spagheti Jollof",
            size: "",
            price: 4000,
          },
          {
            name: "Seafood & Pasta Stir-Fry",
            size: "",
            price: 12000,
          },
          {
            name: "Alfredo Pasta",
            size: "",
            price: 10500,
          },
          {
            name: "Mashed Potatoes & Beef Gravy",
            size: "",
            price: 8500,
          },
          {
            name: "Spaghetti & Chicken Stir fry",
            size: "",
            price: 9000,
          },
          {
            name: "Singapore noodles",
            size: "",
            price: 8000,
          },
          {
            name: "Spaghetti & Meatballs",
            size: "",
            price: 9000,
          },
          {
            name: "Spaghetti Bolognese",
            size: "",
            price: 9000,
          },
          {
            name: "Coconut rice",
            size: "",
            price: 5000,
          },
          {
            name: "Tropical Fried rice",
            size: "",
            price: 8000,
          },
          {
            name: "Seafood Sauce",
            size: "",
            price: 10500,
          },
          {
            name: "Chicken Curry Sauce",
            size: "",
            price: 10500,
          },
          {
            name: "Caribbean Rice",
            size: "",
            price: 8000,
          },
          {
            name: "Mexican Fried Rice",
            size: "",
            price: 8000,
          },
          {
            name: "Spicy Beef Sauce",
            size: "",
            price: 8000,
          },
          {
            name: "Lasagne",
            size: "",
            price: 16000,
          },
          {
            name: "Chicken Veggie Sauce",
            size: "",
            price: 8000,
          },
          {
            name: "Breakfast plate (pancakes/waffles/ French toast)",
            size: "",
            price: 9000,
          },
          {
            name: "Potato and chicken stir fry ",
            size: "",
            price: 9000,
          },
        ],
      },
      /**
       * Salads
       */
      {
        name: "Salads",
        category_image: "salad.jpeg",
        items: [
          {
            name: "Vegetable salad",
            size: "",
            price: 6000,
          },
          {
            name: "Chef Salad",
            size: "",
            price: 9000,
          },

          {
            name: "Chicken Salad",
            size: "",
            price: 8000,
          },

          {
            name: "Potato & Egg Salad",
            size: "",
            price: 7500,
          },

          {
            name: "coleslaw",
            size: "",
            price: 1500,
          },
        ],
      },

      /**
       * Drinks
       */
      {
        name: "Drinks ",
        category_image: "wine.png",
        items: [
          {
            name: "Chapman",
            size: "",
            price: 5500,
          },
          {
            name: "Mojito",
            size: "",
            price: 5500,
          },
          {
            name: "Tequila Sunrise",
            size: "",
            price: 7000,
          },
          {
            name: "Orange & Rum",
            size: "",
            price: 5500,
          },
          {
            name: "Tequila Shots",
            size: "",
            price: 4000,
          },

          {
            name: "Vodka Shots",
            size: "",
            price: 3000,
          },
          {
            name: "Red Wine",
            size: "",
            price: 15000,
          },
          {
            name: "Rose Wine",
            size: "",
            price: 15000,
          },
          {
            name: "Champagne",
            size: "",
            price: 21000,
          },
          {
            name: "Jameson Green",
            size: "",
            price: 35000,
          },
          {
            name: "Jameson Black",
            size: "",
            price: 45000,
          },
          {
            name: "Lawson",
            size: "",
            price: 18000,
          },
          {
            name: "Vodka",
            size: "",
            price: 18000,
          },
          {
            name: "Fruit Wine",
            size: "",
            price: 12000,
          },
          {
            name: "Heineken Draught",
            size: "",
            price: 3000,
          },
          {
            name: "Heineken Regular",
            size: "",
            price: 2500,
          },
          {
            name: "Bottle Water",
            size: "",
            price: 500,
          },
          {
            name: "Fresh Juice",
            size: "",
            price: 4000,
          },
          {
            name: "Smoothie",
            size: "",
            price: 5000,
          },
          {
            name: "Schweppes",
            size: "",
            price: 1500,
          },
          {
            name: "Fayrouz",
            size: "",
            price: 1500,
          },
          {
            name: "Chi Exotic",
            size: "",
            price: 3000,
          },
          {
            name: "Hollandia",
            size: "",
            price: 3000,
          },
          {
            name: "Flying Fish/Star Radler/Smirnoff/Black Bullet",
            size: "",
            price: 2000,
          },
          {
            name: "Hollandia",
            size: "",
            price: 3000,
          },
          {
            name: "Hollandia",
            size: "",
            price: 3000,
          },
          {
            name: "Hollandia",
            size: "",
            price: 3000,
          },
          {
            name: "Hollandia",
            size: "",
            price: 3000,
          },
          {
            name: "Hollandia",
            size: "",
            price: 3000,
          },
          {
            name: "Hollandia",
            size: "",
            price: 3000,
          },
          {
            name: "Hollandia",
            size: "",
            price: 3000,
          },
          {
            name: "Hollandia",
            size: "",
            price: 3000,
          },
          {
            name: "Hollandia",
            size: "",
            price: 3000,
          },
        ],
      },
    ],

    cart: [],
  }),

  getters: {
    // total price of items in cart
    cartTotal: (state) =>
      state.cart.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      ),
  },

  actions: {
    // add item to cart
    addToCart(item) {
      // check if same item (same name + size) already exists
      const existing = this.cart.find(
        (c) => c.name === item.name && c.size === item.size
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        this.cart.push({ ...item, quantity: 1 });
      }
    },

    // remove item by index
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },

    // decrease quantity
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.removeFromCart(index);
      }
    },

    // clear entire cart
    clearCart() {
      this.cart = [];
    },
  },
});
