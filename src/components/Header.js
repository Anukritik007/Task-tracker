import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{props.title}</h1>
      {/* Show Add button only in main page */}
      {location.pathname === "/" && (
        <Button
          color={props.showAdd ? "red" : "green"}
          text={props.showAdd ? "Close" : "Add"}
          onClick={props.onAddClick}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
