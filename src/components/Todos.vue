<template>
  <div class="min-h-full justify-center flex">
    <div class="box-border w-2/4">
      <div class="m-auto rounded-lg">
        <input
          class="h-12 p-2 w-9/12 bg-slate-300-300 shadow-lg from-slate-50 mb-3"
          type="text"
          id="txtId"
          v-model="newTodo"
          placeholder="Add text..."
        />
        <button
          class="
            p-2
            h-10
            w-3/12
            font-semibold
            hover:shadow-lg hover:border-transparent
            shadow-md
            rounded-lg
            bg-gradient-to-r
            hover:from-gray-200
          "
          @click="add"
        >
          Add New
        </button>
      </div>
      <div class="m-2 w-full">
        <TodoList
          :todo-lists="data"
          @delete-task="deleteTask"
          @edit-task="editTask"
          @done-task="done"
        />
      </div>
    </div>
  </div>
</template>



<script>
import { ref, reactive } from "vue";
import TodoList from "../components/TodoList.vue";

export default {
  components: {
    TodoList,
  },
  setup() {
    let newTodo = ref("");
    let isEdit = ref(false);
    const data = ref([
      {
        id: 0,
        name: "dancing",
        done: false,
      },
    ]);

    function add() {
      // if (isEdit === true ) {
      //   console.log(isEdit);
      //   data.name = newTodo.value;
      // } else {
      data.value.push({ done: false, name: newTodo.value });
      newTodo.value = "";
    }
    function deleteTask(i) {
      data.value.splice(i, 1);
    }
    function done(todolist) {
      todolist.done = !todolist.done;
    }

    return {
      add,
      newTodo,
      data,
      deleteTask,
      // editTask,
      done,
    };
  },
};
</script>