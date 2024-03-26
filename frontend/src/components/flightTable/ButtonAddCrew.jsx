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
    <button
      className="flightTable__addBtnBlue"
      onClick={isMobileView ? undefined : toggleModalCrew}
    >
      <NavLink to={isMobileView ? `/edit-crew-forFlight/${flightId}` : '#'}>
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
            />
          </g>
        </svg>
      </NavLink>
    </button>
  );
}

export default ButtonAddCrew;
