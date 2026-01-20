import apple from "../assets/hero3_apple.jpg";
import brinjal from "../assets/hero3_brinjal.jpg";
import cauliflower from "../assets/hero3_cauliflower.jpg";
import garlic from "../assets/garlic.png";
import grapes from "../assets/grapes.jpg";
import lettuce from "../assets/lettuce.png";
import onion from "../assets/onions.png";
import ginger from "../assets/hero3_ginger.jpg";
import redGrapes from "../assets/red_grapes.png";
import carrot from "../assets/carrot.png";
import banana from "../assets/banana.jpg";
import potato from "../assets/potato.jpg";

export const products = [
  {
    id: "apple",
    name: "Apple",
    price: "₹50.00",
    image: apple,
    description:
      "Sweet, crunchy, and 100% natural apples fresh from the farm.",
    longDescription:
"Our apples come straight from the orchard to your home. They are juicy, crisp, and grown without any harmful wax or chemicals. These apples are full of natural fiber and vitamins to keep you healthy. They are perfect for kids' lunchboxes, making fresh juice, or a quick healthy snack.",
    category: "Fruits",
    reviews: [
      {
        id: 1,
        name: "Sarah Patil",
        date: "May 18, 2023",
        comment: "Very fresh and crispy apples. Loved the quality!",
      },
    ],
  },
  {
    id: "banana",
    name: "Banana",
    price: "₹20.00",
    image: banana,
    description:
      "Naturally ripened, sweet bananas that give you instant energy.",
    longDescription:
      "Our bananas are grown naturally and ripened without using any harmful chemicals. They are soft, sweet, and easy to digest, making them the perfect fruit for both kids and adults. Full of vitamins and energy, they are great for a quick breakfast, a healthy snack, or adding to your daily shakes and smoothies.",
    category: "Fruits",
    reviews: [
      {
        id: 1,
        name: "Amit Patel",
        date: "June 2, 2023",
        comment: "Fresh bananas with great taste and perfect ripeness.",
      },
    ],
  },
  {
    id: "grapes",
    name: "Grapes",
    price: "₹100.00",
    image: grapes,
    description:
      "Sweet, juicy, and seedless grapes that make a perfect healthy snack.",
    longDescription:
      "Our green grapes are fresh, firm, and naturally sweet. Since they are seedless, they are very easy to eat and a favorite for children. These grapes are grown with care and are full of natural juice and vitamins. They are great for cooling down on a hot day, adding to fruit salads, or just enjoying as a quick, healthy snack.",
    category: "Fruits",
    reviews: [
      {
        id: 1,
        name: "Ajay Martin",
        date: "June 4, 2023",
        comment: "Very juicy and sweet grapes. Highly recommended!",
      },
    ],
  },
  {
    id: "red-grapes",
    name: "Red Grapes",
    price: "₹100.00",
    image: redGrapes,
    description:
      "Sweet and juicy red grapes with a rich taste and deep color.",
    longDescription:
      "Our red grapes are picked fresh from the farm at the perfect time. They have a deep, sweet flavor and a thin skin that makes them very easy to eat. These grapes are great for your heart and help keep your skin healthy. They are a delicious snack for the whole family and look great in any fruit bowl.",
    category: "Fruits",
    reviews: [
      {
        id: 1,
        name: "Neha Sharma",
        date: "June 10, 2023",
        comment: "Loved the color and sweetness of these grapes.",
      },
    ],
  },
  {
    id: "carrot",
    name: "Carrot",
    price: "₹30.00",
    image: carrot,
    description:
      "Fresh, crunchy carrots that are great for your eyes and health.",
    longDescription:
      "Our carrots are pulled fresh from the farm and delivered to you. They are bright, crunchy, and naturally sweet. These carrots are full of Vitamin A, which is very good for your eyesight and keeps your skin healthy. You can eat them raw as a salad, make fresh juice, or use them in your daily cooking like sabzi and dal.",
    category: "Vegetables",
    reviews: [
      {
        id: 1,
        name: "Rohit Verma",
        date: "May 28, 2023",
        comment: "Very fresh and crunchy carrots.",
      },
    ],
  },
  {
    id: "brinjal",
    name: "Brinjal",
    price: "₹20.00",
    image: brinjal,
    description:
      "Fresh and tender brinjals, perfect for your daily meals.",
    longDescription:
      "Our brinjals are picked fresh from the farm and are very soft and tasty. They have a smooth skin and a rich flavor that makes every dish delicious. Brinjals are healthy for your heart and help with digestion. Whether you are making a simple stir-fry, a spicy curry, or roasting them for 'Baingan Bharta,' these are the best choice for your kitchen.",
    category: "Vegetables",
    reviews: [
      {
        id: 1,
        name: "Suresh Kumar",
        date: "June 6, 2023",
        comment: "Good quality brinjals, very fresh.",
      },
    ],
  },
  {
    id: "cauliflower",
    name: "Cauliflower",
    price: "₹30.00",
    image: cauliflower,
    description:
      "Fresh, white, and crunchy cauliflower perfect for your daily meals.",
    longDescription:
      "Our cauliflower is picked fresh from the farm and delivered straight to you. It is bright, clean, and full of healthy fiber that is good for your stomach. It is very easy to cook and tastes great in everyday dishes like Gobi Matar, parathas, or mixed veg. A healthy and tasty vegetable that the whole family will enjoy.",
    category: "Vegetables",
    reviews: [
      {
        id: 1,
        name: "Anita Desai",
        date: "June 12, 2023",
        comment: "Very clean and fresh cauliflower.",
      },
    ],
  },
  {
    id: "lettuce",
    name: "Lettuce",
    price: "₹30.00",
    image: lettuce,
    description:
      "Crisp and crunchy green lettuce leaves for fresh salads and sandwiches.",
    longDescription:
      "Our lettuce is grown with care and picked fresh to keep the leaves crunchy and light. It is a very healthy green that is low in calories and helps keep you hydrated. These leaves are perfect for making fresh salads at home, adding a crunch to your sandwiches, or using as a wrap for healthy snacks. Simply wash and enjoy the farm-fresh taste.",
    category: "Vegetables",
    reviews: [
      {
        id: 1,
        name: "Pooja Mehta",
        date: "June 15, 2023",
        comment: "Very fresh and crunchy lettuce.",
      },
    ],
  },
  {
    id: "onion",
    name: "Onion",
    price: "₹20.00",
    image: onion,
    description:
      "Fresh, firm onions that add great taste and aroma to every meal.",
    longDescription:
      "Our onions are sourced directly from farms and are essential for every Indian kitchen. They are firm, flavorful, and perfect for daily cooking. Whether you are making a basic tadka, a rich curry, or eating them raw as a crunchy salad, these onions bring the best taste to your food. They stay fresh for longer and are a must-have for your home.",
    category: "Vegetables",
    reviews: [
      {
        id: 1,
        name: "Manoj Singh",
        date: "June 8, 2023",
        comment: "Good quality onions, long lasting.",
      },
    ],
  },
  {
    id: "ginger",
    name: "Ginger",
    price: "₹30.00",
    image: ginger,
    description:
      "Fresh ginger with a strong smell and great health benefits.",
    longDescription:
      "Our ginger is fresh, firm, and full of natural flavor. It is a must-have for making the perfect cup of 'Adrak Wali Chai' and adding a spicy kick to your curries. Ginger is also great for your health as it helps with digestion and keeps you safe from coughs and colds. It is 100% natural and brings a fresh, strong aroma to your kitchen.",
    category: "Vegetables",
    reviews: [
      {
        id: 1,
        name: "Riya Kapoor",
        date: "June 14, 2023",
        comment: "Strong aroma and very fresh ginger.",
      },
    ],
  },
  {
    id: "garlic",
    name: "Garlic",
    price: "₹90.00",
    image: garlic,
    description:
      "Fresh and strong garlic that adds a rich taste to all your dishes.",
    longDescription:
      "Our garlic is fresh, firm, and has a great natural smell. It is an essential part of every Indian kitchen, used to make delicious tadka for dals and curries. Garlic is also very good for your heart and helps keep your body healthy. These cloves are easy to peel and full of flavor, making your home-cooked meals taste even better.",
    category: "Vegetables",
    reviews: [
      {
        id: 1,
        name: "Vikram Joshi",
        date: "June 3, 2023",
        comment: "Very good garlic quality.",
      },
    ],
  },
  {
    id: "potato",
    name: "Potato",
    price: "₹25.00",
    image: potato,
    description:
      "Fresh, high-quality potatoes that are perfect for your daily meals.",
    longDescription:
      "Our potatoes are sourced fresh from the farm and are a must-have for every kitchen. They have a smooth texture and a natural taste that works perfectly in any dish. Whether you are making simple Aloo Jeera, crispy French fries, or a hearty curry, these potatoes cook easily and taste great. They are firm, fresh, and stay good for a long time.",
    category: "Vegetables",
    reviews: [
      {
        id: 1,
        name: "Sunita Rao",
        date: "June 9, 2023",
        comment: "Clean and fresh potatoes.",
      },
    ],
  },
];
