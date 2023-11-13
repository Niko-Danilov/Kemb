import UiButton from "@/components/uiGlobal/uiButton/UiButton"
import UiModal from "@/components/uiGlobal/uiModal/UiModal"
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"

interface IAccount {
  // name: string,
  password: string,
  enterPassword: string
  email: string
}

const HeaderModalRegistr =
  (
    { isOpen, onClose, handleSubmit, onSubmit, register, errors, reset }
      :
      {
        isOpen: boolean,
        onClose: (e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void,
        handleSubmit: (UseFormHandleSubmit<IAccount, undefined>)
        onSubmit: (SubmitHandler<IAccount>)
        register: (UseFormRegister<IAccount>)
        errors: (FieldErrors<IAccount>)
        reset: () => void
      }
  ) => {



    return (
      <UiModal width='md' isOpen={isOpen} onClose={onClose}>
        <UiModal.Header className=''>
          Регистрация
        </UiModal.Header>
        <UiModal.Body className='flex flex-col flex-1'>
          <form
            className="flex flex-col flex-1 justify-between"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-10 items-center">

              <input
                className="focus:outline outline-2 outline-[#156963] rounded-lg p-3"
                // {...(register('name'))}
                placeholder="name"
              />
              {/* {errors.name && <p>not work name</p>} */}

              <input
                className="focus:outline outline-2 outline-[#156963] rounded-lg p-3"
                type="password"
                {...(register('password'))}
                placeholder="password"
              />
              {errors.password && <p>not work password</p>}

              <input
                className="focus:outline outline-2 outline-[#156963] rounded-lg p-3"
                type="password"
                {...(register('enterPassword'))}
                placeholder="enterPassword"
              />
              {errors.enterPassword && <p>not work enterPassword</p>}

              <input
                className="focus:outline outline-2 outline-[#156963] rounded-lg p-3"
                {...(register('email'))}
                placeholder="email"
              />
              {errors.email && <p>not work email</p>}

            </div>

            <UiButton state='white' modal=''>
              Зарегистрироваться
            </UiButton>
          </form>
        </UiModal.Body>

      </UiModal>

    )
  }

export default HeaderModalRegistr












