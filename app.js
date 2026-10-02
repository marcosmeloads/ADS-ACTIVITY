    const Veiculos = [];

    const app = document.querySelector("#app");
    const botoesMenu = document.querySelectorAll("nav button");

    function marcarMenuAtivo(rota) {
      botoesMenu.forEach(botao => {
        botao.classList.toggle("ativo", botao.dataset.rota === rota);
      });
    }

    function irPara(rota) {
      marcarMenuAtivo(rota);

      if (rota === "inicio") mostrarInicio();
      if (rota === "catalogo") mostrarcatalogo();
      if (rota === "simulação") mostrarsimulação();
      if (rota === "Avaliar") mostrarAvaliar();
      if (rota === "Feedbacks") mostrarFeedbacks();
    }

    function mostrarInicio() {
      app.innerHTML = `
        <h1>PRIME MOTORS</h1>
        <p>
          Há 40 anos Realizando Sonho e Transformando Vidas
        </p>

        <div class="contador">
          Veiculos Vendidos: <strong>${avaliacoes.length}</strong>
        </div>

        <div class="acoes">
          <button class="botao" id="btnsimulação">simulação de Veiculo</button>
          <button class="botao secundario" id="btnVercatalogo">Ver Catalogo</button>
        </div>

        <div class="imagens">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvezwO7jXModzsi8J0MeKccT0u_XQZrLYdi1sydczXmA&s=10">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2CFk7TeduPbdnGZmuKc5fdS3TW6d74ldNDoYXwgIJg&s=10">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1y2DMcNfoddgvA1bX5KkXf0qrNzWW-mJ6l8XFjteU4A&s=10">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGUk5MkDKq6xsWlOoYqM00_x6OHqYKMegH2WDKKVbTQ&s=10">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4uzRLD1WCO8eheWR6S72fYpPyuBP5Gi_AKPiLt26cTg&s=10">
    

      `;

      document.querySelector("#btnsimulação")
        .addEventListener("click", () => irPara("simulação"));

      document.querySelector("#btnVercatalogo")
        .addEventListener("click", () => irPara("catalogo"));
    }

    function mostrarcatalogo() {
      app.innerHTML = `
        <h1>Catalogo de Veiculos</h1>
        <p>Segue abaixo a Lista Contendo todos os Veiculos Disponiveis em Estoque.</p>
     <div class="catalogo">

  <div class="card-carro">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2AcVBqf1BoNK5wul4wt1eN1VWenIUgKWvMcL7Y1gAQ&s=10" alt="Honda Civic">

    <div class="info-carro">
      <h2>Honda Civic</h2>
      <p>2022 • Automático • 45.000 km</p>
      <h3>R$ 125.000</h3>
    </div>
  </div>


  <div class="card-carro">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFS49naWuV2imDx5vvbWrwuzsZ7vitZgK0WRyHvOBXCQ&s=10" alt="Toyota Corolla">

    <div class="info-carro">
      <h2>Toyota Corolla</h2>
      <p>2023 • Automático • 32.000 km</p>
      <h3>R$ 135.000</h3>
    </div>
  </div>


  <div class="card-carro">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyLAnWfO-WNf8GbhGx5KVmI0mmtNkYJfWQXHdwv2JDw&s=10" alt="BMW 320i">

    <div class="info-carro">
      <h2>BMW 320i</h2>
      <p>2020 • Automático • 27.000 km</p>
      <h3>R$ 200.000</h3>
    </div>
  </div>


  <div class="card-carro">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR15Wt5uXknefGGoVTDwrmQn1F036ZL1GR4SJH4cLzHTA&s" alt="Volkswagen Nivus">

    <div class="info-carro">
      <h2>VOLKSWAGEN NIVUS</h2>
      <p>2023 • Automático • 25.000 km</p>
      <h3>R$ 115.000</h3>
    </div>
  </div>

</div>
      `;
    }

    function mostrarsimulação() {
      app.innerHTML = `
        <h1>Simulação de Compra </h1>

        <form id="formSimulação">
          <div class="campo">
            <label for="Carro">Selecione seu Veiculo</label>
            <select id="Carro"required>
                <option value="">selecione</options>
                <option value="125000">Honda Civic - R$ 125.000</option>
                <option value="135000">Toyota Corolla - R$ 135.000</option>  
                <option value="200000">BMW 320I - R$ 200.000</option>  
                <option value="115000">Volkswagen Nivus - R$ 115.000</option>
            </select>
          </div>

          <div class="campo">
              <label for="entrada">Valor da Entrada</label>
              <input id="entrada" type="number" min="0" required>
          </div>

          <div class="campo">
              <label for="parcelas">Número de Parcelas</label>
              <select id="Parcelas" required>
                  <option value="">Selecione</options>
                  <option value="12">12X</options>
                  <option value="24">24X</options>
                  <option value="36">36X</options>
                  <option value="48">48X</options>
                  <option value="60">60X</options>
              </select>
          </div>
          
          <button type="submit">Realizar Simulação</button>

      </forms>

      <div id="Resultado"></div>
      `;

      document
        .getElementById("formSimulação")
        .addEventListener("submit", function(event) {

          event.preventDefault();

          const valorCarro =
            Number(document.getElementById("Carro").value);

          const entrada =
            Number(document.getElementById("entrada").value);

          const parcelas =
            Number(document.getElementById("Parcelas").value);

          const juros = 0.015;

          const valorFinanciado =
            valorCarro - entrada;

          const valorParcela =
            valorFinanciado *
            (juros * Math.pow(1 + juros, parcelas)) /
            (Math.pow(1 + juros, parcelas) - 1);

          const totalFinanciado =
            valorParcela * parcelas;

          const totalPago =
            entrada + totalFinanciado;


          document.getElementById("Resultado").innerHTML = `

            <h2>Resultado da Simulação</h2>

            <p>Valor do veículo:R$ ${valorCarro.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</p>

            <p>Entrada:R$ ${entrada.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</p>

            <p>Valor financiado:R$ ${valorFinanciado.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</p>

            <p>Juros: 1,5% ao mês</p>

            <p>Número de parcelas: ${parcelas}x</p>

            <h3>${parcelas} parcelas deR$ ${valorParcela.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</h3>

            <p>Total do financiamento:R$ ${totalFinanciado.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</p>

            <p>Total pago pelo veículo:R$ ${totalPago.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</p>
          `;
        });
    } 

    let avaliacoes = [];

    function mostrarAvaliar() {
      app.innerHTML = `
      <h1>Avaliar Experiência</h1>
      <p>Nos Conte como Foi sua Experiência de Compra e Atendimento na Prime Motors.</p>
       
      <form id="formAvaliar">
          <div class="campo">
            <label for="Vendedor">Vendedor</label>
            <input id="Vendedor" type="text" placeholder="Informe o Nome do Vendedor que o Atendeu" required />
          </div>

          <div class="campo">
            <label for="Data">Data</label>
            <input id="Data" type="date" placeholder="Digite a Data da Compra" required />
          </div>

          <div class="campo">
            <label for="Comentario">Comentário</label>
            <input id="Comentario" type="text" placeholder="Relate sua Experiência sobre a Compra" required />
          </div>
        
          <button class="botao" type="submit">Confirmar</button>
          
          <div id="mensagem"></div>
        
        </form>
      
      `;
        document.querySelector("#formAvaliar").addEventListener("submit", function(event) {

    event.preventDefault();

    const vendedor = document.querySelector("#Vendedor").value;
    const data = document.querySelector("#Data").value;
    const comentario = document.querySelector("#Comentario").value;

    avaliacoes.push({
      vendedor: vendedor,
      data: data,
      comentario: comentario
    });

    document.querySelector("#mensagem").innerHTML =
      "Avaliação enviada com sucesso!";

    this.reset();

    });
  }

    function renderizarTabela() {
      const conteudo = document.querySelector("#conteudoAvaliar");
 
      if (avaliacoes.length === 0) {
        conteudo.innerHTML = `
          <div class="vazio">
            Nenhuma avaliação cadastrada ainda.
          </div>
        `;

        return;
      }
      let linhas = "";
      avaliacoes.forEach((avaliacao, indice) => {
        linhas += `
          <div class="feedback">
            <h2>Experiência de Compra</h2>
            <p> ${avaliacao.comentario} </p>
            <strong> Vendedor: ${avaliacao.vendedor} </strong>
            <p> Data: ${avaliacao.data} </p>
          </div>
        `;
      });

      conteudo.innerHTML = linhas;
    }

    function mostrarFeedbacks() {
      app.innerHTML = `
        <h1>Feedbacks de nossos Clientes</h1>

    <div class="feedbacks" id="listaFeedbacks"></div>
  `;

  const lista = document.querySelector("#listaFeedbacks");

  if (avaliacoes.length === 0) {

    lista.innerHTML = `
      <div class="vazio">
        Nenhuma avaliação cadastrada ainda.
      </div>
    `;

    return;
  }

  avaliacoes.forEach(avaliacao => {

    lista.innerHTML += `
      <div class="feedback">

        <h2>Experiência de Compra</h2>

        <strong>Vendedor: ${avaliacao.vendedor}</strong>

        <p>Data: ${avaliacao.data}</p>

        <p>${avaliacao.comentario}</p>

      </div>
    `;

  });
    }

    botoesMenu.forEach(botao => {
      botao.addEventListener("click", () => {
        irPara(botao.dataset.rota);
      });
    });

    mostrarInicio();