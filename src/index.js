import express from 'express';
import bodyParser from 'body-parser';
import route from './routes';

const app =  express();
//use the middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/search',route);

app.get('/',(req,res)=>{
     res.send('I love my country so much');
 });

const PORT = process.env.PORT || 4000;
 app.listen(PORT,()=>{
     console.log(`App is learning on port ${PORT}`);
 });

 export default app;
