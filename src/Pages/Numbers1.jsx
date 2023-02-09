import NavLevels from '../components/NavLevels';
import '../styles/Numbers1.css'
import example from '../img/numbers1/example.png'

export default function Numbers1(){

  function showImage(number){
    const imgContainer = document.getElementById("numbers__img-container");

    audioPop.play();

    imgContainer.innerHTML =`<img src=${example} />`
  }

  return(
    <section className='numbers' >
      <NavLevels 
      tittle="Los Numeros 1"
      url='/minigames'
      />
      <div className="numbers__chalkboard">
        <div className="numbers__cards-container">
          <div className="numbers__card" onClick={() => showImage(1)}> 1 </div>
          <div className="numbers__card" onClick={() => showImage(2)}> 2 </div>
          <div className="numbers__card" onClick={() => showImage(3)}> 3 </div>
          <div className="numbers__card" onClick={() => showImage(4)}> 4 </div>
          <div className="numbers__card" onClick={() => showImage(5)}> 5 </div>
          <div className="numbers__card" onClick={() => showImage(6)}> 6 </div>
          <div className="numbers__card" onClick={() => showImage(7)}> 7 </div>
          <div className="numbers__card" onClick={() => showImage(8)}> 8 </div>
          <div className="numbers__card" onClick={() => showImage(9)}> 9 </div>
          <div className="numbers__card" onClick={() => showImage(10)}> 10 </div>
        </div>
        <div id ="numbers__img-container" className="numbers__img-container">
        </div>
      </div>
    </section>
  );
}