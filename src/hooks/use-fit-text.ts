export const useFitText = (maxSize: number) => {
  const fitTextToContainer = (element: HTMLElement, fatherElement: HTMLElement) => {
    let fontSize = maxSize

    element.style.fontSize = `${maxSize}px`

    const screenHeight = window.innerHeight
    const xPadding = 4 * (screenHeight / 100)
    const maxHeight = fatherElement.clientHeight - xPadding

    while (element.scrollWidth > maxHeight && fontSize > 0) {
      fontSize -= 0.1
      element.style.fontSize = `${fontSize}vh`
    }
  }

  return {
    fitTextToContainer,
  }
}
