<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Vue 3</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/test-1">Test 1</RouterLink></li>
      </ul>
    </div>
  </nav>
  
  <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->

  <RouterView />
</template>

<style>

</style>
