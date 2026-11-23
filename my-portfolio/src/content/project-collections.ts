export const selectedProjectSlugs = ["crop-yield-research", "room", "please-help-me"];

// Collections describe a project's primary context, independently of its technologies.
export const projectCollections = [
  { id: "research", title: "Research", slugs: ["crop-yield-research", "gdelt-sentiment", "state-of-the-strait", "systematic-portfolio"] },
  { id: "applications", title: "Applications", slugs: ["room", "careersphere", "please-help-me", "stashpa", "jurai", "hack4good-marketplace", "local-calendar-assistant", "openclaw-network-mapping"] },
  { id: "coursework", title: "Coursework", slugs: ["bank-account-fraud", "bitcoin-fraud-graph", "amazon-recommendation", "travla", "travlah", "autonomous-robot", "hmm-pos-tagger"] },
] as const;
