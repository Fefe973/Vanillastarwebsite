import {Router} from "https://deno.land/x/oak@v11.1.0/mod.ts";



import {addProductPanier,supprProductPanier,createUser,findUserCtx,sendUsersInfos,sendUsersInfosDeconnect,verifConnectionAcceuil,verifConnectionConnection,verifConnectionBoutique,useraccountLinked,getCheckout,createOrder,capturePayment} from './controllers/users.ts';



//import {showDate} from './EJS/showdate.js';


  
const router = new Router();

//deno run --allow-net --allow-read --allow-env server.ts

router.get('/OBV/vanille',(ctx:any)=>{
  ctx.render('./OBV/vanille/vanille.ejs');
});

router.get('/OBV/register',(ctx:any)=>{
  ctx.render('./OBV/register/register.ejs',{Voyant: false});
});



router.get('/OBV/connexion',verifConnectionConnection);




router.get('/OBV/acceuil',verifConnectionAcceuil);

router.get('/OBV/boutique',verifConnectionBoutique);



// De la connexion au compte client







// création d'utilisateur et redirection sur page de connexion ... 
router.post('/OBV/register',createUser);

// Retour boutique après connexion 
router.post('/OBV/boutique',sendUsersInfos);

// Deconnexion compte client
router.post('/OBV/acceuil',sendUsersInfosDeconnect);

router.post('/OBV/useraccount',findUserCtx);


// De la boutique au panier 
router.post('/OBV/panier',addProductPanier);

router.post('/OBV/emptyPanier',supprProductPanier);

//De la boutique au useraccount après connexion des
router.post('/OBV/useraccountLinked',useraccountLinked);






 export default router