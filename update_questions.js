const fs = require('fs');

// Read the current questions file
const questionsContent = fs.readFileSync('questions.js', 'utf8');

// Load code examples
const codeExamples = require('./add_code_examples.js');

// Parse questions array from the file
const questionsMatch = questionsContent.match(/const questions = \[([\s\S]*)\];/);
if (!questionsMatch) {
  console.error('Could not find questions array');
  process.exit(1);
}

// Evaluate the questions array
eval('var questions = [' + questionsMatch[1] + '];');

// Update questions with code examples
Object.keys(codeExamples).forEach(id => {
  const questionIndex = questions.findIndex(q => q.id === parseInt(id));
  if (questionIndex !== -1) {
    questions[questionIndex] = {
      ...questions[questionIndex],
      ...codeExamples[id],
      id: questions[questionIndex].id,
      level: questions[questionIndex].level,
      category: questions[questionIndex].category,
      correct: 0 // Keep correct answer as first option
    };
  }
});

// Generate the new questions.js content
const newContent = `const questions = ${JSON.stringify(questions, null, 4)};`;

// Write the updated content
fs.writeFileSync('questions_with_code.js', newContent);

console.log('Questions updated with code examples successfully!');
console.log(`Total questions: ${questions.length}`);
console.log(`Questions with code: ${Object.keys(codeExamples).length}`);