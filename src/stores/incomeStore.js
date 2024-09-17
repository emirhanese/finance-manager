import { defineStore } from 'pinia';

export const useIncomeStore = defineStore('income', {
  state: () => ({
    incomes: [],
  }),
  actions: {
    addIncome(income) {
      this.incomes.push(income);
    },
  },
});