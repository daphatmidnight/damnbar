<template>
  <div class="message">
    <span class="badges">
      <img
        src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3"
        alt="Broadcaster"
      />
    </span>
    <span class="username">DayAtMidnight</span>
    <span class="content">lorem ipsum <Icon name="twemoji:hamburger" /></span>
  </div>
</template>

<style scoped>
  .message {
    /* auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    min-width: fit-content;
  }
  .username {
    font-family: var(--f-alpha);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--c-theme);
  }

</style>
