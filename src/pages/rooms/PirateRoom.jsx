import { useParams } from "react-router-dom";
import RoomLayout from "../../components/Roomlayout";

function PirateRoom() {
  const { id } = useParams();
  return (
    <>
      <div>
        <h1>PirateRoom</h1>
        <h1>now showing {id}</h1>
      </div>
      <RoomLayout />
    </>
  );
}

export default PirateRoom;
