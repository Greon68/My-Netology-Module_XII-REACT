import Modal from "../Modal/Modal";

const RegisterFormModal = () => {

  // return (
  //   <div className="modal">
  //     <div className="modal__body">
  //       <form class="form">
  //         <div className="form__group">
  //           <input type="text" name="username" placeholder="Введите имя" />
  //         </div>
  //         <div className="form__group">
  //           <input type="email" name="email" placeholder="Введите E-mail" />
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );

  return (
    <Modal>
      <form className="form">
        <div className="form__group">
          <input type="text" name="username" placeholder="Введите имя" />
        </div>
        <div className="form__group">
          <input type="email" name="email" placeholder="Введите E-mail" />
        </div>
      </form>
    </Modal>
  );
};

export default RegisterFormModal
