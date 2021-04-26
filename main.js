particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});

const instance = new Typewriter('#typewriter', {
    loop: false
});

instance.typeString("Greetings!<br>")
    .pauseFor(1000)
    .typeString('I am Aaron.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am a <br>Full Stack Web Developer <br style="margin-bottom:20px">')
    .pauseFor(500)
    .typeString('<span style="font-size:30px">HTML, CSS, JavaScript, React, Node.JS, Python</span>')
    .pauseFor(1000)
    .deleteChars(45)
    .typeString('<span style="font-size:30px">Experienced using Slack, Trello, and Notion</spam>')
    .pauseFor(1000)
    .deleteChars(43)
    .typeString('<span style="font-size:30px">Deployed on Netlify and Heroku</span>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('I enjoy creating new projects and problem solving.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Check out my work.<br>')
    .typeString('<span style="font-size:30px">https://aaronw4.github.io/Resume-Portfolio/portfolio.html</span>')
    .pauseFor(1000)
    .deleteAll()
    .start();