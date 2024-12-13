const express = require('express');
const ProductService = require('../services/product.service');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const product = await ProductService.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await ProductService.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter produtos.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await ProductService.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Produto não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter o produto.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await ProductService.update(req.params.id, req.body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await ProductService.remove(req.params.id);
    res.status(200).json({ message: 'Produto deletado com sucesso.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
