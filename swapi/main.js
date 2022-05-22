const getResidentsBtn = document.querySelector('button');

const logClick = () => {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res) => {
        const residents = res.data.results[0].residents;
        residents
        .forEach(resident => {
            axios.get(resident)
            .then(res => {
                let toAdd = document.createElement('h2');
                toAdd.textContent = res.data.name;
                document.querySelector('content').appendChild(toAdd);
            })
            .catch((err) => {
                console.log(err);
            });
        });
    })
    .catch((err) => {
        console.log(err);
    });
}

getResidentsBtn.addEventListener('click', logClick);
