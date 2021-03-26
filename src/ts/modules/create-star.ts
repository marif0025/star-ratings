export default function createStars(parent: HTMLElement, starCount: number) {
    // return star
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div')
        star.className = 'rating-star'

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttribute('viewBox', '0 0 320 320')
        const firstHalf = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        firstHalf.setAttribute('d', 'M165.3 11.05c-3.1 79.48-3.98 123.32-4.15 149.07-.04 5.55-.18 29.05-.35 53.68l-.35 49.47c-30.99 16.27-61.97 32.53-92.96 48.8-3.76 1.98-8.16-1.22-7.44-5.41L77.4 205.54c.29-1.66-.27-3.36-1.48-4.54L2.45 129.38c-3.04-2.97-1.36-8.14 2.84-8.75l101.54-14.76a5.116 5.116 0 003.86-2.81l45.41-92.01c1.89-3.81 7.32-3.81 9.2 0z')

        const secondHalf = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        secondHalf.setAttribute('d', 'M165.25 11.05l45.41 92.01a5.163 5.163 0 003.86 2.81l101.54 14.76c4.21.61 5.89 5.78 2.84 8.75L245.43 201a5.149 5.149 0 00-1.48 4.54l17.35 101.13c.72 4.19-3.68 7.38-7.44 5.41-31.85-15.92-63.7-31.83-95.54-47.75-.56-35.79-1.01-71.58-1.37-107.37-.48-48.63-.78-97.27-.9-145.91 1.88-3.81 7.32-3.81 9.2 0z')

        firstHalf.classList.add('half-star')
        secondHalf.classList.add('half-star')

        svg.append(firstHalf)
        svg.append(secondHalf)
        star.append(svg)

        parent.append(star)
        let size = parent
    }
    return parent
}
