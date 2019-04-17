import FoxAndGeese from './../assets/images/foxandgeese.png'
import WalletPhotos from './../assets/images/comment.png'
import Syllaboard from './../assets/images/syllaboard.png'
import Spotdash from './../assets/images/spotdash.png'
import GroceryList from './../assets/images/grocerylist.png'
import Nautilus from './../assets/images/nautilus.jpg'

const data = [
  {
    title: 'Fox and Geese',
    website: 'https://jamesliudotcc.github.io/fox-and-geese/',
    github: 'https://github.com/jamesliudotcc/fox-and-geese',
    description: ` I created a classic board game similar to Hneftafl (Viking chess) but with cuter pieces--a fox and geese instead of a king and warrirors. I did it without using any game libraries, but I did use Typescript and ImmutableJS. I generated the board by having javascript render SVG.

    To keep track of game state, I tried to follow the Model-Update-View architecture borrowed from Elm and Redux. I had a hard time understanding how to get the game state to evolve using immutable data structures, so there are all kinds of inelegant shims and hacks in the code.`,
    image: FoxAndGeese,
  },
  {
    title: 'Wallet Photos',
    website: 'http://www.jamesbridgetpenelope.com',
    github: 'https://github.com/jamesliudotcc/wallet-photos',
    description: ` I developed a privacy-centric server-side-rendered photo-sharing web app using node, Express, typescript, postgresql, typeorm. Photos get uploaded, users can log in and see them, but only after approval (authentication and authorization are separate layers) and there are comments and a like button.

    I spent two whole days attempting to implement passwordless authentication, like Slack uses. Passwordless turns out to be difficult under the hood, depsite how seamless it is from a user perspective, and I was not able to get it done with enough time to finish the rest of my app. I actually spent most of my best hours of project week on that problem, so not getting it done was not for lack of effort. I'm ready to give it another go, now that I understand databases, cryptography, and user sessions better having built a few more projects.
    
    `,
    image: WalletPhotos,
  },
  {
    title: 'Syllaboard',
    website: 'http://syllaboard.herokuapp.com',
    github: 'https://github.com/jamesliudotcc/syllaboard-backend',
    description: `
    Our team developed an assignment tracking system appropriate for use at an immersive coding school using Mongo, Typescript, Express, Redux, React, and MaterialUI. Users may have three different roles, student, instructor, and administrator. I mostly did the backend, although I had some help, and I helped on the front end as well.
    The project was really big for a single week. We also chose to use Mongo instead of a relational database even though the data was plainly relational in strucutre. The idea was to learn something about using a document database.`,
    image: Syllaboard,
  },
  {
    title: 'Spotdash',
    website: 'https://hackathon-spotdash.herokuapp.com/',
    github: 'https://github.com/jamesliudotcc/bike-rack-putter-backend',
    description: ` We made a simple app to display where bike racks should be prioritized by the city. We used the number of Yelp reviews as a proxy for how busy a place is, and a city dataset of where the bike racks are to determine the distance to the nearest bike rack. The data was processed using Python, and the results were pushed into a MongoDB instance, which we then rendered using Express, EJS, Mapbox, and Materialize.
    The biggest challenge was how short the hackathon was. We had 2 days to come up with an idea, and then implement something presentable. We eschewed a richer data model and a more interactive UI design using React in order to finish. We coded up to the last minute while the designers created a PowerPoint deck, also up to the last minute. Mobile doesn't work because the maps time out, something we could have solved by making the front end smarter.
    
    `,
    image: Spotdash,
  },
  {
    title: 'Shared Grocery List',
    website: 'https://hackathon-spotdash.herokuapp.com/',
    github: 'https://github.com/jamesliudotcc/bike-rack-putter-backend',
    description: ` We made a simple app to display where bike racks should be prioritized by the city. We used the number of Yelp reviews as a proxy for how busy a place is, and a city dataset of where the bike racks are to determine the distance to the nearest bike rack. The data was processed using Python, and the results were pushed into a MongoDB instance, which we then rendered using Express, EJS, Mapbox, and Materialize.
    The biggest challenge was how short the hackathon was. We had 2 days to come up with an idea, and then implement something presentable. We eschewed a richer data model and a more interactive UI design using React in order to finish. We coded up to the last minute while the designers created a PowerPoint deck, also up to the last minute. Mobile doesn't work because the maps time out, something we could have solved by making the front end smarter.
    
    `,
    image: GroceryList,
  },
  {
    title: 'Portfolio',
    website: 'https://hackathon-spotdash.herokuapp.com/',
    github: 'https://github.com/jamesliudotcc/grocery-list-python',
    description: `I made this portfolio page with a blog using Gatsby.`,
    image: Nautilus,
  },
]

export default data
