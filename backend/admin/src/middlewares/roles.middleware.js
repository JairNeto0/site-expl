const ROLE_HIERARCHY = {
  superadmin: 3,
  admin: 2,
  manager: 1,
};

exports.authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user)
      return res.status(401).json({ error: 'Não autenticado' });

    if (!allowedRoles.includes(req.user.role))
      return res.status(403).json({ error: 'Sem permissão para esta ação' });

    next();
  };
};

exports.requireMinRole = (minRole) => {
  return (req, res, next) => {
    if (!req.user)
      return res.status(401).json({ error: 'Não autenticado' });

    const userLevel = ROLE_HIERARCHY[req.user.role] ?? 0;
    const requiredLevel = ROLE_HIERARCHY[minRole] ?? 99;

    if (userLevel < requiredLevel)
      return res.status(403).json({ error: 'Nível de acesso insuficiente' });

    next();
  };
};