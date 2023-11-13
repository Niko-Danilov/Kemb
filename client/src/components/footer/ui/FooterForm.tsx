'use client'

import UiButton from '@/components/uiGlobal/uiButton/UiButton'
import { FC } from 'react'
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { footerLabel } from './../const'


interface IEmail {
  email: string
}

interface IForm {
  handleSubmit: (UseFormHandleSubmit<IEmail, undefined>),
  onSubmit: (SubmitHandler<IEmail>),
  register: (UseFormRegister<IEmail>),
  errors: (FieldErrors<IEmail>),
  reset: () => void,
}

const FooterForm: FC<IForm> = ({ handleSubmit, onSubmit, register, errors, reset }) => {

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-start'>

      <label className='text-base font-medium mb-4'>
        {footerLabel.label}
      </label>
      <input className='text-xs leading-4 px-3 py-2 w-full pb-4' {...(register('email',
        {
          required: 'Email is require field',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Please enter valid email'
          }
        }
      ))}
        placeholder='Masukan Alamat Email'
      />
      {errors?.email && (
        <div className='text-red-600'>{errors.email.message}</div>
      )}
      <UiButton state="smallWhite" modal=''>
        Submit
      </UiButton>
    </form>
  )
}

export default FooterForm