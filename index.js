
var subTotal=parseFloat(document.getElementById('iphonePrice').innerText)+parseFloat(document.getElementById('casePrice').innerText);
const btn1Minus= document.getElementById('btn1Minus');
btn1Minus.addEventListener('click', function(){
   
    const totalPhones=parseFloat(document.getElementById('iphoneForm').value);
    
    
    document.getElementById('subTotal').innerText=subTotal;
    if(totalPhones>1 || totalPhones==1){
        document.getElementById('iphoneForm').value=totalPhones;
        var totalPhonePrice= parseFloat(document.getElementById('iphonePrice').innerText)/parseFloat(document.getElementById('iphoneForm').value);
        document.getElementById('iphonePrice').innerText=totalPhonePrice;
      
        
        if(totalPhones>=2) {
        document.getElementById('iphoneForm').value=parseFloat(document.getElementById('iphoneForm').value)-1
        }
       else if(totalPhones<=1){
        document.getElementById('iphoneForm').value=parseFloat(document.getElementById('iphoneForm').value)=1;
       }
   
    

}
})

const btn1Plus= document.getElementById('btn1Plus');
btn1Plus.addEventListener('click', function(){
   
    
    document.getElementById('subTotal').innerText=subTotal;
    const totalPhones=parseFloat(document.getElementById('iphoneForm').value)+1;
   
        document.getElementById('iphoneForm').value=totalPhones;
        var totalPhonePrice= parseFloat(document.getElementById('iphonePrice').innerText)*totalPhones;
        document.getElementById('iphonePrice').innerText=totalPhonePrice;
 
    
})


const btn2Minus= document.getElementById('btn2Minus');
btn2Minus.addEventListener('click', function(){
const totalCase=parseFloat(document.getElementById('caseForm').value);
if(totalCase>=1){
    document.getElementById('caseForm').value=totalCase;
    var totalCasePrice=parseFloat(document.getElementById('casePrice').innerText)/parseFloat(document.getElementById('caseForm').value);
    document.getElementById('casePrice').innerText=totalCasePrice;
    if(totalCase>=2) {
        document.getElementById('caseForm').value=parseFloat(document.getElementById('caseForm').value)-1
        }
       else if(totalCase<=1){
        document.getElementById('caseForm').value=parseFloat(document.getElementById('caseForm').value)=1;
       }


}
})

const btn2Plus= document.getElementById('btn2Plus');
btn2Plus.addEventListener('click', function(){
    const totalCase=parseFloat(document.getElementById('caseForm').value)+1;
   
        document.getElementById('caseForm').value=totalCase;
        var totalCasePrice= parseFloat(document.getElementById('casePrice').innerText)*totalCase;
        document.getElementById('casePrice').innerText=totalCasePrice;
 
    
})



