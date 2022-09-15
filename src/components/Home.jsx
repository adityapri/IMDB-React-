import React from 'react'
import './Header.css'
import './banner.css'
import './MovieList.css'
import './Pagination.css'
import Header from './Header.jsx'
import Banner from './Banner'
import MovieList from './MovieList'
import { useEffect } from 'react'
import { useState } from 'react'

function Home() {
    const [pageNo, setpageNumber] = useState(1);

    function incPageNumber() {
        setpageNumber(function (pageNo) {
            return pageNo + 1;
        });
    }
    function descPageNum() {
        if (pageNo == 1) {
            return;
        }
        setpageNumber(function (pageNo) {
            return pageNo - 1;
        });
    }

    return (
        <>
            <Header />
            <Banner />
            <MovieList pageNo={pageNo} />

            <div className="pagination">
                <div className="pagination_btn"
                    onClick={descPageNum}
                >Previous</div>
                <div className="page_no">{pageNo}</div>
                <div className="pagination_btn"
                    onClick={incPageNumber}
                >Next</div>
            </div>
        </>
    )
}

export default Home
