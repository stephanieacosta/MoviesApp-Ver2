function Header({ points, lives }) {
  return (
    <header>
      <p>Lives: {lives}</p>
      <p>Points: {points}</p>
    </header>
  );
}

export default Header;
