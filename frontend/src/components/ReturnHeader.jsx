// Header for the pages which does not use the standar header. it should be called with
// a prop called destination page with the route where the back button should bring
// and inside the component the children should be the title of the page where you want to go back.

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ReturnHeader({ destinationPage, children }) {
  const navigateTo = useNavigate();

  function handleClick() {
    navigateTo(destinationPage);
  }

  return (
    <div className="returnHeader">
      <div className='returnHeaderTitle'>
        <button onClick={handleClick}>&lt;</button>
        <h2>{children}</h2>
      </div>
    </div>
  );
}

ReturnHeader.propTypes = {
  destinationPage: PropTypes.string,
  children: PropTypes.node,
};
