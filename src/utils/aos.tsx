'use client'
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

const Aoscompo = ({children}:any) => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
            offset: 48,
            easing: 'ease-out-cubic',
        })
    }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default Aoscompo
