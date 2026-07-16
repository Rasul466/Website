// Project data for Rasul's portfolio (English base).
// Russian overrides live in ./translations.js (RU_PROJECTS).

const asset = (name) => `${import.meta.env.BASE_URL}${name}`;

export const PROJECTS = [
  {
    slug: "installment",
    images: {
      hero: asset('installment - main.webp'),
      mid: [
        asset('installment - before.webp'),
        asset('installment - after.webp'),
      ],
      full: asset('installment - full.webp'),
    },
    name: "Open Installment",
    sector: "BNPL",
    thumb: asset('installment.webp'),
    cardSize: "wide",
    swatch: "#DDD4BE",
    aspect: "16/10",
    role: "Product designer",
    team: "1 designer, 4 developers, 2 PMs",
    year: "2024 — 2026",
    scope: "BNPL, B2C",
    headline: "+40% daily card openings",
    cardCopy: "Installment shopping app for clients.",
    title: {
      pre: "Redesigning the installment app to help users feel",
      italic: "confident enough",
      post: "to open cards on their own.",
    },
    lede:
      "Reworking a consumer BNPL app where users often couldn't open cards on their own — especially in the 30 seconds it takes to decide at checkout — didn't understand the conditions, and were confused about how to actually use their limit.",
    context: {
      pull: "The product worked. The app didn't explain it.",
      paragraphs: [
        "People apply for installment plans while standing at the checkout. They already have the product in their hands and need to make a decision within 30–40 seconds, under the pressure of a queue and the anxiety of taking on debt. The product failed to respect that moment.",
        "For months, support, the call center, and merchant partners had been reporting the same issues: users couldn't activate their card on their own, didn't understand the terms, and were confused about their available credit limit. There was no formal brief—just a clear mandate: fix it.",
      ],
    },
    approach: [
      "I redesigned the flow for the checkout moment, not for users with time to think. The terms and available credit limit were surfaced on the very first screen, eliminating unnecessary navigation and extra steps.",
      "I also refreshed the visual language. The outdated interface was undermining trust at the exact moment when users were already feeling anxious about making a financial decision.",
      "An established design system allowed me to focus on improving the flow itself instead of rebuilding UI components from scratch.",
    ],
    outcome: {
      pull: "Card openings grew from an average of 250 to 350 per day — a 40% increase comparing the month before and after release, in the exact stage of the funnel where users were previously dropping off due to difficulty opening a card on their own.",
      stats: [
        { value: "+40%", label: "Card openings / day", italic: false },
        { value: "+50%", label: "Limit disbursed / day", italic: false },
      ],
      tail:
        "This reflects a funnel improvement, not a full resolution of the original problem — numbers fluctuated due to dependency on the partner bank's infrastructure. Beyond the metric, the qualitative shift mattered too: users now understand where and how to use their available limit, and support spends far less time explaining it.",
    },
  },

  {
    slug: "design-system",
    images: {
      hero: asset('system - main.webp'),
      mid: [
        asset('system - before.webp'),
        asset('system - after.webp'),
      ],
      full: asset('system - full.webp'),
    },
    name: "Open System",
    sector: "Design system",
    thumb: asset('system.webp'),
    cardSize: "tall",
    swatch: "#C9C0AB",
    aspect: "4/5",
    role: "Design system architect",
    team: "3 designers, 12 developers, 3 PMs",
    year: "2024 — present",
    scope: "Design system, Ecosystem",
    headline: "One shared language, consistent across every product",
    cardCopy: "Design system for Open company.",
    title: {
      pre: "Rethinking the customer experience by building a",
      italic: "design system",
      post: "for the company's products.",
    },
    lede:
      "Identical screens across our products were looking different. We didn't really feel like an ecosystem yet, even though our products were tightly connected.",
    context: {
      pull: "Every product speaking a slightly different visual language.",
      paragraphs: [
        "Across the company's products, the same basic elements — inputs, buttons, cards, onboarding flows — were each built independently by different teams. Spacing, component behavior, and even how a button responded to input state varied from product to product, even though the products were tightly interconnected and meant to feel like one ecosystem.",
        "There was no formal design-system role. I stepped into it informally, reviewing and testing every new component before it joined the shared library, working alongside three designers and twelve developers building across the full product portfolio.",
      ],
    },
    approach: [
      "Started with an audit — collecting every existing version of shared components across all products, from inputs and buttons to full onboarding flows — before designing a single new element.",
      "Built up from primitives: defined base tokens for colour and spacing, layered semantic tokens on top, then assembled reusable components tested against real scenarios across multiple products rather than a single isolated flow.",
      "Rolled the system out incrementally, product by product — the registration flow, for instance, went from two screens to one, with buttons now reflecting form state directly instead of always appearing clickable regardless of readiness.",
    ],
    outcome: {
      pull: "One shared language, consistent across every product.",
      stats: [
        { value: "12+", label: "Developers building on it", italic: false },
        { value: "Shared", label: "Component library", italic: true },
      ],
      tail:
        "Teams across products now pull from the same library instead of rebuilding the same primitives independently — the registration flow is one visible example, where a two-screen step became one and now behaves identically across sign-up and login. The team also reported noticeably faster feature releases after adopting the system — this wasn't formally measured, but the shift was consistent enough to be felt across releases.",
    },
  },

  {
    slug: "merchant-map",
    images: {
      hero: asset('map - main.webp'),
      mid: [
        asset('map - before.webp'),
        asset('map - after.webp'),
      ],
      full: asset('map - full.webp'),
    },
    name: "Merchant's map",
    sector: "BNPL",
    thumb: asset('merchantmap.webp'),
    cardSize: "square",
    swatch: "#B8AE96",
    aspect: "1/1",
    role: "Product designer",
    team: "1 designer, 3 developers, 1 PM",
    year: "2024 — 2025",
    scope: "BNPL, B2C",
    headline: "4-5k → 50k monthly active users",
    cardCopy: "Interactive map for finding stores.",
    title: {
      pre: "Rebuilding store discovery as an",
      italic: "interactive map",
      post: "— not a list of categories.",
    },
    lede:
      "I identified the product problems on the previous store directory and proposed a new direction for the discovery experience — the product owner approved it, and I owned execution end-to-end.",
    context: {
      pull: "A catalog nobody browsed — just a long list of stores.",
      paragraphs: [
        "Having built similar functionality before, I recognized the pattern immediately: the store directory was a dry, oversized list with no clear value to the user. Engagement was close to zero.",
        "I put together rough screens and a roadmap and brought them to the product owner. Once approved, I owned the business logic and execution end-to-end — the product owner saw the finished feature, not the process.",
      ],
    },
    approach: [
      "Completely redesigned the section structure and the flows around it — map navigation, store clustering, promotions, installment-plan terms, and detailed store pages with products and special offers.",
      "Chose to cluster nearby stores instead of listing them flat — with dozens of stores in a single city, an uncluster pin map would have recreated the same visual noise as the old list, just moved onto a map.",
      "Each brand page surfaced exactly what users had been missing: installment terms, live promotions, and featured products from the store itself.",
    ],
    outcome: {
      pull: "From a section nobody opened to one people return to every month.",
      stats: [
        { value: "4-5k → 50k", label: "Monthly active users", italic: false },
        { value: "10x", label: "Growth in engagement", italic: true },
      ],
      tail:
        "The map turned a section people scrolled past into one of the most consistently used parts of the app — a stable shift, not a one-time spike, measured within the store discovery section itself.",
    },
  },

  {
    slug: "merchant-app",
    images: {
      stack: [
        asset('merchant - main.webp'),
        asset('merchant - figjam.webp'),
        asset('merchant - full.webp'),
      ],
    },
    name: "Open Merchant",
    sector: "BNPL",
    thumb: asset('openmerchant.webp'),
    cardSize: "square",
    swatch: "#DCD3BD",
    aspect: "1/1",
    role: "Product designer",
    team: "1 designer, 3 developers, 1 PM",
    year: "2024 — 2026",
    scope: "BNPL, B2B",
    headline: "+50% installment cards opened",
    cardCopy: "App for merchants.",
    title: {
      pre: "A scoring app for",
      italic: "store employees",
      post: "— guiding customers through approval at the counter.",
    },
    lede:
      "Designing a mobile app that lets merchants walk customers through scoring and issue installment limits — without depending on the consumer app.",
    context: {
      pull: "Most store employees were 25+ and not tech-oriented. The UI had to disappear.",
      paragraphs: [
        "We decided to build a separate app for merchants — to simplify opening installment cards at the counter and grow the overall number of cards issued. The internal target was a 20% lift in openings.",
        "The biggest design constraint was the user. Most cashiers were 25+ and not particularly tech-oriented, so I deliberately avoided experimental UI choices and focused on clarity, speed, and predictability of every step.",
      ],
    },
    approach: [
      "I built the app on top of the design system we'd already shipped, which let the team assemble an MVP and ship to production quickly.",
      "Every step of the customer-facing flow was thought through with the merchant's daily routine in mind — short interactions, clear hierarchy, no surprises. After release, we kept iterating: adding new features and refining existing ones based on store feedback.",
    ],
    outcome: {
      pull: "Card openings up 50% — more than double the target.",
      stats: [
        { value: "+50%", label: "Cards opened", italic: false },
        { value: "2.5×", label: "Vs. internal goal", italic: true },
      ],
      tail:
        "Beyond the headline number, the increase in cards drove a noticeable lift in overall sales — which was the real point of the project all along.",
    },
  },

  {
    slug: "med-tech",
    images: {
      stack: [
        asset('med - main.webp'),
        asset('med - second.webp'),
        asset('med - third.webp'),
      ],
    },
    name: "VIVA Med",
    sector: "MedTech",
    thumb: asset('vivamed.webp'),
    cardSize: "square-wide",
    swatch: "#D2C8B0",
    aspect: "4/3",
    role: "Product designer",
    team: "1 designer, 3 developers, 1 PM",
    year: "2022",
    scope: "MedTech, B2B",
    headline: "Structured workflows, replacing Excel",
    cardCopy: "ERP system for the medical clinic.",
    title: {
      pre: "An",
      italic: "ERP system",
      post: "for a medical clinic running on Excel spreadsheets.",
    },
    lede:
      "Designing a clean, day-long-comfortable interface for staff who'd been managing the clinic out of a stack of shared spreadsheets.",
    context: {
      pull: "All clinic operations lived in Excel.",
      paragraphs: [
        "Clinic management and operations had grown up inside spreadsheets — patient records, scheduling, accounting, internal communication. VIVA MED needed a comprehensive ERP to automate the internal workflows, simplify daily operations, and pull process management into one place.",
        "The brief was as much about feel as function. The interface had to be clean and intuitive, but — most importantly — visually comfortable enough that staff could use it for an entire working day without strain.",
      ],
    },
    approach: [
      "I visited the clinic in person and shadowed the people who would actually be using the system — accountants, doctors, administrators, support staff. The point was to understand what they did, what frustrated them, and what couldn't change.",
      "From there I worked directly with the clinic owners to design the most effective and logical flows. The system needed to automate processes, yes — but the larger goal was to make daily work comfortable and intuitive, not just possible.",
    ],
    outcome: {
      pull: "A unified ERP, replacing the Excel sprawl.",
      stats: [],
      tail:
        "The clinic ended up with a single ERP that automated key internal processes and retired the old Excel-based workflows. Day-to-day work got faster and simpler, and collaboration between departments became measurably more organised.",
    },
  },

  {
    slug: "fintech-product",
    images: {
      stack: [
        asset('fintech - main.webp'),
        asset('fintech - second.webp'),
        asset('fintech - third.webp'),
      ],
    },
    name: "A-Pay",
    sector: "Fintech",
    thumb: asset('apay.webp'),
    cardSize: "featured",
    swatch: "#C8BFA8",
    aspect: "21/9",
    role: "Product designer",
    team: "1 designer, 5 developers, 1 PM",
    year: "2023",
    scope: "Fintech, B2C + Internal",
    headline: "Consumer app + internal analytics module",
    cardCopy: "App and analytic module for the fintech product.",
    title: {
      pre: "A",
      italic: "P2P-first",
      post: "consumer fintech app, paired with an internal analytics module.",
    },
    lede:
      "Designing both the mobile app — with P2P transfers as the main revenue driver — and a dashboard for PMs to monitor key metrics and product performance.",
    context: {
      pull: "Two audiences, two design problems, one product.",
      paragraphs: [
        "The app side was built around P2P transfers — they were the product's main source of revenue, so the flow had to be near-frictionless and predictable. The analytics side, meanwhile, was internal: PMs needed to see what was happening across the product quickly, without learning a new tool.",
        "I worked closely with the Team Lead and PM to walk through every screen and user flow together. A lot of the work was edge cases — finding them, refining them, pulling them back into something coherent.",
      ],
    },
    approach: [
      "We built on top of the team's existing design system, which gave us a strong head start. The challenge was less about inventing and more about specifying every screen and flow precisely enough to ship.",
      "I ran user tests with interactive Figma prototypes — selecting participants, interviewing them, and watching them work through the key flows live. The interviews drove iteration through the whole project; each round produced sharper hypotheses for the next.",
    ],
    outcome: {
      pull: "A consumer-and-internal pairing, shaped by interviews and A/B tests.",
      stats: [],
      tail:
        "Across this project I sharpened my approach to user interviews and A/B testing, and worked very closely with the Product Owner and engineering team to make sure the design actually shipped in the form it was intended.",
    },
  },
];

// Hosted image assets used outside project data
export const ASSETS = {
  logo: asset('logo.webp'),
  portrait: asset('portrait.webp'),
};
