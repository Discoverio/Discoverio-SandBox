import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

const express = require('express');
const mongodb = require('mongodb');

const app = express();
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';

app.get('/random', async (req, res) => {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db('albums');
    const albumIds = await db.collection("albums").distinct("resultat.id");
    const un_album = albumIds[Math.floor(Math.random() * albumIds.length)];

    const album = await db.collection("albums").findOne({ "resultat.id": un_album });

    console.log("Search for " + un_album + " Album...");


    let alb_json = album.resultat;
    for (let i in alb_json) {

        if (alb_json[i].id === un_album) {
            console.log(alb_json[i].id + " true because find " + un_album);
            console.log(alb_json[i]);
            res.send(alb_json[i]);
        }
    }

    // return album;
    client.close();
});

app.listen(3006, () => {
  console.log('Server running on port 3006');
});