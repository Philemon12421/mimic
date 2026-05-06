import { IdeaOutput, UserType } from "../types";

/**
 * MINIC Internal Blueprint Engine
 * A local, logic-driven system for structured strategy generation.
 * No external APIs used.
 */
export async function generateBlueprint(userType: UserType, answers: Record<string, string>, outputType: string): Promise<IdeaOutput> {
  // Simulate a short processing time for "Synthesis" effect
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Extract core concepts from answers to make the output feel personalized
  const targetAudience = Object.values(answers)[0] || "Target Market";
  const coreProblem = Object.values(answers)[1] || "Unsolved Need";
  const uniqueValue = Object.values(answers)[2] || "Strategic Innovation";

  const title = `${uniqueValue} for ${targetAudience}`;
  
  return {
    title: title.length > 50 ? title.substring(0, 47) + "..." : title,
    idea: `A comprehensive ${outputType.toLowerCase()} designed to solve "${coreProblem}" through the application of ${uniqueValue}. This blueprint focuses on scalability, user resonance, and structural efficiency.`,
    steps: [
      `Initialize ${outputType} framework focused on ${targetAudience}.`,
      `Implement core logic addressing ${coreProblem}.`,
      `Develop strategic vectors for ${uniqueValue} integration.`,
      `Phase 1: Architecture stabilization and initial node deployment.`,
      `Phase 2: Scaling distribution through verified audience clusters.`,
      `Final Implementation: Universal release across all targeted vectors.`
    ],
    seo_keywords: [
      `${targetAudience.split(' ')[0]} Trends`,
      `${outputType.split(' ')[0]} Strategy`,
      "Growth Blueprint",
      "Strategic Innovation",
      "Market Logic"
    ],
    tags: [
      outputType.split(' ')[0].toLowerCase(),
      userType.replace('_', ''),
      "strategy",
      "blueprint"
    ],
    score_rating: 85 + Math.floor(Math.random() * 10)
  };
}
