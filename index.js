import {usersRouter, express} from './controller/users.js';
import {productRouter} from './controller/product.js';
import cookieParser from 'cookie-parser';
import {errorHandling} from './middleware/errorHandling.js';
import cors from 'cors';
import path from 'path';
const app = express()
const port = +process.env.PORT || 4500
app.use(
    express.static('./static'),
    cors(),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser()
)
app.get('^/$|/bebright', (req, res)=>{
    res.statusCode(200).sendFile(path.join(__dirname, './static/index.html'))
})
app.use('/users', usersRouter)
app.use('/product', productRouter)
app.use(errorHandling)
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });