<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

export type SocialLink = {
  title: string
  href: string
  icon: any
}

const props = defineProps<SocialLink>()

const isInternalUrl = computed(() => {
  return !props.href.startsWith('http')
})
</script>

<template>
  <component
    :is="isInternalUrl ? RouterLink : 'a'"
    :href="!isInternalUrl ? href : null"
    :to="isInternalUrl ? href : null"
    :target="!isInternalUrl && '_blank'"
    class="flex cursor-pointer items-center gap-3 text-gray-300 transition-all hover:scale-105 hover:text-gray-50"
    :aria-label="title"
  >
    <component :is="icon" class="size-6" />
    <span class="hidden sm:block">{{ title }}</span>
  </component>
</template>
