<!-- Chemin : views/SingleMessage.vue -->

<template>
    <div>
      <h1>J'affiche l'utilisateur d'id : {{ id }}</h1>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
const id = ref<string>('');
  
  onMounted(() => {
    // Récupérer le paramètre id de la route
    if (Array.isArray(route.params.id)) {
        id.value = route.params.id[0];
    } else {
        id.value = route.params.id;
    }
  });
  </script>
  
  <style scoped>
  /* Styles CSS spécifiques à SingleMessage.vue si nécessaire */
  </style>
  