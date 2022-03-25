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

// Get all questions
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find({});
    res.status(200).json(questions);
  } catch (err) {
    res.status(401).json({
      error: err.message,
    });
  }
};
