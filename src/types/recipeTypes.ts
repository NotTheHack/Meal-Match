
export interface Recipe {
  id:                    string;
  image:                 string;
  imageType:             string;
  likes:                 number;
  missedIngredientCount: number;
  missedIngredients:     SedIngredient[];
  title:                 string;
  unusedIngredients:     SedIngredient[];
  usedIngredientCount:   number;
  usedIngredients:       SedIngredient[];
}

export interface SedIngredient {
  aisle:         string;
  amount:        number;
  id:            number;
  image:         string;
  meta:          string[];
  name:          string;
  original:      string;
  originalName:  string;
  unit:          string;
  unitLong:      string;
  unitShort:     string;
  extendedName?: string;
}

export interface RecipeInstructions {
  vegetarian:               boolean;
  vegan:                    boolean;
  glutenFree:               boolean;
  dairyFree:                boolean;
  veryHealthy:              boolean;
  cheap:                    boolean;
  veryPopular:              boolean;
  sustainable:              boolean;
  lowFodmap:                boolean;
  weightWatcherSmartPoints: number;
  gaps:                     string;
  preparationMinutes:       number;
  cookingMinutes:           number;
  aggregateLikes:           number;
  healthScore:              number;
  creditsText:              string;
  license:                  string;
  sourceName:               string;
  pricePerServing:          number;
  extendedIngredients:      ExtendedIngredient[];
  id:                       number;
  title:                    string;
  readyInMinutes:           number;
  servings:                 number;
  sourceUrl:                string;
  image:                    string;
  imageType:                string;
  summary:                  string;
  cuisines:                 any[];
  dishTypes:                string[];
  diets:                    any[];
  occasions:                any[];
  winePairing:              WinePairing;
  instructions:             string;
  analyzedInstructions:     AnalyzedInstruction[];
  originalId:               null;
  spoonacularSourceUrl:     string;
}

export interface AnalyzedInstruction {
  name:  string;
  steps: Step[];
}

export interface Step {
  number:      number;
  step:        string;
  ingredients: Ent[];
  equipment:   Ent[];
  length?:     Length;
}

export interface Ent {
  id:            number;
  name:          string;
  localizedName: string;
  image:         string;
  temperature?:  Length;
}

export interface Length {
  number: number;
  unit:   string;
}

export interface ExtendedIngredient {
  id:           number;
  aisle:        string;
  image:        string;
  consistency:  Consistency;
  name:         string;
  nameClean:    string;
  original:     string;
  originalName: string;
  amount:       number;
  unit:         string;
  meta:         string[];
  measures:     Measures;
}

export enum Consistency {
  Solid = "SOLID",
}

export interface Measures {
  us:     Metric;
  metric: Metric;
}

export interface Metric {
  amount:    number;
  unitShort: string;
  unitLong:  string;
}

export interface WinePairing {
  pairedWines:    any[];
  pairingText:    string;
  productMatches: any[];
}

