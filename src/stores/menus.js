import { defineStore } from 'pinia';

export const useMenu = defineStore('menus', {
  state: () => ({
    menu:[
    /**
     * Breakfast/Brunch Eats
     */
      {
        name:"Breakfast/Brunch Eats",
        category_image:"english_breakfast.jpeg",
        items:[
            {
                name:"English breakfast (Pancakes or toast slices/scrambled eggs/Grilled Sausages/Grilled Tomatoes and baked beans)",
                size:"",
                price:3000
            },
            {
                name:"Full English Breakfast with Bacon ",
                size:"",
                price:4500
            },
            {
                name:"French toast Spread (Served with Eggs/ baked beans/Grilled Tomatoes and Grilled Sausages",
                size:"",
                price:3500
            },
            {
                name:"French Toast platter with Bacon",
                size:"",
                price:5000
            },
            {
                name:"Waffle Breakfast (served with choice of eggs, Sausages, baked beans, grilled tomatoes & syrup)",
                size:"",
                price:3500
            },
            {
                name:"Waffle & Crispy chicken",
                size:"",
                price:4500
            },
            {
                name:"Nigerian-style toast breakfast",
                size:"",
                price:3000
            },
            {
                name:"Pancakes singles",
                size:"",
                price:700
            },
            {
                name:"Plantains, Yam chips or Potatoes & Egg Sauce",
                size:"",
                price:3000
            },
            {
                name:"Plantains, Yam or Potatoes & Fish sauce",
                size:"",
                price:3500
            },
            {
                name:"Garlic Chicken and potato pot dish",
                size:"",
                price:5000
            },
            {
                name:"Chicken & Shrimps with potatoes & veggies Biryani",
                size:"",
                price:7500
            },
            {
                name:"Moi moi & Oatmeal or Custard",
                size:"",
                price:1500
            },
            {
                name:"Akara & Oatmeal or Custard",
                size:"",
                price:1200
            },
            {
                name:"Cereal/Oatmeal/Custard",
                size:"",
                price:1000
            },
            {
                name:"Greek yogurt/chia seeds/sunflower seeds/nuts & fruits",
                size:"",
                price:3500
            },
            {
                name:"Plantain or Potato Frittata slice",
                size:"",
                price:1000
            },
            {
                name:"Plantain/Potato Frittata Full round",
                size:"",
                price:5000
            },
            {
                name:"Yamarita & tomato sauce",
                size:"",
                price:3000
            },
            {
                name:"Potato Casserole ",
                size:"",
                price:8500
            },
            {
                name:"Banana bread & Yogurt bowl",
                size:"",
                price:3500
            },
            {
                name:"Sautéed Stem Veggies",
                size:"",
                price:2500
            }
        ]
      },
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
                price:2500
            },
            {
                name:"Tuna Sandwich",
                size:"",
                price:2000
            },
            {
                name:"Chicken Shawarma",
                size:"",
                price:3000
            },
            {
                name:"Beef and Chicken Shawarma",
                size:"",
                price:4500
            },
            {
                name:"Fish Shawarma",
                size:"",
                price:3000
            },
            {
                name:"Beef Burrito",
                size:"",
                price:3500
            },
            {
                name:"Chicken Burrito",
                size:"",
                price:4500
            },
            {
                name:"Extras (Sausages or Cheese)",
                size:"",
                price:"1000"
            }
        ]
    },
    /**
     * Combo Deals
     */
    {
        name:"Combo Deals",
        category_image:"combo.png",
        items:[
            {
                name:"Smart Sandwich (club sandwich, French fries, 1 piece chicken & soda)",
                size:"",
                price:3500
            },
            {
                name:"Waffle, Crispy Chicken & Cheese Sandwich",
                size:"",
                price:4500
            },
            {
                name:"Bread & Egg Omelette with a cup of hot choco/coffee",
                size:"",
                price:1500
            },
            {
                name:"Soul Burger (1 cheese burger, 1 piece of chicken, French fries and a bottle of soda)",
                size:"",
                price:3500
            },
            {
                name:"Chicken & Chips with a can of soda",
                size:"",
                price:3000
            },
            {
                name:"Coffee or Hot Choco & cookies or muffin",
                size:"",
                price:1000
            },
            {
                name:"Coffee or Hot Choco with Croissants & spread (Jam, Nutella, Mayo, Butter or peanut butter)",
                size:"",
                price:2000
            }
        ]
    },
     /**
     * Desserts
     */
      {
        name:"Desserts",
        category_image:"dessert.jpg",
        items:[
            {
                name:"Greek yogurt Parfait",
                size:"",
                price:2500
            },
            {
              name:"Greek yogurt Parfait Bowl",
              size:"",
              price:4000
          },
            {
                name:"Chia pudding",
                size:"",
                price:4000
            },
            {
                name:"Nutty Chocolate mix Parfait",
                size:"",
                price:3000
            },
            {
                name:"Strawberry Parfait",
                size:"",
                price:2700
            },
            {
                name:"Blueberry Parfait",
                size:"",
                price:2700
            },
            {
                name:"Icecream Storm Parfait",
                size:"",
                price:2500
            },
            {
                name:"BanCream",
                size:"",
                price:2700
            },
            {
                name:"Icecream or Yogurt & Chocolate Brownies",
                size:"",
                price:3500
            },
            {
                name:"Vanilla Cake Parfait",
                size:"",
                price:2500
            },
            {
                name:"Icecream or Yogurt & Crumbled Cookies/Oreos",
                size:"",
                price:3000
            },
            {
                name:"Bailey's Crème Delight",
                size:"",
                price:3000
            },
            {
                name:"Jamboree Parfait",
                size:"",
                price:3000
            },
            {
                name:"PB & J Parfait",
                size:"",
                price:3500
            },
            {
                name:"Yogurt Parfait with Strawberry/Chocolate Sauce",
                size:"",
                price:2500
            },
            {
                name:"Banana split",
                size:"",
                price:3500
            }
        ]
    },
    /**
     * Entrées
     */
     {
        name:"Entrées",
        category_image:"entrees.jpg",
        items:[
            {
                name:"Chicken pepper soup",
                size:"",
                price:3000
            },
            {
                name:"Fish pepper soup",
                size:"",
                price:3000
            },
            {
                name:"Goat meat pepper soup",
                size:"",
                price:3000
            },
            {
                name:"Spring rolls",
                size:"",
                price:2000
            },
            {
                name:"Samosa",
                size:"",
                price:2000
            },
            {
                name:"Shrimp roll",
                size:"",
                price:3000
            },
            {
                name:"Corn soup",
                size:"",
                price:2000
            },
            {
                name:"Chicken soup",
                size:"",
                price:2500
            },
            {
                name:"Hummus & softrolls",
                size:"",
                price:4500
            },
            {
                name:"Prawn skewers",
                size:"",
                price:5500
            },
            {
                name:"Shrimp cocktail Avacado",
                size:"",
                price:5000
            },
            {
                name:"Hachis Parmentier",
                size:"",
                price:6500
            },
            {
                name:"Garlic Butter Shrimps",
                size:"",
                price:5500
            },
            {
                name:"Fish fingers",
                size:"",
                price:4800
            },
            {
                name:"Fries",
                size:"",
                price:1000
            },
        ]
    },
    /**
     * Grills & Fries
     */
     {
        name:"Grills & Fries",
        category_image:"fries.png",
        items:[
            {
                name:"Barbecued Chicken and chips",
                size:"",
                price:4000
            },
            {
              name:"Full Chicken Periperi",
              size:"",
              price:10000
          },
            {
                name:"Grilled Chicken, Potatoes & Sautéed Veggies",
                size:"",
                price:5000
            },
            {
                name:"Grilled Tilapia",
                size:"",
                price:5000
            },
            {
                name:"Fried crispy chicken & chips",
                size:"",
                price:3000
            },
            {
                name:"Fried Crispy Fish & Chips",
                size:"",
                price:3000
            },
            {
                name:"Jumbo Chicken & Chips",
                size:"",
                price:4500
            },
            {
                name:"Grilled or butter-fried Prawns",
                size:"",
                price:5000
            },
            {
                name:"Peppered snails",
                size:"",
                price:2500
            },
            {
                name:"Peppered Chicken platter",
                size:"",
                price:3500
            },
            {
                name:"Grilled pork",
                size:"",
                price:2500
            },
            {
                name:"Beef Kebab (with sides)",
                size:"",
                price:4500
            },
            {
                name:"Chicken Kebabs (with sides)",
                size:"",
                price:5500
            },
            {
                name:"Beef Escalope (with sides)",
                size:"",
                price:4500
            },
            {
                name:"Chicken Escalope (with sides)",
                size:"",
                price:5500
            },
            {
                name:"Fish Escalope (with sides)",
                size:"",
                price:5500
            },
            {
                name:"Grilled Croaker & Potatoes with Veggies",
                size:"",
                price:6500
            },
            {
                name:"Grilled steak",
                size:"",
                price:9500
            },
            {
                name:"Smoked sausage(6 fingers)",
                size:"",
                price:3000
            },
            {
                name:"Corn dogs per stick",
                size:"",
                price:800
            },
            {
                name:"Lucky Platter (Peppered chicken, Beef kebabs, Turkey wings, grilled fish, Snails, smoked sausages, corn, slaw and fries) ",
                size:"",
                price:15000
            },
            {
                name:"Grilled Chicken & Mashed Potatoes",
                size:"",
                price:6500
            },
            {
                name:"Grilled Fish & Mashed Potatoes",
                size:"",
                price:8000
            },
            {
                name:"Extra sides",
                size:"",
                price:1000
            }
        ]
    },
     /**
     * Hot drinks
     */
      {
        name:"Hot drinks ",
        category_image:"hotdrinks.png",
        items:[
            {
                name:"Coffee",
                size:"Mini",
                price:500
            },
            {
                name:"Coffee",
                size:"Large",
                price:1000
            },
            {
                name:"Hot Chocolate",
                size:"Mini",
                price:500
            },
            {
                name:"Hot Chocolate",
                size:"Large",
                price:1000
            },
            {
                name:"Mocha",
                size:"Mini",
                price:700
            },
            {
                name:"Mocha",
                size:"Large",
                price:1400
            },
            {
                name:"Latte",
                size:"Mini",
                price:700
            },
            {
                name:"Latte",
                size:"Large",
                price:1400
            },
            {
                name:"Cappuccino",
                size:"Mini",
                price:700
            },
            {
                name:"Cappuccino",
                size:"Large",
                price:1400
            },
            {
                name:"Black/Green/herbal or flavoured tea",
                size:"Mini",
                price:500
            },
            {
                name:"Black/Green/herbal or flavoured tea",
                size:"Large",
                price:1000
            }
        ]
    },
     /**
     * Milkshakes/Freakshakes
     */
      {
        name:"Milkshakes/Freakshakes",
        category_image:"milkshake.png",
        items:[
            {
                name:"Strawberry Milkshake",
                size:"",
                price:2500
            },
            {
                name:"Banana Milkshake",
                size:"",
                price:2700
            },
            {
                name:"Chocolate Milkshake",
                size:"",
                price:2500
            },
            {
                name:"Vanilla Milkshake",
                size:"",
                price:2500
            },
            {
                name:"Blueberry Milkshake",
                size:"",
                price:2500
            },
            {
                name:"Coffee & Caramel milkshake",
                size:"",
                price:2500
            },
            {
                name:"Coconut milkshake",
                size:"",
                price:2500
            },
            {
                name:"Bailey's shake",
                size:"",
                price:3000
            },
            {
                name:"Oreos milkshake",
                size:"",
                price:3000
            },
            {
                name:"Cookies & Cream Shake",
                size:"",
                price:3500
            },
            {
                name:"Banana & Peanut butter Shake",
                size:"",
                price:3000
            },
            {
                name:"Chocolate & Peanut butter Shake ",
                size:"",
                price:3000
            },
            {
                name:"Bailey's & Chocolate Shake",
                size:"",
                price:3500
            },
            {
                name:"Brownie shake",
                size:"",
                price:3500
            },
            {
                name:"Chocolate cake Ganaché",
                size:"",
                price:4500
            },
            {
                name:"Extra Toppings",
                size:"",
                price:700
            }
        ]
    },
     /**
     * Pasta Dishes
     */
      {
        name:"Pasta Dishes",
        category_image:"pasta.jpeg",
        items:[
            {
                name:"Chicken Rice noodles",
                size:"",
                price:4500
            },
            {
                name:"Shrimp rice noodles",
                size:"",
                price:5500
            },
            {
                name:"Noodles & Eggs",
                size:"",
                price:1500
            },
            {
                name:"Noodles/Shredded Chicken and Eggs",
                size:"",
                price:2500
            },
            {
                name:"Noodles and Eggs with Grilled chicken",
                size:"",
                price:3500
            },
            {
                name:"Noodles/Eggs and Sausages",
                size:"",
                price:2500
            },
            {
                name:"Spaghetti bolognese",
                size:"",
                price:4000
            },
            {
                name:"Penne pasta & Chicken stir fry",
                size:"",
                price:4500
            },
            {
                name:"Penne pasta & Tuna stir fry",
                size:"",
                price:5000
            },
            {
                name:"Mac & Cheese",
                size:"",
                price:4000
            },
            {
                name:"Spaghetti & Shrimp stir-fry",
                size:"",
                price:5000
            },
            {
                name:"Spaghetti & Chicken Stir-fry",
                size:"",
                price:4000
            },
            {
                name:"Chicken Alfredo Pasta (Penne)",
                size:"",
                price:5000
            },
            {
                name:"Rice noodles & Seafood stir-fry",
                size:"",
                price:7000
            },
            {
                name:"Singapore noodles",
                size:"",
                price:4000
            },
            {
                name:"Lasagna",
                size:"",
                price:6500
            },
            {
                name:"Seafood Tagliatelle",
                size:"",
                price:7000
            },
            {
                name:"Spaghetti Arrabiata",
                size:"",
                price:4000
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
              size:"Large",
              price:5000
          },
          {
            name:"Meatzy Pizza",
            size:"Extra Large",
            price:6000
          },
          {
              name:"Chicken Suya Pizza",
              size:"Large",
              price:5300
          },
          {
            name:"Chicken Suya Pizza",
            size:"Extra Large",
            price:6300
          },
          {
              name:"Pepperoni Pizza",
              size:"Large",
              price:5500
          },
          {
            name:"Pepperoni Pizza",
            size:"Extra Large",
            price:6500
          },
          {
              name:"Sea Food Pizza",
              size:"Large",
              price:5500
          },
          {
            name:"Sea Food Pizza",
            size:"Extra Large",
            price:7000
          },
          {
              name:"Dodo Pizza",
              size:"Large",
              price:4500
          },
          {
            name:"Dodo Pizza",
            size:"Extra Large",
            price:5200
          },
          {
              name:"Vegetable Pizza",
              size:"Large",
              price:4000
          },
          {
            name:"Vegetable Pizza",
            size:"Extra Large",
            price:5000
          },
          {
              name:"Tropical Pizza",
              size:"Large",
              price:4500
          },
          {
              name:"Tropical Pizza",
              size:"Extra Large",
              price:5200
          },
          {
              name:"Mushroom Pizza",
              size:"Large",
              price:4500
          },
          {
              name:"Mushroom Pizza",
              size:"Extra Large",
              price:5500
          },
          {
              name:"Half n Half",
              size:"Large",
              price:5300
          },
          {
              name:"Half n Half",
              size:"Extra Large",
              price:6500
          }
            ]
        },
         /**
         * Protein Extras per piece
         */
          {
            name:"Protein Extras per piece",
            category_image:"whole-grilled-chicken-fp.jpg",
            items:[
                {
                    name:"Grilled Chicken",
                    size:"",
                    price:2000
                },
                {
                    name:"Catfish",
                    size:"",
                    price:2500
                },
                {
                    name:"Turkey Medium",
                    size:"",
                    price:2500
                },
                {
                    name:"Turkey Large",
                    size:"",
                    price:3000
                },
                {
                    name:"Grilled or Fried Ice Fish",
                    size:"",
                    price:1000
                },
                {
                    name:"Beef",
                    size:"",
                    price:500
                },
                {
                    name:"Boiled Egg",
                    size:"",
                    price:400
                }
            ]
        },
         /**
         * Rice Dishes
         */
        {
            name:"Rice Dishes",
            category_image:"rice.jpg",
            items:[
                {
                    name:"Chinese Special Fried Rice",
                    size:"",
                    price:4000
                },
                {
                    name:"Plain white basmati rice",
                    size:"",
                    price:2000
                },
                {
                    name:"Smoky Jollof rice with Basmati",
                    size:"",
                    price:3000
                },
                {
                    name:"Vegetable Fried rice",
                    size:"",
                    price:3000
                },
                {
                    name:"Spicy Shredded Beef rice",
                    size:"",
                    price:3500
                },
                {
                    name:"Chicken & Shrimp fried rice",
                    size:"",
                    price:5000
                },
                {
                    name:"Paella Rice",
                    size:"",
                    price:4500
                },
                {
                    name:"Jambalaya Rice",
                    size:"",
                    price:4000
                },
                {
                    name:"Smoky Local rice mix",
                    size:"",
                    price:3000
                },
                {
                    name:"Rice & Green Vegetable sauce",
                    size:"",
                    price:3000
                },
                {
                    name:"Rice and stewed Veggies sauce",
                    size:"",
                    price:3000
                },
                {
                    name:"Brown rice",
                    size:"",
                    price:2500
                },
                {
                    name:"Tropical Coconut rice",
                    size:"",
                    price:4500
                },
                {
                    name:"Tropical Fried rice",
                    size:"",
                    price:4000
                },
                {
                    name:"Chicken Biryani",
                    size:"",
                    price:4500
                },
                {
                    name:"Sides (Fried Plantain, Potatoes, Yam slices)",
                    size:"",
                    price:1000
                },
                {
                    name:"Caribbean Rice",
                    size:"",
                    price:4000
                },
                {
                    name:"Mexican Rice",
                    size:"",
                    price:4000
                },
                {
                    name:"Thai-Beef Rice",
                    size:"",
                    price:4000
                },
                {
                    name:"Rice and vegetable stew with Chicken or fish",
                    size:"",
                    price:5000
                }
            ]
        },
        /**
         * Salads
         */
        {
            name:"Salads",
            category_image:"salad.jpeg",
            items:[
                {
                    name:"Fruit Salad",
                    size:"",
                    price:1500
                },
                {
                    name:"Vegetable salad",
                    size:"",
                    price:2000
                },
                {
                    name:"Ceaser Salad",
                    size:"",
                    price:4000
                },
                {
                    name:"Greek Salad",
                    size:"",
                    price:4000
                },
                {
                    name:"Chicken Salad",
                    size:"",
                    price:3500
                },
                {
                    name:"Steak Salad",
                    size:"",
                    price:4000
                },
                {
                    name:"Tuna Salad",
                    size:"",
                    price:3500
                },
                {
                    name:"Seafood Salad",
                    size:"",
                    price:4500
                },
                {
                    name:"Potato Salad",
                    size:"",
                    price:2500
                },
                {
                    name:"Potato & Chicken Salad",
                    size:"",
                    price:4000
                },
                {
                    name:"Chef Salad",
                    size:"",
                    price:4500
                },
                {
                    name:"Egg Salad",
                    size:"",
                    price:2500
                }
            ]
        },
         /**
         * Specialty Sauces
         */
          {
            name:"Specialty Sauces",
            description:"(Can be served with any rice, chinese noodles or pasta dish or sides)",
            category_image:"sauces.jpeg",
            items:[
                {
                    name:"Spicy Shredded Beef sauce",
                    size:"",
                    price:3500
                },
                {
                    name:"Spicy Chicken chunk sauce",
                    size:"",
                    price:4000
                },
                {
                    name:"Seafood Chilli-Sauce",
                    size:"",
                    price:4500
                },
                {
                    name:"Chilli-Bean Sauce",
                    size:"",
                    price:3500
                },
                {
                    name:"Jamaican Jerky Sauce",
                    size:"",
                    price:4000
                },
                {
                    name:"Sweet & Sour sauce with Seafood",
                    size:"",
                    price:5500
                },
                {
                    name:"Sweet & Sour Sauce with Chicken",
                    size:"",
                    price:4000
                },
                {
                    name:"Chicken Curry sauce",
                    size:"",
                    price:3800
                },
                {
                    name:"Calamari & fish sauce",
                    size:"",
                    price:6500
                },
                {
                    name:"Prawns in Provençale sauce",
                    size:"",
                    price:8000
                },
                {
                    name:"Fish Fillet seafood sauce",
                    size:"",
                    price:6800
                },
                {
                    name:"Chicken Masala Sauce",
                    size:"",
                    price:4800
                },
            ]
        },
        /**
         * Sweet & Savory Waffle Desserts
         */
        {
            name:"Sweet & Savory Waffle Desserts ",
            category_image:"waffle_breakfast.jpeg",
            items:[
                {
                    name:"Waffles or Pancakes & Icecream or Greek yogurt with Toppings of choice",
                    size:"",
                    price:3500
                },
                {
                    name:"Chocolate, Nutella, Banana or Red velvet Waffles or pancakes (Served with Icecream or Greek yogurt and Toppings of choice)",
                    size:"",
                    price:4500
                },
                {
                    name:"Extra Toppings (Chocolate Sauce,Strawberry sauce, Maple syrup, Strawberry fruits, Blueberry, Banana, nuts, Chocolate chips, Toasted Coconut, Jam)",
                    size:"",
                    price:1000
                },
            ]
        },
         /**
         * Wines
         */
          {
            name:"Wines ",
            category_image:"wine.png",
            items:[
                {
                    name:"Sweet Red/Sweet White Wine (Glass)",
                    size:"",
                    price:4000
                },
                {
                    name:"Moscato Rose",
                    size:"",
                    price:3000
                },
                {
                    name:"Red Merlot (Glass)",
                    size:"",
                    price:3000
                },
                {
                    name:"Flavored wine",
                    size:"",
                    price:3000
                },
                {
                    name:"Sweet Red/White wine (Bottle)",
                    size:"",
                    price:14000
                }
            ]
        },
         /**
         * Cocktails
         */
          {
            name:"Cocktails ",
            category_image:"wine.png",
            items:[
                {
                    name:"Chapman",
                    size:"",
                    price:2000
                },
                {
                    name:"Lemon-drop Martini",
                    size:"",
                    price:3000
                },
                {
                    name:"Gin & Tonic",
                    size:"",
                    price:3000
                },
                {
                    name:"Rum & Coke",
                    size:"",
                    price:3000
                },
                {
                  name:"Rum & Orange",
                  size:"",
                  price:3500
              },
                {
                    name:"Mojito",
                    size:"",
                    price:2000
                },
                {
                    name:"Shandy",
                    size:"",
                    price:2000
                },
                {
                    name:"Tequila & lime shot",
                    size:"",
                    price:1500
                },
                {
                    name:"Vodka shot",
                    size:"",
                    price:1500
                },
                {
                    name:"Whisky/Rum shot ",
                    size:"",
                    price:1500
                },
                {
                    name:"Bailey's Delight",
                    size:"",
                    price:3000
                }
            ]
        },
        /*
        * Fruit drinks
        */
         {
           name:"Fruit drinks",
           category_image:"fruitdrinks.png",
           items:[
            {
                name:"100% Natural Fresh juice",
                size:"",
                price:2000
            },
            {
                name:"Mixed Fruit Slush",
                size:"",
                price:2500
            },
            {
                name:"Zobo(50cl)",
                size:"",
                price:1000
            }
           ]
       },
        /*
        * Smoothies
        */
        {
            name:"Smoothies",
            category_image:"smoothie.png",
            items:[
                {
                    name:"Mixed fruit Smoothie",
                    size:"",
                    price:2000
                },
                {
                    name:"Tigernut drink",
                    size:"",
                    price:1500
                },
                {
                    name:"Tigernut drink with banana",
                    size:"",
                    price:1500
                },
                {
                    name:"Tigernut drink & Chocolate",
                    size:"",
                    price:1500
                },
                {
                    name:"Pineapple & watermelon",
                    size:"",
                    price:2000
                },
                {
                    name:"BanCream",
                    size:"",
                    price:2700
                },
                {
                    name:"Avocado Green Smoothie",
                    size:"",
                    price:3000
                },
                {
                    name:"Green Veggies Smoothie",
                    size:"",
                    price:2000
                },
                {
                    name:"Sour-sop & Avocado Smoothie",
                    size:"",
                    price:3000
                },
                {
                    name:"Sour-sop Smoothie",
                    size:"",
                    price:3000
                },
                {
                    name:"Watermelon, Ginger & Garlic",
                    size:"",
                    price:3000
                },
                {
                    name:"Carrot & Cucumber",
                    size:"",
                    price:3000
                },
                {
                    name:"Watermelon, Pineapple & Carrot ",
                    size:"",
                    price:2000
                },
                {
                    name:"Avocado, Sour-sop, kiwi",
                    size:"",
                    price:3500
                },
                {
                    name:"Lemon, Orange, Lime, Ginger & Garlic",
                    size:"",
                    price:2000
                },
                {
                    name:"Banana, dates, nuts",
                    size:"",
                    price:3000
                },
                {
                    name:"Grapes, Apple, Plum, English Pear",
                    size:"",
                    price:3500
                },
                {
                    name:"Strawberry, Blueberry, Grapes",
                    size:"",
                    price:3500
                },
                {
                    name:"Beetroot, Pineapple, Apple, lemon & Ginger",
                    size:"",
                    price:3000
                },
                {
                    name:"Watermelon, Apple, Pineapple",
                    size:"",
                    price:2000
                },
                {
                    name:"Banana & Strawberry",
                    size:"",
                    price:3500
                },
                {
                    name:"Sour-sop & Avocado",
                    size:"",
                    price:3500
                },
                {
                    name:"Avacado, Sour-sop, Kiwi",
                    size:"",
                    price:3500
                }
            ]
        },
        ]
  }),
});
