<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  emailjs.init("SEU_USER_ID");
  document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
      nome: this.nome.value,
      email: this.email.value,
      mensagem: this.mensagem.value,
      to_email: "leandromoba20@gmail.com"
    }).then(() => {
      alert("Email enviado com sucesso!");
      this.reset();
    }, (err) => {
      alert("Erro ao enviar email: " + err);
    });
  });
</script>