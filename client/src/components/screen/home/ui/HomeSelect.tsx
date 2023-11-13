import { Dispatch, SetStateAction } from 'react'
import Select from 'react-select'
import { options } from './../const'

const HomeSelect = (
  { list, setList }
    :
    { list: number, setList: Dispatch<SetStateAction<number>> }
) => {
  return (
    <Select
      options={options}
      defaultValue={options[list]}
      onChange={(e) => setList(e!?.value)}
    />
  )
}

export default HomeSelect