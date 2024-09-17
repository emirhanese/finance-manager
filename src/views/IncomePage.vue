<template>
  <div class="income-page">
    <h1>Gelir Ekle</h1>
    <form @submit.prevent="addIncome">
      <input v-model="amount" type="number" placeholder="Miktar" required />
      <input v-model="source" type="text" placeholder="Gelir Kaynağı" required />
      <button type="submit">Ekle</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useIncomeStore } from '../stores/incomeStore';

export default {
  name: 'IncomePage',
  setup() {
    const incomeStore = useIncomeStore();
    const amount = ref('');
    const source = ref('');

    const addIncome = () => {
      incomeStore.addIncome({
        amount: parseFloat(amount.value),
        source: source.value,
      });
      amount.value = '';
      source.value = '';
    };

    return {
      amount,
      source,
      addIncome,
    };
  },
};
</script>

<style>
.income-page {
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
input, button {
  margin-bottom: 10px;
}
</style>
