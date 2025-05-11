const cluster = require('cluster');
const os = require('os');
require('dotenv').config();
const express = require('express');
const cors=require('cors')
const Razorpay=require('razorpay')


const { connection } = require('./db');

const { UserRoute } = require('./Routes/UserRoute');
const {courseRoute}=require('./Routes/CourseRoute')
const {ActivityRoute}=require('./Routes/ActivityRoute');
const  {Bookrouter}  = require('./Routes/MybookingRoute');
const PORT=process.env.PORT
// const PORT = 8080
const app = express()
console.log('Bookrouter type:', typeof Bookrouter);

app.use(express.json());
app.use(cors({origin:"*"}))
app.use("/user", UserRoute);
app.use('/activity',ActivityRoute )
app.use('/Booking',Bookrouter)
app.use('/courses',courseRoute)


if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
  
  for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
        cluster.fork();
    });

} else {


    app.get('/', async (req, res) => {
        try {
            res.send({ msg: "hello world" });
        } catch (error) {
            res.send({ error: error.message });
        }
    });

    app.listen(PORT, async () => {
        try {
            await connection;
            console.log(`Worker ${process.pid} connected to DB and listening on PORT ${PORT}`);
        } catch (err) {
            console.error(`Worker ${process.pid} failed to connect to DB`, err);
        }
    });
}
