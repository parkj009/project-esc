import { NavLink } from "react-router-dom";

function RoomList() {
  const rooms = [
    {
      id: 1,
      name: "Pirate",
      link: "/rooms/pirateroom",
      difficulty: "easy",
    },
    {
      id: 2,
      name: "Casino",
      link: "/rooms/casinoroom",
      difficulty: "medium",
    },
    {
      id: 3,
      name: "Horror",
      link: "/rooms/horrorroom",
      difficulty: "hard",
    },
  ];
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {rooms.map((room) => (
        <NavLink
          key={room.id}
          to={room.link}
          className="rounded overflow-hidden shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{room.name}</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span
              className={`inline-block rounded-full px-3 py-1 bg-gray-200 text-sm font-semibold text-gray-700 mr-2 mb-2`}
            >
              {room.difficulty}
            </span>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default RoomList;
