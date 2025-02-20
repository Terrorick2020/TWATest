import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import SvgCity from '../../assets/icon/city.svg?react'
import PngLeady from '../../assets/img/leady.png'


const items = [
    { img: PngLeady, name: "Виктория, 20", location: "Санкт-Петербург" },
    { img: PngLeady, name: "Александра, 22", location: "Москва" },
    { img: PngLeady, name: "Екатерина, 25", location: "Казань" },
]

const DetailsSlider = () => {

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
        <div {...handlers} className="slider__content">
            <div
                className="slider__background"
                style={{
                    backgroundImage: `url(${items[index].img})`,
                    opacity: fade ? 1 : 0,
                }}
            />
            <div className="slider__header">
                <div className="slider-bar">
                    {items.map((_, i) => (
                        <div key={i} className={`slider-bar__item ${i === index ? "active" : ""}`}></div>
                    ))}
                </div>
                <div className="location">
                    <SvgCity />
                    <p>{items[index].location}</p>
                </div>
            </div>
            <div className="slider__footer">
                <h3>{items[index].name}</h3>
            </div>
        </div>
    )
}

export default DetailsSlider