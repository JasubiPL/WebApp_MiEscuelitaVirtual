import NavLevels from '../components/NavLevels';
import {AiFillSound} from 'react-icons/ai'
import '../styles/Numbers1.css'

export default function Numbers1(){
  numberInstructions.currentTime = 0
  backgroundMusic.pause();
  numberInstructions.play();

  function showImage(number){
    const imgContainer = document.getElementById("numbers__img-container");

    switch(number){
      case 1:
        imgContainer.innerHTML =`<img src="/img/numbers1/numbers1-1.png" />`
        number1.currentTime = 0
        number1.play();
        break;
      case 2:
        imgContainer.innerHTML =`<img src="/img/numbers1/numbers1-2.png" />`
        number2.currentTime = 0
        number2.play();
        break;
      case 3:
        imgContainer.innerHTML =`<img src="/img/numbers1/numbers1-3.png" />`
        number3.currentTime = 0
        number3.play();
        break;
      case 4:
        imgContainer.innerHTML =`<img src="/img/numbers1/numbers1-4.png" />`
        number4.currentTime = 0
        number4.play();
        break;
      case 5:
        imgContainer.innerHTML =`<img src="/img/numbers1/numbers1-5.png" />`
        number5.currentTime = 0
        number5.play();
        break;
       case 6:
          imgContainer.innerHTML =`<img src="/img/numbers1/numbers1-6.png" />`
          number6.currentTime = 0
          number6.play();
        break;
      case 7:
        imgContainer.innerHTML =`<img src="/img/numbers1/numbers1-7.png" />`
        number7.currentTime = 0
        number7.play();
        break;
      case 8:
        imgContainer.innerHTML =`<img src="/img/numbers1/numbers1-8.png" />`
        number8.currentTime = 0
        number8.play();
        break;
      case 9:
        imgContainer.innerHTML =`<img src="/img/numbers1/numbers1-9.png" />`
        number9.currentTime = 0
        number9.play();
        break;
      case 10:
        imgContainer.innerHTML =`<img src="/img/numbers1/numbers1-10.png"} />`
        number10.currentTime = 0
        number10.play();
         break;
    }

  }

  return(
    <section className='numbers' >
      <NavLevels 
      tittle="Los Numeros 1"
      url='/minigames'
      sound={numberInstructions}
      icon={<AiFillSound />}
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