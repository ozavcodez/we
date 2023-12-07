
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
         <button id='delete' class='text-white'  style='border-:; '><a href="userdata.html">Add</></button>
         <button id='delete' class='text-white' onclick=${view_record} style='border-:; '><a href="">Edit</></button>
         <button id='delete' class='text-white' onclick=${delete_record} style='border-:; '><a href="">Delete</></button>
        </td>`
        tbody += "</tr>";
    document.getElementById('result').innerHTML = tbody;
    }
    
  }
  const getusers = async () => {
    console.log("then I came")
    
        var user = JSON.parse(localStorage.getItem("formData"))
        console.log(user)
        data = user
        addNewRowsToTable()
        // console.log(data)
    
}
getusers()