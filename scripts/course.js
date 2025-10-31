const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

/*-----------------------COURSES COMPLETED-----------------------*/

function isComplete(courseElement) {
    const courseId = parseInt(courseElement.id);
    const course = courses.find(c => courseId === c.number);

    if (course && course.completed === true) {
        courseElement.classList.add("completed");
        courseElement.textContent += " ✓";
    }
}

const cse110 = document.getElementById("110");
isComplete(cse110);

const cse111 = document.getElementById("111");
isComplete(cse111);

const cse210 = document.getElementById("210");
isComplete(cse210);

const wdd130 = document.getElementById("130");
isComplete(wdd130);

const wdd131 = document.getElementById("131");
isComplete(wdd131);

const wdd231 = document.getElementById("231");
isComplete(wdd231);

/*-----------------------BUTTON SELECTORS-----------------------*/

const allButton = document.querySelector("#all-btn");
const cseButton = document.querySelector("#cse-btn");
const wddButton = document.querySelector("#wdd-btn");

const cseCourses = document.querySelector("#cse");
const wddCourses = document.querySelector("#wdd");

const credits = document.querySelector('#credits');
credits.innerHTML = `0`;


allButton.addEventListener('click', () => {
    cseCourses.classList.add('show')
    wddCourses.classList.add('show')
    credits.innerHTML = `12`
});

cseButton.addEventListener('click', () => {
    cseCourses.classList.add('show')
    wddCourses.classList.remove('show')
    credits.innerHTML = `6`
});

wddButton.addEventListener('click', () => {
    wddCourses.classList.add('show')
    cseCourses.classList.remove('show')
    credits.innerHTML = `6`
});

