# GoCommit

Software that allows you to automatically create commits

## About

 The project is currently in developpement

## Getting Started

1. **Install the requirements**
- [Node.js](https://nodejs.org/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. **Clone this repository**
```bash
git clone https://github.com/Liamoulee/GoCommit.git
cd GoCommit
```
3. **Set up the project**<br>
Initialize a new Node.js project:
```bash
npm init -y
  ```
4. **Install the required npm modules**<br>
You'll need a few modules to get everything running smoothly. Install them all with:
  ```bash
  npm install jsonfile moment simple-git random
  ```
5. **Personalize the code**<br>
**Starting limit date**<br>
Change the starting limit date of commit by simply modify the line 28 in ``index.js``<br><br>
**Exemple :**<br>
I dont whant to commit before ``1999/01/01`` so :
```js
const startDate = moment("1999-01-01");
```
**Numbers of commits**<br>
Change the number of commit by cimplify modify the line 52 in ``index.js``<br>
**Exemple :**<br>
I   whant to do only 100 commits so :
```js
makeCommits(100);
```
6. **Launch**
```bash
node index.js
```