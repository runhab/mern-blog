import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './routes/user.route.js';


const mongoURI = 'mongodb://localhost:27017/mernblog';

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

const app = express();


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use('/api/user',userRoutes);





