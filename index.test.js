const transformCaesarCipher = require("./index");

describe("transformCaesarCipher", () => {
  test("Should return transformed text for left shift 5 positions", () => {
    expect(
    transformCaesarCipher("ABCDEFG", 5, "left")).toBe("VWXYZAB");
  });

  test("Should return transformed text for right shift 5 positions", () => {
    expect(
    transformCaesarCipher("ABCDEFG", 5,  "right")).toBe("FGHIJKL");
  });
});