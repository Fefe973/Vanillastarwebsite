const recapPanier = $('#RecapPanier');
const listPanier = $("#ListPanier");
const recoverLinePanier = $('#recoverLinePanier');
const listPanierDelete = $("table >tbody > tr > td > img");
const linePanier = $("table >tbody > tr");
const contentLabels = $("#ListPanier > tr > td.Labels > p");
const contentQuantities = $("#ListPanier > tr > td.Quantity > p");
const contentPrices = $("#ListPanier > tr > td.Prices > p");
const userIdPanier = $('#UserIdPanier').html();
const supprPanierForm = $('#supprPanierForm');

supprPanierForm.append(`
<input type="hidden" name='UserIdSupprPanier' value= ${userIdPanier}>
<input type="submit" id='suprrPanier' value= 'supprimer le panier'>
`);



let numberLinePanier = listPanier.children('tr').length;
console.log(numberLinePanier);



for(let i = 0; i < numberLinePanier; i++){
    linePanier.addClass((i)=>{
        return "item-" + i
    })
    listPanierDelete.addClass((i)=>{
        return "item-" + i
    })
    contentLabels.addClass((i)=>{
        return "label-" + i
    })
    contentPrices.addClass((i)=>{
        return "price-" + i
    })
    
}




let totalPanierArray = [];
for(let i = 0; i < numberLinePanier; i++){
    let totalLinePanier = $(`.price-${i}`).html();
    let totalLinePanierInt = parseInt(totalLinePanier);
    totalPanierArray.push(totalLinePanierInt);   
}


let initialValue = 0;
let sumTotalPanier = totalPanierArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log("Somme totale du panier : " + sumTotalPanier);

$(".TotalPanierSomme > p").html(sumTotalPanier);

let historyLine = [];
let posHistoryLine = [];
let totalPanierArrayRemove = [];
let nbrDeleteLines = [];


for (let i = 0; i < numberLinePanier; i++)
{
   let obj = document.getElementsByClassName(`item-${i}`);
   let totalLinePanier = $(`.price-${i}`).html();
    let totalLinePanierInt = parseInt(totalLinePanier);
   obj[1].addEventListener("click", () => {
        historyLine[i] = obj[0];
        posHistoryLine.push(i);
        obj[0].remove();
        console.log(historyLine);
        console.log(posHistoryLine);
        recoverLinePanier.css('display','flex');
        console.log("Total enlevé : " + totalLinePanierInt);
        totalPanierArrayRemove.push(totalLinePanierInt);
            let initValue = 0;
            let sumTotalPanierRemove = totalPanierArrayRemove.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                initValue );
        let sumTotalPanierFinal = (sumTotalPanier - sumTotalPanierRemove);
          console.log("Somme totale du panier : " + sumTotalPanierFinal);
          $(".TotalPanierSomme > p").html(sumTotalPanierFinal);
          numberLinePanier = numberLinePanier-1;
          nbrDeleteLines.push('A');
          console.log("Il y a " + numberLinePanier + " lignes");

    });
          
}

recoverLinePanier.on('click', () => {
    console.log('Recover clicked !')
    for (let j = posHistoryLine.length-1; j >= 0; j--) {
        let objtorecover = historyLine[posHistoryLine[j]];
        listPanier.append(objtorecover);
        console.log("Somme totale du panier : " + sumTotalPanier);
        $(".TotalPanierSomme > p").html(sumTotalPanier);
        totalPanierArrayRemove = [];
        numberLinePanier = numberLinePanier + nbrDeleteLines.length;
        console.log("Il y a " + numberLinePanier + " lignes");
        nbrDeleteLines = [];
    };
});




$('#confirmPanier').on('click',()=>{
    $('#Payment').css('display','flex');
    
    const totalPanierSomme = $(".TotalPanierSomme > p").html();
    const containerForm = $('.containerForm');
    const labelsPanierArray = [];
    const pricesPanierArray = [];
    const totalsPanierArray = [];
    const totalPanier = parseInt(totalPanierSomme);

    console.log('Nombre de lignes Panier Définitif : ' + numberLinePanier);
    console.log(totalPanierSomme);
    console.log(totalPanier);
   
});





//deno run --allow-net --allow-read --allow-env server.ts
