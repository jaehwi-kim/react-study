// 전체 뉴스 불러오기
// GET https://newsapi.org/v2/top-headlines?country=kr&apiKey=e0f0b1309683476c8f211a09a27cefe2

// 특정 카테고리 뉴스 불러오기
// GET https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=e0f0b1309683476c8f211a09a27cefe2

import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
 
const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};
 
export default App;