import Database from 'better-sqlite3';import path from 'node:path';import fs from 'node:fs';
const DATA_DIR=path.join(process.cwd(),'data'),DB_PATH=path.join(DATA_DIR,'webspark.db');declare global{var webspark_db:Database.Database|undefined}
function createConnection(){if(!fs.existsSync(DATA_DIR))fs.mkdirSync(DATA_DIR,{recursive:true});const db=new Database(DB_PATH);db.pragma('journal_mode = WAL');db.pragma('foreign_keys = ON');db.exec(fs.readFileSync(path.join(process.cwd(),'lib','schema.sql'),'utf8'));return db}
export function getDb(){if(!global.webspark_db){global.webspark_db=createConnection();ensureSeeded()}return global.webspark_db}
let seedAttempted=false;function ensureSeeded(){if(seedAttempted)return;seedAttempted=true;const db=global.webspark_db!;const count=(db.prepare('SELECT COUNT(*) c FROM users').get() as any).c;if(count===0)require('./seed').seedDatabase()}
