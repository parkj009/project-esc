import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function RoomList(props) {
  const rooms = props.rooms;
  return (
    <>
      <div className="pt-6 text-center font-bold text-xl">{props.title}</div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {rooms.map((room) => (
          <NavLink
            key={room.id}
            to={room.link}
            alt="Sunset in the mountains"
            className="rounded overflow-hidden shadow-lg transition ease-in-out
            delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <img className="w-full" src="../src/assets/react.svg" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{room.name}</div>
              <p className="text-gray-700 text-base">{room.blurb}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span
                className={`inline-block rounded-full ${
                  room.difficulty == "easy"
                    ? "bg-green-300"
                    : room.difficulty == "medium"
                    ? "bg-orange-300"
                    : room.difficulty == "hard"
                    ? "bg-red-300"
                    : ""
                } px-3 py-1 bg-gray-200 text-sm font-semibold text-gray-700 mr-2 mb-2`}
              >
                {room.difficulty}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default RoomList;

RoomList.propTypes = {
  rooms: PropTypes.array,
  title: PropTypes.string,
};
