import { BiSearch } from 'react-icons/bi'
import { SlBasket } from 'react-icons/sl'


export const Menu = [
  {
    id: 0,
    title: <BiSearch />,
    state: '',
    modal: 'Search'
  },
  {
    id: 1,
    title: <SlBasket />,
    state: '',
    modal: 'Market'
  },
  {
    id: 2,
    title: 'Sign Up',
    state: 'green',
    modal: 'Reg'
  },
  {
    id: 3,
    title: 'Sign In',
    state: 'white',
    modal: 'Auth'
  }

]

export const Menu2 = [
  {
    id: 0,
    title: <BiSearch />,
    state: '',
    modal: 'Search'
  },
  {
    id: 1,
    title: <SlBasket />,
    state: '',
    modal: 'Market'
  },
  {
    id: 4,
    title: 'Sign Out',
    state: 'white',
    modal: 'out'
  }
]

