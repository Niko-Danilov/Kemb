import UiModal from "@/components/uiGlobal/uiModal/UiModal"
import { StaticImageData } from "next/image"
import HeaderMarketItem from "./HeaderMarketItem"

interface IProduct {
  id: number,
  img: StaticImageData,
  title: string,
  price: string | number,
}

const HeaderModalMarket = ({
  isOpen,
  onClose,
  market,
  onClick,
  marketQuery
}: {
  isOpen: boolean,
  onClose: (e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void,
  market: IProduct[],
  onClick: (id: number, e: React.MouseEvent<HTMLButtonElement>) => void,
  marketQuery: IProduct[]
}) => {




  return (

    <UiModal width="md" isOpen={isOpen} onClose={onClose}>
      <UiModal.Header className="">
        Корзина
      </UiModal.Header>

      <UiModal.Body className="flex flex-col flex-1">

        <div className="flex flex-col gap-3 p-3">
          {!marketQuery?.length ? 'Корзина пуста' : marketQuery.map(i =>
            <HeaderMarketItem
              key={i.id}
              item={i}
              id={i.id}
              onClick={onClick}
            />
          )
          }
        </div>

      </UiModal.Body>
    </UiModal>
  )
}

export default HeaderModalMarket