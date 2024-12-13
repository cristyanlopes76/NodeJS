const { Product } = require('../models');

class ProductService {
  async create(productData) {
    const { name, price } = productData;

    // Validações
    if (!name || name.trim() === '') {
      throw new Error('O nome do produto é obrigatório.');
    }

    if (price <= 0) {
      throw new Error('O preço do produto deve ser maior que zero.');
    }

    const product = await Product.create(productData);
    return product;
  }

  async findAll() {
    return Product.findAll();
  }

  async findById(id) {
    return Product.findByPk(id);
  }

  async update(id, productData) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Produto não encontrado.');
    }

    await product.update(productData);
    return product;
  }

  async remove(id) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Produto não encontrado.');
    }
    await product.destroy();
    return { message: 'Produto deletado com sucesso' };
  }
}

module.exports = new ProductService();
