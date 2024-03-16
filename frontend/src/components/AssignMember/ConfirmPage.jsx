import { useEffect, useState } from 'react';
import axios from 'axios';
import UserIcon from '../../assets/userIcon';
function ConfirmPage({ crewIdForUpdate, flightDataForPatch, id, flights }) {
  console.log(crewIdForUpdate, flightDataForPatch);
  function handleConfirm() {
    const flightId = id;
    const newCrewMembers = flightDataForPatch.crewMembers[0];
    updateCrewMembers(flightId, newCrewMembers);
    updateCrewFlightRecords(crewIdForUpdate, flights);
  }
  const updateCrewFlightRecords = async (id, flights) => {
    try {
      // Fetch the flight data

      const flightData = flights;

      // Update each crew member's flightRecord
      for (const crewId of id) {
        await axios.patch(`/api/v1/crew/${crewId}`, {
          $push: { flightRecord: flightData },
        });
      }

      console.log('Flight records updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const updateCrewMembers = async (flightId, newCrewMembers) => {
    try {
      const response = await axios.patch(`/api/v1/flights/${flightId}`, {
        crewMembers: newCrewMembers,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h3>Flight Summary Details</h3>

      {flightDataForPatch.crewMembers[0].member1 && (
        <>
          <p>Pilots</p>

          <UserIcon />
          <p>{flightDataForPatch.crewMembers[0].member1}</p>
        </>
      )}

      {flightDataForPatch.crewMembers[0].member2 && (
        <>
          <h3>Co-Pilots</h3>
          <UserIcon />
          <p>{flightDataForPatch.crewMembers[0].member2}</p>
        </>
      )}
      {flightDataForPatch.crewMembers[0].member3 && (
        <>
          <h3>Co-Pilots</h3>
          <UserIcon />
          <p>{flightDataForPatch.crewMembers[0].member3}</p>
        </>
      )}

      <h3>Cabin Crew</h3>
      {flightDataForPatch.crewMembers[0].cabinCrew.cabin1 && (
        <>
          <UserIcon />
          <p>{flightDataForPatch.crewMembers[0].cabinCrew.cabin1}</p>
        </>
      )}
      {flightDataForPatch.crewMembers[0].cabinCrew.cabin2 && (
        <>
          <UserIcon />
          <p>{flightDataForPatch.crewMembers[0].cabinCrew.cabin2}</p>
        </>
      )}
      {flightDataForPatch.crewMembers[0].cabinCrew.cabin3 && (
        <>
          <UserIcon />
          <p>{flightDataForPatch.crewMembers[0].cabinCrew.cabin3}</p>
        </>
      )}
      {flightDataForPatch.crewMembers[0].cabinCrew.cabin4 && (
        <>
          <UserIcon />
          <p>{flightDataForPatch.crewMembers[0].cabinCrew.cabin4}</p>
        </>
      )}
      {flightDataForPatch.crewMembers[0].cabinCrew.cabin5 && (
        <>
          <UserIcon />
          <p>{flightDataForPatch.crewMembers[0].cabinCrew.cabin5}</p>
        </>
      )}
      {flightDataForPatch.crewMembers[0].cabinCrew.cabin6 && (
        <>
          <UserIcon />
          <p>{flightDataForPatch.crewMembers[0].cabinCrew.cabin6}</p>
        </>
      )}

      <button onClick={handleConfirm}>Confirm</button>
    </>
  );
}
export default ConfirmPage;
