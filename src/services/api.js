import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  async getIncomes() {
    const response = await apiClient.get('/incomes');
    return response.data;
  },
  async getExpenses() {
    const response = await apiClient.get('/expenses');
    return response.data;
  },
  // Diğer API çağrıları
};
