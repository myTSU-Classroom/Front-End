education_data = [
  {
    id: 1,
    direction: "Education Direction 1",
    group: ["972005", "972006", "972002"],
  },
  {
    id: 2,
    direction: "Education Direction 2",
    group: ["972005", "972006", "972002"],
  },
  {
    id: 3,
    direction: "Education Direction 3",
    group: ["972005", "972006", "972002"],
  },
];

let educationTable = document.getElementById("educationBody");
let eduMain = document.getElementById("eduMain");
let i = 1;
education_data.forEach((edu) => {
  let newRow = document.createElement("tr");
  newRow.id = edu["id"];

  let noCol = document.createElement("td");
  noCol.textContent = i;

  let directionCol = document.createElement("td");
  directionCol.textContent = edu["direction"];

  let groupString = "";
  edu["group"].forEach((group, i) => {
    groupString += group;
    if (i != edu["group"].length - 1) {
      groupString += ", ";
    }
  });

  let groupCol = document.createElement("td");
  groupCol.textContent = groupString;

  let actionCol = document.createElement("td");
  let actionDiv = document.createElement("div");
  actionDiv.classList.add("flex", "gap-[6px]");

  let imgEdit = document.createElement("img");
  let imgDelete = document.createElement("img");
  imgEdit.src = "./assets/icon/bx_edit.png";
  imgDelete.src = "./assets/icon/delete.png";

  let modalEditBtn = document.createElement("button");
  modalEditBtn.setAttribute("data-toggle", "modal");
  let id_edit = "#edit_edu_" + edu["id"];
  modalEditBtn.setAttribute("data-target", id_edit);

  let modalDeleteBtn = document.createElement("button");
  modalDeleteBtn.setAttribute("data-toggle", "modal");
  let id_delete = "#delete_group_" + edu["id"];
  modalDeleteBtn.setAttribute("data-target", id_delete);

  modalEditBtn.appendChild(imgEdit);
  modalDeleteBtn.appendChild(imgDelete);

  actionDiv.appendChild(modalEditBtn);
  actionDiv.appendChild(modalDeleteBtn);
  actionCol.appendChild(actionDiv);

  newRow.appendChild(noCol);
  newRow.appendChild(directionCol);
  newRow.appendChild(groupCol);
  newRow.appendChild(actionCol);
  educationTable.appendChild(newRow);
  i += 1;

  let modalEdit = document.createElement("div");
  modalEdit.innerHTML = `
    <div class="modal fade" id="edit_edu_${edu["id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_deny_${edu["id"]}" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-body">
            <div>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="mt-8">
                <span class="modal-title text-[24px] border-b-4 border-[#2D85C5] pb-2 font-bold" id="exampleModalLabel">Edit Education Direction</span>    
                <div class="mt-4">
                    <form> 
                        <div class=" mb-3">
                            <label class="font-bold">Education Direction</label> <br/>
                            <input class="w-100 border rounded p-2 border-[#2D85C5]" type="text" placeholder="${edu["direction"]}" />
                        </div>
                        <div class=" mb-3">
                            <label class="font-bold ">Groups</label> <br/>
                            <input class="w-100 border rounded p-2 border-[#2D85C5]" type="text" placeholder="${edu["group"]}" />
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
     <div class="modal fade" id="delete_group_${edu["id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_delete_${edu["id"]}" aria-hidden="true">
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
  eduMain.appendChild(modalDelete);
  eduMain.appendChild(modalEdit);
});
