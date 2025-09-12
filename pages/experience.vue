<template>
  <div class="pt-20">
    <section class="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white relative overflow-hidden">
      <!-- Arrière-plan animé -->
      <div class="absolute inset-0">
        <div v-for="i in 25" :key="i" 
             class="absolute w-1 h-1 bg-white rounded-full opacity-20"
             :style="{
               left: Math.random() * 100 + '%',
               top: Math.random() * 100 + '%',
               animationDelay: Math.random() * 12 + 's',
               animationDuration: (Math.random() * 6 + 8) + 's'
             }"
             :class="'animate-float-' + (i % 3 + 1)">
        </div>
        <div class="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full opacity-10 animate-pulse-slow"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-blue-500 rounded-full opacity-15 animate-bounce-slow"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16 animate-fade-in-up">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Expériences 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 animate-gradient-x">
              Professionnelles
            </span>
          </h1>
          <div class="w-32 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full animate-scale-x"></div>
          <p class="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
            Un parcours riche en projets variés et en apprentissages continus
          </p>
        </div>
      </div>
    </section>

    <!-- Timeline des expériences -->
    <section class="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-30 animate-float-1"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-float-2"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Timeline -->
          <div class="relative">
            <!-- Ligne centrale -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-blue-500 to-purple-500 rounded-full animate-scale-y"></div>
            
            <!-- Expérience 1 -->
            <div class="relative flex items-center mb-16 animate-fade-in-up" style="animation-delay: 0.1s">
              <div class="w-1/2 pr-8 text-right">
                <div class="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border border-slate-200">
                  <div class="flex items-center justify-end gap-4 mb-4">
                    <div class="text-right">
                      <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">Développeur Full-Stack – NAM DIGITAL LAB</h3>
                      <p class="text-primary-600 font-medium">Agence digitale & développement web</p>
                    </div>
                    <div class="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <span class="text-2xl">💻</span>
                    </div>
                  </div>
                  <ul class="text-slate-600 leading-relaxed space-y-2">
                    <li>• <strong>Développement de sites web complets</strong> avec Next.js et React</li>
                    <li>• <strong>Création d'agence digitale</strong> spécialisée PME et startups</li>
                    <li>• <strong>Conception de packs digital</strong> (Starter, Présence en ligne, Innovation IA)</li>
                    <li>• <strong>Développement d'identité visuelle</strong> et branding complet</li>
                    <li>• <strong>Intégration de solutions IA</strong> (chatbots, automatisations)</li>
                    <li>• <strong>Optimisation SEO</strong> et stratégie digitale</li>
                  </ul>
                  
                  <!-- Liens vers les projets -->
                  <div class="mt-6 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl border border-primary-200">
                    <div class="flex items-center gap-3 mb-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-slate-900">Projets Réalisés</h4>
                        <p class="text-sm text-slate-600">Sites web développés avec Cursor IA</p>
                      </div>
                    </div>
                    <p class="text-sm text-slate-700 mb-4">
                      Découvrez les sites web que j'ai développés en utilisant Cursor IA pour 
                      l'assistance au développement et l'optimisation du code.
                    </p>
                    <div class="flex flex-wrap gap-3">
                      <a 
                        href="https://nam-digital-lab.vercel.app/" 
                        target="_blank"
                        class="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium text-sm flex items-center gap-2"
                      >
                        <svg class="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        NAM DIGITAL LAB
                      </a>
                      <a 
                        href="https://epikaizo-website-kk7z84rfm-nams-projects-08436685.vercel.app/" 
                        target="_blank"
                        class="group bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 font-medium text-sm flex items-center gap-2"
                      >
                        <svg class="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        EPIKAIZO UNIVERSITY
                      </a>
                    </div>
                  </div>
                  
                  <div class="mt-4 flex justify-end">
                    <span class="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      2024 - En cours
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Point central -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-4 border-white shadow-lg animate-pulse-slow"></div>
              
              <div class="w-1/2 pl-8"></div>
            </div>
            
            <!-- Expérience 2 -->
            <div class="relative flex items-center mb-16 animate-fade-in-up" style="animation-delay: 0.2s">
              <div class="w-1/2 pr-8 text-right">
                <div class="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border border-slate-200">
                  <div class="flex items-center justify-end gap-4 mb-4">
                    <div class="text-right">
                      <h3 class="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">Chef de Projet – Projet Rhizome</h3>
                      <p class="text-green-600 font-medium">IA & Écologie - Application mobile</p>
                    </div>
                    <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <span class="text-2xl">🌱</span>
                    </div>
                  </div>
                  <ul class="text-slate-600 leading-relaxed space-y-2">
                    <li>• <strong>Pilotage d'un projet IA & écologie</strong> en mode agile</li>
                    <li>• <strong>Coordination d'une équipe de 5 personnes</strong> (organisation, suivi, reporting)</li>
                    <li>• <strong>Conception UX/UI</strong> (wireframes & prototypes sur Figma)</li>
                    <li>• <strong>Développement front-end</strong> (Nuxt.js, HTML, CSS, JS)</li>
                    <li>• <strong>Développement d'une application mobile Flutter</strong> (Greens App)</li>
                    <li>• <strong>Intégration d'un chatbot IA Dialogflow</strong> pour l'écologie</li>
                  </ul>
                  
                  <!-- Documents du projet Rhizome -->
                  <div class="mt-6 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border border-green-200">
                    <div class="flex items-center gap-3 mb-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-slate-900">Documents du Projet</h4>
                        <p class="text-sm text-slate-600">Greens App - Application mobile écologique</p>
                      </div>
                    </div>
                    <p class="text-sm text-slate-700 mb-4">
                      Découvrez la documentation technique, le code source et les fonctionnalités 
                      de l'application mobile développée dans le cadre du projet Rhizome.
                    </p>
                    <div class="flex flex-wrap gap-3">
                      <a 
                        href="https://github.com/NamAngeM/greens_app" 
                        target="_blank"
                        class="group bg-gradient-to-r from-slate-700 to-slate-800 text-white px-4 py-2 rounded-lg hover:from-slate-800 hover:to-slate-900 transition-all duration-300 transform hover:scale-105 font-medium text-sm flex items-center gap-2"
                      >
                        <svg class="w-4 h-4 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code Source GitHub
                      </a>
                      <button 
                        @click="downloadRhizomeDocs"
                        class="group bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 font-medium text-sm flex items-center gap-2"
                      >
                        <svg class="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        Documentation
                      </button>
                    </div>
                  </div>
                  
                  <div class="mt-4 flex justify-end">
                    <span class="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      2024 - En cours
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Point central -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-4 border-white shadow-lg animate-pulse-slow"></div>
              
              <div class="w-1/2 pl-8"></div>
            </div>
            
            <!-- Expérience 3 -->
            <div class="relative flex items-center mb-16 animate-fade-in-up" style="animation-delay: 0.3s">
              <div class="w-1/2 pr-8"></div>
              
              <!-- Point central -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-lg animate-pulse-slow"></div>
              
              <div class="w-1/2 pl-8">
                <div class="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border border-slate-200">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <span class="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Développeur Web – EPIKAIZO UNIVERSITY</h3>
                      <p class="text-blue-600 font-medium">Plateforme éducative & développement web</p>
                    </div>
                  </div>
                  <ul class="text-slate-600 leading-relaxed space-y-2">
                    <li>• <strong>Développement de plateforme éducative</strong> avec technologies modernes</li>
                    <li>• <strong>Conception d'interface utilisateur</strong> intuitive et responsive</li>
                    <li>• <strong>Intégration de fonctionnalités éducatives</strong> avancées</li>
                    <li>• <strong>Optimisation des performances</strong> et expérience utilisateur</li>
                    <li>• <strong>Déploiement et maintenance</strong> de la plateforme</li>
                  </ul>
                  
                  <!-- Lien vers le projet -->
                  <div class="mt-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                    <div class="flex items-center gap-3 mb-3">
                      <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-slate-900 text-sm">Plateforme en ligne</h4>
                        <p class="text-xs text-slate-600">Développée avec Cursor IA</p>
                      </div>
                    </div>
                    <a 
                      href="https://epikaizo-website-kk7z84rfm-nams-projects-08436685.vercel.app/" 
                      target="_blank"
                      class="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium text-sm flex items-center gap-2"
                    >
                      <svg class="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Voir la plateforme
                    </a>
                  </div>
                  
                  <div class="mt-4">
                    <span class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      2024 - En cours
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Expérience 3 -->
            <div class="relative flex items-center mb-16 animate-fade-in-up" style="animation-delay: 0.3s">
              <div class="w-1/2 pr-8 text-right">
                <div class="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border border-slate-200">
                  <div class="flex items-center justify-end gap-4 mb-4">
                    <div class="text-right">
                      <h3 class="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Chef de Projet Audiovisuel – MAYS PROD (Gabon)</h3>
                      <p class="text-purple-600 font-medium">Gestion de projets audiovisuels</p>
                    </div>
                    <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <span class="text-2xl">🎬</span>
                    </div>
                  </div>
                  <ul class="text-slate-600 leading-relaxed space-y-2">
                    <li>• Gestion de projets audiovisuels (budget, planning, livrables)</li>
                    <li>• Suivi d'équipe et coordination via Trello</li>
                    <li>• Relation client et reporting</li>
                    <li>• Coordination d'équipes créatives et respect des délais</li>
                    <li>• <strong>Analyse des besoins clients</strong> et traduction en briefs créatifs</li>
                    <li>• <strong>Collaboration étroite avec l'infographe</strong> pour la réalisation des projets</li>
                  </ul>
                  
                  <!-- Document PDF des réalisations -->
                  <div class="mt-6 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                    <div class="flex items-center gap-3 mb-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-slate-900">Portfolio des Réalisations</h4>
                        <p class="text-sm text-slate-600">Projets audiovisuels dirigés chez MAYS PROD</p>
                      </div>
                    </div>
                    <p class="text-sm text-slate-700 mb-4">
                      Découvrez un aperçu de mes réalisations en tant que Chef de Projet, 
                      incluant l'analyse des besoins clients et la collaboration avec l'équipe créative.
                    </p>
                    <button 
                      @click="downloadMAYSPortfolio"
                      class="group bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium text-sm flex items-center gap-2"
                    >
                      <svg class="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      Télécharger le Portfolio
                    </button>
                  </div>
                  
                  <div class="mt-4 flex justify-end">
                    <span class="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      2021 - 2024
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Point central -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-4 border-white shadow-lg animate-pulse-slow"></div>
              
              <div class="w-1/2 pl-8"></div>
            </div>
            
            <!-- Expérience 4 -->
            <div class="relative flex items-center mb-16 animate-fade-in-up" style="animation-delay: 0.4s">
              <div class="w-1/2 pr-8"></div>
              
              <!-- Point central -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-4 border-white shadow-lg animate-pulse-slow"></div>
              
              <div class="w-1/2 pl-8">
                <div class="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border border-slate-200">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <span class="text-2xl">🏥</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">Association Gabonaise des Hémophiles</h3>
                      <p class="text-green-600 font-medium">Assistante Chef de Projet Digital</p>
                    </div>
                  </div>
                  <ul class="text-slate-600 leading-relaxed space-y-2">
                    <li>• Analyse des besoins et mise en place d'une stratégie digitale</li>
                    <li>• Développement et mise en ligne d'un site WordPress</li>
                    <li>• Architecture, contenu et modules du site web</li>
                    <li>• Amélioration de la visibilité digitale de l'association</li>
                  </ul>
                  <div class="mt-4">
                    <span class="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      2019 (3 mois)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Expériences - Ange Ngoundzi',
  meta: [
    { name: 'description', content: 'Découvrez les expériences professionnelles d\'Ange Ngoundzi en gestion de projet et coordination d\'équipes.' }
  ]
})

// Fonction pour télécharger le portfolio MAYS PROD
const downloadMAYSPortfolio = () => {
  const link = document.createElement('a')
  link.href = '/documents/portfolio-mays-prod.pdf'
  link.download = 'Portfolio-MAYS-PROD-Ange-Ngoundzi.pdf'
  link.click()
}

// Fonction pour télécharger la documentation Rhizome
const downloadRhizomeDocs = () => {
  const link = document.createElement('a')
  link.href = '/documents/documentation-rhizome.pdf'
  link.download = 'Documentation-Projet-Rhizome-Ange-Ngoundzi.pdf'
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

@keyframes scale-x {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

@keyframes scale-y {
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Classes d'animation */
.animate-float-1 { animation: float-1 6s ease-in-out infinite; }
.animate-float-2 { animation: float-2 8s ease-in-out infinite; }
.animate-float-3 { animation: float-3 7s ease-in-out infinite; }
.animate-gradient-x { animation: gradient-x 3s ease infinite; }
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
.animate-scale-x { animation: scale-x 1s ease-out; }
.animate-scale-y { animation: scale-y 2s ease-out; }
.animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
</style>