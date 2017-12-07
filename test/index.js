import sinon from "sinon";
import { expect } from "chai";
import { index } from "controllers";


const res = { send: sinon.stub(), setHeader: sinon.stub(), status: sinon.stub() };

describe("Api", function() {

  it("Should get status Ok", async () => {

    const req = { params: { }, body: { } };
    const expectedResponse = { status: "Ok" };

    await index(req, res);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledWith(res.setHeader, 'Content-Type', 'application/json');
    sinon.assert.calledWith(res.send, JSON.stringify(expectedResponse));
  });
});
