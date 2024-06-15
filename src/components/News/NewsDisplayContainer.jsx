import React from 'react'
import PaginationButtons from './PaginationButtons'
import NewsResults from './NewsResults'

function NewsDisplayContainer() {
  return (
    <div className="news-display-results-cont">
      <NewsResults />
      <PaginationButtons />
    </div>
  )
}

export default NewsDisplayContainer