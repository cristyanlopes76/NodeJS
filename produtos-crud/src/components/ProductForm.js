import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = 'O nome é obrigatório';
    if (!formData.price || isNaN(formData.price) || formData.price <= 0)
      errors.price = 'O preço deve ser um número válido e não negativo';
    if (!formData.description) errors.description = 'A descrição é obrigatória';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post('http://localhost:3000/produtos', formData);
      setSuccessMessage('Produto cadastrado com sucesso!');
      setFormData({ name: '', price: '', description: '' });
    } catch (error) {
      console.error('Erro ao cadastrar o produto:', error);
      setSuccessMessage('Erro ao cadastrar o produto. Tente novamente.');
    }
  };

  return (
    <div className="product-form-container">
      <h2>Cadastro de Produto</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
          />
          {errors.price && <span className="error-message">{errors.price}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default ProductForm;
