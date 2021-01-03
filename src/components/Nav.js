import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ statusLibrary, setStatusLibrary }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setStatusLibrary(!statusLibrary)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};
export default Nav;
