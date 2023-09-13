export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  pic: string;

  category: any;
}

export const products =[
  {
    id: 1,
    name: "Apple",
    price: 30,
    description: "from China",
    pic: "https://rg.ru/uploads/images/199/33/68/iStock-1158470655.jpg"
  },
  {
    id: 2,
    name: "Banana",
    price: 40,
    description: "from home",
    pic: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg"
  },
  {
    id: 3,
    name: "Peach",
    price: 35,
    description: "from Kazakhstan",
    pic: "https://glycemic-index.net/images/FVRSYndNy8.webp"
  },
  {
    id: 4,
    name: "Pineapple",
    price: 60,
    description: "from China",
    pic: "https://s3.amazonaws.com/YouGarden/Web/500x500/340031_1.jpg"
  },
  {
    id: 5,
    name: "Orange",
    price: 50,
    description: "Good sort",
    pic: "https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange-558x600.jpg"
  },
  {
    id: 6,
    name: "Strawberry",
    price: 25,
    description: "from China",
    pic: "https://clv.h-cdn.co/assets/15/22/2048x2048/square-1432664914-strawberry-facts1.jpg"
  },
]


