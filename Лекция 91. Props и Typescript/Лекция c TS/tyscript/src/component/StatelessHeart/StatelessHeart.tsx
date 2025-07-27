import "./StatelessHeart.css";

type StatelessHeartProps = {
  count: number;
  onLike?: () => void;
};

 const StatelessHeart = ({ count, onLike }: StatelessHeartProps) => {
  return (
    
    <div className="stateless-heart" onClick={onLike}>
      {count}
    </div>
  );
};

// обычный jsx
// const StatelessHeart = ({ count, onLike }) => {
//     return (
//       <div className="stateless-heart" onClick={onLike}>
//         {count}
//       </div>
//     );
//   };

export default StatelessHeart