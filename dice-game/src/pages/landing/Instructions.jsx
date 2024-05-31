const Instructions = () => {
  return (
    <section className="landing-page">
      <h1>Game Instructions</h1>
      <ul className="instructions">
        <li>
          In your turn - roll the dice once and accumulate the result in
          "current".
        </li>
        <li>
          Each player gets to roll the dice once, and whoever reaches the target
          score first wins.
        </li>
        <li>Note! If you get 6-6 10 points will be added to your "current".</li>
        <li>
          If you managed to reach exactly the target score - you win! If you
          passed it - you lose...
        </li>
      </ul>
    </section>
  );
};
export default Instructions;
