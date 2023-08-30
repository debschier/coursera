document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou fazer outras operações.
    // Por enquanto, apenas exibiremos os dados no console.
    console.log('Novo usuário cadastrado:');
    console.log('Nome de Usuário:', username);
    console.log('E-mail:', email);
  });
  
  document.getElementById('login-button').addEventListener('click', function() {
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
  
    // Aqui você pode adicionar a lógica para verificar as credenciais e realizar o login.
    // Por enquanto, apenas exibiremos os dados no console.
    console.log('Tentativa de login:');
    console.log('E-mail:', loginEmail);
  });

  ////////////////////////////////