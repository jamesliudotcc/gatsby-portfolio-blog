import React from 'react'
import { FaAward, FaPaperPlane } from 'react-icons/fa'

import Road from './../assets/images/road.jpg'
import Sunset from './../assets/images/sunset.jpg'
import Peak from './../assets/images/peak.jpg'

const data = [
  {
    date: 'March 2019',
    headline: 'Graduated General Assembly',
    description: `Finished with coding school. Twelve weeks of going as hard as I could. The journey continues.`,
    image: Road,
    icon: <FaAward />,
  },
  {
    date: 'May 2018',
    headline: 'Patent Expiration App',
    description: `Created a Python app to pull down patent information from the USPTO API, and 
    calculate patent term expiration. A startup was going to charge $40 a pop for this service,
    but I knew enough to know that it wasn't the hardest thing to implement. For a brief time, 
    I had it deployed to the web using Flask.`,
    image: Sunset,
    icon: <FaPaperPlane />,
  },

  {
    date: 'May 2013',
    headline: 'Graduated Law School',
    description: `Ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper. Yes, that is random placeholder text in Latin.
    There's a lot of that in law.`,
    image: Peak,
    icon: <FaPaperPlane />,
  },
]

export default data
