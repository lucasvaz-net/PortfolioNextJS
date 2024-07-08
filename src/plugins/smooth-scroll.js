export default defineNuxtPlugin(() => {
    if (process.client) {
      import('smooth-scroll').then((module) => {
        const SmoothScroll = module.default
        new SmoothScroll('a[href*="#"]', {
          speed: 800,
          speedAsDuration: true,
          offset: 65, // Ajuste para a altura do navbar
        })
      })
    }
  })
  