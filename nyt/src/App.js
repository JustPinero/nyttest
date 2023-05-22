import React from 'react'
/* Custom Components */
import ArticleGallery from './pages/ArticleGallery';
import MobileViewer from './pages/MobileViewer';
/* STYLE */
import "./App.css"

function App() {
  return (
    <div className="App">
        <ArticleGallery/>
        <MobileViewer/>
    </div>
  );
}

export default App;
