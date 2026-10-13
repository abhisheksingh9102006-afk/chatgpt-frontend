function sendMessage() {
    let input = document.getElementById("message");
    let chat = document.getElementById("chat");
    let text = input.value.trim();

    if (text === "") {
        return;
    }

    // Remove welcome heading
    let heading = chat.querySelector("h1");
    if (heading) {
        heading.remove();
    }

    // Show user message
    let userMessage = document.createElement("div");
    userMessage.className = "message";
    userMessage.textContent = "You: " + text;
    chat.appendChild(userMessage);

    // Demo response
    let reply = document.createElement("div");
    reply.className = "message";
    reply.textContent =
        "ChatGPT: Hello! This is a demo response. Connect an AI API for real answers.";
    chat.appendChild(reply);

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}

function newChat() {
    let chat = document.getElementById("chat");
    chat.innerHTML = "<h1>What can I help with?</h1>";
}