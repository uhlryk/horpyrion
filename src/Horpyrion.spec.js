import Horpyrion from "./Horpyrion";

describe("Horpyrion", () => {
    it("should create instance", () => {
        const horpyrion = new Horpyrion();
        expect(horpyrion).to.be.instanceof(Horpyrion);
    });
});
