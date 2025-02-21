import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import SliderItem from './SliderItem'

import PngLeady from '../../assets/img/leady.png'

const items = [
    { img: PngLeady, location: 'Санкт-Петербург', name: 'Виктория, 20 лет' },
    { img: PngLeady, location: 'Москва', name: 'Анна, 25 лет' },
    { img: PngLeady, location: 'Казань', name: 'Ольга, 22 года' }
]

const SliderPoster = () => {

    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true)

    const changeSlide = (newIndex: number) => {
        setFade(false)
        setTimeout(() => {
            setIndex(newIndex)
            setFade(true)
        }, 300)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => changeSlide((index + 1) % items.length),
        onSwipedRight: () => changeSlide((index - 1 + items.length) % items.length),
        trackMouse: true,
    })

    return (
        <>
            <div {...handlers} className="poster__content" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="shadow"></div>
                <div
                    className="poster__background"
                    style={{
                        opacity: fade ? 1 : 0,
                        backgroundImage: `url(${items[index].img})`,
                    }}
                />
                <SliderItem item={items[index]} index={index} len={items.length} />
            </div>
        </>
    )
}

export default SliderPoster