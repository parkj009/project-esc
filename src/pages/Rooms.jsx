import RoomList from "../components/RoomList";

function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "Pirate",
      link: "/rooms/pirateroom",
      blurb: "Escape from the sinking ship!",
      difficulty: "easy",
    },
    {
      id: 2,
      name: "Casino",
      link: "/rooms/casinoroom",
      blurb: "Escape from the casino!",
      difficulty: "medium",
    },
    {
      id: 3,
      name: "Horror",
      link: "/rooms/horrorroom",
      blurb: "Escape from the carnival of terror!",
      difficulty: "hard",
    },
  ];
  return <RoomList rooms={rooms} />;
}

export default Rooms;
