import anime from '../animejs/lib/anime.es.js';

let etatBoutonConnexion = false;

    $('#BoutonConnexion').click(()=>{
    if(!etatBoutonConnexion){

            $('.EspaceConnexion').css('display','flex');
            $('.EspaceConnexion').css('height','auto');
            setTimeout(function() {
                $('.EspaceConnexion').css('opacity','100%');
            },10)
        
        etatBoutonConnexion = true;

    }else if(etatBoutonConnexion){
        
            $('.EspaceConnexion').css('height','0px');
            setTimeout(function() {
                $('.EspaceConnexion').css('opacity','0%');
            },10);
            $('.EspaceConnexion').css('display','none');
        
        etatBoutonConnexion = false;
    }
});


let etatBoutonSansCompte = false;
$('#SansCompte').click(()=>{
    if(!etatBoutonSansCompte){

            $('.EspaceConnexion').css('height','0px');
            setTimeout(function() {
                $('.EspaceConnexion').css('opacity','0%');
            },10);
            $('.EspaceConnexion').css('display','none');

            $('.Register').css('display','flex');
            $('.Register').css('height','auto');
            setTimeout(function() {
                $('.Register').css('opacity','100%');
            },10)

                $('#BackConnexion').click(()=>{
                    $('.Register').css('height','0px');
            setTimeout(function() {
                $('.Register').css('opacity','0%');
            },10);
                $('.Register').css('display','none');

                $('.EspaceConnexion').css('display','flex');
                $('.EspaceConnexion').css('height','auto');
                setTimeout(function() {
                $('.EspaceConnexion').css('opacity','100%');
            },10)
        

        
            etatBoutonSansCompte = false;

                });
                


                
        
        etatBoutonSansCompte = true;

    }else if(etatBoutonSansCompte){
        
            $('.Register').css('height','0px');
            setTimeout(function() {
                $('.Register').css('opacity','0%');
            },10);
            $('.Register').css('display','none');
        
        etatBoutonSansCompte = false;
    }
});









$('#Cacao').click(function() {
    $('#CaféImg').animate({width:'0%'},150);
    setTimeout(function() {
        $('#CaféImg').attr('src','images/Cacaopng.png')
    },150);
    $('#CaféImg').animate({width:'100%'},150);
    

});



$('#Café').click(function() {
    
    $('#CaféImg').animate({width:'0%'},150);
    setTimeout(function() {
        $('#CaféImg').attr('src','images/CaféTasse.jpg')
    },150);
    $('#CaféImg').animate({width:'500px'},150);
    
    $('#CaféImg').css('height','500px');

});


$('#Fruitsec').click(function(){
    $('#PoivreImg').animate({width:'0%'},150);
    $('#PoivreImg').animate({opacity:'0%'},140);
    setTimeout(function() {
        $('#PoivreImg').attr('src','Images/FruitSecPng.png');
    },150);
    $('#PoivreImg').animate({opacity:'100%'},140);
    $('#PoivreImg').animate({width:'550px'},150);
    $('#PoivreImg').animate({height:'400px'},150)
    $('#PoivreImg').css('border','solid black ');
    $('#PoivreImg').css('border-radius','50px');
})

$('#Poivre').click(function(){
    $('#PoivreImg').animate({width:'0%'},150);
    $('#PoivreImg').animate({opacity:'0%'},140);
    setTimeout(function(){
        $('#PoivreImg').attr('src','Images/poivrepng.png');
    },150);
    $('#PoivreImg').animate({opacity:'100%'},140);
    $('#PoivreImg').animate({width:'650px'},150);
    $('#PoivreImg').animate({height:'500px'},150);
    $('#PoivreImg').css('border','solid black ');
    $('#PoivreImg').css('border-radius','50px');
})



const barrehautepath = "M12,84.21H372.94a12,12,0,1,0,0-24.06H12a12,12,0,1,0,0,24.06Z";
const barrebaspath = "M372.94,300.76H12a12,12,0,0,0,0,24.06H372.94a12,12,0,0,0,0-24.06Z";

const barrehautecroixpath = "M53.83,76.36,314.49,326a12,12,0,0,0,16.65-17.38L70.48,59A12,12,0,0,0,53.83,76.36Z";
const barrebascroixpath =  "M309.66,54.73,58.06,313.47a12,12,0,1,0,17.25,16.77L326.91,71.5a12,12,0,1,0-17.25-16.77Z";

const barrehautetransform = "translate(0 -60.15)";
const barrebastransform = "translate(0 -60.15)";

const barrehautecroixtransform = "translate(-50.13 -51.08)";
const barrebascroixtransform = "translate(-50.13 -51.08)";

const barrebascroixretourpath = "M322.77-.5-38.12.5a12,12,0,0,0-12,12.06A12,12,0,0,0-38,24.56l360.89-1A12,12,0,1,0,322.77-.5Z";
const barrehautecroixretourpath = "M-38.14,264.15l360.92,1a12,12,0,1,0,.07-24.07l-360.91-1a12,12,0,0,0-12.07,12A12,12,0,0,0-38.14,264.15Z";

const barrebascroixretourtransform = "translate(50.13 0.5)";
const barrehautecroixretourtransform = "translate(50.13 0.5)";

const menuCarre = $('#MenuCarre');
const menuCarreCroix = $('.MenuCarreCroix');

let menuOpen = false;

    
    menuCarre.click(function(){
        
       
        if(!menuOpen){

                menuCarre.attr('class','Open');
                menuOpen = true;

                var timeline = anime.timeline({
                    duration: 100,
                    easing: 'linear',
                    
                    
                });
            
                timeline.add({
                    targets: "#BarreHaute",
                    d: [{value: barrehautecroixpath}],
                    transform: barrehautecroixtransform,
                    
                });
                timeline.add({
                    targets: "#BarreBas",
                    d: [{value:  barrebascroixpath}],
                    transform:  barrebascroixtransform 
            
                });
                timeline.add({
                    targets: "#BarreMilieu",
                    opacity: 0 
            
                });

                
                $('.EspaceMenu').css('height','80%');
                $('.NomSousMenuVanille').css('display','flex');
                    $('.NomSousMenu').css('display','flex');
                    $('.NomSousMenuOsiris').css('display','flex');
                setTimeout(function(){
                    $('.NomSousMenuVanille').animate({opacity: '100%'},400);
                    $('.NomSousMenu').animate({opacity: '100%'},400);
                    $('.NomSousMenuOsiris').animate({opacity: '100%'},400);

                },400)
        }else{
                menuCarre.removeAttr('class','Open');
                menuOpen = false;
                
                
                
                var timeline = anime.timeline({
                    duration: 50,
                    easing: 'linear'
                    
                });

                
                
                timeline.add({
                    targets: "#BarreBas",
                    d: [{value:  barrebaspath}],
                    transform:  barrebastransform 
            
                });
                timeline.add({
                    targets: "#BarreMilieu",
                    opacity: 100 
            
                });
                timeline.add({
                    targets: "#BarreHaute",
                    transform: barrehautetransform,
                    d: [{value: barrehautepath}]
                    
                    
                });
                
                

                setTimeout(function(){
                    $('.NomSousMenuVanille').animate({opacity: '0%'},150);
                    $('.NomSousMenu').animate({opacity: '0%'},150);
                    $('.NomSousMenuOsiris').animate({opacity: '0%'},150);

                },200)

                    $('.EspaceMenu').css('height','0%');
                    setTimeout(function(){
                        $('.NomSousMenuVanille').css('display','none');
                        $('.NomSousMenu').css('display','none');
                        $('.NomSousMenuOsiris').css('display','none');

                    },300)
                    
               
        }

    });
        
            
/*$(".FenetreConnexion").click.css('display','flex');*/

$(".BoutonConnexion").click(()=>{
    $(".FenetreConnexion").css('display','flex');
});




