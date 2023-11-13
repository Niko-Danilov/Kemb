import { FC } from 'react'


interface IElement {
  slider: React.ReactElement
  advantages: React.ReactElement[]
  select: React.ReactElement
  market: React.ReactElement[]
  description: React.ReactElement
  visit: React.ReactElement

}


const HomeLayout: FC<IElement> = ({ slider, advantages, select, market, description, visit }) => {



  return (
    <>
      <section>
        {slider}
      </section>
      <section className='py-20'>
        <div className="max-w-[1193px] mx-auto px-3">
          <div className='flex gap-3 md:flex justify-between md:gap-1 flex-wrap'>
            {advantages}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1193px] mx-auto px-3 pb-24">
          <div className='flex justify-between pb-10'>
            <h2 className='text-xl font-medium'>Featured Plants</h2>
            {select}
          </div>
          <div className='md:flex justify-between gap-1 flex-wrap'>
            {market}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1193px] mx-auto px-3 pb-24">
          {description}
        </div>
      </section>
      <section>
        <div className="max-w-[1193px] mx-auto px-3 pb-24">
          {visit}
        </div>
      </section>
    </>

  )
}

export default HomeLayout
