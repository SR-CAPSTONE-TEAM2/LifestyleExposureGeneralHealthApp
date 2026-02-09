export type MealType = 'Breakfast' | 'Lunch' | 'Dinner';

export type Vitamins = {
  vitaminA: number; // mcg
  vitaminB1: number; // mg
  vitaminB2: number; // mg
  vitaminB3: number; // mg
  vitaminB5: number; // mg
  vitaminB6: number; // mg
  vitaminB12: number; // mcg
  folate: number; // mcg
  vitaminC: number; // mg
  vitaminD: number; // mcg
  vitaminE: number; // mg
  vitaminK: number; // mcg
};

export type Minerals = {
  calcium: number; // mg
  copper: number; // mg
  iron: number; // mg
  magnesium: number; // mg
  manganese: number; // mg
  phosphorus: number; // mg
  selenium: number; // mcg
  sodium: number; // mg
  zinc: number; // mg
};

export type FoodItem = {
  id: string;
  name: string;
  meal: MealType;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  vitamins: Vitamins;
  minerals: Minerals;
};
