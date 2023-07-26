module.exports = function checkAuth(req, res, next) {
  req.authStatus = true;

  if (req.authStatus == true) {
    console.log("usuário logado");
    next();
    return;
  }
  console.log("usuário não possui permissão de acesso");
  res.send("permissão negada!!");
  next();
};
