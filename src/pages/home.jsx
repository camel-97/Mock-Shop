import { useEffect, useState } from 'react'
import image1 from '../assets/shalom-ejiofor-kVUAsl-elOY-unsplash.jpg'
import image2 from '../assets/shalom-ejiofor-t_prchAm4ag-unsplash.jpg'
import image3 from '../assets/shalom-ejiofor-YLSBNapbXXY-unsplash.jpg'
import '../css/home.css'

function Home() {

    const images = [image1, image2, image3]

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval)
    }, [])


    return (
        <div className='carousel'>
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    className={`${index === current ? 'active' : 'inactive'} img-${index}`}
                />
            ))}
        </div>
    )
}

export default Home;