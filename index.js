//Nhi da sua

// Xu ly Time
var myVar = setInterval(myTimer);
var d;
function myTimer() {
  d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString('en-GB');
}

//data model
// function data(name, status){ 
//     return{
//         name: name,
//         status: status,
//         time: d.toLocaleTimeString('en-GB'),
//     }
// }

var array = [];
var tmp; 

//Processing Edit
function edit(index){
    document.getElementById("name").value = array[index].name;
    document.getElementById("status").value = array[index].status;
    tmp = index;
    console.log(tmp);
}

//
function color(status, tag){
    console.log(tag);
    setTimeout(function(){
        if(status == "Todo") tag.style.backgroundColor = "#66d9ff";
        if(status == "Done") tag.style.backgroundColor = "#ff9999";
    }, 3000);
}

function addElement(element, value){
    var element = document.createElement('td');
    var value = document.createTextNode(value);
    element.appendChild(value);
    return element;
}

var value;
var k=0, i=1;

var method = {
    create: function(){
        var name = document.getElementById("name").value;
        var status = document.getElementById("status").value;
        value = {
            name: name, 
            status: status,
            time: d.toLocaleTimeString('en-GB'),
        }
        array.push(value);
        this.read();
    },
    read: function(){
        // Them cac gia tri name, status, Time
        var tr = document.createElement("tr");
        var name = addElement('td', value.name);
        var status = addElement('td', value.status);
        var time = addElement('td', value.time)
        tr.appendChild(name);
        tr.appendChild(status);
        tr.appendChild(time);
        tr.id = `ind${k}`;
        tr.setAttribute('onclick','edit('+k+');');
        document.getElementById("table").appendChild(tr);
        color(value.status, tr); // doi mau sau 3s
        k++;
    },
    update: function(){
        var name = document.getElementById("name").value;
        var status = document.getElementById("status").value;
        array[tmp].name = name;
        array[tmp].status = status;
        var tmp_name = document.createTextNode(name);
        var tmp_status = document.createTextNode(status);
        var ten = document.getElementById(`ind${tmp}`).childNodes[0];
        var trangthai = document.getElementById(`ind${tmp}`).childNodes[1];
        //console.log("iii", item.childNodes[0]);
        ten.replaceChild(tmp_name, ten.childNodes[0]);
        trangthai.replaceChild(tmp_status,trangthai.childNodes[0]);
        color(status, document.getElementById(`ind${tmp}`))
       
    },
    delete: function(){
        var r = document.getElementById(`ind${tmp}`);
        r.remove();
    }
}