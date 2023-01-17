import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './components/posts';
import Post from './components/post';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
