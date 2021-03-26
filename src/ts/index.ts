import '../scss/style.scss'
import '../scss/ratings.scss'

import createStar from './modules/create-star'

interface ratingsOptions {
    selector: string,
    favClass?: string
    halfStarClass?: string
    onChange?: Function
}

const ratingPlugin = {
    init: (options: ratingsOptions) => {
        const SELECTOR_CLASS = options.selector
        const onChange = options.onChange
        const FAV_CLASS = options.favClass ? options.favClass : 'faved'
        const HALF_STAR_CLASS = options.halfStarClass ? options.halfStarClass : 'half-star'
        const RATED_CLASS = 'rated'
        const STAR_COUNT = 5

        const ratingElements: NodeListOf<HTMLElement> = document.querySelectorAll(`.${SELECTOR_CLASS}`)

        ratingElements.forEach(el => {
            createStar(el, STAR_COUNT)
            const initialRatingString = el.dataset.rating
            const initialRating = initialRatingString ? Math.ceil(parseFloat(initialRatingString) * 2) : 0
            ratingPlugin.setRating(el, (initialRating / 2))

            if (el.classList.contains(RATED_CLASS)) { return }

            const halfStars = el.querySelectorAll(`.${HALF_STAR_CLASS}`)

            el.addEventListener('mouseleave', (e) => {
                if (el.classList.contains(RATED_CLASS)) { return }
                let ratedItems = Array.from(halfStars).slice(0, initialRating)
                ratingPlugin.reset(halfStars, FAV_CLASS)
                ratedItems.forEach(item => item.classList.add(FAV_CLASS))
            })

            halfStars.forEach((star, index) => {
                star.addEventListener('click', (e) => {
                    let ratingCount = (index + 1) / 2
                    onChange && onChange(el, ratingCount)
                    el.classList.add(RATED_CLASS)
                })

                star.addEventListener('mouseenter', () => {
                    if (el.classList.contains(RATED_CLASS)) { return }

                    let ratedItems = Array.from(halfStars).slice(0, index + 1)
                    ratingPlugin.reset(halfStars, FAV_CLASS)
                    ratedItems.forEach(item => item.classList.add(FAV_CLASS))
                })
            })
        })
    },

    setRating(parent: HTMLElement, rating: number) {
        let halfStars = parent.querySelectorAll('.half-star')
        let halfStarsArray = Array.from(halfStars)
        let FAV_CLASS = 'faved'

        let ratedItems = halfStarsArray.slice(0, Math.ceil((rating * 2)))

        ratingPlugin.reset(halfStars, FAV_CLASS)

        ratedItems.forEach((item, index) => {
            setTimeout(() => {
                setTimeout(() => {
                    item.classList.add(FAV_CLASS)
                }, index * 100);
            }, 500)
        })
    },

    reset(halfStars: NodeListOf<Element>, favClass: string) {
        halfStars.forEach(star => star.classList.remove(favClass))
    }
}

export default ratingPlugin