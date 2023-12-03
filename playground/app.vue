<template>
  <div>
    <div data-t="server-data">
      {{ serverData }}
    </div>
    <div data-t="client-data">
      {{ clientData }}
    </div>
  </div>
</template>

<script setup>
const { data: serverData } = useFetch('https://example.com/api/user/1')

const { data: clientData } = useFetch('https://example.com/api/user/2', {
  server: false,
})
</script>
