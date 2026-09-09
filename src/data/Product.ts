export interface Product {
  id: number;
  name: string;
  price: number;

  category: string;

  description: string;
  image: string;
}

export const AcneProducts: Product[] = [
  {
    id: 1,
    name: "Gentle Acne Cleanser",
    price: 15,
    category: "acne-care",
    image:
      "https://i.pinimg.com/736x/25/9b/35/259b3537412ec2bbef54d5c65d8dfe31.jpg",
    description: "A gentle cleanser for acne-prone skin.",
  },
  {
    id: 2,
    name: "Acne Repair Serum",
    price: 20,
    category: "acne-care",
    image:
      "https://i.pinimg.com/736x/df/61/f7/df61f7bcc23b2bb7e54d4eca963d7d9b.jpg",
    description: "A lightweight serum for blemish-prone skin.",
  },
  {
    id: 3,
    name: "Acne Moisturizer",
    price: 18,
    category: "acne-care",
    image:
      "https://i.pinimg.com/736x/ef/55/b7/ef55b79ee708c0faaa43f45ece58fe0e.jpg",
    description: "A lightweight moisturizer for acne-prone skin.",
  },
  {
    id: 4,
    name: "Acne Spot Treatment",
    price: 12,
    category: "acne-care",
    image:
      "https://i.pinimg.com/736x/16/b3/76/16b376dac7e46cbbdcad843c63132c8e.jpg",
    description: "A targeted treatment for occasional breakouts.",
  },
  {
    id: 5,
    name: "Clarifying Acne Toner",
    price: 16,
    category: "acne-care",
    image:
      "https://i.pinimg.com/736x/fd/10/ed/fd10eda6aec113e8911aad8fa73749aa.jpg",
    description: "A refreshing toner for oily and acne-prone skin.",
  },
  {
    id: 6,
    name: "Blemish Control Serum",
    price: 22,
    category: "acne-care",
    image:
      "https://i.pinimg.com/1200x/7e/ed/6b/7eed6be093fca1cdc154194dba6307cb.jpg",
    description: "A lightweight serum designed for blemish-prone skin.",
  },
  {
    id: 7,
    name: "Tea Tree Acne Gel",
    price: 14,
    category: "acne-care",
    image:
      "https://i.pinimg.com/736x/8a/53/09/8a53094309c0faaee91eaaf49e35b50b.jpg",
    description: "A soothing gel for targeted acne care.",
  },
  {
    id: 8,
    name: "Acne Foaming Cleanser",
    price: 17,
    category: "acne-care",
    image:
      "https://i.pinimg.com/736x/e4/25/2a/e4252a2ac9cc450bb822dd4f51702872.jpg",
    description: "A foaming cleanser that gently removes excess oil.",
  },
  {
    id: 9,
    name: "Pore Refining Serum",
    price: 21,
    category: "acne-care",
    image:
      "https://i.pinimg.com/736x/ec/74/c7/ec74c79e87337db3037f46fbecab8a5b.jpg",
    description: "A lightweight serum to help improve the appearance of pores.",
  },
  {
    id: 10,
    name: "Oil Control Moisturizer",
    price: 19,
    category: "acne-care",
    image:
      "https://i.pinimg.com/736x/95/3c/6d/953c6d7ed6ff20b624b33666153ec456.jpg",
    description: "A lightweight moisturizer for oily and acne-prone skin.",
  },
  {
    id: 11,
    name: "Acne Calming Mask",
    price: 18,
    category: "acne-care",
    image:
      "https://i.pinimg.com/736x/c5/e7/0a/c5e70a514723845b38d8c0af40f01c0a.jpg",
    description: "A calming face mask for stressed and blemish-prone skin.",
  },
  {
    id: 12,
    name: "Purifying Clay Mask",
    price: 20,
    category: "acne-care",
    image:
      "https://i.pinimg.com/736x/78/9e/32/789e32d897a95e8c604bd4513ff1a398.jpg",
    description: "A purifying clay mask that helps absorb excess oil.",
  },
];

export const HydrationProduct: Product[] = [
  {
    id: 13,
    name: "Hydrating Cleanser",
    category: "hydration",
    price: 16,
    image:
      "https://i.pinimg.com/736x/00/25/17/002517c092a54d98d2d8d2fe9312a44f.jpg",
    description: "A gentle cleanser for hydrated skin.",
  },
  {
    id: 14,
    name: "Hyaluronic Acid Serum",
    category: "hydration",
    price: 22,
    image:
      "https://i.pinimg.com/736x/55/57/a1/5557a14e9fd24b607d6c543bad09d331.jpg",
    description: "A lightweight serum that helps keep skin deeply hydrated.",
  },
  {
    id: 15,
    name: "Water Gel Moisturizer",
    category: "hydration",
    price: 19,
    image:
      "https://i.pinimg.com/736x/16/e2/05/16e2056a2a2e14e739f63c9c5178633e.jpg",
    description: "A refreshing gel moisturizer for soft and hydrated skin.",
  },
  {
    id: 16,
    name: "Hydrating Face Toner",
    category: "hydration",
    price: 15,
    image:
      "https://i.pinimg.com/736x/29/0b/08/290b08b342c8d4111eefc42816824a55.jpg",
    description: "A gentle toner that helps replenish moisture.",
  },
  {
    id: 17,
    name: "Deep Hydration Cream",
    category: "hydration",
    price: 24,
    image:
      "https://i.pinimg.com/736x/d9/fc/5a/d9fc5a37f79d98c7a6b2b34a43b479e7.jpg",
    description: "A rich cream designed to provide long-lasting hydration.",
  },
  {
    id: 18,
    name: "Hydrating Facial Mist",
    category: "hydration",
    price: 13,
    image:
      "https://i.pinimg.com/736x/bd/ea/ef/bdeaefb99aecadddb2a9ed1fba990d86.jpg",
    description: "A refreshing facial mist for an instant boost of hydration.",
  },
  {
    id: 19,
    name: "Ceramide Barrier Cream",
    category: "hydration",
    price: 26,
    image:
      "https://i.pinimg.com/736x/de/02/d0/de02d00e5797aaddae1fc2daa6f7b575.jpg",
    description: "A nourishing cream that helps support the skin barrier.",
  },
  {
    id: 20,
    name: "Hydrating Sleeping Mask",
    category: "hydration",
    price: 21,
    image:
      "https://i.pinimg.com/736x/18/49/5d/18495deba52da0a5712a09bb16f514aa.jpg",
    description: "An overnight mask that leaves skin feeling soft and moisturized.",
  },
  {
    id: 21,
    name: "Aloe Hydration Gel",
    category: "hydration",
    price: 14,
    image:
      "https://i.pinimg.com/736x/c2/21/2d/c2212d3bd0a404e67452df94e3c0e140.jpg",
    description: "A soothing aloe gel that helps refresh and hydrate the skin.",
  },
  {
    id: 22,
    name: "Moisture Boost Essence",
    category: "hydration",
    price: 23,
    image:
      "https://i.pinimg.com/736x/6c/fe/fe/6cfefe4bef1bda531d5069117abf2915.jpg",
    description: "A lightweight essence that provides a boost of moisture.",
  },
  {
    id: 23,
    name: "Hydrating Eye Cream",
    category: "hydration",
    price: 20,
    image:
      "https://i.pinimg.com/736x/3e/30/1e/3e301ebb3bc7af25dbfa0d893d2da1eb.jpg",
    description: "A gentle eye cream for the delicate eye area.",
  },
  {
    id: 24,
    name: "Complete Hydration Care Set",
    category: "hydration",
    price: 58,
    image:
      "https://i.pinimg.com/736x/5c/aa/28/5caa284c3479a6a9c25fda145eea5d21.jpg",
    description: "A complete skincare set designed for a simple hydration routine.",
  },
];

export const Brighteningproduct: Product[] = [
  {
    id: 25,
    name: "Brightening Care Cleanser",
    category: "brightening",
    price: 15,
    image:
      "https://i.pinimg.com/736x/fa/10/a2/fa10a2360bc7dce5ee02922778be40c9.jpg",
    description: "A gentle cleanser that helps brighten and refresh the skin.",
  },
  {
    id: 26,
    name: "Vitamin C Brightening Serum",
    category: "brightening",
    price: 22,
    image:
      "https://i.pinimg.com/736x/43/d8/70/43d87058f221b021edc11d370ff0c072.jpg",
    description: "A lightweight serum designed to improve skin radiance.",
  },
  {
    id: 27,
    name: "Glow Boost Moisturizer",
    category: "brightening",
    price: 20,
    image:
      "https://i.pinimg.com/736x/f5/36/78/f5367865b6d04c1ddcc5537995288ee7.jpg",
    description: "A nourishing moisturizer for soft and glowing skin.",
  },
  {
    id: 28,
    name: "Brightening Face Toner",
    category: "brightening",
    price: 16,
    image:
      "https://i.pinimg.com/736x/f2/62/b2/f262b298ed89aaf493688961d9fcb121.jpg",
    description: "A refreshing toner that helps improve the appearance of dull skin.",
  },
  {
    id: 29,
    name: "Radiance Essence",
    category: "brightening",
    price: 21,
    image:
      "https://i.pinimg.com/736x/a1/be/0f/a1be0f300312557ffd299be6b8c206b6.jpg",
    description: "A lightweight essence that helps give skin a healthy-looking glow.",
  },
  {
    id: 30,
    name: "Niacinamide Glow Serum",
    category: "brightening",
    price: 19,
    image:
      "https://i.pinimg.com/736x/e2/79/6a/e2796a0087b6a9f69cca2cd17590caaf.jpg",
    description: "A gentle serum that helps improve uneven-looking skin tone.",
  },
  {
    id: 31,
    name: "Brightening Eye Cream",
    category: "brightening",
    price: 18,
    image:
      "https://i.pinimg.com/736x/f7/19/25/f71925f18298ff11627e5559e7360625.jpg",
    description: "A lightweight eye cream for a refreshed-looking eye area.",
  },
  {
    id: 32,
    name: "Glow Repair Cream",
    category: "brightening",
    price: 24,
    image:
      "https://i.pinimg.com/736x/71/a9/f3/71a9f349c4d615613f97a74176c2b927.jpg",
    description: "A nourishing cream that helps restore a radiant-looking complexion.",
  },
  {
    id: 33,
    name: "Rice Brightening Mask",
    category: "brightening",
    price: 17,
    image:
      "https://i.pinimg.com/736x/22/be/2d/22be2db082cdfc9738ceb5c98ce85680.jpg",
    description: "A gentle face mask that leaves skin feeling soft and refreshed.",
  },
  {
    id: 34,
    name: "Brightening Facial Mist",
    category: "brightening",
    price: 14,
    image:
      "https://i.pinimg.com/736x/04/12/84/041284ea38ddacb6222ac7189c9089f6.jpg",
    description:
      "A refreshing mist that gives skin a quick boost of hydration and radiance.",
  },
  {
    id: 35,
    name: "Dark Spot Correcting Serum",
    category: "brightening",
    price: 25,
    image:
      "https://i.pinimg.com/736x/a3/d4/b7/a3d4b7135f17b080978a9332f262c555.jpg",
    description:
      "A targeted serum designed to improve the appearance of dark spots.",
  },
  {
    id: 36,
    name: "Complete Brightening Care Set",
    category: "brightening",
    price: 56,
    image:
      "https://i.pinimg.com/1200x/8c/93/07/8c930721bedc409c1f5cc3c0a6604921.jpg",
    description: "A complete skincare set for a simple brightening routine.",
  },
];

export const Suncareproduct: Product[] = [
  {
    id: 37,
    name: "Complete Sun Care Set",
    category: "sun-care",
    price: 56,
    image:
      "https://i.pinimg.com/736x/ef/27/2d/ef272d07c8b3dec14c8e19c543b71225.jpg",
    description: "A complete skincare set for daily sun protection.",
  },
  {
    id: 38,
    name: "Daily Sunscreen SPF 50",
    category: "sun-care",
    price: 20,
    image:
      "https://i.pinimg.com/736x/9f/f4/17/9ff417f857cbb124c589badcbd08a268.jpg",
    description: "A lightweight sunscreen for everyday UV protection.",
  },
  {
    id: 39,
    name: "Ultra Light Sunscreen SPF 50+",
    category: "sun-care",
    price: 23,
    image:
      "https://i.pinimg.com/736x/56/60/66/56606686cb8bd72813c0c55d96be7435.jpg",
    description: "A lightweight sunscreen that feels comfortable on the skin.",
  },
  {
    id: 40,
    name: "Hydrating Sunscreen SPF 50",
    category: "sun-care",
    price: 22,
    image:
      "https://i.pinimg.com/736x/8f/e6/31/8fe631c1c89d3d9b0a440f7e87de5252.jpg",
    description:
      "A hydrating sunscreen that helps protect and moisturize the skin.",
  },
  {
    id: 41,
    name: "Matte Finish Sunscreen",
    category: "sun-care",
    price: 21,
    image:
      "https://i.pinimg.com/736x/67/a0/01/67a00184afaa1e00d284c155835511ae.jpg",
    description: "A lightweight sunscreen with a smooth matte finish.",
  },
  {
    id: 42,
    name: "Mineral Sunscreen SPF 50",
    category: "sun-care",
    price: 24,
    image:
      "https://i.pinimg.com/736x/3d/b9/50/3db950b8995039aa85dcecefb8190f31.jpg",
    description: "A gentle mineral sunscreen for daily UV protection.",
  },
  {
    id: 43,
    name: "Sunscreen Stick SPF 50",
    category: "sun-care",
    price: 18,
    image:
      "https://i.pinimg.com/736x/25/c6/d3/25c6d3d0789ec4606a3e4f26ecc6bc07.jpg",
    description: "A convenient sunscreen stick for easy reapplication.",
  },
  {
    id: 44,
    name: "Sun Protection Face Mist",
    category: "sun-care",
    price: 19,
    image:
      "https://i.pinimg.com/736x/0f/97/4c/0f974c8afa3f3371078954bc29e7de8f.jpg",
    description: "A refreshing face mist designed for convenient sun care.",
  },
  {
    id: 45,
    name: "Daily UV Defense Cream",
    category: "sun-care",
    price: 25,
    image:
      "https://i.pinimg.com/736x/09/37/13/093713d01adec5335465874395cec7d2.jpg",
    description: "A daily cream that helps protect skin from harmful UV rays.",
  },
  {
    id: 46,
    name: "After Sun Cooling Gel",
    category: "sun-care",
    price: 16,
    image:
      "https://i.pinimg.com/1200x/2c/4f/58/2c4f580e8b5df8d6de4671b017188685.jpg",
    description: "A refreshing cooling gel for skin after sun exposure.",
  },
  {
    id: 47,
    name: "Sun Repair Sleeping Mask",
    category: "sun-care",
    price: 23,
    image:
      "https://i.pinimg.com/736x/6a/79/48/6a7948c70a3c107642e6b1a9d8f1a7ac.jpg",
    description:
      "An overnight mask that helps soothe skin after a day outdoors.",
  },
  {
    id: 48,
    name: "Travel Sun Protection Kit",
    category: "sun-care",
    price: 38,
    image:
      "https://i.pinimg.com/736x/76/b0/08/76b0089894211ebf52b16b9573c7e317.jpg",
    description: "A convenient sun care kit for protection while traveling.",
  },
];
// ======================================================
// LIP CARE PRODUCTS
// ======================================================

export const LipCareProducts: Product[] = [
  {
    id: 49,
    name: "Hydrating Lip Balm",
    price: 10,
    category: "lip-care",
    image:
      "https://i.pinimg.com/736x/58/63/93/586393c2897dad720da216068e9349b6.jpg",
    description: "A nourishing lip balm that helps keep lips soft and hydrated.",
  },

  {
    id: 50,
    name: "YSL Lip balm",
    price: 12,
    category: "lip-care",
    image:
      "https://i.pinimg.com/736x/e3/0b/5e/e30b5e683749445c4a8bc93f803b2b86.jpg",
    description: "A soft strawberry lip balm for smooth and moisturized lips.",
  },

  {
    id: 51,
    name: "Lip Sleeping Mask",
    price: 18,
    category: "lip-care",
    image:
      "https://i.pinimg.com/736x/20/b4/cc/20b4ccb47ee227b02fa516e0cfbb2848.jpg",
    description: "An overnight lip mask designed to nourish dry lips.",
  },

  {
    id: 52,
    name: "Lip Scrub",
    price: 14,
    category: "lip-care",
    image:
      "https://i.pinimg.com/736x/a8/5b/7a/a85b7a0e0fd61de482c7b668c8308c4d.jpg",
    description: "A gentle lip scrub that helps remove dry and flaky skin.",
  },

  {
    id: 53,
    name: "Lip Repair Treatment",
    price: 16,
    category: "lip-care",
    image:
      "https://i.pinimg.com/736x/ef/0c/98/ef0c986928ea33fcc46374a72349993d.jpg",
    description: "A rich treatment for dry and uncomfortable lips.",
  },

  {
    id: 54,
    name: "Daily Lip Care Set",
    price: 32,
    category: "lip-care",
    image:
      "https://i.pinimg.com/736x/20/69/4b/20694b4338ec3fbbb8f23d95c68cface.jpg",
    description: "A simple daily lip care set for soft and healthy-looking lips.",
  },
  {
  id: 73,
  name: "Berry Lip Oil",
  price: 15,
  category: "lip-care",
  image: "https://i.pinimg.com/736x/6d/7a/37/6d7a37a99990b318dbc4205d6d2b2d04.jpg",
  description: "A lightweight lip oil that helps keep lips soft and glossy.",
},
{
  id: 74,
  name: "Vanilla Lip Mask",
  price: 19,
  category: "lip-care",
  image: "https://i.pinimg.com/1200x/a8/d6/9e/a8d69eeb37a11edd0f0fa7ad2aa7601f.jpg",
  description: "A nourishing overnight mask for soft and moisturized lips.",
},
{
  id: 75,
  name: "Peach Lip Balm",
  price: 11,
  category: "lip-care",
  image: "https://i.pinimg.com/736x/a8/9c/5c/a89c5c5953273ee8735f2621e8359aae.jpg",
  description: "A moisturizing lip balm with a soft peach-inspired finish.",
},
{
  id: 76,
  name: "Lip Hydration Treatment",
  price: 17,
  category: "lip-care",
  image: "https://i.pinimg.com/736x/5c/8c/f1/5c8cf17585d1e59c1b5b35afb83cd76f.jpg",
  description: "A rich treatment designed to improve the feel of dry lips.",
},
{
  id: 77,
  name: "Nourishing Lip Butter",
  price: 16,
  category: "lip-care",
  image: "https://i.pinimg.com/736x/b0/c4/78/b0c4785ea04580165dcfa21b6662dda0.jpg",
  description: "A creamy lip butter that helps maintain soft and smooth lips.",
},
{
  id: 78,
  name: "Lip Care Essentials",
  price: 35,
  category: "lip-care",
  image: "https://i.pinimg.com/736x/d2/c3/1f/d2c31fa77d0b0288cb77eef47cc24460.jpg",
  description: "A convenient collection of everyday lip care essentials.",
},
];


// ======================================================
// BODY CARE PRODUCTS
// ======================================================

export const BodyCareProducts: Product[] = [
  {
    id: 55,
    name: "NIVEA Body Lotion",
    price: 18,
    category: "body-care",
    image:
      "https://i.pinimg.com/736x/b5/09/73/b509733d9a04975f49d550f20a6c7586.jpg",
    description: "A nourishing lotion that helps keep body skin soft and smooth.",
  },

  {
    id: 56,
    name: "Hydrating Body Cream",
    price: 20,
    category: "body-care",
    image:
      "https://i.pinimg.com/736x/eb/6b/d9/eb6bd94eb845ff282b238fceb998152b.jpg",
    description: "A rich body cream designed to provide long-lasting moisture.",
  },

  {
    id: 57,
    name: "Body Moisturizing Lotion",
    price: 17,
    category: "body-care",
    image:
      "https://i.pinimg.com/736x/fd/41/f4/fd41f4c26cfc102c7d2e4adde0e16299.jpg",
    description: "A lightweight lotion for everyday body hydration.",
  },

  {
    id: 58,
    name: "Soothing Body Cream",
    price: 21,
    category: "body-care",
    image:
      "https://i.pinimg.com/736x/05/0b/1b/050b1b58f8059876ae01e7918c91e89f.jpg",
    description: "A gentle cream that helps soothe and moisturize dry skin.",
  },

  {
    id: 59,
    name: "Olay body lotion",
    price: 23,
    category: "body-care",
    image:
      "https://i.pinimg.com/1200x/dc/b9/1e/dcb91e2a92ed09d9d27adb222bc90cb2.jpg",
    description: "A nourishing lotion for dry and rough body skin.",
  },

  {
    id: 60,
    name: "Vaseline oil",
    price: 45,
    category: "body-care",
    image:
      "https://i.pinimg.com/736x/61/06/47/6106471568b2186f17a45ec501efabb2.jpg",
    description: "A complete body care set for a simple daily routine.",
  },
  {
  id: 79,
  name: "Gluta-Hya",
  price: 19,
  category: "body-care",
  image: "https://i.pinimg.com/736x/f1/0c/62/f10c62bf71e7abc4155971256c458b6f.jpg",
  description: "A nourishing body lotion that helps leave skin soft and smooth.",
},
{
  id: 80,
  name: "Coconut Body Cream",
  price: 21,
  category: "body-care",
  image: "https://i.pinimg.com/736x/5f/35/15/5f35158dd472d295f4a7716a3752d54d.jpg",
  description: "A rich cream that provides comfortable everyday body hydration.",
},
{
  id: 81,
  name: "Body Butter",
  price: 24,
  category: "body-care",
  image: "https://i.pinimg.com/736x/d3/0d/e7/d30de7c39aa672624cf8f60072746c51.jpg",
  description: "A rich body butter for dry and rough-feeling skin.",
},
{
  id: 82,
  name: "Silky Body Lotion",
  price: 18,
  category: "body-care",
  image: "https://i.pinimg.com/1200x/74/7c/62/747c62a51c98615df93dd312b2a8493b.jpg",
  description: "A lightweight lotion that leaves the skin feeling soft and silky.",
},
{
  id: 83,
  name: "Body Repair Cream",
  price: 23,
  category: "body-care",
  image: "https://i.pinimg.com/736x/e3/04/ab/e304abd3d5ed622a946d0e6d7c98f4e6.jpg",
  description: "A nourishing cream for dry and rough body skin.",
},
{
  id: 84,
  name: "Body Care Essentials Set",
  price: 42,
  category: "body-care",
  image: "https://i.pinimg.com/736x/fa/e4/5e/fae45e2cd50558537962bc012016240a.jpg",
  description: "A simple body care set for an easy everyday routine.",
},
];


// ======================================================
// CLEANSER PRODUCTS
// ======================================================

export const CleanserProducts: Product[] = [
  {
    id: 61,
    name: "Gentle Facial Cleanser",
    price: 15,
    category: "cleansers",
    image:
      "https://i.pinimg.com/736x/25/9b/35/259b3537412ec2bbef54d5c65d8dfe31.jpg",
    description: "A gentle cleanser that removes dirt without drying the skin.",
  },

  {
    id: 62,
    name: "Foaming Facial Cleanser",
    price: 17,
    category: "cleansers",
    image:
      "https://i.pinimg.com/736x/e4/25/2a/e4252a2ac9cc450bb822dd4f51702872.jpg",
    description: "A refreshing foaming cleanser for everyday use.",
  },

  {
    id: 63,
    name: "Hydrating Cleanser",
    price: 16,
    category: "cleansers",
    image:
      "https://i.pinimg.com/736x/00/25/17/002517c092a54d98d2d8d2fe9312a44f.jpg",
    description: "A hydrating cleanser that helps maintain skin moisture.",
  },

  {
    id: 64,
    name: "Deep Cleansing Gel",
    price: 18,
    category: "cleansers",
    image:
      "https://i.pinimg.com/736x/ef/55/b7/ef55b79ee708c0faaa43f45ece58fe0e.jpg",
    description: "A refreshing gel cleanser that helps remove excess oil.",
  },

  {
    id: 65,
    name: "Purifying Cleanser",
    price: 19,
    category: "cleansers",
    image:
      "https://i.pinimg.com/736x/8a/53/09/8a53094309c0faaee91eaaf49e35b50b.jpg",
    description: "A purifying cleanser for fresh and clean-looking skin.",
  },

  {
    id: 66,
    name: "Daily Cleanse ",
    price: 30,
    category: "cleansers",
    image:
      "https://i.pinimg.com/1200x/01/2d/48/012d48fa3dbf5f2eaf5fbc7f89a5426f.jpg",
    description: "A simple cleansing set for your everyday skincare routine.",
  },
  {
  id: 85,
  name: "Gentle Gel Cleanser",
  price: 16,
  category: "cleansers",
  image: "https://i.pinimg.com/736x/33/b6/cc/33b6cc7b07d119540f98dd5875320c3d.jpg",
  description: "A gentle gel cleanser that removes daily impurities.",
},
{
  id: 86,
  name: "Low pH Facial Cleanser",
  price: 18,
  category: "cleansers",
  image: "https://i.pinimg.com/736x/ca/aa/e6/caaae6dbfeb0bc4ee6d425a1a5f87275.jpg",
  description: "A mild low-pH cleanser for a fresh and comfortable cleanse.",
},
{
  id: 87,
  name: "Creamy Hydrating Cleanser",
  price: 17,
  category: "cleansers",
  image: "https://i.pinimg.com/736x/f6/24/1e/f6241e7da8cdaaac9b1b12fa8986d7cd.jpg",
  description: "A creamy cleanser designed to help maintain skin moisture.",
},
{
  id: 88,
  name: "Purifying Gel Cleanser",
  price: 19,
  category: "cleansers",
  image: "https://i.pinimg.com/736x/24/02/8e/24028ea17ebf7ff5d3b7474d578c83a7.jpg",
  description: "A refreshing gel cleanser for oily and combination skin.",
},
{
  id: 89,
  name: "Daily Foam Cleanser",
  price: 15,
  category: "cleansers",
  image: "https://i.pinimg.com/736x/88/cd/a0/88cda0a841abc224a07c6b3bcd58fdfd.jpg",
  description: "A soft foaming cleanser for everyday facial cleansing.",
},
{
  id: 90,
  name: "Complete Cleansing Set",
  price: 34,
  category: "cleansers",
  image: "https://i.pinimg.com/736x/d0/65/09/d0650910764d6dd063ee1cb839c7daa2.jpg",
  description: "A convenient cleansing set for a simple daily skincare routine.",
},
];


// ======================================================
// SERUM PRODUCTS
// ======================================================

export const SerumProducts: Product[] = [
  {
    id: 67,
    name: "Vitamin C Brightening Serum",
    price: 22,
    category: "serums",
    image:
      "https://i.pinimg.com/736x/43/d8/70/43d87058f221b021edc11d370ff0c072.jpg",
    description: "A lightweight serum designed to support brighter-looking skin.",
  },

  {
    id: 68,
    name: "Hydrating Face Serum",
    price: 21,
    category: "serums",
    image:
      "https://i.pinimg.com/736x/55/57/a1/5557a14e9fd24b607d6c543bad09d331.jpg",
    description: "A lightweight serum that helps keep skin hydrated.",
  },

  {
    id: 69,
    name: "Niacinamide Serum",
    price: 20,
    category: "serums",
    image:
      "https://i.pinimg.com/736x/e2/79/6a/e2796a0087b6a9f69cca2cd17590caaf.jpg",
    description: "A gentle serum designed for a smoother and more even-looking complexion.",
  },

  {
    id: 70,
    name: "Glow Boost Serum",
    price: 23,
    category: "serums",
    image:
      "https://i.pinimg.com/736x/ff/90/ac/ff90ac01e7954a37d47b19a085d26e67.jpg",
    description: "A lightweight serum that helps enhance your skin's natural glow.",
  },

  {
    id: 71,
    name: "Blemish Control Serum",
    price: 22,
    category: "serums",
    image:
      "https://i.pinimg.com/1200x/7e/ed/6b/7eed6be093fca1cdc154194dba6307cb.jpg",
    description: "A lightweight serum for blemish-prone skin.",
  },

  {
    id: 72,
    name: "Radiance Serum",
    price: 24,
    category: "serums",
    image:
      "https://i.pinimg.com/736x/a1/be/0f/a1be0f300312557ffd299be6b8c206b6.jpg",
    description: "A nourishing serum designed to support radiant-looking skin.",
  },
  {
  id: 91,
  name: "Hyaluronic Acid Serum",
  price: 22,
  category: "serums",
  image: "https://i.pinimg.com/736x/15/86/7e/15867eb5d8f75dada9815e01ca2de8c5.jpg",
  description: "A hydrating serum that helps skin feel soft and moisturized.",
},
{
  id: 92,
  name: "Vitamin C Glow Serum",
  price: 24,
  category: "serums",
  image: "https://i.pinimg.com/736x/94/bd/fb/94bdfb7bee5f059c8f3e12fb3117b24c.jpg",
  description: "A lightweight serum designed to support brighter-looking skin.",
},
{
  id: 93,
  name: "Niacinamide Balance Serum",
  price: 21,
  category: "serums",
  image: "https://i.pinimg.com/736x/0a/f1/da/0af1da30c35fdb540f8fbbc64432f2cd.jpg",
  description: "A lightweight serum for a smoother and more balanced-looking complexion.",
},
{
  id: 94,
  name: "Radiance Boost Serum",
  price: 23,
  category: "serums",
  image: "https://i.pinimg.com/736x/ad/f0/12/adf01293d8e35ba5e1938cd3a3cba93c.jpg",
  description: "A nourishing serum designed to enhance the skin's natural-looking radiance.",
},
{
  id: 95,
  name: "Blemish Care Serum",
  price: 22,
  category: "serums",
  image: "https://i.pinimg.com/736x/29/ef/3c/29ef3cd2228bf6ba762ac7223ebc43df.jpg",
  description: "A lightweight serum designed for blemish-prone skin.",
},
{
  id: 96,
  name: "Glow Repair Serum",
  price: 25,
  category: "serums",
  image: "https://i.pinimg.com/736x/f3/80/b8/f380b869c04528764492aec9548cce8a.jpg",
  description: "A nourishing serum that supports a healthy and radiant-looking complexion.",
},
];