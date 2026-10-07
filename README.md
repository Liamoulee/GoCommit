# GoCommit
Software that allows you to automatically create commits
## About
The project is currently in development
## Getting Started
1. **Install the requirements**

&emsp;&emsp;• [Node.js](https://nodejs.org/)<br>
&emsp;&emsp;• [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

2. **Clone this repository**
```bash
git clone https://github.com/Liamoulee/GoCommit.git
cd GoCommit
```
3. **Set up the project**

&emsp;&emsp;Initialize a new Node.js project:
```bash
npm init -y
```
4. **Install the required npm modules**

&emsp;&emsp;You'll need a few modules to get everything running smoothly. Install them all with:
```bash
npm install jsonfile moment simple-git random
```
5. **Personalize the code**

&emsp;&emsp;**Starting limit date**

&emsp;&emsp;Change the starting limit date of commit by simply modifying line 28 in `index.js`

&emsp;&emsp;**Example:**

&emsp;&emsp;I don't want to commit before `1999/01/01`, so:
```js
const startDate = moment("1999-01-01");
```
&emsp;&emsp;**Number of commits**

&emsp;&emsp;Change the number of commits by simply modifying line 52 in `index.js`

&emsp;&emsp;**Example:**

&emsp;&emsp;I only want to do 100 commits, so:
```js
makeCommits(100);
```
6. **Launch**
```bash
node index.js
```