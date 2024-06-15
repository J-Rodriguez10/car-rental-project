import React from 'react'
import NewsResult from './NewsResult'

import { NEWS_DUMMY_DATA } from '../../assets/dummyData/newsArticleData'

function NewsResults({filters, isCompacted=false}) {

  // Which you will filter the results
  const practiceData = NEWS_DUMMY_DATA[0];

  return (
    <div className="news-results-queue">
      <NewsResult newsData={practiceData} isCompacted={isCompacted}/>
    </div>
  )
}

export default NewsResults