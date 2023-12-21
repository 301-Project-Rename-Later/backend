// 3rd party dependencies
const express = require('express');
const cors = require('cors');
const app = express();
const verifyUser = require('./middleware/authorize.js')


// Middleware
app.use(cors());
app.use(express.json());
app.use(verifyUser);


// Interal Dependencies
const handleGetJobs = require('./handlers/jobApi.js');
const {handleSaveJobs, handleGetSavedJobs} = require('./handlers/savejobs.js')
const handleGetNews = require('./handlers/newsApi.js')
const getCover = require('./handlers/getAI.js');
const getInterviewQuestions = require('./handlers/getInterviewQuestions.js');
const { get } = require('mongoose');



// Route Handlers 
app.get('/jobs', handleGetJobs)
app.post('/jobs', handleSaveJobs)
app.get('/jobs/saved', handleGetSavedJobs)
app.get('/news', handleGetNews);
app.get('/cover', getCover);
app.get('/interview', getInterviewQuestions);


const server = {
  start: function(port) {
    app.listen(port, () => console.log(`Up on port ${port}`))
  }
}


module.exports = server;