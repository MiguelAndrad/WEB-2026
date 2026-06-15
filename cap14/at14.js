
document.addEventListener("DOMContentLoaded", () => {

    const ESTADO_ORIGINAL = {
        nome: "João Silva",
        curso: "Curso: Técnico em Informática",
        foto: "imagens/perfil1.jpg",
        tema: "claro",
        tamanhoFonte: "16",
        mostrarBio: true,
        emailExibido: "E-mail: não informado",
        telefoneExibido: "Telefone: não informado"
    };


    let totalAcoes = 0;

   
    const sectionPerfil = document.getElementById("perfil");
    const fotoPerfil = document.getElementById("fotoPerfil");
    const nomePerfil = document.getElementById("nomePerfil");
    const cursoPerfil = document.getElementById("cursoPerfil");
    const biografiaPerfil = document.getElementById("biografiaPerfil");

  
    const temaSelect = document.getElementById("temaSelect");
    const fonteRange = document.getElementById("fonteRange");
    const valorFonte = document.getElementById("valorFonte");
    const mostrarBio = document.getElementById("mostrarBio");

   
    const emailInput = document.getElementById("emailInput");
    const telefoneInput = document.getElementById("telefoneInput");
    const btnAtualizarContato = document.getElementById("btnAtualizarContato");
    const emailExibido = document.getElementById("emailExibido");
    const telefoneExibido = document.getElementById("telefoneExibido");

    
    const contadorAcoes = document.getElementById("contadorAcoes");
    const ultimaAcao = document.getElementById("ultimaAcao");

  
    const btnAlterarNome = document.getElementById("btnAlterarNome");
    const btnAlterarCurso = document.getElementById("btnAlterarCurso");
    const btnAlterarFoto = document.getElementById("btnAlterarFoto");
    const btnDestacarPerfil = document.getElementById("btnDestacarPerfil");
    const btnRestaurar = document.getElementById("btnRestaurar");


   
    function registrarAcao(descricao) {
        totalAcoes++;
        contadorAcoes.textContent = totalAcoes;
        ultimaAcao.textContent = descricao;
    }




  
    btnAlterarNome.addEventListener("click", () => {
        nomePerfil.textContent = "Maria Oliveira";
        registrarAcao("Alteração de nome");
    });

   
    btnAlterarCurso.addEventListener("click", () => {
        cursoPerfil.textContent = "Curso: Análise e Desenvolvimento de Sistemas";
        registrarAcao("Alteração de curso");
    });

    
    btnAlterarFoto.addEventListener("click", () => {
        
        fotoPerfil.src = "imagens/perfil2.jpg"; 
        registrarAcao("Alteração de foto");
    });

    btnDestacarPerfil.addEventListener("click", () => {
        sectionPerfil.classList.add("perfil-destacado");
        registrarAcao("Destaque de perfil aplicado");
    });

  
    btnRestaurar.addEventListener("click", () => {
   
        nomePerfil.textContent = ESTADO_ORIGINAL.nome;
        cursoPerfil.textContent = ESTADO_ORIGINAL.curso;
        fotoPerfil.src = ESTADO_ORIGINAL.foto;
        sectionPerfil.classList.remove("perfil-destacado");

     
        document.body.className = ""; 
        temaSelect.value = ESTADO_ORIGINAL.tema;

        biografiaPerfil.style.fontSize = ESTADO_ORIGINAL.tamanhoFonte + "px";
        fonteRange.value = ESTADO_ORIGINAL.tamanhoFonte;
        valorFonte.textContent = ESTADO_ORIGINAL.tamanhoFonte + "px";

        biografiaPerfil.style.display = "block";
        mostrarBio.checked = ESTADO_ORIGINAL.mostrarBio;


        emailInput.value = "";
        telefoneInput.value = "";
        emailExibido.textContent = ESTADO_ORIGINAL.emailExibido;
        telefoneExibido.textContent = ESTADO_ORIGINAL.telefoneExibido;

        registrarAcao("Restauração do perfil");
    });


    temaSelect.addEventListener("change", (e) => {
        const temaEscolhido = e.target.value;

        document.body.classList.remove("tema-escuro", "tema-azul");


        if (temaEscolhido === "escuro") {
            document.body.classList.add("tema-escuro");
        } else if (temaEscolhido === "azul") {
            document.body.classList.add("tema-azul");
        }

        registrarAcao(`Alteração de tema para: ${temaEscolhido}`);
    });

    
    fonteRange.addEventListener("input", (e) => {
        const tamanho = e.target.value;
        valorFonte.textContent = `${tamanho}px`;
        biografiaPerfil.style.fontSize = `${tamanho}px`;
    });


    fonteRange.addEventListener("change", () => {
        registrarAcao("Controle de tamanho da fonte");
    });

    mostrarBio.addEventListener("change", (e) => {
        if (e.target.checked) {
            biografiaPerfil.style.display = "block";
            registrarAcao("Exibição da biografia");
        } else {
            biografiaPerfil.style.display = "none";
            registrarAcao("Ocultação da biografia");
        }
    });

    btnAtualizarContato.addEventListener("click", () => {
        const emailValor = emailInput.value.trim();
        const telefoneValor = telefoneInput.value.trim();


        if (emailValor === "" || telefoneValor === "") {
            alert("Por favor, preencha os campos de E-mail e Telefone antes de atualizar.");
            return;
        }

        
        emailExibido.textContent = `E-mail: ${emailValor}`;
        telefoneExibido.textContent = `Telefone: ${telefoneValor}`;

        registrarAcao("Atualização de contatos");
    });

});