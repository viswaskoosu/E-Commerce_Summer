const Categories = [
  "Building Panels & Cladding Materials",
  "Building & Construction Machines",
  "PVC, FRP, HDPE & Other Plastic Pipes",
  "Roofing and False ceiling",
  "Steel Bars, Rods, Plates & Sheets",
  "Wood, Plywood, Veneer & Laminates",
  "Power Tools",
  "Outdoor Power Equipment"
];

export const Products = [
  {
    id: 1,
    title: "Electric Drill Machine 13mm",
    mrp: 2599,
    price: 2499,
    rating: 4.5,
    category: Categories[6],
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
        reviewer: "John Doe",
        rating: 5,
        comment: "Excellent drill, very powerful and reliable.",
        date: "2023-05-15",
      },
      {
        reviewer: "Jane Smith",
        rating: 4,
        comment: "Works well, good value for the price.",
        date: "2023-06-02",
      },
    ],
  },
  {
    id: 2,
    title: "Bosch Professional GSB 180-LI, 18V Cordless Impact Drill Driver, 1.5/ 13 mm with 2 x 2Ah Li Batteries, 1 x GAL 18V-20 Charger & Carrying Case",
    mrp: 10995,
    price: 10595,
    rating: 5,
    category: Categories[6],
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
        reviewer: "Michael Brown",
        rating: 5,
        comment: "Great impact driver, powerful and durable.",
        date: "2023-04-20",
      },
      {
        reviewer: "Emily Wilson",
        rating: 5,
        comment: "Love this drill, very handy and efficient.",
        date: "2023-05-10",
      },
    ],
  },
  {
    id: 3,
    title: "Concrete Mixer",
    mrp: 319.99,
    price: 299.99,
    rating: 4,
    category: Categories[1],
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
        reviewer: "David Miller",
        rating: 4,
        comment: "Works well for small construction projects.",
        date: "2023-03-18",
      },
      {
        reviewer: "Sophia Garcia",
        rating: 4,
        comment: "Reliable mixer, good value for money.",
        date: "2023-04-02",
      },
    ],
  },
  {
    id: 4,
    title: "Circular Saw Machine",
    mrp: 129.99,
    price: 119.99,
    rating: 4,
    category: Categories[6],
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
        reviewer: "Oliver Wilson",
        rating: 4,
        comment: "Good saw for DIY projects at home.",
        date: "2023-02-28",
      },
      {
        reviewer: "Emma Thompson",
        rating: 3,
        comment: "Works fine, but a bit heavy for prolonged use.",
        date: "2023-03-15",
      },
    ],
  },
  {
    id: 5,
    title: "Hammer Drill",
    mrp: 99.99,
    price: 89.99,
    rating: 4,
    category: Categories[6],
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
        reviewer: "Sophie Davis",
        rating: 4,
        comment: "Great hammer drill, very powerful.",
        date: "2023-07-10",
      },
      {
        reviewer: "Ryan Clark",
        rating: 4,
        comment: "Good for DIY projects around the house.",
        date: "2023-07-25",
      },
    ],
  },
  {
    id: 6,
    title: "Angle Grinder",
    mrp: 79.99,
    price: 69.99,
    rating: 4,
    category: Categories[6],
    images: [
      "https://5.imimg.com/data5/ANDROID/Default/2021/3/RU/IL/BW/19592605/product-jpeg-500x500.jpg"
    ],
    description: "Powerful angle grinder for cutting, grinding, and polishing metal and stone.",
    keyFeatures: [
      "Adjustable guard for safety",
      "Side handle for stability",
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
        reviewer: "James Wilson",
        rating: 4,
        comment: "Good grinder for metalworking projects.",
        date: "2023-04-05",
      },
      {
        reviewer: "Ella Brown",
        rating: 4,
        comment: "Works well, no complaints so far.",
        date: "2023-04-18",
      },
    ],
  },
  {
  id: 7,
    title: "Rotary Hammer Drill",
    mrp: 269.99,
    price: 249.99,
    rating: 5,
    category: Categories[1],
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
        reviewer: "Alex Johnson",
        rating: 5,
        comment: "Excellent hammer drill, very powerful and efficient.",
        date: "2023-03-28",
      },
      {
        reviewer: "Mia Davis",
        rating: 5,
        comment: "Perfect for heavy-duty tasks, highly recommended.",
        date: "2023-04-12",
      },
    ],
  },
  {
    id: 8,
    title: "Chain Saw",
    mrp: 179.99,
    price: 159.99,
    rating: 4.5,
    category: Categories[7],
    images: [
      "https://5.imimg.com/data5/HW/CA/MY-5362177/petrol-chain-saw-500x500.jpg"
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
        reviewer: "Jack Wilson",
        rating: 4,
        comment: "Great chain saw, works smoothly and efficiently.",
        date: "2023-06-20",
      },
      {
        reviewer: "Eva Martinez",
        rating: 5,
        comment: "Excellent tool for pruning and cutting trees.",
        date: "2023-07-05",
      },
    ],
  },
  {
    id: 9,
    title: "Pressure Washer",
    mrp: 299.99,
    price: 279.99,
    rating: 4,
    category: Categories[7],
    images: [
      "https://5.imimg.com/data5/KO/MJ/XN/SELLER-65186229/pressure-washer-500x500.jpg"
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
        reviewer: "Sophia Clark",
        rating: 4,
        comment: "Cleans effectively, very satisfied with the performance.",
        date: "2023-08-10",
      },
      {
        reviewer: "Noah Thompson",
        rating: 4,
        comment: "Works well for cleaning my car and driveway.",
        date: "2023-08-18",
      },
    ],
  },
  {
    id: 10,
    title: "Demolition Hammer",
    mrp: 349.99,
    price: 329.99,
    rating: 5,
    category: Categories[6],
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
        reviewer: "Emily White",
        rating: 5,
        comment: "Exceptional demolition hammer, made my job much easier.",
        date: "2023-02-15",
      },
      {
        reviewer: "Jacob Brown",
        rating: 5,
        comment: "Very powerful tool, exceeded my expectations.",
        date: "2023-03-02",
      },
    ],
  },
  {
    id: 11,
    title: "Belt Sander",
    mrp: 119.99,
    price: 109.99,
    rating: 4,
    category: Categories[6],
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
        reviewer: "Olivia Green",
        rating: 4,
        comment: "Great sander, does the job well.",
        date: "2023-05-10",
      },
      {
        reviewer: "Daniel Miller",
        rating: 4,
        comment: "Good value for money, sturdy build.",
        date: "2023-05-18",
      },
    ],
  },
  {
    id: 12,
    title: "Wall Chaser",
    mrp: 299.99,
    price: 289.99,
    rating: 4,
    category: Categories[6],
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
        reviewer: "Sophie Taylor",
        rating: 4,
        comment: "Efficient tool, great for cutting grooves in concrete.",
        date: "2023-06-28",
      },
      {
        reviewer: "Michael Harris",
        rating: 4,
        comment: "Helped me a lot with my renovation project.",
        date: "2023-07-05",
      },
    ],
  },
  {
    id: 13,
    title: "Portable Generator",
    mrp: 519.99,
    price: 499.99,
    rating: 5,
    category: Categories[7],
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
        reviewer: "Emma Wilson",
        rating: 5,
        comment: "Reliable generator, saved me during a power outage.",
        date: "2023-01-20",
      },
      {
        reviewer: "James Thompson",
        rating: 5,
        comment: "Easy to use, starts up quickly when needed.",
        date: "2023-02-05",
      },
    ],
  },
  {
    id: 14,
    title: "Pipe Threader",
    mrp: 419.99,
    price: 399.99,
    rating: 4,
    category: Categories[1],
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
        reviewer: "Sophia Martinez",
        rating: 4,
        comment: "Efficient threader, works well with different pipe materials.",
        date: "2023-03-15",
      },
      {
        reviewer: "William Davis",
        rating: 4,
        comment: "Good quality threader, saves a lot of time.",
        date: "2023-03-25",
      },
    ],
  },
  {
    id: 15,
    title: "Welding Machine",
    mrp: 819.99,
    price: 799.99,
    rating: 5,
    category: Categories[1],
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
        reviewer: "Sophia White",
        rating: 5,
        comment: "Excellent welding machine, highly recommended.",
        date: "2023-04-10",
      },
      {
        reviewer: "John Anderson",
        rating: 5,
        comment: "Works flawlessly, very satisfied with the results.",
        date: "2023-04-20",
      },
    ],
  },
];
export default Products;

