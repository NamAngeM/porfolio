<template>
  <header class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-slate-900 hover:text-primary-600 transition-colors">
          Ange Ngoundzi
        </NuxtLink>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.href"
            class="text-slate-600 hover:text-primary-600 transition-colors font-medium"
            active-class="text-primary-600"
          >
            {{ item.name }}
          </NuxtLink>
          <button 
            @click="downloadCV"
            class="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            Télécharger CV
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-slate-600 hover:text-slate-900"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-slate-200">
        <div class="flex flex-col space-y-4 pt-4">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.href"
            @click="closeMobileMenu"
            class="text-slate-600 hover:text-primary-600 transition-colors font-medium"
          >
            {{ item.name }}
          </NuxtLink>
          <button 
            @click="downloadCV"
            class="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium w-fit"
          >
            Télécharger CV
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isMobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Expériences', href: '/experience' },
  { name: 'Contact', href: '/contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/cv-ange-ngoundzi.pdf'
  link.download = 'CV-Ange-Ngoundzi.pdf'
  link.click()
}
</script>