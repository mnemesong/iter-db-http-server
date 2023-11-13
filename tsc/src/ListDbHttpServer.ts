import { createServer } from "http";
import { ListDbNetMessage } from "./ListDbNetMessage";
import { ListNetShell } from "./ListNetShell";

export const runServer = (shell: ListNetShell) => {
    const server = createServer((req, res) => {
        const url = req.url
        const method = req.method
        if (req.method == 'POST') {
            var body = '';
            req.on('data', function (data) {
                body += data;
                if (body.length > 1e7)
                    req.connection.destroy();
            });
            req.on('end', function () {
                const msg = new ListDbNetMessage(JSON.parse(body))
                shell.handleMessage(msg)
                res.setHeader("Content-type", "application/json")
                res.end(msg.getResponse(), "utf-8")
            });
        }
    })

    server.listen(3000, () => {
        console.log("Server has been started")
    })
}