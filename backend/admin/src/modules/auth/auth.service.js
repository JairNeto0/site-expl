const db = require('../../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (email, password) => {
  try {
    const result = await db.query(
      "SELECT * FROM users WHERE email = $1 AND role IN ('superadmin', 'admin', 'manager')",
      [email]
    );

    const user = result.rows[0];
    if (!user) throw new Error('Credenciais invalidas');

    if (!user.is_active)
      throw new Error('Usuario bloqueado');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Credenciais invalidas');

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return {
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    };
  } catch (err) {
    console.error('Erro detalhado:', err.message);
    throw err;
  }
};