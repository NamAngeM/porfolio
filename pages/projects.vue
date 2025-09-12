<template>
  <div class="pt-20">
    <!-- Section Hero avec le même style que les autres pages -->
    <section class="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white relative overflow-hidden">
      <!-- Arrière-plan animé identique aux autres pages -->
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
        <div class="text-center mb-16 animate-fade-in-up">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Mes 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 animate-gradient-x">
              Projets
            </span>
          </h1>
          <div class="w-32 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full animate-scale-x"></div>
          <p class="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
            Découvrez une sélection de mes projets qui démontrent mes compétences en gestion de projet, 
            développement web et intelligence artificielle.
          </p>
        </div>
        
        <!-- Filtres avec le style cohérent -->
        <div class="flex justify-center mb-8 animate-fade-in-up" style="animation-delay: 0.2s">
          <div class="flex flex-wrap gap-4">
            <button 
              @click="filterProjects('all')"
              :class="activeFilter === 'all' ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white' : 'bg-slate-800 bg-opacity-50 backdrop-blur-sm text-slate-300 hover:text-white border border-slate-700 hover:border-primary-500'"
              class="px-6 py-3 rounded-2xl font-medium transition-all duration-300 shadow-lg"
            >
              Tous
            </button>
            <button 
              @click="filterProjects('web')"
              :class="activeFilter === 'web' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'bg-slate-800 bg-opacity-50 backdrop-blur-sm text-slate-300 hover:text-white border border-slate-700 hover:border-blue-500'"
              class="px-6 py-3 rounded-2xl font-medium transition-all duration-300 shadow-lg"
            >
              Web
            </button>
            <button 
              @click="filterProjects('design')"
              :class="activeFilter === 'design' ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' : 'bg-slate-800 bg-opacity-50 backdrop-blur-sm text-slate-300 hover:text-white border border-slate-700 hover:border-green-500'"
              class="px-6 py-3 rounded-2xl font-medium transition-all duration-300 shadow-lg"
            >
              UI/UX
            </button>
            <button 
              @click="filterProjects('mobile')"
              :class="activeFilter === 'mobile' ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' : 'bg-slate-800 bg-opacity-50 backdrop-blur-sm text-slate-300 hover:text-white border border-slate-700 hover:border-green-500'"
              class="px-6 py-3 rounded-2xl font-medium transition-all duration-300 shadow-lg"
            >
              Mobile
            </button>
            <button 
              @click="filterProjects('ai')"
              :class="activeFilter === 'ai' ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white' : 'bg-slate-800 bg-opacity-50 backdrop-blur-sm text-slate-300 hover:text-white border border-slate-700 hover:border-purple-500'"
              class="px-6 py-3 rounded-2xl font-medium transition-all duration-300 shadow-lg"
            >
              IA
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section des projets avec le même style que les autres sections -->
    <section class="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-30 animate-float-1"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-float-2"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <!-- Grille des projets -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="project.id"
            class="group bg-white border border-slate-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- En-tête du projet -->
            <div class="flex items-center gap-4 mb-6">
              <div :class="project.iconBg" class="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <span class="text-2xl">{{ project.icon }}</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-1">
                  {{ project.title }}
                </h3>
                <span :class="project.categoryColor" class="px-3 py-1 rounded-full text-xs font-medium">
                  {{ project.category }}
                </span>
              </div>
            </div>
            
            <!-- Description -->
            <p class="text-slate-600 mb-6 leading-relaxed">
              {{ project.description }}
            </p>
            
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Liens du projet -->
            <div class="flex gap-3">
              <a 
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                class="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center py-3 px-4 rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span class="flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  <span>Démo</span>
                </span>
              </a>
              <a 
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                class="flex-1 bg-slate-800 text-white text-center py-3 px-4 rounded-2xl hover:bg-slate-900 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span class="flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Code</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA finale avec le même style -->
    <section class="py-20 bg-gradient-to-br from-slate-100 to-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <!-- Arrière-plan animé -->
            <div class="absolute inset-0">
              <div v-for="i in 15" :key="i" 
                   class="absolute w-1 h-1 bg-white rounded-full opacity-20"
                   :style="{
                     left: Math.random() * 100 + '%',
                     top: Math.random() * 100 + '%',
                     animationDelay: Math.random() * 10 + 's',
                     animationDuration: (Math.random() * 6 + 6) + 's'
                   }"
                   :class="'animate-float-' + (i % 3 + 1)">
              </div>
            </div>
            
            <div class="relative z-10">
              <h2 class="text-3xl md:text-4xl font-bold mb-6">
                Intéressé par mon 
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">
                  travail
                </span> ?
              </h2>
              <p class="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
                N'hésitez pas à me contacter pour discuter de vos projets ou d'opportunités de collaboration.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <NuxtLink 
                  to="/contact"
                  class="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Me contacter
                </NuxtLink>
                <a 
                  href="mailto:angengoundzi99@gmail.com"
                  class="border-2 border-primary-400 text-primary-400 px-8 py-4 rounded-2xl font-medium hover:bg-primary-400 hover:text-white transition-all duration-300"
                >
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Projets - Ange Ngoundzi',
  meta: [
    { name: 'description', content: 'Découvrez mes projets de développement web, mobile et IA. Portfolio de Ange Ngoundzi, étudiant en informatique.' }
  ]
})

const activeFilter = ref('all')

const projects = [
  {
    id: 1,
    title: 'Epikaizo - Site Web',
    description: 'Site web moderne développé avec les dernières technologies web, mettant en avant une interface utilisateur intuitive et des performances optimisées.',
    category: 'Web',
    categoryColor: 'bg-blue-100 text-blue-800',
    iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600',
    technologies: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
    icon: '🌐',
    demoUrl: 'https://epikaizo-website-kk7z84rfm-nams-projects-08436685.vercel.app/',
    githubUrl: 'https://github.com/NamAngeM/epikaizo-website',
    type: 'web'
  },
  {
    id: 2,
    title: 'NAM Digital Lab',
    description: 'Laboratoire digital innovant présentant des projets technologiques avancés, avec une interface moderne et des animations fluides.',
    category: 'Web',
    categoryColor: 'bg-blue-100 text-blue-800',
    iconBg: 'bg-gradient-to-br from-green-400 to-green-600',
    technologies: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'JavaScript'],
    icon: '🔬',
    demoUrl: 'https://nam-digital-lab.vercel.app/',
    githubUrl: 'https://github.com/NamAngeM/nam-digital-lab',
    type: 'web'
  },
  {
    id: 3,
    title: 'Greens App - Projet Rhizome',
    description: 'Application Flutter innovante dédiée à l\'écologie avec chatbot IA Dialogflow, gestion des favoris et calcul d\'empreinte carbone.',
    category: 'Mobile',
    categoryColor: 'bg-green-100 text-green-800',
    iconBg: 'bg-gradient-to-br from-green-400 to-green-600',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Dialogflow', 'Node.js'],
    icon: '🌱',
    demoUrl: '#',
    githubUrl: 'https://github.com/NamAngeM/greens_app',
    type: 'mobile'
  },
  {
    id: 4,
    title: 'Site WordPress - Association Hémophiles',
    description: 'Développement et mise en ligne d\'un site WordPress complet avec architecture, contenu et modules personnalisés.',
    category: 'Web',
    categoryColor: 'bg-blue-100 text-blue-800',
    iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600',
    technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    icon: '🏥',
    demoUrl: '#',
    githubUrl: '#',
    type: 'web'
  },
  {
    id: 5,
    title: 'Wireframes & Prototypes Figma',
    description: 'Conception UX/UI avec création de wireframes et prototypes interactifs sur Figma pour divers projets.',
    category: 'UI/UX',
    categoryColor: 'bg-green-100 text-green-800',
    iconBg: 'bg-gradient-to-br from-green-400 to-green-600',
    technologies: ['Figma', 'Prototyping', 'Wireframing', 'UI Design'],
    icon: '🎨',
    demoUrl: '#',
    githubUrl: '#',
    type: 'design'
  },
  {
    id: 6,
    title: 'Portfolio Personnel',
    description: 'Site portfolio moderne et responsive développé avec Nuxt.js, Tailwind CSS et animations fluides.',
    category: 'Web',
    categoryColor: 'bg-blue-100 text-blue-800',
    iconBg: 'bg-gradient-to-br from-primary-400 to-primary-600',
    technologies: ['Nuxt.js', 'Tailwind CSS', 'VueUse', 'JavaScript'],
    icon: '💼',
    demoUrl: '#',
    githubUrl: '#',
    type: 'web'
  },
  {
    id: 7,
    title: 'Gestion de Projets Audiovisuels',
    description: 'Pilotage de projets audiovisuels avec gestion de budget, planning et coordination d\'équipes créatives.',
    category: 'Gestion',
    categoryColor: 'bg-orange-100 text-orange-800',
    iconBg: 'bg-gradient-to-br from-orange-400 to-orange-600',
    technologies: ['Trello', 'Gantt', 'Budget Management', 'Team Coordination'],
    icon: '🎬',
    demoUrl: '#',
    githubUrl: '#',
    type: 'web'
  },
  {
    id: 8,
    title: 'Stratégie Digitale - Association',
    description: 'Analyse des besoins et mise en place d\'une stratégie digitale complète pour améliorer la visibilité.',
    category: 'Stratégie',
    categoryColor: 'bg-indigo-100 text-indigo-800',
    iconBg: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    technologies: ['Digital Strategy', 'Analytics', 'SEO', 'Content Management'],
    icon: '📊',
    demoUrl: '#',
    githubUrl: '#',
    type: 'web'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.type === activeFilter.value)
})

const filterProjects = (filter) => {
  activeFilter.value = filter
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
</style>