import express from 'express';
import cors from 'cors';
import { DatabasePostgres } from './databasePostgres';
import './createTable.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { json } from 'stream/consumers';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//cadastro 
app.post('/auth/register', async(req, res) => {
    const ( name, email, password) = req.body;
    if(!name || !email || !password){
        return res.status(400).json({msg: 'Preencha todos os espaços!'});
    }
     
    const existingUser = await datebase.findByEmail(Email);
    if(existingUser){
        return res.status(400).json({msg: 'Esse email já foi cadastrado!'});
    }

})