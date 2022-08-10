import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from '../components/NavBar'
import PostListings from '../features/posts/PostListings';
import Post from '../features/posts/Post'
function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path='' element={<PostListings />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </main>
      </div>
      
    </Router>
  );
}

export default App;
