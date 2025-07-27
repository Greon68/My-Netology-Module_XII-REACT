import { useState, useEffect } from 'react'
import './App.css';
import News from './components/News/News';
import { NEWS_URL } from './config/app';
import { loadNews } from './api/loadNews';
import { Loader } from './components/Loader/Loader';
import { LanguageContext } from './config/context';

function App() {
  const [news, setNews] = useState([]);
  // const [loading, setLoading] = useState(true);


  // 1.********************8
  // useEffect ( ()=>{
  //     fetch (NEWS_URL)
  //       .then ((r)=>r.json())
  //       .then (console.log)             
  //       .catch (console.error)
  // },[]);


  // 2.******************
  // useEffect ( ()=>{
  //   fetch (NEWS_URL)
  //     .then ((r)=>r.json())
  //     .then ((data) => {
  //       setNews(data)
  //     })
  //     .catch (console.error)
  // },[]);

  // 3.***************************
  // const loadNewsToState = ()=> {
  //   loadNews()
  //   .then ((result) => result.json())
  //   .then ((data) => setNews(data));
  // }

  // 4.*****************
  // const loadNewsToState = ()=> {
  //   loadNews()
  //   .then ((result) => result.json())
  //   .then ((data) => {
  //     setNews((prev)=> [...prev, ...data])
  //   });
  // }

  // применяем setInterval
  // useEffect(()=> {
  //   loadNewsToState();
  //   setInterval(loadNewsToState, 5000)
  // },[])

  // 5. Применяем setTimeout
  //   const loadNewsToState = ()=> {

  //   loadNews()
  //   .then ((result) => result.json())
  //   .then ((data) => setNews(data));
  // }

  // const step = () => {
  //   setTimeout(() => {
  //     loadNewsToState();
  //     step();
  //   }, 5000);
  // };

  // useEffect(() => {
  //   loadNewsToState();
  //   step();
  // }, []);


  //6. Индикатор загрузки
  const [loading, setLoading] = useState(true);

  const loadNewsToState = ()=> {
    setLoading(true)

    loadNews()
    .then ((result) => result.json())
    .then ((data) => {
      setNews(data)
    })
    .finally (()=> {
      setLoading(false)
    })
  };

  const step = () => {
    setTimeout(() => {
      loadNewsToState();
      step();
    }, 5000);
  };

  useEffect(() => {
    loadNewsToState();
    step();
  }, []);



  return (
    <>   
      {/* <h2>Vite + React : Hooks</h2>
      <News data= {news} />
      <Loader loading={loading} /> */}

    <LanguageContext.Provider value={{ language: "en" }}>
      <News data={news} />
      <Loader loading={loading} />
    </LanguageContext.Provider>
    
    </>
  )
}

export default App
