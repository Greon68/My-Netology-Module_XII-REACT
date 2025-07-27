import { useState, useRef, useEffect, createContext, useContext }  from 'react'
import './App.css'
import { LanguageContext } from './config/context';

// const LanguageContext = createContext({
//   language: 'en'
// });

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// const useData = ({url, defaultData, mapData, pollInterval = false }) => {
//   const [data, setData] = useState(defaultData);
//   const [loading, setLoading] = useState(true);
//   const [polling, setPolling] = useState(true);
    
//   const fetchData = async () => {
//     setLoading(true);
//     await delay(5000)
//     const r = await fetch(url);
//     const data = await r.json();
//     setData(mapData(data));
//     setLoading(false);
//   }
  
//   const step = () => {
//     fetchData();
//     if (pollInterval && polling) {
//       setTimeout(step, pollInterval)
//     }
//   }

//   useEffect(() => {
//     step();
//     return () => {
//       setPolling(false);
//     }
//   }, [url]);

//   return [data, loading];
// }

// const TRANSLATIONS = {
//   'loading': {
//     en: 'Loading...',
//     ru: 'Загрузка...'
//   }
// }

// const DogLoader = () => {
//   const [url, loading] = useData({
//     url: 'https://random.dog/woof.json?filter=mp4,webm',
//     mapData: ({ url }) => url,
//     defaultData: '',
//     pollInterval: 3000
//   });
  
//   const { language } = useContext(LanguageContext);
  
//   return (
//     <div>
//       {loading && <div>{TRANSLATIONS.loading[language]}...</div>}
//       {url && <img src={url} width={100}/>}
//     </div>
//   )
// }


function App() {

  // const LanguageContext = createContext({
  //   language: 'en'
  // });

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  const useData = ({url, defaultData, mapData, pollInterval = false }) => {
    const [data, setData] = useState(defaultData);
    const [loading, setLoading] = useState(true);
    const [polling, setPolling] = useState(true);
      
    const fetchData = async () => {
      setLoading(true);
      await delay(5000)
      const r = await fetch(url);
      const data = await r.json();
      setData(mapData(data));
      setLoading(false);
    }
    
    const step = () => {
      fetchData();
      if (pollInterval && polling) {
        setTimeout(step, pollInterval)
      }
    }
  
    useEffect(() => {
      step();
      return () => {
        setPolling(false);
      }
    }, [url]);
  
    return [data, loading];
  }

  const TRANSLATIONS = {
    'loading': {
      en: 'Loading',
      ru: 'Загрузка'
    }
  }

  const DogLoader = () => {
    const [url, loading] = useData({
      url: 'https://random.dog/woof.json?filter=mp4,webm',
      mapData: ({ url }) => url,
      defaultData: '',
      pollInterval: 3000
    });
    
    const { language } = useContext(LanguageContext);
    
    return (
      <div>
        {loading && <div>{TRANSLATIONS.loading[language]}...</div>}
        {url && <img src={url} width={250}/>}
      </div>
    )
  }


  return (
    <>

      <h1>Vite + React: Dogs</h1>
     
    <LanguageContext.Provider value={{ language: 'ru' }}>
      <DogLoader/>
    </LanguageContext.Provider>

    </>
  )
}

export default App
