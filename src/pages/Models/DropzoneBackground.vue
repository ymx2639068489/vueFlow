<script setup>
import { Background } from '@vue-flow/background'
</script>

<template>
  <div class="dropzone-background">
    <Background gap="120" variant="lines" :size="2" :gap="20" pattern-color="#BDBDBD" />
    <div class="overlay">
      <slot />
    </div>
  </div>
</template>
