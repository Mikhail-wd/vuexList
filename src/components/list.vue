<script setup>
import { ref, onMounted, watch, reactive } from "vue";
import store from "../store";

const listOfTodo = ref([]);
const title = ref("");
const taskValue = ref("");
const editedTodo = ref("");

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

const deleteTodo = (id) => {
  const data = listOfTodo.value.filter((item) => item.id !== id);
  localStorage.setItem("listArray", JSON.stringify(data));
  listOfTodo.value = data;
};

const editInput = (id, todo) => {
  const data = listOfTodo.value.findIndex((item) => item.id === id);
  listOfTodo.value[data].todo = todo;
  localStorage.setItem("listArray", JSON.stringify(listOfTodo.value));
  editedTodo.value = "";
};

watch(listOfTodo.value, (value) => {
  localStorage.setItem("listArray", JSON.stringify(value));
});

onMounted(() => {
  store.dispatch("srtArray");
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
      <button class="delete" @click="deleteTodo(index.id)">X</button>
      <p>
        {{ index.name }}
      </p>
      <p v-show="editedTodo !== index.id">{{ index.todo }}</p>
      <input
        v-show="editedTodo === index.id"
        type="text"
        placeholder="Описание"
        v-model="index.todo"
      />

      <button v-show="editedTodo === index.id" @click="editInput(index.id, index.todo)">
        Применить
      </button>
      <button v-show="editedTodo !== index.id" @click="editedTodo = index.id">
        Изменить
      </button>
    </div>
  </div>
</template>

<style></style>
