<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup>
// Meta tags globaux
useHead({
  title: 'Ange Ngoundzi - Assistant Chef de Projet & Développement Web',
  meta: [
    { name: 'description', content: 'Portfolio d\'Ange Ngoundzi - Assistant Chef de Projet spécialisé en gestion de projet, innovation et méthodologies agiles. Disponible pour alternance dès septembre 2025.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Ange Ngoundzi' },
    { name: 'keywords', content: 'gestion de projet, développement web, alternance, Nuxt.js, Vue.js, IA, intelligence artificielle, Besançon' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Ange Ngoundzi - Assistant Chef de Projet' },
    { property: 'og:description', content: 'Portfolio professionnel - Spécialisé en gestion de projet digital et développement web' },
    { property: 'og:image', content: '/og-image.jpg' },
    { property: 'og:url', content: 'https://votre-domaine.com' },
    { property: 'og:site_name', content: 'Ange Ngoundzi Portfolio' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Ange Ngoundzi - Assistant Chef de Projet' },
    { name: 'twitter:description', content: 'Portfolio professionnel - Spécialisé en gestion de projet digital' },
    { name: 'twitter:image', content: '/og-image.jpg' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://votre-domaine.com' }
  ]
})
</script>