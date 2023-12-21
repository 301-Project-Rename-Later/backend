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
const {handleSaveJobs, handleGetSavedJobs, deleteSavedJobs} = require('./handlers/savejobs.js')
const handleGetNews = require('./handlers/newsApi.js');
const {getAI , saveAI} = require('./handlers/getAI.js');


//   /delete/12384124

// Route Handlers 
app.get('/jobs', handleGetJobs);
app.delete('/jobs/:id', deleteSavedJobs);
app.post('/jobs', handleSaveJobs);
app.get('/jobs/saved', handleGetSavedJobs);
app.get('/news', handleGetNews);
app.get('/cover', getAI);
app.post('/cover/saved', saveAI);




const server = {
  start: function(port) {
    app.listen(port, () => console.log(`Up on port ${port}`))
  }
}


module.exports = server;