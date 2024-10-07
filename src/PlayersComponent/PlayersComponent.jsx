// eslint-disable-next-line react/prop-types
export default function PlayersComponent({ players }) {
  const details = players;
  return (
    <div>
      <ul>
        {details.map((item) => (
          <li key={item.id}>
            <div>
              <h2>{item.playerUsername}</h2>
              <p>{item.playername}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
