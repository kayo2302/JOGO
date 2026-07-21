```javascript
// ===========================
// LOGIN SIMPLES
// ===========================

const form = document.querySelector(".login-box");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const usuario = document.querySelector('input[type="text"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    // Usuário padrão
    const user = "admin";
    const pass = "123456";

    if(usuario === user && senha === pass){

        localStorage.setItem("logado","true");
        localStorage.setItem("usuario",usuario);

        alert("✅ Login realizado com sucesso!");

        window.location.href="index.html";

    }else{

        alert("❌ Usuário ou senha incorretos.");

    }

});
```
