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
  const [selectedSort, setSelectedSort] = useState('desc');
  const [valueInput, setValueInput] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);

  const PAGESIZE = 30;

  const fetchRepos = async () => {
    setIsPreloader(true);
    if (valueInput) {
      let response = await fetch(`https://api.github.com/search/users?q=${valueInput}&per_page=${PAGESIZE}&page=${currentPages}&sort=repositories&order=${selectedSort}`);
      let data = await response.json();
      setPosts(data.items);
      setCount(data.total_count);
      setPages(getPageCount(data.total_count, PAGESIZE));
    }
    else {
      setPosts([]);
      setCount(0);
    }
    setIsPreloader(false);
  }

  useEffect(() => {
    fetchRepos();
    setIsSubmit(false);
  }, [currentPages, isSubmit, selectedSort]);

  let pagesArray = getPagesArray(pages, currentPages);

  return (
    <div className="container">
      <div className="repos">
        <Counter count={count} />
        <MyForm value={valueInput} setValue={(value) => { setValueInput(value) }} setSubmit={(isSubmit) => { setIsSubmit(isSubmit) }} />
        <MySelect
          value={selectedSort}
          setSelectedSort={setSelectedSort}
          defaultvalue={'По количеству репозиториев'}
          options={[
            { value: 'desc', name: 'По убыванию' },
            { value: 'asc', name: 'По возрастанию' },
          ]} />
        {isPreloader ? <Preloader /> : <PostList posts={posts} pages={pagesArray} currentPages={currentPages} setCurrentPages={setCurrentPages} />}
      </div>
    </div>
  );
}

export default App;
