async function buttonLoadData_Click() {
    let response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");

    if (response.ok) {
        let json = await response.json();

        let usd = parseFloat(json.Valute.USD.Value);

        document.getElementById("view-data").innerText = usd.toString();
    }
}

async function buttonLoadData2_Click() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (response.ok) {
        let posts = await response.json();

        let html = "";

        posts.forEach(post => {
           html+=`<p>id = ${post.id}</p>`;
           html+=`<p>title = ${post.title}</p>`;
           html+="<hr>";
        });

        document.getElementById("view-data").innerHTML = html;
    }
}