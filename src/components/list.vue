<script setup>
import { ref, onMounted, watch, computed } from "vue";
import store from "../store";

const listOfTodo = ref([]);
const title = ref("");
const taskValue = ref("");

const addTodo = () => {
  if (title.value.length >= 4 && taskValue.value.length >= 4) {
    listOfTodo.value.push({
      id: new Date().getTime(),
      name: title.value,
      todo: taskValue.value,
    });
    localStorage.setItem("listArray", JSON.stringify(listOfTodo.value));
  }
  title.value = "";
  taskValue.value = "";
};

watch(listOfTodo.value, (value) => {
  localStorage.setItem("listArray", JSON.stringify(value));
});

onMounted(() => {
  store.dispatch('srtArray')
  if (!localStorage.getItem("listArray")) {
    localStorage.setItem("listArray", "");
  } else {
    listOfTodo.value = store.state.todos;
  }
});
</script>

<template>
  <h2>This is todo list page</h2>
  <div class="list">
    <form class="input-list" @submit.prevent="addTodo">
      <label>
        <input type="text" placeholder="Название" v-model="title" />
        <input type="text" placeholder="Описание" v-model="taskValue" />
      </label>
      <input type="submit" class="button" value="Записать" />
    </form>
    <div class="list-item" v-for="index in listOfTodo">
      <p>{{ index.name }}</p>
      <p>{{ index.todo }}</p>
    </div>
  </div>
</template>

<style></style>
