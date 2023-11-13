import UiButton from '@/components/uiGlobal/uiButton/UiButton'
import UiModal from '@/components/uiGlobal/uiModal/UiModal'
import { Dispatch, SetStateAction } from 'react'


const HeaderModalAuth =
  (
    { isOpen, onClose, authEmail, authPassword, setAuth, handleForm }
      :
      {
        isOpen: boolean,
        onClose: (e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement> | React.BaseSyntheticEvent<HTMLFormElement>) => void, //e: React.MouseEvent<HTMLButtonElement>
        authEmail: string,
        authPassword: string,
        setAuth: Dispatch<SetStateAction<{ email: string, password: string }>>
        handleForm: (e: React.FormEvent<HTMLFormElement>) => void

      }


  ) => {

    return (
      <UiModal width='md' isOpen={isOpen} onClose={onClose}>
        <UiModal.Header className=''>
          Авторизация
        </UiModal.Header>
        <UiModal.Body className='flex flex-col flex-1'>
          <form onSubmit={handleForm} className='flex flex-col flex-1 justify-between'>
            <div className='flex flex-col gap-10 items-center'>

              <input
                className="focus:outline outline-2 outline-[#156963] rounded-lg p-3"
                type="text"
                placeholder='email'
                onChange={(e) => setAuth(prev => ({ ...prev, email: e.target.value }))}
                value={authEmail}
              />
              <input
                className="focus:outline outline-2 outline-[#156963] rounded-lg p-3"
                type="password"
                placeholder='password'
                onChange={(e) => setAuth(prev => ({ ...prev, password: e.target.value }))}
                value={authPassword}
              />

            </div>

            <UiButton state='white' modal=''>
              Авторизоваться
            </UiButton>
          </form>
        </UiModal.Body>

      </UiModal>

    )
  }

export default HeaderModalAuth





