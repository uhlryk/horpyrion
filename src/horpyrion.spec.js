import horpyrion from "./horpyrion";

describe("horpyrion", () => {
    describe("when execute", () => {
        it("should return object with setUser method", () => {
            expect(horpyrion("mongodb://localhost:27017/testProject")).to.have.property("setUser");
        });
    });
});
