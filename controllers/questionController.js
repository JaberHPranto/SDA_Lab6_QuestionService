import Question from "../Model/questionModel.js";

// Create a question
export const postQuestion = async (req, res) => {
  const question = req.body;
  const newQuestion = new Question(question);
  try {
    await newQuestion.save();
    res.status(201).json("Question has been added");
  } catch (err) {
    console.log(err);
    res.status(409).json({
      error: err.message,
    });
  }
};

// get all questions
