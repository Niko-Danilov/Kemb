import UiButton from "@/components/uiGlobal/uiButton/UiButton"
import UiModal from "@/components/uiGlobal/uiModal/UiModal"
import Image, { StaticImageData } from "next/image"


interface IProduct {
  id: number,
  img: StaticImageData,
  title: string,
  price: string | number,
}
const HeaderModalSearch = (
  {
    isOpen,
    onClose,
    value,
    setSearch,
    items,
  }: {
    isOpen: boolean,
    onClose: (e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void,
    value: string,
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    items: IProduct[]
  }
) => {



  return (
    <UiModal width="md" isOpen={isOpen} onClose={onClose}>
      <UiModal.Header className="">
        Поиск
      </UiModal.Header>

      <UiModal.Body className="flex flex-col flex-1">

        <div className="flex flex-col gap-3 p-3">
          <div className="flex justify-center items-center gap-4">
            <input
              className='w-full focus:outline focus:outline-2 focus:outline-[#156963] focus:rounded-lg p-3 text-xl'
              type="text"
              value={value}
              placeholder="Поиск..."
              onChange={setSearch} />
            <UiButton state="white" modal="">Найти</UiButton>
          </div>
          <ul>
            {items.length ? items.map(i => <li className="flex justify-between items-center" key={i.id}>
              <Image src={i.img} alt={i.title} width={50} />
              <p>{i.title}</p>
              <p>{i.price}</p>
            </li>) : <p>Поиск результатов не дал</p>}
          </ul>
        </div>

      </UiModal.Body>
    </UiModal>
  )
}

export default HeaderModalSearch