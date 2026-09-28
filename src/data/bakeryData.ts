import { MenuItem, ReviewItem, GalleryPhoto } from '../types';

export const BAKERY_INFO = {
  name: "French Loaf Bakery & Cafe",
  bengaliName: "ফ্রেঞ্চ লাফ বেকারি অ্যান্ড ক্যাফে",
  tagline: "Baked for the moments that matter.",
  subheading: "Fresh pastries, artisan cakes, coffee and little indulgences in the heart of Sector V.",
  address: "Plot EN-7, Sector-V, Street No-18, Salt Lake Bypass, West Bengal 700091, India",
  shortAddress: "Plot EN-7, Sector-V, Street No-18, Salt Lake Bypass",
  city: "Kolkata, West Bengal 700091",
  phone: "+91 99628 96989",
  phoneRaw: "+919962896989",
  category: "Premium Bakery & Cafe",
  priceRange: "₹200–₹400 per person",
  rating: 4.6,
  reviewsCount: 63,
  openingHours: "Open until 11 PM",
  timingDetails: "Monday – Sunday: 9:00 AM – 11:00 PM",
  mapsUrl: "https://maps.app.goo.gl/ztVw5NEvwHSEU9BFA",
};

export const SIGNATURE_CREATIONS: MenuItem[] = [
  {
    id: "korean-bun",
    name: "Korean Cream Cheese Bun",
    bengaliName: "কোরিয়ান ক্রিম চিজ বান",
    category: "signatures",
    categoryLabel: "Signature Star",
    description: "Ultra-soft brioche stuffed with sweetened cream cheese, dipped in aromatic garlic herb butter and baked until golden and glistening.",
    price: "₹220",
    isVegetarian: true,
    isEggless: false,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=1000&q=85",
    highlight: "Sector-V Bestseller",
    tastingNotes: ["Sweet garlic butter", "Whipped cream cheese", "Brioche cloud crumb"]
  },
  {
    id: "kunafa-chocolate-bar",
    name: "Kunafa Chocolate Bar",
    bengaliName: "কুনাফা চকলেট বার",
    category: "signatures",
    categoryLabel: "Artisan Confection",
    description: "Crispy roasted kataifi pastry tossed in rich pistachio-tahini butter, enrobed in a thick shell of single-origin Belgian dark chocolate.",
    price: "₹340",
    isVegetarian: true,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
    highlight: "Viral Sensation",
    tastingNotes: ["Crunchy kataifi", "Pistachio praline", "Velvety Belgian dark"]
  },
  {
    id: "green-mango-tart",
    name: "Green Mango Tart",
    bengaliName: "কাঁচা আমের টার্ট",
    category: "signatures",
    categoryLabel: "Seasonal Patisserie",
    description: "Tart and fragrant raw mango curd inspired by Bengal summers, layered over almond frangipane, buttery vanilla sablé and torched Italian meringue.",
    price: "₹240",
    isVegetarian: true,
    isEggless: false,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1000&q=85",
    highlight: "Chef's Signature",
    tastingNotes: ["Zesty green mango", "Torched meringue", "Crisp almond sablé"]
  },
  {
    id: "celebration-cakes",
    name: "Celebration Cakes",
    bengaliName: "সেলিব্রেশন কেক",
    category: "signatures",
    categoryLabel: "Bespoke Patisserie",
    description: "Custom artisanal tiered cakes for birthdays, anniversaries and desk celebrations. Belgian truffle, Lotus Biscoff, Red Velvet and seasonal fresh fruit gateaux.",
    price: "From ₹450",
    isVegetarian: true,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=85",
    highlight: "Custom Handcrafted",
    tastingNotes: ["Dark truffle ganache", "Light sponge", "Artisanal finish"]
  },
  {
    id: "fresh-pastries",
    name: "Fresh Pastries",
    bengaliName: "তাজা ফরাসি পেস্ট্রি",
    category: "signatures",
    categoryLabel: "Daily Viennoiserie",
    description: "Flaky golden 72-layer laminated butter croissants, Pain au Chocolat, fruit-glazed Danishes and caramel cinnamon swirls baked fresh every morning.",
    price: "₹180",
    isVegetarian: true,
    isEggless: false,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85",
    highlight: "Dawn Baked Daily",
    tastingNotes: ["Honeycomb crumb", "100% dairy butter", "Caramelized crust"]
  },
  {
    id: "coffee-favourites",
    name: "Coffee & Cafe Favourites",
    bengaliName: "স্পেশাল্টি কফি ও ক্যাফে",
    category: "signatures",
    categoryLabel: "Barista Brews",
    description: "Specialty Arabica roasts, silky flat whites, Spanish lattes and pour-overs, served alongside warm savory puff pockets and gourmet quiches.",
    price: "₹190",
    isVegetarian: true,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
    highlight: "Single-Estate Beans",
    tastingNotes: ["Hazelnut crema", "Smooth medium roast", "Silky steamed milk"]
  }
];

export const FULL_MENU: MenuItem[] = [
  // Pastries
  {
    id: "croissant-classic",
    name: "Classic French Butter Croissant",
    category: "pastries",
    categoryLabel: "Viennoiserie",
    description: "Authentic golden crescent with 72 buttery layers, crisp shell and airy honeycomb interior.",
    price: "₹180",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["Normandy butter", "Airy honeycomb", "Flaky"]
  },
  {
    id: "pain-au-chocolat",
    name: "Pain au Chocolat",
    category: "pastries",
    categoryLabel: "Viennoiserie",
    description: "Crisp laminated pastry enclosing two batons of 54% dark French couverture chocolate.",
    price: "₹210",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["54% Dark chocolate", "Golden layers", "Flaky"]
  },
  {
    id: "almond-croissant",
    name: "Twice-Baked Almond Croissant",
    category: "pastries",
    categoryLabel: "Viennoiserie",
    description: "Filled with rich almond frangipane cream, topped with toasted sliced almonds and powdered sugar.",
    price: "₹230",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["Almond cream", "Toasted crunch", "Rich"]
  },
  {
    id: "cinnamon-swirl",
    name: "Cardamom & Cinnamon Swirl",
    category: "pastries",
    categoryLabel: "Viennoiserie",
    description: "Caramelized brown sugar and Ceylon cinnamon rolled in buttery puff pastry with sugar glaze.",
    price: "₹190",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["Warm spice", "Caramelized crust", "Sweet glaze"]
  },
  // Korean Buns
  {
    id: "korean-bun-classic",
    name: "Signature Korean Cream Cheese Garlic Bun",
    category: "korean-buns",
    categoryLabel: "Korean Bun",
    description: "Segmented soft brioche bun drenched in roasted garlic butter with parsley and stuffed with cream cheese.",
    price: "₹220",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80",
    highlight: "House Special",
    tastingNotes: ["Garlic butter", "Sweet cream cheese", "Herb glaze"]
  },
  {
    id: "korean-spicy-cheddar",
    name: "Korean Spicy Cheddar & Herb Bun",
    category: "korean-buns",
    categoryLabel: "Korean Bun",
    description: "A savory twist with aged cheddar, gentle chili flake infusion, herbs and melted cream cheese.",
    price: "₹240",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["Mild chili punch", "Aged cheddar", "Garlic herb"]
  },
  // Cakes & Tarts
  {
    id: "kunafa-bar",
    name: "Kunafa Pistachio Chocolate Bar",
    category: "cakes",
    categoryLabel: "Specialty Dessert",
    description: "Viral Dubai-style confection with toasted golden kataifi pastry, pistachio paste and dark chocolate.",
    price: "₹340",
    isVegetarian: true,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    highlight: "Bestseller",
    tastingNotes: ["Crispy kataifi", "Pistachio", "Dark chocolate"]
  },
  {
    id: "green-mango-tart-item",
    name: "Artisan Green Mango Tart",
    category: "cakes",
    categoryLabel: "Seasonal Tart",
    description: "Raw mango curd, almond frangipane, toasted vanilla sablé shell, torched meringue crown.",
    price: "₹240",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["Bengal mango", "Sablé crust", "Torched peak"]
  },
  {
    id: "belgian-truffle-slice",
    name: "Belgian Chocolate Truffle Gateau (Slice)",
    category: "cakes",
    categoryLabel: "Celebration Cake",
    description: "Silky dark chocolate ganache between moist cocoa sponge layers, finished with mirror glaze.",
    price: "₹220",
    isVegetarian: true,
    isEggless: true,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["64% Belgian truffle", "Mirror glaze", "Decadent"]
  },
  {
    id: "lotus-biscoff-cheesecake",
    name: "Lotus Biscoff Baked Cheesecake",
    category: "cakes",
    categoryLabel: "Cheesecake",
    description: "Creamy New York style cheesecake on a spiced Speculoos crust topped with melted Biscoff spread.",
    price: "₹260",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["Speculoos caramel", "Velvety cheese", "Crunchy base"]
  },
  // Savories
  {
    id: "mushroom-cheese-puff",
    name: "Truffled Mushroom & Leek Puff",
    category: "savories",
    categoryLabel: "Savory Warm",
    description: "Sautéed button mushrooms, caramelized leeks and gruyère cheese wrapped in flaky golden puff pastry.",
    price: "₹180",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["Truffle essence", "Flaky puff", "Earthy mushroom"]
  },
  {
    id: "paneer-tikka-brioche",
    name: "Paneer Tikka Brioche Pocket",
    category: "savories",
    categoryLabel: "Savory Warm",
    description: "Tandoori-spiced paneer cubes with bell peppers baked inside a pillowy butter brioche roll.",
    price: "₹190",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["Charred paneer", "Warm brioche", "Herb marinade"]
  },
  // Coffee & Drinks
  {
    id: "spanish-latte",
    name: "French Loaf Spanish Latte",
    category: "coffee",
    categoryLabel: "Signature Coffee",
    description: "Double shot espresso over condensed milk and velvet microfoam, dusted with cinnamon powder.",
    price: "₹220",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    highlight: "Most Loved Coffee",
    tastingNotes: ["Sweet condensed milk", "Bold espresso", "Velvet foam"]
  },
  {
    id: "flat-white",
    name: "Silky Flat White",
    category: "coffee",
    categoryLabel: "Hot Coffee",
    description: "Ristretto double shot blended with lightly textured whole milk for intense coffee flavor.",
    price: "₹190",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["Rich crema", "Balanced roast", "Microfoam"]
  },
  {
    id: "cold-brew-tonic",
    name: "Artisan Cold Brew & Citrus Tonic",
    category: "coffee",
    categoryLabel: "Iced Drinks",
    description: "18-hour cold steeped Arabica coffee poured over botanical tonic water with fresh orange twist.",
    price: "₹210",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["Bright citrus", "Brisk bubbles", "Smooth cacao note"]
  },
  {
    id: "belgian-hot-chocolate",
    name: "Thick Belgian Hot Chocolate",
    category: "coffee",
    categoryLabel: "Indulgence",
    description: "Melted 70% dark Belgian chocolate whisked with fresh whole milk and vanilla bean.",
    price: "₹240",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80",
    tastingNotes: ["Ultra thick", "Deep cocoa", "Pure comfort"]
  }
];

export const EDITORIAL_GALLERY: GalleryPhoto[] = [
  {
    id: "p1",
    title: "Honeycomb Crumb Croissants",
    category: "Viennoiserie",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
    aspect: "tall",
    caption: "72 delicate butter folds baked to a crisp copper resonance every morning at 7 AM.",
    tag: "Batch 01"
  },
  {
    id: "p2",
    title: "The Golden Korean Bun",
    category: "Signature Bake",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=85",
    aspect: "square",
    caption: "Pillowy sweet brioche glazed with roasted garlic herb butter and rich cream cheese.",
    tag: "Fresh Hourly"
  },
  {
    id: "p3",
    title: "Sector-V Afternoon Espresso",
    category: "Specialty Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
    aspect: "wide",
    caption: "Single-estate South Indian Arabica pulled with thick crema for slow conversations.",
    tag: "9:00 AM – 11:00 PM"
  },
  {
    id: "p4",
    title: "Handcrafted Dark Truffle Gateau",
    category: "Celebration Cakes",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=85",
    aspect: "square",
    caption: "Layered Belgian couverture chocolate for milestones, desk treats and birthdays.",
    tag: "Bespoke"
  },
  {
    id: "p5",
    title: "Kunafa & Pistachio Confection",
    category: "Artisan Dessert",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
    aspect: "wide",
    caption: "Toasted kataifi pastry with pistachio butter sealed in Belgian dark chocolate.",
    tag: "Chef Special"
  }
];

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Debolina Chatterjee",
    rating: 5,
    date: "Google Review · Sector V Regular",
    theme: "Aesthetic ambiance & spacious seating",
    comment: "Beautiful aesthetic cafe and spacious seating right in Sector V! Such a calm retreat away from the bustling Salt Lake IT offices. The ambient music, warm wooden decor, and comfortable seating make it the ideal place for evening coffee dates, casual work catch-ups, and peaceful reading.",
    favoriteItem: "Spanish Latte & Almond Croissant"
  },
  {
    id: "rev-2",
    author: "Arindam Mukherjee",
    rating: 5,
    date: "Google Review · Local Guide",
    theme: "Consistently good pastries and Korean buns",
    comment: "Consistently exceptional pastries and the Korean bun here is absolute perfection! The garlic butter glaze with the warm cream cheese filling is hands down the best in Kolkata. Every time we visit, the crust is flaky, fresh, and warm out of the oven. A must-visit bakery.",
    favoriteItem: "Korean Cream Cheese Garlic Bun"
  },
  {
    id: "rev-3",
    author: "Priyanka Sen",
    rating: 5,
    date: "Google Review · Verified Customer",
    theme: "Fresh, premium and remarkably affordable",
    comment: "Fresh and remarkably affordable bakery products without cutting corners on five-star quality. At ₹200–₹400 per person, you get five-star patisserie level cakes, tarts, and coffees. Open until 11 PM which is a lifesaver for late night dessert cravings in Salt Lake!",
    favoriteItem: "Green Mango Tart & Truffle Cake"
  },
  {
    id: "rev-4",
    author: "Ritwik Bhattacharya",
    rating: 5,
    date: "Google Review · Verified Guest",
    theme: "Pistachio Kunafa & Specialty Brews",
    comment: "The Pistachio Kunafa chocolate and cold brew pairing is out of this world! Sector V finally has a sophisticated European-style bakery where you can bring a book or finish client decks without loud disturbance. The baristas know their craft.",
    favoriteItem: "Pistachio Kunafa Bar & Iced Americano"
  },
  {
    id: "rev-5",
    author: "Ananya Roy",
    rating: 5,
    date: "Google Review · Corporate Client",
    theme: "Milestone Celebration Gateaux",
    comment: "Ordered their Belgian dark truffle cake for my team's project milestone at our Salt Lake tech park. Everyone raved about how moist and balanced the sweetness was. Flawless presentation, neat custom message piping, and super punctual handover!",
    favoriteItem: "Belgian Dark Truffle Cake"
  },
  {
    id: "rev-6",
    author: "Sourav Gangopadhyay",
    rating: 5,
    date: "Google Review · Local Guide",
    theme: "Authentic 72-Layer Viennoiserie",
    comment: "Crispy golden butter croissants and authentic pain au chocolat right next to the bypass. The staff is polite, courteous, and the buttery aroma when you walk in the morning is sheer heaven. Truly Kolkata's benchmark patisserie.",
    favoriteItem: "Pain au Chocolat & Flat White"
  }
];

export const CAFE_PILLARS = [
  {
    title: "Spacious Seating",
    description: "Generous table spacing, plush armchairs, and communal wooden counters designed for relaxed comfort.",
    detail: "Ideal for laptops, dates, and quiet conversations"
  },
  {
    title: "Warm Cafe Atmosphere",
    description: "Soft amber pendant lights, gentle acoustic music, and rich espresso aromas that slow down your day.",
    detail: "Sector-V's cozy sanctuary"
  },
  {
    title: "Artisanal Bakery & Pastries",
    description: "European laminating techniques meet warm Kolkata hospitality with fresh batches every morning.",
    detail: "100% pure butter viennoiserie"
  },
  {
    title: "Cakes & Celebrations",
    description: "From custom birthday milestones to office celebrations, crafted fresh with pre-order convenience.",
    detail: "Custom messages & eggless varieties available"
  },
  {
    title: "Coffee Moments",
    description: "Carefully roasted Arabica beans pulled with precision by baristas who genuinely care about your brew.",
    detail: "Espressos, cold brews, and Spanish lattes"
  }
];
