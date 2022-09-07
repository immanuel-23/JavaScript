 var random=Math.floor(Math.random() * 40) + 1;

 console.log(random);
 let count =0;

const turn =document.getElementById("turn")
console.log(turn.innerText);

const btn1 =document.getElementById("btn1");
const btn2 =document.getElementById("btn2");
const btn3 =document.getElementById("btn3");
const btn4 =document.getElementById("btn4");
const btn5 =document.getElementById("btn5");
const btn6 =document.getElementById("btn6");
const btn7 =document.getElementById("btn7");
const btn8 =document.getElementById("btn8");
const btn9 =document.getElementById("btn9");
const btn10 =document.getElementById("btn10");

const btn11 =document.getElementById("btn11");
const btn12 =document.getElementById("btn12");
const btn13 =document.getElementById("btn13");
const btn14 =document.getElementById("btn14");
const btn15 =document.getElementById("btn15");
const btn16 =document.getElementById("btn16");
const btn17 =document.getElementById("btn17");
const btn18 =document.getElementById("btn18");
const btn19 =document.getElementById("btn19");
const btn20 =document.getElementById("btn20");


const btn21 =document.getElementById("btn21");
const btn22 =document.getElementById("btn22");
const btn23 =document.getElementById("btn23");
const btn24 =document.getElementById("btn24");
const btn25 =document.getElementById("btn25");
const btn26 =document.getElementById("btn26");
const btn27 =document.getElementById("btn27");
const btn28 =document.getElementById("btn28");
const btn29 =document.getElementById("btn29");
const btn30 =document.getElementById("btn30");

const btn31 =document.getElementById("btn31");
const btn32 =document.getElementById("btn32");
const btn33 =document.getElementById("btn33");
const btn34 =document.getElementById("btn34");
const btn35 =document.getElementById("btn35");
const btn36 =document.getElementById("btn36");
const btn37 =document.getElementById("btn37");
const btn38 =document.getElementById("btn38");
const btn39 =document.getElementById("btn39");
const btn40 =document.getElementById("btn40");

var turn1=1;

function printText(){
    if( count<=6){
        turn.innerText=`Turn ${turn1}`
        turn1=turn1+1; 
    }

 }


console.log(typeof( parseInt(btn1.innerText)));

    
    btn1.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn1").disabled = true;
        }else
        if( parseInt(btn1.innerText)==random){
            btn1.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn1.innerText)>random){
                btn1.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn1.innerText)<random){
                btn1.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn1").disabled = true;
        }
        count=count+1;
        printText();

    })

    btn2.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn2").disabled = true;
        }else
        if( parseInt(btn2.innerText)==random){
            btn2.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn2.innerText)>random){
                btn2.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn2.innerText)<random){
                btn2.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn2").disabled = true;

        }
        count=count+1;
        printText();

    })

    btn3.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn3").disabled = true;
        }else
        if( parseInt(btn3.innerText)==random){
            btn3.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn3.innerText)>random){
                btn2.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn3.innerText)<random){
                btn3.classList.replace("initialCss","lowGuess")
            }       
            document.getElementById("btn3").disabled = true;
         }
         count=count+1;
         printText();

    })

    btn4.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn4").disabled = true;
        }else
        if( parseInt(btn4.innerText)==random){
            btn4.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn4.innerText)>random){
                btn4.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn4.innerText)<random){
                btn4.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn4").disabled = true;
        }
        count=count+1;
        printText();

    })

    btn5.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn5").disabled = true;
        }else
        if( parseInt(btn5.innerText)==random){
            btn5.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn5.innerText)>random){
                btn5.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn5.innerText)<random){
                btn5.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn5").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn6.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn6").disabled = true;
        }else
        if( parseInt(btn6.innerText)==random){
            btn6.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn6.innerText)>random){
                btn6.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn6.innerText)<random){
                btn6.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn6").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn7.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn7").disabled = true;
        }else
        if( parseInt(btn7.innerText)==random){
            btn7.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn7.innerText)>random){
                btn7.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn7.innerText)<random){
                btn7.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn7").disabled = true;

        }
        count=count+1;
        printText();
    })

    btn8.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn8").disabled = true;
            count=6;
        }else
        if( parseInt(btn8.innerText)==random){
            btn8.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn8.innerText)>random){
                btn8.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn8.innerText)<random){
                btn8.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn8").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn9.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn9").disabled = true;
        }else
        if( parseInt(btn9.innerText)==random){
            btn9.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn9.innerText)>random){
                btn9.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn9.innerText)<random){
                btn9.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn9").disabled = true;
        }
        count=count+1;
        printText();
        console.log(count);
    })

    btn10.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn10").disabled = true;
        }else
        if( parseInt(btn10.innerText)==random){
            btn10.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn10.innerText)>random){
                btn10.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn10.innerText)<random){
                btn10.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn10").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn11.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn11").disabled = true;
        }else
        if( parseInt(btn11.innerText)==random){
            btn11.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn11.innerText)>random){
                btn11.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn11.innerText)<random){
                btn11.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn11").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn12.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn12").disabled = true;
        }else
        if( parseInt(btn12.innerText)==random){
            btn12.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn12.innerText)>random){
                btn12.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn12.innerText)<random){
                btn12.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn12").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn13.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn13").disabled = true;
        }else
        if( parseInt(btn13.innerText)==random){
            btn13.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn13.innerText)>random){
                btn13.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn13.innerText)<random){
                btn13.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn13").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn14.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn14").disabled = true;
        }else
        if( parseInt(btn14.innerText)==random){
            btn14.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn14.innerText)>random){
                btn14.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn14.innerText)<random){
                btn14.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn14").disabled = true;
        }
        count=count+1;
        printText();

    })

    btn15.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn15").disabled = true;
        }else
        if( parseInt(btn15.innerText)==random){
            btn15.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn15.innerText)>random){
                btn15.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn15.innerText)<random){
                btn15.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn15").disabled = true;
        }
        count=count+1;
        printText();

    })

    btn16.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn16").disabled = true;
        }else
        if( parseInt(btn16.innerText)==random){
            btn16.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn16.innerText)>random){
                btn16.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn16.innerText)<random){
                btn16.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn16").disabled = true;
        }
        count=count+1;
        printText();

    })


    btn17.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn17").disabled = true;
        }else
        if( parseInt(btn17.innerText)==random){
            btn17.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn17.innerText)>random){
                btn17.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn17.innerText)<random){
                btn17.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn17").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn18.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn18").disabled = true;
        }else
        if( parseInt(btn18.innerText)==random){
            btn18.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn18.innerText)>random){
                btn18.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn18.innerText)<random){
                btn18.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn18").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn19.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn19").disabled = true;
        }else
        if( parseInt(btn19.innerText)==random){
            btn19.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn19.innerText)>random){
                btn19.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn19.innerText)<random){
                btn19.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn19").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn20.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn20").disabled = true;
        }else
        if( parseInt(btn20.innerText)==random){
            btn20.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn20.innerText)>random){
                btn20.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn20.innerText)<random){
                btn20.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn20").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn21.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn21").disabled = true;
        }else
        if( parseInt(btn21.innerText)==random){
            btn21.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn21.innerText)>random){
                btn21.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn21.innerText)<random){
                btn21.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn21").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn22.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn22").disabled = true;
        }else
        if( parseInt(btn22.innerText)==random){
            btn22.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn22.innerText)>random){
                btn22.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn22.innerText)<random){
                btn22.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn22").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn23.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn23").disabled = true;
        }else
        if( parseInt(btn23.innerText)==random){
            btn23.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn23.innerText)>random){
                btn23.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn23.innerText)<random){
                btn23.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn23").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn24.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn24").disabled = true;
        }else
        if( parseInt(btn24.innerText)==random){
            btn24.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn24.innerText)>random){
                btn24.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn24.innerText)<random){
                btn24.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn24").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn25.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn25").disabled = true;
        }else
        if( parseInt(btn25.innerText)==random){
            btn25.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn25.innerText)>random){
                btn25.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn25.innerText)<random){
                btn25.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn25").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn26.addEventListener('click',e=>{
        if(count==6||count>6){
            document.getElementById("btn26").disabled = true;
        }else
        if( parseInt(btn26.innerText)==random){
            btn26.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn26.innerText)>random){
                btn26.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn26.innerText)<random){
                btn26.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn26").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn27.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn27").disabled = true;
        }else
        if( parseInt(btn27.innerText)==random){
            btn27.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn27.innerText)>random){
                btn27.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn27.innerText)<random){
                btn27.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn27").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn28.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn28").disabled = true;
        }else
        if( parseInt(btn28.innerText)==random){
            btn28.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn28.innerText)>random){
                btn2.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn28.innerText)<random){
                btn28.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn28").disabled = true;

        }
        count=count+1;
        printText();
    })

    btn29.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn29").disabled = true;
        }else
        if( parseInt(btn29.innerText)==random){
            btn29.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn29.innerText)>random){
                btn29.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn29.innerText)<random){
                btn29.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn29").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn30.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn30").disabled = true;
        }else
        if( parseInt(btn30.innerText)==random){
            btn30.classList.replace("initialCss","correctGuess")
            count=6;

        }
        else{
            if(parseInt(btn30.innerText)>random){
                btn30.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn30.innerText)<random){
                btn30.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn30").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn31.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn31").disabled = true;
        }else
        if( parseInt(btn31.innerText)==random){
            btn31.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn31.innerText)>random){
                btn31.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn31.innerText)<random){
                btn31.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn31").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn32.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn32").disabled = true;
        }else
        if( parseInt(btn32.innerText)==random){
            btn32.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn32.innerText)>random){
                btn32.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn32.innerText)<random){
                btn32.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn32").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn33.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn33").disabled = true;
        }else
        if( parseInt(btn33.innerText)==random){
            btn33.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn33.innerText)>random){
                btn33.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn33.innerText)<random){
                btn33.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn33").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn34.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn34").disabled = true;
        }else
        if( parseInt(btn34.innerText)==random){
            btn34.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn34.innerText)>random){
                btn34.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn34.innerText)<random){
                btn34.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn34").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn35.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn35").disabled = true;
        }else
        if( parseInt(btn35.innerText)==random){
            btn35.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn35.innerText)>random){
                btn35.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn35.innerText)<random){
                btn35.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn35").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn36.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn36").disabled = true;
        }else
        if( parseInt(btn36.innerText)==random){
            btn36.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn36.innerText)>random){
                btn36.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn36.innerText)<random){
                btn36.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn36").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn37.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn37").disabled = true;
        }else
        if( parseInt(btn37.innerText)==random){
            btn37.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn37.innerText)>random){
                btn37.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn37.innerText)<random){
                btn37.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn37").disabled = true;
        }
        count=count+1;
        printText();
    })


    btn38.addEventListener('click',e=>{
        if(count==6  ||count>6){
            document.getElementById("btn38").disabled = true;
        }else
        if( parseInt(btn38.innerText)==random){
            btn38.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn38.innerText)>random){
                btn38.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn38.innerText)<random){
                btn38.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn38").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn39.addEventListener('click',e=>{
        if(count==6 || count>6){
            document.getElementById("btn39").disabled = true;
        }else
        if( parseInt(btn39.innerText)==random){
            btn39.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn39.innerText)>random){
                btn39.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn39.innerText)<random){
                btn39.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn39").disabled = true;
        }
        count=count+1;
        printText();
    })

    btn40.addEventListener('click',e=>{
        if(count==6 ||count>6){
            document.getElementById("btn40").disabled = true;
        }else
        if( parseInt(btn40.innerText)==random){
            btn40.classList.replace("initialCss","correctGuess")
            count=6;
        }
        else{
            if(parseInt(btn40.innerText)>random){
                btn40.classList.replace("initialCss","highgGuess")
            }else if(parseInt(btn40.innerText)<random){
                btn40.classList.replace("initialCss","lowGuess")
            }
            document.getElementById("btn40").disabled = true;
        }
        count=count+1;
        printText();
    })






 

