
<template>
  <div class="wrapper">
    <TheHeader></TheHeader>
    <main>
      <Home></Home>
    </main>
  </div>
</template>

<script setup>
  import Home from './components/Home.vue';
  import TheHeader from './components/TheHeader.vue';
</script>

<style>
.wrapper {
  height: 100dvh;
  width: 100%;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
}

main {
  height: 100%;
}
</style>
