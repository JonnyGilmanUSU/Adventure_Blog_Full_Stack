import React from 'react';
import { useSearchResults } from '../../Context/SearchContext';
import styles from './searchresults.module.css';

function SearchResultsPage() {
    const { searchResults, clearSearchResults, searchInput } = useSearchResults();
    console.log("SEARCH INPUT in results:   ", searchInput)

    if (searchResults.length === 0) {
        return <div>No search results</div>;
    }

    // Date function
    const formDate = (dateString) => {
        const date = new Date(dateString);
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${month} ${year}`;
    }

    return (
        <div>
                {searchResults.map((result, index) => (
                    <div className={styles.searchResultsContainer}>
                        <div>
                            <h3>Search Results For: </h3>
                            <h3 className={styles.searchInput}>{searchInput}</h3>
                        </div>
                        <div className={styles.searchItem}>
                            <img src={result.imageURL} alt="" />
                            <div className={styles.infoContainer}>
                                <h4 className={styles.infoContainerTitle}>{result.title}</h4>
                                <p className={styles.infoContainerName}>by Jonny Gilman</p>
                                <p className={styles.date}>{formDate(result.PostDate)}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default SearchResultsPage;
