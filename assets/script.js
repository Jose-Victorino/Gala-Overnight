// Nav Bar
const NavBrg = document.querySelector('.Nav-Burger');
const NavUl = document.querySelector('nav ul');

NavBrg.addEventListener('click', () => {
  NavBrg.classList.toggle('on');
  NavUl.classList.toggle('show');
});

// Air Bnb
const AirBnbMainCost = document.querySelector('[data-AirBnb-Cost-Main]');
const AirBnb_AddCost = document.querySelector('[data-AirBnb-Cost-Add]');
const AirBnbAttending = document.querySelector('[data-AirBnb-Attending]');
const AirBnbPerHead = document.querySelector('[data-AirBnb-Cost-PerHead]');

function CostEval(){
  if(Number(AirBnbAttending.value) < 1){
    AirBnbPerHead.innerHTML = 'Tangina bat ' + AirBnbAttending.value + ' yan!!!';
  }
  else if(Number(AirBnbAttending.value) > 12){
    AirBnbPerHead.innerHTML = '12 lang tayo oyy';
  }
  else if(Number(AirBnbAttending.value) <= 8){
    let PerHead = AirBnbMainCost.innerHTML / AirBnbAttending.value;
    AirBnbPerHead.innerHTML = Math.round(PerHead * 100) / 100;
  }
  else{
    let AddCost = (Number(AirBnbAttending.value) - 8) * 500;
    let PerHead = (Number(AirBnbMainCost.innerHTML) + AddCost) / AirBnbAttending.value;
    AirBnbPerHead.innerHTML = Math.round(PerHead * 100) / 100;
  }
  PriceSummary();
}
CostEval();

// Star City
const Star = document.querySelector('[data-Star]');
const StarSW = document.querySelector('[data-Star-SW');
const DiscDiv = document.querySelector('.Discount_Btn');
const StarBtns = document.querySelectorAll('.Star-City-btn');
const SPrice = 699, SSWPrice = 859, Discount = 10;

Star.innerHTML = SPrice;
StarSW.innerHTML = SSWPrice;

for(let i = 0; i < StarBtns.length; i++){
  StarBtns[i].addEventListener('click', () => {
    if(i == 0){
      DiscDiv.classList.remove('switch');
      Star.innerHTML = SPrice;
      StarSW.innerHTML = SSWPrice;
    }
    else if(i == 1){
      DiscDiv.classList.add('switch');
      Star.innerHTML = SPrice - (SPrice / Discount);
      StarSW.innerHTML = SSWPrice - (SSWPrice / Discount);
    }
  });
}

// Price Summary
function PriceSummary(){
  const Pricea = document.querySelector('[data-pricea]');
  const Prices1 = document.querySelector('[data-prices1]');
  const Prices2 = document.querySelector('[data-prices2]');
  const Prices3 = document.querySelector('[data-prices3]');
  const Prices4 = document.querySelector('[data-prices4]');
  const SPrice = 699, SSWPrice = 859, Discount = 10;
  
  Pricea.innerHTML = AirBnbPerHead.innerHTML;
  Prices1.innerHTML = Math.round((Number(AirBnbPerHead.innerHTML) + SPrice)* 100) / 100;
  Prices2.innerHTML = Math.round((Number(AirBnbPerHead.innerHTML) + (SPrice - (SPrice / Discount)))* 100) / 100;
  Prices3.innerHTML = Math.round((Number(AirBnbPerHead.innerHTML) + SSWPrice)* 100) / 100;
  Prices4.innerHTML = Math.round((Number(AirBnbPerHead.innerHTML) + (SSWPrice - (SPrice / Discount)))* 100) / 100;
}
PriceSummary();