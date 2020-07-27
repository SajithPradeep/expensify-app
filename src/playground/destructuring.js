// Object Destructuring

const book = {
  name: "Godfather",
  author: "Mario Puzo",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self Published" } = book.publisher;
console.log(publisherName);

// Array Destructuring

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [itemName = "Unknown Item", , mediumRate] = item;
console.log(`Medium ${itemName} costs ${mediumRate}`);
