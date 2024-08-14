document.getElementById('searchBtn').addEventListener('click', function() {
    const ip = document.getElementById('ipInput').value;
    const token = '3cf491f0873ce6';  

    if (ip) {
        fetch(`https://ipinfo.io/${ip}/json?token=${token}`)
            .then(response => response.json())
            .then(data => {
                const ipList = document.getElementById('ipList');
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${data.ip}</td>
                    <td>${data.city}</td>
                    <td>${data.region}</td>
                    <td>${data.country}</td>
                    <td>${data.org}</td>
                    <td>${data.loc}</td>
                    <td>${data.timezone}</td>
                    <td><button class="remove-btn">x</button></td>
                `;

                
                row.querySelector('.remove-btn').addEventListener('click', function() {
                    row.remove();
                });

                ipList.appendChild(row);
            })
            .catch(error => console.error('Erro ao buscar as informações do IP:', error));
    }
});
