import React from 'react';

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1)

  return (
    <div>
      <ul className="pagination justify-content-center">
        {pageNumbers.map(page => (
          <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
            <a href="#" onClick={() => setCurrentPage(page)} className='page-link'>
              {page}
            </a>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default Pagination;