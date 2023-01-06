import anime from '../animejs/lib/anime.es.js';

const regleDebPath = "M10.62,157.19v0H21.5v-.5h-11v0h11v-.5h-11v0h11V155h-11v0h11v-.5h-11v0h11v-.23h-11v0h11V154h-11v0h11v-.24h-11v0h11v-.24h-11v0h11v-.24h-11v0h11v-.29H.5v4.63h21v-.31Zm10.76-1.35h-11v0h11Zm0-.55v0h-11v0Zm-11.12-.55h11v0h-11Zm-.12.81h11v0h-11Zm.12.82h11v0h-11Zm.12.53h11v0h-11Z";
const regleDebTransform = "translate(0 -152.37)";

const regleFinPath = "M10.62,146.89V146L21.5,146V129h-11V128l11,.06V111h-11v-.93l11,.06V73.73h-11V72.8l11,.06v-17h-11v-.94l11,.06v-8h-11V46l11,.06V37.9h-11V37l11,.06V29h-11V28l11,.06V20h-11v-.93l11,.06V11h-11V10.1l11,.06V0H.5V157.5h21V146.89Zm10.76-45.84h-11v-.92l11,.06Zm0-18.78v.87h-11v-.93ZM10.26,63.84l11,.06v.88h-11Zm-.12,27.33,11,.06v.87h-11Zm.12,27.92,11,.06V120h-11ZM10.38,137l11,.07v.87h-11Z";
const regleFinTransform = "translate(0 0.5)";




let etat = 'rien' ;




//Animation lors du click du bouton 'taille' dans la section vanille.

$('#TailleVanille').click(function(){
    if(etat == 'rien'){
        $('.RegleAnime').animate({opacity: '100'},150);
    setTimeout(function(){
        $('.TailleVanille').animate({opacity: '100',left: '150px'},800)
    },250);
    
    
    
    var regleTimeline = anime.timeline({
        duration: 500,
        easing: 'linear',
        
    });

    regleTimeline.add({
        targets: "#TraceDeb",
        d: [{value: regleFinPath}],
        transform: regleFinTransform
    });
   
    etat = 'taillevanille';

    }
    else if(etat=='couleurvanille'){
        setTimeout(function(){
            $('.CouleurVanille').animate({opacity: '0',left: '-200px'},800)
    
        },250);
        $('.Trait').animate({width: '0px'},300);
        $('.Carres').animate({height: '0px'},200);
        

        $('.RegleAnime').animate({opacity: '100'},150);
    setTimeout(function(){
        $('.TailleVanille').animate({opacity: '100',left: '150px'},800)
    },250);
    
    
    
    var regleTimeline = anime.timeline({
        duration: 500,
        easing: 'linear',
        
    });

    regleTimeline.add({
        targets: "#TraceDeb",
        d: [{value: regleFinPath}],
        transform: regleFinTransform
    });
   
    etat = 'taillevanille';


    }

    else if(etat=='humiditévanille'){

        $('.DescHygro').animate({opacity: '0',left: '-200px'},800);
        $('.ContainerHygro').animate({opacity: 0});

        $('.RegleAnime').animate({opacity: '100'},150);
        setTimeout(function(){
            $('.TailleVanille').animate({opacity: '100',left: '150px'},800)
        },250);
        
        
        
        var regleTimeline = anime.timeline({
            duration: 500,
            easing: 'linear',
            
        });
    
        regleTimeline.add({
            targets: "#TraceDeb",
            d: [{value: regleFinPath}],
            transform: regleFinTransform
        });
       
        etat = 'taillevanille';
    



    }

});





//Animation lors du click du bouton 'couleur' dans la section vanille.


$('#CouleurVanille').click(function(){

    if(etat == 'rien'){
        setTimeout(function(){
            $('.CouleurVanille').animate({opacity: '100',left: '150px'},800)
    
        },250);
        $('.Trait').animate({width: '100px'},300);
        $('.Carres').animate({height: '150px'},200);
        etat = 'couleurvanille';

    
    }else if(etat == 'taillevanille'){

        
            $('.RegleAnime').animate({opacity: '0'},150);
        setTimeout(function(){
            $('.TailleVanille').animate({opacity: '0',left: '-200px'},800)
        },250);
        


        var couleurTimeline = anime.timeline({
            duration: 500,
            easing: 'linear',
            
        });
    
        couleurTimeline.add({
            targets: "#TraceDeb",
            d: [{value: regleDebPath}],
            transform: regleDebTransform
        });
       
        setTimeout(function(){
            $('.CouleurVanille').animate({opacity: '100',left: '150px'},800)
    
        },250);
        $('.Trait').animate({width: '100px'},300);
        $('.Carres').animate({height: '150px'},200);
    
        etat = 'couleurvanille';
    }
    else if(etat=='humiditévanille'){

        $('.DescHygro').animate({opacity: '0',left: '-200px'},800);
        $('.ContainerHygro').animate({opacity: 0});

        setTimeout(function(){
            $('.CouleurVanille').animate({opacity: '100',left: '150px'},800)
    
        },250);
        $('.Trait').animate({width: '100px'},300);
        $('.Carres').animate({height: '150px'},200);
        
        
        etat = 'couleurvanille';


    }

    

});










//Animation lors du click du bouton 'Humidité' dans la section vanille.


$('#HumiditéVanille').click(function(){

    if(etat == 'rien'){
        setTimeout(function(){
            $('.DescHygro').animate({opacity: '100',left: '-80px'},800)
    
        },250);
        $('.ContainerHygro').animate({opacity: '100'})
        etat = 'humiditévanille';
    
    }else if(etat == 'taillevanille'){

        
            $('.RegleAnime').animate({opacity: '0'},150);
        setTimeout(function(){
            $('.TailleVanille').animate({opacity: '0',left: '-200px'},800)
        },250);
        


        var couleurTimeline = anime.timeline({
            duration: 500,
            easing: 'linear',
            
        });
    
        couleurTimeline.add({
            targets: "#TraceDeb",
            d: [{value: regleDebPath}],
            transform: regleDebTransform
        });

       
        setTimeout(function(){
            $('.DescHygro').animate({opacity: '100',left: '-80px'},800)
    
        },250);
        $('.ContainerHygro').animate({opacity: '100'})
        etat = 'humiditévanille';
    }

    else if(etat=='couleurvanille'){
        setTimeout(function(){
            $('.CouleurVanille').animate({opacity: '0',left: '-200px'},800)
    
        },250);
        $('.Trait').animate({width: '0px'},300);
        $('.Carres').animate({height: '0px'},200);
        

        setTimeout(function(){
            $('.DescHygro').animate({opacity: '100',left: '-80px'},800)
    
        },250);
        $('.ContainerHygro').animate({opacity: '100'})
        etat = 'humiditévanille';
            


    }
    

});
