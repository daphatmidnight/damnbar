<template>
  <div class="clock">
    <div id="date">{{ formattedDate }}</div>
    <div id="hours">{{ formattedHours }}</div>
    <div id="minutes">{{ formattedMinutes }}</div>
    <div id="seconds">{{ formattedSeconds }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from "vue"

  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const dateTime = ref(new Date())

  const formattedDate = computed(() => {
    const day = days[dateTime.value.getDay()]
    const date = dateTime.value.getDate().toString()
    const month = months[dateTime.value.getMonth()]
    const year = dateTime.value.getFullYear().toString()

    return `${day} ${date} ${month} ${year}`
  })

  const formattedHours = computed(() => {
    const hours = dateTime.value.getHours()
    return hours < 10 ? `0${hours}` : hours.toString()
  })

  const formattedMinutes = computed(() => {
    const minutes = dateTime.value.getMinutes()
    return minutes < 10 ? `0${minutes}` : minutes.toString()
  })

  const formattedSeconds = computed(() => {
    const seconds = dateTime.value.getSeconds()
    return seconds < 10 ? `0${seconds}` : seconds.toString()
  })

  onMounted(() => {
    setInterval(() => {
      dateTime.value = new Date()
    }, 100)
  })
</script>

<style scoped>
  .clock {
    min-width: fit-content;

    font-weight: 800;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  #date {
    font-weight: 700;
    font-stretch: 70%;
    letter-spacing: -0.02em;
  }

  #hours,
  #minutes,
  #seconds {
    font-stretch: 125%;
    width: 34px;
    text-align: center;
    overflow: visible;
  }
</style>
