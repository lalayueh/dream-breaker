export default (routes) => (req, res, next) => {
  // setup req
  req.dreamBreaker.react = req.dreamBreaker.react || {};
  req.dreamBreaker.react.routes = routes;

  next();
};
