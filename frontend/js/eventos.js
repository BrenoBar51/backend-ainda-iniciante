function remover(id){
    document.getElementById('excluir_id').innerHTML = id;
}

function excluir() {
    let id = document.getElementById('excluir_id').innerHTML;

    fetch (`http://localhost:8000/disciplinas/${id}`, {
        method: 'DELETE'
    });

    alert('Pronto');

    location.href="";
}

function editar(){
    //adicionando o id ao formulario de editar (campo oculto)
    document.getElementById('disciplinas_id').value = id;

    fetch(`http://localhost:8000/disciplinas/${id}`)
        .then(res => res.json())
        .then(dados => {
            //preeencher form 
            document.getElementById('nome').value = dados.nome;
            document.getElementById('carga_horaria').value = dados.carga_horaria;
        })
}

function atualizar(){
    let id = document.getElementById('disciplinas_id').value;

    fetch(`http://localhost:8000/disciplinas/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
            nome: document.getElementById('nome').value,
            carga_horaria: document.getElementById('carga_horaria').value
        })
    })
}

fetch('http://localhost:8000/disciplinas')
  .then((res) => res.json())
  .then(dados => {
    dados.map(cada => {
        document.getElementById('table_disciplinas').innerHTML += `
            <tr>
                <td>${cada.id}</td>
                <td>${cada.nome}</td>
                <td>${cada.carga_horaria}</td>
                <td>
                    <button>Editar</button>
                    <button class="btn btn-danger" onclick="remover(${cada.id})">Excluir</button>
                </td>
            </tr>
        `;
    })
  });