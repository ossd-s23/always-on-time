import  React, { useState , useEffect } from 'react'
import IconButton from '@mui/material/IconButton'
import WallpaperIcon from '@mui/icons-material/Wallpaper'
import "./App.css"

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    const reader = new FileReader();
    const [backgroundImage,setImage] = useState("./image.jpg");
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    var main = document.getElementsByClassName("MainPage");

    const handleChange = e => {
        setImage(URL.createObjectURL(e.target.files[0]))
        main.style.backgroundImage = {backgroundImage}
        console.warn('${backgroundImage}');
    }

    const convertDay = day => {
        switch (day) {
            case 0:
              day= "Sun"
              return day
            case 1:
              day= "Mon"
              return day
            case 2:
              day= "Tues"
              return day
            case 3:
              day= "Wed"
              return day
            case 4:
              day= "Thurs"
              return day
            case 5:
              day= "Fri"
              return day
            case 6:
              day= "Sat"
              return day
          } 
    }

    const optionDate = {month: 'numeric', day: 'numeric'}
    const leadingZero = date => {
      return (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    } 
    

    return(
        <div className="MainPage" style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
          }}>
        <div className="timeBlock">
            <p className="time"> {(date.getHours() % 12  || 12)}:{leadingZero(date)} {date.getHours() >= 12 ? 'PM' : 'AM'}</p>
            <p> {convertDay(date.getDay())}, {date.toLocaleDateString(undefined, optionDate)}</p>
        </div>
        <div className="WallpaperIcon">
        <IconButton size="large" color="primary" aria-label="set background" component="label">
                <input hidden onChange={handleChange} accept="image/*" multiple type="file" />
            <WallpaperIcon/>
        </IconButton>
        </div>
        </div>
    )
}

export default DateTime