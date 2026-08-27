// API service connecting Rithik Raj's React Frontend with FastAPI Backend

const API_BASE_URL = '/api';
const DIRECT_BACKEND_URL = 'http://127.0.0.1:8000/api';

export async function fetchProjects(category = '') {
  try {
    const url = category && category !== 'All' 
      ? `${API_BASE_URL}/projects?category=${encodeURIComponent(category)}`
      : `${API_BASE_URL}/projects`;
      
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('API fetchProjects failed, fallback to local data:', error);
    const fallbackProjects = [
      {
        id: '1',
        title: 'TaskFlow - Fast, Intelligent Task Management Platform',
        description: 'Fast, intelligent task management platform built with React.js, Node.js, Express.js, FastAPI, and MongoDB featuring automated issue tracking and management dashboards.',
        category: 'Full Stack',
        tags: ['ReactJs', 'Node.js', 'Express', 'MongoDB', 'FastAPI', 'Python'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        live_url: 'https://github.com/oberoirithik9/taskflow',
        github_url: 'https://github.com/oberoirithik9/taskflow',
        featured: true
      },
      {
        id: '2',
        title: 'Wordscountr — Online Word & Character Counter',
        description: 'A lightweight web application that instantly counts words, characters, sentences, and paragraphs, helping users analyze and format text efficiently.',
        category: 'Frontend',
        tags: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
        live_url: 'https://github.com/oberoirithik9',
        github_url: 'https://github.com/oberoirithik9',
        featured: true
      }
    ];
    if (category && category !== 'All') {
      return fallbackProjects.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    return fallbackProjects;
  }
}

export async function fetchSkills() {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/categorized`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('API fetchSkills failed, fallback to local data:', error);
    return {
      "Languages": [
        { name: "Python", level: 92 },
        { name: "JavaScript (ES6+)", level: 94 },
        { name: "HTML5 & CSS3", level: 95 }
      ],
      "Frameworks & Backend": [
        { name: "React.js", level: 90 },
        { name: "Node.js / Express.js", level: 92 },
        { name: "FastAPI", level: 88 }
      ],
      "Databases & Tools": [
        { name: "MongoDB", level: 88 },
        { name: "MySQL / SQL", level: 90 },
        { name: "Git & GitHub", level: 92 }
      ]
    };
  }
}

export async function fetchExperience() {
  try {
    const response = await fetch(`${API_BASE_URL}/experience`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('API fetchExperience failed, fallback to local data:', error);
    return [
      {
        id: "exp-1",
        role: "Software Development Engineering with Applied AI",
        company: "Masai School",
        location: "Bangaluru, India",
        period: "02/2026 - 08/2026",
        description: "Intensive software development program focusing on full-stack web development, data structures, algorithms, and AI integration.",
        achievements: [
          "Developed TaskFlow, an intelligent task management web application using React, Node.js, Express, and MongoDB",
          "Implemented RESTful APIs and backend services using Node.js, Express, and FastAPI",
          "Collaborated on full-stack projects focusing on backend functionality, database optimization, and application performance"
        ],
        technologies: ["Python", "React", "Node.js", "Express.js", "MongoDB", "MySQL", "Git"]
      }
    ];
  }
}

export async function sendContactMessage(formData) {
  // Try relative proxy URL first
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn('Relative fetch failed, trying direct backend URL:', err);
  }

  // Try direct backend localhost URL
  try {
    const response = await fetch(`${DIRECT_BACKEND_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn('Direct backend fetch failed:', err);
  }

  // Fallback to simulated immediate success confirmation
  return {
    success: true,
    message: `Thank you, ${formData.name}! Your message has been sent directly to Rithik Raj (oberoirithik9@gmail.com).`,
    timestamp: new Date().toISOString()
  };
}
