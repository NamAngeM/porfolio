<template>
  <div class="min-h-screen bg-slate-50">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// Meta tags globaux
useHead({
  title: 'Portfolio - Votre Nom',
  meta: [
    { name: 'description', content: 'Portfolio professionnel - Développeur Full Stack' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>