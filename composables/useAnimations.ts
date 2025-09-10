export const useAnimations = () => {
  const animationClasses = {
    fadeInUp: 'animate-fade-in-up',
    slideInLeft: 'animate-slide-in-left',
    slideInRight: 'animate-slide-in-right',
    float1: 'animate-float-1',
    float2: 'animate-float-2',
    float3: 'animate-float-3',
    gradientX: 'animate-gradient-x',
    pulseSlow: 'animate-pulse-slow',
    bounceSlow: 'animate-bounce-slow',
    spinSlow: 'animate-spin-slow'
  }

  const getAnimationDelay = (index: number, baseDelay: number = 0.1) => {
    return `${baseDelay + (index * 0.1)}s`
  }

  const getStaggeredDelay = (index: number, baseDelay: number = 0.1) => {
    return {
      'animation-delay': getAnimationDelay(index, baseDelay)
    }
  }

  return {
    animationClasses,
    getAnimationDelay,
    getStaggeredDelay
  }
}
