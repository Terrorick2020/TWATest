import { NavLink, useNavigate  } from 'react-router-dom'
import { appRoutes } from '../../config/routes.config'

import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

import SvgCity from '../../assets/icon/city.svg?react'

import PngHertRed from '../../assets/img/heart-red.png'
import PngDown from '../../assets/img/down.png'
import PngNeedle from '../../assets/img/needle.png'
import PngCristal from '../../assets/img/cristal.png'
import PngHotDog from '../../assets/img/hotdog.png'


interface ISliderItemProps {
    item: {
        location: string
        name: string
    }
    index: number
    len: number
}

const SliderItem = (props: ISliderItemProps) => {

    const navigate = useNavigate()

    const handleLink = () => {
        navigate("/detaails")
    }

    const barList = Array.from({ length: props.len }, (_, i) => i + 1)

   return (
        <>
            <div className="poster__header">
                <div className="poster-bar">
                    {barList.map((_, i) => (
                        <div key={i} className={`poster-bar__item ${i === props.index ? "active" : ""}`}></div>
                    ))}
                </div>
                <div className="poster-desc">
                    <div className="location">
                        <SvgCity />
                        <p>Санкт-Петербург</p>
                    </div>
                    <Stack className="stack" direction="row" spacing={1}>
                        <Chip
                            icon={<img src={PngCristal} alt="needle" />}
                            label="Бар"
                        />
                        <Chip
                            icon={<img src={PngHotDog} alt="needle" />}
                            label="Стритфуд"
                        />
                        <Chip
                            icon={<img src={PngNeedle} alt="needle" />}
                            label="Адмиралтейский район"
                        />
                    </Stack>
                </div>
            </div>
            <div className="poster__footer">
                <NavLink onClick={handleLink} className="poster__prof-desc" to={appRoutes.details}>
                    <h3 className="name">Виктория, 20 лет</h3>
                    <p className="text">Много работаю ( просто пекарь, бариста, кассир ) Играю на виолончели 🎻 Люблю гулять на свежем воздухе...</p>
                </NavLink>
                <div className="poster__btns">
                    <Button
                        className="poster-btn"
                        variant="contained"
                        startIcon={<img src={PngDown} alt='down-row' />}
                    >
                        Назад
                    </Button>
                    <Button className="poster-btn" variant="contained">
                        <img src={PngHertRed} alt="red-heart" />
                    </Button>
                </div>
            </div>
        </>
   )
}

export default SliderItem