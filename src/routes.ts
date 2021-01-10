import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getAllUsers } from "./handler/getAllUsers.ts";

const router = new Router();

router.get('/', ctx => {
    ctx.response.body = "Hello world";
})

router.get('/users', getAllUsers)

export default router;