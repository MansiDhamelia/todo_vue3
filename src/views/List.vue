<template>
  <!-- <div class="flex flex-wrap flex-row"> -->
  <ul>
    <li v-for="(todolist, i) in todoLists" :key="i">
      <span class="name">{{ todolist.name }}</span>
      <i @click="updateData(todolist.id)" class="fa fa-edit"></i>
      <i @click="deleteData(todolist.id)" class="fa fa-trash"></i>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todoLists: Array,
    // deleteData: function
    // updateData: function
  },
};
</script>