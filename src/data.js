import img1 from "./images/tour-1.jpeg"
import img2 from "./images/tour-2.jpeg"
import img3 from "./images/tour-3.jpeg"
import img4 from "./images/tour-4.jpeg"
import img5 from "./images/tour-5.jpeg"

export const pageLinks =[
  {id:1, href:"#home", text:"home"},
  {id:2, href:"#abut", text:"about"},
  {id:3, href:"#services", text:"services"},
  {id:4, href:"#tours", text:"tours"}
]

export const media = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]
export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    title: 'saving money',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    title: 'endless hiking',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    title: 'amazing comfort',
  },
]

export const tours = [
  {
    id: 1,
    img: `${ img1 }`,
    tourDate: 'august 26th, 2020',
    tourTitle: 'Tibet Adventure',
    tourInfo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    TourfooterTitle: 'china',
    TourfooterDate: '6 days',
    TourfooterPrice: 'from $2200',
  },
  {
    id: 2,
    img: `${img2 }`,
    tourDate: 'october 1th, 2020',
    tourTitle: 'best of java',
    tourInfo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    TourfooterTitle: 'indonesia',
    TourfooterDate: '11 days',
    TourfooterPrice: 'from $1400',
  },

  {
    id: 3,
    img: `${ img3 }`,
    tourDate: 'september 15th, 2020',
    tourTitle: 'explore hong kong',
    tourInfo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    TourfooterTitle: 'hong kong',
    TourfooterDate: '8 days',
    TourfooterPrice: 'from $5000',
  },

  {
    id: 4,
    img: `${ img4 }`,
    tourDate: 'december 5th, 2019',
    tourTitle: 'kenya highlights',
    tourInfo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    TourfooterTitle: 'kenya',
    TourfooterDate: '20 days',
    TourfooterPrice: 'from $3000',
  },

  {
    id: 5,
    img: `${ img5 }`,
    tourDate: 'october 1th, 2020',
    tourTitle: 'best of java',
    tourInfo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    TourfooterTitle: 'indonesia',
    TourfooterDate: '11 days',
    TourfooterPrice: 'from $1400',
  },
]