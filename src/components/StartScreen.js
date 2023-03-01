import './StartScreen.css';

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
      <h1>Secret Word</h1>
      <p>Clique no botão para iniciar o jogo.</p>
      <button onClick={startGame}>Iniciar</button>
    </div>
  );
};

export default StartScreen;