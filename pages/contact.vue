<template>
  <div class="pt-20">
    <section class="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white relative overflow-hidden">
      <!-- Arrière-plan animé -->
      <div class="absolute inset-0">
        <div v-for="i in 40" :key="i" 
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
            Contactez-
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 animate-gradient-x">
              moi
            </span>
          </h1>
          <div class="w-32 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full animate-scale-x"></div>
          <p class="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
            Prêt à discuter de votre projet ? N'hésitez pas à me contacter !
          </p>
        </div>
      </div>
    </section>

    <!-- Section contact -->
    <section class="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-30 animate-float-1"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-float-2"></div>
        <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-100 rounded-full opacity-35 animate-float-3"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-start">
            <!-- Informations de contact -->
            <div class="space-y-8">
              <div class="animate-fade-in-up" style="animation-delay: 0.1s">
                <h2 class="text-3xl font-bold text-slate-900 mb-8">
                  Restons en 
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-500">
                    contact
                  </span>
                </h2>
                <p class="text-slate-600 text-lg leading-relaxed mb-8">
                  Je suis disponible pour discuter de vos projets, opportunités d'alternance 
                  ou simplement échanger sur la gestion de projet et l'innovation.
                </p>
              </div>
              
              <!-- Cartes de contact -->
              <div class="space-y-6">
                <div class="group flex items-center gap-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary-200 animate-fade-in-up" style="animation-delay: 0.2s">
                  <div class="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900 text-lg mb-1 group-hover:text-primary-600 transition-colors">Email</h3>
                    <p class="text-slate-600">angengoundzi99@gmail.com</p>
                    <p class="text-slate-500 text-sm mt-1">Réponse sous 24h</p>
                  </div>
                </div>
                
                <div class="group flex items-center gap-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-green-200 animate-fade-in-up" style="animation-delay: 0.3s">
                  <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900 text-lg mb-1 group-hover:text-green-600 transition-colors">Téléphone</h3>
                    <p class="text-slate-600">07 45 47 86 46</p>
                    <p class="text-slate-500 text-sm mt-1">Disponible 9h-18h</p>
                  </div>
                </div>
                
                <div class="group flex items-center gap-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 animate-fade-in-up" style="animation-delay: 0.4s">
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">Localisation</h3>
                    <p class="text-slate-600">Besançon, 25000</p>
                    <p class="text-slate-500 text-sm mt-1">Franche-Comté, France</p>
                  </div>
                </div>
                
                <div class="group flex items-center gap-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 animate-fade-in-up" style="animation-delay: 0.5s">
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 7h12v9a1 1 0 01-1 1H5a1 1 0 01-1-1V7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900 text-lg mb-1 group-hover:text-purple-600 transition-colors">Disponibilité</h3>
                    <p class="text-slate-600">Alternance dès septembre 2025</p>
                    <p class="text-slate-500 text-sm mt-1">Mobilité nationale</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Formulaire de contact -->
            <div class="animate-fade-in-up" style="animation-delay: 0.6s">
              <div class="bg-white p-8 rounded-3xl shadow-2xl border border-slate-200">
                <h3 class="text-2xl font-bold text-slate-900 mb-6">
                  Envoyez-moi un 
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-500">
                    message
                  </span>
                </h3>
                
                <form @submit.prevent="submitForm" class="space-y-6">
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="group">
                      <label class="block text-slate-700 font-medium mb-2">Nom</label>
                      <input v-model="form.name" type="text" required class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 group-hover:border-primary-300" placeholder="Votre nom">
                    </div>
                    <div class="group">
                      <label class="block text-slate-700 font-medium mb-2">Email</label>
                      <input v-model="form.email" type="email" required class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 group-hover:border-primary-300" placeholder="votre@email.com">
                    </div>
                  </div>
                  
                  <div class="group">
                    <label class="block text-slate-700 font-medium mb-2">Sujet</label>
                    <input v-model="form.subject" type="text" required class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 group-hover:border-primary-300" placeholder="Sujet de votre message">
                  </div>
                  
                  <div class="group">
                    <label class="block text-slate-700 font-medium mb-2">Message</label>
                    <textarea v-model="form.message" rows="6" required class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 group-hover:border-primary-300 resize-none" placeholder="Votre message..."></textarea>
                  </div>
                  
                  <button type="submit" :disabled="isSubmitting" class="group w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-medium text-lg flex items-center justify-center gap-3 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed">
                    <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <span class="relative z-10">{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                    <svg v-if="!isSubmitting" class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                    <div v-if="isSubmitting" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10"></div>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div class="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Section CTA -->
    <section class="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-32 h-32 bg-primary-500 rounded-full opacity-10 animate-pulse-slow"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-blue-500 rounded-full opacity-15 animate-bounce-slow"></div>
      </div>
      
      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="max-w-3xl mx-auto animate-fade-in-up">
          <h3 class="text-2xl md:text-3xl font-bold mb-4">
            Prêt à collaborer ?
          </h3>
          <p class="text-slate-300 mb-8">
            Téléchargez mon CV pour en savoir plus sur mon parcours et mes compétences.
          </p>
          <button @click="downloadCV" class="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-medium text-lg inline-flex items-center gap-3 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <svg class="w-5 h-5 relative z-10 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <span class="relative z-10">Télécharger mon CV</span>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags pour la page de contact
useHead({
  title: 'Contact - Ange Ngoundzi',
  meta: [
    { name: 'description', content: 'Contactez Ange Ngoundzi pour discuter de vos projets ou opportunités d\'alternance en gestion de projet.' }
  ]
})

// Données réactives pour le formulaire
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// Fonction pour soumettre le formulaire
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulation d'envoi (remplacer par votre logique d'envoi)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Réinitialiser le formulaire
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Afficher un message de succès (vous pouvez utiliser une notification)
    alert('Message envoyé avec succès !')
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    alert('Erreur lors de l\'envoi du message. Veuillez réessayer.')
  } finally {
    isSubmitting.value = false
  }
}

// Fonction pour télécharger le CV
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
.animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
</style>