<img height="50px" align="right" src="https://raw.githubusercontent.com/fchavonet/fchavonet/main/assets/images/logo-web.png" alt="Web logo">

# Audio Visualizer

## 🔖 Table of contents

<details>
    <summary>
        CLICK TO ENLARGE 😇
    </summary>
    📄 <a href="#description">Description</a>
    <br>
    🎓 <a href="#objectives">Objectives</a>
    <br>
    🔨 <a href="#tech-stack">Tech stack</a>
    <br>
    📂 <a href="#files-description">Files description</a>
    <br>
    💻 <a href="#installation_and_how_to_use">Installation and how to use</a>
    <br>
    🔧 <a href="#whats-next">What's next?</a>
    <br>
    ♥️ <a href="#thanks">Thanks</a>
    <br>
    👷 <a href="#authors">Authors</a>
</details>

## 📄 <span id="description">Description</span>

This project is an interactive web-based audio visualizer using the Web Audio API and Canvas.
It captures real-time audio input from your microphone and displays a circular animated visualization that responds dynamically to the audio frequencies.

## 🎓 <span id="objectives">Objectives</span>

- Capture and analyze real-time audio from the microphone.
- Render a circular bar-style visualizer using the Canvas API.
- Strengthen JavaScript skills in audio processing and animation.

## 🔨 <span id="tech-stack">Tech stack</span>

<p align="left">
    <img src="https://img.shields.io/badge/HTML5-e34f26?logo=html5&logoColor=white&style=for-the-badge" alt="HTML5 badge">
    <img src="https://img.shields.io/badge/CSS3-1572b6?logo=css3&logoColor=white&style=for-the-badge" alt="CSS3 badge">
    <img src="https://img.shields.io/badge/JAVASCRIPT-f7df1e?logo=javascript&logoColor=black&style=for-the-badge" alt="JavaScript badge">
    <img src="https://img.shields.io/badge/GIT-f05032?logo=git&logoColor=white&style=for-the-badge" alt="Git badge">
    <img src="https://img.shields.io/badge/GITHUB-181717?logo=github&logoColor=white&style=for-the-badge" alt="GitHub badge">
    <img src="https://img.shields.io/badge/MARKDOWN-000000?logo=markdown&logoColor=white&style=for-the-badge" alt="Markdown badge">
    <img src="https://img.shields.io/badge/VS CODE-007acc?logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjZmZmZmZmIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii0wLjUgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KDTxwYXRoIGQ9Im0xNy44NTggMjMuOTk4LTkuNzcxLTkuNDg0LTUuODY2IDQuNDY1LTIuMjIxLTEuMTE1di0xMS43MTlsMi4yMzQtMS4xMjEgNS44NyA0LjQ2OSA5Ljc0Ny05LjQ5MyA1LjU4NyAyLjIzOXYxOS41MzFsLTUuNTc5IDIuMjN6bS0uNTYzLTE2LjE4Ni01LjU3NyA0LjE3MyA1LjU4IDQuMjAyem0tMTQuNTA3IDEuNjg1djUuMDE2bDIuNzg3LTIuNTI1eiIvPgoNPC9nPgoNPC9zdmc+&logoColor=white&style=for-the-badge" alt="VS Code badge">
</p>

## 📂 <span id="files-description">File description</span>

| **FILE**     | **DESCRIPTION**                                             |
| :----------: | ----------------------------------------------------------- |
| `assets`     | Contains the resources required for the repository.         |
| `index.html` | HTML structure of the project.                              |
| `style.css`  | CSS styles and theme for the visualizer.                    |
| `script.js`  | JavaScript logic for audio processing and visual rendering. |
| `README.md`  | The README file you are currently reading 😉.               |

## 💻 <span id="installation_and_how_to_use">Installation and how to use</span>

**Installation:**

1. Clone this repository:
    - Open your preferred Terminal.
    - Navigate to the directory where you want to clone the repository.
    - Run the following command:

```bash
git clone https://github.com/fchavonet/web-audio_visualizer.git
```

2. Open the repository you've just cloned.

**How to use:**

1. Open the `index.html` file in your browser.

2. Allow microphone access when prompted.

3. Speak or play audio through your device. The circular bars will react to the sound in real-time.

You can also test the web application online by clicking [here](https://fchavonet.github.io/web-audio_visualizer/). 

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="./assets/images/screenshots-light.webp">
        <source media="(prefers-color-scheme: light)" srcset="./assets/images/screenshots-dark.webp">
        <img src="./assets/images/screenshot-dark.webp" alt="Screenshots">
    </picture>
</p>

## 🔧 <span id="whats-next">What's next?</span>

- Add support for selecting local audio files as an alternative to microphone input.
- Add visual customizations (bar shape, glow intensity, color themes).
- Export screenshots or short video clips of the visualization.

## ♥️ <span id="thanks">Thanks</span>

- Thanks to the open-source community for documentation and inspiration.

## 👷 <span id="authors">Authors</span>

**Fabien CHAVONET**
- GitHub: [@fchavonet](https://github.com/fchavonet)
