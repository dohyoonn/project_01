/**
 * =========================================================================
 * FROM RECIPE TO RESOURCE - WEBSITE DYNAMIC CONTENT DATA (ALL 24 REAL DISHES)
 * =========================================================================
 * This file stores all text, stories, images, and culinary details dynamically.
 * 수정하려는 요리 사진과 텍스트를 이 파일에서 관리합니다.
 */

const CONFIG = {
  // Brand Header & General Information
  branding: {
    title: "From Recipe to Resource",
    subtitle: "Intersecting Culinary Arts & Systems Engineering",
    studentName: "",
    contactEmail: "dohyoonn@gmail.com",
    admissionsCohort: "Class of 2030 Portfolio",
    tagline: "How molecular structure, agricultural supply chains, and systems engineering transform culinary ingredients into global sustainable resources."
  },

  // 5-Stage Story Timeline: Origin -> Exploration -> Engineering Connection -> Systems Thinking -> Future Direction
  storyTimeline: [
    {
      id: "origin",
      stage: "01",
      title: "Origin",
      subtitle: "The Kitchen as a Micro-Lab",
      icon: "fa-fire-burner",
      description: "My journey started with a simple passion for cooking. I began baking bread and searing meats at home, captivated by how minor changes in heat, acidity, and timing could dramatically alter the flavor profile and texture of a dish. The kitchen felt less like a chore and more like an open-ended laboratory."
    },
    {
      id: "exploration",
      stage: "02",
      title: "Exploration",
      subtitle: "Scientific Recipe Design",
      icon: "fa-flask",
      description: "Instead of following traditional recipes blindly, I began systematically altering variables. I documented hydration ratios in sourdough fermentation, measured internal temperature curves in proteins, and studied how starch gelatinization dictates noodle elasticity. Cooking became a playground of scientific experimentation."
    },
    {
      id: "engineering",
      stage: "03",
      title: "Engineering Connection",
      subtitle: "Bridging Thermodynamics & Chemistry",
      icon: "fa-atom",
      description: "I realized the transformations on the plate are governed by fundamental engineering principles. Heat transfer profiles control protein denaturation; polymer chemistry dictates gluten matrix formation; and mass transfer rules flavor absorption during brining. I realized that a recipe is simply a process flow diagram."
    },
    {
      id: "systems",
      stage: "04",
      title: "Systems Thinking",
      subtitle: "Expanding Beyond the Plate",
      icon: "fa-network-wired",
      description: "This physical understanding forced me to look outward. Where did these ingredients come from? I began tracing agricultural supply chains, calculating the water footprint of wheat monoculture, and analyzing aquaculture feed efficiency. The recipe was no longer isolated—it was connected to global resource systems."
    },
    {
      id: "future",
      stage: "05",
      title: "Future Direction",
      subtitle: "Engineering Sustainable Food Resources",
      icon: "fa-seedling",
      description: "My goal is to pursue Environmental & Systems Engineering. By combining my intimate understanding of raw food materials with systems optimization, I want to design zero-waste agricultural pipelines, improve regional supply chain resilience, and engineer closed-loop food systems that feed populations sustainably."
    }
  ],

  // Culinary Portfolio (Menu 1) - ALL 28 DISHES POPULATED FROM USER'S REAL IMAGES
  portfolio: [
    {
      id: "pork_onions",
      name: "Skillet-Seared Pork Belly with Caramelized Onions",
      category: "Proteins",
      image: "images/20201103_125155.jpg",
      summary: "Analyzing lipid rendering and sugar-protein interaction in high-heat skillet-seared pork belly slices.",
      details: {
        ingredients: [
          { name: "Sliced Pork Belly", details: "High fat content for rendering and frying" },
          { name: "Sweet White Onion", details: "Rich in sucrose and fructose for browning" }
        ],
        selectionReason: "This dish is selected to study the browning rate of onions cooked in animal lard compared to plant oils.",
        freshness: "Pork kept cold to maintain firm fat layers; onion sliced right before skilleting.",
        cookingMethod: "Pork rendered in a hot skillet at 180°C until fat runs clear, onions added and cooked in the hot lard until caramelized.",
        lessonsLearned: "Onions cook faster and taste sweeter when caramelized in rendered animal fat due to the lard's high thermal stability and fat-soluble aroma extraction."
      }
    },
    {
      id: "garlic_steak",
      name: "Garlic Butter Basted Ribeye Steak",
      category: "Proteins",
      image: "images/20201104_122049.jpg",
      summary: "Studying low-temperature core cooking combined with high-heat butter basting for thick beef fillets.",
      details: {
        ingredients: [
          { name: "Ribeye Steak Fillet", details: "Thick cut with high marble fat" },
          { name: "Garlic & Butter", details: "Aromatics and convection fat" }
        ],
        selectionReason: "Ribeye steak provides a thick cut that allows studying the thermal gradient from the hot pan surface to the cold steak core.",
        freshness: "Sourced fresh, dry-aged on paper towels for 12 hours in the fridge to dry the surface.",
        cookingMethod: "Pan-seared at 190°C on both sides, then butter and garlic are added, basting the top continuously until core reaches 54°C.",
        lessonsLearned: "Butter basting acts as a liquid heat jacket, distributing thermal energy across the top surface via convection, which ensures even cooking throughout the steak."
      }
    },
    {
      id: "lamb_chops",
      name: "Pan-Seared Lamb Chops with Roasted Garlic",
      category: "Proteins",
      image: "images/20201105_130903.jpg",
      summary: "Investigating fat rendering and connective tissue softening in bone-in lamb rib chops.",
      details: {
        ingredients: [
          { name: "Bone-in Lamb Chops", details: "Intramuscular fat and bone-in structure" },
          { name: "Garlic & Rosemary", details: "Terpene aromatics to mask gamey notes" }
        ],
        selectionReason: "Bone-in lamb chops contain high amounts of connective collagen around the rib bone, requiring careful heat distribution.",
        freshness: "Sourced fresh and patted dry to ensure clean contact with the pan.",
        cookingMethod: "Seared in a cast-iron skillet at 180°C, holding the chops on their fat caps first to render out the lamb tallow before searing the meat.",
        lessonsLearned: "Rendering the fat cap first provides a high-heat cooking oil that cooks the rest of the meat, while browning the bone enhances the overall savory flavor."
      }
    },
    {
      id: "tornado_omurice",
      name: "Tornado Omelet Omurice with Demi-Glace",
      category: "Proteins",
      image: "images/20210213_185245.jpg",
      summary: "Tuning egg protein gelation kinetics and mechanical twisting to form a delicate egg wrap.",
      details: {
        ingredients: [
          { name: "Large Fresh Eggs", details: "Ovalbumin proteins for creating a soft curd" },
          { name: "Steamed Rice Bed", details: "Starch mound to support the egg cloak" },
          { name: "Demi-Glace Sauce", details: "Rich broth thickened with roasted starch roux" }
        ],
        selectionReason: "The tornado omelet requires precise egg protein gelation control (curd formation at 65°C) combined with mechanical twisting.",
        freshness: "Eggs used at room temperature to ensure even cooking and smooth twisting.",
        cookingMethod: "Eggs whisked and poured into a buttered non-stick pan at 140°C. Using chopsticks, the egg curd is drawn to the center and twisted while the pan rotates, leaving the top runny.",
        lessonsLearned: "The tornado shape is held together by the partially denatured egg white proteins, while the runny yolk remains fluid due to lower temperatures, creating a creamy texture."
      }
    },
    {
      id: "mayak_eggs",
      name: "Mayak Gyeran: Soy-Marinated Eggs",
      category: "Proteins",
      image: "images/20210316_220427.jpg",
      summary: "Analyzing protein gelation kinetics and osmotic mass transfer of marinade solutes through semi-permeable egg membranes.",
      details: {
        ingredients: [
          { name: "Fresh Large Eggs", details: "Ovalbumin and lipovitellin proteins sensitive to thermal denaturation" },
          { name: "Brewed Soy Sauce", details: "High-sodium hypertonic marinade base" },
          { name: "Red Onion & Green Chilies", details: "Aromatics providing volatile sulfur and capsaicin compounds" }
        ],
        selectionReason: "Eggs serve as a perfect medium to study the precise thermal boundary where whites coagulate while the yolks remain fluid. Soy sauce serves as the hypertonic marinade.",
        freshness: "Boiled eggs are marinated at peak freshness to observe the diffusion rate over a 24-hour period.",
        cookingMethod: "Boiled for exactly 6 minutes and 15 seconds, shocked in ice water, then marinated in a cold soy-sauce mix with onions and chilies at 4°C.",
        lessonsLearned: "Water flows out of the egg while sodium and flavor compounds diffuse inward across the egg membrane due to the hypertonic marinade, curing the yolk over time."
      }
    },
    {
      id: "steak_bites",
      name: "Cast-Iron Seared Steak Bites",
      category: "Proteins",
      image: "images/20210330_182122.jpg",
      summary: "Investigating surface-to-volume thermodynamics to maximize Maillard browning on cubed proteins.",
      details: {
        ingredients: [
          { name: "Beef Steak Cubes", details: "Myofibrillar proteins and intramuscular lipids" },
          { name: "Cooking Oil & Salt", details: "Fat carrier and osmotic dry brine" }
        ],
        selectionReason: "Cubed steak provides a high surface-area-to-volume ratio, allowing us to study the rapid conduction of heat and Maillard reaction rates.",
        freshness: "Beef is patted dry and dry-brined for 2 hours in the refrigerator to remove surface moisture, enhancing sear efficiency.",
        cookingMethod: "Pan-seared in a smoking hot cast-iron skillet at 200°C for 1.5 minutes to rapidly brown the exterior without overcooking the center.",
        lessonsLearned: "Dehydrating the steak surface before cooking avoids steam formation, allowing temperatures to exceed 140°C instantly to trigger amino-acid caramelization."
      }
    },
    {
      id: "garlic_chicken",
      name: "Pan-Seared Garlic Herb Chicken",
      category: "Proteins",
      image: "images/20210501_190247.jpg",
      summary: "Optimizing moisture retention in lean poultry breast using fat-convective butter basting.",
      details: {
        ingredients: [
          { name: "Chicken Breast Fillets", details: "Lean myofibrillar protein matrix" },
          { name: "Whole Garlic Cloves & Herbs", details: "Allicin and volatile terpene oil compounds" }
        ],
        selectionReason: "Lean chicken breast contains low fat and high moisture, making it highly susceptible to drying out during cooking, requiring careful thermal monitoring.",
        freshness: "Sourced fresh, skinless, and cooked within 24 hours of purchase.",
        cookingMethod: "Sautéed in a pan at medium heat (160°C), basted continuously with butter, garlic cloves, and fresh herbs to conduct heat evenly.",
        lessonsLearned: "Basting with hot butter increases convective heat transfer across the chicken breast, cooking it faster and preventing the protein fibers from tightening too much."
      }
    },
    {
      id: "walnut_pork",
      name: "Honey-Glazed Crispy Pork with Walnuts",
      category: "Proteins",
      image: "images/20210502_180410.jpg",
      summary: "Balancing sugar caramelization and walnut lipid roasting in sweet-savory glazing systems.",
      details: {
        ingredients: [
          { name: "Pork Ribs / Pork Strips", details: "Collagen-rich protein with rendered fat" },
          { name: "Honey & Soy Glaze", details: "Reducing sugars and sodium-rich soy base" },
          { name: "Toasted Walnuts", details: "Crunchy nuts rich in polyunsaturated fats" }
        ],
        selectionReason: "Pork strips are chosen to study how sugars in honey react with animal fats under direct dry heat, forming a sticky caramelized coating.",
        freshness: "Pork is cooked fresh; walnuts are raw and toasted in-pan during the final glazing step to release oils.",
        cookingMethod: "Pork is fried until crispy, then tossed in a hot honey-soy reduction with walnuts at 150°C until fully glazed.",
        lessonsLearned: "Honey contains simple sugars (fructose/glucose) which caramelize at 110°C, much lower than table sugar (sucrose). This requires lowering the heat to prevent burning."
      }
    },
    {
      id: "chili_shrimp",
      name: "Garlic Butter Chili Shrimp Plate",
      category: "Proteins",
      image: "images/20210503_182937.jpg",
      summary: "Studying the rapid denaturation of crustacean actomyosin proteins under high-heat butter conduction.",
      details: {
        ingredients: [
          { name: "Fresh Peeled Shrimp", details: "Actomyosin-dense muscle fibers with high water content" },
          { name: "Garlic Butter & Chili Sauce", details: "Emulsified fat and capsaicin compound blend" },
          { name: "Steamed White Rice", details: "Starch bed to absorb released juices" }
        ],
        selectionReason: "Shrimp proteins denature and contract at lower temperatures (around 50-55°C) than mammalian proteins, making them useful for studying quick-heat changes.",
        freshness: "Shrimp are kept on ice and patted completely dry before cooking to avoid steaming.",
        cookingMethod: "Flash-fried in a skillet with garlic butter and red chili sauce at 180°C for 2 minutes until opaque and curled.",
        lessonsLearned: "Overcooking shrimp past 60°C causes actomyosin to squeeze out all internal water, turning the texture rubbery. Flash cooking keeps the protein matrix tender and juicy."
      }
    },
    {
      id: "jjimdak",
      name: "Slow-Braised Soy Ginger Chicken (Jjimdak)",
      category: "Proteins",
      image: "images/20210518_184124.jpg",
      summary: "Analyzing collagen hydrolysis and root vegetable starch breakdown during sustained wet braising.",
      details: {
        ingredients: [
          { name: "Bone-in Chicken Cutlets", details: "Connective tissue and protein mix" },
          { name: "Carrots & Potatoes", details: "Starch-rich plant root systems" },
          { name: "Sweet Soy Ginger Sauce", details: "Aqueous marinade with protease ginger enzymes" }
        ],
        selectionReason: "Braised chicken pieces contain collagen that requires slow heat and moisture to convert into smooth gelatin.",
        freshness: "Vegetables cut fresh; chicken marinated in soy and fresh ginger juice to tenderize the meat prior to braising.",
        cookingMethod: "Simmered in an aqueous soy-ginger broth at 95°C for 45 minutes until chicken is tender and vegetables are soft.",
        lessonsLearned: "Ginger contains a natural enzyme called zingibain, which breaks down meat protein bonds during the initial simmer, significantly shortening the braising time."
      }
    },
    {
      id: "beef_soup",
      name: "Clear Beef Radish Consommé",
      category: "Plant Systems",
      image: "images/20210522_182511.jpg",
      summary: "Exploring water-soluble protein extraction and root vegetable turgor collapse in clear broths.",
      details: {
        ingredients: [
          { name: "Beef Brisket", details: "Skeletal muscle rich in water-soluble proteins" },
          { name: "Korean Radish (Mu)", details: "Parenchyma cell plant tissues rich in water" }
        ],
        selectionReason: "Korean radish is selected to study how cellular structure dissolves and softens during boiling, absorbing meat broth compounds.",
        freshness: "Radish harvested fresh, showing high water content and crisp texture.",
        cookingMethod: "Brisket boiled and skimmed to clarify, then simmered with radish slices at 90°C for 1 hour until radish is translucent.",
        lessonsLearned: "Simmering below boiling point prevents boiling agitation from emulsifying rendered fat, keeping the soup crystal clear while extracting maximum flavor."
      }
    },
    {
      id: "turmeric_chicken",
      name: "Turmeric Spiced Stir-Fried Chicken",
      category: "Proteins",
      image: "images/20220816_200815_HDR.jpg",
      summary: "Using hydrophobic spices and amino-carbonyl heat reactions to sear chicken pieces.",
      details: {
        ingredients: [
          { name: "Chicken Breast / Thigh Pieces", details: "Protein source" },
          { name: "Turmeric & Yellow Curry Spices", details: "Hydrophobic curcumin powder compounds" }
        ],
        selectionReason: "Turmeric contains curcumin, which is fat-soluble. Stir-frying it in oil allows the flavor and yellow pigment to dissolve and coat the chicken evenly.",
        freshness: "Chicken cut fresh; spices kept in air-tight containers to preserve volatile aroma molecules.",
        cookingMethod: "Stir-fried in oil in a hot pan at 170°C, tossing the spiced chicken until cooked through and golden.",
        lessonsLearned: "Toasting spices directly in fat (oil) before adding liquid releases key aromatic compounds that are insoluble in water, maximizing the flavor profile."
      }
    },
    {
      id: "pork_bokchoy",
      name: "Wok-Tossed Pork Belly with Bok Choy",
      category: "Proteins",
      image: "images/20220915_182620.jpg",
      summary: "Investigating moisture retention in leafy vegetables combined with rapid fat rendering in wok cooking.",
      details: {
        ingredients: [
          { name: "Sliced Pork Belly", details: "High-fat protein source" },
          { name: "Fresh Bok Choy", details: "Water-dense leafy green vegetable" }
        ],
        selectionReason: "Bok choy has a high water content. We stir-fry it with pork fat to see how lipids coat the leaves, preventing moisture loss during high-heat cooking.",
        freshness: "Bok choy washed and kept crisp in ice water prior to quick wok-tossing.",
        cookingMethod: "Pork belly is fried in a wok to render oil, then bok choy is added and flash-cooked at 190°C for 1.5 minutes.",
        lessonsLearned: "Rendered pork fat coats the cell walls of the bok choy, creating a barrier that keeps water inside the leaves, maintaining crispness and preventing wilting."
      }
    },
    {
      id: "seared_shrimp",
      name: "High-Heat Seared Whole Shrimp",
      category: "Proteins",
      image: "images/20221005_175752_HDR.jpg",
      summary: "Studying shell-on chitin thermal reactions and protein contracting profiles.",
      details: {
        ingredients: [
          { name: "Whole Red Shrimp (Shell-On)", details: "Chitin shell containing carotenoid pigments" },
          { name: "Chili Oil & Garlic", details: "Aromatic fat compounds" }
        ],
        selectionReason: "Searing shrimp with the shell on protects the inner flesh from direct heat, preventing overcooking while letting the shell undergo flavorful browning.",
        freshness: "Sourced fresh, keeping the shell intact to act as a physical heat shield.",
        cookingMethod: "Stir-fried whole in hot chili oil in a cast-iron skillet at 180°C until the shell turns bright orange.",
        lessonsLearned: "The orange color change is due to the release of astaxanthin pigment from proteins in the shell when exposed to heat. The shell traps moisture, keeping the shrimp plump."
      }
    },
    {
      id: "spicy_pork",
      name: "Spicy Stir-Fried Pork belly (Jeyuk Bokkeum)",
      category: "Proteins",
      image: "images/20221020_183529.jpg",
      summary: "Emulsifying red chili glaze with pork lipids in high-temperature stir-frying.",
      details: {
        ingredients: [
          { name: "Thin-Sliced Pork Belly", details: "Intramuscular fat and protein strips" },
          { name: "Gochugaru (Chili Flakes) & Soy Glaze", details: "Capsaicin spice and savory sauce carrier" },
          { name: "Green Onions & Bok Choy", details: "Sulfur aromatics and crisp greens" }
        ],
        selectionReason: "Thin pork belly strips cook extremely fast. Stir-frying them with a thick gochugaru sauce allows the fat and sauce to form a cohesive glaze.",
        freshness: "Pork sliced thin; vegetables added in the final 2 minutes to keep them fresh and crunchy.",
        cookingMethod: "Pork is stir-fried in a wok at 180°C, then gochugaru soy glaze and vegetables are added and tossed rapidly.",
        lessonsLearned: "The mechanical tossing action in the wok emulsifies the rendered pork lard with the water-based soy sauce, creating a thick, glossy glaze that clings to the meat."
      }
    },
    {
      id: "carbonara",
      name: "Classic Cream Fettuccine Carbonara",
      category: "Baking & Starch Systems",
      image: "images/20230201_201502.jpg",
      summary: "Optimizing cheese-egg yolk emulsion and starch water binding for creamy pasta coatings.",
      details: {
        ingredients: [
          { name: "Fettuccine Pasta", details: "Gluten-aligned starch noodles" },
          { name: "Egg Yolk & Parmesan Cheese", details: "Lecithin emulsifier and dairy fat proteins" },
          { name: "Bacon / Pancetta", details: "Rendered fat and cured meat solids" }
        ],
        selectionReason: "Carbonara is a classic test of emulsification. It uses egg yolks instead of heavy cream to create a rich sauce, relying on chemistry to prevent scrambling.",
        freshness: "Eggs kept cold; cheese freshly grated to ensure smooth melting.",
        cookingMethod: "Pasta boiled. Bacon rendered. Off-heat, pasta is tossed with bacon fat, hot pasta water, egg yolks, and grated cheese at roughly 65°C.",
        lessonsLearned: "Keeping the pan off-heat (under 70°C) is critical. If the temperature exceeds 70°C, the egg proteins coagulate into clumps (scrambled eggs) instead of forming a smooth emulsion."
      }
    },
    {
      id: "roti_curry",
      name: "Stone-Griddled Flatbread Roti & Curry",
      category: "Baking & Starch Systems",
      image: "images/20230309_191414.jpg",
      summary: "Exploring gluten network development via mechanical shearing and dry-pan starch gelatinization.",
      details: {
        ingredients: [
          { name: "Atta (Whole Wheat Flour)", details: "High glutenin and gliadin content for elastic dough" },
          { name: "Water & Ghee", details: "Plasticizer and lubricating lipid" },
          { name: "Spiced Curry", details: "Acidic sauce emulsion containing capsicum aromatics" }
        ],
        selectionReason: "Atta flour contains fine bran particles that absorb water slowly, requiring precise hydration monitoring to form a cohesive gluten sheet capable of expanding under steam.",
        freshness: "Flour kept dry; spices toasted and ground fresh to prevent evaporation of essential oils.",
        cookingMethod: "Dough kneaded for 10 minutes, rested for 30 minutes, rolled thin, and cooked on a hot dry tawa (cast iron pan) at 220°C until steam pockets puff the flatbread. Served with chicken simmered in yogurt-spiced tomato gravy.",
        lessonsLearned: "Resting the dough allows the gluten matrix to relax, relieving internal stress and making it stretchable. The high heat of the griddle vaporizes internal water, generating steam that inflates the bread, creating distinct, soft layers."
      }
    },
    {
      id: "mushroom_pasta",
      name: "Creamy Garlic Wild Mushroom Fettuccine",
      category: "Baking & Starch Systems",
      image: "images/20230321_193831.jpg",
      summary: "Using cream fat carriers to dissolve hydrophobic mushroom volatiles and garlic compounds.",
      details: {
        ingredients: [
          { name: "Fettuccine Pasta", details: "Wheat-based starch noodle" },
          { name: "Wild Mushrooms", details: "Fungal cell tissues containing rich glutamates (umami)" },
          { name: "Heavy Cream & Garlic", details: "High-fat dairy emulsion and allicin aromatic source" }
        ],
        selectionReason: "Mushrooms release high amounts of water during cooking. Sautéing them before adding cream allows their water to evaporate, concentrating their natural umami compounds.",
        freshness: "Mushrooms wiped clean (not washed in water) to prevent water-logging.",
        cookingMethod: "Mushrooms browned in butter, garlic added, followed by heavy cream and boiled pasta, tossed together at 90°C.",
        lessonsLearned: "Mushrooms act like sponges due to their porous chitin structure. Sautéing them first collapses these pores, cooking out the water and allowing them to absorb the aromatic garlic butter instead."
      }
    },
    {
      id: "stirfry_broccoli",
      name: "Wok-Seared Broccoli & Yellow Peppers",
      category: "Plant Systems",
      image: "images/20230325_183448.jpg",
      summary: "Preserving chlorophyll pigments and ascorbic acid through high-heat flash stir-frying.",
      details: {
        ingredients: [
          { name: "Broccoli Florets", details: "Dense cellulose plant stems rich in chlorophyll" },
          { name: "Yellow Bell Peppers", details: "Vitamin-rich sweet pepper tissues" },
          { name: "Garlic Soy Glaze", details: "Hydrophilic coating sauce" }
        ],
        selectionReason: "Broccoli's green color is highly sensitive to heat and acid. Stir-frying it quickly at high heat preserves its vibrant green chlorophyll while keeping it crisp.",
        freshness: "Broccoli cut into uniform sizes and flash-blanched in boiling water for 30 seconds before stir-frying.",
        cookingMethod: "Blanched broccoli and sliced peppers are wok-fried at 190°C with garlic soy glaze for 2 minutes.",
        lessonsLearned: "Quick blanching displaces air pockets in the broccoli tissue, making the green color appear brighter. High-heat stir-frying cooks the exterior quickly, keeping the interior crisp and retaining nutrients."
      }
    },
    {
      id: "aglio_olio",
      name: "Emulsified Garlic Olive Oil Pasta (Aglio e Olio)",
      category: "Baking & Starch Systems",
      image: "images/20230820_200916.jpg",
      summary: "Creating a stable lipid-water emulsion using starch-rich pasta boiling water.",
      details: {
        ingredients: [
          { name: "Spaghetti Pasta", details: "Wheat-based starch noodle" },
          { name: "Extra Virgin Olive Oil", details: "Non-polar fat carrier" },
          { name: "Sliced Garlic & Parsley", details: "Aromatics providing garlic oils and fresh notes" }
        ],
        selectionReason: "Aglio e Olio contains only oil and water. It is a perfect study of how starch acts as a natural emulsifier to bind oil and water together into a smooth sauce.",
        freshness: "Garlic sliced fresh; parsley chopped immediately before serving to keep essential oils active.",
        cookingMethod: "Garlic is cooked slowly in olive oil to release flavors. Under-cooked pasta and starch-rich pasta water are added, tossed vigorously at 95°C.",
        lessonsLearned: "Vigorous tossing releases starch from the pasta into the water. This starch wraps around the olive oil droplets, preventing them from separating, creating a creamy sauce without dairy."
      }
    },
    {
      id: "eggplant",
      name: "Glazed Sweet-Chili Stir-Fried Eggplant",
      category: "Plant Systems",
      image: "images/20230829_195010_HDR.jpg",
      summary: "Investigating the thermal collapse of parenchymal cell walls and lipid absorption mechanisms in spongy vegetable tissues.",
      details: {
        ingredients: [
          { name: "Asian Eggplant", details: "Spongy cell structure with large air pockets" },
          { name: "Soy-Chili Glaze", details: "Hydrophilic seasoning blend" },
          { name: "Garlic & Sesame Oil", details: "Hydrophobic aromatic fat carrier" }
        ],
        selectionReason: "Eggplant is an excellent model for tissue mechanics. Its raw parenchyma is highly porous and behaves like a dry sponge, absorbing oils before collapsing into a tender, concentrated texture under heat.",
        freshness: "Firm, glossy eggplants are selected; spongy interior should be white and seedless, indicating optimal water content.",
        cookingMethod: "Eggplants cut into cubes and stir-fried in hot oil at 180°C. Once the cell walls collapse and release trapped air, the savory soy-chili glaze is added, coating the collapsed tissues.",
        lessonsLearned: "Raw eggplant contains micro-air pockets that absorb cooking oil. Heating breaks down the pectin in the cell walls, releasing the air and allowing the oil to coat the collapsed cells, turning the spongy texture into a smooth, buttery melt."
      }
    },
    {
      id: "shredded_potatoes",
      name: "Thinly Shredded Wok-Stirred Potatoes",
      category: "Plant Systems",
      image: "images/20230904_204407.jpg",
      summary: "Controlling potato starch gelatinization via surface starch washing and rapid wok searing.",
      details: {
        ingredients: [
          { name: "Potatoes (Russet / Yukon)", details: "High-starch tubers with cellular walls" },
          { name: "Vinegar & Garlic Soy Sauce", details: "Acidic seasoning to strengthen pectin cell walls" }
        ],
        selectionReason: "Stir-fried potato shreds should be crisp rather than soft/mushy. This dish tests how washing away surface starch changes the final texture.",
        freshness: "Potatoes are sliced paper-thin, then soaked in cold water for 15 minutes to rinse out excess starch.",
        cookingMethod: "Stir-fried in a hot wok at 180°C with garlic, soy sauce, and a splash of vinegar for 2.5 minutes.",
        lessonsLearned: "Washing removes excess surface starch, preventing the shreds from sticking together. The acidity of the vinegar strengthens the pectin in the potato cell walls, keeping them crisp even when cooked."
      }
    },
    {
      id: "seared_salmon",
      name: "Garlic Herb Pan-Seared Salmon Fillet",
      category: "Proteins",
      image: "images/20231005_192213.jpg",
      summary: "Controlling thermodynamic heat transfer to prevent albumin extrusion and optimize myofibrillar gelation.",
      details: {
        ingredients: [
          { name: "Fresh Salmon Fillets", details: "High density of actin and myosin proteins with healthy omega-3 lipids" },
          { name: "Unsalted Butter", details: "Emulsified fat carrier for fat-soluble garlic aromatics" },
          { name: "Fresh Dill & Garlic", details: "Allicin compounds and terpene herb notes" }
        ],
        selectionReason: "Salmon is chosen for its delicate protein structures that are highly sensitive to thermal gradients, making it a perfect case study for precision heat conduction.",
        freshness: "Sourced fresh from sustainable cold-water marine fisheries, stored at 1°C, and patted completely dry before searing.",
        cookingMethod: "Pan-seared in a hot cast-iron skillet at 170°C. Basted continuously with melted butter, crushed garlic, and dill to distribute heat evenly across the upper flesh via liquid convection.",
        lessonsLearned: "Maintaining temperature below 60°C prevents myosin from contracting too aggressively, which would squeeze out moisture and force white albumin to the surface. Butter basting slows surface cooling and enhances heat convection."
      }
    },
    {
      id: "gochujang_pasta",
      name: "Fusion Gochujang Spaghetti & Cucumber Kimchi",
      category: "Plant Systems",
      image: "images/20250831_140140.jpg",
      summary: "Investigating starch swelling dynamics in durum wheat pasta and cellular turgor loss in quick-pickled cucumber salad.",
      details: {
        ingredients: [
          { name: "Durum Wheat Spaghetti", details: "High amylose-to-amylopectin ratio for al dente structure" },
          { name: "Chicken Breast Chunks", details: "Lean myofibrillar protein for texturizing the sauce" },
          { name: "Gochujang (Korean Chili Paste)", details: "Fermented red pepper paste acting as a sweet-savory emulsifier" },
          { name: "Fresh Cucumber & Gochugaru", details: "Cellular water source and capsaicin compounds for side pickling" }
        ],
        selectionReason: "Durum wheat is selected for its high protein and gluten density, preventing starch disintegration during boiling. Gochujang acts as a natural thickening agent due to hydrolyzed starches from fermentation.",
        freshness: "Cucumber harvested fresh to maintain turgor pressure; chicken sourced chilled (never frozen) to prevent ice-crystal cell rupture.",
        cookingMethod: "Pasta boiled in 1% saline water to regulate starch swelling. Chicken sautéed in sesame oil to induce Maillard reactions. Cucumber thin-sliced and salted for 15 minutes to induce hypertonic osmotic flow, removing excess water before seasoning.",
        lessonsLearned: "Salting the cucumber draws out water via osmosis, collapsing the vacuoles and increasing crispness by concentrating cell wall cellulose. The gochujang paste's sugars coat the pasta, creating a cohesive starch-lipid emulsion."
      }
    },
    {
      id: "oil_spaghetti",
      name: "Simple Garlic Herb Oil Spaghetti",
      category: "Baking & Starch Systems",
      image: "images/IMG_0980.jpg",
      summary: "Analyzing starch gelatinization and mechanical starch extraction in simple oil pasta.",
      details: {
        ingredients: [
          { name: "Durum Wheat Spaghetti", details: "High-protein wheat noodles" },
          { name: "Garlic, Olive Oil & Herbs", details: "Hydrophobic fat carrier and garlic volatiles" }
        ],
        selectionReason: "A simple oil pasta that relies entirely on mechanical starch washing from the pasta during cooking to create a cohesive sauce coat.",
        freshness: "Pasta boiled fresh; herbs harvested immediately before mixing.",
        cookingMethod: "Pasta boiled to al dente, transferred directly to a pan with hot garlic oil, and tossed vigorously with a splash of pasta water at 90°C.",
        lessonsLearned: "Tossing the pasta creates shear force, releasing amylose starches from the noodle surface which act as a natural emulsifying agent, binding the oil into a light sauce."
      }
    },
    {
      id: "shrimp_pasta",
      name: "Creamy Garlic Butter Shrimp Pasta",
      category: "Baking & Starch Systems",
      image: "images/IMG_1435.jpg",
      summary: "Integrating lipid carriers with dairy proteins and marine actomyosin denaturation profiles.",
      details: {
        ingredients: [
          { name: "Spaghetti / Fettuccine", details: "Starch noodle base" },
          { name: "Peeled Shrimp", details: "Delicate marine protein source" },
          { name: "Heavy Cream, Garlic & Butter", details: "Emulsified cream fat and garlic aromatics" }
        ],
        selectionReason: "This dish is used to study how dairy proteins in heavy cream interact with lipids and water-soluble flavors, creating a smooth coating over cooked seafood.",
        freshness: "Shrimp kept cold; cream added at room temperature to prevent curdling in the hot pan.",
        cookingMethod: "Shrimp sautéed in garlic butter, cream added and reduced, then tossed with cooked pasta at 85°C.",
        lessonsLearned: "Casein proteins in heavy cream coat the tongue, masking acidity. Balancing the cream with garlic compounds cuts through the heavy fat coating, enhancing flavor perception."
      }
    },
    {
      id: "fish_cutlet",
      name: "Pan-Seared Fish Cutlet with Butter Pasta",
      category: "Proteins",
      image: "images/IMG_1450.jpg",
      summary: "Investigating the thermal changes of delicate white fish proteins paired with starch noodles.",
      details: {
        ingredients: [
          { name: "White Fish Fillet (Sole/Cod)", details: "Highly delicate, short myofibrillar proteins" },
          { name: "Flour Coating & Butter", details: "Starch boundary layer and cooking fat" },
          { name: "Garlic Spaghetti", details: "Starch carbohydrate side" }
        ],
        selectionReason: "White fish contains short protein muscle blocks (myotomes) held by weak collagen sheets, making it delicate and prone to breaking during high-heat searing.",
        freshness: "Fish kept chilled and dried with paper towels before dusting with flour.",
        cookingMethod: "Fish cutlet dusted in flour and seared in butter at 160°C for 3 minutes per side. Served with a side of simple garlic spaghetti.",
        lessonsLearned: "The light flour dusting acts as a structural boundary, absorbing moisture and forming a crispy crust that holds the delicate, easily denatured fish flakes together."
      }
    },
    {
      id: "meat_soboro",
      name: "Savory Ginger Soy Ground Meat Soboro",
      category: "Proteins",
      image: "images/IMG_3345.jpeg",
      summary: "Maximizing Maillard browning and lipid-soluble flavor extraction in high-heat wok stir-frying.",
      details: {
        ingredients: [
          { name: "Ground Pork / Beef (80/20 mix)", details: "Optimal fat content for rendering and flavor carrier" },
          { name: "Onion, Garlic & Ginger", details: "Sulfur-based aromatics that volatilize under heat" },
          { name: "Chili Oil & Soy Sauce", details: "Capsaicin extract and sodium seasoning base" }
        ],
        selectionReason: "Ground pork provides a high surface-area-to-volume ratio, maximizing the sites available for amino-acid and sugar caramelization reactions (Maillard reaction).",
        freshness: "Ground fresh on the day of cooking; onions sliced immediately before cooking to prevent oxidation of volatile flavor compounds.",
        cookingMethod: "Wok heated to 200°C. Fat is rendered out of the pork to act as the primary heat-transfer medium, followed by stir-frying with minced onions and chili oil until deeply caramelized.",
        lessonsLearned: "Wok cooking utilizes high heat conduction. The high fat content in ground pork dissolves the hydrophobic capsaicin in the chili oil, distributing heat and spice molecules uniformly throughout the dish."
      }
    }
  ],

  // Recipe to Resource Notes (Menu 2) - 8 key resource pathways written in an approachable high-school tone.
  resourceNotes: [
    {
      id: "res_garlic_steak",
      dishId: "garlic_steak",
      dishName: "Garlic Butter Basted Ribeye Steak",
      resourceAnalyzed: "Beef Production (Meat Supply Chains)",
      environmentalMetrics: {
        carbonIntensity: "High (About 27 kg CO2 per kg beef)",
        waterFootprint: "Very High (15,000 liters per kg beef)",
        wastePotential: "Medium (Fresh meat must be kept cold to prevent spoiling)"
      },
      origin: "Midwestern Grasslands, USA",
      productionMethod: "Raising cattle requires a lot of pasture land. Traditional farms use grain feeds, but newer eco-friendly farms let cows graze on open grasslands (grass-fed) which keeps the soil healthier.",
      environmentalImpact: "Cows release methane, a powerful greenhouse gas. Also, growing grain for cow feed uses a massive amount of water and fertilizers, which can wash into nearby rivers and cause water pollution.",
      systemsInsight: "Since beef has such a high water and carbon footprint, wasting it is a big environmental loss. If we learn to cook steak correctly without burning or overcooking it, we prevent food waste and respect the resources used to raise it."
    },
    {
      id: "res_lamb_chops",
      dishId: "lamb_chops",
      dishName: "Pan-Seared Lamb Chops",
      resourceAnalyzed: "Sheep Grazing (Land Use & Ecology)",
      environmentalMetrics: {
        carbonIntensity: "High (About 24 kg CO2 per kg lamb)",
        waterFootprint: "High (10,400 liters per kg lamb)",
        wastePotential: "Medium (Requires strict refrigeration)"
      },
      origin: "Hill Farms in Australia",
      productionMethod: "Sheep are raised on large hilly pasture lands. If too many sheep graze on the same grass, it causes soil erosion, but rotating them to different pastures allows the grass to grow back naturally.",
      environmentalImpact: "Like cattle, sheep emit greenhouse gases. However, when grazing is managed carefully, sheep can actually help stimulate grass growth, which helps the soil absorb and trap carbon dioxide from the air.",
      systemsInsight: "In sheep farming, bone and fat are often thrown away. We can reduce this waste by using the leftover lamb bones to make a rich soup broth, showing how home kitchens can practice a circular food cycle."
    },
    {
      id: "res_pork_onions",
      dishId: "pork_onions",
      dishName: "Skillet-Seared Pork Belly & Onions",
      resourceAnalyzed: "Pork Farming (Feed Conversion & Bio-waste)",
      environmentalMetrics: {
        carbonIntensity: "Medium-High (About 6 kg CO2 per kg pork)",
        waterFootprint: "High (6,000 liters per kg pork)",
        wastePotential: "Medium (Slightly longer shelf life than beef)"
      },
      origin: "Local Farms in Iowa, USA",
      productionMethod: "Pigs grow fast and eat a mix of corn and soybeans. Modern farms are now focusing on cleaner animal housing and using natural feeds without adding hormones.",
      environmentalImpact: "Pork farms produce a lot of manure, which can smell bad and pollute nearby water. If farms capture this waste in closed tanks, they can turn it into biogas energy to heat the farm and run generators.",
      systemsInsight: "Pork belly is a very fatty cut of meat. When we cook it, we can save the rendered fat (lard) to cook other things like onions, reducing the need for bottled cooking oils and utilizing the whole animal."
    },
    {
      id: "res_mayak_eggs",
      dishId: "mayak_eggs",
      dishName: "Mayak Gyeran: Soy-Marinated Eggs",
      resourceAnalyzed: "Egg Production (Poultry Systems)",
      environmentalMetrics: {
        carbonIntensity: "Low-Medium (About 4.8 kg CO2 per kg eggs)",
        waterFootprint: "Medium (3,300 liters per kg eggs)",
        wastePotential: "Low-Medium (Marinade extends egg shelf life)"
      },
      origin: "Free-Range Farms in Gyeonggi, South Korea",
      productionMethod: "Eggs are sourced from free-range chickens that can walk around freely. Their diet is mostly grains, which dictates the quality and color of the yolk.",
      environmentalImpact: "Chicken manure is high in nitrogen. If left in large piles, it can wash into streams during rain. Converting chicken waste into organic compost for vegetable gardens keeps streams clean.",
      systemsInsight: "Making soft-boiled eggs marinated in soy sauce (Mayak Gyeran) keeps them fresh for up to a week instead of just one day. This simple cooking method is a great way to prevent eggs from going bad in the fridge."
    },
    {
      id: "res_tornado_omurice",
      dishId: "tornado_omurice",
      dishName: "Tornado Omelet Omurice",
      resourceAnalyzed: "Rice Cultivation (Crop Water Footprint)",
      environmentalMetrics: {
        carbonIntensity: "Low-Medium (About 1.2 kg CO2 per kg rice)",
        waterFootprint: "High (2,500 liters per kg rice)",
        wastePotential: "Low (Dry rice lasts a very long time)"
      },
      origin: "Local Paddy Fields in Gimpo, South Korea",
      productionMethod: "Rice is grown in flooded dirt fields called paddies. Flooding the fields is a traditional way to stop weeds from growing, but it requires a huge amount of fresh water.",
      environmentalImpact: "Flooded soil has no oxygen, which makes bacteria produce methane gas. Farmers are now trying 'dry-and-wet' irrigation, where they let fields dry out periodically to save water and cut methane emissions.",
      systemsInsight: "This dish combines eggs and rice. In a food system, linking a stable grain (rice) with a local protein (eggs) creates a balanced, affordable meal with a much lower carbon footprint than a beef steak."
    },
    {
      id: "res_roti_curry",
      dishId: "roti_curry",
      dishName: "Griddled Roti & Tikka Masala",
      resourceAnalyzed: "Wheat Monoculture (Soil Nutrients)",
      environmentalMetrics: {
        carbonIntensity: "Low (About 0.8 kg CO2 per kg wheat flour)",
        waterFootprint: "Medium-High (1,600 liters per kg flour)",
        wastePotential: "Low (Flour is highly stable if kept dry)"
      },
      origin: "Wheat Belts of Punjab, India",
      productionMethod: "Wheat is grown on massive flat farms. Growing only wheat year after year depletes nutrients from the soil, forcing farmers to use a lot of chemical fertilizers.",
      environmentalImpact: "Overusing fertilizers releases greenhouse gases and causes chemical runoff into drinking water. Planting legumes like beans in between wheat seasons naturally puts nitrogen back into the soil.",
      systemsInsight: "Roti is a flatbread made with whole wheat flour. Because whole wheat uses the outer parts of the grain, it produces less food processing waste than refined white flour, showing how food choices affect farm efficiency."
    },
    {
      id: "res_eggplant",
      dishId: "eggplant",
      dishName: "Savory Stir-Fried Eggplant",
      resourceAnalyzed: "Vegetable Farming (Local & Seasonal Agriculture)",
      environmentalMetrics: {
        carbonIntensity: "Very Low (About 0.3 kg CO2 per kg eggplant)",
        waterFootprint: "Low (350 liters per kg eggplant)",
        wastePotential: "High (Fresh eggplants bruise easily during transport)"
      },
      origin: "Local Farms in Jeolla Province, South Korea",
      productionMethod: "Eggplants are grown in open soil during the summer. They don't need heated greenhouses, which saves a lot of electricity and coal heating.",
      environmentalImpact: "Eggplants have a very low environmental impact compared to meat. The main issue is transport waste. Buying them from local farmer markets reduces the fuel burned by delivery trucks.",
      systemsInsight: "Because vegetables have delicate cell walls, they spoil quickly. Quick stir-frying is a great way to cook slightly soft or bruised eggplants, turning potential food waste into a delicious meal."
    },
    {
      id: "res_gochujang_pasta",
      dishId: "gochujang_pasta",
      dishName: "Fusion Gochujang Spaghetti",
      resourceAnalyzed: "Greenhouse Farming (Smart Water Loops)",
      environmentalMetrics: {
        carbonIntensity: "Medium (About 1.0 kg CO2 per kg greenhouse pepper)",
        waterFootprint: "Medium-Low (250 liters per kg cucumber)",
        wastePotential: "High (Fresh cucumbers rot quickly if not kept cool)"
      },
      origin: "Smart Greenhouses in Chungcheong Province, South Korea",
      productionMethod: "Cucumbers and peppers are grown in modern, high-tech glass greenhouses. They use water pipes to drip nutrients directly onto the roots instead of flooding the dirt.",
      environmentalImpact: "Heated greenhouses can use a lot of electricity for lights and heat, which adds to carbon emissions. However, they reuse their watering runoff, which saves up to 80% more water than open-field farming.",
      systemsInsight: "This dish pairs spaghetti (a shelf-stable dry noodle) with fresh cucumbers (a highly perishable crop). By mixing stable pantry foods with fresh local vegetables, we can eat healthily while cutting down on transport energy."
    }
  ],

  // Culinary Journey Videos (Menu Item)
  journeyVideos: [
    {
      id: "cubano_sauce",
      title: "Artisanal Cubano Sauce Emulsification",
      videoPath: "movies/Cubano Sauce.mp4#t=101",
      description: "A deep dive into building flavor layers for a classic Cuban marinade. Squeezing fresh citrus juices and blending them with herbs and fats demonstrates how acidic and lipid phases interact under mechanical agitation.",
      scientificNote: "Citric acid (pH ~2.2) acts as a surfactant, while mechanical whisking creates a temporary emulsion by dispersing non-polar olive oil droplets into the polar citrus phase, coating garlic aromatics."
    },
    {
      id: "shrimp_coconut",
      title: "Shrimp in Coconut Milk Reduction",
      videoPath: "movies/Shrimp with coconut milk.mp4",
      description: "Witnessing the preparation of shrimp cooked in a rich coconut milk curry base. This video highlights the behavior of delicate seafood proteins as they cook in a plant-based lipid emulsion.",
      scientificNote: "Actomyosin proteins in shrimp denature rapidly at 52°C, contracting to form a firm matrix. Meanwhile, natural lecithin emulsifiers in coconut milk prevent fat separation during the gentle simmer."
    }
  ],

  // Service & Impact Section (Menu Item) - 3 major high school volunteer categories
  serviceImpact: {
    title: "Summer Community Service & Relief Work",
    description: "Every summer break, I dedicate my time to volunteering at my grandfather's farm in the rural region and my grandmother's local church. These hands-on experiences have taught me the physical reality of agricultural systems, the vulnerability of food production to natural disasters, and the power of food in building and healing communities.",
    themes: [
      {
        id: "farm_work",
        title: "Agricultural Farm Work",
        subtitle: "Cultivating Crops & Land Stewardship",
        description: "Hands-on labor supporting organic fruit and vegetable cultivation. Tasks included clearing invasive weed vines choking fruit trees, executing seasonal pest prevention protocols, pruning overgrown branches to optimize sunlight exposure, and thinning excess leaves in vinyl greenhouses to secure proper ventilation for strawberry growth.",
        reflection: "Working in the field showed me that producing food is not just a chemical equation or a mechanical system—it requires endless physical care and patience. Taking care of crops under the summer heat taught me to respect the immense effort farmers invest to feed our communities.",
        images: [
          "service_impact/FarmWork/farm_work_crop_care.jpg",
          "service_impact/FarmWork/20260726_082521_HDR.jpg",
          "service_impact/FarmWork/20260726_082642_HDR.jpg",
          "service_impact/FarmWork/20260726_083131.jpg",
          "service_impact/FarmWork/20260726_083210.jpg",
          "service_impact/FarmWork/20260726_083238.jpg",
          "service_impact/FarmWork/20260726_084323_HDR.jpg",
          "service_impact/FarmWork/20260726_084631_HDR.jpg",
          "service_impact/FarmWork/20260726_084751_HDR.jpg",
          "service_impact/FarmWork/20260726_085014_HDR.jpg",
          "service_impact/FarmWork/20260726_085139_HDR.jpg",
          "service_impact/FarmWork/20260726_085327_HDR.jpg",
          "service_impact/FarmWork/20260726_091907.jpg",
          "service_impact/FarmWork/20260726_091944.jpg"
        ]
      },
      {
        id: "flood_cleanup",
        title: "Disaster Relief & Flood Cleanup",
        subtitle: "Rebuilding in the Wake of Dam Failures",
        description: "Participating in emergency cleanups after sudden torrential rains caused a nearby local dam to fail, flooding our family farm. I assisted in clearing silt, removing water-damaged root systems, and restoring flooded crop rows.",
        reflection: "This disaster taught me a harsh system engineering lesson: growing crops well is only half the battle. If a farm's surrounding infrastructure and disaster-prevention facilities are weak, an entire season's yield can be completely wiped out overnight, highlighting the need for resilient rural planning.",
        images: [
          "service_impact/FloodCleanup/20250720_100729.jpg",
          "service_impact/FloodCleanup/20250720_102604_HDR.jpg",
          "service_impact/FloodCleanup/20250720_103328_HDR.jpg",
          "service_impact/FloodCleanup/20250720_103357.jpg",
          "service_impact/FloodCleanup/20250720_103410.jpg",
          "service_impact/FloodCleanup/20250720_114456.jpg"
        ]
      },
      {
        id: "food_service",
        title: "Community Kitchen & Food Service",
        subtitle: "Connecting People through Shared Meals",
        description: "Volunteering in the community kitchen at my grandmother's church to prepare weekly hot lunches for local seniors and families. I managed food preparation, cooking cycles, and meal distribution.",
        reflection: "My love for cooking started in my childhood kitchen, making meals for my family and cooking to support them during COVID-19 quarantine. Expanding this to the church kitchen made me realize that food is the ultimate medium for human care—it connects, heals, and sustains community relationships.",
        images: [
          "service_impact/FoodServiceVolunteer/20260712_101057_HDR.jpg",
          "service_impact/FoodServiceVolunteer/20260712_103010.jpg",
          "service_impact/FoodServiceVolunteer/20260712_103036.jpg",
          "service_impact/FoodServiceVolunteer/20260712_103258_HDR.jpg",
          "service_impact/FoodServiceVolunteer/20260712_104030.jpg",
          "service_impact/FoodServiceVolunteer/20260712_104107_HDR.jpg",
          "service_impact/FoodServiceVolunteer/20260712_104959.jpg",
          "service_impact/FoodServiceVolunteer/food_service_kitchen.png"
        ]
      }
    ]
  }
};

// Make it available to script imports if using modules, or just globally on the window
if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
