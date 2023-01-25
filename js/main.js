'use strict';

{
  
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    startBtn.textContent = word;
    loc = 0;
  }

  
  // function enterEvent(e) {
  //   if (e.keyCode === 13) {
  //     if (isPlaying === true) {
  //       return;
  //     }
  //     isPlaying = true;
  //     startTime = Date.now();
  //     setWord();
  //   } 
  //     return false;
  // }


  const startBtn = document.getElementById('target');
  const missCount = document.getElementById('miss');
  const ul = document.querySelector('ul');
  const words = [
    'red',
    'blue',
    'pink',
    'black',
    'green',
    'yellow',
  ];
  let word;
  let miss = 0;
  let loc = 0;
  let startTime = 0;
  let isPlaying = false;


  for(let i=0; i<words.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    const text = words[i];
    li.textContent = text;
  }

  startBtn.addEventListener('click', () => {
    startBtn.textContent = '';
    startBtn.removeAttribute('id');
    startBtn.className = 'checked';
    const p = document.createElement('p');
    startBtn.parentNode.insertBefore(p, startBtn.nextElementSibling);
    p.textContent = 'enter start';
    p.className = 'click-start-text';
    addEventListener('keypress', enterEvent);
    
    function enterEvent(e) {
      if (e.keyCode === 13) {
        if (isPlaying === true) {
          return;
        }
        isPlaying = true;
        p.textContent = '';
        startTime = Date.now();
        setWord();
      } 
        return false;
    }
  })


  document.addEventListener('keydown', e => {
    if (e.key !==word[loc]) {
      miss ++;
      return;
    }

    loc++;
    startBtn.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `time: ${elapsedTime} s`;
        missCount.textContent = `miss: ${miss}`;
        return;
      }
      setWord();
    }
  });


}