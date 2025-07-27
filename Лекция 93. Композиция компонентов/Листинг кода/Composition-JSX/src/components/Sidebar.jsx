import { Widjet } from "./Widjet";
import { Tags } from "./Tags";

export const Sidebar = () => {
  return (
    <aside>

      <Widjet title="Теги">
        <Tags tags={["JS", "React"]} />
      </Widjet>

      <Widjet title="Социальные сети">
        <ul className="nav flex-column social-block">
          <li>
            <a className="nav-link" href="#">
              VK
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Email
            </a>
          </li>
        </ul>
      </Widjet>
      
    </aside>
  );
};
