import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from '../components/NavBar'
import PostListings from '../features/posts/PostListings';

function App() {
  return (
    // <Router>
    <div>
      <NavBar />
      <main>
        {/* <Routes>
        </Routes> */}
        <PostListings />
      </main>
      </div>
      
    // </Router>
  );
}

export default App;
