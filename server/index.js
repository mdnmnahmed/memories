import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const MONGODB_URL = 'mongodb+srv://namazon:namazon@cluster0.lro23.mongodb.net/namazondb?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((res) => {
        console.log("Connected with MongoDB ");
    })
    .catch((err) => {
        console.log("Error in with MongoDB ", err);
    });

mongoose.set('useFindAndModify', false); //To prevent warnings at console

app.listen(PORT, () => {
    console.log('App Started at Port: ', PORT);
});