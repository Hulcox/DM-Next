import { createContext, useCallback, useEffect, useState } from "react"
import Swal from "sweetalert2"

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [listData, setListData] = useState([])
  const [resultatIn, setResultatIn] = useState(0)
  const [resultatOut, setResultatOut] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (listData.length > 0) {
      setResultatIn(() =>
        listData.reduce((total, current) => {
          if (current.value > 0) {
            return total + Number(current.value)
          }

          return total
        }, 0)
      )
      setResultatOut(() =>
        listData.reduce((total, current) => {
          if (current.value < 0) {
            return Number(total) + Number(current.value)
          }

          return Number(total)
        }, 0)
      )
    }
  }, [listData])

  useEffect(() => {
    const localStorageDatas = localStorage.getItem("data")

    if (!localStorageDatas) {
      setLoaded(true)

      return
    }

    const data = JSON.parse(localStorageDatas)
    setListData(data)
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) {
      return
    }

    saveData(listData)
  }, [loaded, listData])

  const resetList = useCallback(() => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearAll()
        Swal.fire("Cleared!", "The list has been cleared.", "success")
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addToList = useCallback((data) => {
    setListData((currentdata) => [...currentdata, data])
  }, [])

  const saveData = (data) => {
    localStorage.setItem("data", JSON.stringify(data))
  }

  const clearAll = useCallback(() => {
    localStorage.removeItem("data")
    setListData([])
    setResultatIn(0)
    setResultatOut(0)
  }, [])

  return (
    <AppContext.Provider
      {...props}
      value={{
        listData,
        resultatIn,
        resultatOut,
        addToList,
        resetList,
      }}
    />
  )
}

export default AppContext
