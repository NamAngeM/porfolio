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
            class="text-slate-600 hover:text-primary-600 transition-colors font-medium relative group"
            active-class="text-primary-600"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          <button 
            @click="downloadCV"
            class="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>Télécharger CV</span>
            </span>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-slate-200">
          <div class="flex flex-col space-y-4 pt-4">
            <NuxtLink 
              v-for="(item, index) in menuItems" 
              :key="item.name"
              :to="item.href"
              @click="closeMobileMenu"
              class="text-slate-600 hover:text-primary-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-primary-50 transform hover:translate-x-2"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              {{ item.name }}
            </NuxtLink>
            <button 
              @click="downloadCV"
              class="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-medium w-fit shadow-lg"
            >
              <span class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Télécharger CV</span>
              </span>
            </button>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
const isMobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Expériences', href: '/experience' },
  { name: 'Projets', href: '/projects' },
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