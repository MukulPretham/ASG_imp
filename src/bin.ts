import { app } from ".";
import clustur from "cluster"
import os from 'os';

const cores = os.cpus().length
for(let i = 0; i < cores ; i++){
    if(clustur.isPrimary){
        clustur.fork()
    }else{
        app.listen(3000,()=>{
            console.log("cluster process started")
        })
    }
}


