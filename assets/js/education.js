document.addEventListener('DOMContentLoaded', function() {
  var selectElement = document.querySelector('#facultySelect select');

  // Make a GET request to your API endpoint
  fetch('https://mytsuclassroom.my.id/api/faculty/')
      .then(response => response.json())
      .then(data => {
          // Iterate through the data and create option elements
          data.forEach(function(faculty) {
              var optionElement = document.createElement('option');
              optionElement.value = faculty._id; // Assuming 'id' is the property in your API response
              optionElement.textContent = faculty.faculty; // Assuming 'name' is the property in your API response
              selectElement.appendChild(optionElement);
          });
      })
      .catch(error => console.error('Error fetching data:', error));
});


document.addEventListener('DOMContentLoaded', function() {
  var selectElement = document.querySelector('#facultySelect select');
  var educationTable = document.getElementById("educationBody");
  var eduMain = document.getElementById("eduMain");

  selectElement.addEventListener('change', function() {
      var selectedFacultyId = this.value;

      // Clear the table before populating with new data
      educationTable.innerHTML = '';

      // Make a GET request to the API endpoint for the selected faculty
      fetch(`https://mytsuclassroom.my.id/api/faculty/${selectedFacultyId}`)
          .then(response => response.json())
          .then(data => {
              let edu = data; // Assuming data is the API response
              let i = 1;

              edu.forEach((edu) => {
                  let newRow = document.createElement("tr");
                  newRow.id = edu["_id"];

                  let noCol = document.createElement("td");
                  noCol.textContent = i;

                  let directionCol = document.createElement("td");
                  directionCol.textContent = edu["direction"];

                  let groupString = edu["group"].map(group => group.groupCode).join(", ");

                  let groupCol = document.createElement("td");
                  groupCol.textContent = groupString;

                  let actionCol = document.createElement("td");
                  let actionDiv = document.createElement("div");
                  actionDiv.classList.add("flex", "gap-[6px]");

                  let imgEdit = document.createElement("img");
                  let imgDelete = document.createElement("img");
                  imgEdit.src = "../../assets/icon/bx_edit.svg";
                  imgDelete.src = "../../assets/icon/delete.svg";

                  let modalEditBtn = document.createElement("button");
                  modalEditBtn.setAttribute("data-toggle", "modal");
                  let id_edit = "#edit_edu_" + edu["_id"];
                  modalEditBtn.setAttribute("data-target", id_edit);

                  let modalDeleteBtn = document.createElement("button");
                  modalDeleteBtn.setAttribute("data-toggle", "modal");
                  let id_delete = "#delete_group_" + edu["_id"];
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
                    <div class="modal fade" id="edit_edu_${edu["_id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_deny_${edu["_id"]}" aria-hidden="true">
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
                     <div class="modal fade" id="delete_group_${edu["_id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_delete_${edu["_id"]}" aria-hidden="true">
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
          })
          .catch(error => console.error('Error fetching data:', error));
  });
});
