const userId = $('#emailUser').html();
const userIdDeconnect = $('#emailUserDeconnect').html();
const inputsHidden = $('#inputsHidden');
const inputsHiddenDeconnexionTrue = $('#inputsHiddenDeconnexionTrue');
const inputsHiddenDeconnexionFalse = $('#inputsHiddenDeconnexionFalse');
const pageCentrageFalse = $('.PageCentrageFalse');
const pageCentrageTrue = $('.PageCentrageTrue');
const fromOtherPageFalse = $('#FromOtherPageFalse').html();
const fromOtherPageTrue = $('#FromOtherPageTrue').html();





const statusConnection = true;
const statusDeconnection = false;

console.log('userId : ' + userId);
console.log('userIdDeconnect : ' + userIdDeconnect);
inputsHidden.append(` 
<input type='hidden' name='UserIdSend' value=${userId}>
<input type='hidden' name='StatusSend' value=${statusConnection}>
<input type='hidden' name='FromOtherPageSend' value= 'true'>
<input type='submit' id="RetourBoutique" value='Retour Boutique'>
`);







if(fromOtherPageFalse === 'false') {
    pageCentrageTrue.css('display', 'none');
    pageCentrageFalse.css('display', 'flex');
    inputsHiddenDeconnexionFalse.append(` 
<input type='hidden' name='UserDeconnect' value=${userId}>
<input type='hidden' name='StatusSendDeconnect' value=${statusDeconnection}>
<input type='hidden' name='fromOtherPageFalse' value='false'>
<input type='submit' id="ButtonDeconnect" value='Log Out'>
`);
}else if(fromOtherPageTrue === 'true'){
    pageCentrageFalse.css('display', 'none');
    pageCentrageTrue.css('display', 'flex');
    inputsHiddenDeconnexionTrue.append(` 
<input type='hidden' name='UserDeconnectTrue' value=${userIdDeconnect}>
<input type='hidden' name='StatusSendDeconnectTrue' value=${statusDeconnection}>
<input type='hidden' name='fromOtherPageTrue' value='true'>
<input type='submit' id="ButtonDeconnectTrue" value='Log Out'>
`);
}
//deno run --allow-net --allow-read --allow-env server.ts