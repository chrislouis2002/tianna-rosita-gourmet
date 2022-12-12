import { defineStore } from 'pinia';

export const useMenu = defineStore('menus', {
  state: () => ({
    menu:[
      /**
       * BURGERS AND SANDWICHES
       */
      {
        name:"Burgers & Sandwiches",
        category_image:'burgers.png',
        items:[
            {
                name:"Beef and Cheese Burger",
                size:"",
                price:1500
            },
            {
                name:"Chicken Burger",
                size:"",
                price:2500
            },
            {
                name:"Ham Burger",
                size:"",
                price:1500
            },
            {
                name:"Double King Beef Burger",
                size:"",
                price:3000
            },
            {
                name:"Triple King Beef Burger",
                size:"",
                price:4500
            },
            {
                name:"Prawn Burger",
                size:"",
                price:5500
            },
            {
                name:"Chicken Sandwich",
                size:"",
                price:1500
            },
            {
                name:"Beef Sandwich",
                size:"",
                price:1300
            },
            {
                name:"Beef Shawarma",
                size:"",
                price:1700
            },
            {
                name:"Chicken Shawarma",
                size:"",
                price:2300
            },
            {
                name:"Beef and Chicken Shawarma",
                size:"",
                price:3500
            },
            {
                name:"Fish Shawarma",
                size:"",
                price:3000
            },
            {
                name:"Beef Burrito",
                size:"",
                price:3000
            },
            {
                name:"Chicken Burrito",
                size:"",
                price:4500
            }
        ]
    },
    /**
     * PIZZAS
     */
    {
      name : "Pizza",
      category_image:"pizza.png",
      items : [
          {
              name:"Meatzy Pizza",
              size:"Medium",
              price:4700
          },
          {
              name:"Meatzy Pizza",
              size:"Large",
              price:5700
          },
          {
              name:"Chicken Suya Pizza",
              size:"Medium",
              price:5000
          },
          {
              name:"Chicken Suya Pizza",
              size:"Large",
              price:6500
          },
          {
              name:"Pepperoni Pizza",
              size:"Medium",
              price:5000
          },
          {
              name:"Pepperoni Pizza",
              size:"Large",
              price:7000
          },
          {
              name:"Sea Food Pizza",
              size:"Medium",
              price:5500
          },
          {
              name:"Sea Food Pizza",
              size:"Large",
              price:7000
          },
          {
              name:"Dodo Pizza",
              size:"Medium",
              price:4000
          },
          {
              name:"Dodo Pizza",
              size:"Large",
              price:5000
          },
          {
              name:"Vegetable Pizza",
              size:"Medium",
              price:3800
          },
          {
              name:"Vegetable Pizza",
              size:"Large",
              price:4800
          },
          {
              name:"Tropical Pizza",
              size:"Medium",
              price:4500
          },
          {
              name:"Tropical Pizza",
              size:"Large",
              price:5500
          },
          {
              name:"Mushroom Pizza",
              size:"Medium",
              price:4500
          },
          {
              name:"Mushroom Pizza",
              size:"Large",
              price:5500
          },
          {
              name:"Half n Half",
              size:"Medium",
              price:5000
          },
          {
              name:"Half n Half",
              size:"Large",
              price:6000
          }
      ]
  }
    ]
  }),
});
