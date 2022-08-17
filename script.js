numbers=document.querySelectorAll('.numbers');
let numberarray = Array.from(numbers);
let screenbottom=document.querySelector('.screenbottom')
test=document.createElement('div');
test.textContent="test!"

/*for (number in numberarray)
{
    
}

numberarray.forEach(number=>
{   
    var test2=document.createElement('div');
    test2.textContent=number.textContent;
    test2.classList.add('screeno1')
    number.addEventListener('click',()=>{screen.appendChild(test2)});
}) check why the hell this wont work lol the numbers will not allow for duplicates no matter what, they replace the first instance when pressed again
*/


one=document.querySelector('.one')
two=document.querySelector('.two')
three=document.querySelector('.three')
four=document.querySelector('.four')
five=document.querySelector('.five')
six=document.querySelector('.six')
seven=document.querySelector('.seven')
eight=document.querySelector('.eight')
nine=document.querySelector('.nine')
plus=document.querySelector('.plus')
multiply=document.querySelector('.multiply')
divide=document.querySelector('.divide')
ac=document.querySelector('.ac')
c=document.querySelector('.c')
percent=document.querySelector('.percent')
decimal=document.querySelector('.decimal')
minus=document.querySelector('.minus')
equal=document.querySelector('.equal');

function addText(huh)
{
    temp=document.createElement('div');
    temp.textContent=huh.textContent;
    temp.classList.add('screeno1');
    
    screenbottom.appendChild(temp);
}
one.addEventListener('click',()=>{addText(one)});
two.addEventListener('click',()=>{addText(two)});
three.addEventListener('click',()=>{addText(three)});
four.addEventListener('click',()=>{addText(four)});
five.addEventListener('click',()=>{addText(five)});
six.addEventListener('click',()=>{addText(six)});
seven.addEventListener('click',()=>{addText(seven)});
eight.addEventListener('click',()=>{addText(eight)});
nine.addEventListener('click',()=>{addText(nine)});
decimal.addEventListener('click',()=>{addText(decimal)});

ac.addEventListener('click',()=>{screenbottom.innerHTML=""})
c.addEventListener('click',()=>{screenbottom.removeChild(screenbottom.lastElementChild)})

/* two situations:
one, there is no other operator on screen. then, take the two numbers, and use the operator given through arguements to calculate the value.
two, there is already another operator on the screen. then, find what operator that is, and recursively recall the function and return the value. empty innerhtml, append the new value, and append operator after that. 


situations
one, user types one number, then operator. there is no other operator on the screen, so append the operator onto the screen and do nothing else.
two, user types one number, then operator, then types another number, then presses equal to. directly calculate value using an operator function. remove innerhtml, and append new value instead.
three, user types one number, then operator, then types another number, then presses some other operator that is not equal to. then evaluate what is already on the screen,


*/

plus.addEventListener('click',()=>{operator('+')});
equal.addEventListener('click',()=>{operator('=')});
multiply.addEventListener('click',()=>{operator('x')});
minus.addEventListener('click',()=>{operator('-')});
divide.addEventListener('click',()=>{operator('÷')});
percent.addEventListener('click',()=>{operator('%')});
decimal.addEventListener('click',()=>{decimalFunc('.')});


function decimalFunc()
{
    var decTemp=document.createElement('div');
    decTemp.classList.add('screeno1')
    screenbottom.appendChild(decTemp);
}




function operator(operate)
{
    var screenCheck=screenbottom.textContent;
    const symbols=['+','-','+','x'];
    operateTemp=document.createElement('div');
    operateTemp.classList.add('screeno1');
    operateTemp2=document.createElement('div');
    operateTemp2.classList.add('screeno1');
    var num1;
    var num2;
    var total
    var operatorPosition;

    


    if(screenCheck.includes('+'))
    {
        if(operate=="=")
        {   
            //addition
            operatorPosition=screenCheck.indexOf('+');
            num1=+screenCheck.slice(0,operatorPosition);
            num2=+screenCheck.slice(operatorPosition+1,screenCheck.length);  
            total=num1+num2;
            operateTemp.textContent=total;
            screenbottom.innerHTML='';
            screenbottom.appendChild(operateTemp);
        }
        else
        {
            operatorPosition=screenCheck.indexOf('+');
            num1=+screenCheck.slice(0,operatorPosition);
            num2=+screenCheck.slice(operatorPosition+1,screenCheck.length);  
            total=num1+num2;
            operateTemp.textContent=total;
            operateTemp2.textContent=operate;
            screenbottom.innerHTML="";
            screenbottom.appendChild(operateTemp);
            screenbottom.appendChild(operateTemp2);

        }
    }
    else if(screenCheck.includes('x'))
    {
        if(operate=="=")
        {   
            //multiplication
            operatorPosition=screenCheck.indexOf('x');
            num1=+screenCheck.slice(0,operatorPosition);
            num2=+screenCheck.slice(operatorPosition+1,screenCheck.length);  
            total=num1*num2;
            operateTemp.textContent=total;
            screenbottom.innerHTML='';
            screenbottom.appendChild(operateTemp);
        }
        else
        {
            operatorPosition=screenCheck.indexOf('x');
            num1=+screenCheck.slice(0,operatorPosition);
            num2=+screenCheck.slice(operatorPosition+1,screenCheck.length);  
            total=num1*num2;
            operateTemp.textContent=total;
            operateTemp2.textContent=operate;
            screenbottom.innerHTML="";
            screenbottom.appendChild(operateTemp);
            screenbottom.appendChild(operateTemp2);

        }
    }

    else if(screenCheck.includes('-'))
    {
        if(operate=="=")
        {   
            //subtraction
            operatorPosition=screenCheck.indexOf('-');
            num1=+screenCheck.slice(0,operatorPosition);
            num2=+screenCheck.slice(operatorPosition+1,screenCheck.length);  
            total=num1-num2;
            operateTemp.textContent=total;
            screenbottom.innerHTML='';
            screenbottom.appendChild(operateTemp);
        }
        else
        {
            operatorPosition=screenCheck.indexOf('-');
            num1=+screenCheck.slice(0,operatorPosition);
            num2=+screenCheck.slice(operatorPosition+1,screenCheck.length);  
            total=num1-num2;
            operateTemp.textContent=total;
            operateTemp2.textContent=operate;
            screenbottom.innerHTML="";
            screenbottom.appendChild(operateTemp);
            screenbottom.appendChild(operateTemp2);

        }
    }
    else if(screenCheck.includes('%'))
    {
        if(operate=="=")
        {   
            //division
            operatorPosition=screenCheck.indexOf('%');
            num1=+screenCheck.slice(0,operatorPosition);
            num2=+screenCheck.slice(operatorPosition+1,screenCheck.length);  
            total=num1%num2;
            operateTemp.textContent=total;
            screenbottom.innerHTML='';
            screenbottom.appendChild(operateTemp);
        }
        else
        {
            operatorPosition=screenCheck.indexOf('%');
            num1=+screenCheck.slice(0,operatorPosition);
            num2=+screenCheck.slice(operatorPosition+1,screenCheck.length);  
            total=num1%num2;
            operateTemp.textContent=total;
            operateTemp2.textContent=operate;
            screenbottom.innerHTML="";
            screenbottom.appendChild(operateTemp);
            screenbottom.appendChild(operateTemp2);

        }
    }

    else if(screenCheck.includes('÷'))
    {
        if(operate=="=")
        {   
            //division
            operatorPosition=screenCheck.indexOf('÷');
            num1=+screenCheck.slice(0,operatorPosition);
            num2=+screenCheck.slice(operatorPosition+1,screenCheck.length);  
            total=num1/num2;
            operateTemp.textContent=total;
            screenbottom.innerHTML='';
            screenbottom.appendChild(operateTemp);
        }
        else
        {
            operatorPosition=screenCheck.indexOf('÷');
            num1=+screenCheck.slice(0,operatorPosition);
            num2=+screenCheck.slice(operatorPosition+1,screenCheck.length);  
            total=num1/num2;
            operateTemp.textContent=total;
            operateTemp2.textContent=operate;
            screenbottom.innerHTML="";
            screenbottom.appendChild(operateTemp);
            screenbottom.appendChild(operateTemp2);

        }
    }



    else
    {   operateTemp.textContent=operate;
        screenbottom.appendChild(operateTemp);
    }
}