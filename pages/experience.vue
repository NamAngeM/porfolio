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
                      <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">Chef de projet digital – Projet annuel « Rhizome »</h3>
                      <p class="text-primary-600 font-medium">Pilotage projet IA & écologie</p>
                    </div>
                    <div class="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <span class="text-2xl">🤖</span>
                    </div>
                  </div>
                  <ul class="text-slate-600 leading-relaxed space-y-2">
                    <li>• Pilotage d'un projet IA & écologie, en mode agile</li>
                    <li>• Coordination d'une équipe de 5 personnes (organisation, suivi, reporting)</li>
                    <li>• Conception UX/UI (wireframes & prototypes sur Figma)</li>
                    <li>• Développement front-end (Nuxt.js, HTML, CSS, JS)</li>
                  </ul>
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
              <div class="w-1/2 pr-8"></div>
              
              <!-- Point central -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-lg animate-pulse-slow"></div>
              
              <div class="w-1/2 pl-8">
                <div class="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border border-slate-200">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <span class="text-2xl">💰</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Trésorier – Association PLASMA</h3>
                      <p class="text-blue-600 font-medium">Gestion budgétaire et financière</p>
                    </div>
                  </div>
                  <ul class="text-slate-600 leading-relaxed space-y-2">
                    <li>• Gestion budgétaire et financière (budget de 8 000 €)</li>
                    <li>• Organisation d'événements numériques et technologiques</li>
                    <li>• Suivi rigoureux des dépenses et reporting financier</li>
                    <li>• Coordination avec les partenaires et sponsors</li>
                  </ul>
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
                  </ul>
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