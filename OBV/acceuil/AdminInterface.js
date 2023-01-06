let etatAdminInterface = 'closed';
$('.AdminInterfaceContainer').css('display','none');

$('#AdminInterfaceOpen').click(function(){
    if(etatAdminInterface == 'closed'){
        $('.AdminInterfaceContainer').css('display','flex');

        $('.AdminInterfaceContainer').animate({height: '350px'},200);
        $('.AdminInterfaceContainer').animate({padding: '2%'},100);

        setTimeout(function(){
        $('#AdminInterface').animate({opacity: '100%'},200);
        $('.ContainerImgAdmin').animate({opacity: '100%'},200);
        },200)
        etatAdminInterface = 'opened';
    }
    
    
})

$('#croixAdminInterface').click(function(){
    if(etatAdminInterface == 'opened'){

        $('#AdminInterface').animate({opacity: '0%'},200);
        $('.ContainerImgAdmin').animate({opacity: '0%'},200);
        $('.AdminInterfaceContainer').animate({padding: '0%'},200);
        $('.AdminInterfaceContainer').animate({height: '0'},200);
        $('.AdminInterfaceContainer').css('display','none');
        etatAdminInterface = 'closed';

    }

})
