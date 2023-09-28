<template>
  <div class="chat">
    <TransitionGroup name="messages">
      <Message v-for="item in items" class="item" :key="item">
        {{ item }}
      </Message>
    </TransitionGroup>
  </div>
  <button @click="add">+</button>
</template>

<script setup>
  const getInitialItems = () => [1]
  const items = ref(getInitialItems())
  let id = items.value.length + 1

  function add() {
    const i =  items.value.length
    items.value.splice(i, 0, id++)
  }
</script>

<style scoped>
  .chat {
    /* auto layout */
    flex-direction: row;
    justify-content: flex-end;

    /* inside auto layout */
    flex-grow: 1;
  }

  .messages-move,
  .messages-enter-active,
  .messages-leave-active {
    transition: transform 0.5s ease-out;
  }
  .messages-enter-from,
  .messages-leave-to {
    transform: translateX(100%);
  }
  .messages-leave-active {
    position: absolute;
  }
</style>
