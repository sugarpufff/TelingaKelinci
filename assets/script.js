function open_letter() {
    document.getElementsByClassName("letter-close")[0].style.display = 'none'
    document.getElementsByClassName("letter-open")[0].style.display = 'block'
}

// Import the data to customize and insert them into page
const fetchData = () => {
    fetch("../customize.json")
        .then(data => data.json())
        .then(data => {
            Object.keys(data).map(customData => {
                if (data[customData] !== "") {
                    document.getElementById(customData).innerText = data[customData];
                }
            });
        });
};

const resolveFetch = () => {
    return new Promise((resolve, reject) => {
        fetchData();
        resolve("Fetch done!");
    });
};

resolveFetch();