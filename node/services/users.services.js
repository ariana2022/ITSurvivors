const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM users';
    const [data] = await sequelize.query(query)
    return data;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
