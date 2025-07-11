<template>
  <div class="pt-20">
    <section class="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white relative overflow-hidden">
      <!-- Arrière-plan animé -->
      <div class="absolute inset-0">
        <div v-for="i in 30" :key="i" 
             class="absolute w-1 h-1 bg-white rounded-full opacity-20"
             :style="{
               left: Math.random() * 100 + '%',
               top: Math.random() * 100 + '%',
               animationDelay: Math.random() * 15 + 's',
               animationDuration: (Math.random() * 8 + 8) + 's'
             }"
             :class="'animate-float-' + (i % 3 + 1)">
        </div>
        <div class="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full opacity-10 animate-pulse-slow"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-blue-500 rounded-full opacity-15 animate-bounce-slow"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- En-tête de section -->
          <div class="text-center mb-16 animate-fade-in-up">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              À propos d'
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 animate-gradient-x">
                Ange Ngoundzi
              </span>
            </h1>
            <div class="w-32 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full animate-scale-x"></div>
          </div>
          
          <!-- Section principale -->
          <div class="grid lg:grid-cols-5 gap-16 items-start mb-20">
            <!-- Photo et informations de base -->
            <div class="lg:col-span-2 animate-fade-in-up" style="animation-delay: 0.2s">
              <div class="sticky top-24">
                <!-- Avatar avec effets 3D -->
                <div class="relative w-full aspect-square mb-8 group">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div class="relative w-full h-full rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl group-hover:scale-105 transition-all duration-500">
                    <div class="w-full h-full rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 border-4 border-white shadow-inner flex items-center justify-center relative overflow-hidden">
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div class="text-center relative z-10">
                        <div class="text-6xl font-bold text-primary-600 mb-3 animate-pulse-slow">AN</div>
                        <p class="text-primary-700 font-semibold text-lg">Ange Ngoundzi</p>
                        <p class="text-primary-600 text-sm mt-1">Assistant Chef de Projet</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Éléments décoratifs -->
                  <div class="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-float-1 opacity-80 flex items-center justify-center shadow-lg">
                    <span class="text-xl animate-bounce">🎯</span>
                  </div>
                  <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-float-2 opacity-70 flex items-center justify-center shadow-lg">
                    <span class="text-lg animate-pulse">💡</span>
                  </div>
                </div>
                
                <!-- Statistiques animées -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center p-6 bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-primary-500 transition-all duration-300 group">
                    <div class="text-3xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform">3+</div>
                    <div class="text-slate-300 text-sm">Années d'expérience</div>
                  </div>
                  <div class="text-center p-6 bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-primary-500 transition-all duration-300 group">
                    <div class="text-3xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform">5+</div>
                    <div class="text-slate-300 text-sm">Projets menés</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contenu principal -->
            <div class="lg:col-span-3 space-y-8">
              <!-- Présentation -->
              <div class="animate-fade-in-up" style="animation-delay: 0.4s">
                <h2 class="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  Passionné par la 
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">
                    gestion de projet
                  </span>
                  et l'
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    innovation
                  </span>
                </h2>
                <div class="space-y-6 text-slate-300 leading-relaxed">
                  <p class="text-lg animate-word-reveal" style="animation-delay: 0.6s">
                    Étudiant en Master 1 Produits et Services Multimédias à l'Université de Franche-Comté, 
                    je me spécialise dans la gestion de projet, l'innovation et la gestion budgétaire.
                  </p>
                  <p class="animate-word-reveal" style="animation-delay: 0.8s">
                    Mon approche combine rigueur méthodologique et vision créative pour optimiser 
                    les processus et créer des offres adaptées aux besoins clients.
                  </p>
                  <p class="animate-word-reveal" style="animation-delay: 1s">
                    Basé à Besançon, j'ai acquis une expérience significative dans le pilotage de projets 
                    audiovisuels, la coordination d'équipes et l'utilisation d'outils de gestion modernes.
                  </p>
                  <div class="bg-gradient-to-r from-primary-500 to-blue-500 bg-opacity-20 backdrop-blur-sm border-l-4 border-primary-400 p-6 rounded-r-2xl mt-8 animate-slide-in-right" style="animation-delay: 1.2s">
                    <p class="font-medium text-primary-300 flex items-center gap-3">
                      <span class="text-2xl animate-bounce">🎯</span>
                      Je recherche une alternance pour septembre 2025 afin de mobiliser mes compétences 
                      dans un environnement professionnel stimulant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formation avec animations -->
    <section class="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-30 animate-float-1"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-float-2"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16 animate-fade-in-up">
          <h3 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Formation
          </h3>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full animate-scale-x"></div>
        </div>
        
        <div class="max-w-4xl mx-auto space-y-8">
          <div class="group bg-white border border-slate-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div class="flex-1">
                <h4 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">Master 1 Produits et Services Multimédias</h4>
                <p class="text-primary-600 font-medium mb-2 text-lg">Université de Franche-Comté</p>
                <p class="text-slate-500">Spécialisation en gestion de projet et innovation</p>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span class="text-2xl">🎓</span>
                </div>
                <span class="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-2xl text-sm font-medium whitespace-nowrap shadow-lg">
                  2024 - En cours
                </span>
              </div>
            </div>
          </div>
          
          <div class="group bg-white border border-slate-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div class="flex-1">
                <h4 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Licence Professionnelle Communication Digitale</h4>
                <p class="text-blue-600 font-medium mb-2 text-lg">INPTIC</p>
                <p class="text-slate-500">Formation en communication numérique et multimédia</p>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span class="text-2xl">💻</span>
                </div>
                <span class="bg-gradient-to-r from-slate-500 to-slate-600 text-white px-6 py-3 rounded-2xl text-sm font-medium whitespace-nowrap shadow-lg">
                  2017 - 2020
                </span>
              </div>
            </div>
          </div>
          
          <div class="group bg-white border border-slate-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div class="flex-1">
                <h4 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">Baccalauréat en Comptabilité et Gestion</h4>
                <p class="text-slate-500 mb-2">Formation de base en gestion et comptabilité</p>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span class="text-2xl">📊</span>
                </div>
                <span class="bg-gradient-to-r from-slate-500 to-slate-600 text-white px-6 py-3 rounded-2xl text-sm font-medium whitespace-nowrap shadow-lg">
                  2014
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Centres d'intérêt -->
    <section class="py-20 bg-gradient-to-br from-slate-100 to-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 animate-fade-in-up">
          <h3 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Centres d'intérêt
          </h3>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full animate-scale-x"></div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div class="group text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl hover:border-primary-200 transition-all duration-500 hover:-translate-y-4 hover:rotate-2 animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">📸</div>
            <h4 class="font-semibold text-slate-900 mb-2">Photographie</h4>
            <p class="text-slate-500 text-sm">Capture de moments</p>
          </div>
          <div class="group text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl hover:border-primary-200 transition-all duration-500 hover:-translate-y-4 hover:rotate-2 animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">⚽</div>
            <h4 class="font-semibold text-slate-900 mb-2">Football</h4>
            <p class="text-slate-500 text-sm">Sport d'équipe</p>
          </div>
          <div class="group text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl hover:border-primary-200 transition-all duration-500 hover:-translate-y-4 hover:rotate-2 animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">📚</div>
            <h4 class="font-semibold text-slate-900 mb-2">Lecture</h4>
            <p class="text-slate-500 text-sm">Développement personnel</p>
          </div>
          <div class="group text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl hover:border-primary-200 transition-all duration-500 hover:-translate-y-4 hover:rotate-2 animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🎬</div>
            <h4 class="font-semibold text-slate-900 mb-2">Cinéma</h4>
            <p class="text-slate-500 text-sm">Art visuel</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'À propos - Ange Ngoundzi',
  meta: [
    { name: 'description', content: 'Découvrez le parcours d\'Ange Ngoundzi, ses formations et sa passion pour la gestion de projet et l\'innovation.' }
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
.animate-word-reveal { animation: word-reveal 0.8s ease-out forwards; opacity: 0; }
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
.animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; opacity: 0; }
.animate-scale-x { animation: scale-x 1s ease-out; }
.animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
</style>