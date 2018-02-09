import winston from "winston";

const getStatusMessage = (statusCode) => {
  switch (statusCode) {
    case 200:
    case 201:
      return "Ok";
    case 400:
      return "Bad Request";
    case 401:
      return "Permission Denied";
    case 403:
      return "Forbidden";
    case 404:
      return "Not Found";
    case 500:
      return "Something broke!";
    default:
      return "";
  }
};

const sendResponse = (res, statusCode, data) => {
  res.setHeader("Content-Type", "application/json");
  res.status(statusCode);

  const response = {
    status: getStatusMessage(statusCode),
  };

  if (data) {
    response.data = data;
  }

  res.json(response);
};

const errorHandler = (err, req, res) => {
  winston.error(err);
  sendResponse(res, 500);
};

module.exports.sendResponse = sendResponse;

module.exports.setRoutes = (app) => {
  app.get("/", (req, res) => sendResponse(res, 200));
  app.use(errorHandler);
};
