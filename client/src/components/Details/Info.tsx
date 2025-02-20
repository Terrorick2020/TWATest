import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

import PngNeedle from '../../assets/img/needle.png'
import PngCristal from '../../assets/img/cristal.png'
import PngHotDog from '../../assets/img/hotdog.png'


const DetailsInfo = () => {
    return (
        <>
            <div className="info__content">
                <div className="info__location">
                    <h6>Хочу встретиться:</h6>
                    <Stack direction="row" spacing={1}>
                        <Chip
                            icon={<img src={PngNeedle} alt="needle" />}
                            label="Адмиралтейский район"
                        />
                    </Stack>
                    <p className="text">Очень хочу сходить в бар и съесть вкусный хотдог с бургером, а может и картошку фри.</p>
                    <div className="line" />
                </div>
                <div className="info__other">
                    <Stack direction="row" spacing={1}>
                        <Chip
                            icon={<img src={PngCristal} alt="needle" />}
                            label="Бар"
                        />
                        <Chip
                            icon={<img src={PngHotDog} alt="needle" />}
                            label="Стритфуд"
                        />
                    </Stack>
                    <p className="text">Можем сходить в бар “Мотылёк”</p>
                </div>
            </div>
        </>
    )
}
export default DetailsInfo