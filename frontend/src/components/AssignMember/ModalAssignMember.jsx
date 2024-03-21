import AssignMember from '../AssignMember/AssignMember';
import { ReturnHeader } from '../../components';
export default function ModalAssignMember({ id, onClickClose }) {
  return (
    <>
      <ReturnHeader destinationPage={'/dashboard/main'} onClick={onClickClose}>
        Add Crew Member
      </ReturnHeader>
      <AssignMember />
    </>
  );
}
