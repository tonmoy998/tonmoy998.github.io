const email = document.querySelector("#email");
const emailResponse = document.querySelector("#emailResponse");
const terminal = document.querySelector(".terminal");

email.addEventListener("keydown", (e) => {
  // e.preventDefault();
  if (e.key == "Enter") {
    emailResponse.innerHTML = `
      <div class="terminal-row">
        <div class="terminal-response">
          <i class="fa-solid fa-circle-check text-green"></i>
          <p class="text">${email.value}</p>
        </div>
      </div>
    `;

    const askName = document.querySelector("#askName");
    askName.innerHTML = `
      <p class="text px-1">
        Awesome! What's <span class="text-green">your name?</span>
      </p>
    `;

    const nameBox = document.querySelector("#nameBox");
    nameBox.innerHTML = `
      <div class="terminal-row">
        <div class="zsh-icons">
          <i class="fa-solid fa-arrow-right text-green"></i>
        </div>
        <div class="terminal-user-input">
          <p class="text">Enter name :</p>
          <input
            class="terminal-input text-green"
            id="name"
            type="text"
            name="name"
          />
        </div>
      </div>
    `;

    // Add event listener to the dynamically created name input field
    const nameInput = document.querySelector("#name");
    nameInput.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        // console.log(true); // Placeholder for what you want to do with the name
        const nameResponse = document.querySelector("#nameResponse");
        nameResponse.innerHTML = `
             <div class="terminal-row">
                <div class="terminal-response">
                  <i class="fa-solid fa-circle-check text-green"></i>
                  <p class="text">${nameInput.value}</p>
                </div>
              </div>

        `;
        const askMessage = document.querySelector("#askMessage");
        askMessage.innerHTML = `
              <p class="text px-1">
                Perfect! How can I
                <span class="text-green">help you?</span>
              </p>
      `;
        const messageBox = document.querySelector("#messageBox");
        messageBox.innerHTML = `
        <div class="message">
                <div class="zsh-icons">
                  <i class="fa-solid fa-arrow-right text-green"></i>
                </div>
                <div class="terminal-user-input">
                  <p class="text">Enter description :</p>
                  <textarea
                    class="messageInput text-green"
                    name="message"
                    id="message"
                    cols="50"
                    rows="10"
                  ></textarea>
                </div>
              </div>
        `;
        const sendBtn = document.createElement("button");
        sendBtn.textContent = "sendi it";
        sendBtn.classList.add("btn-send", "bg-green");
        terminal.append(sendBtn);
      }
    });
  }
});
