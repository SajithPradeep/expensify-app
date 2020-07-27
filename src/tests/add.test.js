const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}`;

test("Should add 2 numbers", () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test("Should generate greeting", () => {
  const greeting = generateGreeting("Sajith");
  expect(greeting).toBe("Hello Sajith");
});

test("Should generate greeting for an anonymous user", () => {
  const greeting = generateGreeting();
  expect(greeting).toBe("Hello Anonymous");
});
