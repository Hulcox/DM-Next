import { createContext, useCallback, useEffect, useState } from "react"
import Swal from "sweetalert2"

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [listData, setListData] = useState([])
  const [resultatIn, setResultatIn] = useState(0)
  const [resultatOut, setResultatOut] = useState(0)

  useEffect(() => {
    const localStorageDatas = localStorage.getItem("data")
    const data = JSON.parse(localStorageDatas)
    setListData(data || [])
  }, [])

  useEffect(() => {
    saveData(listData)
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
  }, [listData])

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
    if (data === null) {
      localStorage.setItem("data", JSON.stringify([]))
    } else {
      localStorage.setItem("data", JSON.stringify(data))
    }
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
        listData: listData || [],
        resultatIn,
        resultatOut,
        addToList,
        resetList,
      }}
    />
  )
}

export default AppContext
