import horpyrion from "./horpyrion";

describe("horpyrion", () => {
    describe("when execute", () => {
        it("should connect", async () => {
            const connHorpyrion = await horpyrion("mongodb://localhost:27017/testProject");
            expect(connHorpyrion).to.have.property("setUser");
        });
    });
});
