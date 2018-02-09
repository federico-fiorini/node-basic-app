import sinon from "sinon";
import { sendResponse } from "routes";


const res = { json: sinon.stub(), setHeader: sinon.stub(), status: sinon.stub() };

describe("Routes", () => {
  it("sendResponse should return response data and status Ok", async () => {
    const responseData = { test: true };
    const expectedResponse = { status: "Ok", data: responseData };

    sendResponse(res, 200, responseData);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledWith(res.setHeader, "Content-Type", "application/json");
    sinon.assert.calledWith(res.json, expectedResponse);
  });
});
