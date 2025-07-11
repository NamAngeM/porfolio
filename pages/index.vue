<template>
  <div>
    <!-- Hero Section avec animations avancées -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- Arrière-plan animé avec particules -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900">
        <!-- Particules flottantes -->
        <div class="absolute inset-0">
          <div v-for="i in 50" :key="i" 
               class="absolute w-1 h-1 bg-white rounded-full opacity-30"
               :style="{
                 left: Math.random() * 100 + '%',
                 top: Math.random() * 100 + '%',
                 animationDelay: Math.random() * 20 + 's',
                 animationDuration: (Math.random() * 10 + 10) + 's'
               }"
               :class="'animate-float-' + (i % 3 + 1)">
          </div>
        </div>
        
        <!-- Formes géométriques animées -->
        <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-pulse-slow"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-30 animate-bounce-slow"></div>
        <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-25 animate-spin-slow"></div>
        <div class="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 animate-ping-slow"></div>
        
        <!-- Lignes animées -->
        <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.3" />
              <stop offset="50%" style="stop-color:#8B5CF6;stop-opacity:0.5" />
              <stop offset="100%" style="stop-color:#06B6D4;stop-opacity:0.3" />
            </linearGradient>
          </defs>
          <path d="M0,100 Q400,50 800,100 T1600,100" stroke="url(#lineGradient)" stroke-width="2" fill="none" class="animate-draw" />
          <path d="M0,200 Q600,150 1200,200 T2400,200" stroke="url(#lineGradient)" stroke-width="1" fill="none" class="animate-draw-delayed" />
        </svg>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <!-- Contenu principal avec animations -->
          <div class="lg:col-span-7 text-center lg:text-left">
            <div class="space-y-6">
              <!-- Badge de statut animé -->
              <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-sm font-medium mb-6 animate-fade-in-up shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div class="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse-fast"></div>
                <span class="animate-typing">Disponible pour alternance - Septembre 2025</span>
              </div>
              
              <!-- Titre principal avec effet de machine à écrire -->
              <div class="animate-fade-in-up" style="animation-delay: 0.2s">
                <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  <span class="block animate-slide-in-left">Bonjour, je suis</span>
                  <span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 mt-2 animate-gradient-x font-serif animate-slide-in-right" style="animation-delay: 0.5s">
                    Ange Ngoundzi
                  </span>
                </h1>
              </div>
              
              <!-- Sous-titre avec effet de révélation -->
              <div class="animate-fade-in-up" style="animation-delay: 0.7s">
                <h2 class="text-xl md:text-2xl lg:text-4xl text-slate-300 font-light relative mb-2">
                  <span class="relative z-10">Assistant Chef de Projet</span>
                  <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-transparent opacity-20 animate-slide-reveal"></div>
                </h2>
                <div class="text-lg md:text-xl text-white font-medium bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
                  Spécialisé en Innovation & Gestion Budgétaire
                </div>
              </div>
              
              <!-- Description avec animation de révélation par mots -->
              <div class="animate-fade-in-up" style="animation-delay: 1s">
                <p class="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  <span class="animate-word-reveal" style="animation-delay: 1.2s">Étudiant </span>
                  <span class="animate-word-reveal" style="animation-delay: 1.3s">en </span>
                  <span class="animate-word-reveal" style="animation-delay: 1.4s">Master </span>
                  <span class="animate-word-reveal" style="animation-delay: 1.5s">1 </span>
                  <span class="animate-word-reveal" style="animation-delay: 1.6s">Produits </span>
                  <span class="animate-word-reveal" style="animation-delay: 1.7s">et </span>
                  <span class="animate-word-reveal" style="animation-delay: 1.8s">Services </span>
                  <span class="animate-word-reveal" style="animation-delay: 1.9s">Multimédias, </span>
                  <br class="hidden sm:block">
                  <span class="animate-word-reveal" style="animation-delay: 2s">passionné </span>
                  <span class="animate-word-reveal" style="animation-delay: 2.1s">par </span>
                  <span class="animate-word-reveal" style="animation-delay: 2.2s">la </span>
                  <span class="font-semibold text-primary-400 animate-word-reveal" style="animation-delay: 2.3s">gestion </span>
                  <span class="font-semibold text-primary-400 animate-word-reveal" style="animation-delay: 2.4s">de </span>
                  <span class="font-semibold text-primary-400 animate-word-reveal" style="animation-delay: 2.5s">projet, </span>
                  <br class="hidden sm:block">
                  <span class="font-semibold text-blue-400 animate-word-reveal" style="animation-delay: 2.6s">l'innovation </span>
                  <span class="animate-word-reveal" style="animation-delay: 2.7s">et </span>
                  <span class="animate-word-reveal" style="animation-delay: 2.8s">la </span>
                  <span class="font-semibold text-purple-400 animate-word-reveal" style="animation-delay: 2.9s">gestion </span>
                  <span class="font-semibold text-purple-400 animate-word-reveal" style="animation-delay: 3s">budgétaire</span>.
                </p>
                
                <!-- Badges de compétences clés -->
                <div class="flex flex-wrap gap-3 mt-6 animate-fade-in-up" style="animation-delay: 3.1s">
                  <span class="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    🎯 Gestion de Projet
                  </span>
                  <span class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    💡 Innovation
                  </span>
                  <span class="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    💰 Gestion Budgétaire
                  </span>
                </div>
              </div>
              
              <!-- Boutons d'action avec animations sophistiquées -->
              <div class="flex flex-col sm:flex-row gap-4 pt-8 animate-fade-in-up" style="animation-delay: 3.2s">
                <NuxtLink 
                  to="/contact"
                  class="group relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl font-medium text-lg flex items-center justify-center gap-3"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <span class="relative z-10">Me contacter</span>
                  <svg class="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </div>
                </NuxtLink>
                
                <button 
                  @click="downloadCV"
                  class="group relative border-2 border-primary-400 text-primary-400 px-8 py-4 rounded-2xl overflow-hidden transition-all duration-500 font-medium text-lg flex items-center justify-center gap-3 hover:text-white"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                  <svg class="w-5 h-5 relative z-10 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span class="relative z-10">Télécharger mon CV</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Avatar avec animations 3D -->
          <div class="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up" style="animation-delay: 1.5s">
            <div class="relative">
              <!-- Avatar principal avec effet 3D -->
              <div class="relative w-80 h-80 md:w-96 md:h-96 group">
                <!-- Cercles d'arrière-plan animés -->
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 animate-spin-slow opacity-20"></div>
                <div class="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 animate-spin-reverse opacity-30"></div>
                <div class="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 animate-pulse opacity-25"></div>
                
                <!-- Avatar principal -->
                <div class="relative w-full h-full rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl transform group-hover:scale-105 transition-all duration-500 group-hover:rotate-2">
                  <div class="w-full h-full rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 border-4 border-white shadow-inner flex items-center justify-center relative overflow-hidden">
                    <!-- Effet de brillance -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div class="text-center relative z-10">
                      <div class="text-7xl md:text-8xl font-bold text-primary-600 mb-3 animate-pulse-slow">AN</div>
                      <div class="text-slate-700 text-lg font-medium animate-fade-in">Ange Ngoundzi</div>
                      <div class="text-slate-600 text-sm mt-1 animate-fade-in" style="animation-delay: 0.2s">Assistant Chef de Projet</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Éléments décoratifs flottants -->
              <div class="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float-1 opacity-80 flex items-center justify-center shadow-lg">
                <span class="text-2xl animate-bounce">🚀</span>
              </div>
              <div class="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-float-2 opacity-70 flex items-center justify-center shadow-lg">
                <span class="text-xl animate-pulse">💼</span>
              </div>
              <div class="absolute top-1/4 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-float-3 opacity-60 flex items-center justify-center shadow-lg">
                <span class="text-lg animate-spin-slow">⚡</span>
              </div>
              <div class="absolute bottom-1/4 -right-6 w-18 h-18 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-float-1 opacity-65 flex items-center justify-center shadow-lg">
                <span class="text-lg animate-bounce-slow">🎯</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Informations de contact avec animations -->
        <div class="mt-20 pt-12 border-t border-slate-700 animate-fade-in-up" style="animation-delay: 3.5s">
          <div class="flex flex-wrap justify-center gap-8">
            <div class="flex items-center gap-4 bg-slate-800 bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <span class="font-medium text-white">angengoundzi99@gmail.com</span>
            </div>
            
            <div class="flex items-center gap-4 bg-slate-800 bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <span class="font-medium text-white">07 45 47 86 46</span>
            </div>
            
            <div class="flex items-center gap-4 bg-slate-800 bg-opacity-50 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="font-medium text-white">Besançon, 25000</span>
            </div>
          </div>
        </div>

        <!-- Indicateur de scroll animé -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div class="w-8 h-12 border-2 border-white rounded-full flex justify-center relative overflow-hidden">
            <div class="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Compétences avec animations avancées -->
    <section class="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <!-- Arrière-plan animé -->
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-30 animate-float-1"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-float-2"></div>
        <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-100 rounded-full opacity-35 animate-float-3"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h3 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-fade-in-up">
            Compétences & Technologies
          </h3>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full animate-scale-x"></div>
          <p class="text-slate-600 mt-6 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s">
            Un ensemble de compétences techniques et managériales pour mener à bien vos projets
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div class="group text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-2 animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
              <span class="text-4xl animate-bounce-slow">📊</span>
            </div>
            <h4 class="font-bold text-slate-900 mb-3 text-lg group-hover:text-blue-600 transition-colors">Gestion de Projet</h4>
            <p class="text-slate-600 text-sm leading-relaxed">Trello, Gantt, Figma, GitHub</p>
            <div class="mt-6 flex justify-center space-x-2">
              <div class="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style="animation-delay: 0s"></div>
              <div class="w-3 h-3 bg-blue-300 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
              <div class="w-3 h-3 bg-blue-200 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
            </div>
          </div>
          
          <div class="group text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-2 animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
              <span class="text-4xl animate-bounce-slow">💻</span>
            </div>
            <h4 class="font-bold text-slate-900 mb-3 text-lg group-hover:text-green-600 transition-colors">Développement</h4>
            <p class="text-slate-600 text-sm leading-relaxed">Node.js, MySQL, WordPress</p>
            <div class="mt-6 flex justify-center space-x-2">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse" style="animation-delay: 0s"></div>
              <div class="w-3 h-3 bg-green-300 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
              <div class="w-3 h-3 bg-green-200 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
            </div>
          </div>
          
          <div class="group text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-2 animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
              <span class="text-4xl animate-bounce-slow">🎥</span>
            </div>
            <h4 class="font-bold text-slate-900 mb-3 text-lg group-hover:text-purple-600 transition-colors">Audiovisuel</h4>
            <p class="text-slate-600 text-sm leading-relaxed">Pilotage projets, budgets</p>
            <div class="mt-6 flex justify-center space-x-2">
              <div class="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style="animation-delay: 0s"></div>
              <div class="w-3 h-3 bg-purple-300 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
              <div class="w-3 h-3 bg-purple-200 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
            </div>
          </div>
          
          <div class="group text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-2 animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
              <span class="text-4xl animate-bounce-slow">🌐</span>
            </div>
            <h4 class="font-bold text-slate-900 mb-3 text-lg group-hover:text-orange-600 transition-colors">Langues</h4>
            <p class="text-slate-600 text-sm leading-relaxed">Français, Anglais</p>
            <div class="mt-6 flex justify-center space-x-2">
              <div class="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style="animation-delay: 0s"></div>
              <div class="w-3 h-3 bg-orange-300 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
              <div class="w-3 h-3 bg-orange-200 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA avec effets visuels avancés -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white relative overflow-hidden">
      <!-- Arrière-plan animé complexe -->
      <div class="absolute inset-0">
        <!-- Particules flottantes -->
        <div v-for="i in 30" :key="'cta-' + i" 
             class="absolute w-2 h-2 bg-white rounded-full opacity-20"
             :style="{
               left: Math.random() * 100 + '%',
               top: Math.random() * 100 + '%',
               animationDelay: Math.random() * 15 + 's',
               animationDuration: (Math.random() * 8 + 8) + 's'
             }"
             :class="'animate-float-' + (i % 3 + 1)">
        </div>
        
        <!-- Formes géométriques -->
        <div class="absolute top-10 left-10 w-32 h-32 bg-primary-500 rounded-full opacity-10 animate-pulse-slow"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-blue-500 rounded-full opacity-15 animate-bounce-slow"></div>
        <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-full opacity-10 animate-spin-slow"></div>
        
        <!-- Lignes animées -->
        <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ctaLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.2" />
              <stop offset="50%" style="stop-color:#8B5CF6;stop-opacity:0.4" />
              <stop offset="100%" style="stop-color:#06B6D4;stop-opacity:0.2" />
            </linearGradient>
          </defs>
          <path d="M0,50 Q400,25 800,50 T1600,50" stroke="url(#ctaLineGradient)" stroke-width="2" fill="none" class="animate-draw" />
          <path d="M0,150 Q600,125 1200,150 T2400,150" stroke="url(#ctaLineGradient)" stroke-width="1" fill="none" class="animate-draw-delayed" />
        </svg>
      </div>
      
      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Badge animé -->
          <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 bg-opacity-30 backdrop-blur-sm text-primary-300 rounded-full text-sm font-medium mb-8 animate-fade-in-up shadow-lg">
            <div class="w-3 h-3 bg-primary-400 rounded-full mr-3 animate-pulse-fast"></div>
            Recherche active d'alternance
          </div>
          
          <!-- Titre principal -->
          <h3 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight animate-fade-in-up" style="animation-delay: 0.2s">
            <span class="block">Disponible pour une alternance</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 mt-2 animate-gradient-x">
              dès septembre 2025
            </span>
          </h3>
          
          <!-- Description -->
          <p class="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s">
            Je recherche une alternance en tant qu'Assistant Chef de Projet pour mettre en pratique 
            mes compétences en gestion de projet, coordination d'équipes et méthodologies agiles. 
            Prêt à contribuer à vos projets innovants !
          </p>
          
          <!-- Boutons d'action -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style="animation-delay: 0.6s">
            <NuxtLink 
              to="/contact"
              class="group relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-5 rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl font-medium text-lg inline-flex items-center justify-center gap-3"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <span class="relative z-10">Discutons de votre projet</span>
              <svg class="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </NuxtLink>
            
            <NuxtLink 
              to="/experience"
              class="group relative border-2 border-white text-white px-10 py-5 rounded-2xl overflow-hidden transition-all duration-500 font-medium text-lg inline-flex items-center justify-center gap-3 hover:text-slate-900"
            >
              <div class="absolute inset-0 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
              <span class="relative z-10">Voir mes expériences</span>
              <svg class="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags pour la page d'accueil
useHead({
  title: 'Ange Ngoundzi - Assistant Chef de Projet',
  meta: [
    { name: 'description', content: 'Portfolio d\'Ange Ngoundzi - Assistant Chef de Projet spécialisé en gestion de projet, innovation et méthodologies agiles. Disponible pour alternance.' }
  ]
})

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/cv-ange-ngoundzi.pdf'
  link.download = 'CV-Ange-Ngoundzi.pdf'
  link.click()
}
</script>

<style scoped>
/* Animations personnalisées */
@keyframes float-1 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

@keyframes float-2 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-8deg); }
}

@keyframes float-3 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(12deg); }
}

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes slide-reveal {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes word-reveal {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scale-x {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

@keyframes draw {
  0% { stroke-dasharray: 0 1000; }
  100% { stroke-dasharray: 1000 0; }
}

@keyframes draw-delayed {
  0%, 50% { stroke-dasharray: 0 1000; }
  100% { stroke-dasharray: 1000 0; }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spin-reverse {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}

@keyframes ping-slow {
  0% { transform: scale(1); opacity: 1; }
  75%, 100% { transform: scale(2); opacity: 0; }
}

@keyframes pulse-fast {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes scroll-indicator {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(16px); opacity: 0; }
}

@keyframes typing {
  0% { width: 0; }
  100% { width: 100%; }
}

/* Classes d'animation */
.animate-float-1 { animation: float-1 6s ease-in-out infinite; }
.animate-float-2 { animation: float-2 8s ease-in-out infinite; }
.animate-float-3 { animation: float-3 7s ease-in-out infinite; }
.animate-gradient-x { animation: gradient-x 3s ease infinite; }
.animate-slide-reveal { animation: slide-reveal 2s ease-out; }
.animate-word-reveal { animation: word-reveal 0.5s ease-out forwards; opacity: 0; }
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
.animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
.animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
.animate-scale-x { animation: scale-x 1s ease-out; }
.animate-draw { animation: draw 3s ease-out; stroke-dasharray: 0 1000; }
.animate-draw-delayed { animation: draw-delayed 4s ease-out; stroke-dasharray: 0 1000; }
.animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
.animate-spin-slow { animation: spin-slow 20s linear infinite; }
.animate-spin-reverse { animation: spin-reverse 25s linear infinite; }
.animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
.animate-pulse-fast { animation: pulse-fast 1s ease-in-out infinite; }
.animate-scroll-indicator { animation: scroll-indicator 2s ease-in-out infinite; }
.animate-typing { animation: typing 3s steps(40, end); }
</style>