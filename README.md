1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById- Return a single element by id
     getElementsByClassName - Return all the smiler class
     querySelector - Return the first matching element using CSS selectors
     querySelectorAll - Return all matching element

2. How do you create and insert a new element into the DOM?   
Ans: First- create an element useing crateElement() 
     Second- add content which i need or want
     Third- append() the content

3. What is Event Bubbling? And how does it work?
 Ans: Event Bubbling work start from deepest target element and then propagates upward to its ancestors in the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?
 Ans: Event Delegation হলো একটি technique যেখানে আমরা child elements এর জন্য event listener সরাসরি না বসিয়ে তাদের parent element এ listener বসাই, এবং event bubbling ব্যবহার করে child element detect করি।

5. What is the difference between preventDefault() and stopPropagation() methods?
 Ans:  preventDefault() - It stop a default behavior of a event
       stopPropagation() -এটি event এর bubbling or capturing stop করে।