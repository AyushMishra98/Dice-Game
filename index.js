var n1=Math.floor(6*Math.random()+1);
var img_src1="./images/dice"+n1+".png";
document.getElementsByTagName("img")[0].setAttribute("src",img_src1);

var n2=Math.floor(6*Math.random()+1);
var img_src2="./images/dice"+n2+".png";
document.getElementsByTagName("img")[1].setAttribute("src",img_src2);
if(n1==n2)
    document.querySelector("h1").textContent="Draw!";
else if(n1>n2)
    document.querySelector("h1").textContent="🚩Player 1 wins!";
else
    document.querySelector("h1").textContent="Player 2 wins!🚩";