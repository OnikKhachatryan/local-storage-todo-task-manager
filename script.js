////////////////////////////////////////////////////////////////////////////////
// -------------------- PROBLEM 1: Save Items to LocalStorage ------------------
//  Input values are saved with Done/Delete buttons.
//  Stored in localStorage and visible after reload.
////////////////////////////////////////////////////////////////////////////////

///Problem 1A: Single Value Save


let x = [1, 2, 3, 4, 5]
localStorage.setItem("key", JSON.stringify(x))

JSON.parse(localStorage.getItem("key"))


function getValue() {
	let y = n.value
	localStorage.setItem("key", JSON.stringify(y))
	localStorage.getItem("key")
}

///Problem 1B: Task List with LocalStorage

let arr = JSON.parse(localStorage.getItem("info")) || [];
renderList();

function saveToLocal() {
	let x = document.getElementById("a").value;
	if (!x) return;
	arr.push({ id: new Date().getTime(), x, done: false });
	localStorage.setItem("info", JSON.stringify(arr));
	renderList();
}

function renderList() {
	let str = "";
	for (let i of arr) {
		str += `<li>
            ${i.done ? `<del>${i.x}</del>` : `<span>${i.x}</span>`}
            <button onclick="toggleDone(${i.id})">Done</button>
            <button onclick="deleteItem(${i.id})">Delete</button>
        </li>`;
	}
	document.getElementById("y").innerHTML = str;
}

function toggleDone(id) {
	for (let i of arr) {
		if (i.id === id) i.done = !i.done;
	}
	localStorage.setItem("info", JSON.stringify(arr));
	renderList();
}

function deleteItem(id) {
	arr = arr.filter(item => item.id !== id);
	localStorage.setItem("info", JSON.stringify(arr));
	renderList();
}





////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// -------------------- PROBLEM 2: Traffic Light Simulation -------------------
//  Simulates Red > Orange > Green light cycle.
//  Uses setInterval and setTimeout to animate.
////////////////////////////////////////////////////////////////////////////////

///----------------- PROBLEM 2: Traffic Light -------------------- 


setInterval(function () {
	setTimeout(function () {
		document.getElementById("karmir").style.backgroundColor = "red";
		document.getElementById("dexin").style.backgroundColor = "gray";
		document.getElementById("kanach").style.backgroundColor = "gray";
	}, 1000);

	setTimeout(function () {
		document.getElementById("karmir").style.backgroundColor = "gray";
		document.getElementById("dexin").style.backgroundColor = "orange";
		document.getElementById("kanach").style.backgroundColor = "gray";
	}, 2000);

	setTimeout(function () {
		document.getElementById("karmir").style.backgroundColor = "gray";
		document.getElementById("dexin").style.backgroundColor = "gray";
		document.getElementById("kanach").style.backgroundColor = "green";
	}, 3000);
}, 3000);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///INCHPES PAHEL INFO-N LOACALSTORAGE-UM EV TPEL EKRANIN VORPESZI AYN CHANHETANA TARMACNELUC EV WEB-Y X-OV  PAKELUC BACEL
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// ----------------Problem 3: Simple List with LocalStorage ----------------- 

let arr3 = JSON.parse(localStorage.getItem("info")) || [];
let y = document.getElementById("y2");

function f() {
	let x = document.getElementById("a2").value;
	arr3.push({ x });
	let li = document.createElement("li");
	li.innerHTML = x;
	y.appendChild(li);
	localStorage.setItem("info", JSON.stringify(arr3));
}


let str = "";
for (let i of arr3) {
	str += `<li>${i.x}</li>`;
}
y.innerHTML = str;


/////////////////////////////////////////////
///LOCALUM PAHAC LI-ERY DELET BUTTON-OV JNJEL
/////////////////////////////////////////////

/// ---------------- PROBLEM 4: LocalStorage List with Delete Button ----------------- 


let arr4 = JSON.parse(localStorage.getItem("info")) || [];

function f4() {
	let x = a4.value;
	arr4.push({ x });
	let li = document.createElement("li");
	li.innerHTML = `${x} <button onclick="deleteItem4(this)">Delete</button>`;
	y4.appendChild(li);
	localStorage.setItem("info", JSON.stringify(arr4));
}

function deleteItem4(button) {
	let listItem = button.parentNode;
	let index = Array.from(listItem.parentNode.children).indexOf(listItem);
	arr4.splice(index, 1);
	listItem.remove();
	localStorage.setItem("info", JSON.stringify(arr4));
}

let str4 = "";
for (let i of arr4) {
	str4 += `<li>${i.x} <button onclick="deleteItem4(this)">Delete</button></li>`;
}
y4.innerHTML = str4;




/// ------------------------ PROBLEM 5: To-Do List with Done Toggle --------------------------- -->



let arr5 = JSON.parse(localStorage.getItem("info5")) || [];

function f5() {
    let x = a5.value;
    arr5.push({
        id: new Date().getTime(),
        x,
        done: false
    });
    let str = "";
    for (let i of arr5) {
        str += `<li>
            ${i.done ? `<del>${i.x}</del>` : `<span>${i.x}</span>`}
            <button onclick="done5(${i.id})">Done</button>
        </li>`;
    }
    y5.innerHTML = str;
    localStorage.setItem("info5", JSON.stringify(arr5));
}

function done5(id) {
    for (let i of arr5) {
        if (i.id === id) {
            i.done = !i.done;
        }
    }
    let str = "";
    for (let i of arr5) {
        str += `<li>
            ${i.done ? `<del>${i.x}</del>` : `<span>${i.x}</span>`}
            <button onclick="done5(${i.id})">Done</button>
        </li>`;
    }
    y5.innerHTML = str;
    localStorage.setItem("info5", JSON.stringify(arr5));
}



///-------------------- PROBLEM 6: Done Toggle with Reload -------------------------------- 



let arr6 = JSON.parse(localStorage.getItem("info6")) || [];

function f6() {
  let x = a6.value;
  arr6.push({
    id: new Date().getTime(),
    x,
    done: false
  });
  localStorage.setItem("info6", JSON.stringify(arr6));
  location.reload();
}

let str6 = "";

for (let i of arr6) {
  str6 += `<li>
    ${i.done ? `<del>${i.x}</del>` : `<span>${i.x}</span>`}
    <button onclick="done6(${i.id})">Done</button>
  </li>`;
}

y6.innerHTML = str6;

function done6(id) {
  for (let i of arr6) {
    if (i.id === id) {
      i.done = !i.done;
    }
  }
  localStorage.setItem("info6", JSON.stringify(arr6));
  location.reload();
}










////////////////////////////////////////////////////////////////////////////////////////////////////////










/////// thurnur operator
/////// ? :






// var karmir=document.createElement("div")
// karmir.style.borderRadius="50%"
// karmir.style.border="1px solid"
// karmir.style.backgroundColor="gray"
// karmir.style.height="100px"
// karmir.style.width="100px"
// document.body.appendChild(karmir)

// var dexin=document.createElement("div")
// dexin.style.borderRadius="50%"
// dexin.style.border="1px solid"
// dexin.style.backgroundColor="gray"
// dexin.style.height="100px"
// dexin.style.width="100px"
// document.body.appendChild(dexin)

// var kanach=document.createElement("div")
// kanach.style.borderRadius="50%"
// kanach.style.border="1px solid"
// kanach.style.backgroundColor="gray"
// kanach.style.height="100px"
// kanach.style.width="100px"
// document.body.appendChild(kanach)


// let k = 0
// let d = 0
// let r = 0;

// let int = setInterval(function(){


// 	let int1 = setInterval(function () {
// 	  if (k < 10) {
// 	    karmir.style.backgroundColor = "red";
// 	    dexin.style.backgroundColor = "gray";
// 	    kanach.style.backgroundColor = "gray";
// 	    k++;
// 	  } else {
// 	    clearInterval(int1);
// 	    let int2 = setInterval(function () {
// 	      if (d < 10) {
// 	        karmir.style.backgroundColor = "gray";
// 		    dexin.style.backgroundColor = "orange";
// 		    kanach.style.backgroundColor = "gray";
// 	        d++;
// 	      } else {
// 	        clearInterval(int2);
// 	        let int3 = setInterval(function () {
// 	          if (r < 10) {
// 	            karmir.style.backgroundColor = "gray";
// 			    dexin.style.backgroundColor = "gray";
// 			    kanach.style.backgroundColor = "green";
// 			    r++;
// 	          } else {
// 	            clearInterval(int3);
// 	          }
// 	        }, 1000);
// 	      }
// 	    }, 1000);
// 	  }
// 	}, 1000);


// },1000)


////////////////////
//////// 2-rd TARBERAKY MEK SETINTERVAL(FUNCTION(){}) 
////////////////////
// let k = 0;
// let d = 0;
// let r = 0;

// let int = setInterval(function () {
//   if (k < 10) {
//     karmir.style.backgroundColor = "red";
//     dexin.style.backgroundColor = "gray";
//     kanach.style.backgroundColor = "gray";
//     k++;
//   } else {
//     k = 0; // Reset the counter for the next color change
//     if (d < 10) {
//       karmir.style.backgroundColor = "gray";
//       dexin.style.backgroundColor = "orange";
//       kanach.style.backgroundColor = "gray";
//       d++;
//     } else {
//       d = 0; // Reset the counter for the next color change
//       if (r < 10) {
//         karmir.style.backgroundColor = "gray";
//         dexin.style.backgroundColor = "gray";
//         kanach.style.backgroundColor = "green";
//         r++;
//       } else {
//         r = 0; // Reset the counter for the next color change
//       }
//     }
//   }
// }, 1500);


/////////////////////////////////////////////////////
/////////////////2000v ic heto console.loge ani barev

// setTimeout(function(){
// 	   console.log("barev")
// },2000)

/////////////////////////////////////////////////////
///for react///webstorm
///node.js




// setInterval(function(){
// 	setTimeout(function(){
// 	 	karmir.style.backgroundColor = "red";
// 	    dexin.style.backgroundColor = "gray";
// 	    kanach.style.backgroundColor = "gray";
// 	},1000)
// 	setTimeout(function(){
// 	  karmir.style.backgroundColor = "gray";
//       dexin.style.backgroundColor = "orange";
//       kanach.style.backgroundColor = "gray";
// 	},2000)
// 	setTimeout(function(){
// 	 	karmir.style.backgroundColor = "gray";
//         dexin.style.backgroundColor = "gray";
//         kanach.style.backgroundColor = "green";
// 	},3000)
// },3000)







