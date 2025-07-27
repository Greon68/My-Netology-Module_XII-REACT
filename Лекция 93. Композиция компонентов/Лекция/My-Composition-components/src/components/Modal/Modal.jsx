// const Modal = ({title, url }) => {
//   return (
//     <div className="modal">
//       <div className="modal__body">
//       <h2 className="modal__title">
//           {title}
//         </h2>
//         <a href={url}>Посмотреть подробнее</a>
//       </div>
//     </div>
//   );
// };

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__body">
        {children}
      </div>
    </div>
  );
};

export default Modal