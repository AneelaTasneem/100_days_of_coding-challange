"use strict";
// Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
//1: Open Developer Tools: Open your browser's developer tools. You can usually do this by pressing F12 or Ctrl + Shift + I (Cmd + Option + I on macOS).
//2: Navigate to the "Sources" Tab: In the developer tools, navigate to the "Sources" tab. This tab allows you to view and debug the JavaScript code running on the current webpage.
//3:Locate Your JavaScript File: In the "Sources" tab, navigate to the JavaScript file you want to debug. This file may be included directly in the HTML file or loaded dynamically by the webpage.
//4:Add a Breakpoint: Click on the line number where you want to add a breakpoint. A blue marker will appear, indicating that a breakpoint has been set. You can set breakpoints on any line of executable code, including function declarations, loops, and conditional statements.
//5:Add a Breakpoint: Click on the line number where you want to add a breakpoint. A blue marker will appear, indicating that a breakpoint has been set. You can set breakpoints on any line of executable code, including function declarations, loops, and conditional statements.
//6:Debug Your Code: In the "Debugger" tab, you can inspect the current state of your code. You can view the values of variables, step through your code one line at a time, and execute code snippets in the console.
//7:Continue Execution: To resume normal execution of your code, click the "Resume script execution" button (usually a play icon) in the debugger toolbar. Your code will continue to run until it reaches another breakpoint or completes execution.
//8:Remove Breakpoints: To remove a breakpoint, simply click on the blue marker on the line number again. The breakpoint will be removed, and your code will no longer pause at that line.
// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, find this script, and click on the line number where you want to pause execution. When you reload or run your page, execution will pause at the breakpoint.
