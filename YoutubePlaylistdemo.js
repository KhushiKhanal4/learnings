function createCard(thumbnail, title, Cname, views, monthsOld, duration) {
    let viewsNo;
    views = Number(views); // Ensure views is a number

    if (views >= 1000 && views < 1000000) {
        viewsNo = (views / 1000) + 'K';
    } else if (views >= 1000000) {
        viewsNo = (views / 1000000) + 'M';
    } else {
        viewsNo = views;
    }

    let html = `<div class="card">
    <div class="thumbnail">
    <img src="${thumbnail}" alt="">
    <div class="timestamp">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${Cname} • ${viewsNo} views • ${monthsOld} months ago</p>
    </div>
    </div>`;

    document.querySelector(".container").innerHTML += html;
}

createCard(
    "https://i.ytimg.com/vi/9He4UBLyk8Y/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBeKa7KTF79-m1iOJQSw1YJVKIoxQ",
    "Front End Development Roadmap 2024",
    "freeCodeCamp.org",
    736000,
    2,
    "12:09"
);

createCard(
    "https://i.ytimg.com/vi/916GWv2Qs08/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDrScLOZ0aXrGMq7aD1IU3mhDVptA",
    "HTML Tutorial-Website Crash Course for Beginners",
    "freeCodeCamp.org",
    396000,
    2,
    "45:20"
);
createCard(
    "https://i.ytimg.com/vi/OXGznpKZ_sA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDSDA-RInjX5ODmJJcqV-QLsB9Z4Q",
    "CSS Tutorial - Full Course for Beginners",
    "freeCodeCamp.org",
    1800000,
    4,
    "11:08:10"
);
createCard(
    "https://i.ytimg.com/vi/WPqXP_kLzpo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDI_u5Q_KkwQQK6sRduGe6N9IFuYQ",
    "Visual Studio Code Crash Course",
    "freeCodeCamp.org",
    1200000,
    3,
    "1:32:35"
);
createCard(
    "https://i.ytimg.com/vi/jS4aFq5-91M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDG9kdAAuy9B5AZfxUzIvwX0ckHtA",
    "JavaScript Programming-Full Course",
    "freeCodeCamp.org",
    3400000,
    3,
    "7:44:20"
);
createCard(
    "https://i.ytimg.com/vi/_ZvnD73m40o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDUGU4hmclYBnz9P9ROZcZ8cAEvag",
    "Front End Development Roadmap 2024",
    "Prompt Engineering Tutorial - Master ChatGPT and LLM Responses",
    1400000,
    9,
    "41:36"
);

