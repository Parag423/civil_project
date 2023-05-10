const final=document.querySelector(".input")
const class2=document.querySelector(".class2")
const class0=document.querySelector(".class0")



function fun(){

var max_flow=final.value;
console.log(max_flow)
if(max_flow=="")
class2.textContent="Please enter value";
else{
var q=max_flow/86.4

var a=q/0.8

var gv=a*0.866025404

console.log(gv)

var wc=gv/.3

console.log(wc)

var vsc=q/(0.3*wc)

console.log(vsc)

var br=wc/0.04

console.log(br)

var aws=br*0.4

console.log(aws)

var ads=gv/aws
console.log(ads)

var ds=ads+0.5

console.log(ds)

var ss=aws*ds

console.log(ss)
class0.textContent="Final result is: "
class2.textContent=`${ss} m`;
}

}