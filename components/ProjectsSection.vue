<template>
  <UCard>
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon name="i-heroicons-code-bracket" class="text-primary" />
        <h2 class="text-xl font-semibold">Projects</h2>
      </div>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <UCard
        v-for="project in projects"
        :key="project.id"
        :ui="{ body: { padding: 'p-4' } }"
        class="hover:shadow-lg transition-shadow duration-300"
      >
        <div class="space-y-3">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="font-semibold text-lg">{{ project.title }}</h3>
              <p class="text-sm text-gray-500">{{ project.period }}</p>
            </div>
            <UBadge :color="project.status === 'Completed' ? 'green' : 'blue'">
              {{ project.status }}
            </UBadge>
          </div>

          <p class="text-gray-600">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="tech in project.technologies"
              :key="tech"
              color="gray"
              variant="soft"
            >
              {{ tech }}
            </UBadge>
          </div>

          <div class="flex gap-2 pt-2">
            <UButton
              v-if="project.demo"
              :to="project.demo"
              target="_blank"
              color="primary"
              variant="soft"
              icon="i-heroicons-play"
            >
              Live Demo
            </UButton>
            <UButton
              v-if="project.github"
              :to="project.github"
              target="_blank"
              color="gray"
              variant="soft"
              icon="i-simple-icons-github"
            >
              GitHub
            </UButton>
          </div>
        </div>
      </UCard>
    </div>
  </UCard>
</template>

<script setup>
const projects = ref([
  {
    id: 1,
    title: 'E-commerce Platform',
    period: '2023',
    status: 'Completed',
    description: 'A full-stack e-commerce platform with real-time inventory management and payment processing.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/username/project'
  },
  {
    id: 2,
    title: 'Task Management App',
    period: '2023',
    status: 'In Progress',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['Nuxt.js', 'Firebase', 'TailwindCSS'],
    demo: null,
    github: 'https://github.com/username/project'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    period: '2024',
    status: 'Completed',
    description: 'A modern portfolio website built with Nuxt.js and Material Design 3.',
    technologies: ['Nuxt.js', 'Material Design', 'TypeScript'],
    demo: 'https://portfolio.example.com',
    github: 'https://github.com/username/portfolio'
  }
])
</script> 