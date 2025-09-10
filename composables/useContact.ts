export const useContact = () => {
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const isSubmitting = ref(false)
  const error = ref('')
  const success = ref('')

  const validateForm = () => {
    if (!form.value.name.trim()) {
      error.value = 'Le nom est requis'
      return false
    }
    if (!form.value.email.trim() || !isValidEmail(form.value.email)) {
      error.value = 'Une adresse email valide est requise'
      return false
    }
    if (!form.value.subject.trim()) {
      error.value = 'Le sujet est requis'
      return false
    }
    if (!form.value.message.trim()) {
      error.value = 'Le message est requis'
      return false
    }
    return true
  }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const submitForm = async () => {
    error.value = ''
    success.value = ''
    
    if (!validateForm()) {
      return false
    }

    isSubmitting.value = true

    try {
      // Simulation d'envoi - remplacer par votre API
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Réinitialiser le formulaire
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      
      success.value = 'Message envoyé avec succès !'
      return true
    } catch (err) {
      error.value = 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv/cv-ange-ngoundzi.pdf'
    link.download = 'CV-Ange-Ngoundzi.pdf'
    link.click()
  }

  return {
    form,
    isSubmitting,
    error,
    success,
    submitForm,
    downloadCV
  }
}
