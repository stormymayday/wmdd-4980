function ButtonCrewMemberInfo({ isMobilePhone }) {

  return (
    <button className="flightTable__addBtnWhte">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 5.15789C22 3.41384 20.5862 2 18.8421 2C18.0333 2 17.2955 2.30406 16.7368 2.8041L15.2641 4.30165L19.6983 8.73588L21.1959 7.26316C21.6959 6.70447 22 5.96669 22 5.15789ZM18.1973 10.2121L13.7879 5.80275L2 17.7895V17.7895V22H6.21053L6.21053 22L18.1973 10.2121Z"
          fill="#3D3D3D"
        />
      </svg>
      {!isMobilePhone && <p>Flight</p>}
    </button>
  );
}

export default ButtonCrewMemberInfo;
