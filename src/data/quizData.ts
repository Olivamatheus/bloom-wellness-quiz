
import { Question, Profile } from "../types/quiz";

export const quizQuestions: Question[] = [
  // Section 1: Physical Health & Wellbeing
  {
    id: 1,
    text: "How would you describe your energy level throughout the day?",
    type: "scale",
    section: 1,
    minLabel: "Low energy - I often feel tired",
    maxLabel: "High energy - I feel vibrant all day",
  },
  {
    id: 2,
    text: "Which of these activities do you enjoy the most?",
    type: "multicard",
    section: 1,
    options: [
      {
        id: 1,
        text: "Yoga & Stretching",
        value: "yoga",
        imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=500&fit=crop",
      },
      {
        id: 2,
        text: "Cardio & HIIT",
        value: "cardio",
        imageUrl: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=500&h=500&fit=crop",
      },
      {
        id: 3,
        text: "Strength Training",
        value: "strength",
        imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=500&fit=crop",
      },
      {
        id: 4,
        text: "Walking & Light Activities",
        value: "walking",
        imageUrl: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=500&h=500&fit=crop",
      },
    ],
  },
  {
    id: 3,
    text: "How satisfied are you with your sleep quality?",
    type: "scale",
    section: 1,
    minLabel: "Very unsatisfied",
    maxLabel: "Very satisfied",
  },
  {
    id: 4,
    text: "How often do you experience physical discomfort (headaches, body pain, etc.)?",
    type: "single",
    section: 1,
    options: [
      { id: 1, text: "Rarely or never", value: "rare" },
      { id: 2, text: "Once a month", value: "monthly" },
      { id: 3, text: "Weekly", value: "weekly" },
      { id: 4, text: "Almost daily", value: "daily" },
    ],
  },
  {
    id: 5,
    text: "Which area of your physical health would you most like to improve?",
    type: "multicard",
    section: 1,
    options: [
      {
        id: 1,
        text: "Energy Levels",
        value: "energy",
        imageUrl: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&h=500&fit=crop",
      },
      {
        id: 2,
        text: "Body Shape & Tone",
        value: "body",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      },
      {
        id: 3,
        text: "Flexibility & Mobility",
        value: "flexibility",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
      },
      {
        id: 4,
        text: "Sleep Quality",
        value: "sleep",
        imageUrl: "https://images.unsplash.com/photo-1511295742362-96dedb5224f6?w=500&h=500&fit=crop",
      },
    ],
  },
  {
    id: 6,
    text: "How confident are you about your current nutrition habits?",
    type: "scale",
    section: 1,
    minLabel: "Not at all confident",
    maxLabel: "Very confident",
  },

  // Section 2: Mental Health & Financial Wellbeing
  {
    id: 7,
    text: "How would you describe your overall stress level?",
    type: "scale",
    section: 2,
    minLabel: "Low stress",
    maxLabel: "High stress",
  },
  {
    id: 8,
    text: "Which emotion do you most often feel during a typical week?",
    type: "emotion",
    section: 2,
    options: [
      { id: 1, text: "Joy", value: "joy" },
      { id: 2, text: "Anxiety", value: "anxiety" },
      { id: 3, text: "Contentment", value: "contentment" },
      { id: 4, text: "Frustration", value: "frustration" },
      { id: 5, text: "Overwhelm", value: "overwhelm" },
      { id: 6, text: "Optimism", value: "optimism" },
    ],
  },
  {
    id: 9,
    text: "How do you feel about your current financial situation?",
    type: "scale",
    section: 2,
    minLabel: "Very anxious",
    maxLabel: "Very secure",
  },
  {
    id: 10,
    text: "How often do you take intentional breaks from technology?",
    type: "single",
    section: 2,
    options: [
      { id: 1, text: "Rarely or never", value: "rare" },
      { id: 2, text: "Once a week", value: "weekly" },
      { id: 3, text: "Daily, short breaks", value: "daily" },
      { id: 4, text: "Regular digital detox periods", value: "regular" },
    ],
  },
  {
    id: 11,
    text: "Which mental wellbeing area would you most like to improve?",
    type: "multicard",
    section: 2,
    options: [
      {
        id: 1,
        text: "Stress Management",
        value: "stress",
        imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop",
      },
      {
        id: 2,
        text: "Focus & Productivity",
        value: "focus",
        imageUrl: "https://images.unsplash.com/photo-1457694587812-e8bf29a43845?w=500&h=500&fit=crop",
      },
      {
        id: 3,
        text: "Emotional Balance",
        value: "emotional",
        imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500&h=500&fit=crop",
      },
      {
        id: 4,
        text: "Financial Mindset",
        value: "financial",
        imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=500&fit=crop",
      },
    ],
  },
  {
    id: 12,
    text: "How often do you practice mindfulness or meditation?",
    type: "single",
    section: 2,
    options: [
      { id: 1, text: "Never tried it", value: "never" },
      { id: 2, text: "Occasionally", value: "occasionally" },
      { id: 3, text: "Weekly", value: "weekly" },
      { id: 4, text: "Daily practice", value: "daily" },
    ],
  },

  // Section 3: App Content Focus - Workouts, Performance, Charm & Sexuality
  {
    id: 13,
    text: "How important is it for you to feel more confident in your body?",
    type: "scale",
    section: 3,
    minLabel: "Not very important",
    maxLabel: "Extremely important",
  },
  {
    id: 14,
    text: "Which of these areas are you most interested in developing?",
    type: "multicard",
    section: 3,
    options: [
      {
        id: 1,
        text: "Physical Strength",
        value: "strength",
        imageUrl: "https://images.unsplash.com/photo-1528475416277-a585fb74e8c8?w=500&h=500&fit=crop",
      },
      {
        id: 2,
        text: "Feminine Energy",
        value: "feminine",
        imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&h=500&fit=crop",
      },
      {
        id: 3,
        text: "Relationship Skills",
        value: "relationship",
        imageUrl: "https://images.unsplash.com/photo-1516401266446-6432a8a07d41?w=500&h=500&fit=crop",
      },
      {
        id: 4,
        text: "Inner Confidence",
        value: "confidence",
        imageUrl: "https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?w=500&h=500&fit=crop",
      },
    ],
  },
  {
    id: 15,
    text: "What would help you feel more empowered in your daily life?",
    type: "single",
    section: 3,
    options: [
      { id: 1, text: "Better fitness & energy", value: "fitness" },
      { id: 2, text: "More balanced relationships", value: "relationships" },
      { id: 3, text: "Financial independence", value: "financial" },
      { id: 4, text: "Self-care & personal time", value: "self-care" },
    ],
  },
  {
    id: 16,
    text: "How interested are you in learning about feminine wellness practices?",
    type: "scale",
    section: 3,
    minLabel: "Not at all interested",
    maxLabel: "Very interested",
  },
  {
    id: 17,
    text: "Which would be most valuable to you in a wellness app?",
    type: "multicard",
    section: 3,
    options: [
      {
        id: 1,
        text: "Custom Workout Plans",
        value: "workouts",
        imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&h=500&fit=crop",
      },
      {
        id: 2,
        text: "Mental Health Tools",
        value: "mental",
        imageUrl: "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?w=500&h=500&fit=crop",
      },
      {
        id: 3,
        text: "Nutrition Guidance",
        value: "nutrition",
        imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&h=500&fit=crop",
      },
      {
        id: 4,
        text: "Community Support",
        value: "community",
        imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=500&fit=crop",
      },
    ],
  },
  {
    id: 18,
    text: "What's your preferred learning style for personal development?",
    type: "single",
    section: 3,
    options: [
      { id: 1, text: "Video tutorials", value: "video" },
      { id: 2, text: "Interactive exercises", value: "interactive" },
      { id: 3, text: "Reading articles", value: "reading" },
      { id: 4, text: "Guided practice with coach", value: "coaching" },
    ],
  },
];

export const profiles: Profile[] = [
  {
    title: "The Radiant Harmonizer",
    description: "You shine with a natural balance of strength and grace. Your holistic approach to wellbeing helps you adapt to life's challenges while maintaining your inner glow.",
    strengths: [
      "Natural balance seeker",
      "Holistic wellness mindset",
      "Adaptable self-care routine"
    ],
    focusAreas: [
      "Deepen your energy practices",
      "Strengthen financial confidence",
      "Enhance feminine vitality"
    ],
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop"
  },
  {
    title: "The Inner Warrior",
    description: "Your strength comes from within. You have untapped potential that, when fully activated, will transform how you move through the world both physically and emotionally.",
    strengths: [
      "Resilient spirit",
      "Determined approach",
      "Natural physical potential"
    ],
    focusAreas: [
      "Channel emotions into strength",
      "Develop consistent energy practices",
      "Balance intensity with restoration"
    ],
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  },
  {
    title: "The Intuitive Nurturer",
    description: "You naturally attune to the needs of yourself and others. Your intuitive nature gives you a unique ability to create balance, though sometimes at the expense of your own needs.",
    strengths: [
      "Deep intuitive wisdom",
      "Natural nurturing ability",
      "Emotional intelligence"
    ],
    focusAreas: [
      "Prioritize personal boundaries",
      "Balance giving with receiving",
      "Strengthen physical vitality"
    ],
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop"
  },
  {
    title: "The Energetic Creator",
    description: "You're driven by inspiration and creative energy. When in alignment, you can accomplish amazing things, but you may need help creating sustainable routines.",
    strengths: [
      "Abundant creative energy",
      "Inspired action-taker",
      "Natural enthusiasm"
    ],
    focusAreas: [
      "Develop consistent routines",
      "Balance output with restoration",
      "Ground creative energy physically"
    ],
    imageUrl: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop"
  },
  {
    title: "The Mindful Achiever",
    description: "You combine ambition with awareness, allowing you to pursue goals while staying connected to what truly matters. Your balanced approach serves you well in both career and personal life.",
    strengths: [
      "Goal-oriented focus",
      "Practical mindfulness",
      "Work-life integration skills"
    ],
    focusAreas: [
      "Deepen emotional connections",
      "Enhance physical vitality",
      "Practice joyful movement"
    ],
    imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop"
  }
];
