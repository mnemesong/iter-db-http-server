import { Server, createServer } from "http";
import { IterDbMessage, IterDbShell } from "iter-db"

export const runHttpServer = (shell: IterDbShell, port: number = 3000, corsAllowOrigin: string[] = []) => {
    const server = createServer((req, res) => {
        try {
            if (req.method == 'POST') {
                var body = '';
                req.on('data', function (data) {
                    body += data;
                    if (body.length > 1e7)
                        req.connection.destroy();
                });
                req.on('end', function () {
                    const msg = new IterDbMessage(JSON.parse(body))
                    shell.handleMessage(msg)
                    res.setHeader("Content-type", "application/json")
                    corsAllowOrigin.forEach(h => {
                        res.setHeader("Access-Control-Allow-Origin", h)
                    })
                    res.end(JSON.stringify(msg.getResponse()), "utf-8")
                });
            } else {
                res.setHeader("Content-type", "application/json")
                res.end(JSON.stringify({
                    "error": "Unexcepted error",
                    "details": "message should be POST, given " + req.method
                }), "utf-8")
            }
        } catch (e) {
            res.setHeader("Content-type", "application/json")
            res.end(JSON.stringify({
                "error": "Unexcepted error",
                "details": e.toString ? e.toString() : ""
            }), "utf-8")
        }
    })

    server.listen(port, () => {
        console.log("IterDb has been started as http server on port " + port)
    })
}