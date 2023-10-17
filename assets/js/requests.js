data = [
  {
    id: 1,
    name: "Muhammad Rafi Hayla Arifa",
    birth_date: "30/1/2000",
    email: "rafihayla123@gmail.com",
    phone: "+79131234567",
    avatar: "./assets/img/profile.png",
    type: "Teacher",
    faculty: "Higher IT School (HITS)",
    direction: "Software Engineering",
    grade: "4th Year",
    approval: false,
  },
  {
    id: 2,
    name: "Muhammad Rafi Hayla Arifa",
    birth_date: "30/1/2000",
    email: "rafihayla123@gmail.com",
    phone: "+79131234567",
    avatar: "./assets/img/profile.png",
    type: "Teacher",
    faculty: "Higher IT School (HITS)",
    direction: "Software Engineering",
    grade: "4th Year",
    approval: true,
  },
  {
    id: 3,
    name: "Muhammad Rafi Hayla Arifa",
    birth_date: "30/1/2000",
    email: "rafihayla123@gmail.com",
    phone: "+79131234567",
    avatar: "./assets/img/profile.png",
    type: "Teacher",
    faculty: "Higher IT School (HITS)",
    direction: "Software Engineering",
    grade: "4th Year",
    approval: false,
  },
];

let tableBody = document.getElementById("requestBody");
let requestMain = document.getElementById("requestMain");
let index = 1;
data.forEach((acc) => {
  if (!acc["approval"]) {
    let newRow = document.createElement("tr");
    newRow.id = acc["id"];

    let id_detail = "#detail_" + acc["id"];

    let noCol = document.createElement("td");
    noCol.textContent = index;
    noCol.classList.add("px-5");
    let nameCol = document.createElement("td");
    nameCol.textContent = acc["name"];

    let birthCol = document.createElement("td");
    birthCol.textContent = acc["birth_date"];

    let emailCol = document.createElement("td");
    emailCol.textContent = acc["email"];

    let phoneCol = document.createElement("td");
    phoneCol.textContent = acc["phone"];

    let avatarCol = document.createElement("td");
    let imgCol = document.createElement("img");
    imgCol.classList.add("table-avatar");
    imgCol.src = acc["avatar"];
    avatarCol.appendChild(imgCol);

    let typeCol = document.createElement("td");
    typeCol.textContent = acc["type"];

    let actionCol = document.createElement("td");
    let actionDiv = document.createElement("div");
    actionDiv.classList.add("flex", "gap-[6px]");

    let imgAcc = document.createElement("img");
    let imgRej = document.createElement("img");
    imgAcc.src = "./assets/icon/accept.png";
    imgRej.src = "./assets/icon/reject.png";

    let modalAccBtn = document.createElement("button");
    modalAccBtn.setAttribute("data-toggle", "modal");
    let id_acc = "#Acc_" + acc["id"];
    modalAccBtn.setAttribute("data-target", id_acc);

    let modalDenyBtn = document.createElement("button");
    modalDenyBtn.setAttribute("data-toggle", "modal");
    let id_deny = "#Deny_" + acc["id"];
    modalDenyBtn.setAttribute("data-target", id_deny);

    modalAccBtn.appendChild(imgAcc);
    modalDenyBtn.appendChild(imgRej);

    actionDiv.appendChild(modalAccBtn);
    actionDiv.appendChild(modalDenyBtn);
    actionCol.appendChild(actionDiv);

    noCol.setAttribute("data-toggle", "modal");
    noCol.setAttribute("data-target", id_detail);

    nameCol.setAttribute("data-toggle", "modal");
    nameCol.setAttribute("data-target", id_detail);

    birthCol.setAttribute("data-toggle", "modal");
    birthCol.setAttribute("data-target", id_detail);

    emailCol.setAttribute("data-toggle", "modal");
    emailCol.setAttribute("data-target", id_detail);

    phoneCol.setAttribute("data-toggle", "modal");
    phoneCol.setAttribute("data-target", id_detail);

    avatarCol.setAttribute("data-toggle", "modal");
    avatarCol.setAttribute("data-target", id_detail);

    typeCol.setAttribute("data-toggle", "modal");
    typeCol.setAttribute("data-target", id_detail);

    newRow.appendChild(noCol);
    newRow.appendChild(nameCol);
    newRow.appendChild(birthCol);
    newRow.appendChild(emailCol);
    newRow.appendChild(phoneCol);
    newRow.appendChild(avatarCol);
    newRow.appendChild(typeCol);
    newRow.appendChild(actionCol);
    tableBody.appendChild(newRow);
    index += 1;

    // Modal
    let modalDenyDiv = document.createElement("div");
    modalDenyDiv.innerHTML = `
    <div class="modal fade" id="Deny_${acc["id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_deny_${acc["id"]}" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
             <div class="modal-header">
               
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p class="font-bold">Are you sure you want to deny this request? </p>
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

    let modalApproveDiv = document.createElement("div");
    modalApproveDiv.innerHTML = `
    <div class="modal fade" id="Acc_${acc["id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_${acc["id"]}" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
               
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p class="font-bold">Are you sure you want to approve this request? </p>
                <p>You won’t be able to undo this action</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-acc-no" data-dismiss="modal">No</button>
                <button type="button" class="btn btn-acc-yes">Yes</button>
            </div>
            </div>
        </div>
    </div>
    `;

    let detailModal = document.createElement("div");
    detailModal.innerHTML = `
    <div class="modal fade" id="detail_${acc["id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_${acc["id"]}" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p class="font-bold">Detail </p>
                <div class= "my-4">
                    <p>Faculty</p>
                    <p class="font-bold">${acc["faculty"]} </p>
                </div>
                <div class= "my-4">
                    <p>Direction</p>
                    <p class="font-bold">${acc["direction"]} </p>
                </div>

                
                <p>Grade</p>
                <p class="font-bold mb-2">${acc["grade"]} </p>
            </div>
            
            </div>
        </div>
    </div>
    `;
    requestMain.appendChild(detailModal);
    requestMain.appendChild(modalDenyDiv);
    requestMain.appendChild(modalApproveDiv);
  }
});
