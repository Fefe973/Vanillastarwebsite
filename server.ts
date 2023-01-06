import { Application} from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { send } from "https://deno.land/x/oak@v11.1.0/send.ts";
import { viewEngine, ejsEngine, oakAdapter } from "https://deno.land/x/view_engine@v10.5.1/mod.ts"
/*import {
    viewEngine,
    engineFactory,
    adapterFactory,
  } from "https://deno.land/x/view_engine/mod.ts";*/



import router from './routes.ts';

/*const ejsEngine =  engineFactory.getEjsEngine();
const oakAdapter =  adapterFactory.getOakAdapter();*/

const port = Deno.env.get("PORT") || 5000
const app = new Application();


app.use(
  viewEngine(oakAdapter, ejsEngine));
/*app.use(viewEngine(oakAdapter, ejsEngine));*/

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async(ctx,next) => {
  await send(ctx,ctx.request.url.pathname,{
      root: `${Deno.cwd()}`
  });
  next();
});



//deno run --allow-net --allow-read --allow-env server.ts


 
console.log(`Server running on portal ${port}`);

await app.listen();

