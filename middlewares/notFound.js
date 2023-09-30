import { response } from "./../utils";

const notFound = (req, res) => {
  return response(res, 404, "Route not found");
};

export {
  notFound,
};
