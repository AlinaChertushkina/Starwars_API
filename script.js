const select = document.getElementById("options");
const input = document.getElementById("inputNumber");
const result = document.getElementById("result");
const error = document.getElementById("error");
const button = document.getElementById("button");

function sendData() {
    const entity = select.value;
    const id = input.value;

    if (id < 1 || id > 10) {
        error.textContent = "Идентификатор должен быть от 1 до 10";
        result.textContent = "";
        return;
    }

    fetch(`https://swapi.dev/api/${entity}/${id}/`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response.status);
            }
        })
        .then((data) => {
            result.textContent = JSON.stringify(data);
            error.textContent = "";
            select.selectedIndex = 0;
            input.value = "";
        })
        .catch((error) => {
            error.textContent = `Ошибка ${error}: Сервер не доступен`;
            result.textContent = "";
        });
}

button.addEventListener("click", sendData);



