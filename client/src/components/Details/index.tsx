import DetailsHeader from './Header'
import DetailsSlider from './Slider'
import DetailsInfo from './Info'
import DetailsDescription from './Description'


const DetailsContent = () => {
    return (
        <>
            <div className="details__header">
                <DetailsHeader />
            </div>
            <div className="details__slider">
                <DetailsSlider />
            </div>
            <div className="details__info">
                <DetailsInfo />
            </div>
            <div className="details__desc">
                <DetailsDescription />
            </div>
        </>
    )
}

export default DetailsContent