// Function to fetch faculties
async function fetchFaculties() {
  const response = await fetch('https://mytsuclassroom.my.id/api/faculty/');
  const facultiesData = await response.json();
  return facultiesData;
}

// Function to fetch groups for a specific faculty
async function fetchGroups(facultyId) {
  const response = await fetch(`https://mytsuclassroom.my.id/api/faculty/${facultyId}`);
  const groupsData = await response.json();
  return groupsData;
}

// Function to populate the table
async function populateTable() {
  let groupTable = document.getElementById("groupBody");
  let groupMain = document.getElementById("groupMain");
  let i = 1;

  // Fetch faculties
  const faculties = await fetchFaculties();

  for (const faculty of faculties) {
    const facultyId = faculty._id;
    const groupsData = await fetchGroups(facultyId);

    for (const direction of groupsData) {
      for (const group of direction.group) {
        let newRow = document.createElement("tr");
        newRow.id = group._id;

        let noCol = document.createElement("td");
        noCol.textContent = i;

        let groupCol = document.createElement("td");
        groupCol.textContent = group.groupCode;

        let actionCol = document.createElement("td");
        let actionDiv = document.createElement("div");
        actionDiv.classList.add("flex", "gap-[6px]");

        let imgEdit = document.createElement("img");
        let imgDelete = document.createElement("img");
        imgEdit.src = "../../assets/icon/bx_edit.svg";
        imgDelete.src = "../../assets/icon/delete.svg";

        let modalEditBtn = document.createElement("button");
        modalEditBtn.setAttribute("data-toggle", "modal");
        let id_edit = "#edit_group_" + group._id;
        modalEditBtn.setAttribute("data-target", id_edit);

        let modalDeleteBtn = document.createElement("button");
        modalDeleteBtn.setAttribute("data-toggle", "modal");
        let id_delete = "#delete_group_" + group._id;
        modalDeleteBtn.setAttribute("data-target", id_delete);

        modalEditBtn.appendChild(imgEdit);
        modalDeleteBtn.appendChild(imgDelete);

        actionDiv.appendChild(modalEditBtn);
        actionDiv.appendChild(modalDeleteBtn);
        actionCol.appendChild(actionDiv);

        newRow.appendChild(noCol);
        newRow.appendChild(groupCol);
        newRow.appendChild(actionCol);
        groupTable.appendChild(newRow);

        i += 1;

        let modalEdit = document.createElement("div");
  modalEdit.innerHTML = `
    <div class="modal fade" id="edit_group_${group["_id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_deny_${group["_id"]}" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-body">
            <div>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="mt-8">
                <span class="modal-title text-[24px] border-b-4 border-[#2D85C5] pb-2 font-bold" id="exampleModalLabel">Edit Group</span>    
                <div class="mt-4">
                    <form> 
                        <div class=" mb-3">
                            <label class="font-bold">Group</label> <br/>
                            <input class="w-100 border rounded p-2 border-[#2D85C5]" type="text" placeholder="${group["name"]}" />
                        </div>
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
     <div class="modal fade" id="delete_group_${group["_id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_delete_${group["_id"]}" aria-hidden="true">
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
  groupMain.appendChild(modalDelete);
  groupMain.appendChild(modalEdit);
      }
    }
  }
}

// Call the function to populate the table
populateTable();
