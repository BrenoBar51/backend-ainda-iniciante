function remover(id) {
    if (false === confirm("Tem Certeza ?")) {
        return;
    }

    fetch (`http://localhost:8000/disciplinas/${id}`, {
        method: 'DELETE'
    });

    alert('Pronto');

    location.href="";
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
