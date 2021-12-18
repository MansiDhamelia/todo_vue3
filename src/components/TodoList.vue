<template>
  <div class="box-border w-full">
    <ul v-for="(todolist, i) in todoLists" :key="i" class="m-auto">
      <li
        class="
          bg-gray-200
          rounded-lg
          font-medium
          p-2
          relative
          left-0
          shadow-lg
          cursor-pointer
          bg-gradient-to-r
          from-gray-100
          mt-1
          {done:
          todolist.done}
        "
        @click="$emit('done-task', todolist)"
      >
        {{ todolist.name }}

        <i v-if="todolist.done" class="fa fa-check ml-16 absolute right-10"></i>
        <!-- <i
          @click="$emit('edit-task', i)"
          class="fa fa-edit mx-3 right-10 absolute"
        ></i> -->
        <i
          @click="$emit('delete-task', i)"
          class="fa fa-trash mx-3 right-0 absolute"
        ></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todoLists: Array,
  },
};
</script>