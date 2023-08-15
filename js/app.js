const textArea = document.querySelector('#textArea')
const prevCmd = document.querySelector(".prevCmd")
const outputDiv = document.querySelector('.output')
const banner = document.querySelector('.banner')



document.addEventListener('DOMContentLoaded', function() {
  textArea.focus()
})

textArea.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    output()
    event.preventDefault()
  }
  else {
    return
  }
})



function output() {
  let preDiv = document.createElement("div")
  let inputValue = textArea.innerHTML;
  console.log(inputValue)
  if (inputValue === "whoami") {
    outputDiv.appendChild(preDiv)
    preDiv.innerHTML = `
  <div class="row">
        <p id="label">
          $:
        </p>
        <p class="prevCmd">${inputValue}</p>

      </div>
      <p class="result">visitor@terminal</p>
`

    textArea.textContent = ""

  }
  else if (inputValue === "experience") {
    outputDiv.appendChild(preDiv)
    preDiv.innerHTML = `
  <div class="row">
        <p id="label">
          $:
        </p>
        <p class="prevCmd">${inputValue}</p>

      </div>
      <p class="result">
    In a dynamic IT role, I optimized network performance, resolved hardware/software issues, and facilitated seamless system upgrades. Collaboration with cross-functional teams and staying updated on emerging technologies ensured efficient operations and user satisfaction.
  </p>

`

    textArea.textContent = ""

  }

  else if (inputValue === "carrier") {
    outputDiv.appendChild(preDiv)
    preDiv.innerHTML = `
  <div class="row">
        <p id="label">
          $:
        </p>
        <p class="prevCmd">${inputValue}</p>

      </div>
      <p class="result">I've excelled in diverse IT roles, mastering administration, networking, and support. Swift issue resolution, effective communication, and a commitment to staying current with tech trends define my journey. Passionate about driving efficiency and innovation, I'm poised to contribute meaningfully to future IT advancements.</p>
`

    textArea.textContent = ""

  }

  else if (inputValue === "education") {
    outputDiv.appendChild(preDiv)
    preDiv.innerHTML = `
  <div class="row">
        <p id="label">
          $:
        </p>
        <p class="prevCmd">${inputValue}</p>

      </div>
      <p class="result">
 My computer education journey has been a dynamic exploration of software development, algorithmic thinking, and system architecture. I've honed coding skills, tackled complex problems, and embraced emerging technologies. This journey continues to fuel my passion for innovation in the digital realm.   
  </p>
`

    textArea.textContent = ""

  }

  else if (inputValue === "author") {
    outputDiv.appendChild(preDiv)
    preDiv.innerHTML = `
  <div class="row">
        <p id="label">
          $:
        </p>
        <p class="prevCmd">${inputValue}</p>

      </div>
      <p class="result">Tonmoy
    <a class="github_link" target='blank' href='https://github.com/tonmoy998'>Github</a>
  </p>
`

    textArea.textContent = ""

  }


  else if (inputValue === "") {

  }
  else if (inputValue === "help") {
    outputDiv.appendChild(preDiv)
    preDiv.innerHTML = `
  <div class="row">
        <p id="label">
          $:
        </p>
        <p class="prevCmd">${inputValue}</p>
      </div>
      <p class="result"> 🎓 education</p>
      <p class="result"> 🚀 carrier</p>
      <p class="result"> 📊 experience</p>
      <p class="result"> 🤖 whoami</p>
      <p class="result"> 🧹 clear</p>
      <p class="result"> 👑 author</p>
`

    textArea.textContent = ""

  }
  else if (inputValue === "clear") {
    outputDiv.innerHTML = ""
    banner.innerHTML = ""
    textArea.innerHTML = ""
  }
  else {
    outputDiv.appendChild(preDiv)
    preDiv.innerHTML = `
  <div class="row">
        <p id="label">
          $:
        </p>
        <p class="prevCmd">${inputValue}</p>

      </div>
      <p class="alert">${inputValue} not found!</p>
`


    textArea.textContent = ""
    console.log(textArea.innerHTML)
  }

}

// function blink() {
//   inputValue = textArea.textContent;
//   let lastLetter = inputValue.charAt(inputValue.length - 1)
//   console.log(inputValue.length)
//   console.log("Worked!")
//   console.log(lastLetter)
//   let span = document.createElement("span")
//   span.className = "blink"
//   textArea.appendChild()
// }
// blink()
// window.setInterval(blink, 1000)
