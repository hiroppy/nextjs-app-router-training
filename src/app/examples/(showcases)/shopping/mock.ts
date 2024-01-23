export type Item = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
};

export const items = (<const>[
  {
    id: 0,
    name: "Apple",
    description:
      "An apple is a sweet to tart fruit, typically red, green, or yellow, grown on apple trees.",
    thumbnail: "🍎",
  },
  {
    id: 1,
    name: "Hamburger",
    description:
      "A hamburger is a sandwich with a cooked beef patty between buns, often served with toppings.",
    thumbnail: "🍔",
  },
]) satisfies Item[];
