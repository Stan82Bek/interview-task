# INTERVIEW TASK FRAMEWORK

This project automates E-Commerce functionality using Playwright and Cucumber. Follow the steps below to set up the environment, work on the project, and manage it using from Git.

---

## Prerequisites
Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher)
- **npm** (v6 or higher, included with Node.js)
- **Visual Studio Code**
- **Git**
- **Playwright Test**
- **Cucumber** (v10 or higher)
- **dotenv** (v16 or higher)

### Install Required Dependencies
Run the following command to install Playwright Test, Cucumber, and dotenv:
```sh
npm install @playwright/test @cucumber/cucumber dotenv
```

---

## Environment Setup
### Clone the Repository
Project Link: [GitHub Repository](https://github.com/Stan82Bek/interview-task.git)

1. Open **VS Code**.
2. Go to `File` → `New Window`.
3. Click `Clone Git Repository` and paste the project link.

### Install VS Code Extensions
For a better development experience, install the following extensions:
- **Better Comments**
- **Cucumber (Gherkin) Full Support**
- **Material Icon Theme**
- **NPM**
- **npm Intellisense**
- **NPM Run**
- **Playwright Snippets**
- **Tabnine**

### Create a `.env` File
Create a `.env` file at the project root level to store environment variables securely. This file is added to `.gitignore` to prevent exposure.

### Run the "test:tag" Script
To verify the setup, navigate to `package.json` and run the following command:
```sh
npm run test:tag
```

---

## Framework Structure

### 1. `features` Folder
Stores feature files, each with a unique tag name. Tags can be used to run specific features via `package.json`.

### 2. `hooks` Folder
Contains global hooks for Cucumber step definitions.

### 3. `pages` Folder
Stores web elements for different pages.
- `BasePage` should be the parent class of all page classes.
- All page classes must be initialized in `globalPagesSetup.js` for efficient element location.

### 4. `steps` Folder
Holds step definitions matching the respective feature file names.

### 5. `.env` File
Stores necessary environment variables for the automation project. This file should be created at the root level.

### 6. `cucumber.cjs` File
A CommonJS configuration file for CucumberJS, managing settings for BDD-style tests, including:
- Step definitions
- Support files
- Plugins
- Output formatting options

### 7. `package.json` File
Defines the project configuration, including:
- **Project Name:** `library-automation`
- **Version:** `1.0.0`
- **Main Entry File:** `index.js`
- **Scripts:**
    - `test` - Runs CucumberJS tests.
    - `test:tag` - Runs CucumberJS tests filtered by `@tagName`.
    - `Mac-open:report` - Opens the Cucumber report on macOS.
    - `Windows-open:report` - Opens the Cucumber report on Windows.
- **Dependencies:** Cucumber, Playwright, dotenv.
- **Module Type:** `module` (ES Module support).

---

## Conclusion
This framework facilitates efficient BDD-style testing using CucumberJS and Playwright, with cross-platform support for report generation. Follow the steps above to set up and start automating your E-Commerce tests successfully.

