export const randomInteger = (rng: [number, number]) => Math.floor(Math.random() * (rng[1] - rng[0] + 1)) + rng[0];
