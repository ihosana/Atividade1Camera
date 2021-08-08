import SQLite from 'react-native-sqlite-storage' 
SQLite.DEBUG(true); 
SQLite.enablePromise(true); 
const database_name = "projeto4.db";
const database_version = "1.0"; 
const database_displayname = "crud projeto4"; 
const database_size = 200000; 
export default class Banco { 
    conectar() { 
        let db; 
        return new Promise((resolve) => { 
            console.log("verificando a conexão"); 
            SQLite.echoTest().then(() => { 
                console.log("estar tudo OK seguindooo!!"); 
                console.log("abrindo o banco"); 
                SQLite.openDatabase(database_name, database_version, database_displayname, database_size).then(DB => { 
                    db = DB; 
                    console.log("banco de dados aBERTO"); 
                    db.executeSql("SELECT 1 FROM Item LIMIT 1").then( 
                        () => { 
                            console.log("O banco de dados estar pronto") 
                        }).catch((error) => { 
                            console.log("erro recebido:", error); 
                            console.log("o banco de dados não estar pronto"); 
                            db.transaction((tx) => { 
                                tx.executeSql("CREATE TABLE IF NOT EXISTS Item(id INTEGER PRIMARY KEY AUTOINCREMENT,nome varchar(60), finalidade varchar(10), valor int(10), image text )");
                            }).then(() => { 
                                console.log("TABELA criada!!!!"); 
                            }).catch(error => { 
                                console.log(error); 
                            }); 
                        }); 
                    resolve(db); 
                }).catch(error => { 
                    console.log("teste echotest"); 
                }); 
            }).catch(error => { 
                console.log("teste echotest"); 
            }); 
        }) 
    } 
    desconectar(db) { 
        if (db) { 
            console.log("fechando o banco") 
            db.close().then(status => { 
                console.log("O banco estar desconectado"); 
            }).catch(error => { 
                this.errorCB(error); 
            }); 
        } 

        else { 
            console.log("A conexão com o banco não estar aberta"); 
        } 
    } 
    listar() { 
        return new Promise((resolve) => { 
            const item = []; 
            this.conectar().then((db) => { 
                db.transaction((tx) => { 
                    tx.executeSql('SELECT* FROM Item', []).then(([tx, results]) => { 
                        console.log("Consulta completa"); 
                        var len = results.rows.length; 
                        for (let i = 0; i < len; i++) { 
                            let row = results.rows.item(i);
                            const { id, nome, finalidade, valor, image } = row; 
                            item.push({  id, nome, finalidade, valor, image }); 
                        } 
                        console.log(item); 
                        resolve(item); 
                    }); 
                 }).then((result) => { 
                    this.desconectar(db); 
                }).catch((err) => { 
                    console.log(err); 
                }); 
            }).catch((err) => { 
                console.log(err); 
            }); 
        }); 
    } 
    deletar(id) {  
        console.log("apagando") 
        return new Promise((resolve) => {     
            this.conectar().then((db) => {       
                db.transaction((tx) => {     
                    tx.executeSql('DELETE FROM Object WHERE id = ?', [id]).then(([tx, results]) => {           
                        console.log(results);           
                        resolve(results);         
                    });       
                }).then((result) => {         
                    this.desconectar(db);       
                }).catch((err) => {         
                    console.log(err);       
                });     
            }).catch((err) => {       
                console.log(err);     
            });   
        });   
    } 
    buscarId(id) {   
        console.log(id);   
        return new Promise((resolve) => {     
            this.conectar().then((db) => {       
                db.transaction((tx) => {    
                    tx.executeSql('SELECT * FROM Item id = ?', [id]).then(([tx,results]) => {           
                      console.log(results);          
                      if(results.rows.length > 0) {             
                          let row = results.rows.Item(0);             
                          resolve(row);           
                      }         
                  });       
                }).then((result) => {         
                    this.desconectar(db);       
                }).catch((err) => {         
                    console.log(err);       
                });     
            }).catch((err) => {       
                console.log(err);     
            });   
        });   
    } 
    add(item) {   
        return new Promise((resolve) => {     
            this.conectar().then((db) => {       
                db.transaction((tx) => {      
                    tx.executeSql('INSERT INTO Item VALUES (?, ?, ?, ?, ?)', [item.id, item.nome, item.finalidade,item.valor, item.image]).then(([tx, results]) => {  
                        resolve(results);         
                    });       
                }).then((result) => {         
                    this.desconectar(db);       
                }).catch((err) => {         
                    console.log(err);       
                });     
            }).catch((err) => {       
                console.log(err);     
            });   
        });   
    } 
    atualiza(id, item) {
        return new Promise((resolve) => {
            this.conectar().then((db) => {
                db.transaction((tx) => {       
                    tx.executeSql('UPDATE Item SET  nome = ?,finalidade=?, valor = ?, image= ?, WHERE id = ?', [ item.nome, item.finalidade,item.valor, item.image, id]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }
 
  

} 