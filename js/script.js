// Products Data with Indian Prices - Affordable & Realistic
const products = [
    // Mobiles - Affordable Range (Expanded)
    { id: 1, name: "Redmi Note 13 Pro", price: 16999, originalPrice: 21999, discount: 23, category: "mobiles", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80", rating: 4.4, reviews: 8500 },
    { id: 2, name: "Samsung Galaxy M34", price: 14999, originalPrice: 19999, discount: 25, category: "mobiles", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80", rating: 4.3, reviews: 6200 },
    { id: 3, name: "Realme 11 Pro 5G", price: 18999, originalPrice: 24999, discount: 24, category: "mobiles", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80", rating: 4.5, reviews: 4800 },
    { id: 101, name: "Vivo Y56 5G", price: 15999, originalPrice: 20999, discount: 24, category: "mobiles", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&q=80", rating: 4.2, reviews: 5100 },
    { id: 102, name: "POCO X5 Pro 5G", price: 17999, originalPrice: 23999, discount: 25, category: "mobiles", image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80", rating: 4.5, reviews: 7200 },
    { id: 103, name: "Oppo F23 5G", price: 16499, originalPrice: 21499, discount: 23, category: "mobiles", image: "https://images.unsplash.com/photo-1592286927505-b93c2c2176?w=500&q=80", rating: 4.3, reviews: 4900 },
    { id: 104, name: "OnePlus Nord CE 3", price: 19999, originalPrice: 26999, discount: 26, category: "mobiles", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&q=80", rating: 4.6, reviews: 6800 },
    { id: 105, name: "Motorola G84 5G", price: 15999, originalPrice: 20999, discount: 24, category: "mobiles", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80", rating: 4.4, reviews: 3900 },
    
    // Electronics - Budget Friendly (Expanded)
    { id: 4, name: "HP 15s Laptop Core i3", price: 32990, originalPrice: 42990, discount: 23, category: "electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80", rating: 4.2, reviews: 3400 },
    { id: 5, name: "boAt Rockerz 450 Headphones", price: 1299, originalPrice: 2990, discount: 57, category: "electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", rating: 4.1, reviews: 12000 },
    { id: 6, name: "Lenovo IdeaPad Slim 3", price: 38990, originalPrice: 49990, discount: 22, category: "electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80", rating: 4.3, reviews: 2100 },
    { id: 106, name: "Dell Inspiron 15 Laptop", price: 35990, originalPrice: 46990, discount: 23, category: "electronics", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80", rating: 4.4, reviews: 2800 },
    { id: 107, name: "Asus VivoBook 15", price: 34990, originalPrice: 44990, discount: 22, category: "electronics", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80", rating: 4.3, reviews: 3200 },
    { id: 108, name: "JBL Tune 510BT Wireless", price: 2499, originalPrice: 4999, discount: 50, category: "electronics", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80", rating: 4.5, reviews: 8900 },
    { id: 109, name: "Sony WH-CH510 Headphones", price: 2799, originalPrice: 4990, discount: 44, category: "electronics", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80", rating: 4.4, reviews: 7100 },
    { id: 110, name: "Logitech B170 Wireless Mouse", price: 599, originalPrice: 995, discount: 40, category: "electronics", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80", rating: 4.2, reviews: 5400 },
    { id: 111, name: "HP Wireless Keyboard Mouse", price: 1299, originalPrice: 2299, discount: 43, category: "electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80", rating: 4.3, reviews: 4200 },
    { id: 112, name: "Samsung T7 SSD 1TB", price: 8999, originalPrice: 12999, discount: 31, category: "electronics", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80", rating: 4.7, reviews: 3100 },
    { id: 113, name: "SanDisk Ultra 128GB USB", price: 899, originalPrice: 1499, discount: 40, category: "electronics", image: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=500&q=80", rating: 4.4, reviews: 6800 },
    { id: 114, name: "Canon EOS 1500D DSLR", price: 28999, originalPrice: 36999, discount: 22, category: "electronics", image: "https://images.unsplash.com/photo-1606980707009-fed7c3c62e6a?w=500&q=80", rating: 4.6, reviews: 4200 },
    { id: 115, name: "GoPro HERO10 Action Camera", price: 34999, originalPrice: 47999, discount: 27, category: "electronics", image: "https://images.unsplash.com/photo-1606951758633-fa109f5d1b9e?w=500&q=80", rating: 4.7, reviews: 2900 },
    { id: 116, name: "Portronics Wireless Speaker", price: 1499, originalPrice: 2999, discount: 50, category: "electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80", rating: 4.1, reviews: 5600 },
    { id: 117, name: "Zebronics Gaming Headset", price: 1899, originalPrice: 3999, discount: 53, category: "electronics", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80", rating: 4.3, reviews: 4700 },
    
    // Women's Clothing - Sarees, Kurtis, Palazzo, Jeans (Expanded)
    { id: 7, name: "Women's Silk Saree Red", price: 899, originalPrice: 2499, discount: 64, category: "fashion", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80", rating: 4.6, reviews: 3800 },
    { id: 8, name: "Women's Designer Saree Blue", price: 799, originalPrice: 1999, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1583391733981-24c4ee552c1a?w=500&q=80", rating: 4.5, reviews: 2900 },
    { id: 9, name: "Women's Cotton Kurti Yellow", price: 399, originalPrice: 999, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&q=80", rating: 4.4, reviews: 5200 },
    { id: 10, name: "Women's Printed Kurti Set", price: 549, originalPrice: 1299, discount: 58, category: "fashion", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80", rating: 4.3, reviews: 4100 },
    { id: 11, name: "Women's Palazzo with Top", price: 649, originalPrice: 1499, discount: 57, category: "fashion", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=80", rating: 4.4, reviews: 3600 },
    { id: 12, name: "Women's Jeans Skinny Blue", price: 699, originalPrice: 1799, discount: 61, category: "fashion", image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500&q=80", rating: 4.2, reviews: 4500 },
    { id: 118, name: "Women's Banarasi Saree", price: 1499, originalPrice: 3999, discount: 63, category: "fashion", image: "https://images.unsplash.com/photo-1591361692295-c6c6c8cfbb8c?w=500&q=80", rating: 4.7, reviews: 4200 },
    { id: 119, name: "Women's Georgette Saree", price: 699, originalPrice: 1799, discount: 61, category: "fashion", image: "https://images.unsplash.com/photo-1617533944820-cc0fb2429371?w=500&q=80", rating: 4.5, reviews: 3100 },
    { id: 120, name: "Women's Anarkali Kurti Pink", price: 799, originalPrice: 1999, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&q=80", rating: 4.6, reviews: 2800 },
    { id: 121, name: "Women's Ethnic Kurti Blue", price: 449, originalPrice: 1199, discount: 63, category: "fashion", image: "https://images.unsplash.com/photo-1617127837893-5e6b5c9a5f95?w=500&q=80", rating: 4.4, reviews: 3900 },
    { id: 122, name: "Women's Cotton Palazzo Set", price: 599, originalPrice: 1399, discount: 57, category: "fashion", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80", rating: 4.3, reviews: 3200 },
    { id: 123, name: "Women's High Waist Jeans", price: 799, originalPrice: 1999, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80", rating: 4.5, reviews: 4800 },
    { id: 124, name: "Women's Straight Fit Jeans", price: 749, originalPrice: 1899, discount: 61, category: "fashion", image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&q=80", rating: 4.3, reviews: 4100 },
    { id: 125, name: "Women's Leggings Combo 3", price: 499, originalPrice: 1199, discount: 58, category: "fashion", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80", rating: 4.2, reviews: 5600 },
    { id: 126, name: "Women's Western Dress", price: 899, originalPrice: 2199, discount: 59, category: "fashion", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80", rating: 4.6, reviews: 3400 },
    { id: 127, name: "Women's Maxi Dress Floral", price: 799, originalPrice: 1999, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80", rating: 4.5, reviews: 2900 },
    
    // Men's Clothing - Shirts, Pants, Jeans (Expanded)
    { id: 13, name: "Men's Formal Shirt White", price: 599, originalPrice: 1499, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80", rating: 4.3, reviews: 3200 },
    { id: 14, name: "Men's Casual Shirt Blue", price: 499, originalPrice: 1299, discount: 62, category: "fashion", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80", rating: 4.2, reviews: 2800 },
    { id: 15, name: "Men's Formal Pant Black", price: 799, originalPrice: 1999, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80", rating: 4.4, reviews: 2100 },
    { id: 16, name: "Men's Denim Jeans Dark Blue", price: 799, originalPrice: 1999, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80", rating: 4.5, reviews: 3800 },
    { id: 17, name: "Men's T-Shirt Pack of 3", price: 599, originalPrice: 1299, discount: 54, category: "fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80", rating: 4.1, reviews: 5200 },
    { id: 18, name: "Men's Kurta Pajama Set", price: 899, originalPrice: 2199, discount: 59, category: "fashion", image: "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?w=500&q=80", rating: 4.3, reviews: 1900 },
    { id: 128, name: "Men's Checked Shirt Red", price: 549, originalPrice: 1399, discount: 61, category: "fashion", image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&q=80", rating: 4.4, reviews: 2600 },
    { id: 129, name: "Men's Polo T-Shirt Navy", price: 449, originalPrice: 1199, discount: 63, category: "fashion", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&q=80", rating: 4.3, reviews: 3100 },
    { id: 130, name: "Men's Cargo Pants Olive", price: 899, originalPrice: 2199, discount: 59, category: "fashion", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80", rating: 4.5, reviews: 2400 },
    { id: 131, name: "Men's Slim Fit Jeans Black", price: 849, originalPrice: 2099, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500&q=80", rating: 4.6, reviews: 3900 },
    { id: 132, name: "Men's Joggers Grey", price: 699, originalPrice: 1699, discount: 59, category: "fashion", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80", rating: 4.2, reviews: 2900 },
    { id: 133, name: "Men's Formal Blazer Navy", price: 1999, originalPrice: 4999, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80", rating: 4.5, reviews: 1800 },
    { id: 134, name: "Men's Nehru Jacket", price: 1299, originalPrice: 2999, discount: 57, category: "fashion", image: "https://images.unsplash.com/photo-1593032465175-8d356a0e5a8e?w=500&q=80", rating: 4.4, reviews: 1500 },
    { id: 135, name: "Men's Sherwani Cream", price: 2499, originalPrice: 5999, discount: 58, category: "fashion", image: "https://images.unsplash.com/photo-1598808503491-204045072d98?w=500&q=80", rating: 4.7, reviews: 1200 },
    
    // Girls Clothing - Dress, Kurti, Palazzo, Jeans (Expanded)
    { id: 19, name: "Girls Party Dress Pink", price: 699, originalPrice: 1799, discount: 61, category: "fashion", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&q=80", rating: 4.5, reviews: 2600 },
    { id: 20, name: "Girls Frock with Leggings", price: 549, originalPrice: 1399, discount: 61, category: "fashion", image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&q=80", rating: 4.4, reviews: 3400 },
    { id: 21, name: "Girls Ethnic Kurti Set", price: 499, originalPrice: 1299, discount: 62, category: "fashion", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7fb4c0?w=500&q=80", rating: 4.3, reviews: 2100 },
    { id: 22, name: "Girls Palazzo Suit", price: 599, originalPrice: 1499, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=500&q=80", rating: 4.2, reviews: 1800 },
    { id: 23, name: "Girls Denim Jeans", price: 499, originalPrice: 1199, discount: 58, category: "fashion", image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=500&q=80", rating: 4.3, reviews: 2400 },
    { id: 136, name: "Girls Summer Dress Floral", price: 599, originalPrice: 1499, discount: 60, category: "kids", image: "https://images.unsplash.com/photo-1581783342843-f6a8d98e2370?w=500&q=80", rating: 4.5, reviews: 2200 },
    { id: 137, name: "Girls Unicorn Print Dress", price: 649, originalPrice: 1599, discount: 59, category: "kids", image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=500&q=80", rating: 4.6, reviews: 2800 },
    { id: 138, name: "Girls Lehenga Choli Set", price: 899, originalPrice: 2199, discount: 59, category: "kids", image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&q=80", rating: 4.7, reviews: 1900 },
    
    // Boys Clothing - Jeans, T-shirts, Kurta (Expanded)
    { id: 24, name: "Boys Denim Jeans Blue", price: 599, originalPrice: 1499, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80", rating: 4.2, reviews: 2200 },
    { id: 25, name: "Boys T-Shirt Pack of 5", price: 599, originalPrice: 1499, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80", rating: 4.4, reviews: 3100 },
    { id: 26, name: "Boys Kurta Pajama Set", price: 699, originalPrice: 1699, discount: 59, category: "fashion", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&q=80", rating: 4.3, reviews: 1600 },
    { id: 27, name: "Boys Casual Shirt", price: 449, originalPrice: 999, discount: 55, category: "fashion", image: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=500&q=80", rating: 4.2, reviews: 1900 },
    { id: 139, name: "Boys Cargo Shorts Khaki", price: 499, originalPrice: 1199, discount: 58, category: "kids", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80", rating: 4.3, reviews: 2400 },
    { id: 140, name: "Boys Hoodie Navy Blue", price: 799, originalPrice: 1899, discount: 58, category: "kids", image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=500&q=80", rating: 4.5, reviews: 2100 },
    { id: 141, name: "Boys Track Pants Set", price: 649, originalPrice: 1599, discount: 59, category: "kids", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80", rating: 4.2, reviews: 1800 },
    
    // Kids Wear - General (Expanded)
    { id: 28, name: "Kids Unisex Jacket", price: 899, originalPrice: 2299, discount: 61, category: "kids", image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e4?w=500&q=80", rating: 4.3, reviews: 1400 },
    { id: 29, name: "Kids Winter Wear Set", price: 799, originalPrice: 1999, discount: 60, category: "kids", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7fb4c0?w=500&q=80", rating: 4.4, reviews: 1700 },
    { id: 142, name: "Kids School Bag Disney", price: 899, originalPrice: 1999, discount: 55, category: "kids", image: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?w=500&q=80", rating: 4.5, reviews: 3200 },
    { id: 143, name: "Kids Lunch Box Set", price: 399, originalPrice: 799, discount: 50, category: "kids", image: "https://images.unsplash.com/photo-1598968410914-8cdb7d96d5a2?w=500&q=80", rating: 4.3, reviews: 2800 },
    { id: 144, name: "Kids Water Bottle 500ml", price: 249, originalPrice: 499, discount: 50, category: "kids", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80", rating: 4.2, reviews: 4100 },
    { id: 145, name: "Kids Soft Toy Teddy Bear", price: 499, originalPrice: 999, discount: 50, category: "kids", image: "https://images.unsplash.com/photo-1551361415-69c87624334a?w=500&q=80", rating: 4.6, reviews: 3600 },
    { id: 146, name: "Kids Building Blocks Set", price: 799, originalPrice: 1699, discount: 53, category: "kids", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80", rating: 4.4, reviews: 2400 },
    { id: 147, name: "Kids Art & Craft Kit", price: 599, originalPrice: 1299, discount: 54, category: "kids", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80", rating: 4.3, reviews: 1900 },
    
    // Home & Furniture - Budget Options (Expanded)
    { id: 30, name: "LED TV 32 inch Smart", price: 12999, originalPrice: 18999, discount: 32, category: "home", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80", rating: 4.2, reviews: 2800 },
    { id: 31, name: "Study Table Wooden", price: 3999, originalPrice: 7999, discount: 50, category: "home", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80", rating: 4.1, reviews: 1200 },
    { id: 32, name: "Bean Bag Chair", price: 1499, originalPrice: 3999, discount: 63, category: "home", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80", rating: 4.3, reviews: 1800 },
    { id: 148, name: "LED TV 43 inch 4K", price: 22999, originalPrice: 32999, discount: 30, category: "home", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80", rating: 4.5, reviews: 3400 },
    { id: 149, name: "Sofa Set 3 Seater", price: 14999, originalPrice: 29999, discount: 50, category: "home", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80", rating: 4.3, reviews: 1600 },
    { id: 150, name: "Wooden Dining Table", price: 12999, originalPrice: 24999, discount: 48, category: "home", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80", rating: 4.4, reviews: 1200 },
    { id: 151, name: "Office Chair Ergonomic", price: 4999, originalPrice: 9999, discount: 50, category: "home", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80", rating: 4.2, reviews: 2100 },
    { id: 152, name: "Bookshelf 5 Tier", price: 3499, originalPrice: 6999, discount: 50, category: "home", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80", rating: 4.1, reviews: 1400 },
    { id: 153, name: "Wardrobe 3 Door", price: 9999, originalPrice: 19999, discount: 50, category: "home", image: "https://images.unsplash.com/photo-1595428773681-dffc80894cd5?w=500&q=80", rating: 4.3, reviews: 1100 },
    { id: 154, name: "Queen Size Bed", price: 11999, originalPrice: 22999, discount: 48, category: "home", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80", rating: 4.4, reviews: 1800 },
    { id: 155, name: "Mattress Memory Foam", price: 8999, originalPrice: 16999, discount: 47, category: "home", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80", rating: 4.5, reviews: 2400 },
    { id: 156, name: "Curtains Set 2 Panels", price: 999, originalPrice: 2499, discount: 60, category: "home", image: "https://images.unsplash.com/photo-1632312996985-23f68cfef1bc?w=500&q=80", rating: 4.2, reviews: 3100 },
    { id: 157, name: "Wall Clock Designer", price: 599, originalPrice: 1499, discount: 60, category: "home", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&q=80", rating: 4.3, reviews: 2800 },
    { id: 158, name: "Table Lamp LED", price: 799, originalPrice: 1799, discount: 56, category: "home", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80", rating: 4.4, reviews: 2200 },
    { id: 159, name: "Wall Art Canvas Set", price: 1299, originalPrice: 2999, discount: 57, category: "home", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500&q=80", rating: 4.5, reviews: 1900 },
    { id: 160, name: "Cushion Covers Set 5", price: 499, originalPrice: 1199, discount: 58, category: "home", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&q=80", rating: 4.2, reviews: 3400 },
    
    // Appliances - Essential Items (Expanded)
    { id: 33, name: "Electric Kettle 1.5L", price: 599, originalPrice: 1299, discount: 54, category: "appliances", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&q=80", rating: 4.2, reviews: 3500 },
    { id: 34, name: "Mixer Grinder 500W", price: 1899, originalPrice: 3999, discount: 53, category: "appliances", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&q=80", rating: 4.3, reviews: 2100 },
    { id: 35, name: "Iron Press 1000W", price: 699, originalPrice: 1499, discount: 53, category: "appliances", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&q=80", rating: 4.1, reviews: 4200 },
    { id: 161, name: "Microwave Oven 20L", price: 5999, originalPrice: 9999, discount: 40, category: "appliances", image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500&q=80", rating: 4.4, reviews: 2800 },
    { id: 162, name: "Air Fryer 4L", price: 3499, originalPrice: 6999, discount: 50, category: "appliances", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&q=80", rating: 4.5, reviews: 3200 },
    { id: 163, name: "Vacuum Cleaner", price: 4999, originalPrice: 8999, discount: 44, category: "appliances", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&q=80", rating: 4.3, reviews: 1900 },
    { id: 164, name: "Water Purifier RO", price: 7999, originalPrice: 14999, discount: 47, category: "appliances", image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=500&q=80", rating: 4.6, reviews: 2400 },
    { id: 165, name: "Washing Machine 6.5kg", price: 11999, originalPrice: 18999, discount: 37, category: "appliances", image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&q=80", rating: 4.4, reviews: 2100 },
    { id: 166, name: "Refrigerator 190L", price: 12999, originalPrice: 19999, discount: 35, category: "appliances", image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&q=80", rating: 4.5, reviews: 1800 },
    { id: 167, name: "Ceiling Fan 1200mm", price: 1499, originalPrice: 2999, discount: 50, category: "appliances", image: "https://images.unsplash.com/photo-1621873495664-1ade3db23e85?w=500&q=80", rating: 4.2, reviews: 3600 },
    { id: 168, name: "Table Fan Rechargeable", price: 899, originalPrice: 1799, discount: 50, category: "appliances", image: "https://images.unsplash.com/photo-1585766941993-a5e6c14c2b8d?w=500&q=80", rating: 4.1, reviews: 2900 },
    { id: 169, name: "Induction Cooktop", price: 1999, originalPrice: 3999, discount: 50, category: "appliances", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&q=80", rating: 4.3, reviews: 2600 },
    { id: 170, name: "Rice Cooker 1.8L", price: 1299, originalPrice: 2499, discount: 48, category: "appliances", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&q=80", rating: 4.2, reviews: 3100 },
    { id: 171, name: "Food Processor", price: 2499, originalPrice: 4999, discount: 50, category: "appliances", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&q=80", rating: 4.4, reviews: 1700 },
    
    // Beauty Products (Expanded)
    { id: 36, name: "Lakme Face Wash Combo", price: 399, originalPrice: 799, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80", rating: 4.3, reviews: 5600 },
    { id: 37, name: "Maybelline Lipstick Set", price: 599, originalPrice: 1199, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80", rating: 4.4, reviews: 4800 },
    { id: 38, name: "Hair Oil Combo Pack", price: 299, originalPrice: 599, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&q=80", rating: 4.2, reviews: 3200 },
    { id: 172, name: "Nivea Body Lotion 400ml", price: 349, originalPrice: 699, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&q=80", rating: 4.5, reviews: 6200 },
    { id: 173, name: "Himalaya Face Pack Set", price: 299, originalPrice: 599, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=500&q=80", rating: 4.3, reviews: 5100 },
    { id: 174, name: "Loreal Shampoo 650ml", price: 449, originalPrice: 899, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80", rating: 4.4, reviews: 4600 },
    { id: 175, name: "Garnier Face Serum", price: 599, originalPrice: 1199, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80", rating: 4.6, reviews: 3800 },
    { id: 176, name: "Makeup Brush Set 12pcs", price: 799, originalPrice: 1999, discount: 60, category: "beauty", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80", rating: 4.5, reviews: 3200 },
    { id: 177, name: "Nail Polish Set 10 Colors", price: 499, originalPrice: 999, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1519162808019-7de486a9f99c?w=500&q=80", rating: 4.3, reviews: 4100 },
    { id: 178, name: "Perfume Gift Set", price: 999, originalPrice: 2499, discount: 60, category: "beauty", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80", rating: 4.7, reviews: 2900 },
    { id: 179, name: "Face Mask Sheet 10pcs", price: 299, originalPrice: 599, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80", rating: 4.4, reviews: 5400 },
    { id: 180, name: "Sunscreen SPF 50 PA+++", price: 449, originalPrice: 899, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500&q=80", rating: 4.5, reviews: 4200 },
    { id: 181, name: "Hair Straightener Ceramic", price: 1299, originalPrice: 2999, discount: 57, category: "beauty", image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500&q=80", rating: 4.3, reviews: 2800 },
    { id: 182, name: "Hair Dryer Professional", price: 1499, originalPrice: 3499, discount: 57, category: "beauty", image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80", rating: 4.4, reviews: 2400 },
    
    // Sports & Fitness (Expanded)
    { id: 39, name: "Yoga Mat 6mm", price: 499, originalPrice: 999, discount: 50, category: "sports", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80", rating: 4.3, reviews: 2800 },
    { id: 40, name: "Skipping Rope", price: 199, originalPrice: 499, discount: 60, category: "sports", image: "https://images.unsplash.com/photo-1601925260559-2cfb76e08e4f?w=500&q=80", rating: 4.1, reviews: 1900 },
    { id: 41, name: "Gym Bag", price: 699, originalPrice: 1499, discount: 53, category: "sports", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", rating: 4.2, reviews: 1500 },
    { id: 183, name: "Dumbbell Set 10kg", price: 1499, originalPrice: 2999, discount: 50, category: "sports", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&q=80", rating: 4.5, reviews: 2400 },
    { id: 184, name: "Resistance Bands Set", price: 599, originalPrice: 1299, discount: 54, category: "sports", image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&q=80", rating: 4.4, reviews: 3100 },
    { id: 185, name: "Push Up Bar Stand", price: 399, originalPrice: 899, discount: 56, category: "sports", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80", rating: 4.2, reviews: 1800 },
    { id: 186, name: "Ab Roller Wheel", price: 299, originalPrice: 699, discount: 57, category: "sports", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80", rating: 4.3, reviews: 2200 },
    { id: 187, name: "Yoga Block Set 2pcs", price: 399, originalPrice: 799, discount: 50, category: "sports", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80", rating: 4.2, reviews: 1600 },
    { id: 188, name: "Gym Gloves Premium", price: 499, originalPrice: 999, discount: 50, category: "sports", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80", rating: 4.4, reviews: 2100 },
    { id: 189, name: "Protein Shaker Bottle", price: 249, originalPrice: 499, discount: 50, category: "sports", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&q=80", rating: 4.3, reviews: 3400 },
    { id: 190, name: "Sports Water Bottle 1L", price: 299, originalPrice: 699, discount: 57, category: "sports", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80", rating: 4.2, reviews: 2900 },
    { id: 191, name: "Badminton Racket Set", price: 999, originalPrice: 2499, discount: 60, category: "sports", image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&q=80", rating: 4.5, reviews: 1800 },
    { id: 192, name: "Cricket Bat Kashmir Willow", price: 1299, originalPrice: 2999, discount: 57, category: "sports", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&q=80", rating: 4.6, reviews: 2200 },
    { id: 193, name: "Football Size 5", price: 599, originalPrice: 1299, discount: 54, category: "sports", image: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=500&q=80", rating: 4.4, reviews: 2600 },
    { id: 194, name: "Running Shoes Men", price: 1499, originalPrice: 3499, discount: 57, category: "sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", rating: 4.5, reviews: 3800 },
    { id: 195, name: "Sports Shoes Women", price: 1399, originalPrice: 3299, discount: 58, category: "sports", image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&q=80", rating: 4.4, reviews: 3200 },
    
    // Books (Expanded)
    { id: 42, name: "Rich Dad Poor Dad", price: 299, originalPrice: 450, discount: 34, category: "books", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80", rating: 4.8, reviews: 8900 },
    { id: 43, name: "Atomic Habits", price: 349, originalPrice: 599, discount: 42, category: "books", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80", rating: 4.9, reviews: 12000 },
    { id: 44, name: "The Psychology of Money", price: 279, originalPrice: 450, discount: 38, category: "books", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", rating: 4.7, reviews: 7800 },
    { id: 196, name: "Think and Grow Rich", price: 199, originalPrice: 350, discount: 43, category: "books", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80", rating: 4.8, reviews: 6900 },
    { id: 197, name: "The Alchemist", price: 249, originalPrice: 399, discount: 38, category: "books", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80", rating: 4.7, reviews: 9200 },
    { id: 198, name: "The Subtle Art", price: 299, originalPrice: 499, discount: 40, category: "books", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80", rating: 4.6, reviews: 5800 },
    { id: 199, name: "Sapiens", price: 399, originalPrice: 699, discount: 43, category: "books", image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80", rating: 4.8, reviews: 7100 },
    { id: 200, name: "Zero to One", price: 349, originalPrice: 599, discount: 42, category: "books", image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&q=80", rating: 4.7, reviews: 4200 },
    { id: 201, name: "Harry Potter Set", price: 2499, originalPrice: 4999, discount: 50, category: "books", image: "https://images.unsplash.com/photo-1621351183012-e2f6d0ccc792?w=500&q=80", rating: 4.9, reviews: 8600 },
    { id: 202, name: "The Diary of a Young Girl", price: 199, originalPrice: 350, discount: 43, category: "books", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80", rating: 4.8, reviews: 6400 },
    { id: 203, name: "Wings of Fire", price: 249, originalPrice: 399, discount: 38, category: "books", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80", rating: 4.9, reviews: 11200 },
    { id: 204, name: "India After Gandhi", price: 449, originalPrice: 799, discount: 44, category: "books", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80", rating: 4.7, reviews: 3800 },
    { id: 205, name: "Ramayana by Valmiki", price: 299, originalPrice: 499, discount: 40, category: "books", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80", rating: 4.8, reviews: 5200 },
    { id: 206, name: "Bhagavad Gita", price: 199, originalPrice: 350, discount: 43, category: "books", image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&q=80", rating: 4.9, reviews: 7600 },
    { id: 207, name: "NCERT Complete Set Class 12", price: 1499, originalPrice: 2999, discount: 50, category: "books", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80", rating: 4.6, reviews: 4200 },
];

// State Management
let cart = [];
let currentUser = null;
let currentCategory = 'all';
let currentPriceFilter = 'all';
let displayedProducts = [...products];

// Initialize Page
function initializePage() {
    displayProducts(products);
    updateCartCount();
    loadCart();
    
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateSignInButton();
    }
}

// Display Products
function displayProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    if (productsToShow.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">No products found.</p>';
        return;
    }
    
    grid.innerHTML = productsToShow.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            ${product.discount ? `<div class="product-badge">${product.discount}% OFF</div>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-title">${product.name}</div>
            <div class="product-rating">⭐ ${product.rating} | ${formatNumber(product.reviews)} reviews</div>
            <div>
                <span class="product-price">₹${formatPrice(product.price)}</span>
                ${product.originalPrice ? `
                    <span class="product-original-price">₹${formatPrice(product.originalPrice)}</span>
                    <span class="product-discount">${product.discount}% off</span>
                ` : ''}
            </div>
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Format Price
function formatPrice(price) {
    return price.toLocaleString('en-IN');
}

// Format Number
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num;
}

// Filter by Category
function filterCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.category-list li').forEach(li => {
        li.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    applyFilters();
    
    const categoryNames = {
        'all': 'All Products',
        'mobiles': 'Mobiles & Tablets',
        'electronics': 'Electronics',
        'fashion': 'Fashion',
        'home': 'Home & Furniture',
        'appliances': 'Appliances',
        'beauty': 'Beauty & Personal Care',
        'kids': 'Kids & Toys',
        'sports': 'Sports & Fitness',
        'books': 'Books & Media'
    };
    
    document.getElementById('sectionTitle').textContent = categoryNames[category] || 'All Products';
}

// Filter by Price
function filterPrice(range) {
    currentPriceFilter = range;
    applyFilters();
}

// Apply Filters
function applyFilters() {
    let filtered = products;
    
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    
    if (currentPriceFilter !== 'all') {
        filtered = filtered.filter(p => {
            switch(currentPriceFilter) {
                case 'under-1000': return p.price < 1000;
                case '1000-5000': return p.price >= 1000 && p.price <= 5000;
                case '5000-20000': return p.price >= 5000 && p.price <= 20000;
                case 'above-20000': return p.price > 20000;
                default: return true;
            }
        });
    }
    
    displayedProducts = filtered;
    displayProducts(filtered);
}

// Filter by Rating
function filterRating() {
    const checkedRatings = Array.from(document.querySelectorAll('.rating-filter input:checked'))
        .map(input => parseFloat(input.value));
    
    if (checkedRatings.length === 0) {
        displayProducts(displayedProducts);
        return;
    }
    
    const minRating = Math.min(...checkedRatings);
    const filtered = displayedProducts.filter(p => p.rating >= minRating);
    displayProducts(filtered);
}

// Sort Products
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sorted = [...displayedProducts];
    
    switch(sortValue) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    displayProducts(sorted);
}

// Search Products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayProducts(products);
        document.getElementById('sectionTitle').textContent = 'All Products';
        return;
    }
    
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filtered);
    document.getElementById('sectionTitle').textContent = `Search Results for "${searchTerm}"`;
}

// View Product
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const savings = product.originalPrice - product.price;
    alert(`📱 ${product.name}\n\n💰 Price: ₹${formatPrice(product.price)}\n💵 MRP: ₹${formatPrice(product.originalPrice)}\n💚 You Save: ₹${formatPrice(savings)} (${product.discount}% off)\n\n⭐ Rating: ${product.rating}/5\n\n🛒 Click "Add to Cart" to purchase!`);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    cart.push(product);
    updateCartCount();
    saveCart();
    showNotification(`✓ ${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const countEl = document.getElementById('cartCount');
    if (countEl) {
        countEl.textContent = cart.length;
    }
}

// View Cart
function viewCart() {
    const modal = document.getElementById('cartModal');
    const cartList = document.getElementById('cartItemsList');
    
    
    if (cart.length === 0) {
        cartList.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p style="font-size: 18px; margin-bottom: 10px;">Your cart is empty!</p>
                <p>Start shopping to add items.</p>
            </div>
        `;
        document.getElementById('cartSubtotal').textContent = '₹0';
        document.getElementById('cartSavings').textContent = '₹0';
        document.getElementById('cartTotal').textContent = '₹0';
    } else {
        cartList.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${formatPrice(item.price)}</div>
                    ${item.originalPrice ? `<div style="font-size: 12px; color: #666;">You save: ₹${formatPrice(item.originalPrice - item.price)}</div>` : ''}
                </div>
                <button class="btn-remove" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `).join('');
        
        const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
        const discount = cart.reduce((sum, item) => sum + (item.originalPrice ? item.originalPrice - item.price : 0), 0);
        
        document.getElementById('cartSubtotal').textContent = '₹' + formatPrice(subtotal);
        document.getElementById('cartSavings').textContent = '₹' + formatPrice(discount);
        document.getElementById('cartTotal').textContent = '₹' + formatPrice(subtotal);
    }
    
    modal.style.display = 'block';
}

// Close Cart Modal
function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Remove from Cart
function removeFromCart(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    updateCartCount();
    saveCart();
    showNotification(`🗑️ ${removedItem.name} removed!`);
    viewCart();
}

// Proceed to Checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`🎉 Checkout!\n\nTotal: ₹${formatPrice(total)}\n\nCheckout page coming soon!`);
    closeCartModal();
}

// Save & Load Cart
function saveCart() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Login Functions
function showLogin() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeLogin() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
    }
    document.getElementById('phoneStep').style.display = 'block';
    document.getElementById('otpStep').style.display = 'none';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('otpInput').value = '';
}

function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
        alert('❌ Please enter valid 10-digit mobile number');
        return;
    }
    
    document.getElementById('displayPhone').textContent = '+91 ' + phoneNumber;
    document.getElementById('phoneStep').style.display = 'none';
    document.getElementById('otpStep').style.display = 'block';
    
    showNotification('✓ OTP sent to +91 ' + phoneNumber);
    console.log('Test OTP: 123456');
}

function verifyOTP() {
    const otp = document.getElementById('otpInput').value;
    
    if (otp.length !== 6) {
        alert('❌ Please enter valid 6-digit OTP');
        return;
    }
    
    if (otp === '123456' || otp.length === 6) {
        const phoneNumber = document.getElementById('phoneNumber').value;
        currentUser = {
            phone: phoneNumber,
            name: 'User'
        };
        
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateSignInButton();
        closeLogin();
        showNotification('✓ Logged in successfully!');
    } else {
        alert('❌ Invalid OTP. Use: 123456');
    }
}

function resendOTP() {
    showNotification('✓ OTP resent!');
    console.log('Test OTP: 123456');
}

function changeNumber() {
    document.getElementById('phoneStep').style.display = 'block';
    document.getElementById('otpStep').style.display = 'none';
}

function updateSignInButton() {
    const btn = document.getElementById('signInBtn');
    if (currentUser && btn) {
        btn.querySelector('span:last-child').textContent = currentUser.name;
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: #ff9f00;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 10001;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2500);
}

// Close modals on outside click
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const cartModal = document.getElementById('cartModal');
    
    if (event.target === loginModal) {
        closeLogin();
    }
    if (event.target === cartModal) {
        closeCartModal();
    }
}

// Initialize
window.onload = initializePage;

// Search on Enter
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
});
