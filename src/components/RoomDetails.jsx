import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function RoomDetails() {
  const { id } = useParams();
  const { data: room } = useFetch("/data/data.json");
  // const { data: room, error } = useFetch("http://localhost:3000/rooms/" + id);
  const filteredRoom = room && room.rooms.filter((room) => room.id == id);

  return (
    <>
      <div className="p-4 grid grid-cols-1 gap-5">
        <div className="px-4 py-4">
          {filteredRoom &&
            filteredRoom.map((room) => (
              <div
                key={room.id}
                alt=""
                className="rounded overflow-hidden shadow-lg"
              >
                <img className="w" src="../src/assets/react.svg" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{room.name}</div>
                  <p className="text-gray-700 text-base">{room.blurb}</p>
                  <p className="text-gray-700 text-base">{room.difficulty}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default RoomDetails;
