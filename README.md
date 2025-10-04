# 🌟 Node.js Built-in Modules Assignment

Welcome to your **Node.js Built-in Modules** assignment!  
In this exercise, you'll explore some of Node.js’s most useful **built-in modules** — the tools that come with Node.js right out of the box.  

You’ll practice with:
- 📝 `fs` (File System)
- 🗂️ `path` (Path utilities)
- 💻 `os` (Operating System info)
- 🌐 `http` (Web server)

---

## 🎯 Objective

Learn how to use Node.js built-in modules by writing small, simple programs that:
- Work with files  
- Explore system information  
- Handle file paths  
- Create a tiny web server

---

## 🧱 Setup

1. Create a new folder named:
   ```
   node-builtins-assignment
   ```
2. Inside that folder, create **four JavaScript files**:
   ```
   ├── task1_fs.js
   ├── task2_path.js
   ├── task3_os.js
   └── task4_http.js
   ```

---

## 🧩 Tasks

### 📝 Task 1: Using the `fs` Module
**Goal:** Create and read a file.

1. In `task1_fs.js`, use the `fs` module to:
   - Create a file named `message.txt`
   - Write this text inside:
     ```
     Hello Node.js! This is my first file created with fs module.
     ```
   - Read the file and log its content in the console.

💡 **Hint:**
```js
const fs = require("fs");

fs.writeFileSync("message.txt", "Hello Node.js! This is my first file created with fs module.");
const data = fs.readFileSync("message.txt", "utf8");
console.log(data);
```

---

### 🗂️ Task 2: Using the `path` Module
**Goal:** Learn about file paths.

1. In `task2_path.js`, use the `path` module to:
   - Print the **current file name**
   - Print the **directory name**
   - Join two paths (e.g., `"folder"` and `"myFile.txt"`) and print the result

💡 **Hint:**
```js
const path = require("path");

console.log("File name:", __filename);
console.log("Directory name:", __dirname);
console.log("Joined path:", path.join("folder", "myFile.txt"));
```

---

### 💻 Task 3: Using the `os` Module
**Goal:** Get information about your computer.

1. In `task3_os.js`, use the `os` module to log:
   - Your **computer name**
   - Your **username**
   - Your **operating system type**
   - Your **home directory**

💡 **Hint:**
```js
const os = require("os");

console.log("Computer Name:", os.hostname());
console.log("Username:", os.userInfo().username);
console.log("OS Type:", os.type());
console.log("Home Directory:", os.homedir());
```

---

### 🌐 Task 4: Using the `http` Module
**Goal:** Create your first Node.js server!

1. In `task4_http.js`, use the `http` module to:
   - Create a web server that sends:
     ```
     Hello from my first Node.js server!
     ```
   - Listen on port `3000`

2. Run it and open your browser at:
   ```
   http://localhost:3000
   ```
   You should see your message on the page!


## 🌟 Bonus Challenge (Optional)

Create another file named **`task5_combined.js`**  
Try using **two or more modules together** — for example:

- Use `os` to get your username  
- Use `fs` to create a file that says:  
  ```
  Hello <your name>! Welcome to Node.js.
  ```


## ✅ Submission

Make sure all files (`task1_fs.js`, `task2_path.js`, `task3_os.js`, `task4_http.js`, and optional `task5_combined.js`) are in your repository.  


