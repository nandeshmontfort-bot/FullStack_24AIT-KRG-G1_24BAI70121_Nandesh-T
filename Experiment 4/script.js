// ==================== SAMPLE JOB DATA ==================== 
const jobsData = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "Tech Innovations Inc.",
        description: "We're looking for an experienced Frontend Developer to join our growing team. You'll work with React, TypeScript, and modern web technologies.",
        location: "San Francisco",
        category: "Technology",
        type: "Full-time",
        salary: "120000-150000",
        experience: "Senior",
        posted: "2 days ago"
    },
    {
        id: 2,
        title: "UX/UI Designer",
        company: "Creative Studio Co.",
        description: "Join our creative team and design beautiful user experiences. Experience with Figma and design systems is essential.",
        location: "Remote",
        category: "Technology",
        type: "Full-time",
        salary: "90000-110000",
        experience: "Mid-level",
        posted: "3 days ago"
    },
    {
        id: 3,
        title: "Data Scientist",
        company: "Data Analytics Pro",
        description: "Analyze large datasets and build machine learning models. Python, R, and SQL expertise required.",
        location: "New York",
        category: "Technology",
        type: "Full-time",
        salary: "110000-140000",
        experience: "Mid-level",
        posted: "1 day ago"
    },
    {
        id: 4,
        title: "Marketing Manager",
        company: "Growth Marketing Ltd.",
        description: "Lead our marketing initiatives and drive customer acquisition. Digital marketing expertise required.",
        location: "Chicago",
        category: "Marketing",
        type: "Full-time",
        salary: "80000-100000",
        experience: "Mid-level",
        posted: "4 days ago"
    },
    {
        id: 5,
        title: "Financial Analyst",
        company: "Finance Solutions",
        description: "Analyze financial data and provide insights for strategic decision-making. Excel and financial modeling skills required.",
        location: "New York",
        category: "Finance",
        type: "Full-time",
        salary: "85000-105000",
        experience: "Entry-level",
        posted: "5 days ago"
    },
    {
        id: 6,
        title: "Nurse Practitioner",
        company: "Healthcare Plus",
        description: "Provide quality healthcare to our diverse patient population. RN certification and experience required.",
        location: "Los Angeles",
        category: "Healthcare",
        type: "Full-time",
        salary: "95000-120000",
        experience: "Mid-level",
        posted: "3 days ago"
    },
    {
        id: 7,
        title: "Backend Developer",
        company: "CloudTech Systems",
        description: "Build scalable backend systems using Node.js and AWS. Cloud architecture experience a plus.",
        location: "Remote",
        category: "Technology",
        type: "Full-time",
        salary: "105000-135000",
        experience: "Mid-level",
        posted: "1 day ago"
    },
    {
        id: 8,
        title: "Content Writer",
        company: "Digital Content Agency",
        description: "Create engaging content for various platforms. SEO knowledge and strong writing skills required.",
        location: "Remote",
        category: "Marketing",
        type: "Part-time",
        salary: "45000-60000",
        experience: "Entry-level",
        posted: "2 days ago"
    },
    {
        id: 9,
        title: "Junior Python Developer",
        company: "StartUp Hub",
        description: "Start your tech career with us. Python fundamentals and willingness to learn required.",
        location: "Remote",
        category: "Technology",
        type: "Full-time",
        salary: "60000-75000",
        experience: "Entry-level",
        posted: "6 days ago"
    },
    {
        id: 10,
        title: "Project Manager",
        company: "Enterprise Solutions",
        description: "Manage cross-functional projects and lead teams. Agile and Scrum experience required.",
        location: "Chicago",
        category: "Technology",
        type: "Full-time",
        salary: "90000-115000",
        experience: "Mid-level",
        posted: "4 days ago"
    },
    {
        id: 11,
        title: "Business Analyst",
        company: "Consulting Group",
        description: "Analyze business processes and provide strategic recommendations. Strong analytical skills required.",
        location: "New York",
        category: "Finance",
        type: "Full-time",
        salary: "85000-110000",
        experience: "Mid-level",
        posted: "2 days ago"
    },
    {
        id: 12,
        title: "Teacher - High School Math",
        company: "Education Excellence",
        description: "Inspire the next generation of mathematicians. Valid teaching credential required.",
        location: "Los Angeles",
        category: "Education",
        type: "Full-time",
        salary: "50000-65000",
        experience: "Entry-level",
        posted: "5 days ago"
    }
];

// ==================== HAMBURGER MENU ==================== 
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });

    // Initialize jobs display
    displayJobs(jobsData);
    setupEventListeners();
});

// ==================== DISPLAY JOBS ==================== 
function displayJobs(jobs) {
    const jobsList = document.getElementById('jobsList');
    const jobCount = document.getElementById('jobCount');
    const noJobs = document.getElementById('noJobs');

    if (jobs.length === 0) {
        jobsList.style.display = 'none';
        noJobs.style.display = 'block';
        jobCount.textContent = '0 jobs found';
        return;
    }

    jobsList.style.display = 'flex';
    noJobs.style.display = 'none';
    jobCount.textContent = `${jobs.length} position${jobs.length !== 1 ? 's' : ''} available`;

    jobsList.innerHTML = jobs.map(job => `
        <div class="job-card">
            <div class="job-header">
                <div>
                    <h3 class="job-title">${escapeHtml(job.title)}</h3>
                    <p class="job-company">${escapeHtml(job.company)}</p>
                </div>
            </div>
            <div class="job-tags">
                <span class="job-tag location">📍 ${escapeHtml(job.location)}</span>
                <span class="job-tag type">${escapeHtml(job.type)}</span>
                <span class="job-tag salary">💰 $${job.salary}</span>
            </div>
            <p class="job-description">${escapeHtml(job.description)}</p>
            <div class="job-footer">
                <span class="job-posted">${job.posted}</span>
                <button class="apply-btn" onclick="applyForJob('${escapeHtml(job.title)}', '${escapeHtml(job.company)}')">Apply Now</button>
            </div>
        </div>
    `).join('');
}

// ==================== FILTER & SEARCH LOGIC ==================== 
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const locationFilter = document.getElementById('locationFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const typeFilter = document.getElementById('typeFilter');
    const salarySlider = document.querySelector('.slider');
    const experienceFilters = document.querySelectorAll('.experience-filter');
    const searchBtn = document.querySelector('.search-btn');

    // Debounce function
    function debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    }

    // Filter jobs
    const filterJobs = debounce(() => {
        const searchTerm = searchInput.value.toLowerCase();
        const location = locationFilter.value;
        const category = categoryFilter.value;
        const type = typeFilter.value;
        const maxSalary = parseInt(salarySlider.value);
        const selectedExperience = Array.from(experienceFilters)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const filtered = jobsData.filter(job => {
            const matchesSearch =
                job.title.toLowerCase().includes(searchTerm) ||
                job.company.toLowerCase().includes(searchTerm) ||
                job.description.toLowerCase().includes(searchTerm);

            const matchesLocation = !location || job.location === location;
            const matchesCategory = !category || job.category === category;
            const matchesType = !type || job.type === type;

            const jobMinSalary = parseInt(job.salary.split('-')[0]);
            const matchesSalary = jobMinSalary <= maxSalary;

            const matchesExperience = selectedExperience.length === 0 ||
                selectedExperience.includes(job.experience);

            return matchesSearch && matchesLocation && matchesCategory &&
                matchesType && matchesSalary && matchesExperience;
        });

        displayJobs(filtered);
    }, 300);

    // Event listeners
    searchInput.addEventListener('input', filterJobs);
    searchBtn.addEventListener('click', filterJobs);
    locationFilter.addEventListener('change', filterJobs);
    categoryFilter.addEventListener('change', filterJobs);
    typeFilter.addEventListener('change', filterJobs);
    salarySlider.addEventListener('input', function () {
        document.getElementById('salaryDisplay').textContent = this.value.toLocaleString();
        filterJobs();
    });
    experienceFilters.forEach(checkbox => {
        checkbox.addEventListener('change', filterJobs);
    });
}

// ==================== APPLY FOR JOB ==================== 
function applyForJob(jobTitle, company) {
    alert(`Thank you for your interest!\n\nYou have applied for:\nPosition: ${jobTitle}\nCompany: ${company}\n\nWe will review your application and contact you soon.`);
    // In a real application, this would send data to a backend server
}

// ==================== UTILITY FUNCTIONS ==================== 
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ==================== KEYBOARD NAVIGATION ==================== 
document.addEventListener('keydown', function (e) {
    // Allow pressing Enter in search box to filter
    if (e.key === 'Enter' && document.activeElement.id === 'searchInput') {
        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) searchBtn.click();
    }
});

// ==================== USER PROFILE LOGIC ====================
document.addEventListener('DOMContentLoaded', function () {
    const profileForm = document.getElementById('userProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent page reload

            // Get values
            const name = document.getElementById('userName').value;
            const role = document.getElementById('userRole').value;
            const experience = document.getElementById('userExperience').value;
            const skillsInput = document.getElementById('userSkills').value;

            // Update display
            document.getElementById('displayUserName').textContent = name;
            document.getElementById('displayUserRole').textContent = role;
            document.getElementById('displayUserExperience').textContent = experience;

            // Handle skills
            const skillsContainer = document.getElementById('displayUserSkills');
            skillsContainer.innerHTML = ''; // Clear previous

            if (skillsInput) {
                const skillsList = skillsInput.split(',').map(skill => skill.trim()).filter(s => s !== '');
                skillsList.forEach(skill => {
                    const span = document.createElement('span');
                    span.className = 'tag';
                    span.textContent = skill;
                    skillsContainer.appendChild(span);
                });
            }

            // Show display section
            const profileDisplay = document.getElementById('profileDisplay');
            profileDisplay.style.display = 'block';

            // Add a small animation to show it updated
            profileDisplay.style.opacity = '0';
            setTimeout(() => {
                profileDisplay.style.transition = 'opacity 0.5s ease';
                profileDisplay.style.opacity = '1';
            }, 10);

            // Optional: Resets the form after save
            // profileForm.reset();
        });
    }

    // ==================== JOB POSTING LOGIC ====================
    const jobPostingForm = document.getElementById('jobPostingForm');
    const dynamicJobsList = document.getElementById('dynamicJobsList');

    if (jobPostingForm && dynamicJobsList) {
        jobPostingForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent page reload

            // Get form values
            const title = document.getElementById('postJobTitle').value;
            const companyLocation = document.getElementById('postJobCompany').value;
            const type = document.getElementById('postJobType').value;
            const salary = document.getElementById('postJobSalary').value;
            const description = document.getElementById('postJobDesc').value;

            // Create new job card elements
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';

            // Function to escape HTML to prevent XSS (reusing existing or simple one)
            const secureHTML = (str) => {
                const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
                return str.replace(/[&<>"']/g, m => map[m]);
            };

            // Build inner HTML for the card matching existing structure
            jobCard.innerHTML = `
                <h3 class="job-title">${secureHTML(title)}</h3>
                <p class="job-company">${secureHTML(companyLocation)}</p>
                <div class="job-tags">
                    <span class="tag">${secureHTML(type)}</span>
                    <span class="tag">${secureHTML(salary)}</span>
                    <span class="tag" style="background: #e1f5fe; color: #0288d1; border: 1px solid #b3e5fc;">New</span>
                </div>
                <p class="job-desc">${secureHTML(description)}</p>
                <button class="apply-btn">Apply Now</button>
            `;

            // Insert the new job at the TOP of the list
            dynamicJobsList.insertBefore(jobCard, dynamicJobsList.firstChild);

            // Add a small fade-in animation
            jobCard.style.opacity = '0';
            jobCard.style.transform = 'translateY(-10px)';
            jobCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

            setTimeout(() => {
                jobCard.style.opacity = '1';
                jobCard.style.transform = 'translateY(0)';
            }, 10);

            // Reset the form after posting
            jobPostingForm.reset();

            // Notify user
            alert('Job successfully posted!');
        });
    }
});
