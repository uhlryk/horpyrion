import Horpyrion from "./Horpyrion";

describe("Horpyrion", () => {
    it("should create instance", () => {
        const horpyrion = new Horpyrion("mongodb://localhost:27017/testProject");
        expect(horpyrion).to.be.instanceof(Horpyrion);
    });

    describe("when instance exist", () => {
        let horpyrion;
        beforeEach(() => {
            horpyrion = new Horpyrion("mongodb://localhost:27017/testProject");
        });

        it("should connect to database", async () => {
            await horpyrion.sync();
        });
    });
});
