# Bic Rouge: Revolutionizing Theoretical Exam Grading with AI

An intelligent system leveraging Large Language Models (LLMs) to assist teachers in grading theoretical exams, enhancing educational accessibility and efficiency.

## Table of Contents

1. [Introduction](https://www.google.com/search?q=%23introduction "null")
2. [The Challenge in Education](https://www.google.com/search?q=%23the-challenge-in-education "null")
3. [What is Bic Rouge?](https://www.google.com/search?q=%23what-is-bic-rouge "null")
4. [Key Features](https://www.google.com/search?q=%23key-features "null")
5. [Methodology & Architecture](https://www.google.com/search?q=%23methodology--architecture "null")
6. [Experimental Results](https://www.google.com/search?q=%23experimental-results "null")
7. [Future Work](https://www.google.com/search?q=%23future-work "null")
8. [Deployment](https://www.google.com/search?q=%23deployment "null")

   - [Local Development](https://www.google.com/search?q=%23local-development "null")
   - [GitHub Pages Deployment](https://www.google.com/search?q=%23github-pages-deployment "null")

9. [Authors & Acknowledgements](https://www.google.com/search?q=%23authors--acknowledgements "null")
10. [License](https://www.google.com/search?q=%23license "null")
11. [Contact](https://www.google.com/search?q=%23contact "null")

## Introduction

Bic Rouge is a research project focused on transforming the traditional, time-consuming, and often subjective process of grading theoretical exams. By harnessing the power of advanced Large Language Models, Bic Rouge aims to provide educators with an efficient, consistent, and fair grading assistant, ultimately improving personalized student feedback and addressing high student-to-teacher ratios.

## The Challenge in Education

Across many regions, particularly in Africa, high student-to-teacher ratios (reaching up to 1/200 in the Democratic Republic of the Congo) pose significant challenges to providing quality education. Manual grading of theoretical exams exacerbates this issue, leading to teacher burnout and hindering timely, personalized student feedback.

## What is Bic Rouge?

Bic Rouge is an intelligent system leveraging Large Language Models (LLMs) to assist teachers in grading theoretical exams. Our goal is to empower educators, making grading more efficient, consistent, and fair for every student.

## Key Features

- **Automated Correction Generation:** Generate accurate corrections for theoretical exams automatically using advanced LLMs.
- **Teacher Validation & Adjustment Interface:** Teachers can easily validate and adjust generated corrections, maintaining control and ensuring accuracy.
- **Immediate Personalized Student Feedback:** Provide students with instant, personalized feedback to accelerate their learning.
- **Modular & Scalable Architecture:** Built for flexibility and growth, easily adapting to increasing demands and new features.

## Methodology & Architecture

The Bic Rouge system is built with **Python**, **FastAPI** for the backend API, and **ReactJS** for the frontend, deployed on **Azure AI**. This robust architecture ensures seamless interaction from student submission to teacher validation and feedback.

### LLM Integration

We rigorously evaluated and compared two powerful Large Language Models for this task:

- **GPT-3.5 Turbo:** A proprietary model known for its reliability and high performance in various Natural Language Processing (NLP) tasks.
- **Llama 3 8B-Instruct:** A leading open-source model, highly prized for its accessibility, adaptability, and strong community support.

### System Workflow

(A diagram illustrating the system workflow would typically go here, showing the flow from student submission to LLM processing, teacher validation, and feedback delivery.)

## Experimental Results

Our evaluation focused on coherence, fluency, and semantic similarity with human-graded responses, using automated test results from Azure AI Studio Evaluation. Each metric is rated on a scale from 1 to 5, where 5 is the best score.

The project's landing page includes an interactive dashboard where you can compare the performance of GPT-3.5 Turbo and Llama 3 8B Instruct across these metrics.

### Interpretation of Results:

- **Coherence and Fluency:** GPT-3.5 Turbo scores slightly higher than LLaMA 3 8B Instruct, indicating better performance in generating logical and natural-sounding text.
- **Similarity:** Both models perform slightly equally, struggling to generate text closely matching the grounded truth (teacher's correction).

**Conclusion:** GPT-3.5 Turbo has a slight edge over LLAMA 3 8B Instruct in coherence and fluency, while both models are slightly similar in handling similarity tasks.

## Future Work

- **Enhancing Accuracy:** Fine-tuning models and integrating Retrieval-Augmented Generation (RAG) for context-aware evaluations to further improve grading precision.
- **Broader Accessibility:** Developing a mobile application and integrating vision models to grade handwritten exams, addressing infrastructure limitations in diverse educational settings.
- **Exploring New Models:** Continuously integrating more advanced LLMs as they become available to ensure Bic Rouge remains at the forefront of AI-powered grading.

## Deployment

This section outlines how to set up and deploy the Bic Rouge frontend landing page.

### Local Development

1. **Clone the repository:**

   ```
   git clone https://github.com/Ashuza11/bicrougelading.git
   cd bicrougelading
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the development server:**

   ```
   npm run dev
   ```

   The application will typically be available at `http://localhost:3000`.

### GitHub Pages Deployment

This project is configured for deployment to GitHub Pages with a custom domain (`http://bicrouge.me/`).

1. **Ensure `gh-pages` is installed:**

   ```
   npm install --save-dev gh-pages
   ```

2. **Configure `package.json`:** Verify your `package.json` has the following entries:

   ```
   {
     "homepage": "http://bicrouge.me/",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist -b main"
     }
   }
   ```

   - `homepage`: Must point to your custom domain.
   - `predeploy`: Runs the build script before deployment.
   - `deploy`: Uses `gh-pages` to push the `dist` folder (Vite's build output) to the `main` branch.

3. **Configure `vite.config.js`:** Ensure your `vite.config.js` has the correct `base` path for a custom domain:

   ```
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/', // CRITICAL: For custom domains served from the root, base should be '/'
     // ... other configurations
   })
   ```

4. **Run the deployment script:**

   ```
   npm run deploy
   ```

   This command will build your application and push the `dist` folder content to your `main` branch on GitHub.

5. **GitHub Pages Settings:** On your GitHub repository (`https://github.com/Ashuza11/bicrougelading`), go to **Settings > Pages**.

   - Under "Build and deployment," ensure "Source" is set to "Deploy from a branch."
   - For "Branch," select `main` and the folder `/ (root)`.
   - Ensure your custom domain (`bicrouge.me`) is correctly configured and the DNS check is successful.
   - Wait for the TLS certificate to provision if it's new (this can take up to 24 hours).

## Authors & Acknowledgements

- **MUHIGIRI Ashuza Albin'**
- **Prof. BARAKA MUSHAGE Olivier**
- **Ms. KRAME KADURHA David**

**Affiliations:** Université Libre des Pays des Grands Lacs, Democratic Republic of the Congo (DRC) [ulpgl.net](https://ulpgl.net "null")

**Acknowledgements:** Deep Learning Indaba 2025 | #DLIndaba2025

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md "null") file for details. (You might need to create a `LICENSE.md` file in your repository if you haven't already.)

## Contact

For any inquiries, please contact: [Your Email Address] (e.g., ashuza.albin@example.com)
