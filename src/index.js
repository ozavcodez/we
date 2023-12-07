
var data = []
function addNewRowsToTable() {
    
    var tbody = "";
  
    for (var i in data){
        let id = data[i]._id    
        const mem = data[i].member==true?"Yes":"No"
        const view_record = "viewUser('"+id+"')"
        // table += "<tr>";
        tbody += "<tr class='divide-x-2 divide-y-2 divide-solid divide-slate-400/25'>"
        +"<td class='text-center border py-4'>" + data[i].fullName + "</td>"
        +"<td class='text-center border py-4'>" + data[i].email + "</td>"
        +"<td class='text-center border py-4'>" + mem + "</td>"
        +`<td class='text-center  bg-slate-500 py-4' style='justify-items: center;'>
         <button id='delete' class='text-white' onclick=${view_record} style='border-:; '><a href="memberInfo.html">Add</></button>
         <button id='delete' class='text-white' onclick=${view_record} style='border-:; '><a href="memberInfo.html">Edit</></button>
         <button id='delete' class='text-white' onclick=${view_record} style='border-:; '><a href="memberInfo.html">Delete</></button>
        </td>`
        tbody += "</tr>";
    document.getElementById('result').innerHTML = tbody;
    }
    
  }