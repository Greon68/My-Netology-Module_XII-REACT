import { recieps } from "../../data/recieps";
import { ReciepePreview } from "../recieps/ReciepePreview";

export const ReciepsRoute = () => {
    
    return (       
        <div>
            Список рецептов:
            {/* <hr class="hr-dashed"/> */}
            {recieps.map(reciepe => 
              <ReciepePreview key={reciepe.id} {...reciepe}/>)}
        </div>
    );
}