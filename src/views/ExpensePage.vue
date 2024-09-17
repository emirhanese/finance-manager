<template>
  <div class="expense-page">
    <h1>Gider Ekle</h1>
    <form @submit.prevent="addExpense">
      <input v-model="amount" type="number" placeholder="Miktar" required />
      <input v-model="category" type="text" placeholder="Gider Kategorisi" required />
      <button type="submit">Ekle</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useExpenseStore } from '../stores/expenseStore';

export default {
  name: 'ExpensePage',
  setup() {
    const expenseStore = useExpenseStore();
    const amount = ref('');
    const category = ref('');

    const addExpense = () => {
      expenseStore.addExpense({
        amount: parseFloat(amount.value),
        category: category.value,
      });
      amount.value = '';
      category.value = '';
    };

    return {
      amount,
      category,
      addExpense,
    };
  },
};
</script>

<style>
.expense-page {
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
