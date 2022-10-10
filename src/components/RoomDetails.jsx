import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function RoomDetails() {
  const { id } = useParams();
  const { data: room } = useFetch("/data/data.json");
  // const { data: room, error } = useFetch("http://localhost:3000/rooms/" + id);
  const filteredRoom = room && room.rooms.filter((room) => room.id == id);

  return (
    <div className="p-4 grid grid-cols-1 w-full">
      <div className="px-4 py-4 rounded overflow-hidden shadow-lg">
        {filteredRoom &&
          filteredRoom.map((room) => (
            <div key={room.id} alt="">
              <div className="px-6 py-4 grid grid-cols-2">
                <div className="font-bold text-xl mb-2 text-center">
                  <p>{room.name} Room</p>
                  <img className="w-full" src={room.image} />
                </div>
                <div className="font-bold text-xl mb-2 text-center">
                  <p>Settings:</p>
                </div>
                <div className="col-span-2">
                  <p className="font-bold text-xl mb-2">{room.blurb}</p>
                  <p className="text-gray-700 text-base">{room.paragraph}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">
                  Previous
                </button>
                <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-lg">
                  Start
                </button>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">
                  Next
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RoomDetails;
