<script setup lang="ts">
import SocialItem, { SocialLink } from './SocialItem.vue'
import GitHubIcon from './Icons/GitHubIcon.vue'
import FacebookIcon from './Icons/FacebookIcon.vue'
import InstagramIcon from './Icons/InstagramIcon.vue'
import DocumentIcon from './Icons/DocumentIcon.vue'

const socials: SocialLink[] = [
  {
    href: '/cv',
    title: 'My Resume',
    icon: DocumentIcon,
  },
  {
    href: 'https://github.com/nvminh162',
    title: 'GitHub',
    icon: GitHubIcon,
  },
  {
    href: 'https://facebook.com/nvminh162',
    title: 'Facebook',
    icon: FacebookIcon,
  },
  {
    href: 'https://instagram.com/nvminh162',
    title: 'Instagram',
    icon: InstagramIcon,
  }
]
</script>

<template>
  <ul class="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
    <li v-for="social in socials" :key="social.title">
      <social-item
        :href="social.href"
        :title="social.title"
        :icon="social.icon"
      />
    </li>
  </ul>
</template>
