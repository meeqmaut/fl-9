const victimDataSource = (name) => {
    let victimsByName = {
        'John': {
            name: 'John',
            surname: 'Doe',
            age: '99',
            jobTitle: 'Victim'
        },
        'Jennifer': {
            name: 'Jennifer',
            surname: 'Nicker',
            age: '21',
            jobTitle: 'Artist'
        }
    };
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (victimsByName.hasOwnProperty(name)) {
                resolve(victimsByName[name]);
            } else {
                reject('unknown victim');
            }
        }, 1000);
    });
}

const crimeDataSource = (surname) => {
    return new Promise((resolve, reject) => {
        let crimeBySurname = {
            'Doe': {
                title: 'dank memes',
                place: '9gag'
            },
            'Nicker': {
                title: 'robbery',
                place: 'NYC'
            }
        };

        setTimeout(() => {
            if (crimeBySurname.hasOwnProperty(surname)) {
                resolve(crimeBySurname[surname]);
            } else {
                reject('unknown surname');
            }
        }, 500)
    })
}

const loadVictimData = (name) => new Promise(resolve => {
  victimDataSource(name)
    .then(victimData => {
      crimeDataSource(victimData.surname)
        .then(crimeData => {
          const {
            name,
            surname,
            jobTitle,
            age
          } = victimData;
          const { title, place } = crimeData;
          resolve(`${name} ${surname}(${jobTitle}, ${age}) sufered from ${title} in ${place}.`);
        })
    })
    .catch(msg => resolve(`Unhandled Promise rejection: ${msg}`));
});


loadVictimData('John').then(msg => console.log(msg));

loadVictimData('Jennifer').then(msg => console.log(msg));

loadVictimData('Jss').then(msg => console.log(msg));