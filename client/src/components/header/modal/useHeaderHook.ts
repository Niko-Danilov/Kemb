import { MARKETPRODUCT } from "@/components/screen/home/const"
import { useActions } from "@/hooks/useActions"
import { useMarket } from "@/hooks/useMarket"
import { zodResolver } from "@hookform/resolvers/zod"
import { StaticImageData } from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { ZodType, z } from "zod"
import { useAuthUserMutation, useCreateUserMutation, useDeleteItemsMutation, useGetItemsQuery, useOutTokenMutation, useTakeTokenQuery } from "../../../api/api"


interface IAccount {
  // name: string
  password: string
  enterPassword: string
  email: string
}


type Schema = z.infer<typeof schema>

const schema: ZodType<IAccount> = z.object({
  // name: z.string(),
  password: z.string().min(5).max(10),
  enterPassword: z.string().min(5).max(10),
  email: z.string().email(),
}).refine((data) => data.password === data.enterPassword, {
  message: "pass not correct",
  path: ["enterPassword"]
})

const clearAuth = {
  email: '',
  password: ''
}

interface IProduct {
  id: number,
  img: StaticImageData,
  title: string,
  price: string | number,
}



function useHeaderState() {
  const [burger, setBurger] = useState<boolean>(false)
  const [modalReg, setModalReg] = useState<boolean>(false)
  const [modalAuth, setModalAuth] = useState<boolean>(false)
  const [modalMarket, setModalMarket] = useState<boolean>(false)
  const [modalSearch, setModalSearch] = useState<boolean>(false)
  const [auth, setAuth] = useState(clearAuth)
  const scroll = useRef<number>(0)
  const refs = useRef<HTMLDivElement>(null)
  const [search, setSearch] = useState<string>('')
  const [searchItems, setSearchItems] = useState<IProduct[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  useEffect(() => {
    searchFunc(search)

    return () => {
      searchFunc(search)
    }
  }, [search])

  const searchFunc = useCallback((search: string) => {

    let newSearch = search.toLowerCase().split('')
    let market = MARKETPRODUCT.flat().filter(i => {

      if (newSearch.length === 0) {
        return false
      }

      let f = i.title.toLowerCase().split('')

      let flag = 0

      for (let j = 0; j <= newSearch.length; j++) {

        if (f[j] === newSearch[j]) {
          flag++
        }
      }


      if (flag === newSearch.length) {
        return true
      } else {
        return false
      }

    })

    setSearchItems(market)


  }, [search, searchItems])


  const { register, handleSubmit, formState: { errors }, reset } = useForm<Schema>({ mode: 'onChange', resolver: zodResolver(schema) })


  const { refetch } = useTakeTokenQuery(null, {
    pollingInterval: 5 * 60 * 1000,

  })

  const { data, isError } = useGetItemsQuery(null, {

  })
  let massiveData = data?.items

  if (isError) {
    massiveData = undefined
  }

  const [createUser] = useCreateUserMutation()

  const onSubmit: SubmitHandler<IAccount> = async data => {
    const dataLost = { email: data.email, password: data.password }

    let ok = await createUser(dataLost)

    if (ok.data === null) {
      handleModalReg()
    }
    reset()
  }

  const { market } = useMarket()

  const { deleteToMarket } = useActions()

  const [deleteItems] = useDeleteItemsMutation()


  const handleDeleteToMarket = useCallback(async (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    await deleteItems(id)
  }, [])


  const handleBurgerClick = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    e.preventDefault()
    setBurger((prev) => !prev)
    bodyLock(!burger)
  }

  const handleModalReg = (
    e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement> | React.BaseSyntheticEvent<HTMLFormElement>,
  ) => {
    e?.preventDefault()
    setModalReg((prev) => !prev)
    bodyLock(!modalReg)
  }

  const [outToken] = useOutTokenMutation()

  const handleOut = async (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    await outToken(null)
  }



  const [authUser, { error, isSuccess }] = useAuthUserMutation()

  const handlerClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(auth)
    // formSubmit()
    const ok = await authUser(auth)
    setAuth(clearAuth)
    refetch()



    if (ok.data === null) {
      handleModalAuth()
    }
    // handleModalAuth(e)
  }





  const handleModalAuth = (
    e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement> | React.BaseSyntheticEvent<HTMLFormElement>,
  ) => {
    e?.preventDefault()
    setModalAuth((prev) => !prev)
    bodyLock(!modalAuth)

  }

  const handleModalMarket = (
    e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>,
  ) => {
    e?.preventDefault()
    setModalMarket((prev) => !prev)
    bodyLock(!modalMarket)
  }

  const handleModalSearch = (
    e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>,
  ) => {
    e?.preventDefault()
    setModalSearch((prev) => !prev)
    bodyLock(!modalSearch)
  }



  useEffect(() => {
    scroll.current = (window.innerWidth - document.documentElement.clientWidth)

    return () => {
      scroll.current = 0
    }
  }, [])

  useEffect(() => {
    if (modalAuth || modalReg || modalMarket || modalSearch === true) {
      document.body.style.paddingRight = scroll.current + 'px'
      refs.current != null ? refs.current.style.paddingRight = scroll.current + 'px' : null
    } else {
      document.body.style.paddingRight = 0 + 'px'
      refs.current != null ? refs.current.style.paddingRight = 0 + 'px' : null
    }
    return () => {
      document.body.style.paddingRight = 0 + 'px'
      refs.current != null ? refs.current.style.paddingRight = 0 + 'px' : null
    }

  }, [modalAuth, modalReg, modalMarket, modalSearch])



  return { modalAuth, modalMarket, modalReg, modalSearch, burger, refs, handleModalAuth, handleBurgerClick, handleModalMarket, handleModalReg, handleModalSearch, handleSubmit, handlerClick, onSubmit, register, errors, reset, auth, market, deleteToMarket, search, handleSearch, searchItems, setAuth, massiveData, handleOut, handleDeleteToMarket }
}

export default useHeaderState


const bodyLock = (lock: boolean) => {
  lock ?
    document.body.classList.add('_lock')
    :
    document.body.classList.remove('_lock')
}