<template>
  <div id="app">
    <h1>📦 Daily 1KB Dump</h1>
    <DumpForm />
  </div>
</template>

<script setup>
import DumpForm from './components/Dump.vue'
</script>

<style>
body {
  margin: 0;
  background-color: #e0ffcd;
  font-family: 'VT323', monospace;
  display: flex;
  justify-content: center;
  padding: 3rem;
  color: #222;
}

#app {
  max-width: 600px;
  background: #fff176;
  border: 4px solid #fbc02d;
  border-radius: 12px;
  box-shadow: 4px 4px 0px #c8a415;
  padding: 2rem;
  position: relative;
}

</style>
