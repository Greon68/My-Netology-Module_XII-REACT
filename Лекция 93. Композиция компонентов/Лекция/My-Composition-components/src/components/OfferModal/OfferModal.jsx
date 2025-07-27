import Modal from "../Modal/Modal";
import HeadingModal from "../HeadingModal/HeadingModal";  

const OfferModal = () => {
    // return (
    //   <div className="modal">
    //     <div className="modal__body">
    //       <h2 className="modal__title">
    //         Купите зимние сапоги!
    //       </h2>
    //       <a href="/sapogi">Посмотреть подробнее</a>
    //     </div>
    // </div>
    // )

    // return <Modal title ='Купите зимние сапоги!' url='/sapogi' />
    return <HeadingModal title="Купите зимние сапоги!" url="/sapogi" />;
    
  };
  
  export default OfferModal