/*function lerTexto(){
    var mensagem = new SpeechSynthesisUtterance();
    mensagem.text = "Alfabeto letras asdf";
    speechSynthesis.speak(mensagem);
   }
   lerTexto();*/

   const main = document.querySelector('main')
   const divTextBox = document.querySelector('.text-box')
   const selectElement = document.querySelector('select')

   const alfabetoleitor = [
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552937.png', text: 'Letra A'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552941.png', text: 'Letra B'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552946.png', text: 'Letra C'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552949.png', text: 'Letra D'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552953.png', text: 'Letra E'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552960.png', text: 'Letra F'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552965.png', text: 'Letra G'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552970.png', text: 'Letra H'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552976.png', text: 'Letra I'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552981.png', text: 'Letra J'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552989.png', text: 'Letra K'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552996.png', text: 'Letra L'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4552/4552998.png', text: 'Letra M'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553006.png', text: 'Letra N'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553010.png', text: 'Letra O'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553011.png', text: 'Letra P'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553013.png', text: 'Letra Q'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553016.png', text: 'Letra R'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553018.png', text: 'Letra S'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553019.png', text: 'Letra T'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553022.png', text: 'Letra U'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553024.png', text: 'Letra V'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553026.png', text: 'Letra W'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553028.png', text: 'Letra X'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553030.png', text: 'Letra Y'},
    { img: 'https://cdn-icons-png.flaticon.com/512/4553/4553032.png', text: 'Letra Z'}
   ]

   const utterance = new SpeechSynthesisUtterance()
   
   const setTextMessage = text => {
    utterance.text = text
   }

   const speakText = () => {
    speechSynthesis.speak(utterance)
   }

   const setVoice = event => {
    const selectedVoices = voices.find(voice => voice.name === event.target.value)
    utterance.voice = selectedVoices
   }

   const creatExpressionsBox = ({ img, text }) =>{
    const div = document.createElement('div')

    div.classList.add('expression-box')
    div.innerHTML = `
        <img src="${img}" alt="${text}">
        <p class="info">${text}</p>
    `

    div.addEventListener('click', () => {
        setTextMessage(text)
        speakText()

        div.classList.add('active')
        setTimeout(() => {
            div.classList.remove('active')
        }, 1000)
    })
    
    main.appendChild(div)
   }

   alfabetoleitor.forEach(creatExpressionsBox)

   let voices = []

   speechSynthesis.addEventListener('voiceschanged', () =>{
    voices = speechSynthesis.getVoices()

    voices.forEach(({name, lang}) => {
        const option = document.createElement('option')

        option.value = name
        option.textContent =  `${lang} | ${name}`
         selectElement.appendChild(option)
    })


   })


   selectElement.addEventListener('change', setVoice)
