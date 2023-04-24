var totalmaks = 0;
var remain = 10;
var div = document.getElementById("section1");

function submit1() {
  var input1 = document.getElementById("radio1");
  var input2 = document.getElementById("radio2");
  var input3 = document.getElementById("radio3");
  var input4 = document.getElementById("radio4");

  if (input1.checked && input1.value === "56") {
    totalmaks += 2;
    console.log("Your answer is correct!");
    console.log(totalmaks);
  } else {
    console.log("Your answer is wrong!");
    
  }
  remain -= 1;
  console.log(remain);
  div.style.display = "none";

  document.getElementById("section2").style.display = "block";
  calculateTotalMarks();
  document.getElementById("remain").innerHTML=remain;
}

var time1 = 10;
var id1 = setInterval(function(){
  time1--
//   console.log(time1);
  document.getElementById("timer1").innerText=time1;
 
}
,1000
)
setTimeout(() => {
  div.style.display = "none";
  document.getElementById("section2").style.display = "block";
  clearInterval(id1)
}, 10000);


function submit2() {
  var input4 = document.getElementById("radio5");
  var input5 = document.getElementById("radio6");
  var input6 = document.getElementById("radio7");
  var input6 = document.getElementById("radio8");

  if (input6.checked && input6.value === "4") {
    console.log("Your answer is correct!");
    totalmaks += 2;
    console.log(totalmaks);
  } else {
    console.log("Your answer is wrong!");
    console.log(totalmaks);
  }
  var div = document.getElementById("section2");
  div.style.display = "none";
  document.getElementById("section3").style.display = "block";
  calculateTotalMarks();
}

var time2 = 20;
var id2 = setInterval(function(){
  time2--;
  document.getElementById("timer2").innerText = time2;
}, 1000);

setTimeout(() => {
  // div.style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "block";
  clearInterval(id2);
}, 20000);

setTimeout(() => {
  console.log(time2);
}, 21000);


function submi3() {
  var input7 = document.getElementById("radio7");
  var input8 = document.getElementById("radio8");
  var input9 = document.getElementById("radio9");

  if (input7.checked && input6.value === "4") {
    console.log("Your answer is correct!");
    totalmaks += 2;
    console.log(totalmaks);
  } else {
    console.log("Your answer is wrong!");
    console.log(totalmaks);
  }
  var div = document.getElementById("section3");
  div.style.display = "none";
  document.getElementById("section4").style.display = "block";

  calculateTotalMarks();
}


var time3 = 30;
var id3 = setInterval(function(){
  time3--
//   console.log(time1);
  document.getElementById("timer3").innerText=time3;
 
}
,1000
)
setTimeout(() => {
  div.style.display = "none";
  document.getElementById("section4").style.display = "block";
  clearInterval(id3)
}, 30000);

function submit4() {
  var input10 = document.getElementById("radio10");
  var input11 = document.getElementById("radio11");
  var input12 = document.getElementById("radio12");

  if (input11.checked && input6.value === "4") {
    console.log("Your answer is correct!");
    totalmaks += 2;
    console.log(totalmaks);
  } else {
    console.log("Your answer is wrong!");
    console.log(totalmaks);
  }
  var div = document.getElementById("section4");
  div.style.display = "none";
  document.getElementById("section5").style.display = "block";

  calculateTotalMarks();
}

function submit5() {
  var input13 = document.getElementById("radio13");
  var input14 = document.getElementById("radio14");
  var input15 = document.getElementById("radio15");

  if (input14.checked && input14.value === "4") {
    console.log("Your answer is correct!");
    totalmaks += 2;
    console.log(totalmaks);
  } else {
    console.log("Your answer is wrong!");
    console.log(totalmaks);
  }
  var div = document.getElementById("section5");
  div.style.display = "none";
  document.getElementById("section6").style.display = "block";
  calculateTotalMarks();
}

function submit6() {
  var input16 = document.getElementById("radio16");
  var input17 = document.getElementById("radio17");
  var input18 = document.getElementById("radio18");

  if (input16.checked && input16.value === "4") {
    console.log("Your answer is correct!");
    totalmaks += 2;
    console.log(totalmaks);
  } else {
    console.log("Your answer is wrong!");
    console.log(totalmaks);
  }
  var div = document.getElementById("section7");
  div.style.display = "none";
  calculateTotalMarks();
}

function submit7() {
  var input19 = document.getElementById("radio19");
  var input20 = document.getElementById("radio20");
  var input21 = document.getElementById("radio21");

  if (input21.checked && input21.value === "4") {
    console.log("Your answer is correct!");
    totalmaks += 2;
    console.log(totalmaks);
  } else {
    console.log("Your answer is wrong!");
    console.log(totalmaks);
  }
  var div = document.getElementById("section8");
  div.style.display = "none";
  calculateTotalMarks();
}

function submit8() {
  var input22 = document.getElementById("radio22");
  var input23 = document.getElementById("radio23");
  var input24 = document.getElementById("radio24");

  if (input22.checked && input22.value === "4") {
    console.log("Your answer is correct!");
    totalmaks += 2;
    console.log(totalmaks);
  } else {
    console.log("Your answer is wrong!");
    console.log(totalmaks);
  }
  var div = document.getElementById("section9");
  div.style.display = "none";
  calculateTotalMarks();
}

function submit9() {
  var input25 = document.getElementById("radio25");
  var input26 = document.getElementById("radio26");
  var input27 = document.getElementById("radio27");

  if (input25.checked && input25.value === "4") {
    console.log("Your answer is correct!");
    totalmaks += 2;
    console.log(totalmaks);
  } else {
    console.log("Your answer is wrong!");
    console.log(totalmaks);
  }
  var div = document.getElementById("section10");
  div.style.display = "none";
  calculateTotalMarks();
}

function submit10() {
  var input28 = document.getElementById("radio28");
  var input29 = document.getElementById("radio29");
  var input30 = document.getElementById("radio30");

  if (input30.checked && input30.value === "4") {
    console.log("Your answer is correct!");
    totalmaks += 2;
    console.log(totalmaks);
  } else {
    console.log("Your answer is wrong!");
    console.log(totalmaks);
  }
  var div = document.getElementById("section2");
  div.style.display = "none";
  calculateTotalMarks();
}

function calculateTotalMarks() {
  document.getElementById("marks").innerHTML = totalmaks;
}
