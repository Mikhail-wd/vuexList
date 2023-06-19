<script setup></script>

<template>
  <header>
    <nav>
      <a href="#/"> Home</a>
      <a href="#/list"> About</a>
    </nav>
  </header>
  <div class="content">
    <router-view></router-view>
  </div>
  <footer></footer>
</template>

<style>
@import url("./styles.css");
</style>
