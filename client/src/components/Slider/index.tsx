import SliderNav from './SliderNav'
import SliderPoster from './SliderPoster'


const SliderContent = () => {
    return (
        <>
            <nav className="slider__nav">
                <SliderNav />
            </nav>
            <div className="slider__poster">
                <SliderPoster />
            </div>
        </>
    )
}

export default SliderContent