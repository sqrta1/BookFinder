import './SearchBar.css';
import React from 'react';

export function SearchBar(props) {
    
    return (
        <div>
            <div className='searchbar'>
                <form onSubmit={props.onSubmit}>
                    <input type='text' name="search" placeholder='Search...'>
                    </input>
                    <div className='sortbar'>
                        <div className='mr25'>
                            <p>Categories</p>
                            <select onChange={props.handleCategories}>
                                <option>all</option>
                                <option>art</option>
                                <option>biography</option>
                                <option>computers</option>
                                <option>history</option>
                                <option>medical</option>
                                <option>poetry</option>
                            </select>
                        </div>
                        <div>
                            <p>Sorting by</p>
                            <select onChange={props.handleSort}>
                                <option>relevance</option>
                                <option>newest</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
