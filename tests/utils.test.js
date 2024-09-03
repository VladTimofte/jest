import {
  add,
  greet,
  multiply,
  createProductObject,
  updateLocalStorage,
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

describe("Custom tests", () =>  {
    const shoppingList = [
        "diapers",
        "kleenex",
        "trash bags",
        "paper towels",
        "milk",
      ];

      test("The shopiing list has milk on it", () => {
        expect(shoppingList).toContain("milk")
      })

      async function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data has received")
            }, 2000)
        })
      }
      //await / async
      test("fetchData returns data has received with await", async () => {
        const data = await fetchData();
        expect(data).toBe("Data has received")
      })
      //Promise .then
      test("fetchData returns data has received with .then", () => {
        return fetchData().then((data) => {
            expect(data).toBe("Data has received")
        } )
      })


})
