<template>
  <footer class="bg-slate-900 text-white py-12">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-4">Contact</h3>
          <div class="space-y-2 text-slate-300">
            <p>📧 angengoundzi99@gmail.com</p>
            <p>📱 07 45 47 86 46</p>
            <p>📍 Besançon, 25000</p>
          </div>
        </div>
        
        <!-- Navigation -->
        <div>
          <h3 class="text-xl font-bold mb-4">Navigation</h3>
          <div class="space-y-2">
            <NuxtLink 
              v-for="item in menuItems" 
              :key="item.name"
              :to="item.href"
              class="block text-slate-300 hover:text-white transition-colors"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        
        <!-- Disponibilité -->
        <div>
          <h3 class="text-xl font-bold mb-4">Disponibilité</h3>
          <div class="text-slate-300">
            <p class="mb-2">Recherche alternance</p>
            <p class="text-primary-400 font-medium">Septembre 2025</p>
            <p class="text-sm mt-2">Mobilité nationale</p>
          </div>
        </div>
      </div>
      
      <div class="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
        <p>&copy; {{ new Date().getFullYear() }} Ange Ngoundzi. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const menuItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Expériences', href: '/experience' },
  { name: 'Contact', href: '/contact' }
]
</script>