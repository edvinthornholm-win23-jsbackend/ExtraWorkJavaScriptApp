'use client'
// this is client side component

import { useState } from "react";

export default function SearchFilters() {
    const [categories, setcategories] = useState([]);
    
    return (
    <div className="container">
            <form className="filters">
                <div className="select">
                    <div className="input-search-group">
                        <input id="searchQuery" name="searchQuery" placeholder="Search courses"/>
                        <i className="fa-regular fa-search"></i>
                    </div>

                <select>
                    <option>All categories</option>
                </select>

                </div>
        </form>
    </div>

    );
  }
  