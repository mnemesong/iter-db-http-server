import { iterReq } from "iter-db"
import * as uralsAxios from "uralsjs-axios-ajax"

uralsAxios.node.sendAjaxSync({
    url: "http://localhost:3000/",
    method: "post",
    body: {
        data: {
            authToken: "asdlkmsa",
            set: "dasc2"
        }
    }
}, async (res) => { console.log(res.data) })