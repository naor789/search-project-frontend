import React, { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContextProvider";
import { getHighlightedText, extractNestedDetails } from "../utils";
import StarIcon from "../assets/StarIcon";

import "./Search.css";

export default function SearchResults() {
  const {
    employeeList,
    searchValue,
    showResults,
    getOneEmployee,
    noResultError,
    addEmployeeToFavorite,
  } = useContext(EmployeesContext);

  const employeeCardClassName = (index) => {
    if (index !== employeeList.length - 1 && index !== 0) {
      return "result-item";
    }
    if (index === employeeList.length - 1 && index !== 0) {
      return "result-item result-last";
    }
    if (index !== employeeList.length - 1 && index === 0 && !showResults) {
      return "result-item result-first";
    }
    if (index !== employeeList.length - 1 && index === 0 && showResults) {
      return "result-item show-result-first";
    }
    if (index === employeeList.length - 1 && index === 0 && showResults) {
      return "result-item result-last show-result-first";
    } else {
      return "result-item result-last result-first";
    }
  };

  return (
    <div
      className={
        showResults ? "results-list show-results-list" : "results-list"
      }
    >
      <div className={showResults ? null : "results-list-wrapper"} id="style-1">
        {noResultError && (
          <div
            className={
              employeeList.length && showResults
                ? "result-item result-last show-result-first"
                : "result-item result-last result-first"
            }
          >
            <span className="no-results-message">{noResultError}</span>
          </div>
        )}
        {employeeList.length && (showResults || !noResultError)
          ? employeeList.map((employee, index) => {
              return (
                <div
                  className={employeeCardClassName(index)}
                  id={employee._id}
                  key={employee._id}
                >
                  <img
                    src={extractNestedDetails(
                      employee.EmployeeDetails,
                      "ImageURL"
                    )}
                    alt="Employee Avatar"
                    className="avatar"
                    id={employee._id}
                  />
                  <div
                    className="result-text-wrapper"
                    onClick={() => getOneEmployee(employee._id)}
                  >
                    <div className="result-title" id={employee._id}>
                      {getHighlightedText(
                        employee.EmployeeFullName,
                        searchValue
                      )}
                    </div>

                    <div className="result-subtitle" id={employee._id}>
                      {getHighlightedText(
                        extractNestedDetails(
                          employee.EmployeeDetails,
                          "EmployeeRole"
                        ),
                        searchValue
                      )}
                    </div>
                  </div>
                  <StarIcon
                    onClick={() =>
                      addEmployeeToFavorite(employee._id, !employee.isFavorite)
                    }
                    isFavorite={employee.isFavorite}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
