<template>
  <div class="counters">
    <span class="follows"><Icon name="bxs:heart" /> 10</span>
    <span class="food"><Icon name="bx:fork" /> 5</span>
    <span class="donation"><Icon name="bx:bxs-donate-heart" /> &euro;100.00</span>
  </div>
</template>

<style>
  .counters {
    min-width: fit-content;

    font-family: var(--f-alpha);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .counters span {
    /* auto layout */
    display: flex;
    flex-direction: row;
    align-tracks: center;
    gap: 4px;
  }
</style>
