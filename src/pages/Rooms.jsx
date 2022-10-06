import RoomList from "../components/RoomList";
import useFetch from "../hooks/useFetch";

function Rooms() {
  const { data: rooms, error } = useFetch("/data/data.json");

  return (
    <>
      {error && <div>{error}</div>}
      {rooms && (
        <RoomList rooms={rooms.rooms} title="Select your escape (logo) room:" />
      )}
    </>
  );
}

export default Rooms;
