import { NavLink } from 'react-router-dom';
//`/flights/${flightId}`
// export default ButtonAddCrew;
// function ButtonAddCrew({ flightId, toggleModalCrew }) {
//   return (
//     <button onClick={toggleModalCrew}>
//       <NavLink
//         className="flightTable__addBtnBlue"
//         to={`/edit-crew-forFlight/${flightId}`}
//       >
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g id="Icons/Add">
//             <path
//               id="Subtract"
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17 12C17 11.4477 16.5523 11 16 11H13V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13H16C16.5523 13 17 12.5523 17 12Z"
//               fill="#F4F4F4"
//             />
//           </g>
//         </svg>
//       </NavLink>
//     </button>
//   );
// }
function ButtonAddCrew({ flightId, toggleModalCrew, isMobileView }) {
  return (
    <button onClick={isMobileView ? undefined : toggleModalCrew}>
      <NavLink
        className="flightTable__addBtnBlue"
        to={isMobileView ? `/edit-crew-forFlight/${flightId}` : '#'}
      >
        {isMobileView ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icons/Add">
              <path
                id="Subtract"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17 12C17 11.4477 16.5523 11 16 11H13V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13H16C16.5523 13 17 12.5523 17 12Z"
                fill="#F4F4F4"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5ZM17 12.5C17 11.9477 16.5523 11.5 16 11.5H13V8.5C13 7.94772 12.5523 7.5 12 7.5C11.4477 7.5 11 7.94772 11 8.5V11.5H8C7.44772 11.5 7 11.9477 7 12.5C7 13.0523 7.44772 13.5 8 13.5H11V16.5C11 17.0523 11.4477 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5V13.5H16C16.5523 13.5 17 13.0523 17 12.5Z"
              fill="#3D3D3D"
            />
          </svg>
        )}
        {!isMobileView && <span>Crew</span>}
      </NavLink>
    </button>
  );
}

export default ButtonAddCrew;
