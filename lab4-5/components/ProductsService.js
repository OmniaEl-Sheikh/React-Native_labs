const PRODUCTS = [
    {
        id: 1,
        name: 'Diamond Necklace',
        price: 1000,
        image: require('../assets/products/Jewelary.jpg'),
        
    },
    {
        id: 2,
        name: 'Gold Ring',
        price: 350,
        image: require('../assets/products/gold-ring.webp'),
        
    },
    {
        id: 3,
        name: 'Glasses',
        price: 2,
        image: require('../assets/products/glasses.jpg'),
        
    },
    {
        id: 4,
        name: 'Baby Shoes',
        price: 5,
        image: require('../assets/products/baby-shoes.jpg'),
        
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

