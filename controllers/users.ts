import { Client } from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import { dbCreds } from "../config.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";







// Init client
const client = new Client(dbCreds);






let connectionNumber = 0;
let connectionNumberString = connectionNumber.toString();



const verifConnectionAcceuil = async(ctx:any)=>{
            
    try {
        await client.connect();
        const queryEmptyTable = await client.queryArray`SELECT CASE 
        WHEN EXISTS (SELECT * FROM userconnectionstatus LIMIT 1) THEN 1
        ELSE 0 
        END`
        const EmptyTableRows = queryEmptyTable.rows[0][0];
       console.log(EmptyTableRows);
        if(EmptyTableRows === 0){
            ctx.render('./OBV/acceuil/OBV.ejs',{Voyant: false});
        }else if(EmptyTableRows === 1){
            const Status = await client.queryArray`SELECT status FROM userconnectionstatus`
            if(Status){
                ctx.render('./OBV/acceuil/OBV.ejs',{Voyant: true});
            }else{
                ctx.render('./OBV/acceuil/OBV.ejs',{Voyant: false});
            } 
        }
        
        
        
    }catch(err){
        ctx.status = 200;
        ctx.body = {
            success: false,
            msg: err.toString()
        }
    }finally{
         await client.end();
    }
    
};




/*const verifConnectionRegister = async(ctx:any)=>{
            
    try {
        await client.connect();
        const queryEmptyTable = await client.queryArray`SELECT CASE 
        WHEN EXISTS (SELECT * FROM infosusersend LIMIT 1) THEN 1
        ELSE 0 
        END`
        const emptyTableRows = queryEmptyTable.rows;
        const emptyTable = emptyTableRows[0][0];
        console.log(emptyTable);
        
        if(emptyTable === 0){
            ctx.render('./OBV/register/register.ejs');
        }else{
            ctx.response.redirect('/OBV/register');
        }

    }catch(err){
        ctx.status = 200;
        ctx.body = {
            success: false,
            msg: err.toString()
        }
    }finally{
         await client.end();
    }
    
};*/





const verifConnectionBoutique = async(ctx:any)=>{
            
    try {
        await client.connect();
        const userIdBoutique = "";
        
        ctx.render('./OBV/boutique/Boutique.ejs',{dataUser: userIdBoutique, Voyant: false, fromOtherPage: 'false'});
             
        
    }catch(err){
        ctx.status = 200;
        ctx.body = {
            success: false,
            msg: err.toString()
        }
    }finally{
         await client.end();
    }
    
};





const useraccountLinked = async(ctx:any)=>{
    const body = await ctx.request.body({type: 'form-data'});
    const product =  await body.value.read();

    try{
        await client.connect();
        const userIdBoutique = product.fields.followUserId;
        const fromOtherPage = product.fields.fromOtherPage;
        const checkStatusRows = await client.queryArray`SELECT status FROM userconnectionstatus WHERE idconnexion = ${userIdBoutique}`;
        const checkIdRows = await client.queryArray`SELECT idconnexion FROM userconnectionstatus WHERE idconnexion = ${userIdBoutique}`;
        const checkStatus = checkStatusRows.rows[0][0];
        const checkId = checkIdRows.rows[0][0];
        console.log(checkStatus);
        console.log('id returned from BD is :  ' + checkId);
        console.log('id returned from boutique  is : ' + userIdBoutique);
        if(checkStatus){
            if(fromOtherPage === 'true'){
                ctx.render('./OBV/useraccount/useraccount.ejs',{dataUser: checkId, dataUserDeco:checkId,  colorvoyant: true, fromOtherPage: true });
            }
            
        }
        
        
    }catch(err){
        ctx.status = 200;
        ctx.body = {
            success: false,
            msg: err.toString()
        }
    }finally{
        await client.end();
    }
}




// Redirection vers la page de connexion
const verifConnectionConnection = async(ctx:any)=>{
    
    try {
        await client.connect();
        const queryEmptyTable = await client.queryArray`SELECT CASE 
        WHEN EXISTS (SELECT * FROM userconnectionstatus LIMIT 1) THEN 1
        ELSE 0 
        END`
        const queryStatus = await client.queryArray`SELECT status FROM userconnectionstatus`;
        const queryStatusRows = queryStatus.rows;
        const status = queryStatusRows[0][0];
        
       
        if(!queryEmptyTable){
            ctx.response.redirect('/OBV/register');
        }else if (queryEmptyTable){
            console.log(status + 'One or more users have created an account');
            ctx.render('./OBV/connexion/connexion.ejs',{Message:'Connectez-vous', Voyant: false});
        }
            
        
       
    }catch(err){
        ctx.status = 200;
        ctx.body = {
            success: false,
            msg: err.toString()
        }
    }finally{
         await client.end();
    }
    
};








// POST methods 
//
//
//
//
//
//
//
//
//
//
//
//
//






// créé un user et redirige verifconnectionconnection (get)
const createUser = async(ctx:any)=>{
    const body = await ctx.request.body({type: 'form-data'});
    const product =  await body.value.read();

    if(!ctx.request.hasBody){
        ctx.response.status = 400;
         ctx.response.body ={
             success: false,
             msg: 'No data'
         }
     } else{
    try{
        await client.connect();
        await client.queryArray`INSERT INTO users(userid,nom,email,password,adresse,prenom) VALUES(${product.fields.userid},${product.fields.nom}, ${product.fields.email}, ${product.fields.password}, ${product.fields.adresse}, ${product.fields.prenom})`;
        let status = false;
        await client.queryArray`INSERT into userconnectionstatus(idconnexion,status,numberconn) VALUES(${product.fields.userid},${status},${connectionNumberString})`;
        console.log("un utilisateur a été créé");
        ctx.response.redirect('/OBV/connexion');
        

        }catch(err){
            ctx.response.status = 200;
            ctx.response.body = {
            success: false,
            msg: err.toString()
        }
            
        
        }finally{
            await client.end()
        }
    }
};





















const sendUsersInfos = async(ctx:any) => {
    const body = await ctx.request.body({type: 'form-data'});
    const product =  await body.value.read();

if(!ctx.request.hasBody){
        ctx.response.status = 400;
        ctx.response.body ={
             success: false,
             msg: 'No data'
         }
     } else{

    try {
        await client.connect();
        const userId = product.fields.UserIdSend;
        const Status = product.fields.StatusSend;
        const fromOtherPageSend = product.fields.FromOtherPageSend;  
        /*const userInfos = await client.queryArray`SELECT * FROM userconnectionstatus WHERE idconnexion = ${userId}`;
        console.log(userInfos);*/
        console.log(userId);
        if(fromOtherPageSend === 'true'){
            ctx.render('./OBV/boutique/Boutique.ejs',{Voyant: true, UserIdBout: userId, fromOtherPage: 'true'});
        }
        
        
    }catch(err){
        ctx.response.status = 200;
        ctx.response.body = {
            success: false,
            msg: err.toString()
        }
    }finally{
         await client.end();
    }
    
}
};







const sendUsersInfosDeconnect = async(ctx:any) => {
    const body = await ctx.request.body({type: 'form-data'});
    const product =  await body.value.read();

if(!ctx.request.hasBody){
        ctx.response.status = 400;
        ctx.response.body ={
             success: false,
             msg: 'No data'
         }
     } else{
    try {
        await client.connect();
        const statusDeconnect = product.fields.StatusSendDeconnect;
        const UserDeconnect = product.fields.UserDeconnect;
        console.log('Status to add : ' + statusDeconnect + ' UserId that will deconnect : ' + UserDeconnect);
        const updateSend = await client.queryArray`UPDATE userconnectionstatus SET status = ${statusDeconnect} WHERE idconnexion = ${UserDeconnect}`;
        console.log('User ' + UserDeconnect + ' Has been deconnected');
        ctx.render('./OBV/acceuil/OBV.ejs',{Voyant: false});
        
            
        

    }catch(err){
        ctx.response.status = 200;
        ctx.response.body = {
            success: false,
            msg: err.toString()
        }
    }finally{
         await client.end();
    }
    
}
};







// Vérifie les identifiants de user et redirige vers son useraccount ou connexion une nouvelle fois
const findUserCtx = async(ctx:any) => {
    const body = await ctx.request.body({type: 'form-data'});
    const product =  await body.value.read();

if(!ctx.request.hasBody){
        ctx.response.status = 400;
         ctx.response.body ={
             success: false,
             msg: 'No data'
         }
     } else{
    try {
        await client.connect();
        
        const queryEmptyTable = await client.queryArray`SELECT CASE 
        WHEN EXISTS (SELECT * FROM userconnectionstatus LIMIT 1) THEN 1
        ELSE 0 
        END`
        const EmptyTableRows = queryEmptyTable.rows[0][0];
            if(EmptyTableRows === 0){
                ctx.render('./OBV/register/register.ejs');
            }else if(EmptyTableRows === 1){
                const userIdInput = product.fields.userIdSignIn;
                const passwordInput = product.fields.passwordSignIn;
                const getUserData = await client.queryArray`SELECT userid,password FROM users WHERE userid = ${userIdInput}`;
                const userIdDB = getUserData.rows[0][0];  // Récup l'id 
                const passwordDB = getUserData.rows[0][1];  // récup le mot de passe
                if(passwordDB === passwordInput && userIdDB === userIdInput) {

                    const queryNumberConn = await client.queryArray`SELECT numberconn FROM userconnectionstatus WHERE idconnexion = ${userIdInput}`;
                    const numberConnString = queryNumberConn.rows[0][0];
                    const numberConnInt = parseInt(numberConnString);
                    let newNumberConn = numberConnInt + 1;
                    let numberConn = newNumberConn.toString();
                    
                    console.log(numberConn);
                    
                    console.log('Password is ' + passwordDB);
                    console.log('id is '+ userIdDB);
                    const status = true;
                    const statusConnected = await client.queryArray`UPDATE userconnectionstatus SET status = ${status}, numberconn = ${numberConn} WHERE idconnexion = ${userIdDB} `;
                    ctx.render('./OBV/useraccount/useraccount.ejs',{dataUser: userIdDB, dataUserDeco:userIdDB,  colorvoyant: true, fromOtherPage: false});
            }else if(passwordDB !== passwordInput || userIdDB !== userIdInput){
                    /*ctx.response.redirect('/OBV/connexion');*/
                    ctx.render('./OBV/connexion/connexion.ejs',{Message:'Mot de passe Incorrect', Voyant: false});
            }
        }
        
        
    }catch(err){
        ctx.response.status = 200;
        ctx.response.body = {
            success: false,
            msg: err.toString()
        }
    }finally{
         await client.end();
    }
    
}

};





      const addProductPanier = async (ctx:any) => {
    
        const body = await ctx.request.body({type: 'form-data'});
        const product =  await body.value.read();
        
        
         if(!ctx.request.hasBody){
            ctx.response.status = 400;
             ctx.response.body ={
                 success: false,
                 msg: 'No data'
             }
         } else{
             try{
                 await client.connect();
                 const userIdBoutique = product.fields.userIdBoutique;
                 const labelProduitsArray = product.fields.LabelProduitInput.split(',');
                 console.log(labelProduitsArray);
                 const prixProduitsArray = product.fields.PrixProduitsInput.split(',');
                 console.log('Prices Array : ' + prixProduitsArray);
                 console.log('Second price : ' + prixProduitsArray[1]);
                 const totalProduits = product.fields.TotalProduitInput;
                 console.log(totalProduits);
                 let quantityProduitsArray = [];
                 for (let i = 0 ; i < prixProduitsArray.length ; i++) {
                    const expr = prixProduitsArray[i];
                    switch(expr){
                        case "6":
                            quantityProduitsArray.push("2");
                            break;
                        case "15":
                            quantityProduitsArray.push("5");
                            break;
                        case "30":
                            quantityProduitsArray.push("10");
                            break;
                        case "150":
                            quantityProduitsArray.push("50");
                            break;
                        case "300":
                            quantityProduitsArray.push("100");
                            break;
                        case "600":
                            quantityProduitsArray.push("200");
                            break;
                        case "1500":
                            quantityProduitsArray.push("500");
                            break;
                        case "3000":
                            quantityProduitsArray.push("1000");
                            break;   
                    }  
                };
                console.log('Quantity : ' + quantityProduitsArray);
                 
                 const queryEmptyUserPanier = await client.queryArray`SELECT CASE 
                WHEN EXISTS (SELECT idpanier FROM panier WHERE idpanier = ${userIdBoutique} LIMIT 1) THEN 1
                ELSE 0 
                END`;
                const queryEmptyUserPanierRows = queryEmptyUserPanier.rows;
                console.log('Empty Panier ? ' + queryEmptyUserPanierRows);
                 
                const result =  await client.queryArray`INSERT INTO panier (idpanier,labelpanier,prixpanier,totalpanier) VALUES (${userIdBoutique},${labelProduitsArray},${prixProduitsArray},${totalProduits})`;
                
               
                ctx.render('./OBV/panier/Panier.ejs',{labels: labelProduitsArray,quantity: quantityProduitsArray,prices: prixProduitsArray,Voyant: true, UserIdPanier: userIdBoutique, deletePanier: false}); 
                
                
             } catch(err){
                 ctx.response.status = 200;
                 ctx.response.body = {
                     success: false,
                     msg: err.toString()
                 }
             } finally{
                
               await client.end();
               
             }
             
         }
    
    };
    


    
        const supprProductPanier = async (ctx:any) => {
    
            const body = await ctx.request.body({type: 'form-data'});
            const product =  await body.value.read();
            
             if(!ctx.request.hasBody){
                ctx.response.status = 400;
                 ctx.response.body ={
                     success: false,
                     msg: 'No data'}
              
                 }else{

                    try{
                        await client.connect();
                        const deleteOrder = true;
                        const userIdPanier = product.fields.UserIdSupprPanier;
                        const supprPanier = await client.queryArray`DELETE FROM panier WHERE idpanier = ${userIdPanier}`;
                        console.log('un panier a été supprimé');
                        ctx.render('./OBV/panier/Panier.ejs',{labels: false,prices: false,total: false,Voyant: true, UserIdPanier: userIdPanier, deletePanier: true});


                    }catch(err){
                        ctx.response.status = 200;
                        ctx.response.body = {
                            success: false,
                            msg: err.toString()
                        }
                    }finally{
                        await client.end();
                    }
                 }

                }
            

    


      //createOrder

     
    

































    export {addProductPanier,supprProductPanier,createUser,findUserCtx,sendUsersInfos,sendUsersInfosDeconnect,verifConnectionAcceuil,verifConnectionConnection, verifConnectionBoutique,useraccountLinked};