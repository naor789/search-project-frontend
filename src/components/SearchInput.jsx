import React, { useContext, useState, useRef, useEffect } from "react";
import { EmployeesContext } from "../context/EmployeesContextProvider";
import SearchResults from "./SearchResults";
import ResetIcon from "../assets/ResetIcon";
import SearchIcon from "../assets/SearchIcon";
import * as Constants from "../Constants";

import "./Search.css";

export default function SearchInput() {
  const {
    employeeList,
    searchEmployee,
    searchValue,
    setSearchValue,
    setShowResults,
    showResults,
    setNoResultError,
    noResultError,
    isOnFocus,
    setIsOnFocus,
  } = useContext(EmployeesContext);

  const textInput = useRef(null);
  const [buttonDisable, setButtonDisable] = useState(true);

  const handleOnChange = (e) => {
    setNoResultError("");
    setShowResults(false);
    setSearchValue(e.target.value);
    searchEmployee(e.target.value);
  };

  const handleOnFocus = (isReset) => {
    setButtonDisable(false);
    textInput.current.focus();
    if (isReset) {
      searchEmployee("");
    } else {
      searchEmployee(searchValue);
    }
    setNoResultError("");
    setShowResults(false);
    setIsOnFocus(true);
  };

  const handleSearchResults = () => {
    if (noResultError) {
      setIsOnFocus(true);
      searchEmployee("");
      setShowResults(true);
    } else {
      setIsOnFocus(true);
      searchEmployee(searchValue);
      setShowResults(true);
    }
  };

  const resetInputValue = async () => {
    await setSearchValue("");
    let isReset = true;
    handleOnFocus(isReset);
  };

  useEffect(() => {
    if (employeeList.length === 1 && !noResultError && showResults) {
      setButtonDisable(true);
    }
  }, [searchValue, employeeList, noResultError, showResults]);

  return (
    <div>
      {!showResults ? (
        <>
          <div className="search-title">{Constants.searchTitle}</div>
          <div className="search-subtitle">{Constants.searchSubtitle}</div>
        </>
      ) : (
        <div className="search-result-title search-title">
          {Constants.searchResultTitle}
        </div>
      )}
      <div className="search-input-wrapper">
        <div className="search-input-inner-wrapper">
          <input
            type="text"
            value={searchValue}
            onClick={() => handleOnFocus()}
            onChange={(e) => handleOnChange(e)}
            className="search-input"
            placeholder={Constants.searchInputPlaceholder}
            ref={textInput}
          />
          {searchValue.length > 0 && (
            <div
              className="reset-button"
              id="reset-button"
              onClick={() => resetInputValue()}
            >
              <ResetIcon />
            </div>
          )}
          {isOnFocus ? <SearchResults /> : null}
        </div>
        <button
          className="search-button"
          id="search-button"
          onClick={() => handleSearchResults()}
          disabled={buttonDisable}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
