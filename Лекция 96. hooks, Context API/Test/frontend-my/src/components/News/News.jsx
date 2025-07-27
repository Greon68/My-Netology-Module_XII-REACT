
import S from "./News.module.css";

import moment from "moment";


const formatDate = (text) => {
  return moment(text).format("DD.MM.YYYY HH:mm");
};

// Форматируем дату
// const News = ({data}) => {
//     return (
//         <div className={S.container}>
//             {data.map((item) => (
//                 <div key={item.id} className={S.item}>
//                     {/* <div className={S.date}>{item.date}</div> */}
//                     <div className={S.date}>{formatDate(item.date)}</div>
//                     <div className={S.text}>{item.text}</div>
//                     {/* <hr></hr> */}
//                 </div>
//             ))}

//         </div>
//     )
// }

// Форматируем дату и сортируем
export const News = ({ data }) => {
    const sorted = data.toSorted((i1, i2) => (i1.date > i2.date ? 1 : 0));
    return (
      <div className={S.container}>
        {sorted.map((item) => (
          <div key={item.id} className={S.item}>
            <div className={S.date}>{formatDate(item.date)}</div>
            <div className={S.text}>{item.text}</div>
          </div>
        ))}
      </div>
    );
  };


export default News