const mongoose = require('mongoose');

const url = "mongodb+srv://anjaliraj41095:Anjali1234@cluster0.elh10cx.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))