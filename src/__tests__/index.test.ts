import { expect, test } from "@rstest/core";
import { sayHi } from "./first";

test("should sayHi correctly", () => {
    expect(sayHi()).toBe("hi");
});



