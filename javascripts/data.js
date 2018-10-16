const baseUrl = "https://api.iextrading.com/1.0";

let ticker = "";


$("#ticker").on("keyup", (e) => {
if (e.keyCode === 13) {
    ticker = $("#ticker").val();
    $.get(`${baseUrl}/stock/${ticker}/batch?types=quote`)
    .done((data) => {
        console.log(data.quote.close);
    })
    .fail((error) => {
        console.error("error");
    });
}
})
