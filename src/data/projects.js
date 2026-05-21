// Project data for Rasul's portfolio (English base).
// Russian overrides live in ./translations.js (RU_PROJECTS).

export const PROJECTS = [
  {
    slug: "wallet-onboarding",
    images: {
      hero: "https://i.postimg.cc/bvk3B6wT/installment-main.png",
      mid: [
        "https://i.postimg.cc/6pDMzst8/installment-before.png",
        "https://i.postimg.cc/BndmNW48/installment-after.png",
      ],
      full: "https://i.postimg.cc/R0KXDPZf/installment-full.png",
    },
    name: "Open Installment",
    sector: "BNPL",
    thumb: "https://i.postimg.cc/JnWxjbmF/installment.png",
    cardSize: "wide",
    swatch: "#DDD4BE",
    aspect: "16/10",
    role: "Product designer",
    team: "1 designer, 4 developers, 2 PMs",
    year: "2024 — 2026",
    scope: "BNPL, B2C",
    headline: "+100 cards opened daily",
    cardCopy: "Installment shopping app for clients.",
    title: {
      pre: "Redesigning the installment app to help users feel",
      italic: "confident enough",
      post: "to open cards on their own.",
    },
    lede:
      "Reworking a consumer BNPL app where users often couldn't open cards on their own, didn't understand the conditions, and were confused about how to actually use their limit.",
    context: {
      pull: "The product worked. The app didn't explain it.",
      paragraphs: [
        "Feedback from the call center, the support team, and our partners kept pointing at the same problems: users struggled to open cards on their own, didn't understand the card conditions, and were confused about how they could use their limit. The interface itself also felt outdated.",
        "I was asked to rethink the overall experience without a detailed brief or a predefined solution. The first couple of weeks went into identifying the screens that created the most friction and understanding where users were getting stuck.",
      ],
    },
    approach: [
      "I started by analysing the biggest product issues and identifying the screens that created the most friction. I explored solutions from both local and international BNPL products as reference, and some of the redesign decisions were validated through A/B tests to see which approach actually performed better.",
      "The redesign itself moved quickly thanks to an existing design system, which kept the work consistent and scalable across the team.",
    ],
    outcome: {
      pull: "Roughly 100 additional installment cards opened every day.",
      stats: [
        { value: "+100", label: "Cards / day", italic: false },
      ],
      tail:
        "Beyond the metric, the bigger shift was qualitative — users now understand where and how they can actually use their available limit, and the support team spends a lot less time explaining it.",
    },
  },

  {
    slug: "pay-later-everyday",
    images: {
      hero: "https://i.postimg.cc/HnZ2yR6H/system-main.png",
      mid: [
        "https://i.postimg.cc/JhZP2Tzv/system-before.png",
        "https://i.postimg.cc/tgW2Mr4z/system-after.png",
      ],
      full: "https://i.postimg.cc/Ss4DFWXX/system-full.png",
    },
    name: "Open System",
    sector: "Design system",
    thumb: "https://i.postimg.cc/MpNdKCFh/system.png",
    cardSize: "tall",
    swatch: "#C9C0AB",
    aspect: "4/5",
    role: "Design system architect",
    team: "3 designers, 12 developers, 3 PMs",
    year: "2024 — present",
    scope: "Design system, Ecosystem",
    headline: "~40% faster feature releases",
    cardCopy: "Design system for Open company.",
    title: {
      pre: "Rethinking the customer experience by building a",
      italic: "design system",
      post: "for the company's products.",
    },
    lede:
      "Identical screens across our products were looking different. We didn't really feel like an ecosystem yet, even though our products were tightly connected.",
    context: {
      pull: "Identical screens, drifting apart in every product.",
      paragraphs: [
        "Even within a single project there wasn't a real component library. Style, spacing, and approach diverged from one product to the next. We couldn't honestly call ourselves an ecosystem — even with all the products interconnected — until the design language caught up with the architecture.",
        "I stepped into the role of informal design-system lead and owner. Every new component went through my review and testing before it joined the system.",
      ],
    },
    approach: [
      "We started with an audit — collecting every existing UI component across the products — and then introduced an atomic approach, building from the smallest primitives up.",
      "We defined design tokens for colour and typography (primitive tokens first, then semantic ones on top), built reusable components, and continuously tested them across real product scenarios. The goal was a system that stayed consistent, scaled cleanly, and was easy for the team to maintain.",
    ],
    outcome: {
      pull: "Around 40% faster development and release of new features.",
      stats: [
        { value: "~40%", label: "Faster releases", italic: false },
        { value: "Atomic", label: "Build approach", italic: true },
      ],
      tail:
        "A unified system meant fewer repetitive decisions, more consistent collaboration between designers and developers, and a foundation that lets the team build and scale interfaces much faster than before.",
    },
  },

  {
    slug: "credit-console",
    images: {
      hero: "https://i.postimg.cc/sxDm1s4V/map-main.png",
      mid: [
        "https://i.postimg.cc/W4gXH915/map-before.png",
        "https://i.postimg.cc/25h2KHSW/map-after.png",
      ],
      full: "https://i.postimg.cc/QtD0GpBG/map-full.png",
    },
    name: "Merchant's map",
    sector: "BNPL",
    thumb: "https://i.postimg.cc/L43CB0qM/merchantmap.png",
    cardSize: "square",
    swatch: "#B8AE96",
    aspect: "1/1",
    role: "Product designer",
    team: "1 designer, 3 developers, 1 PM",
    year: "2024 — 2025",
    scope: "BNPL, B2C",
    headline: "+15% DAU, +14% MAU",
    cardCopy: "Interactive map for finding stores.",
    title: {
      pre: "Rebuilding store discovery as an",
      italic: "interactive map",
      post: "— not a list of categories.",
    },
    lede:
      "I independently identified the product problems on the previous store directory and proposed a new direction for the discovery experience.",
    context: {
      pull: "A long list of categories nobody used.",
      paragraphs: [
        "The previous version of the section was a large list of categories and stores. Engagement metrics were close to zero — users didn't understand the value of the feature.",
        "The goal was to rethink the experience and create a more intuitive way for users to quickly find nearby stores where they could spend their installment limit.",
      ],
    },
    approach: [
      "Completely redesigned the section structure and the user flows around it — map navigation, store clustering, promotions, installment-plan terms, and detailed store pages with products and special offers.",
      "Each brand page picked up the key information users had been missing: installment terms, current promotions, and featured products from the store itself. The focus throughout was usability, store discovery, and lifting engagement above the list-based baseline.",
    ],
    outcome: {
      pull: "Daily engagement up 15%, monthly up 14%.",
      stats: [
        { value: "+15%", label: "DAU", italic: false },
        { value: "+14%", label: "MAU", italic: true },
      ],
      tail:
        "The map rebuilt the section's role inside the wider installment ecosystem — from a directory people ignored into a real discovery surface that drives engagement.",
    },
  },

  {
    slug: "microinvest",
    images: {
      stack: [
        "https://i.postimg.cc/5tLnRP2B/merchant-main.png",
        "https://i.postimg.cc/zG9xpm8B/merchant-figjam.png",
        "https://i.postimg.cc/QdRfSLhM/merchant-full.png",
      ],
    },
    name: "Open Merchant",
    sector: "BNPL",
    thumb: "https://i.postimg.cc/9FxLsRtd/openmerchant.png",
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
    slug: "rewards",
    images: {
      stack: [
        "https://i.postimg.cc/zvtjg6xh/med-main.png",
        "https://i.postimg.cc/FzWZL8T7/med-second.png",
        "https://i.postimg.cc/3xyLgr5d/med-third.png",
      ],
    },
    name: "VIVA Med",
    sector: "MedTech",
    thumb: "https://i.postimg.cc/QM7SB6L9/vivamed.png",
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
    slug: "bnpl-platform",
    images: {
      stack: [
        "https://i.postimg.cc/rw0TZtt6/fintech-main.png",
        "https://i.postimg.cc/q72T4VL2/fintech-second.png",
        "https://i.postimg.cc/d0GYwPBy/fintech-third.png",
      ],
    },
    name: "A-Pay",
    sector: "Fintech",
    thumb: "https://i.postimg.cc/FRQp0jNK/apay.png",
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
  logo: "https://i.postimg.cc/TY7JPzsD/logo.png",
  portrait: "https://i.postimg.cc/C56SZMkY/rasul.png",
};
