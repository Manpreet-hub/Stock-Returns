const initialPrice=document.querySelector('#initial-price');
const stocksQuantity=document.querySelector('#stocks-quantity');
const currentPrice=document.querySelector('#current-price');
const outputBox=document.querySelector('#output');
const checkBtn=document.querySelector('#check-btn');

checkBtn.addEventListener('click',submitHandler);

function submitHandler(){
  var ip=Number(initialPrice.value);
  var qty=Number(stocksQuantity.value);
  var cp=Number(currentPrice.value);
 if(ip<=0 || qty<=0 ||cp<=0)
 showMessage("Please enter values and it should not be blank or 0");
  else
   calculateProfitAndLoss(ip,qty,cp);
}

function calculateProfitAndLoss(initial,quantity,current){
  if(initial>current){
    var loss=(initial-current)*quantity;
    var lossPercentage=Math.round((loss/initial)*100);
   showMessage(`😵 Ohhhh the loss is ${loss} and the percent is ${lossPercentage}%`);
   outputBox.style.backgroundColor = "red";
  }
  else if(current>initial){
    var profit=(current-initial)*quantity;
    var profitPercentage=Math.round((profit/initial)*100);
  showMessage(`🤩 Wow the profit is ${profit} and the percent is ${profitPercentage} % 
  color:green;`);
   outputBox.style.backgroundColor="green";
  }
  else{
    showMessage("No profit and No Loss");

  }
}

function showMessage(message){
  outputBox.innerHTML=message;
}
