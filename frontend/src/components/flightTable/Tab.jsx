import PropTypes from 'prop-types';
function Tab({ value, children, activeTab, onClick }) {
  return (
    <button
      //this is placeholder for tab styling
      className={activeTab === value ? '' : ''}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
}
Tab.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node,
  activeTab: PropTypes.string,
  onClick: PropTypes.func,
};

export default Tab;
