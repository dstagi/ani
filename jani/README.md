# Keyframes

- In this activity we will introduce the concept of CSS keyframes, which allow for more complex, multi-step CSS animations. We will also have an overview of how JavaScript can be used to trigger changes in CSS in response to user interaction.

- Open [index.html](index.html) in your browser and take a few moments to demonstrate the web page in the browser. Press each button in turn to trigger each animation.

  ![Keyframes HTML](Images/05-Keyframes-HTML.png)

- Remind the class that when we were working with CSS transitions, our animations only had a start and an end. These have several steps, e.g. for the "Ball Roll" animation, first the div turns into a circle, and then it moves to the right. The "Run Around" animation has even more steps!

- Inform the class that a lot is going on here, but we're going to go through the important concepts one piece at a time. First we'll open our inspector see take a closer look at what exactly is happening to the box whenever a button is clicked:

  ![Keyframes Inspector](Images/06-Keyframes-Inspector.png)

  - Whenever a button is clicked, a new class is added to the box, the animation occurs, and then the class is removed when the animation completes. 

  - The animation itself is being done with pure CSS, but there's some JavaScript code which adds the class (which is what causes the animation) when the button is clicked.

  - Point out that this is similar to when students modified the DOM via the inspector in a previous activity. They were able to manually modify the DOM, adding, removing, and modifying elements on the page. JavaScript allows for this kind of behavior to occur programmatically in response to user interaction

- Open up [style.css](style.css) to demonstrate how these classes are applying the animations:

  ![Keyframes Animation Property](Images/07-Keyframes-Animation-Property.png)

  - First we've defined each class that triggers an animation. Each class has an `animation` property, which at a minimum needs to know the name of the animation that the class should run as well as the animation duration in seconds.

- Scroll down a bit further to our `@keyframes` rules. Explain that this is where we're defining the actual animations used by each class. They all work fundamentally the same, but the `rainbow-animation` rule may be the easiest to go over initially:

  ![Keyframes Animation](Images/08-Keyframes.png)

  - Explain that keyframes are essentially instructions we write for how an element's CSS should change at various points of an animation. We define these points in the form of percentages. For example, an animation that lasts 5 seconds, 50% would define what the CSS should be at 2.5 seconds.

  - In order to give each color equal amount of time, we've divided 100 by the number of colors (7), and have given each color roughly this duration. Often times there may be trial and error or basic arithmetic involved in setting percentages for animations where some portions happen more quickly or slowly than others.

  - Feel free to dissect a few of the other keyframes, but students only need to understand the basic concept.

- Now we're going to further explain what exactly JavaScript's role is here. Students aren't expected to understand the code exactly, the only need a high level understanding of what's happening.

- Open [app.js](app.js) in your editor:

  ![JavaScript Animation](Images/09-JavaScript-Animation.png)

  - The code here can be conceptually understood in three parts:

    - We get references to the elements in the DOM we'll be working with: The box and button elements.

    - We write functions or behavior to execute later when a button is clicked. Each of these just adds a new class name to the box element.

    - We set up event listeners, or code that watches the buttons and waits for the user to click them. When clicked, each button fires off the appropriate function.

    - Once a class is added to the box element, the animation begins. Once the animation is over, the class is removed.

- Again stress that students don't need to understand all of this code, but they should have an idea of what the code is doing for us.

- Take a moment to answer any additional questions but avoid getting too off track.
