const button = document.getElementById('try');
const loading = document.getElementById('loading');
const water = document.getElementById('water');
const land = document.getElementById('land');


function loadingOpen() {
    loading.style.display = 'block';
    water.style.display = 'none';
    land.style.display = 'none';
}

function loadingClose() {
    loading.style.display = 'none';
}

const http = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            loadingOpen();
            xhr.onload = function () {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                    loadingClose();
                } else {
                    let error = new Error(this.statusText);
                    reject(error);
                    loadingClose();
                }
            };
            xhr.send();
        });
    }
};


button.onclick = function () {
    let latitude = parseInt(document.getElementById('latitude').value);
    let longitude = parseInt(document.getElementById('longitude').value);
    let apiUrl = `https://api.onwater.io/api/v1/results/${latitude},${longitude}`;
    let response = http.get(apiUrl);
    response.then(function (res) {
        if (res.water === true) {
            water.style.display = 'block';
            land.style.display = 'none';
            console.log(res);
        } else {
            water.style.display = 'none';
            land.style.display = 'block';
        }
    }).catch((e) => {
        alert('error: ', e);
    });
};