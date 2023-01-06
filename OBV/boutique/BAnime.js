import anime from '../animejs/lib/anime.es.js';





$(function(){
    const doc = $(document);
    const vanilleBg = $('.Vanille');
    doc.on('scroll',function(){
        let posActuelle = doc.scrollTop();
       vanilleBg.css('background-position-y','-'+posActuelle*0.4 + 'px');
    })
    
})

const userIdBoutique = $('#UserIdBoutique').html();
const fromOtherPage = $('#fromOtherPage').html();
const useraccountFollowForm = $('#useraccountFollowForm').append(`
<input type="hidden" name="followUserId" value = ${userIdBoutique}>
<input type="hidden" name="fromOtherPage" value = ${fromOtherPage}>
<input type="submit" id='buttongoUserAccount' name="goUserAccount" value='useraccount'>
`);

//18
$('#ImgCard18').on('mouseenter',function(){

    $('.InteractionProduit18').css('width','50%');
    $('.InteractionProduit18').css('opacity','100%');
    $('.InteractionProduit18').css('border','auto');

})

$('#ImgCard18').on('mouseleave',function(){

    $('.InteractionProduit18').css('width','0%');
    $('.InteractionProduit18').css('opacity','0%');
    $('.InteractionProduit18').css('border','none');

})
 //16
 $('#ImgCard16').on('mouseenter',function(){

    $('.InteractionProduit16').css('width','50%');
    $('.InteractionProduit16').css('opacity','100%');
    $('.InteractionProduit16').css('border','auto');

})

$('#ImgCard16').on('mouseleave',function(){

    $('.InteractionProduit16').css('width','0%');
    $('.InteractionProduit16').css('opacity','0%');
    $('.InteractionProduit16').css('border','none');

})
//14
$('#ImgCard14').on('mouseenter',function(){

    $('.InteractionProduit14').css('width','50%');
    $('.InteractionProduit14').css('opacity','100%');
    $('.InteractionProduit14').css('border','auto');

})

$('#ImgCard14').on('mouseleave',function(){

    $('.InteractionProduit14').css('width','0%');
    $('.InteractionProduit14').css('opacity','0%');
    $('.InteractionProduit14').css('border','none');

})
//12
$('#ImgCard12').on('mouseenter',function(){

    $('.InteractionProduit12').css('width','50%');
    $('.InteractionProduit12').css('opacity','100%');
    $('.InteractionProduit12').css('border','auto');

})

$('#ImgCard12').on('mouseleave',function(){

    $('.InteractionProduit12').css('width','0%');
    $('.InteractionProduit12').css('opacity','0%');
    $('.InteractionProduit12').css('border','none');

})
//10
$('#ImgCard10').on('mouseenter',function(){

    $('.InteractionProduit10').css('width','50%');
    $('.InteractionProduit10').css('opacity','100%');
    $('.InteractionProduit10').css('border','auto');

})

$('#ImgCard10').on('mouseleave',function(){

    $('.InteractionProduit10').css('width','0%');
    $('.InteractionProduit10').css('opacity','0%');
    $('.InteractionProduit10').css('border','none');

})


let etatContainerProduits = 'close';


$('#Gousses').click(function(){
    if(etatContainerProduits == 'close'){
        $('.ContainerProduitsVanilleGousses').animate({height: '350px'},500);
        etatContainerProduits = 'Gousses';
    }
    else if(etatContainerProduits == 'Poudre'){
        $('.ContainerProduitsVanillePoudre').animate({height: '0px'},500);
        $('.ContainerProduitsVanilleGousses').animate({height: '350px'},500);
        etatContainerProduits = 'Gousses';
    }
    else{
        $('.ContainerProduitsVanilleGousses').animate({height: '0px'},500);
        etatContainerProduits = 'close';
    }

})

$('#Poudre').click(function(){
    if(etatContainerProduits == 'close'){
        $('.ContainerProduitsVanillePoudre').animate({height: '350px'},500);
        etatContainerProduits = 'Poudre';
    }
    else if(etatContainerProduits == 'Gousses'){
        $('.ContainerProduitsVanilleGousses').animate({height: '0px'},500);
        $('.ContainerProduitsVanillePoudre').animate({height: '350px'},500);
        etatContainerProduits = 'Poudre';
    }
    else{
        $('.ContainerProduitsVanillePoudre').animate({height: '0px'},500);
        etatContainerProduits = 'close';
    }

})

   

$('#Feves').click(function(){
    if(etatContainerProduits == 'close'){
        $('.ContainerProduitsCacao').animate({height: '350px'},500);
        etatContainerProduits = 'open';
    }
    else{
        $('.ContainerProduitsCacao').animate({height: '0px'},500);
        etatContainerProduits = 'close';
    }

})
   
const etatVoyantConnexion = $(".BoutonConnexion").children();
const etatVoyant = etatVoyantConnexion[1];
const etatVoyantAttribute = etatVoyant.getAttribute('id');
console.log(etatVoyant);
console.log(etatVoyantAttribute);

$('[class^=InteractionProduit]').on("click",()=>{
   if(etatVoyantAttribute === 'VoyantConnexionRed'){
    console.log('Le voyant de connexion est rouge');
    $('.ContainerProduitsVanilleGousses').append("<div id='MessageConnexion'><h3>Compte requis</h3><p>Veuillez vous connecter à votre compte afin de pouvoir accéder à la boutique</p><button id='ButtonMessageConnexion'><a href='http://localhost:5000/OBV/connexion'>Connexion</a></button><p>Vous n'avez pas encore de compte ?</p><button id='ButtonMessageCompte'><a href='http://localhost:5000/OBV/register'>Créer un compte</a></button></div>");
   }
   $('#MessageConnexion').css('display','flex');
   $('#MessageConnexion').children().css('padding','10px');
   });










const deuxg = $('#2g');
const cinqg = $('#5g');
const dixg = $('#10g');
const cinquanteg = $('#50g');
const centg = $('#100g');
const deuxcentsg = $('#200g');
const cinqcentsg = $('#500g');
const milleg = $('#1000g');


let etatFenetreProduitOpen = false;
let idProduit;
$('#Voir18-20').click(()=>{
    prixProduitsVanille(6,15,30,150,300,600,1500,3000);
    $('#LabelProduit').html('Bourbon Premium 18-20 cm');
    idProduit = 'BourbonPremium18-20';
    $('.FenetreVoirProduitVanille').animate({height: '60vh',width:'70vw'},500);
    $('.InfoCardFenetre').animate({opacity:'100%'},600);
    etatFenetreProduitOpen = true;
    
})
$('#Voir16-18').click(()=>{
    prixProduitsVanille(6,15,30,150,300,600,1500,3000);
    $('#LabelProduit').html('Bourbon Premium 16-18 cm');
    idProduit = 'BourbonPremium16-18';
    $('.FenetreVoirProduitVanille').animate({height: '60vh',width:'70vw'},500);
    $('.InfoCardFenetre').animate({opacity:'100%'},600);
    etatFenetreProduitOpen = true;
    
})
$('#Voir14-16').click(()=>{
    prixProduitsVanille(6,15,30,150,300,600,1500,3000);
    $('#LabelProduit').html('Bourbon Premium 14-16 cm');
    idProduit = 'BourbonPremium14-16';
    $('.FenetreVoirProduitVanille').animate({height: '60vh',width:'70vw'},500);
    $('.InfoCardFenetre').animate({opacity:'100%'},600);
    etatFenetreProduitOpen = true;
    
})
$('#Voir12-14').click(()=>{
    prixProduitsVanille(6,15,30,150,300,600,1500,3000);
    $('#LabelProduit').html('Bourbon Premium 12-14 cm');
    idProduit = 'BourbonPremium12-14';
    $('.FenetreVoirProduitVanille').animate({height: '60vh',width:'70vw'},500);
    $('.InfoCardFenetre').animate({opacity:'100%'},600);
    etatFenetreProduitOpen = true;
    
})
$('#Voir10-12').click(()=>{
    prixProduitsVanille(6,15,30,150,300,600,1500,3000);
    $('#LabelProduit').html('Bourbon Premium 10-12 cm');
    idProduit = 'BourbonPremium10-12';
    $('.FenetreVoirProduitVanille').animate({height: '60vh',width:'70vw'},500);
    $('.InfoCardFenetre').animate({opacity:'100%'},600);
    etatFenetreProduitOpen = true;
    
})


$('#croixFenetreProduit').click(()=>{
    if(etatFenetreProduitOpen == true){
        $('.FenetreVoirProduitVanille').animate({height: '0vh',width:'0vw'},600);
        $('.InfoCardFenetre').animate({opacity:'0%'},500);
        etatFenetreProduitOpen = false;
    }
    
})








function prixProduitsVanille(A,B,C,D,E,F,G,H){
    deuxg.click(()=>{
        const choix =  A;//6
        $('#prixeuros').html(choix);
    })
    cinqg.click(()=>{
        const choix =  B;//15
        $('#prixeuros').html(choix);
    })
    
    dixg.click(()=>{
        const choix =  C;//30
        $('#prixeuros').html(choix);
    })
    
    cinquanteg.click(()=>{
        const choix =  D;//150
        $('#prixeuros').html(choix);
    })
    centg.click(()=>{
        const choix =  E;//300
        $('#prixeuros').html(choix);
    })
    deuxcentsg.click(()=>{
        const choix =  F;//600
        $('#prixeuros').html(choix);
    })
    cinqcentsg.click(()=>{
        const choix =  G;//1500
        $('#prixeuros').html(choix);
    })
    
    milleg.click(()=>{
        const choix =  H;//3000
        $('#prixeuros').html(choix);
    })

}







let numberOfArticles = 0;
let produitPrixArray = [];
let labelProduitsArray = [];

$('#PanierFenetreVanille').click(()=>{
        $('.VoyantEtatPanier').html(numberOfArticles + 1);
        numberOfArticles = numberOfArticles + 1;
        $('.VoyantEtatPanier').css('background-color','green');
        let labelProduit = $('#LabelProduit').html();
        let prixProduit = $('#prixeuros').html();

        let prixProduitReel = parseInt(prixProduit);
        produitPrixArray.push(prixProduitReel);
        const pushing = labelProduitsArray.push(idProduit);
        let totalProduit = 0;
        let totalProduitZero = produitPrixArray[0];
    
             for(let i in produitPrixArray){  
                totalProduit += produitPrixArray[i];  
            }
        
        let totalProduitZeroString = totalProduitZero.toString();
        let totalProduitString = totalProduit.toString();

        
        
        if(numberOfArticles==1){
            let premierArticle = `<div id='DescriptionPanier'><p>Vous avez ajouté dans votre panier:</p>
            <p>${labelProduit} : ${prixProduit}</p> 
        </div>`;
        
            $('#DescriptionPanier').css('display','flex');
            $('#DescriptionPanier').css('flex-direction','column');
             $('#PanierFenetreVanille').closest('div').append(premierArticle);
            $('#PanierFenetreVanille').closest('div').append(`<button id='BoutonDescriptionPanier'>Voir Panier</button>`);
            $('#BoutonRecapPanier').css('display','flex');
            $('#DeleteRecapPanier').css('display','flex');
            $(`<div id='LinePanier'>
            <label for="LabelProduitInput" id='LabelProduit'>${labelProduit}</label>   
            <input type="hidden" name="LabelProduitInput"  value=${labelProduitsArray}>

            <label for="PrixProduitInput" id='PrixProduit'>${prixProduit}</label>
            <input type="hidden" name="PrixProduitsInput" value=${produitPrixArray}>

                 
            </div>
            <label for="TotalProduit" id='TotalProduitLabel'>Total : ${totalProduitString}</label>
            <input type="hidden" name="TotalProduitInput"  value=${totalProduitString}>
            <input type="hidden" name="userIdBoutique" value=${userIdBoutique}>
            
            
            `).insertBefore('#BoutonRecapPanier');
            
            
            
            
        }
        
        if(numberOfArticles > 1){
        
            $('.FenetreVoirProduitVanille').animate({height: '80vh',width:'70vw'},500);

            $('#DescriptionPanier').append(
                `
                <p>${labelProduit} : ${prixProduit}</p> 
                `);
            $('#TotalProduitLabel').remove();
            $('#TotalProduit').remove();
            
            
            $(`
            
            <div id='LinePanier'>
            <label for="LabelProduitInput" id='LabelProduit'>${labelProduit}</label>
            <input type="hidden" name="LabelProduitInput" value=${labelProduitsArray}>
            <label for="PrixProduitInput" id='PrixProduit'>${prixProduit}</label>
            <input type="hidden" name="PrixProduitsInput" value=${produitPrixArray}>
            
            
             <br>

            </div>

            <label for="TotalProduit" id='TotalProduitLabel'>Total :</label>
            <input type="hidden" name="TotalProduitInput" value=${totalProduitString}>
            <p id='TotalProduit'>${totalProduitString}</p>
            `).insertBefore('#BoutonRecapPanier');
            
            
            }
        if(numberOfArticles>10){
            $('#DescriptionPanier').append(`<p>Vous ne pouvez pas ajouter plus de 10 articles en une commande</p>`);

        }
        
            
    });
    

    


    

    $('#RetirerPanierVanille').click(()=>{
        if(numberOfArticles>0){
            $('.VoyantEtatPanier').html(numberOfArticles - 1);
            numberOfArticles = numberOfArticles - 1;
             $('#DescriptionPanier p').last().remove();
             $('.RecapPanier #LinePanier').last().remove();
             produitPrixArray.pop();
             labelProduitsArray.pop();
             let totalProduitRetire = 0;
             for(let i in produitPrixArray){
                totalProduitRetire += produitPrixArray[i];
            }
            let totalProduitRetireString = totalProduitRetire.toString();
       
            
        

             $('#TotalProduit').html(`Total : ${totalProduitRetireString}`);
            
            
           
            
        }
        if(numberOfArticles==0){
            $('.VoyantEtatPanier').css('background-color','red');
            $('#DescriptionPanier').remove();
            $('#BoutonDescriptionPanier').remove();
            $('.VoyantEtatPanier').html(numberOfArticles);
            
            $('.VoyantEtatPanier').html(numberOfArticles);
            $('#TotalProduitLabel').remove();
            $('#TotalProduit').remove();
            $('#BoutonRecapPanier').css('display', 'none');
            $('#DeleteRecapPanier').css('display', 'none');
            numberOfArticles = 0;
            
        }
        
    })



    $('.ContainerVoyantPanier').on('mouseenter',()=>{
        if(numberOfArticles>0){
            $('.RecapPanier').css('display','flex');
            $('.RecapPanier').animate({height: '400px',width:'300px'});
            $('.RecapPanier').css('background-color','brown');
        }
        
    
    })
    
    $('.RecapPanier').on('mouseleave',()=>{
        $('.RecapPanier').animate({height: '0px',width:'0px'});
        $('.RecapPanier').css('display','none');
        
    
    });

let boutonRecapPanier = $('#BoutonRecapPanier');

boutonRecapPanier.click(()=>{
    console.log(labelProduitsArray);
})





//deno run --allow-net --allow-read --allow-env server.ts



