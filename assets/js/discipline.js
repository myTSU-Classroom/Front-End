data = [
    {
      id: 1,
      name: "Software Development Process",
      desc: "Lorem ipsum dolor sit amet",
      literature: "Lorem ipsum dolor sit amet",
      teacher: "James Smith",
      year: "2023",
      grade: "5",
      schedule: "online",
      building: "Science Tower",
      room: "4B",
    },
    {
      id: 2,
      name: "Front-end Development",
      desc: "Lorem ipsum dolor sit amet",
      literature: "Lorem ipsum dolor sit amet",
      teacher: "James Smith",
      year: "2023",
      grade: "5",
      schedule: "online",
      building: "Science Tower",
      room: "4B",
    },
    {
      id: 3,
      name: "Back-end Development",
      desc: "Lorem ipsum dolor sit amet",
      literature: "Lorem ipsum dolor sit amet",
      teacher: "James Smith",
      year: "2023",
      grade: "5",
      schedule: "online",
      building: "Science Tower",
      room: "4B",
    },
  ];
  
  let discTable = document.getElementById("disciplineBody");
  let discMain = document.getElementById("disciplineMain");
  let i = 1;
  
  data.forEach((disc) => {
    let newRow = document.createElement("tr");
    newRow.id = disc["id"];
  
    let noCol = document.createElement("td");
    noCol.textContent = i;
  
    let discCol = document.createElement("td");
    discCol.textContent = disc["name"];
  
    let actionCol = document.createElement("td");
    let actionDiv = document.createElement("div");
    actionDiv.classList.add("flex", "gap-[6px]");
  
    let imgEdit = document.createElement("img");
    let imgDelete = document.createElement("img");
    imgEdit.src = "./assets/icon/bx_edit.png";
    imgDelete.src = "./assets/icon/delete.png";
  
    let modalEditBtn = document.createElement("button");
    modalEditBtn.setAttribute("data-toggle", "modal");
    let id_edit = "#edit_disc_" + disc["id"];
    modalEditBtn.setAttribute("data-target", id_edit);
  
    let modalDeleteBtn = document.createElement("button");
    modalDeleteBtn.setAttribute("data-toggle", "modal");
    let id_delete = "#delete_disc_" + disc["id"];
    modalDeleteBtn.setAttribute("data-target", id_delete);
  
    modalEditBtn.appendChild(imgEdit);
    modalDeleteBtn.appendChild(imgDelete);
  
    actionDiv.appendChild(modalEditBtn);
    actionDiv.appendChild(modalDeleteBtn);
    actionCol.appendChild(actionDiv);
  
    newRow.appendChild(noCol);
    newRow.appendChild(discCol);
    newRow.appendChild(actionCol);
    discTable.appendChild(newRow);
    i += 1;
  
    let modalEdit = document.createElement("div");
    modalEdit.innerHTML = `
      <div class="modal fade" id="edit_disc_${disc["id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_deny_${disc["id"]}" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
              <div class="modal-body">
              <div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="mt-8">
                  <span class="modal-title text-[24px] border-b-4 border-[#2D85C5] pb-2 font-bold" id="exampleModalLabel">Edit Discipline</span>    
                  <div class="mt-4">
                      <form>
                            <div class=" mb-3">
                              <label class="font-bold">Name</label> <br />
                              <input class="w-100 border rounded p-2 border-[#2D85C5]" type="text" placeholder="${disc["name"]}" />
                            </div>
                            <div>
                              <label class="font-bold">Description</label>
                              <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                                  <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                    <div class="flex items-center space-x-1 sm:pr-4">
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                            d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                        </svg>
                                        <span class="sr-only">Attach file</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 16 20">
                                          <path
                                            d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                        </svg>
                                        <span class="sr-only">Embed map</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 16 20">
                                          <path
                                            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                        </svg>
                                        <span class="sr-only">Upload image</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 16 20">
                                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                          <path
                                            d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                                        </svg>
                                        <span class="sr-only">Format code</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 20 20">
                                          <path
                                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                                        </svg>
                                        <span class="sr-only">Add emoji</span>
                                      </button>
                                    </div>
                                    <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4" />
                                        </svg>
                                        <span class="sr-only">Add list</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 20 20">
                                          <path
                                            d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                                        </svg>
                                        <span class="sr-only">Settings</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 20 20">
                                          <path
                                            d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                                          <path
                                            d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                                        </svg>
                                        <span class="sr-only">Timeline</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 20 20">
                                          <path
                                            d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                          <path
                                            d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span class="sr-only">Download</span>
                                      </button>
                                    </div>
                                  </div>
                                  <button type="button" data-tooltip-target="tooltip-fullscreen"
                                    class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5" />
                                    </svg>
                                    <span class="sr-only">Full screen</span>
                                  </button>
                                  <div id="tooltip-fullscreen" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Show full screen
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                  </div>
                                </div>
                                <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                                  <label for="editor" class="sr-only">Publish post</label>
                                  <textarea id="description" name="description" rows="8"
                                    class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                    placeholder="${disc["desc"]}" required></textarea>
                                </div>
                              </div>
                            </div>
  
                            <div>
                              <label class="font-bold">Readings and Literature</label>
                              <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                                  <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                    <div class="flex items-center space-x-1 sm:pr-4">
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                            d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                        </svg>
                                        <span class="sr-only">Attach file</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 16 20">
                                          <path
                                            d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                        </svg>
                                        <span class="sr-only">Embed map</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 16 20">
                                          <path
                                            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                        </svg>
                                        <span class="sr-only">Upload image</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 16 20">
                                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                          <path
                                            d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                                        </svg>
                                        <span class="sr-only">Format code</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 20 20">
                                          <path
                                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                                        </svg>
                                        <span class="sr-only">Add emoji</span>
                                      </button>
                                    </div>
                                    <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4" />
                                        </svg>
                                        <span class="sr-only">Add list</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 20 20">
                                          <path
                                            d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                                        </svg>
                                        <span class="sr-only">Settings</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 20 20">
                                          <path
                                            d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                                          <path
                                            d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                                        </svg>
                                        <span class="sr-only">Timeline</span>
                                      </button>
                                      <button type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          viewBox="0 0 20 20">
                                          <path
                                            d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                          <path
                                            d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span class="sr-only">Download</span>
                                      </button>
                                    </div>
                                  </div>
                                  <button type="button" data-tooltip-target="tooltip-fullscreen"
                                    class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5" />
                                    </svg>
                                    <span class="sr-only">Full screen</span>
                                  </button>
                                  <div id="tooltip-fullscreen" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Show full screen
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                  </div>
                                </div>
                                <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                                  <label for="editor" class="sr-only">Publish post</label>
                                  <textarea id="literature" name="literature" rows="8"
                                    class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                    placeholder=${disc["literature"]}" required></textarea>
                                </div>
                              </div>
                            </div>
  
  
                            <div class=" mb-3">
                              <label class="font-bold">Teacher</label> <br />
                              <select name="teacher" class="w-full border rounded p-2 border-[#2D85C5]">
                                <option  selected>${disc["teacher"]}</option>
                                <option value="John">John</option>
                                <option value="Smith">Smith</option>
                                <option value="Jack">Jack</option>
                              </select>
                            </div>
  
                            <div class=" mb-3">
                              <label class="font-bold">Year</label> <br />
                              <select name="teacher" class="w-full border rounded p-2 border-[#2D85C5]">
                                <option selected>${disc["year"]}</option>
                                <option value="2020">2020</option>
                                <option value="2022">2021</option>
                                <option value="2022">2022</option>
                              </select>
                            </div>
  
                            <div class=" mb-3">
                              <label class="font-bold">Grade</label> <br />
                              <select name="teacher" class="w-full border rounded p-2 border-[#2D85C5]">
                                <option selected>${disc["grade"]}</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="7">7</option>
                              </select>
                            </div>
  
                            <div class="flex items-center mb-3">
                              <input checked id="online_radio" type="radio" value="" name="default-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                              <label for="online_radio" class="ml-2 mb-0 text-sm text-gray-900 dark:text-gray-300">Online</label>
                            </div>
  
                            <div class="flex items-center mb-4">
                              <input id="offline_radio" type="radio" value="" name="default-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                              <label for="offline_radio" class="ml-2 mb-0 text-sm text-gray-900 dark:text-gray-300">Offine</label>
                            </div>
                            
                            <div id="buildingRoom" class="hidden ml-3">
                              <div class=" mb-3">
                                <label class="font-bold">Building</label> <br />
                                <input class="w-100 border rounded p-2 border-[#2D85C5]" type="text" placeholder="${disc["building"]}" />
                              </div>
  
                              <div class=" mb-3">
                                <label class="font-bold">Room</label> <br />
                                <input class="w-100 border rounded p-2 border-[#2D85C5]" type="text" placeholder="${disc["room"]}" />
                              </div>
                            </div>
                            
                            <div class="flex justify-end gap-2 mt-8">
                              <button type="button" class="btn btn-edit-no" data-dismiss="modal">Cancel</button>
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
       <div class="modal fade" id="delete_disc_${disc["id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_delete_${disc["id"]}" aria-hidden="true">
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
    discMain.appendChild(modalDelete);
    discMain.appendChild(modalEdit);
  });
  
  let buildingRoom = document.getElementById("buildingRoom");
  let online = document.getElementById("online_radio");
  let offline = document.getElementById("offline_radio");
  
  offline.addEventListener("click", () => {
    buildingRoom.classList.remove("hidden");
  });
  
  online.addEventListener("click", () => {
    buildingRoom.classList.add("hidden");
  });