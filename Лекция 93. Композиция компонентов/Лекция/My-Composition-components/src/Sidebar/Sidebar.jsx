import { Widget } from "../Widget/Widget";

const Sidebar = () => {
  // return (
  //   <aside className="sidebar">

  //     <div className="widget">
  //       <h2 className="widget__title"> O нас </h2>
  //       <div className="widget__content">
  //         <p> Целью деятельности компании является разработка и производство <br />
  //           доступных и надежных технических средств, способных улучшить <br />
  //            состояние ресурсов организма, повысить иммунитет и <br />
  //           удовлетворенность человека качеством жизни. </p>
  //       </div>
  //     </div>
      
  //     <div className="widget">
  //       <h2 className="widget__title"> Соц.сети </h2>
  //       <div className="widget__content">
  //         <a href="/linked"> LinkedIn </a>
  //         <a href="/vk"> VK </a>
  //         <a href="/reddit"> Reddit </a>
  //       </div>
  //     </div>

  //   </aside>
  // );

  return (
    <aside className="sidebar">

      <Widget title='О нас'>
          <p> Целью деятельности компании является разработка и производство <br />
            доступных и надежных технических средств, способных улучшить <br />
             состояние ресурсов организма, повысить иммунитет и <br />
            удовлетворенность человека качеством жизни. </p>
      </Widget>
      
      <Widget title='Социальные сети:'>
          <a href="/linked"> LinkedIn </a>
          <a href="/vk"> VK </a>
          <a href="/reddit"> Reddit </a>
        </Widget>

    </aside>
  );
};




// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <Widget title="О нас">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsa?
//         Magni officiis aperiam voluptatibus architecto rem beatae deserunt!
//         Laborum nisi autem sint, iure quae eius iusto. Minima quos unde non.
//       </Widget>
//       <Widget title="Соцсети">
//         <a href="/linked"> LinkedIn </a>
//         <a href="/vk"> VK </a>
//         <a href="/reddit"> Reddit </a>
//       </Widget>
//     </aside>
//   );
// };

export default Sidebar