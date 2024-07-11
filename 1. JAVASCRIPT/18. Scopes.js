/*

SCOPES IN JAVASCRIPTS :-

In JavaScript, scope determines the accessibility or visibility of variables and functions in different parts of your code. Understanding scope is essential for managing and organizing variables and functions to avoid conflicts and unexpected behaviors.

Types of Scope in JavaScript

1. Global Scope
Variables declared outside any function or block are in the global scope. These variables can be accessed from anywhere in your code.

var globalVariable = "I am global";

function checkGlobalScope() {
  console.log(globalVariable); // Accessible here
}

checkGlobalScope();
console.log(globalVariable); // Accessible here as well

----------

2. Local/Function Scope
Variables declared inside a function are in the local or function scope. These variables can only be accessed within that function.

function localScopeExample() {
  var localVariable = "I am local";
  console.log(localVariable); // Accessible here
}

localScopeExample();
console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined

----------

3. Block Scope
Variables declared with let or const inside a block (e.g., inside curly braces {}) are block-scoped. These variables can only be accessed within that block.

if (true) {
  let blockScopedVariable = "I am block scoped";
  console.log(blockScopedVariable); // Accessible here
}

console.log(blockScopedVariable); // Uncaught ReferenceError: blockScopedVariable is not defined

--------------------

Lexical Scoping :- 

Lexical scoping is a way of managing variable access in javascript based on the phyusical structure of the code. 

Key concept: the scope of a cariable is determind by its position in the source code, specifically where it is declared.

Lexical scoping in javascript is like a set of rules that dtermines where a variable can be used in your code. it follows the physical structure of your code. so if a variable is declared inside a function or block, it can usually be used only within that function or block.

-----------------

Scope Chaining :- 

Scope chaining is the process by which javascript, when looking for the value of variable, checks the current scope and then looks in the outer (enclosing) scopes until it finds the variable the global scope.

Key concept: variables in inner scopes have access to variables in their outer scopes, creating a chain of accessible scopes.

*/ 

