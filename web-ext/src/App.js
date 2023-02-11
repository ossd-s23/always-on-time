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
              day= "Sunday"
              return day
            case 1:
              day= "Monday"
              return day
            case 2:
              day= "Tuesday"
              return day
            case 3:
              day= "Wednesday"
              return day
            case 4:
              day= "Thursday"
              return day
            case 5:
              day= "Friday"
              return day
            case 6:
              day= "Saturday"
              return day
          } 
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
            <p className="time"> {(date.getHours() % 12  || 12)}:{date.getMinutes()} {date.getHours() >= 12 ? 'PM' : 'AM'}</p>
            <p> {convertDay(date.getDay())}, {date.toLocaleDateString()}</p>
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