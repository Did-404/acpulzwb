

const students = [
    {
        id: 1,
        name: "John Doe",
        grade: "A",
        activities: ["Soccer", "Debate Club"],
        achievements: ["Math Olympiad Winner", "Top of Class"]
    },
    {
        id: 2,
        name: "Jane Smith",
        grade: "B+",
        activities: ["Basketball", "Volunteer Work"],
        achievements: ["Art Exhibition Participant", "Community Service Award"]
    },
    {
        id: 3,
        name: "Sam Johnson",
        grade: "A-",
        activities: ["Chess Club", "Music"],
        achievements: ["Science Fair Winner", "School Band Leader"]
    },
    {
        id: 4,
        name: "Emma Lee",
        grade: "A",
        activities: ["Soccer", "Music"],
        achievements: ["Art Exhibition Winner", "Debate Champion"]
    }
];


function renderStudentList(filteredStudents) {
    const studentListElement = document.getElementById('student-list');
    studentListElement.innerHTML = "";

    filteredStudents.forEach(student => {
        const card = document.createElement('div');
        card.classList.add('student-card');
        card.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>Grade:</strong> ${student.grade}</p>
            <p><strong>Activities:</strong> ${student.activities.join(", ")}</p>
        `;
        card.onclick = () => showStudentDetails(student);
        studentListElement.appendChild(card);
    });
}


function showStudentDetails(student) {
    const details = document.getElementById('student-details');
    details.innerHTML = `
        <h3>${student.name}</h3>
        <p><strong>Grade:</strong> ${student.grade}</p>
        <p><strong>Activities:</strong> ${student.activities.join(", ")}</p>
        <p><strong>Achievements:</strong> ${student.achievements.join(", ")}</p>
    `;
}


document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(query) ||
        student.grade.toLowerCase().includes(query) ||
        student.activities.some(activity => activity.toLowerCase().includes(query))
    );
    renderStudentList(filteredStudents);
});


renderStudentList(students);


const activityChart = document.getElementById('activityChart').getContext('2d');
const activityData = {
    labels: students.map(student => student.name),
    datasets: [{
        label: 'Number of Activities',
        data: students.map(student => student.activities.length),
        backgroundColor: 'rgba(52, 152, 219, 0.6)',
        borderColor: 'rgba(52, 152, 219, 1)',
        borderWidth: 1
    }]
};

const activityOptions = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

new Chart(activityChart, {
    type: 'bar',
    data: activityData,
    options: activityOptions
});
