import React, { createContext, useState, useContext } from 'react';

const SearchResultsContext = createContext();

export const useSearchResults = () => useContext(SearchResultsContext);


export const SearchResultsProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const updateSearchResults = (results) => {
        setSearchResults(results);
    };

    const clearSearchResults = () => {
        setSearchResults([]);
        setSearchInput('');
    };

    const updateSearchInput = (input) => {  // Method to update search input
        setSearchInput(input);
    };

    console.log("SEARCH RESULTS IN CONTEXT: ",searchResults)
    console.log("SEARCH INPUT IN CONTEXT: ", searchInput);



    return (
        <SearchResultsContext.Provider value={{ 
            searchResults, 
            updateSearchResults, 
            clearSearchResults,
            searchInput,
            updateSearchInput

        }}>
            {children}
        </SearchResultsContext.Provider>
    );
};