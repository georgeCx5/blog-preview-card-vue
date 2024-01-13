<script setup>
import CardComponent from '@/components/CardComponent.vue'
import illustrationImg from '@/assets/images/illustration-article.png'
import imageAvatar from '@/assets/images/image-avatar.webp'

</script>
<template>
  <body class=" flex justify-center items-center h-screen bg-neo-yellow">
    <CardComponent :image-card="illustrationImg" card-alt="card" :state-bar="['Learning', 'Pro']"
      date="Published 21 Dec 2023" title="HTML & CSS foundations"
      description="These languages are the backbone of every website, defining structure, content, and presentation."
      :image-profile="imageAvatar" profile-alt="avatar" name="Greg Hooper" />
  </body>
</template>