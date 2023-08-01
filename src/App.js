import { useEffect, useState } from "react";
import MyForm from "./components/MyForm";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MySelect from "./components/MySelect";
import Preloader from "./components/Preloader";
import { getPageCount, getPagesArray } from "./utils/pages";

function App() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState('');
  const [pages, setPages] = useState(1);
  const [currentPages, setCurrentPages] = useState(1);
  const [selectedSort, setSelectedSort] = useState('up');
  const [valueInput, setValueInput] = useState('');
  const [isSubmit, setSubmit] = useState(false);
  const [isPreloader, setPreloader] = useState(false);

  const fetchRepos = async () => {
    setPreloader(true);
    if (valueInput) {
      let response = await fetch(`https://api.github.com/search/users?q=${valueInput}&per_page=30&page=${currentPages}`);
      let data = await response.json();
      setPosts(data.items.sort((a, b) => a.id - b.id));
      setCount(data.total_count);
      setSelectedSort('up');
      setPages(getPageCount(data.total_count, 30));
    }
    else {
      setPosts([]);
      setCount(0);
    }
    setPreloader(false);
  }
  
  useEffect(() => {
    if (isSubmit) {
      fetchRepos();
    }
    setSubmit(false);
  });

  useEffect(() => {
    fetchRepos();
    setSubmit(false);
  }, [currentPages]);

  let pagesArray = getPagesArray(pages);

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    if (sort === 'up') {
      setPosts([...posts].sort((a, b) => a.id - b.id));
    }
    else {
      setPosts([...posts].sort((a, b) => b.id - a.id));
    }
  }

  return (
    <div className="container">
      <div className="repos">
        <Counter count={count} />
        <MyForm value={valueInput} setValue={(value) => { setValueInput(value) }} setSubmit={(bool) => { setSubmit(bool) }} />
        <MySelect
          value={selectedSort}
          sortPosts={sortPosts}
          defaultvalue={'По количеству репозиториев'}
          options={[
            { value: 'down', name: 'По убыванию' },
            { value: 'up', name: 'По возрастанию' },
          ]} />
        {isPreloader ? <Preloader /> : <PostList posts={posts} pages={pagesArray} currentPages={currentPages} setCurrentPages={setCurrentPages} />}
      </div>
    </div>
  );
}

export default App;
