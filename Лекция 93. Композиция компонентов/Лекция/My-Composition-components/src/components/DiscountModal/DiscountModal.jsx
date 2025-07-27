import Modal from "../Modal/Modal";

import HeadingModal from "../HeadingModal/HeadingModal";  

const DiscountModal = () => {
  // return (
  //   <div className="modal">
  //     <div className="modal__body">
  //       <h2 className="modal__title">
  //         Только сейчас ! Скидка 50% !!!
  //       </h2>
  //       <a href="/discount">Посмотреть подробнее</a>
  //     </div>
  // </div>
  // )

  // return <Modal title="Только сейчас! Скидка 50%" url="/discount" />;

  return <HeadingModal title="Только сейчас! Скидка 50%" url="/discount" />;
};

export default DiscountModal
