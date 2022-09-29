import { Link } from "react-router-dom";

function RoomList() {
  return (
    <div>
      <h1>RoomList</h1>
      <Link to="/rooms/1">Room 1</Link>
      <br />
      <Link to="/rooms/2">Room 2</Link>
      <br />
      <Link to="/rooms/2">Room 3</Link>
    </div>
  );
}

export default RoomList;
