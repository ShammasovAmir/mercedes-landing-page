const init = () => {
  let container = document.querySelector('.jumbo-slider__container'),
    slides = document.getElementsByClassName('jumbo-slider__slide'),
    circles = document.getElementsByClassName('jumbo-slider__circle'),
    links = document.getElementsByClassName('jumbo-slider__link'),
    current = 1,
    time = 6000

  // Add animation class to slide
  slides[0].classList.add('jumbo-slider__slide--active')
  links[current - 1].classList.add('jumbo-slider__link--active')
  circles[current - 1].classList.add('jumbo-slider__circle--filled')

  // Update elipsis and links
  const updateNav = (current) => {
    console.log(`Current: ${current}`)
    for (let i = 0; i < slides.length; i++) {
      links[i].classList.remove('jumbo-slider__link--active')
      circles[i].classList.remove('jumbo-slider__circle--filled')
    }

    links[current - 1].classList.add('jumbo-slider__link--active')
    circles[current - 1].classList.add('jumbo-slider__circle--filled')
  }

  const startSliding = () => {
    setInterval(() => {
      // Remove active class from first and add it to the second slide
      slides[1].classList.add('jumbo-slider__slide--active')
      slides[0].classList.remove('jumbo-slider__slide--active')
      // Clone the first slide, place it in the end and then remove it
      container.appendChild(slides[0].cloneNode([true]))
      container.removeChild(slides[0])

      if (current < slides.length) {
        current++
        updateNav(current)
      } else {
        current = 1
        updateNav(current)
      }
    }, time)
  }
  startSliding()
}

init()
