import Horpyrion from "./Horpyrion";

describe("Horpyrion", () => {
    it("should create instance", () => {
        const horpyrion = new Horpyrion();
        expect(horpyrion).to.be.instanceof(Horpyrion);
    });

    describe("when instance exist", () => {
        let horpyrion;
        beforeEach(() => {
            horpyrion = new Horpyrion();
        });

        it("should connect to database", async () => {
            const connection = await horpyrion.connect();
            expect(connection).to.be.true();
        });
    });
});
