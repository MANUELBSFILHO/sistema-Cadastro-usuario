const users = [];

function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        const user = { username, password };
        users.push(user);

        document.getElementById("message").innerHTML = "Usuário cadastrado com sucesso!";
    } else {
        document.getElementById("message").innerHTML = "Por favor, preencha todos os campos.";
    }
}

function loginUser(event) {
    event.preventDefault();

    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);

    if (user) {
        document.getElementById("message").innerHTML = "Login bem-sucedido!";
    } else {
        document.getElementById("message").innerHTML = "Usuário ou senha incorretos.";
    }
}
