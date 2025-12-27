// script.js - Dynamic Portfolio Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: ["#7c3aed", "#10b981", "#f59e0b"] },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#7c3aed",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }

    // Typewriter Effect
    const texts = [
        "Full Stack Developer",
        "Machine Learning Enthusiast"

        
        
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById('typing');

    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, isDeleting ? 50 : 100);
        }
    }

    if (typewriterElement) {
        setTimeout(typeWriter, 1000);
    }

    // Navigation Active State
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    function setActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    // Skill Progress Animation
    const skills = [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 70 },
        { name: 'Node.js', level: 65 },
        { name: 'SQL', level: 75 },
        { name: 'Linux', level: 80 },
        { name: 'Machine Learning', level: 70 },
        { name: 'Git', level: 65 }
    ];

    const skillBox = document.querySelector('.skill-box');
    if (skillBox) {
        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill';
            skillElement.innerHTML = `
                <div class="skill-name">${skill.name}</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 0%"></div>
                </div>
                <div class="skill-level">0%</div>
            `;
            skillBox.appendChild(skillElement);
        });
    }

    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    const skillLevels = document.querySelectorAll('.skill-level');

    function animateProgressBars() {
        progressBars.forEach((bar, index) => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                const level = skills[index].level;
                bar.style.width = `${level}%`;
                skillLevels[index].textContent = `${level}%`;
            }
        });
    }

    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Initial check

    // Project Data
    const projects = [
        {
            title: "🌐 Personal Portfolio Website",
            description: "A fully responsive and interactive portfolio built with modern UI/UX design principles, animations, and dynamic content.",
            tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            link: "#"
        },
        {
            title: "📊 Machine Learning Mini Project",
            description: "Implemented complete ML workflow with data preprocessing, visualization, and prediction models using Python and scikit-learn.",
            tags: ["Python", "ML", "scikit-learn", "Data Analysis"],
            link: "#"
        },
        {
            title: "🧠 AI Learning Notes",
            description: "Interactive documentation system explaining AI/ML concepts with real-world analogies and code examples.",
            tags: ["Documentation", "AI", "Education", "Markdown"],
            link: "#"
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card fade-in';
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    // Education Timeline
    const education = [
        {
            date: "2023",
            title: "Design Program",
            institution: "Bannari Amman Institution",
            description: "Structured program focusing on design thinking, problem-solving, and creative methodologies."
        },
        {
            date: "2024",
            title: "Self-Learning Journey",
            institution: "Online & Personal Projects",
            description: "Comprehensive self-study in Full Stack Development, Machine Learning, AI concepts, and system fundamentals."
        }
    ];

    const timeline = document.querySelector('.timeline');
    if (timeline) {
        education.forEach(edu => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item fade-in';
            timelineItem.innerHTML = `
                <div class="timeline-date">${edu.date}</div>
                <div class="timeline-content">
                    <h4>${edu.title}</h4>
                    <p class="institution">${edu.institution}</p>
                    <p>${edu.description}</p>
                </div>
            `;
            timeline.appendChild(timelineItem);
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'linear-gradient(45deg, #10b981, #059669)';
                
                // Reset form
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'linear-gradient(45deg, #7c3aed, #10b981)';
                }, 3000);
            }, 1500);
        });
    }

    // Theme Toggle (Optional)
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.style.position = 'fixed';
    themeToggle.style.bottom = '20px';
    themeToggle.style.right = '20px';
    themeToggle.style.zIndex = '1000';
    themeToggle.style.padding = '10px 15px';
    themeToggle.style.background = 'var(--primary)';
    themeToggle.style.color = 'white';
    themeToggle.style.border = 'none';
    themeToggle.style.borderRadius = '50%';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.boxShadow = '0 4px 15px rgba(124, 58, 237, 0.3)';
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        themeToggle.innerHTML = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
    });

    // Mobile Menu
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    document.querySelector('nav').appendChild(mobileMenuBtn);
    
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    const navLinksClone = document.querySelector('nav ul').cloneNode(true);
    mobileMenu.appendChild(navLinksClone);
    document.body.appendChild(mobileMenu);
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Scroll Animation for Elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .project-card, .skill, .goal-card').forEach(el => {
        observer.observe(el);
    });

    // Dynamic Year in Footer
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = 
        document.querySelector('footer p').innerHTML.replace('2025', yearSpan.textContent);

    // Skill Hover Effect
    document.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('skill')) {
            e.target.style.transform = 'translateY(-10px) scale(1.05)';
        }
    });

    document.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('skill')) {
            e.target.style.transform = 'translateY(0) scale(1)';
        }
    });

    // Loading Animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

// Global Functions
function viewProject(title) {
    alert(`Viewing details for: ${title}\n\nThis feature is under development.`);
}

function sendEmail() {
    window.location.href = 'mailto:sampathgaming2006@gmail.com?subject=Portfolio Inquiry&body=Hello Sampath, I saw your portfolio and would like to connect...';
}

function downloadResume() {
    alert('Resume download feature coming soon!');
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});