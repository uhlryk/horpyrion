import chai from "chai";
const expect = chai.expect;
global.expect = expect;
import dirtyChai from "dirty-chai";
chai.use(dirtyChai);
import chaiSubset from "chai-subset";
chai.use(chaiSubset);
import chaiUuid from "chai-uuid";
chai.use(chaiUuid);
import request from "supertest";
global.request = request;
import sinon from "sinon";
global.sinon = sinon;
global.DB_CONFIGURATION = {
    host: "mongodb://localhost:27017",
    dbName: "myproject"
};
