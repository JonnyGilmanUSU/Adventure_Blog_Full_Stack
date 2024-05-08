import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import CloseIcon from '../../../assets/icons/Close.svg';
import { useSearchResults } from '../../../Context/SearchContext';

function SearchMenu({ isOpen, onClose }) {
    const [searchInput, setSearchInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');  // State for storing error messages
    const { updateSearchResults, updateSearchInput} = useSearchResults();
    const navigate = useNavigate();

    const handleSearch = async (event) => {
        if (event.key === 'Enter') {  // Trigger search on pressing 'Enter'
            try {
                const response = await axios.get('http://localhost:3001/getSearchResults', { params: {search: searchInput} });
                if (response.status === 200) {
                  updateSearchResults(response.data.data);
                  updateSearchInput(searchInput); 
                  setErrorMessage('');
                  onClose();
                  navigate('/searchResults');
                }
            } catch (error) {
                console.log(error)
                if (error.response) {
                    console.log(error.response.data.message);
                    setErrorMessage(error.response.data.message);
                } else {
                    console.log('Error', error.message);
                    setErrorMessage('An unexpected error occurred.');
                }
            }
        }
    };

    return (
        <div className={isOpen ? `${styles.searchMenu} ${styles.open}` : styles.searchMenu}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder='SEARCH ...'
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onKeyPress={handleSearch}
                autoFocus
            />
            <i>Press Enter To Begin Search</i>
            {errorMessage && <p>{errorMessage}</p>} 
            <img className={styles.closeIcon} src={CloseIcon} onClick={onClose} alt="close" />
        </div>
    );
}

export default SearchMenu;
