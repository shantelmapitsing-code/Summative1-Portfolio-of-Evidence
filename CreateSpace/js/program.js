// PROGRAMS DATA
const programsData = [
    { name: "Music", category: "music", desc: "Studio recording, beat making.", img: "images/music.jpg", price: "R0 FREE", tag: "Music" },
    { name: "Art", category: "art", desc: "Digital illustration & design.", img: "images/art.jpg", price: "R0 FREE", tag: "Art" },
    { name: "Code", category: "tech", desc: "Web dev & Python basics.", img: "images/coding.jpg", price: "R0 FREE", tag: "Tech" },
    { name: "Game Design", category: "gaming", desc: "Build games with Unity.", img: "images/gaming.jpg", price: "R0 FREE", tag: "Gaming" },
    { name: "Photography", category: "art", desc: "Shoot and edit like pro.", img: "images/photo.jpg", price: "R0 FREE", tag: "Art" },
    { name: "AI Lab", category: "tech", desc: "Explore future tech.", img: "images/ai.jpg", price: "R0 FREE", tag: "Tech" }
];

const container = document.getElementById('programsContainer');
const searchInput = document.getElementById('searchInput');
const filterCategory = document.getElementById('filterCategory');
const sortPrograms = document.getElementById('sortPrograms');

// Function to render program cards
function renderPrograms(data) {
    if (!container) return;
    
    // If no results
    if (data.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align: center; font-weight: bold;'>No programs found matching your search.</p>";
        return;
    }

    container.innerHTML = "";
    
    data.forEach(program => {
        container.innerHTML += `
            <div class="content-card">
                <div style="position: relative;">
                    <img src="${program.img}" alt="${program.name}" onerror="this.src='https://via.placeholder.com/400x200?text=Image+Missing'">
                    <!-- Category Tag -->
                    <span style="position: absolute; top: 10px; right: 10px; background: #7c3aed; color: white; padding: 0.2rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: bold;">
                        ${program.tag}
                    </span>
                </div>
                <h2>${program.name}</h2>
                <p>${program.desc}</p>
                <!-- Price & Join Link -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; border-top: 1px solid #eee; padding-top: 1rem;">
                    <span style="color: #ec4899; font-weight: 800; font-size: 1.2rem;">${program.price}</span>
                    <a href="enquiries.html" class="action-btn pink-btn" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Join →</a>
                </div>
            </div>`;
    });
}

// Function to filter and sort
function updateDisplay() {
    let filtered = programsData;
    
    // 1. Search
    if (searchInput.value) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    }
    
    // 2. Filter
    if (filterCategory.value !== 'all') {
        filtered = filtered.filter(p => p.category === filterCategory.value);
    }
    
    // 3. Sort
    if (sortPrograms.value === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortPrograms.value === 'category') {
        filtered.sort((a, b) => a.category.localeCompare(b.category));
    }
    
    renderPrograms(filtered);
}

// Initialize the programs page
if (container) {
    renderPrograms(programsData);
    
    // Event listeners
    searchInput.addEventListener('keyup', updateDisplay);
    filterCategory.addEventListener('change', updateDisplay);
    sortPrograms.addEventListener('change', updateDisplay);
}