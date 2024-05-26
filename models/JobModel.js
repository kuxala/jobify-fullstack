import mongoose, { Schema } from "mongoose"
import {JOB_STATUS, JOB_TYPE } from "../utils/constants.js"

// console.log("ObjectId: ", mongoose.Types.ObjectId)
const JobSchema = new mongoose.Schema({
    company: String,
    position: String,
    jobStatus: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: JOB_STATUS.PENDING
    },
    jobType: {
        type: String,
        enum: ['full-time', 'part-time', 'internship'],
        default: JOB_STATUS.FULL_TIME
    },
    jobLocation: {
        type: String,
        default: "my city"
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export default mongoose.model("Job", JobSchema)