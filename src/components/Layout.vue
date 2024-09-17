<template>
    <div id="layout">
      <!-- Sidebar -->
      <aside class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
        <nav>
          <ul>
            <li><router-link to="/">Dashboard</router-link></li>
            <li><router-link to="/income">Gelir Ekle</router-link></li>
            <li><router-link to="/expense">Gider Ekle</router-link></li>
          </ul>
        </nav>
      </aside>
  
      <!-- Main Content -->
      <div class="main-content">
        <!-- Hamburger Button -->
        <button class="hamburger" :class="{ 'sidebar-open': isSidebarOpen }" @click="toggleSidebar">
          <span class="material-icons">{{ isSidebarOpen ? 'close' : 'menu' }}</span>
        </button>
  
        <!-- Router View -->
        <router-view />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isSidebarOpen = ref(false);
  
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };
  </script>
  
  <style scoped>
  #layout {
    display: flex;
    position: relative;
  }
  
  .sidebar {
    width: 250px;
    background-color: #2c3e50;
    color: #fff;
    height: 100vh;
    padding: 1rem;
    transition: transform 0.3s ease;
    transform: translateX(-100%);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  
  .sidebar-open {
    transform: translateX(0);
  }
  
  .main-content {
    flex-grow: 1;
    padding: 1rem;
    margin-left: 0;
    transition: margin-left 0.3s ease, margin-top 0.3s ease;
    margin-top: 3rem; /* To prevent overlap with the header */
  }
  
  .sidebar-open ~ .main-content {
    margin-left: 250px;
  }
  
  .hamburger {
    position: fixed;
    top: 1rem;
    left: 1rem;
    background-color: transparent; /* Default black background */
    color: black;
    font-size: 24px;
    cursor: pointer;
    z-index: 1100; /* Ensure button is on top */
    transition: background-color 0.3s ease, transform 0.3s ease;
    padding: 0.5rem;
    border-radius: 50%;
    border: none;
  }
  
  .hamburger.sidebar-open {
    background-color: transparent; /* Background color when sidebar is open */
    color: black; /* Text color when sidebar is open */
  }
  
  .hamburger:hover {
    transform: scale(1.1); /* Slightly enlarge button on hover */
  }
  
  .hamburger .material-icons {
    transition: transform 0.3s ease, color 0.3s ease;
  }
  
  .hamburger.sidebar-open .material-icons {
    color: white; /* Change icon color when sidebar is open */
  }
  
  .hamburger .material-icons.close {
    transform: rotate(45deg); /* Rotate icon when sidebar is open */
  }
  </style>
  