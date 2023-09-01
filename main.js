import './style.css'

const typeWriterText = document.querySelector(".typeWriterText")
const phrase = ["Business" , "Agency" , "Startup" , "SaaS"]
let currentPhrase = 0
let sleepTime = 250

function sleep(ms){
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const writeLoop = async () =>{
  while(true) {
    let word = phrase[currentPhrase]
    for (let i = 0; i < word.length; i++) {
      typeWriterText.textContent = phrase[currentPhrase].substring(0 , i+1)
      await sleep(sleepTime)
    }

    await sleep(sleepTime*4)

    for (let i = word.length; i > 0; i--) {
      typeWriterText.textContent = phrase[currentPhrase].substring(0 , i-1)
      await sleep(sleepTime)
    }
    currentPhrase == phrase.length - 1 ? currentPhrase = 0 : currentPhrase++
  }
}

writeLoop()