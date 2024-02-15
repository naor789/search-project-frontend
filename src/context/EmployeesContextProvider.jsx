import React, { useState, createContext } from 'react';
import axios from 'axios'
import * as Constants from "../Constants";


export const EmployeesContext = createContext();
const baseUrl = Constants.baseUrl;

export default function EmployeesContextProvider({ children }) {
    const [employeeList, setEmployeeList] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [showResults, setShowResults] = useState(false)
    const [noResultError, setNoResultError] = useState('')
    const [isOnFocus, setIsOnFocus] = useState(false)

    const searchEmployee = async (searchValue) => {
        return await axios
            .get(`${baseUrl}/?query=${searchValue}`)
            .then(function (response) {
                const employeeListResult = response.data;
                if (employeeListResult.length) {
                    setEmployeeList(employeeListResult)
                } else {
                    setNoResultError(<div className='error'>{Constants.resultNotFoundError} <span className='search-value'> {searchValue}</span></div>)
                }
            })
            .catch((error) => {
                console.error("Error", error.message);
            })

    }

    const getOneEmployee = async (id) => {
        return await axios
            .get(`${baseUrl}/${id}`)
            .then(function (response) {
                setEmployeeList(response.data)
                setShowResults(true)
            })
            .catch((error) => {
                console.error("Error", error.message);
            })
    }

    const addEmployeeToFavorite = async (id, isFavorite) => {
        const objBody = {
            id,
            isFavorite
        }
        return await axios
            .post(`${baseUrl}/isFavorite`, objBody)
            .then(function (response) {
                const itemIndex = employeeList.findIndex((employee) => employee._id === response.data._id);
                if (itemIndex !== -1) {
                    let newArr = [...employeeList]
                    newArr[itemIndex] = response.data;
                    setEmployeeList(newArr)
                }
            })
            .catch((error) => {
                console.error("Error", error.message);
            })
    }

    const value = {
        employeeList,
        searchEmployee,
        searchValue,
        setSearchValue,
        showResults,
        setShowResults,
        noResultError,
        setNoResultError,
        getOneEmployee,
        isOnFocus,
        setIsOnFocus,
        addEmployeeToFavorite
    }

    return (
        <EmployeesContext.Provider value={value}>
            {children}
        </EmployeesContext.Provider>
    )
}
