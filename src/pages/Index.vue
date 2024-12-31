<script>
import Container from 'src/components/Container.vue'
import NoteCard from 'src/components/NoteCard.vue'
import { useLocalNotes } from 'src/router/helper'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { NoteCard, Container },
  name: 'PageIndex',
  setup() {
    //Get the notes from localStorage data
    const notes = useLocalNotes()
    const router = useRouter()
    return { router, notes }
  },
})
</script>

<template>
  <q-page padding>
    <Container>
      <div class="row items-center justify-between">
        <h3>Your notes</h3>
        <div>
          <q-btn round color="positive" icon="add" to="/new"></q-btn>
        </div>
      </div>

      <NoteCard
        v-for="({ title, description }, idx) in notes"
        :key="idx"
        :title="title"
        :description="description"
        @click="router.push(`/note/${idx}`)"
      />

      <div v-if="notes.length === 0">You have not created any notes.</div>
    </Container>
  </q-page>
</template>

<!--

<template>
  <div id="appContainer">
    <h1>Lista de Tarefas</h1>

    <form @submit.prevent="addTodos()">
      <input v-model="newTodo" />
      <button class="waves-effect waves-light btn">Add ToDo</button>
    </form>

    <div id="todoList">
      <div
        :class="{ completed: todo.complete }"
        v-for="(todo, index) in todos"
        :key="index"
        @click="completedTodo(todo)"
      >
        <div class="row">
          <div class="col s12 m6">
            <div class="card teal teal lighten-1">
              <div class="card-content white-text">
                <span class="card-title">{{ todo.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p v-if="todos.length === 0">Empty list, please enter some tasks.</p>
    <button
      class="btn waves-effect waves-light red lighten-2"
      v-if="todos.length !== 0"
      @click="removeTodos"
    >
      Remove All Todos
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const newTodo = ref('')
    const initialLoadData = [
      {
        complete: false,
        text: 'Create todo list functionality',
      },
    ]

    let stroedTodos
    localStorage.getItem('todos')
      ? (stroedTodos = JSON.parse(localStorage.getItem('todos')))
      : (stroedTodos = initialLoadData)
    const todos = ref(stroedTodos)

    function addTodos() {
      if (newTodo.value !== '') {
        todos.value.push({
          complete: false,
          text: newTodo.value,
        })
        newTodo.value = ''
        updateStorage()
      }
    }
    function removeTodos() {
      todos.value.splice(0, todos.value.length)
      updateStorage()
    }
    function completedTodo(todo) {
      todo.complete = !todo.complete
      updateStorage()
    }
    function updateStorage() {
      localStorage.setItem('todos', JSON.stringify(todos.value))
    }
    return {
      completedTodo,
      removeTodos,
      addTodos,
      todos,
      newTodo,
    }
  },
}
</script>

<style>
#todoList {
  margin: 2%;
  padding: 0%;
}
.card-content:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 2);
}
#todoList div.completed {
  opacity: 0.5;
}
#appContainer {
  padding: 2%;
}
</style>

-->

<!--

<template>
  <q-page class="flex flex-center">
    <div class="todo-list">
    <h1>Minha Lista de Tarefas</h1>
    <input type="text" v-model="novaTarefa" @keyup.enter="adicionarTarefa" placeholder="Adicione uma tarefa">
    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa.id">
        <input type="checkbox" v-model="tarefa.concluida">
        <span :class="{ 'concluida': tarefa.concluida }">{{ tarefa.texto }}</span>
        <button class="btn waves-effect waves-light red lighten-2" @click="removerTarefa(tarefa.id)">Remover</button>
      </li>
    </ul>
      <p v-if="tarefas.length === 0">Nenhuma tarefa adicionada ainda.</p>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue';

const tarefas = reactive([]);
const novaTarefa = ref('');
let proximoId = 1;

const adicionarTarefa = () => {
  if (novaTarefa.value.trim() !== '') {
    tarefas.push({ id: proximoId++, texto: novaTarefa.value.trim(), concluida: false });
    novaTarefa.value = '';
  }
};

const removerTarefa = (id) => {
    const index = tarefas.findIndex(tarefa => tarefa.id === id);
    if(index !== -1){
        tarefas.splice(index, 1);
    }
};

</script>

<style scoped>
.todo-list {
  font-family: sans-serif;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.concluida {
  text-decoration: line-through;
  color: #888;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

li span {
    flex-grow: 1;
    margin: 0 10px;
}
</style>

-->
