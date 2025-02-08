const mongoose = require('mongoose');
const companyDetail = require('./CandidateModel');

const JobSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    company: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "companyDetail", 
        required: true 
    },
    jobtitle:{
        type:String,
        required:true
    },
    description: { 
        type: String, 
        required: true 
    },
    jobType: { 
        type: String, 
        enum: ["Full-time", "Part-time", "Contract", "Internship"],
        required: true 
    },
    salary: { 
        type: Number, 
        required: true 
    },
    location:{
        type:String,
        required:true
    },
    status: { 
        type: String, 
        enum: ["Active", "Closed"], 
        default: "Active" 
    },
    closeDate: { 
        type: Date, 
        required: true 
    },
    postedDate: { 
        type: Date, 
        default: Date.now 
    },
    appliedCandidates: [CandidateSchema], 
    shortlistedCandidates: [CandidateSchema], 
});

const Job = mongoose.model("Job", JobSchema);
module.exports = Job;