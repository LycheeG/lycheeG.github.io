// Mobile Navigation Toggle
function toggleNav() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Close nav when clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
  }
});

// Gallery Lightbox
function openLightbox(el) {
  var img = el.querySelector('img');
  if (!img) return;
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

// Chatbot
var chatState = {
  step: 0,
  name: '',
  phone: '',
  service: '',
  message: ''
};

var chatFlow = [
  {
    bot: "Hi there! Welcome to Lychee's Nail & Lash Home Studio. I'm here to help you get started. What's your name?",
    field: 'name'
  },
  {
    bot: "Nice to meet you, {name}! What service are you interested in?",
    field: 'service',
    options: ['Manicure', 'Pedicure', 'Nail Art', 'Lash Extensions', 'Mani-Pedi Combo', 'Not sure yet']
  },
  {
    bot: "Great choice! What's the best phone number to reach you so Sarah can confirm your booking?",
    field: 'phone'
  },
  {
    bot: "Thanks {name}! I've noted your interest in {service}. Sarah will text you at {phone} to confirm your appointment. You can also text her directly at 0451 329 155. Have a lovely day!",
    field: null
  }
];

function toggleChatbot() {
  var chatbot = document.getElementById('chatbot');
  chatbot.classList.toggle('active');

  if (chatbot.classList.contains('active') && chatState.step === 0) {
    var messages = document.getElementById('chatMessages');
    messages.innerHTML = '';
    addBotMessage(chatFlow[0].bot);
  }
}

function addBotMessage(text, options) {
  var messages = document.getElementById('chatMessages');
  var div = document.createElement('div');
  div.className = 'chat-message bot';
  var bubble = document.createElement('div');
  bubble.className = 'chat-bubble';
  bubble.textContent = text;
  div.appendChild(bubble);
  messages.appendChild(div);

  if (options) {
    var optionsDiv = document.createElement('div');
    optionsDiv.className = 'chat-message bot';
    var optionsBubble = document.createElement('div');
    optionsBubble.className = 'chat-bubble';
    var btnsDiv = document.createElement('div');
    btnsDiv.className = 'chat-options';
    options.forEach(function (opt) {
      var btn = document.createElement('button');
      btn.className = 'chat-option-btn';
      btn.textContent = opt;
      btn.onclick = function () {
        handleUserInput(opt);
        btnsDiv.querySelectorAll('button').forEach(function (b) {
          b.disabled = true;
          b.style.opacity = '0.5';
          b.style.cursor = 'default';
        });
      };
      btnsDiv.appendChild(btn);
    });
    optionsBubble.appendChild(btnsDiv);
    optionsDiv.appendChild(optionsBubble);
    messages.appendChild(optionsDiv);
  }

  messages.scrollTop = messages.scrollHeight;
}

function addUserMessage(text) {
  var messages = document.getElementById('chatMessages');
  var div = document.createElement('div');
  div.className = 'chat-message user';
  var bubble = document.createElement('div');
  bubble.className = 'chat-bubble';
  bubble.textContent = text;
  div.appendChild(bubble);
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function sendChat() {
  var input = document.getElementById('chatInput');
  var text = input.value.trim();
  if (!text) return;
  input.value = '';
  handleUserInput(text);
}

function handleUserInput(text) {
  addUserMessage(text);

  var currentStep = chatFlow[chatState.step];
  if (currentStep.field) {
    chatState[currentStep.field] = text;
  }

  chatState.step++;

  if (chatState.step < chatFlow.length) {
    var nextStep = chatFlow[chatState.step];
    var botText = nextStep.bot
      .replace('{name}', chatState.name)
      .replace('{service}', chatState.service)
      .replace('{phone}', chatState.phone);

    setTimeout(function () {
      addBotMessage(botText, nextStep.options);
    }, 500);
  }
}
