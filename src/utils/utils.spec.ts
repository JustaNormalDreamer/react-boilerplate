import { describe, expect, it } from "@jest/globals";
import { doSomething } from "./utils";

describe("Utilities", () => {
    it("Test Do Something", () => {
        expect(doSomething()).toBe("Hello");
    });
});