data = [
  {
    id: 1,
    name: "Faculty 1",
    direction: [
      "Education Direction 1",
      "Education Direction 2",
      "Education Direction 3",
    ],
  },
  {
    id: 2,
    name: "Faculty 2",
    direction: ["Education Direction 1", "Education Direction 2"],
  },
  {
    id: 3,
    name: "Faculty 3",
    direction: ["Education Direction 1"],
  },
];

let facultyTable = document.getElementById("facultyBody");
let facultyMain = document.getElementById("facultyMain");
let index = 1;
data.forEach((fac) => {
  let newRow = document.createElement("tr");
  newRow.id = fac["id"];

  let noCol = document.createElement("td");
  noCol.textContent = index;

  let facCol = document.createElement("td");
  facCol.textContent = fac["name"];

  let directionString = "";
  fac["direction"].forEach((dir, i) => {
    directionString += dir;
    if (i != fac["direction"].length - 1) {
      directionString += ", ";
    }
  });

  let dirCol = document.createElement("td");
  dirCol.textContent = directionString;

  let actionCol = document.createElement("td");
  let actionDiv = document.createElement("div");
  actionDiv.classList.add("flex", "gap-[6px]");

  let imgEdit = document.createElement("img");
  let imgDelete = document.createElement("img");
  imgEdit.src = "./assets/icon/bx_edit.png";
  imgDelete.src = "./assets/icon/delete.png";

  let modalEditBtn = document.createElement("button");
  modalEditBtn.setAttribute("data-toggle", "modal");
  let id_edit = "#edit_" + fac["id"];
  modalEditBtn.setAttribute("data-target", id_edit);

  let modalDeleteBtn = document.createElement("button");
  modalDeleteBtn.setAttribute("data-toggle", "modal");
  let id_delete = "#delete_" + fac["id"];
  modalDeleteBtn.setAttribute("data-target", id_delete);

  modalEditBtn.appendChild(imgEdit);
  modalDeleteBtn.appendChild(imgDelete);

  actionDiv.appendChild(modalEditBtn);
  actionDiv.appendChild(modalDeleteBtn);
  actionCol.appendChild(actionDiv);

  newRow.appendChild(noCol);
  newRow.appendChild(facCol);
  newRow.appendChild(dirCol);
  newRow.appendChild(actionCol);
  facultyTable.appendChild(newRow);
  index += 1;

  let modalEdit = document.createElement("div");
  modalEdit.innerHTML = `
    <div class="modal fade" id="edit_${fac["id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_deny_${fac["id"]}" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-body">
            <div>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="mt-8">
                <span class="modal-title text-[24px] border-b-4 border-[#2D85C5] pb-2 font-bold" id="exampleModalLabel">Edit Faculty</span>    
                <div class="mt-4">
                    <form> 
                        <div class=" mb-3">
                            <label class="font-bold">Faculty</label> <br/>
                            <input class="w-100 border rounded p-2 border-[#2D85C5]" type="text" placeholder="${fac["name"]}" />
                        </div>
                        <div class=" mb-3">
                            <label class="font-bold ">Education Direction</label> <br/>
                            <input class="w-100 border rounded p-2 border-[#2D85C5]" type="text" placeholder="${fac["direction"]}" />
                        </div>
                        <div>
                        <div class="flex justify-end gap-2 mt-8">
                            <button type="button" class="btn btn-edit-no" data-dismiss="modal">No</button>
                            <button type="button" class="btn btn-edit-yes">Save Changes</button>
                        </div>
                        
                    </form>
                <div>
            </div>

                
            </div>
            
            </div>
        </div>
    </div>
    `;

  let modalDelete = document.createElement("div");
  modalDelete.innerHTML = `
     <div class="modal fade" id="delete_${fac["id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_delete_${fac["id"]}" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
             <div class="modal-header">
               
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p class="font-bold">Are you sure you want to remove this data? </p>
                <p>You won’t be able to undo this action</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-deny-no" data-dismiss="modal">No</button>
                <button type="button" class="btn btn-deny-yes">Yes</button>
            </div>
            </div>
        </div>
        </div>
  `;
  facultyMain.appendChild(modalDelete);
  facultyMain.appendChild(modalEdit);
});
