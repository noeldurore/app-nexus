/* 
 * Filename: complexCode.js
 * Description: This code demonstrates a complex example of handling asynchronous tasks using Promises, AJAX, and ES6 syntax.
 */

// Utility function to simulate asynchronous task with random delay
function simulateAsyncTask() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 1000);
    setTimeout(resolve, delay);
  });
}

// Utility function to make AJAX requests
function ajaxRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(Error(xhr.statusText));
        }
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  });
}

// Complex function that uses Promises, AJAX, and ES6 syntax
async function complexCode() {
  try {
    const data = await ajaxRequest('https://api.example.com/data');
    console.log('Received data:', data);
    
    await simulateAsyncTask();
    console.log('Async task completed.');
    
    const results = [];
    const promises = [];
    
    for (let i = 0; i < 5; i++) {
      const promise = new Promise((resolve) => {
        setTimeout(() => resolve(i), i * 1000);
      });
      promises.push(promise);
    }
    
    const resolvedPromises = await Promise.all(promises);
    console.log('Resolved promises:', resolvedPromises);
    
    resolvedPromises.forEach((value) => {
      results.push(value * 2);
    });
    
    console.log('Final results:', results);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Execute the complex code
complexCode();