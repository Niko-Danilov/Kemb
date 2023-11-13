import { useTypedSelector } from './useTypedSelector'

export const useMarket = () => {
  const market = useTypedSelector(state => state.market)

  return { market }
}