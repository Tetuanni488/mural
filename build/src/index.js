"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Base de datos
require('./datebase');
// Inicializa el servidor
class server {
    constructor() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
