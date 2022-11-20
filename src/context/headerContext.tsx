import { createContext, ReactNode, useLayoutEffect, useState } from 'react'

interface HeaderContextType {
  headerHeight: number
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const HeaderContext = createContext({} as HeaderContextType)
export function HeaderContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [headerHeight, setHeaderHeight] = useState<number>(0)
  useLayoutEffect(() => {
    const mainHeader = document.querySelector('#main-header')
    if (mainHeader) {
      setHeaderHeight(mainHeader?.getBoundingClientRect().height)
    }
  }, [headerHeight])

  return (
    <HeaderContext.Provider value={{ headerHeight }}>
      {children}
    </HeaderContext.Provider>
  )
}
