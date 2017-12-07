const getStatusMessage = (statusCode) => {
  switch (statusCode) {
    case 200:
    case 201:
      return "Ok";
    case 400:
      return "Bad Request";
    case 401:
      return "Permission Denied";
    case 404:
      return "Not Found";
    default:
      return "";
  }
};

export const sendResponse = (res, statusCode, responseData) => {
  res.setHeader("Content-Type", "application/json");
  res.status(statusCode);

  const response = {
    status: getStatusMessage(statusCode),
  };

  if (responseData) {
    response.data = responseData;
  }

  res.send(JSON.stringify(response));
};

export const index = (req, res) => {
  sendResponse(res, 200);
};
