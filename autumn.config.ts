import { product, priceItem } from "atmn";

// One-time donation products
export const donate10 = product({
  id: "donate_10",
  name: "Donate £10",
  items: [priceItem({ price: 1000 })],
});

export const donate25 = product({
  id: "donate_25",
  name: "Donate £25",
  items: [priceItem({ price: 2500 })],
});

export const donate50 = product({
  id: "donate_50",
  name: "Donate £50",
  items: [priceItem({ price: 5000 })],
});

export const donate100 = product({
  id: "donate_100",
  name: "Donate £100",
  items: [priceItem({ price: 10000 })],
});

// Monthly donation products
export const donate10Monthly = product({
  id: "donate_10_monthly",
  name: "Donate £10 Monthly",
  items: [priceItem({ price: 1000, interval: "month" })],
});

export const donate25Monthly = product({
  id: "donate_25_monthly",
  name: "Donate £25 Monthly",
  items: [priceItem({ price: 2500, interval: "month" })],
});

export const donate50Monthly = product({
  id: "donate_50_monthly",
  name: "Donate £50 Monthly",
  items: [priceItem({ price: 5000, interval: "month" })],
});

export const donate100Monthly = product({
  id: "donate_100_monthly",
  name: "Donate £100 Monthly",
  items: [priceItem({ price: 10000, interval: "month" })],
});

// Custom donation (placeholder, we might need to handle this differently)
export const donateCustom = product({
  id: "donate_custom",
  name: "Custom Donation",
  items: [priceItem({ price: 100 })], // Base price of £1, maybe we use quantity?
});

export default {
  products: [
    donate10, donate25, donate50, donate100,
    donate10Monthly, donate25Monthly, donate50Monthly, donate100Monthly,
    donateCustom
  ],
  features: [],
};
