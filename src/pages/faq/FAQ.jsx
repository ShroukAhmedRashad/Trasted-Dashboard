import React, { useState } from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails, Typography, Box,
  Grid, Card, CardContent, Button, TextField, IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
const FAQ = () => {
  const [showInputFields, setShowInputFields] = useState(false); // Toggle input fields
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [faqData, setFaqData] = useState([
    
    {
      question: "What programming languages do you offer courses in?",
      answer: "We offer courses in a variety of programming languages including JavaScript, Python, Java, C++, and more. Check our course catalog for the complete list."
    },
    {
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, simply navigate to the 'Courses' section, select the course you are interested in, and click the 'Enroll' button. You will be guided through the registration process."
    },
    {
      question: "Are your courses beginner-friendly?",
      answer: "Yes, we offer courses for all skill levels, including beginners. Each course is designed with a structured curriculum to help you progress from basic to advanced concepts."
    },
    {
      question: "Can I get a certificate upon completing a course?",
      answer: "Yes, upon successful completion of a course, you will receive a certificate that you can add to your resume or LinkedIn profile."
    },
    {
      question: "How do I access course materials?",
      answer: "Course materials are accessible through our online learning platform. Once enrolled, you will receive instructions on how to log in and access all course resources."
    },
    {
      question: "What if I need help with a coding problem?",
      answer: "If you encounter any issues or need help with coding problems, you can reach out to our community forums or contact our support team for assistance."
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Prerequisites vary by course. Some courses may require prior knowledge of basic programming concepts, while others are designed for absolute beginners. Check the course description for details."
    },
    {
      question: "Can I access the courses on mobile devices?",
      answer: "Yes, our platform is mobile-friendly, and you can access course materials and participate in classes from your smartphone or tablet."
    },
    {
      question: "Do you offer any free courses?",
      answer: "We do offer some free introductory courses to give you a taste of what we offer. Check the 'Free Courses' section on our website for available options."
    },
    {
      question: "How can I provide feedback on a course?",
      answer: "We value your feedback! After completing a course, you will have the opportunity to provide feedback through a survey. Your suggestions help us improve our courses and services."
    },
    {
      question: "What is the duration of each course?",
      answer: "Course durations vary depending on the complexity and depth of the material. Typically, courses range from a few weeks to several months. Check the course details for specific information."
    },
    {
      question: "Are there any group discounts available?",
      answer: "Yes, we offer group discounts for organizations or teams enrolling in our courses. Contact us for more information on pricing and discount options."
    },
    {
      question: "Can I switch courses after enrolling?",
      answer: "Yes, you can switch courses if you need to. Contact our support team to assist with the transition."
    },
    {
      question: "What is the refund policy?",
      answer: "Our refund policy varies depending on the course and its duration. Generally, we offer a refund within the first week of enrollment. Please review our refund policy on the course page for more details."
    },
    {
      question: "How do I track my progress in a course?",
      answer: "You can track your progress through the course dashboard on our platform. It will show your completed modules, grades, and overall progress."
    },
    {
      question: "Are there any career services available?",
      answer: "Yes, we offer career services such as resume reviews, interview preparation, and job placement assistance for our students."
    },
    {
      question: "Can I access the course after it ends?",
      answer: "Yes, you will have access to course materials and resources for a period after the course ends. Check the course details for the specific access duration."
    },
    {
      question: "How often are new courses added?",
      answer: "We regularly update our course catalog with new content and subjects. Subscribe to our newsletter or follow us on social media to stay updated on new course offerings."
    }
  ]);


  const [editIndex, setEditIndex] = useState(null); // Track the question being edited
  const [editQuestion, setEditQuestion] = useState('');
  const [editAnswer, setEditAnswer] = useState('');
  
  const handleAddNewQuestion = () => {
    setShowInputFields(true); // Show input fields on button click
  };

  const handlePublish = () => {
    if (newQuestion && newAnswer) {
      // Add the new question to the FAQ list
      setFaqData([...faqData, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion('');
      setNewAnswer('');
      setShowInputFields(false); // Hide the input fields after publishing
    }
  };


  const handleDelete = (index) => {
    // Remove the selected question
    setFaqData(faqData.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    // Enter edit mode for the selected question
    setEditIndex(index);
    setEditQuestion(faqData[index].question);
    setEditAnswer(faqData[index].answer);
  };

  const handleSave = (index) => {
    // Save the edited question and answer
    const updatedFaqs = faqData.map((faq, i) => 
      i === index ? { question: editQuestion, answer: editAnswer } : faq
    );
    setFaqData(updatedFaqs);
    setEditIndex(null);
    setEditQuestion('');
    setEditAnswer('');
  };

  const handleCancelEdit = () => {
    // Cancel the editing process
    setEditIndex(null);
    setEditQuestion('');
    setEditAnswer('');
  };



  return (
    <Box sx={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{mt:8}}>
        Frequently Asked Questions
      </Typography>

      {/* Display existing FAQs */}
      {faqData.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{ backgroundColor: '#f7f7f7', borderRadius: 1 }}
          >
            {editIndex === index ? (
              // Display input fields if the question is being edited
              <>
                <TextField
                  fullWidth
                  label="Edit Question"
                  value={editQuestion}
                  onChange={(e) => setEditQuestion(e.target.value)}
                  sx={{ mb: 1 }}
                />
                <TextField
                  fullWidth
                  label="Edit Answer"
                  value={editAnswer}
                  onChange={(e) => setEditAnswer(e.target.value)}
                  sx={{ mb: 1 }}
                />
              </>
            ) : (
              <Typography variant="h6">{faq.question}</Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            {editIndex === index ? (
              <Box>
                {/* Edit controls */}
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<SaveIcon />}
                  onClick={() => handleSave(index)}
                  sx={{ mr: 1 }}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<CancelIcon />}
                  onClick={handleCancelEdit}
                  sx={{ mr: 1 }}
                >
                  Cancel
                </Button>
              </Box>
            ) : (
              <Typography>{faq.answer}</Typography>
            )}

            {/* Action buttons: Edit and Delete */}
            {editIndex !== index && (
              <Box sx={{ mt: 2 }}>
                <IconButton onClick={() => handleEdit(index)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Add New Question Button */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddNewQuestion}
                sx={{ mr: 2, mb: 2 }}
              >
                Add new question
              </Button>
            </Box>

            {/* Show input fields for adding new question */}
            {showInputFields && (
              <Box>
                <TextField
                  fullWidth
                  label="New Question"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="New Answer"
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  color="success"
                  onClick={handlePublish}
                  sx={{ mr: 2, mb: 2 }}
                >
                  Publish
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Box>
          ) }

export default FAQ;
