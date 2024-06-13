import Categories from "./Categories/categories";

const Products = [
{
id: 1,
title: "Electric Drill Machine 13mm",
mrp: 2599,
price: 2499,
rating: 4.5,
category: "Power Tools", // Assuming resolved category name
images: [
  "https://m.media-amazon.com/images/I/714rkFrqqXL._SX450_.jpg",
  "https://m.media-amazon.com/images/I/71O-Gj7PtcL._SX450_.jpg",
  "https://m.media-amazon.com/images/I/71pCGvmTlEL._SX450_.jpg",
  "https://m.media-amazon.com/images/I/7136JDmoAkL._SX450_.jpg",
  "https://m.media-amazon.com/images/I/71DLNcxs0jL._SY741_.jpg",
],
description: "High-speed electric drill suitable for drilling through wood, metal, and masonry.",
keyFeatures: [
  "Lightweight and ergonomic design",
  "Variable speed up to 3000 RPM",
  "Includes side handle for stability",
],
specifications: {
  power: "800 watts",
  chuckSize: "13mm",
  speed: "0-3000 RPM",
  voltage: "110-120V",
},
reviews: [
  {
    reviewerId: 101, // Random for now
    rating: 5,
    comment: "Excellent drill, very powerful and reliable.",
    date: "2023-05-15",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 102, // Random for now
    rating: 4,
    comment: "Works well, good value for the price.",
    date: "2023-06-02",
    image: null // Optional image, can be null
  },
],
seller_id: 123456, // Random seller ID
stock: 50, // Random stock number
},
{
id: 2,
title: "Bosch Professional GSB 180-LI, 18V Cordless Impact Drill Driver, 1.5/ 13 mm with 2 x 2Ah Li Batteries, 1 x GAL 18V-20 Charger & Carrying Case",
mrp: 10995,
price: 10595,
rating: 5,
category: "Power Tools", // Assuming resolved category name
images: [
  "https://m.media-amazon.com/images/I/81LyOCwztpL._SX425_.jpg",
  "https://m.media-amazon.com/images/I/61hw8TBsCEL._SY606_.jpg",
  "https://m.media-amazon.com/images/I/61KcYTkyBGL._SX425_.jpg",
],
description: "Powerful cordless impact driver for driving screws and bolts effortlessly.",
keyFeatures: [
  "Brushless motor for increased efficiency",
  "Compact and lightweight design",
  "Built-in LED light for visibility",
],
specifications: {
  voltage: "18V",
  torque: "1800 in-lbs",
  speed: "0-2800 RPM",
  chuckSize: "1/4 inch hex",
},
reviews: [
  {
    reviewerId: 103, // Random for now
    rating: 5,
    comment: "Great impact driver, powerful and durable.",
    date: "2023-04-20",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 104, // Random for now
    rating: 5,
    comment: "Love this drill, very handy and efficient.",
    date: "2023-05-10",
    image: null // Optional image, can be null
  },
],
seller_id: 234567, // Random seller ID
stock: 30, // Random stock number
},
{
id: 3,
title: "Concrete Mixer",
mrp: 319.99,
price: 299.99,
rating: 4,
category: "Construction Tools", // Assuming resolved category name
images: [
  "https://5.imimg.com/data5/SA/CN/MY-1043916/reversible-mobile-concrete-mixer-machine-250x250.png"
],
description: "Heavy-duty concrete mixer for mixing concrete, mortar, and plaster.",
keyFeatures: [
  "Large capacity drum",
  "Powerful motor with high torque",
  "Sturdy wheels for easy mobility",
],
specifications: {
  capacity: "5 cubic feet",
  motorPower: "1.5 HP",
  drumSpeed: "25 RPM",
  voltage: "110-120V",
},
reviews: [
  {
    reviewerId: 105, // Random for now
    rating: 4,
    comment: "Works well for small construction projects.",
    date: "2023-03-18",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 106, // Random for now
    rating: 4,
    comment: "Reliable mixer, good value for money.",
    date: "2023-04-02",
    image: null // Optional image, can be null
  },
],
seller_id: 345678, // Random seller ID
stock: 20, // Random stock number
},
{
id: 4,
title: "Circular Saw Machine",
mrp: 129.99,
price: 119.99,
rating: 4,
category: "Power Tools", // Assuming resolved category name
images: [
  "https://5.imimg.com/data5/SELLER/Default/2023/6/314153940/DT/OY/RZ/2057180/whatsapp-image-2023-06-07-at-10-16-29-am-1--500x500.jpeg"
],
description: "Versatile circular saw for cutting wood, plywood, and laminate flooring.",
keyFeatures: [
  "Adjustable bevel angle up to 45 degrees",
  "Dust blower for debris removal",
  "Ergonomic handle for comfort",
],
specifications: {
  bladeSize: "7-1/4 inches",
  powerSource: "Electric",
  speed: "5000 RPM",
  voltage: "110-120V",
},
reviews: [
  {
    reviewerId: 107, // Random for now
    rating: 4,
    comment: "Good saw for DIY projects at home.",
    date: "2023-02-28",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 108, // Random for now
    rating: 3,
    comment: "Works fine, but a bit heavy for prolonged use.",
    date: "2023-03-15",
    image: null // Optional image, can be null
  },
],
seller_id: 456789, // Random seller ID
stock: 25, // Random stock number
},
{
id: 5,
title: "Hammer Drill",
mrp: 99.99,
price: 89.99,
rating: 4,
category: "Power Tools", // Assuming resolved category name
images: [
  "https://5.imimg.com/data5/SELLER/Default/2020/10/OU/JO/ZX/2483340/pbt-rh-26-scaled-500x500.jpg"
],
description: "Dual-mode hammer drill for drilling into concrete, brick, and stone.",
keyFeatures: [
  "Hammer function for tough materials",
  "Variable speed control",
  "Auxiliary handle for better control",
],
specifications: {
  power: "750 watts",
  chuckSize: "1/2 inch",
  speed: "0-3000 RPM",
  voltage: "110-120V",
},
reviews: [
  {
    reviewerId: 109, // Random for now
    rating: 4,
    comment: "Great hammer drill, very powerful.",
    date: "2023-07-10",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 110, // Random for now
    rating: 4,
    comment: "Good for DIY projects around the house.",
    date: "2023-07-25",
    image: null // Optional image, can be null
  },
],
seller_id: 567890, // Random seller ID
stock: 40, // Random stock number
},
{
id: 6,
title: "Angle Grinder",
mrp: 79.99,
price: 69.99,
rating: 4,
category: "Power Tools", // Assuming resolved category name
images: [
  "https://5.imimg.com/data5/ANDROID/Default/2021/3/RU/IL/BW/19592605/product-jpeg-500x500.jpg"
],
description: "Powerful angle grinder for cutting, grinding, and polishing metal and stone.",
keyFeatures: [
  "Adjustable guard for safety",
  "Side handle",
  "Tool-free guard adjustment",
],
specifications: {
  power: "900 watts",
  wheelDiameter: "4-1/2 inches",
  speed: "11000 RPM",
  voltage: "110-120V",
},
reviews: [
  {
    reviewerId: 111, // Random for now
    rating: 4,
    comment: "Good grinder for metalworking projects.",
    date: "2023-04-05",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 112, // Random for now
    rating: 4,
    comment: "Works well, no complaints so far.",
    date: "2023-04-18",
    image: null // Optional image, can be null
  },
],
seller_id: 678901, // Random seller ID
stock: 35, // Random stock number
},
{
id: 7,
title: "Rotary Hammer Drill",
mrp: 269.99,
price: 249.99,
rating: 5,
category: "Construction Tools", // Assuming resolved category name
images: [
  "https://5.imimg.com/data5/YW/LY/DQ/SELLER-3062576/checkmate-power-tools-500x500.jpg"
],
description: "Heavy-duty rotary hammer drill for drilling and chiseling concrete and masonry.",
keyFeatures: [
  "3-function modes: drilling, hammer drilling, and chiseling",
  "Anti-vibration technology for reduced fatigue",
  "Variable speed control for precision",
],
specifications: {
  power: "1100 watts",
  impactRate: "0-4500 BPM",
  chuckType: "SDS-Plus",
  voltage: "110-120V",
},
reviews: [
  {
    reviewerId: 113, // Random for now
    rating: 5,
    comment: "Excellent hammer drill, very powerful and efficient.",
    date: "2023-03-28",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 114, // Random for now
    rating: 5,
    comment: "Perfect for heavy-duty tasks, highly recommended.",
    date: "2023-04-12",
    image: null // Optional image, can be null
  },
],
seller_id: 789012, // Random seller ID
stock: 15, // Random stock number
},
{
  id: 8,
  title: "Chain Saw",
  mrp: 179.99,
  price: 159.99,
  rating: 4.5,
  category: Categories[7].name,
  images: [
    "https://m.media-amazon.com/images/I/41kvKK+uNsL._AC_UF1000,1000_QL80_.jpg"
  ],
  description: "Powerful petrol chain saw for cutting through trees and thick branches.",
  keyFeatures: [
    "Automatic oiling system for chain lubrication",
    "Safety chain brake for user protection",
    "Ergonomic handle for comfortable grip",
  ],
  specifications: {
    enginePower: "2.5 HP",
    barLength: "18 inches",
    chainSpeed: "8500 RPM",
    fuelTankCapacity: "300 ml",
  },
  reviews: [
    {
      reviewerId: 115, // Random for now
      rating: 4,
      comment: "Great chain saw, works smoothly and efficiently.",
      date: "2023-06-20",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 116, // Random for now
      rating: 5,
      comment: "Excellent tool for pruning and cutting trees.",
      date: "2023-07-05",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 890123, // Random seller ID
  stock: 20, // Random stock number
},
{
  id: 9,
  title: "Pressure Washer",
  mrp: 299.99,
  price: 279.99,
  rating: 4,
  category: Categories[7].name,
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNF4xOWgXdOxGI3X8Drsa0sP2MoFWBB0qsA&s"
  ],
  description: "High-pressure washer for cleaning vehicles, driveways, and patios.",
  keyFeatures: [
    "Powerful motor for high cleaning efficiency",
    "Adjustable spray wand for various cleaning tasks",
    "Detergent tank for easy soap application",
  ],
  specifications: {
    power: "1800 watts",
    pressure: "1600 PSI",
    flowRate: "1.6 GPM",
    voltage: "110-120V",
  },
  reviews: [
    {
      reviewerId: 117, // Random for now
      rating: 4,
      comment: "Cleans effectively, very satisfied with the performance.",
      date: "2023-08-10",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 118, // Random for now
      rating: 4,
      comment: "Works well for cleaning my car and driveway.",
      date: "2023-08-18",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 901234, // Random seller ID
  stock: 25, // Random stock number
},
{
  id: 10,
  title: "Demolition Hammer",
  mrp: 349.99,
  price: 329.99,
  rating: 5,
  category: Categories[6].name,
  images: [
    "https://5.imimg.com/data5/SELLER/Default/2023/1/ES/XZ/PR/21017812/foster-fdh-0810-demolition-hammer-500x500.jpeg"
  ],
  description: "Heavy-duty demolition hammer for breaking up concrete and asphalt.",
  keyFeatures: [
    "Powerful 1500 watts motor for efficient demolition",
    "Shock-absorbing handle for reduced vibrations",
    "360-degree auxiliary handle for versatile operation",
  ],
  specifications: {
    power: "1500 watts",
    impactRate: "1900 BPM",
    voltage: "110-120V",
  },
  reviews: [
    {
      reviewerId: 119, // Random for now
      rating: 5,
      comment: "Exceptional demolition hammer, made my job much easier.",
      date: "2023-02-15",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 120, // Random for now
      rating: 5,
      comment: "Very powerful tool, exceeded my expectations.",
      date: "2023-03-02",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 912345, // Random seller ID
  stock: 18, // Random stock number
},
{
  id: 11,
  title: "Belt Sander",
  mrp: 119.99,
  price: 109.99,
  rating: 4,
  category: Categories[6].name,
  images: [
    "https://5.imimg.com/data5/DL/HY/MY-2281907/60-mm-belt-sander-tpt-469-500x500.jpg"
  ],
  description: "Powerful belt sander for smoothing and finishing wood and metal surfaces.",
  keyFeatures: [
    "Variable speed control for precise sanding",
    "Dust collection system keeps workspace clean",
    "Quick-release belt change for easy maintenance",
  ],
  specifications: {
    beltSize: "3 x 18 inches",
    speed: "1100 FPM",
    voltage: "110-120V",
  },
  reviews: [
    {
      reviewerId: 121, // Random for now
      rating: 4,
      comment: "Great sander, does the job well.",
      date: "2023-05-10",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 122, // Random for now
      rating: 4,
      comment: "Good value for money, sturdy build.",
      date: "2023-05-18",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 923456, // Random seller ID
  stock: 30, // Random stock number
},
{
  id: 12,
  title: "Wall Chaser",
  mrp: 299.99,
  price: 289.99,
  rating: 4,
  category: Categories[6].name,
  images: [
    "https://5.imimg.com/data5/ECOM/Default/2024/1/374031495/KP/KA/UY/21017812/1680609111830425390642c0f57ea963-500x500.png"
  ],
  description: "Wall chaser for cutting grooves in walls and floors for pipes and cables.",
  keyFeatures: [
    "Adjustable cutting depth for precise grooves",
    "Dust extraction port keeps workspace clean",
    "Spindle lock for easy blade changing",
  ],
  specifications: {
    power: "1700 watts",
    bladeDiameter: "5 inches",
    speed: "7500 RPM",
    voltage: "110-120V",
  },
  reviews: [
    {
      reviewerId: 123, // Random for now
      rating: 4,
      comment: "Efficient tool, great for cutting grooves in concrete.",
      date: "2023-06-28",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 124, // Random for now
      rating: 4,
      comment: "Helped me a lot with my renovation project.",
      date: "2023-07-05",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 934567, // Random seller ID
  stock: 22, // Random stock number
},
{
  id: 13,
  title: "Portable Generator",
  mrp: 519.99,
  price: 499.99,
  rating: 5,
  category: Categories[7].name,
  images: [
    "https://5.imimg.com/data5/SELLER/Default/2022/12/WZ/LR/DV/47151204/alpha-portable-petrol-generator-3-kva-500x500.jpg"
  ],
  description: "Portable generator for providing backup power during outages or on job sites.",
  keyFeatures: [
    "Fuel-efficient engine for long runtime",
    "Multiple outlets for various devices",
    "Low-oil shutdown for engine protection",
  ],
  specifications: {
    maxPower: "4000 watts",
    fuelCapacity: "3.6 gallons",
    runtime: "10 hours at 50% load",
    voltage: "110-120V",
  },
  reviews: [
    {
      reviewerId: 125, // Random for now
      rating: 5,
      comment: "Reliable generator, saved me during a power outage.",
      date: "2023-01-20",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 126, // Random for now
      rating: 5,
      comment: "Easy to use, starts up quickly when needed.",
      date: "2023-02-05",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 945678,
// Random seller ID
stock: 15, // Random stock number
},
{
id: 14,
title: "Pipe Threader",
mrp: 419.99,
price: 399.99,
rating: 4,
category: Categories[1].name,
images: [
"https://5.imimg.com/data5/SELLER/Default/2022/12/DY/VG/YE/106880762/pipethreading4-500x500.jpg"
],
description: "Electric pipe threader for threading pipes made of steel, brass, and plastic.",
keyFeatures: [
"Quick-change die heads for various pipe sizes",
"Auto-open threader for easy operation",
"Reverse rotation for removing pipe easily",
],
specifications: {
capacity: "1/2 to 2 inches",
speed: "32 RPM",
voltage: "110-120V",
},
reviews: [
{
  reviewerId: 127, // Random for now
  rating: 4,
  comment: "Efficient threader, works well with different pipe materials.",
  date: "2023-03-15",
  image: null // Optional image, can be null
},
{
  reviewerId: 128, // Random for now
  rating: 4,
  comment: "Good quality threader, saves a lot of time.",
  date: "2023-03-25",
  image: null // Optional image, can be null
},
],
seller_id: 956789, // Random seller ID
stock: 12, // Random stock number
},
{
id: 15,
title: "Welding Machine",
mrp: 819.99,
price: 799.99,
rating: 5,
category: Categories[1].name,
images: [
"https://5.imimg.com/data5/SELLER/Default/2022/11/SW/QC/AZ/79416764/258-500x500.jpg"
],
description: "Arc welding machine for welding steel, stainless steel, and aluminum.",
keyFeatures: [
"Digital display for precise welding settings",
"Overheat protection for safety",
"Suitable for MMA welding",
],
specifications: {
power: "220V",
currentRange: "10-250A",
dutyCycle: "60% at 250A",
voltage: "220V",
},
reviews: [
{
  reviewerId: 129, // Random for now
  rating: 5,
  comment: "Excellent welding machine, highly recommended.",
  date: "2023-04-10",
  image: null // Optional image, can be null
},
{
  reviewerId: 130, // Random for now
  rating: 5,
  comment: "Works flawlessly, very satisfied with the results.",
  date: "2023-04-20",
  image: null // Optional image, can be null
},
],
seller_id: 967890, // Random seller ID
stock: 10, // Random stock number
},
{
id: 16,
title: "Aluminium Composite Panel (ACP)",
mrp: 699.99,
price: 649.99,
rating: 4.2,
category: Categories[0].name,
images: [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKS2m60i8MP1TW1jFSscKzFIXPMISaxt6g8g&s",
"https://5.imimg.com/data5/SW/GX/PH/SELLER-28950168/acp-sheet.jpg",
],
description: "Lightweight and durable composite panel for architectural cladding.",
keyFeatures: [
"UV-resistant and weatherproof",
"Available in various colors and finishes",
"Easy to cut and install",
],
specifications: {
thickness: "4 mm",
size: "4' x 8'",
material: "Aluminium composite",
},
reviews: [
{
  reviewerId: 131, // Random for now
  rating: 5,
  comment: "Great product, enhanced the look of my house.",
  date: "2023-07-12",
  image: null // Optional image, can be null
},
{
  reviewerId: 132, // Random for now
  rating: 4,
  comment: "Good quality, worth the price.",
  date: "2023-07-20",
  image: null // Optional image, can be null
},
],
seller_id: 978901, // Random seller ID
stock: 17, // Random stock number
},
{
  id: 17,
  title: "Plate Compactor",
  mrp: 899.99,
  price: 849.99,
  rating: 4.5,
  category: Categories[1].name, // Category resolved to name
  images: [
    "https://5.imimg.com/data5/AS/OR/IA/SELLER-82001374/1.jpg",
    "https://5.imimg.com/data5/GLADMIN/Default/2023/2/CQ/AW/NZ/82001374/orange-avc25-motor-plate-compactor-500x500.jpg",
  ],
  description: "Heavy-duty plate compactor for compacting soil, gravel, and asphalt.",
  keyFeatures: [
    "Powerful engine for efficient compaction",
    "Foldable handle for easy transport and storage",
    "Durable base plate for extended use",
  ],
  specifications: {
    enginePower: "6.5 HP",
    compactionForce: "10000 N",
    plateSize: "20 x 24 inches",
    fuelCapacity: "3.6 liters",
  },
  reviews: [
    {
      reviewerId: 133, // Random for now
      rating: 5,
      comment: "Excellent compactor, makes my job easier.",
      date: "2023-08-05",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 134, // Random for now
      rating: 4,
      comment: "Good performance, compacted the driveway well.",
      date: "2023-08-10",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 989012, // Random seller ID
  stock: 8, // Random stock number
},
{
  id: 18,
  title: "HDPE Pipe",
  mrp: 129.99,
  price: 119.99,
  rating: 4,
  category: Categories[2].name, // Category resolved to name
  images: [
    "https://cpimg.tistatic.com/05198619/b/4/Black-HDPE-Water-Pipe.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBr0kR_mcLI5ML1OCwggolHDvZKz6F1I3WHR7b_VU9wUhux1gjjFaPN7_eAvlQAeZcIA&usqp=CAU",
  ],
  description: "High-density polyethylene (HDPE) pipe for water and gas distribution.",
  keyFeatures: [
    "Corrosion-resistant and durable",
    "Lightweight and flexible for easy installation",
    "Suitable for underground and aboveground applications",
  ],
  specifications: {
    diameter: "1 inch",
    length: "100 meters",
    pressureRating: "PN 10",
    material: "HDPE",
  },
  reviews: [
    {
      reviewerId: 135, // Random for now
      rating: 4,
      comment: "Good quality pipe, installed it without any issues.",
      date: "2023-06-15",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 136, // Random for now
      rating: 4,
      comment: "Works well for irrigation purposes.",
      date: "2023-06-25",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 990123, // Random seller ID
  stock: 15, // Random stock number
},
{
  id: 19,
  title: "Gypsum Ceiling Tiles",
  mrp: 199.99,
  price: 179.99,
  rating: 4.3,
  category: Categories[3].name, // Category resolved to name
  images: [
    "https://5.imimg.com/data5/YQ/CC/SS/SELLER-10389584/pvc-laminated-gypsum-ceiling-tiles-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2022/9/CM/MH/ZQ/12919641/pvc-laminated-gypsum-ceiling-tiles-2x2-500x500.png",
  ],
  description: "Decorative gypsum ceiling tiles for enhancing interior spaces.",
  keyFeatures: [
    "Fire-resistant and moisture-resistant",
    "Easy to install and maintain",
    "Available in various designs and sizes",
  ],
  specifications: {
    size: "2' x 2'",
    thickness: "12 mm",
    material: "Gypsum",
  },
  reviews: [
    {
      reviewerId: 137, // Random for now
      rating: 5,
      comment: "Beautiful ceiling tiles, transformed my living room.",
      date: "2023-09-01",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 138, // Random for now
      rating: 4,
      comment: "Good quality tiles, easy to handle during installation.",
      date: "2023-09-05",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 1002134, // Random seller ID
  stock: 20, // Random stock number
},
{
  id: 20,
  title: "Stainless Steel Sheet",
  mrp: 379.99,
  price: 349.99,
  rating: 4.7,
  category: Categories[4].name, // Category resolved to name
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-IWm6NPWKgErHHczPgyjAHpQrnqWEnCVPg&s",
    "https://5.imimg.com/data5/SELLER/Default/2021/6/LZ/DB/OG/4009504/steel-sheets-500x500.jpg",
  ],
  description: "High-quality stainless steel sheet for industrial and construction applications.",
  keyFeatures: [
    "Corrosion-resistant and durable",
    "Smooth surface finish",
    "Available in various thicknesses and sizes",
  ],
  specifications: {
    thickness: "1/8 inch",
    size: "4' x 8'",
    material: "Stainless steel",
  },
  reviews: [
    {
      reviewerId: 139, // Random for now
      rating: 5,
      comment: "Excellent stainless steel sheet, exactly what I needed.",
      date: "2023-09-10",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 140, // Random for now
      rating: 4,
      comment: "Good purchase, arrived on time and in good condition.",
      date: "2023-09-15",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 1013245, // Random seller ID
  stock: 25, // Random stock number
},
{
  id: 21,
  title: "Plywood Board",
  mrp: 89.99,
  price: 79.99,
  rating: 4.2,
  category: Categories[5].name, // Category resolved to name
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxjBFyRh1woR0m0SZ6ynyXy7zFPWYfsK1hw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_fWIqMoyDOGV8jg0ZO3CS44MGWWwV9jriw&s",
  ],
  description: "High-quality plywood board for furniture and construction applications.",
  keyFeatures: [
    "Strong and durable",
    "Smooth finish for easy painting or staining",
    "Available in various grades and thicknesses",
  ],
  specifications: {
    grade: "B/BB",
    size: "4' x 8'",
    thickness: "18 mm",
  },
  reviews: [
    {
      reviewerId: 141, // Random for now
      rating: 4,
      comment: "Good plywood, sturdy and easy to work with.",
      date: "2023-10-01",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 142, // Random for now
      rating: 4,
      comment: "Quality product, used it for my DIY project.",
      date: "2023-10-05",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 1023456, // Random seller ID
  stock: 30, // Random stock number
},
{
  id: 22,
  title: "Impact Wrench",
  mrp: 249.99,
  price: 229.99,
  rating: 4.5,
  category: Categories[6].name, // Category resolved to name
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=t    bn:ANd9GcR0gmkYQSe1yQs1HJkON252WeezpC7ZudWbmw&s",
  "https://jpttools.com/cdn/shop/files/11_5b0106f5-216e-44a6-92dd-c708b28814f2_1024x1024.jpg?v=1706955360",
  "https://jpttools.com/cdn/shop/files/8_257555a3-b4b0-44da-9890-a74ea64e39e5_1024x1024.jpg?v=1707209334",
],
description: "Heavy-duty impact wrench for fastening and loosening bolts and nuts.",
keyFeatures: [
  "High torque output for tough applications",
  "Variable speed trigger for control",
  "Durable construction for long-term use",
],
specifications: {
  driveSize: "1/2 inch",
  maxTorque: "300 ft-lbs",
  speed: "0-2500 RPM",
  voltage: "110-120V",
},
reviews: [
  {
    reviewerId: 143, // Random for now
    rating: 5,
    comment: "Excellent impact wrench, makes my work efficient.",
    date: "2023-10-10",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 144, // Random for now
    rating: 4,
    comment: "Good tool, used it for automotive repairs.",
    date: "2023-10-15",
    image: null // Optional image, can be null
  },
],
seller_id: 1034567, // Random seller ID
stock: 12, // Random stock number
},
{
id: 23,
title: "Gasoline Lawn Mower",
mrp: 399.99,
price: 379.99,
rating: 4.5,
category: Categories[7].name, // Category resolved to name
images: [
  "https://5.imimg.com/data5/SELLER/Default/2023/2/TJ/BQ/RT/7965403/gasoline-lawn-mower.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wv9-ff_hgogqQ1vBtKFOQldapnHnO8B_lZ8pE32HlKZkvFwDTavH_ED4ymNRey-i1ek&usqp=CAU",
],
description: "Self-propelled gasoline lawn mower for efficient lawn maintenance.",
keyFeatures: [
  "Powerful engine for tough grass and terrain",
  "Adjustable cutting height",
  "Large rear wheels for maneuverability",
],
specifications: {
  enginePower: "5.0 HP",
  cuttingWidth: "21 inches",
  fuelTankCapacity: "1 gallon",
},
reviews: [
  {
    reviewerId: 145, // Random for now
    rating: 5,
    comment: "Great lawn mower, easy to use and cuts well.",
    date: "2023-10-20",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 146, // Random for now
    rating: 4,
    comment: "Good value for the money, starts up reliably.",
    date: "2023-10-25",
    image: null // Optional image, can be null
  },
],
seller_id: 1045678, // Random seller ID
stock: 18, // Random stock number
},
{
id: 24,
title: "300mm Stainless Steel Rod",
mrp: 49.99,
price: 39.99,
rating: 4.1,
category: Categories[4].name, // Category resolved to name
images: [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11nYPMIPm-U8Ry8wVDPgnWHcPCM1DGMou6w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYCyETbeWrEOhztPL5EjB4HLd1yM-MsT5lpz6bLLP-YC2jrj-Ee3_i10KW1B13nI9Y4dw&usqp=CAU",
],
description: "High-strength steel rod for structural support and reinforcement.",
keyFeatures: [
  "Solid construction for reliable performance",
  "Available in various diameters",
  "Suitable for construction and industrial applications",
],
specifications: {
  diameter: "10 mm",
  length: "6 meters",
  material: "Steel",
},
reviews: [
  {
    reviewerId: 147, // Random for now
    rating: 4,
    comment: "Good quality steel rod, met my expectations.",
    date: "2023-11-01",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 148, // Random for now
    rating: 4,
    comment: "Used it for building a small structure, worked well.",
    date: "2023-11-05",
    image: null // Optional image, can be null
  },
],
seller_id: 1056789, // Random seller ID
stock: 22, // Random stock number
},
{
  id: 25,
  title: "Aluminium Roofing Sheet",
  mrp: 299.99,
  price: 279.99,
  rating: 4.6,
  category: Categories[3].name, // Category resolved to name
  images: [
    "https://5.imimg.com/data5/SELLER/Default/2023/9/347447560/GW/OE/BZ/10422794/aluminium-roofing-sheet-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/1/BZ/CK/AI/61040959/aluminium-roofing-sheet-500x500.jpg",
  ],
  description: "Durable aluminium roofing sheet for residential and commercial buildings.",
  keyFeatures: [
    "Lightweight and rust-resistant",
    "Available in various colors and thicknesses",
    "Easy to install and maintain",
  ],
  specifications: {
    thickness: "0.7 mm",
    size: "4' x 10'",
    material: "Aluminium",
  },
  reviews: [
    {
      reviewerId: 149, // Random for now
      rating: 5,
      comment: "Beautiful roofing sheet, enhances the look of my house.",
      date: "2023-11-10",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 150, // Random for now
      rating: 4,
      comment: "Good quality sheet, withstands weather conditions well.",
      date: "2023-11-15",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 1067890, // Random seller ID
  stock: 15, // Random stock number
},
{
  id: 26,
  title: "Steel Plate",
  mrp: 199.99,
  price: 179.99,
  rating: 4.3,
  category: Categories[4].name, // Category resolved to name
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0uL6nxat_cjfODBF8ikjpH1v-YDvO4reDA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7hqzo15Gg6ilvdcc4v5QQBiOVHX5HfnHbpqKPq3tG8BihycA0rIYcjTyYuACal7fTVM&usqp=CAU",
  ],
  description: "Heavy-duty steel plate for structural and industrial applications.",
  keyFeatures: [
    "High strength and durability",
    "Suitable for welding and machining",
    "Available in various sizes and thicknesses",
  ],
  specifications: {
    thickness: "1/4 inch",
    size: "4' x 8'",
    material: "Steel",
  },
  reviews: [
    {
      reviewerId: 151, // Random for now
      rating: 5,
      comment: "Excellent steel plate, exactly as described.",
      date: "2023-11-20",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 152, // Random for now
      rating: 4,
      comment: "Used it for building a platform, works perfectly.",
      date: "2023-11-25",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 1078901, // Random seller ID
  stock: 20, // Random stock number
},
{
  id: 27,
  title: "Veneer Sheet",
  mrp: 59.99,
  price: 49.99,
  rating: 4.1,
  category: Categories[5].name, // Category resolved to name
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfMo79NfXMV3IanzwquCwken25oCemk0s2w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZifrEN1jZQOHrJ-jVZpNlFJHdwt5dnjxVQ&s",
  ],
  description: "Decorative veneer sheet for furniture and interior applications.",
  keyFeatures: [
    "Natural wood finish",
    "Flexible and easy to apply",
    "Available in various wood species and thicknesses",
  ],
  specifications: {
    woodSpecies: "Oak",
    size: "4' x 8'",
    thickness: "1/16 inch",
  },
  reviews: [
    {
      reviewerId: 153, // Random for now
      rating: 4,
      comment: "Beautiful veneer sheet, transformed my cabinets.",
      date: "2023-12-01",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 154, // Random for now
      rating: 4,
      comment: "Good quality, easy to work with.",
      date: "2023-12-05",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 1089012, // Random seller ID
  stock: 25, // Random stock number
},
{
  id: 28,
  title: "Cordless Drill",
  mrp: 149.99,
  price: 129.99,
  rating: 4.5,
  category: Categories[6].name, // Category resolved to name
  images: [
    "https://m.media-amazon.com/images/I/51TJ-xmEF3L._AC_UF1000,1000_QL80_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyHDSj8m-3B7uiM1oDe8vWEPWQypcu_dXX0hwTPnYc8zJSIJzxROe-0qhUdBS5yrp6ic&usqp=CAU",
  ],
  description: "Versatile cordless drill for drilling and driving screws.",
  keyFeatures: [
    "Compact and lightweight design",
    "Variable speed settings",
    "Built-in LED light for visibility",
  ],
  specifications: {
    chuckSize: "1/2 inch",
    voltage: "18V",
    maxTorque: "250 in-lbs",
  },
  reviews: [
    {
      reviewerId: 155, // Random for now
      rating: 5,
      comment: "Great drill, powerful and easy to use.",
      date: "2023-12-10",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 156, // Random for now
      rating: 4,
      comment: "Good purchase, comes in handy for DIY projects.",
      date: "2023-12-15",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 1090123, // Random seller ID
  stock: 18, // Random stock number
},
{
    id: 29,
    title: "Electric Chainsaw",
    mrp: 179.99,
    price: 159.99,
    rating: 4.4,
    category: Categories[7].name, // Category resolved to name
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/2/ZZ/RC/GS/146666754/mse-190-c-bq-500x500.png",
      "https://cheston.in/cdn/shop/products/61QGwGatDXL.jpg?v=1687460555",
    ],
    description: "Electric chainsaw for cutting trees and logs in the garden or yard.",
    keyFeatures: [
      "Powerful motor for fast cutting",
      "Automatic oiling system",
      "Tool-free chain tensioning",
    ],
    specifications: {
      barLength: "16 inches",
      motorPower: "12 Amp",
      chainSpeed: "30 m/s",
    },
    reviews: [
      {
        reviewerId: 157, // Random for now
        rating: 5,
        comment: "Excellent chainsaw, makes cutting logs much easier.",
        date: "2023-12-20",
        image: null // Optional image, can be null
      },
      {
        reviewerId: 158, // Random for now
        rating: 4,
        comment: "Good product, works well for my garden maintenance.",
        date: "2023-12-25",
        image: null // Optional image, can be null
      },
    ],
    seller_id: 1101234, // Random seller ID
    stock: 14, // Random stock number
  },
  {
    id: 30,
    title: "Interior Emulsion Paint",
    mrp: 39.99,
    price: 34.99,
    rating: 4.2,
    category: Categories[8].name, // Category resolved to name
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYJZB8MWseh2po  GAvOc7Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxZKOGW_oLf5uFKPKTX4VA2pweoxbpz8SVA&s",
],
description: "High-quality interior emulsion paint for smooth and durable walls.",
keyFeatures: [
  "Smooth finish with excellent hiding power",
  "Low VOC content for eco-friendly application",
  "Quick drying and washable",
],
specifications: {
  finish: "Matte",
  coverage: "350-400 sq. ft. per gallon",
  dryingTime: "2 hours",
},
reviews: [
  {
    reviewerId: 159, // Random for now
    rating: 4,
    comment: "Good paint, covers well and looks nice.",
    date: "2024-01-01",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 160, // Random for now
    rating: 4,
    comment: "Nice color, easy to apply.",
    date: "2024-01-05",
    image: null // Optional image, can be null
  },
],
seller_id: 1112345, // Random seller ID
stock: 30, // Random stock number
},
{
id: 31,
title: "Shower Head",
mrp: 29.99,
price: 24.99,
rating: 4.0,
category: Categories[9].name, // Category resolved to name
images: [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Oj5UseXrBNDGVXI2v16k8VvjH-E_T3-MMQ&s",
  "https://i0.wp.com/erinkestenbaum.com/uploads/2019/08/um5a8397-1.jpg?fit=1078%2C1640&ssl=1",
],
description: "Stylish and efficient shower head for a refreshing bathing experience.",
keyFeatures: [
  "Adjustable spray settings",
  "Durable and easy to clean",
  "Universal fitting for standard shower arms",
],
specifications: {
  material: "Stainless steel",
  sprayPatterns: "Rain, massage, and mist",
},
reviews: [
  {
    reviewerId: 161, // Random for now
    rating: 4,
    comment: "Good shower head, love the different spray modes.",
    date: "2024-01-10",
    image: null // Optional image, can be null
  },
  {
    reviewerId: 162, // Random for now
    rating: 4,
    comment: "Nice design, works well with our bathroom decor.",
    date: "2024-01-15",
    image: null // Optional image, can be null
  },
],
seller_id: 1123456, // Random seller ID
stock: 40, // Random stock number
},
{
  id: 32,
  title: "LED Bulb",
  mrp: 9.99,
  price: 7.99,
  rating: 4.5,
  category: Categories[9].name, // Category resolved to name
  images: [
    "https://m.media-amazon.com/images/I/61JiHMN4fkL.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-obog8GQ9c71-Q2qNzFeL6d9vwEqPEU6Spg&s",
  ],
  description: "Energy-efficient LED bulb for residential and commercial lighting.",
  keyFeatures: [
    "Low energy consumption",
    "Long lifespan",
    "Warm white light for a cozy atmosphere",
  ],
  specifications: {
    wattage: "9W",
    baseType: "E27",
    colorTemperature: "2700K",
  },
  reviews: [
    {
      reviewerId: 163, // Random for now
      rating: 5,
      comment: "Great",
      date: "2024-01-15",
      image: null // Optional image, can be null
    }
  ],
  seller_id: 1113456, // Random seller ID
  stock: 25, // Random stock number
},
{
  id: 33,
  title: "Tile",
  mrp: 19.99,
  price: 16.99,
  rating: 4.3,
  category: Categories[0].name, // Category resolved to name
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ278rwCIrddRGTM03x4ieqc1n2YJMX5qZoBQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsj1R59RJ2jpaxuvYBF-x9uKd-cGUGBbHsGPDR8SFmIZUFFP8xSFfxQfuQWsJJLU0Gfuw&usqp=CAU",
  ],
  description: "Premium quality ceramic tile suitable for both indoor and outdoor use.",
  keyFeatures: [
    "Durable and easy to clean surface",
    "Available in various sizes and designs",
    "Ideal for bathrooms, kitchens, and outdoor spaces",
  ],
  specifications: {
    material: "Ceramic",
    dimensions: "12 in x 12 in",
    thickness: "8 mm",
    weight: "2.5 kg",
  },
  reviews: [
    {
      reviewerId: 164, // Random for now
      rating: 5,
      comment: "Beautiful tiles, excellent quality.",
      date: "2023-12-15",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 165, // Random for now
      rating: 4,
      comment: "Good value for money, very satisfied.",
      date: "2023-12-20",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 1123457, // Random seller ID
  stock: 35, // Random stock number
},
{
  id: 34,
  title: "Composite Wall Panel",
  mrp: 49.99,
  price: 39.99,
  rating: 4.2,
  category: Categories[0].name, // Category resolved to name
  images: [
    "https://s.alicdn.com/@sc04/kf/Hb442fef8665245a6b1ddaaf98fe71bbac.jpg_300x300.jpg",
  ],
  description: "High-quality composite wall panel suitable for exterior and interior applications.",
  keyFeatures: [
    "Weather-resistant and durable",
    "Easy installation and maintenance",
    "Available in various colors and textures",
  ],
  specifications: {
    material: "Composite material",
    dimensions: "1200mm x 600mm",
    thickness: "10mm",
  },
  reviews: [
    {
      reviewerId: 166, // Random for now
      rating: 4,
      comment: "Looks great on my exterior walls, very pleased with the quality.",
      date: "2024-03-05",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 167, // Random for now
      rating: 4,
      comment: "Excellent choice for cladding, adds a modern touch.",
      date: "2024-03-10",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 1134567, // Random seller ID
  stock: 20, // Random stock number
},
{
  id: 35,
  title: "Coffee Table",
  mrp: 149.99,
  price: 129.99,
  rating: 4.2,
  category: Categories[5].name, // Category resolved to name
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJjgKM2sRxH0GDWbUjrSj3jwAx2aiK5Ja3Q&s",
  ],
  description: "Modern coffee table with storage shelf for living room furniture.",
  keyFeatures: [
    "Sturdy construction with wood finish",
    "Ample storage space underneath",
    "Easy to assemble",
  ],
  specifications: {
    material: "MDF, Wood",
    dimensions: "42\"L x 22\"W x 18\"H",
    color: "Espresso",
  },
  reviews: [
    {
      reviewerId: 168, // Random for now
      rating: 4,
      comment: "Functional coffee table, love the design.",
      date: "2024-02-20",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 169, // Random for now
      rating: 4,
      comment: "Good quality and easy to put together.",
      date: "2024-02-25",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 1145678, // Random seller ID
  stock: 15, // Random stock number
},
{
  id: 36,
  title: "Tool Kit",
  mrp: 79.99,
  price: 69.99,
  rating: 4.4,
  category: Categories[6].name, // Category resolved to name
  images: [
    "https://m.media-amazon.com/images/I/71Iyixv59pL._AC_UF1000,1000_QL80_.jpg",
  ],
  description: "Comprehensive tool kit with essential hand tools for DIY projects.",
  keyFeatures: [
    "Durable tools with ergonomic handles",
    "Includes screwdrivers, pliers, wrenches, and more",
    "Compact and portable case",
  ],
  specifications: {
    pieces: "50",
    material: "Steel, Plastic",
    caseIncluded: "Yes",
  },
  reviews: [
    {
      reviewerId: 170, // Random for now
      rating: 5,
      comment: "Great set of tools, covers all my basic needs.",
      date: "2024-03-01",
      image: null // Optional image, can be null
    },
    {
      reviewerId: 171, // Random for now
      rating: 4,
      comment: "Good quality tools for the price.",
      date: "2024-03-05",
      image: null // Optional image, can be null
    },
  ],
  seller_id: 1156789, // Random seller ID
  stock: 10, // Random stock number
},
{
    id: 32,
    title: "LED Bulb",
    mrp: 9.99,
    price: 7.99,
    rating: 4.5,
    category: Categories[9], // Category: Lighting
    images: [
      "https://m.media-amazon.com/images/I/61JiHMN4fkL.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-obog8GQ9c71-Q2qNzFeL6d9vwEqPEU6Spg&s",
    ],
    description: "Energy-efficient LED bulb for residential and commercial lighting.",
    keyFeatures: [
      "Low energy consumption",
      "Long lifespan",
      "Warm white light for a cozy atmosphere",
    ],
    specifications: {
      wattage: "9W",
      baseType: "E27",
      colorTemperature: "2700K",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Emma White",
        reviewerId: getRandomId(),
        rating: 5,
        comment: "Great",
        date: "2024-01-15",
        image: null,
      }
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 33,
    title: "Tile",
    mrp: 19.99,
    price: 16.99,
    rating: 4.3,
    category: Categories[0], // Category: Flooring
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ278rwCIrddRGTM03x4ieqc1n2YJMX5qZoBQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsj1R59RJ2jpaxuvYBF-x9uKd-cGUGBbHsGPDR8SFmIZUFFP8xSFfxQfuQWsJJLU0Gfuw&usqp=CAU",
    ],
    description: "Premium quality ceramic tile suitable for both indoor and outdoor use.",
    keyFeatures: [
      "Durable and easy to clean surface",
      "Available in various sizes and designs",
      "Ideal for bathrooms, kitchens, and outdoor spaces",
    ],
    specifications: {
      material: "Ceramic",
      dimensions: "12 in x 12 in",
      thickness: "8 mm",
      weight: "2.5 kg",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Emma Johnson",
        reviewerId: getRandomId(),
        rating: 5,
        comment: "Beautiful tiles, excellent quality.",
        date: "2023-12-15",
        image: null,
      },
      {
        id: getRandomId(),
        reviewer: "David Smith",
        reviewerId: getRandomId(),
        rating: 4,
        comment: "Good value for money, very satisfied.",
        date: "2023-12-20",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 36,
    title: "Composite Wall Panel",
    mrp: 49.99,
    price: 39.99,
    rating: 4.2,
    category: Categories[0], // Category: Wall Cladding
    images: [
      "https://s.alicdn.com/@sc04/kf/Hb442fef8665245a6b1ddaaf98fe71bbac.jpg_300x300.jpg",
    ],
    description: "High-quality composite wall panel suitable for exterior and interior applications.",
    keyFeatures: [
      "Weather-resistant and durable",
      "Easy installation and maintenance",
      "Available in various colors and textures",
    ],
    specifications: {
      material: "Composite material",
      dimensions: "1200mm x 600mm",
      thickness: "10mm",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Anna Smith",
        reviewerId: getRandomId(),
        rating: 4,
        comment: "Looks great on my exterior walls, very pleased with the quality.",
        date: "2024-03-05",
        image: null,
      },
      {
        id: getRandomId(),
        reviewer: "Michael Johnson",
        reviewerId: getRandomId(),
        rating: 4,
        comment: "Excellent choice for cladding, adds a modern touch.",
        date: "2024-03-10",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 37,
    title: "Tool Kit",
    mrp: 79.99,
    price: 69.99,
    rating: 4.4,
    category: Categories[6], // Category: Tools
    images: [
      "https://m.media-amazon.com/images/I/71Iyixv59pL._AC_UF1000,1000_QL80_.jpg",
    ],
    description: "Comprehensive tool kit with essential hand tools for DIY projects.",
    keyFeatures: [
      "Durable tools with ergonomic handles",
      "Includes screwdrivers, pliers, wrenches, and more",
      "Compact and portable case",
    ],
    specifications: {
      pieces: "50",
      material: "Steel, Plastic",
      caseIncluded: "Yes",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Natalie Peterson",
        reviewerId: getRandomId(),
        rating: 5,
        comment: "Great set of tools, covers all my basic needs.",
        date: "2024-03-01",
        image: null,
      },
      {
        id: getRandomId(),
        reviewer: "Lucas Hill",
        reviewerId: getRandomId(),
        rating: 4,
        comment: "Good quality tools for the price.",
        date: "2024-03-05",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 38,
    title: "Roofing Tiles",
    mrp: 19.99,
    price: 16.99,
    rating: 4.5,
    category: Categories[3], // Category: Roofing and False ceiling
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBk8AFrcclCtjY417WtZkCFuRnvg6WOvQCUg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApLny1xMuF3-AGCunMOCZPXg9gWudyVJNcsXGprW4fTUG31SHRILmCivM9o3lJV9C26M&usqp=CAU",
    ],
    description: "High-quality roofing tiles for residential and commercial buildings.",
    keyFeatures: [
      "Weather-resistant and durable",
      "Variety of colors and styles available",
      "Easy to install and maintain",
    ],
    specifications: {
      material: "Ceramic",
      size: "300mm x 300mm",
      thickness: "10mm",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "John Smith",
        reviewerId: getRandomId(),
        rating: 5,
        comment: "Beautiful tiles, enhances the look of my roof.",
        date: "2024-04-05",
        image: null,
      },
      {
        id: getRandomId(),
        reviewer: "Emily Davis",
        reviewerId: getRandomId(),
        rating: 4,
        comment: "Good quality tiles, happy with the purchase.",
        date: "2024-04-10",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 40,
    title: "False Ceiling Panel",
    mrp: 39.99,
    price: 34.99,
    rating: 4.2,
    category: Categories[3], // Category: Roofing and False ceiling
    images: [
      "https://tiimg.tistatic.com/fp/1/008/128/pvc-false-ceiling-panels-with-7-to-8-mm-thickness-for-residential-and-commercial-855.jpg",
      "https://5.imimg.com/data5/TX/KQ/YD/ANDROID-77221891/pvc-false-ceiling-500x500-jpg-500x500.jpg",
    ],
    description: "Decorative false ceiling panel for interior spaces.",
    keyFeatures: [
      "Enhances acoustic performance",
      "Provides thermal insulation",
      "Easy to clean and maintain",
    ],
    specifications: {
      material:      "Gypsum",
      dimensions: "600mm x 600mm",
      thickness: "15mm",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Olivia White",
        reviewerId: getRandomId(),
        rating: 4,
        comment: "Looks elegant in my living room, highly recommended.",
        date: "2024-04-15",
        image: null,
      },
      {
        id: getRandomId(),
        reviewer: "Daniel Johnson",
        reviewerId: getRandomId(),
        rating: 4,
        comment: "Good product, easy installation.",
        date: "2024-04-20",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 40,
    title: "Aluminium Rod",
    mrp: 40,
    price: 400,
    rating: 4.2,
    category: Categories[0], // Category: Aluminium and Glass
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQk7REOdhDtXgDG7O8jVkO4xlNjQanOt77Q&s",
    ],
    description: "High-quality aluminium rods for building facades.",
    keyFeatures: [
      "Weather-resistant",
      "Easy to install",
    ],
    specifications: {
      material: "Aluminium with PE core",
      thickness: "4 mm",
      size: "4 feet x 8 feet",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Customer A",
        reviewerId: getRandomId(),
        rating: 4.5,
        comment: "Excellent product, durable and looks great on our building.",
        date: "2023-05-20",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 41,
    title: "Aluminium Panel ",
    mrp: 450,
    price: 400,
    rating: 4.2,
    category: Categories[0], // Category: Aluminium and Glass
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU65twdeHDJkM9t9g5ysLXVkwo_UjY8NyTlA&s",
    ],
    description: "High-quality aluminium composite panel for building facades.",
    keyFeatures: [
      "Weather-resistant",
      "Easy to install",
    ],
    specifications: {
      material: "Aluminium with PE core",
      thickness: "4 mm",
      size: "4 feet x 8 feet",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Customer A",
        reviewerId: getRandomId(),
        rating: 4.5,
        comment: "Excellent product, durable and looks great on our building.",
        date: "2023-05-20",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 42,
    title: "Fibre Cement Board",
    mrp: 600,
    price: 550,
    rating: 4.0,
    category: Categories[0], // Category: Aluminium and Glass
    images: [
      "https://mccoymart.com/post/wp-content/uploads/fiber-cement-board-370x200.jpg",
    ],
    description: "Versatile fibre cement board suitable for exterior and interior applications.",
    keyFeatures: [
      "Fire-resistant",
      "Moisture-resistant",
    ],
    specifications: {
      thickness: "12 mm",
      size: "4 feet x 8 feet",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Customer B",
        reviewerId: getRandomId(),
        rating: 4.0,
        comment: "Good quality board, sturdy and easy to work with.",
        date: "2023-06-05",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 43,
    title: "PVC Pipes",
    mrp: 150,
    price: 130,
    rating: 4.5,
    category: Categories[2], // Category: Plumbing and Drainage
    images: [
      "https://m.media-amazon.com/images/I/518EvNASffL._AC_UF1000,1000_QL80_.jpg",
    ],
    description: "Durable PVC pipes for plumbing and drainage systems.",
    keyFeatures: [
      "Corrosion-resistant",
      "Lightweight",
    ],
    specifications: {
      diameter: "2 inches",
      length: "10 feet",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Customer C",
        reviewerId: getRandomId(),
        rating: 4.5,
        comment: "These pipes are great, haven't had any issues with them.",
        date: "2023-05-25",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 44,
    title: "HDPE Pipes",
    mrp: 250,
    price: 220,
    rating: 4.2,
    category: Categories[2], // Category: Plumbing and Drainage
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST09KfS8juXySIMLNf4vhfWNZe8q_Ndo9p_Q&s",
    ],
    description: "High-density polyethylene pipes suitable for various applications.",
    keyFeatures: [
      "Flexible and lightweight",
      "Chemical-resistant",
    ],
    specifications: {
      diameter: "3 inches",
      length: "12 feet",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Customer D",
        reviewerId: getRandomId(),
        rating: 4.0,
        comment: "Good pipes, reliable and easy to install.",
        date: "2023-06-01",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 45,
    title: "FRP Pipes",
    mrp: 350,
    price: 300,
    rating: 4.5,
    category: Categories[2], // Category: Plumbing and Drainage
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2020/12/UC/SA/DE/24243391/frp-pipes.jpg",
    ],
    description: "Fibre-reinforced plastic pipes for industrial and agricultural use.",
    keyFeatures: [
      "High strength-to-weight ratio",
      "Chemical and corrosion-resistant",
    ],
    specifications: {
      diameter: "4 inches",
      length: "10 feet",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Customer G",
        reviewerId: getRandomId(),
        rating: 4.5,
        comment: "Excellent pipes, sturdy and reliable for our irrigation system.",
        date: "2023-05-28",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 46,
    title: "HDPE Sprinkler Pipes",
    mrp: 180,
    price: 150,
    rating: 4.2,
    category: Categories[2], // Category: Plumbing and Drainage
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2021/7/WH/HR/QW/5430875/82d76df9-82a1-43c8-a2e3-6d0e55719c51.jpg",
    ],
    description: "High-density polyethylene pipes for efficient irrigation systems.",
    keyFeatures: [
      "UV-resistant",
      "Easy installation and maintenance",
    ],
    specifications: {
      diameter: "2 inches",
      length: "50 meters",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Customer H",
        reviewerId: getRandomId(),
        rating: 4.2,
        comment: "Good quality pipes, helped improve our crop yield significantly.",
        date: "2023-06-01",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 47,
    title: "Construction Paint Set",
    mrp: 29.99,
    price: 24.99,
    rating: 4.4,
    category: Categories[8], // Category: Paints and Coatings
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR198uS8yggO3DixGJGf1zmsmAjhCjyKRY4fQ&s",
    ],
    description: "Complete set of vibrant acrylic paints for artists and hobbyists.",
    keyFeatures: [
      "High pigment density for vivid colors",
      "Smooth consistency and easy blending",
      "Suitable for various surfaces including canvas and wood",
    ],
    specifications: {
      colors: "12 colors",
      volumePerTube: "22ml",
      type: "Acrylic paint",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Emma Thompson",
        reviewerId: getRandomId(),
        rating: 5,
        comment: "Love these paints, great quality and color selection.",
        date: "2024-05-05",
        image: null,
      },
      {
        id: getRandomId(),
        reviewer: "David Miller",
        reviewerId: getRandomId(),
        rating: 4,
        comment: "Good value for money, paints are easy to work with.",
        date: "2024-05-10",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  {
    id: 48,
    title: "Smart Electric Painting Equipment, For Industrial Use",
    mrp: 19.99,
    price: 16.99,
    rating: 4.3,
    category: Categories[8], // Category: Paints and Coatings
    images: [
      "https://3.imimg.com/data3/KQ/WB/MY-2617820/electric-painting-equipment-500x500.jpg",
    ],
    description: "Set of professional-grade paint brushes for various painting techniques.",
    keyFeatures: [
      "Durable and flexible synthetic bristles",
      "Comfortable wooden handles",
      "Ideal for acrylic, oil, and watercolor painting",
    ],
    specifications: {
      brushTypes: "Round, flat, angled",
      handleMaterial: "Wood",
      bristleMaterial: "Synthetic fibers",
    },
    reviews: [
      {
        id: getRandomId(),
        reviewer: "Sophie Clark",
        reviewerId: getRandomId(),
        rating: 4,
        comment: "Nice quality brushes, perfect for my art projects.",
        date: "2024-05-15",
        image: null,
      },
      {
        id: getRandomId(),
        reviewer: "Michael Anderson",
        reviewerId: getRandomId(),
        rating: 4,
        comment: "Great value set, brushes are well-made and easy to clean.",
        date: "2024-05-20",
        image: null,
      },
    ],
    seller_id: getRandomId(),
    stock: Math.floor(Math.random() * 50) + 10,
  },
  ];
  
  export default Products;
  
  function getRandomId() {
    return Math.floor(Math.random() * 1000) + 1;
  }
        

