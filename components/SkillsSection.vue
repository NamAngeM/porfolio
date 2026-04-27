<template>
  <UCard>
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon name="i-heroicons-academic-cap" class="text-primary" />
        <h2 class="text-xl font-semibold">Skills</h2>
      </div>
    </template>

    <div class="space-y-4">
      <div v-for="(skill, index) in skills" :key="index" class="space-y-2">
        <div class="flex justify-between items-center">
          <span class="font-medium">{{ skill.name }}</span>
          <span class="text-sm text-gray-500">{{ skill.level }}%</span>
        </div>
        <UProgress
          :value="skill.level"
          :color="getProgressColor(skill.level)"
          size="sm"
        />
      </div>
    </div>
  </UCard>
</template>

<script setup>
const skills = ref([
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'Vue.js/Nuxt.js', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 85 },
  { name: 'Git', level: 90 },
  { name: 'Docker', level: 70 }
])

const getProgressColor = (level) => {
  if (level >= 90) return 'green'
  if (level >= 75) return 'blue'
  if (level >= 60) return 'yellow'
  return 'red'
}
</script> 