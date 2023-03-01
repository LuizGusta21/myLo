import './GameOver.css';

import img1 from '../IMG/1.jpeg';
import img2 from '../IMG/2.jpeg';
import img3 from '../IMG/3.jpeg';
import img5 from '../IMG/5.jpeg';
import img6 from '../IMG/6.jpeg';
import img7 from '../IMG/7.jpeg';
import img8 from '../IMG/8.jpeg';

const GameOver = () => {
  return (
    <div>
     <section id="gallery" class="grid-one section white-bg">
    <div class="main-content grid-one-content">
      <h2 class="grid-main-heading">Eu te Amo</h2>
      <p class="grid-description">❤️</p>

      <div class="grid">
       <div className="gallery-img">
        <img src={img1} alt="" />
       </div>
       <div className="gallery-img">
        <img src={img2} alt="" />
       </div>
       <div className="gallery-img">
        <img src={img3} alt="" />
       </div>
       <div className="gallery-img">
        <img src={img5} alt="" />
       </div>
       <div className="gallery-img">
        <img src={img6} alt="" />
       </div>
       <div className="gallery-img">
        <img src={img7} alt="" />
       </div>
       <div className="gallery-img">
        <img src={img8} alt="" />
       </div>

      </div>
    </div>
  </section>

    </div>
  );
};

export default GameOver;