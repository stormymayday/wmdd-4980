import { useParams } from 'react-router-dom';
const CrewPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Crew Page</h1>
      <p>Crew ID: {id}</p>
    </>
  );
};
export default CrewPage;
