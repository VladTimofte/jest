import {
  add,
  greet,
  multiply,
  createProductObject,
  increment,
  reset,
  fetchData,
  fetchDataWithCallback,
} from "../utils/utils.js";

describe("Utils functions", () => {
  test("should greet the user with it's name", () => {
    expect(greet("Alice")).toMatch("Hello, Alice!");
    expect(greet("Alice")).toBeTruthy();
    expect(greet("Alice")).not.toBeFalsy();
    expect(greet("Alice")).not.toBeNull();
    expect(greet("Alice")).not.toBeUndefined();
  });

  test("should add two numbers corectly", () => {
    expect(add(10, 15)).toBe(25);
    expect(add("10", "15")).toBe(25);
    expect(add(-10, -15)).toBe(25);

    expect(add(-10, -15)).toBeGreaterThan(0);
    expect(add(-10, -15)).toBeGreaterThanOrEqual(25);
    expect(add(-10, -15)).toBeLessThan(30);
    expect(add(-10, -15)).toBeLessThanOrEqual(30);
  });

  test("should multiply two numbers corectly", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(2, 0)).toBe(0);
  });

  test("should create a product object", () => {
    const mockProduct = {
      productName: "ciocolata",
      unitPrice: 10,
      totalProducts: 50,
      totalPrice: 500,
    };
    expect(createProductObject("ciocolata", 10, 50, 500)).toEqual(mockProduct);
    expect(createProductObject("ciocolata", "10", 50, 500)).toEqual(
      mockProduct
    );
  });
});

describe("Custom tests", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  test("The shopiing list has milk on it", () => {
    expect(shoppingList).toContain("milk");
  });

  //await / async
  test("fetchData returns data has received with await", async () => {
    const data = await fetchData();
    expect(data).toBe("Data has received");
  });
  //Promise .then
  test("fetchData returns data has received with .then", () => {
    return fetchData().then((data) => {
      expect(data).toBe("Data has received");
    });
  });

  test("calls the callback with the correct data", (done) => {
    function callback(data) {
      try {
        expect(data).toBe("Data has been fetched");
        done(); // Indicate that the test is complete
      } catch (error) {
        done(error); // Indicate an error occurred
      }
    }

    fetchDataWithCallback(callback);
  });
});

describe("Hooks", () => {
  
  beforeEach(() => {
    // Reset the counter before each test
    reset();
  });

  afterEach(() => {
    // Log the counter value after each test (or perform any necessary cleanup)
    console.log(`Counter after test: ${reset()}`);
  });

  test("should start counter at 1 after first increment", () => {
    expect(increment()).toBe(1);
  });

  test("should increment counter to 2", () => {
    increment(); // counter becomes 1
    expect(increment()).toBe(2); // counter becomes 2
  });
});
