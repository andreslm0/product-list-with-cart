import { API_BASE_URL } from './api.config';

const API_URL = `${API_BASE_URL}/api/orders`;

function getAuthHeaders() {
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

export const orderService = {
  async createOrder(orderData) {
    const res = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(orderData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || data.errors?.[0]?.msg || 'Error al crear pedido');
    return data;
  },
};
