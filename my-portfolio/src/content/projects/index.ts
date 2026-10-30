import gdelt from "./gdelt-sentiment";
import openclaw from "./openclaw-network";
import careersphere from "./careersphere";
import systematicPortfolio from "./systematic-portfolio";
import stateOfTheStrait from "./state-of-the-strait";
import bankAccountFraud from "./bank-account-fraud";
import bitcoinFraudGraph from "./bitcoin-fraud-graph";
import jurai from "./jurai";
import travlah from "./travlah";
import hack4goodMarketplace from "./hack4good-marketplace";
import localCalendarAssistant from "./local-calendar-assistant";
import hmmPosTagger from "./hmm-pos-tagger";
import { newestFirst } from "../types";

export const projects = newestFirst([
  careersphere, systematicPortfolio, stateOfTheStrait, bankAccountFraud,
  bitcoinFraudGraph, jurai, travlah, hack4goodMarketplace,
  localCalendarAssistant, hmmPosTagger, gdelt, openclaw,
]);
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
