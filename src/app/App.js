import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from '../components/NavBar'
import {PostsPage} from '../features/posts/PostsPage';
import Post from '../features/posts/Post'
import { FilterBar } from '../features/filter-bar/FilterBar';
function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <main>
        <div className='app-content'>
          <Routes>
            <Route path='' element={<PostsPage />} />
            <Route path='/:filter' element={<PostsPage />} />
            <Route path='/:r/:filter' element={<PostsPage />} />
            <Route path= '/:r/:filter/:secondFilter' element={<PostsPage />} />
            <Route path='/search/:searchQuery' element={<PostsPage />} />
            <Route path='/r/:subreddit/comments/:postid/:description' element={<Post />} />
            
          </Routes>
        </div>
      </main>
      </div>
      
    </Router>
  );
}

export default App;
