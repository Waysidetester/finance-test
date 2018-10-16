const baseUrl = "https://api.iextrading.com/1.0";

let ticker = "";


$("#ticker").on("keyup", (e) => {
if (e.keyCode === 13) {
    ticker = $("#ticker").val();
    $.get(`${baseUrl}/stock/${ticker}/company`)
    .done((data) => {
        console.log(data);
        let newString = "";
        newString += `<p>${data.symbol}</p>`;
        newString += `<p>${data.CEO}</p>`;
        newString += `<p>${data.companyName}</p>`;
        newString += `<p>${data.description}</p>`;
        newString += `<p>${data.exchange}</p>`;
        newString += `<p>${data.industry}</p>`;
        newString += `<p>${data.issueType}</p>`;
        newString += `<p>${data.sector}</p>`;
        newString += `<p>${data.tags}</p>`;
        newString += `<p>${data.website}</p>`;
        $("#printHere").html(`<p>${newString}</p>`);
    })
    .fail((error) => {
        console.error("error");
    });
}
})
