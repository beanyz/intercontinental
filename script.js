let currentCourse = "course0";

// show a specific course
function goToCourse(courseId) {
    document.querySelectorAll(".course").forEach(course => {
        course.style.display = "none"; // hide rest of courses
    });

    const selectedCourse = document.getElementById(courseId);
    if (selectedCourse) {
        selectedCourse.style.display = "flex"; // show course
        currentCourse = courseId;
    }

    document.getElementById("links").style.display = "none";
}

// only intro visible at start
document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Page loaded! Showing intro screen.");
    goToCourse("course0");
});

// eat food
function eatFood(courseId) {
    const food = document.querySelector(`#${courseId} .food`);
    const plate = document.querySelector(`#${courseId} .plate`);
    // const text = document.querySelector(`#${courseId} .info`);
    if (courseId == "course5") {
        document.getElementById("links").style.display = "flex";
    }

    food.style.display = "none";
    plate.classList.remove("hidden");
    // text.classList.remove("hidden");

    playSoundEffect("sounds/eat.mp3"); // bite sound
}

// next course
function nextCourse(current, next) {
    setTimeout(() => {
        goToCourse(next);
    }, 500);
}

// bite sound effect
function playSoundEffect(soundFile) {
    let sound = new Audio(soundFile);
    sound.volume = 0.5;
    sound.play();
}

// menu animation
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}


