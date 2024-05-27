const chatBody = document.getElementById('chatBody');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

const conversationPairs = [
    ["hi|hey|hello", "Hello!"],
    ["what is your name?", "My name is ChatBot."],
    ["how are you?", "I'm doing well, thanks for asking!"],
    ["goodbye|bye", "Goodbye! Have a nice day."],
    ["(.*)", "I'm sorry, I don't understand your question."]
    ["what's the weather like (today|tonight)?", "Unfortunately, I don't have access to real-time weather information. However, I can provide general weather-related responses."],
    ["what's the time?", "I don't actually have a built-in clock. I'm an AI assistant without the capability to track the current time."],
    ["tell me a joke", "Why don't scientists trust atoms? Because they make up everything!"],
    ["how was your (day|night)?", "As an AI, I don't experience days or nights the same way humans do. I'm software without subjective experiences."],
    ["what's your favorite (color|food|movie)?", "I don't have personal preferences like favorite colors, foods, or movies. As an AI, I don't have subjective opinions on those topics."],
    ["(thank you|thanks)", "You're welcome!"],
    ["(good morning|good afternoon|good evening)", "Good morning/afternoon/evening to you too!"],
    ["what can you do?", "I'm an AI assistant capable of answering questions, providing information, and engaging in conversations on a variety of topics. Feel free to ask me anything, and I'll do my best to help."],
    ["(.*)", "I'm afraid I don't understand your question. Could you please rephrase it or provide more context?"]
];
   

function sendMessage() {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage) {
        displayMessage('user', userMessage);
        const botResponse = getBotResponse(userMessage);
        displayMessage('bot', botResponse);
        userInput.value = '';
    }
}

function getBotResponse(userMessage) {
    for (let pair of conversationPairs) {
        const pattern = new RegExp(pair[0], 'i');
        if (pattern.test(userMessage)) {
            return pair[1];
        }
    }
    return "I'm sorry, I don't understand your question.";
}

function displayMessage(sender, message) {
    const chatMessageDiv = document.createElement('div');
    chatMessageDiv.classList.add('chat-message', sender);
    chatMessageDiv.textContent = message;
    chatBody.appendChild(chatMessageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

