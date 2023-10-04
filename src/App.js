import './App.css';
import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList';
import AddForm from './features/posts/AddForm';

function App() {
  return (
    <div>
      <Counter/>
      <PostsList/>
      <AddForm/>
    </div>
  );
}

export default App;
