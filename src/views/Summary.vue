<template>
    <div class="summary">
      <div>
        <h3>Toplam Gelir</h3>
        <p>{{ financialStore.totalIncome }}₺</p>
      </div>
      <div>
        <h3>Toplam Gider</h3>
        <p>{{ financialStore.totalExpense }}₺</p>
      </div>
      <div>
        <h3>Net Bakiye</h3>
        <p>{{ financialStore.netBalance }}₺</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useFinancialStore } from '../stores/financial';
  
  export default {
    setup() {
      const financialStore = useFinancialStore();
      return { financialStore };
    }
  };
  </script>
  
  <style scoped>
  .summary {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
  }
  
  .summary div {
    background-color: #ecf0f1;
    padding: 1rem;
    border-radius: 8px;
    width: 30%;
    text-align: center;
  }
  
  .summary h3 {
    margin-bottom: 0.5rem;
  }
  
  .summary p {
    font-size: 1.5rem;
    font-weight: bold;
  }
  </style>