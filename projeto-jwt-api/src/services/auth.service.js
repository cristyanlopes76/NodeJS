const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const config = require('../config/config');

class AuthService {
  async register(email, password) {
    const user = await User.create({ email, password });
    return user;
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('Usuário ou senha incorretos.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Usuário ou senha incorretos.');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
      expiresIn: '1h',
    });

    return { user, token };
  }

  async getProfile(userId) {
    const user = await User.findByPk(userId, { attributes: ['id', 'email'] });
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }
    return user;
  }
}

module.exports = new AuthService();
