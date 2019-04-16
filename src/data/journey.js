import React from 'react'
import { FaAward, FaPaperPlane } from 'react-icons/fa'

import Image1 from './../assets/images/image1.jpg'
import Image2 from './../assets/images/image2.jpg'
import Image3 from './../assets/images/image3.jpg'

const data = [
  {
    date: 'March 2019',
    headline: 'Graduated General Assembly',
    description: `Finished with coding school. Twelve weeks of going as hard as I could. The journey continues.`,
    image: Image1,
    icon: <FaAward />,
  },
  {
    date: 'May 2018',
    headline: 'Patent Expiration App',
    description: `Created a Python app to pull down patent information from the USPTO API, and 
    calculate patent term expiration. A startup was going to charge $40 a pop for this service,
    but I knew enough to know that it wasn't the hardest thing to implement. For a brief time, 
    I had it deployed to the web using Flask.`,
    image: Image2,
    icon: <FaPaperPlane />,
  },

  {
    date: 'May 2013',
    headline: 'Graduated Law School',
    description: `Ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper. Yes, that is random placeholder text in Latin.
    There's a lot of that in law.`,
    image: Image3,
    icon: <FaPaperPlane />,
  },
]

export default data
