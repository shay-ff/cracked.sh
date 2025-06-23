import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // from Firebase
  codeforcesHandle: { type: String, required: true },
  elo: { type: Number, default: 1500 },

  solvedProblems: [
    {
      slug: { type: String, required: true }, // e.g. 'two-sum'
      solved: { type: Boolean, default: false },
      lastSubmittedAt: { type: Date, default: Date.now },
    },
  ],

  isVerified: { type: Boolean, default: false },

  verifyTask: {
    contestId: Number,
    index: String,
    assignedAt: Date,
  },
});


export const User = mongoose.models.User || mongoose.model("User", userSchema);
