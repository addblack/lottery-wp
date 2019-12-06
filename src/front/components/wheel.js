import modal from './modal';

let res = document.querySelector("#result");
let discountInput = document.querySelector("#discount-input");
let discountWord = "miblfriday";

const wheel = new Wheel({
  el: document.getElementById('wheel'),
  radius: 300,
  theme: 'dark',
  buttonText: 'WIN',
  fontSize: 25,
  buttonWidth: 60,
  data: [{
    text: '15%',
    chance: 20,
  }, {
    text: '20%',
    chance: 2,
  }, {
    text: '25%',
    chance: 1,
  }, {
    text: '30%',
    chance: 2,
  }, {
    text: '35%',
    chance: 3,
  }, {
    text: '40%',
    chance: 90,
  }, {
    text: '45%',
    chance: 100,
  }, {
    text: '50%',
    chance: 100,
  }],
  color: {
    border: '#00FA9A',
    prize: '#30a984',
    button: 'darkorange',
    line: '#00FA9A',
    prizeFont: 'white',
    buttonFont: 'white'
  },
  onSuccess(data) {
    modal.style.display = "block";
    res.innerHTML = (data.text);
    let discountCode = `${discountWord}${data.text}`;
    discountInput.setAttribute('value', discountCode);
  },
  onFail() {
    let newText = document.createElement("div");
    newText.classList.add('red-big-text');
    newText.innerHTML = "<span>You’ve already won your discount</span>";
    document.querySelector(".entry-content").appendChild(newText);
  }
});

export default wheel;