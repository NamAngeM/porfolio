<template>
  <section 
    :class="sectionClass"
    :role="role"
    :aria-label="ariaLabel"
  >
    <div class="container mx-auto px-6 relative z-10">
      <slot />
    </div>
  </section>
</template>

<script setup>
interface Props {
  sectionClass?: string
  role?: string
  ariaLabel?: string
}

withDefaults(defineProps<Props>(), {
  sectionClass: 'py-20',
  role: 'region',
  ariaLabel: ''
})
</script>
