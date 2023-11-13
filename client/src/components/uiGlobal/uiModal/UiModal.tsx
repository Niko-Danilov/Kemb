import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';


const UiModal = (
  { width = 'md', children, isOpen = false, onClose }
    :

    { width: 'md' | 'full', children: React.ReactElement[], isOpen: boolean, onClose: (e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void }
) => {

  if (!isOpen) {
    return null;
  }
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const Modal = (e.target as HTMLElement).closest('[data-id=modal]')
    if (Modal) return
    onClose(e)

  }



  const modales = (
    <div onClick={handleClick} className='fixed inset-0 bg-slate-900/60  p-10 overflow-y-auto z-20'>
      <div data-id='modal' className={clsx("bg-white rounded-lg min-h-[480px] mx-auto relative", 'flex flex-col', {
        md: 'max-w-[640px] w-full',
        full: 'mx-5'
      }[width]
      )}
      >

        <button onClick={onClose} className='absolute top-2 right-2'>
          <AiOutlineClose size={24} />
        </button>
        {children}
      </div>
    </div>
  );

  return document.getElementById('myModal') ? createPortal(modales, document.getElementById('myModal') as HTMLElement) : null
}







UiModal.Header = function UiModalHeader
  ({ children, className }: {
    children: string, className: string |
    ''
  }) {
  return (
    <div className={clsx(className, 'text-2xl text-center py-3')}>
      {children}
    </div>
  )
}


UiModal.Body = function UiModalBody({ children, className }: {
  children: React.ReactElement, className: string |
  ''
}) {
  return (<div className={clsx(className, '')}>{children}</div>)
}


UiModal.Footer = function UiModalFooter({ children, className }: {
  children: string | React.ReactElement, className: string |
  ''
}) {
  return (<div className={clsx(className, 'flex justify-center py-3')}>{children}</div>)
}






export default UiModal