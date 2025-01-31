document.addEventListener("DOMContentLoaded", function() {
   
    const studentData = {
        name: "John Doe",
        age: 20,
        email: "johndoe@example.com",
        major: "Computer Science",
        extracurricular: [
            "Basketball Team",
            "Coding Club",
            "Volunteer at Local Shelter"
        ],
        achievements: [
            "First Place in Hackathon 2024",
            "Best Student Award 2023"
        ],
        progress: [85, 90, 75, 80, 95] 
    };

   
    document.querySelector("#personal-info .info-card").innerHTML = `
        <p>Name: ${studentData.name}</p>
        <p>Age: ${studentData.age}</p>
        <p>Email: ${studentData.email}</p>
        <p>Major: ${studentData.major}</p>
    `;

    const extracurricularList = document.querySelector("#extracurricular-list");
    studentData.extracurricular.forEach(activity => {
        const listItem = document.createElement("li");
        listItem.textContent = activity;
        extracurricularList.appendChild(listItem);
    });

  
    const achievementList = document.querySelector("#achievement-list");
    studentData.achievements.forEach(achievement => {
        const listItem = document.createElement("li");
        listItem.textContent = achievement;
        achievementList.appendChild(listItem);
    });

    
    const ctx = document.getElementById('progressChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5'],
            datasets: [{
                label: 'Academic Progress',
                data: studentData.progress,
                borderColor: '#3498db',
                fill: false
            }]
        }
    });
});
