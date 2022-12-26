// Seleção de elementos
const buscaForm = document.querySelector("#busca-form");
const buscaInput = document.querySelector("#busca-input");
const buscaList = document.querySelector("#busca-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

// Funções

const savebusca = (text) => {
  const busca = document.createElement("div");
  busca.classList.add("busca");

  const buscaTitle = document.createElement("h3");
  buscaTitle.innerText = text;
  busca.appendChild(buscaTitle);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-busca");
  editBtn.innerHTML = '<i class="fa-sharp fa-solid fa-pen-to-square">';
  busca.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-busca");
  deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-trash-can"></i>';
  busca.appendChild(deleteBtn);

  buscaList.appendChild(busca);

  buscaInput.value = "";
  buscaInput.focus();
};

const toggleForms = () => {
  editForm.classList.toggle("hide");
  buscaForm.classList.toggle("hide");
  buscaList.classList.toggle("hide");
};

const updatebusca = (text) => {
  const buscas = document.querySelectorAll(".busca");

  buscas.forEach((busca) => {
    let buscaTitle = busca.querySelector("h3");

    if (buscaTitle.innerText === oldInputValue) {
      buscaTitle.innerText = text;
    }
  });
};

// Eventos

buscaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = buscaInput.value;

  if (inputValue) {
    savebusca(inputValue);
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let buscaTitle;

  if (parentEl && parentEl.querySelector("h3")) {
    buscaTitle = parentEl.querySelector("h3").innerText || "";
  }

  if (targetEl.classList.contains("remove-busca")) {
    parentEl.remove();
  }

  if (targetEl.classList.contains("edit-busca")) {
    toggleForms();

    editInput.value = buscaTitle;
    oldInputValue = buscaTitle;
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updatebusca(editInputValue);
  }

  toggleForms();
});