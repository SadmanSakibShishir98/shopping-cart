document.getElementById('case-increase').addEventListener('click', function(){
    let formType='case-count';
    let totalType='case-total';
    let casePrice=59;
  handleProductChange(true,formType,totalType,casePrice);
  calculateTotal()
});

document.getElementById('case-decrease').addEventListener('click', function(){
    let formType='case-count';
    let totalType='case-total';
    let casePrice=59;
    handleProductChange(false,formType,totalType,casePrice);
    calculateTotal()
})

document.getElementById('phone-increase').addEventListener('click', function(){
    let formType='phone-count';
    let totalType='phone-total';
    let phonePrice=1219;
  handleProductChange(true,formType,totalType,phonePrice);
  calculateTotal()

});

document.getElementById('phone-decrease').addEventListener('click', function(){
    let formType='phone-count';
    let totalType='phone-total';
    let phonePrice=1219;
   handleProductChange(false,formType,totalType,phonePrice);
   calculateTotal()
    
});


function handleProductChange(isIncrease,itemCount ,total, price){
    const productInput= document.getElementById(itemCount);
    const productCount =parseInt(productInput.value);
    let productNewCount=productCount
    if(isIncrease==true){
        productNewCount=productCount+1;
    }
    if(isIncrease==false && productCount>0){
        productNewCount= productCount-1;
    }
    productInput.value=productNewCount;
    const productTotal=productNewCount*price;
    document.getElementById(total).innerText=productTotal;
}

function calculateTotal(){
    const phoneCount=getInputValue('phone');
    const caseCount=getInputValue('case');
    const totalPrice=phoneCount*1219+caseCount*59;
    document.getElementById("total-price").innerText=totalPrice;

    const tax=Math.floor(totalPrice*0.1);
    document.getElementById('tax-amount').innerText= "$"+tax;
    const grandTotal=totalPrice+tax;
    document.getElementById('grand-total').innerText='$'+grandTotal;
    


}
function getInputValue(product){
    const productInput=document.getElementById(product+ "-count");
    const productCount=parseInt(productInput.value);
    return productCount;
}