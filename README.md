# Coding Quiz Game

Test your mastery of web development syntax and concepts with these quizzes on JavaScript, HTML/CSS, and Bootstrap (coming). 
### Game Elements
- Choose among multiple quizzes covering different web development topics
- Quiz score is calculated by time left when completed
- Wrong choices are penalized by subtracting seconds from total time
- Save your highscores and view the highscores of others (presumably)

### Future additions (i.e. things I thought about but didn't have the time or skill to implement)
- Add quizzes covering Bootstrap (& maybe advanced CSS selectors)
- Include quiz type in High Score modal display 
- Include timestamp in high score display
- Order the high scores by descending value

### Assignment notes
- I wrote a large part of the app using jQuery but abandoned that approach since I couldn't easily figure out how to (coherently) mix JavaScript and jQuery.

- The little detail I'm most satified about is disabling the High Scores link while the quiz is running and disabling the #initials input field after submission.

- Bootstrap elements can act in mysterious ways. 

- This assignment was HARD. As I struggled with hiding / displaying page elements, setting input in localstorage and getting it back again, and provoking whole page elements to disappear with a missed closing tag, I gained a new appreciation for the attention to detail it takes to create the simplest of apps.

### Known Bugs
- The object that gets set in local storage started acting wonky when I added the second quiz. That needs to be fixed. Root cause might be underlying Bootstrap style on input field submit, but it could also be my code.

- Right corner time display gets jumpy when seconds are removed for wrong answer choices.

- Handful of display and style issues 


