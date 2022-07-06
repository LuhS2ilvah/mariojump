const mario = document.querySelector(".mario");

    
    const jump = () => {
      
      mario.classList.add("jump");
      
      setTimeout(() => {
        mario.classList.remove("jump");
      }, 500);

    }

    document.addEventListener('onclick', jump);
    const tubo = document.querySelector('.tubo');
    
    const loop = setInterval(() => {
    				const tuboPosition = tubo.offsetLeft;
    				const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '');
    				
    				if(tuboPosition < 128 && tuboPosition > 0 &&  marioPosition < 80) {
    							tubo.style.tuboAnimado = 'none';	
    							tubo.style.left = `${tuboPosition}px`;
    							
    									mario.style.tuboAnimado = 'none';	
    							mario.style.bottom = `${marioPosition}px`;
    							
    							mario.src ='https://preview.redd.it/nd7ldj4dnvv71.png?width=160&format=png&auto=webp&s=037c2ac0835fbbe86363771ad6b6a76cda53a695';
    							mario.style.width = '75px';
    							mario.style.marginLeft ='50px';
    			clearInterval(loop);	
				
    			
    				}
    		
    			
    }, 10);
   