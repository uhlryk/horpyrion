import chai from "chai";
const expect = chai.expect;
global.expect = expect;
import dirtyChai from "dirty-chai";
chai.use(dirtyChai);
import chaiSubset from "chai-subset";
chai.use(chaiSubset);
import request from "supertest";
global.request = request;
import sinon from "sinon";
global.sinon = sinon;
global.DB_CONFIGURATION = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    dbname: process.env.POSTGRES_DB || "test",
    user: process.env.POSTGRES_USER || "test",
    password: process.env.POSTGRES_PASSWORD || "test",
    port: "5432",
    logging: false
};
