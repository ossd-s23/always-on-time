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

    return(
        <div className="MainPage" style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
          }}>
        <div className="time">
            <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>
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