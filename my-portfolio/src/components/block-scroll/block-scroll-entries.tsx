// Format:
/*
{
  title: "",
  period: "",
  description: "",
  tags: [],
  imgSrc: ""
}
 */

export const projects = [
  {
    title: "Introduction to Finance",
    period: "JUL 2025 - AUG 2025",
    description:
      "Analysed historical S&P 500 price data and integrated GDELT global news sentiment to explore predictive signals for future price movements, outperforming S&P 500 by 28.14% across 10.45 years in Python prototype backtesting.",
    tags: ["Time Series Analysis", "Sentiment", "Backtesting"],
    imgSrc: "/images/experience-entries.introduction-to-finance.png",
  },
  {
    title: "Part-of-Speech Tagger",
    period: "APR 2025",
    description:
      "Created a part-of-speech (POS) tagger trained on labeled Twitter tweet data, using hidden markov models (HMM) and Viterbi algorithm to calculate the highest likelihood tag sequence for each tweet, 81.79% classification accuracy.",
    tags: ["Hidden Markov Models", "Probability", "POS Tagger"],
    imgSrc: "/images/experience-entries.pos-tagger.png",
  },
  {
    title: "Amazon Electronics Recommendation Model",
    period: "JAN 2025 - APR 2025",
    description:
      "Introduced sentiment-analysis pipeline for reviews, improving NDCG by ~31.4% from 0.5356 to 0.7041 and MAP by ~53.7% from 0.4535 to 0.6973",
    tags: ["Machine Learning", "Sentiment Analysis", "Python"],
    imgSrc: "/images/amazon-recommender.png",
  },
  {
    title: "SingLife Matching",
    period: "JAN 2025 - FEB 2025",
    description:
      "Client-agent matching model to improve policy conversion, trained on 60k+ records using PyTorch and custom loss functions, outperforming baseline by 800×.",
    tags: ["Machine Learning", "Financial Analytics", "Python"],
    imgSrc: "/images/singlife.png",
  },
  {
    title: "Beijing Investments",
    period: "AUG 2024 - NOV 2024",
    description:
      "Exploratory data analysis of Beijing's housing market with feature correlation, pricing trends, and Tableau geospatial visualisation.",
    tags: ["EDA", "Financial Analytics", "Tableau"],
    imgSrc: "/images/beijing-analysis.png",
  },
  {
    title: "Travla (iOS App)",
    period: "MAY 2024 - APR 2025",
    description:
      "A full-stack iOS travel planning app using React Native Expo, Firebase, and Supabase with real-time data sync, secure authentication, and integrated Google Places APIs.",
    tags: ["React Native (Expo)", "Database", "iOS"],
    imgSrc: "/images/travla.png",
  },
  {
    title: "Autonomous Robot",
    period: "OCT 2023 - NOV 2023",
    description:
      "Maze-navigating robot using mBot with PID control and color sensors, achieving perfect scores across all performance rubrics.",
    tags: ["Robotics", "PID", "Electrical Engineering"],
    imgSrc: "/images/robot.png",
  },
  {
    title: "Digit Classifier",
    period: "NOV 2023",
    description:
      "MNIST-based digit recogniser using K-Nearest Neighbours (KNN), achieving 96.56% accuracy with automated testing.",
    tags: ["Image Classification", "MNIST", "Machine Learning"],
    imgSrc: "/images/classifier.png",
  },
];
