import {useState} from 'react'

// images
import Ipad from '../assets/iPadMini.png'
import Iphone from '../assets/iPhone13Pro.png';
import Galaxy from '../assets/GalaxyNote20Ultra.png';
import Mac from '../assets/MacbookPro.png';

// Components
import ProCont from '../components/ProCont'

const Projects = () => {
    const [containers, setContainers] = useState([
        {
            id: 1,
            image: Iphone,
            isLeft: false,
            bg: '#C29E8E',
            title: 'Alzin',
            isCurrent: true,
            type: 'Care Management',
            summary: 'Information Architecture, UI & UX Design, Branding',

        },
        {
            id: 2,
            image: Ipad,
            isLeft: true,
            bg: '#D1A06B',
            title: 'Doosetrain',
            isCurrent: false,
            type: 'Lifestyle',
            summary: 'Research, Visual Design, Branding',
        },
        {
            id: 3,
            image: Mac,
            isLeft: false,
            bg: '#ECC664',
            title: 'Windsor',
            isCurrent: false,
            type: 'E-commerce',
            summary: 'Research Information Architecture, UI & UX Design, Branding',
        },
        {
            id: 4,
            image: Galaxy,
            isLeft: true,
            bg: '#B6B958',
            title: 'UFCU Mobile Banking',
            isCurrent: false,
            type: 'Fintech',
            summary: 'Research & UX Design',
        },
    ])
  return (
    <div>
      {
          containers.length > 0 ? (
              <ProCont containers={containers} />
          ) : (
              'No Projects to Show'
          )
      }
    </div>
  )
}

export default Projects
