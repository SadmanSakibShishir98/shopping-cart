document.getElementById('case-increase').addEventListener('click', function(){
    let formType='case-count';
    let totalType='case-total';
  handleProductChange(true,formType,totalType);

});

document.getElementById('case-decrease').addEventListener('click', function(){
    let formType='case-count';
    let totalType='case-total';
    handleProductChange(false,formType,totalType);
    
})

document.getElementById('phone-increase').addEventListener('click', function(){
    let formType='phone-count';
    let totalType='phone-total';
  handleProductChange(true,formType,totalType);

});

document.getElementById('phone-decrease').addEventListener('click', function(){
    let formType='phone-count';
    let totalType='phone-total'
   handleProductChange(false,formType,totalType);
    
});


function handleProductChange(isIncrease,itemCount ,total){
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
    const productTotal=productNewCount*59;
    document.getElementById(total).innerText=productTotal;
}