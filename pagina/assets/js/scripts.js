
document.getElementById('comboCidades').onchange = function () {
    var comboCidades = document.getElementById('comboCidades')
    console.log('O indice é: ' + comboCidades.selectedIndex)
    console.log(
        'O texto é: ' + comboCidades.options[comboCidades.selectedIndex].text
    )
    console.log(
        'A chave é: ' + comboCidades.options[comboCidades.selectedIndex].value
    )
}

const pesquisarDados = async () => {
    const url = 'http://rtiinformatica.dev.br:3000/table'

    const containerEl = document.querySelector('.cards')

    await fetch(url).then(resp =>
        resp.json().then(function (myJson) {
            const data = myJson.data

            let outputs = ''
            data.forEach(item => {
                outputs +=
                    '<div class="card">' +
                    '<div class="image">' +
                    '<img src="assets/img/violet-background.jpg" />' +
                    '</div>' +
                    '<div class="content">' +
                    '<img src="' +
                    item.imagem +
                    '" class="brasao"/>' +
                    '</div>' +
                    '<div class="info">' +
                    '<p class="price text--medium">' +
                    item.cidade +
                    '</p>' +
                    '</div>' +
                    '<p class="titles">' +
                    'Casos: ' +
                    item.casos +
                    '<br>' +
                    'Confirmados: ' +
                    item.confirmados +
                    '<br>' +
                    'Em análise: ' +
                    item.analise +
                    '<br>' +
                    'Óbitos: ' +
                    item.obitos +
                    '</p>' +
                    '</div>' +
                    '</div>'
            })

            containerEl.innerHTML = outputs
        })
    )
}

pesquisarDados()
