1.What is JSX, and why is it used?
Answer : JSX is JavaScript XML , it's help us write HTML code inside JavaScript.

2.What is the difference between State and Props?
Answer : State is managed Data inside Component , & this data can be Change;
where prop help us to pass data Parent to Child it's read only we cannot change or modefy data by props from child to parent.

3.What is the useState hook, and how does it work?
Answer : useState Hook help us store and update data inside a component. Means useState allows a component to remember values and re-render when they change.

4.How can you share state between components in React?
Answer : By declaring the State in Common or root Parent & share it by props to every child component.

5.How is event handling done in React?
Answer : Event Handeling can be done in many ways most common 3 ways are:
i. when parameter Mendatory : onClick={() => handleClick(parameter)}
ii. when no parameter : onClick={handleClick}
iii. by using Aero Function :  onClick={() => console.log("Clicked!")}