<template>
  <div class="dashboard">
    <header>
      <h1>Finans Dashboard</h1>
    </header>
    <main>
      <section class="summary">
        <h2>Özet</h2>
        <div class="summary-content">
          <div class="card">
            <h3>Toplam Gelir</h3>
            <p>{{ totalIncome }} TL</p>
          </div>
          <div class="card">
            <h3>Toplam Gider</h3>
            <p>{{ totalExpense }} TL</p>
          </div>
          <div class="card">
            <h3>Net Kar</h3>
            <p>{{ netProfit }} TL</p>
          </div>
        </div>
      </section>
      <!-- Ekstra özellikler ve görselleştirmeler burada yer alacak -->
      <section class="details">
        <h2>Gider Kategorileri</h2>
        <!-- Gider kategorileri ve grafikler burada yer alacak -->
      </section>
    </main>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useIncomeStore } from '../stores/incomeStore';
import { useExpenseStore } from '../stores/expenseStore';

export default {
  name: 'Dashboard',
  setup() {
    const incomeStore = useIncomeStore();
    const expenseStore = useExpenseStore();

    const totalIncome = computed(() => incomeStore.incomes.reduce((sum, income) => sum + income.amount, 0));
    const totalExpense = computed(() => expenseStore.expenses.reduce((sum, expense) => sum + expense.amount, 0));
    const netProfit = computed(() => totalIncome.value - totalExpense.value);

    return {
      totalIncome,
      totalExpense,
      netProfit,
    };
  },
}
</script>

<style>
.dashboard {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
}

header {
  background: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
}

h1 {
  margin: 0;
}

main {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.summary {
  margin-bottom: 20px;
}

.summary-content {
  display: flex;
  gap: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.card h3 {
  margin: 0 0 10px;
}

.card p {
  font-size: 24px;
  font-weight: bold;
}

.details {
  margin-top: 20px;
}
</style>
