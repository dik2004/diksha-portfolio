// Portfolio Data Structure
// This makes it easy for the user to add new projects or certificates without touching HTML

const projectsData = [
    {
        title: "Digital Marketing",
        Problem: "Businesses lack a centralized platform to manage online presence, blogs, and customer inquiries efficiently.",
        Solution: "Developed a MERN-based web application with role-based access and integrated blog and inquiry management.",
        Real_world_impact: "Useful for startups and small businesses to streamline digital marketing and customer engagement.",
        Result: "Improved workflow efficiency and provided a responsive, user-friendly interface for better interaction.",
        image: "assets/digital.png",
        tags: ["React", "Node.js", "MongoDB", "Express"],
       
        github: "https://github.com/dik2004/Digital-Marketing-Website-Marketing-Pro-"
    },
    {
        title: "Trie-Based Auto-Suggestion System",
        Problem: "Traditional search methods are slow and inefficient for generating real-time suggestions.",
        Solution: "Implemented a Trie-based system in C++ to deliver fast and efficient auto-suggestions.",
        Real_world_impact: "Applicable in search engines, e-commerce platforms, and text editors for autocomplete features.",
        Result: "Achieved faster search performance and improved accuracy using optimized time complexity.",
        image: "assets/trie.png",
        tags: ["C++", "Data Structures","CGI"],
        github: "https://github.com/dik2004/Trie-Based-Auto-Suggestion-"
    },
    {
        title: "Automatic Flow Metering System",
        Problem: "Manual fluid monitoring systems are error-prone and lead to wastage and inefficiency.",
        Solution: "Built a web-based system for real-time monitoring and automated control of fluid levels.",
        Real_world_impact: "Applicable in industrial systems, water management, and smart irrigation solutions.",
        Result: "Reduced manual intervention and enabled efficient resource management, leading to a patented solution.",
        image: "assets/auto.png",
        tags: ["HTML", "Tailwind CSS", "JavaScript", "PHP"],
        github: "https://github.com/dik2004/Automatic-Stream-Changeover-and-flow-metering"
    }
];

// USER INSTRUCTION: To add a new certificate, simply add a new object to this array.
const certificatesData = [
    {
        title: "Social Network",
        issuer: "NPTEL",
        date: "2025",
        image: "assets/nptel.png",
        downloadLink: "assets/certs/NPTEL.pdf"
    },
    {
        title: "Computational Theory: Language Principle & Finite Automata Theory",
        issuer: "Infosys Springboard",
        date: "2025",
        image: "assets/computational.png",
        downloadLink: "assets/certs/computational.pdf"
    },
    {
        title: "java",
        issuer: "NeoColab",
        date: "2025",
        image: "assets/java.png",
        downloadLink: "assets/certs/java.pdf"
    },
    {
        title: "DSA using CPP",
        issuer: "Centre For professional Enhancement LPU",
        date: "2025",
        image: "assets/dsacpp.png",
        downloadLink: "assets/certs/summer.pdf"
    },
    {
        title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
        issuer: "Infosys Springboard",
        date: "2025",
        image: "assets/gpt.png",
        downloadLink: "assets/certs/gpt4.pdf"
    },
    {
        title: "Web Development Hackathon",
        issuer: "Binary Blitz",
        date: "2024",
        image: "assets/hack.png",
        downloadLink: "assets/certs/hackathon.pdf"
    },
    {
        title: "DSA",
        issuer: "NeoColab",
        date: "2024",
        image: "assets/dsa.png",
        downloadLink: "assets/certs/dsa.pdf"
    },
    {
        title: "C++",
        issuer: "NeoColab",
        date: "2024",
        image: "assets/CPP.png",
        downloadLink: "assets/certs/cpp.pdf"
    },
     {
        title: "C",
        issuer: "NeoColab",
        date: "2024",
        image: "assets/c.png",
        downloadLink: "assets/certs/c.pdf"
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Render Projects ---
    const projectsContainer = document.getElementById('projects-container');
    if(projectsContainer) {
        projectsData.forEach(project => {
            const tagsHtml = project.tags.map(tag => 
                `<span class="px-2 py-1 text-xs font-medium bg-darker text-neon rounded-full border border-neon/30">${tag}</span>`
            ).join('');

            const projectCard = `
                <div class="bg-dark rounded-xl overflow-hidden border border-gray-800 hover:border-neon transition-all duration-300 group hover:-translate-y-2 glow-on-hover">
                    <div class="relative h-48 overflow-hidden">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                            <a href="${project.github}" class="w-10 h-10 rounded-full bg-neon text-darker flex items-center justify-center hover:scale-110 transition-transform"><i class="fab fa-github"></i></a>
                            <a href="${project.link}" class="w-10 h-10 rounded-full bg-white text-darker flex items-center justify-center hover:scale-110 transition-transform"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div class="p-6 flex flex-col h-full">
                        <h3 class="text-xl font-bold text-white mb-4 group-hover:text-neon transition-colors">${project.title}</h3>
                        
                        <div class="space-y-4 mb-6 text-sm flex-grow">
                            ${project.Problem ? `
                            <div>
                                <strong class="text-neon block mb-1"><i class="fas fa-exclamation-circle mr-1"></i> Problem:</strong>
                                <p class="text-gray-400 pl-5 leading-relaxed">${project.Problem}</p>
                            </div>` : ''}
                            
                            ${project.Solution ? `
                            <div>
                                <strong class="text-neon block mb-1"><i class="fas fa-lightbulb mr-1"></i> Solution:</strong>
                                <p class="text-gray-400 pl-5 leading-relaxed">${project.Solution}</p>
                            </div>` : ''}
                            
                            ${project.Real_world_impact ? `
                            <div>
                                <strong class="text-neon block mb-1"><i class="fas fa-globe mr-1"></i> Real-World:</strong>
                                <p class="text-gray-400 pl-5 leading-relaxed">${project.Real_world_impact}</p>
                            </div>` : ''}
                            
                            ${project.Result ? `
                            <div>
                                <strong class="text-neon block mb-1"><i class="fas fa-check-circle mr-1"></i> Result:</strong>
                                <p class="text-gray-400 pl-5 leading-relaxed">${project.Result}</p>
                            </div>` : ''}
                            
                            ${project.description ? `<p class="text-gray-400 leading-relaxed">${project.description}</p>` : ''}
                        </div>

                        <div class="flex flex-wrap gap-2 mt-auto border-t border-gray-800 pt-5">
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.innerHTML += projectCard;
        });
    }

    // --- Render Certificates ---
    const certificatesContainer = document.getElementById('certificates-container');
    if(certificatesContainer) {
        certificatesData.forEach(cert => {
            const certCard = `
                <div class="bg-dark rounded-xl overflow-hidden border border-gray-800 hover:border-neon transition-all duration-300 group">
                    <div class="relative h-48 overflow-hidden">
                        <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100">
                        <div class="absolute inset-0 bg-gradient-to-t from-darker to-transparent"></div>
                    </div>
                    <div class="p-6 relative -mt-12 bg-darker/80 backdrop-blur-sm rounded-t-xl border-t border-gray-800">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-lg font-bold text-white leading-tight group-hover:text-neon transition-colors">${cert.title}</h3>
                            <a href="${cert.downloadLink}" download class="text-gray-400 hover:text-neon transition-colors p-2" title="Download Certificate">
                                <i class="fas fa-download text-xl"></i>
                            </a>
                        </div>
                        <p class="text-neon text-sm font-medium mb-1">${cert.issuer}</p>
                        <p class="text-gray-500 text-xs">${cert.date}</p>
                    </div>
                </div>
            `;
            certificatesContainer.innerHTML += certCard;
        });
    }

    // --- Mobile Menu Toggle ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = btn.querySelector('i');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        if(menu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- Navbar Background on Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg');
            navbar.classList.replace('bg-darker/80', 'bg-darker/95');
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.replace('bg-darker/95', 'bg-darker/80');
        }
    });

    // --- Scroll Spy for Active Link ---
    const sections = document.querySelectorAll('section');
    const navLinksDesktop = document.querySelectorAll('.nav-link');
    const navLinksMobile = document.querySelectorAll('.mobile-nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinksDesktop.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        navLinksMobile.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalBtnText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            
            fetch("https://formsubmit.co/ajax/dilipdiksha2004@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name.value,
                    email: this.email.value,
                    message: this.message.value
                })
            })
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    btn.innerHTML = '<i class="fas fa-check mr-2"></i> Sent Successfully!';
                    btn.classList.add('bg-neon', 'text-darker');
                } else {
                    btn.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i> Error!';
                    btn.classList.add('border-red-500', 'text-red-500');
                }
                setTimeout(() => {
                    if(data.success) contactForm.reset();
                    btn.innerHTML = originalBtnText;
                    btn.classList.remove('bg-neon', 'text-darker', 'border-red-500', 'text-red-500');
                }, 3000);
            })
            .catch(error => {
                btn.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i> Error!';
                btn.classList.add('border-red-500', 'text-red-500');
                setTimeout(() => {
                    btn.innerHTML = originalBtnText;
                    btn.classList.remove('border-red-500', 'text-red-500');
                }, 3000);
            });
        });
    }
});
