const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(cors());
app.use(express.json());

// ===== DATA BASE SETUP =====
const
    username = process.env.USERNAME,
    password = process.env.PASSWORD,
    database = process.env.DATABASE;
    BASE_URL = `mongodb+srv://${username}:${password}@cluster0.aigfhce.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(BASE_URL).then(
    console.log('Connected to Database')
).catch((err) => console.log(err))

// ===== ROUTING =====

const AdminModel = require('./models/Admins');

app.get('/admins', async (req, res) => {
    const admins = await AdminModel.find();
    res.json(admins)
})

app.post('/register', async (req, res) => {
    const {username, password} = req.body;

    const admin = await AdminModel.findOne({username});
    admin && res.json({message: "Admin already exists"});

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newAdmin = new AdminModel({
        username,
        password: hashedPassword
    });

    await newAdmin.save();
    return res.send("Admin created successfully");
});

app.post("/login", async (req, res) => {
    const {username, password} = req.body;

    
    const admin = await AdminModel.findOne({username});
    !admin && res.json({message: "Admin dosen't exist!"});

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    !isPasswordValid && res.json({message: "Username or Password is not correct!"});

    const token = jwt.sign({id: admin._id}, process.env.SECRET)

    return res.json({
        token, adminId : admin._id
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})