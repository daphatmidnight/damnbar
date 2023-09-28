<template>
  <div class="damnbar">
    <Clock />
    <Chat />
    <Counters />
  </div>
</template>

<style scoped>
  .damnbar {
    /* auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    padding: var(--bar-padding);
    gap: var(--gap);

    height: var(--bar-height);

    background: var(--c-theme);
  }

  .damnbar > :deep(*) {
    /* auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 var(--gap);
    gap: var(--gap);

    /* inside auto layout */
    align-self: stretch;

    background: var(--c-bg);
  }
</style>
