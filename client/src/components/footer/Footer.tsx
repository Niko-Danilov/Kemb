'use client'

import { FC } from 'react'
import useFooterState from './model/useFooterHook'
import FooterForm from './ui/FooterForm'
import FooterLayout from './ui/FooterLayout'



const Footer: FC = () => {

  const { errors, handleSubmit, onSubmit, register, reset } = useFooterState()

  return (
    <FooterLayout
      footerForm=
      {
        <FooterForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          reset={reset}
        />
      }
    />
  )
}

export default Footer