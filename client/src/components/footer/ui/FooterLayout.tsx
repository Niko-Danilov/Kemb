// 'use client'

import Link from 'next/link'
import React, { FC } from 'react'
import { footerMenu, footerTitle } from '../const'



interface IElement {
  footerForm: React.ReactElement
}

const FooterLayout: FC<IElement> = ({ footerForm }) => {



  return (
    <footer>
      <div className="max-w-[970px] mx-auto px-3 shrink-0">
        <div className='pt-16 pb-16'>
          <ul className='flex flex-col justify-between gap-5 sm:flex-row gap-2'>
            <li>
              <Link
                href="/"
                className='text-2xl uppercase text-[#156963]'>
                {footerTitle.logo}
              </Link>
              <div className='mt-6 text-base font-medium leading-4 mb-3'>
                {footerTitle.title}
              </div>
              <div className='max-w-[282px] w-full text-xs font-normal leading-5'>
                {footerTitle.description}
              </div>
            </li>
            {footerMenu.map(item =>
              <li key={item.id}>
                <div
                  className='text-base font-medium mb-5'
                  key={item.id}
                >
                  {item.title}
                </div>
                <ul className='flex flex-col gap-4'>

                  {item.child.map(link =>
                    <li
                      key={link.id}>
                      <Link
                        key={link.id}
                        href={link.link}
                        className='max-w-[110px] w-full text-sm leading-4'>
                        {link.link}
                      </Link>
                    </li>
                  )
                  }

                </ul>
              </li>
            )}
            <li>

              {/* <FooterForm
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
                errors={errors}
                reset={reset}
              /> */}

              {footerForm}

            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FooterLayout