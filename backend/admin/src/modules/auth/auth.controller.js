const authService = require('./auth.service');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });

    const data = await authService.login(email, password);
    res.json(data);
  } catch (err) {
    next(err);
  }
};