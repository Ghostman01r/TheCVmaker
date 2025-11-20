import { defaultData } from './data.js';
import { templates } from './templateManager.js';

// State
let currentTemplate = 'modern';
let data = new Proxy(JSON.parse(JSON.stringify(defaultData)), {
    set: function(target, key, value) {
        target[key] = value;
        renderPreview();
        return true;
    }
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initTemplateSwitcher();
    renderForm();
    renderPreview();
    lucide.createIcons();
    
    document.getElementById('download-btn').addEventListener('click', () => window.print());
});

// Template Logic
function initTemplateSwitcher() {
    const container = document.getElementById('template-switcher');
    container.innerHTML = ''; // Clear existing

    Object.keys(templates).forEach(key => {
        const t = templates[key];
        const btn = document.createElement('button');
        btn.innerText = t.name;
        btn.id = `btn-${key}`;
        btn.className = "px-4 py-1.5 rounded-md text-sm font-medium transition text-gray-500 hover:text-gray-700";
        btn.onclick = () => setTemplate(key);
        container.appendChild(btn);
    });
    setTemplate(currentTemplate); // Set initial active state
}

function setTemplate(name) {
    currentTemplate = name;
    
    // Reset all buttons
    document.querySelectorAll('[id^="btn-"]').forEach(btn => {
        btn.className = "px-4 py-1.5 rounded-md text-sm font-medium transition text-gray-500 hover:text-gray-700";
    });
    
    // Activate selected
    const activeBtn = document.getElementById(`btn-${name}`);
    const config = templates[name];
    activeBtn.className = `px-4 py-1.5 rounded-md text-sm font-medium transition bg-white shadow ${config.activeClass}`;
    
    renderPreview();
}

function renderPreview() {
    const container = document.getElementById('preview-container');
    const renderer = templates[currentTemplate].render;
    container.innerHTML = renderer(data);
}

// Form Logic (Simplified for brevity, but functional)
function renderForm() {
    const container = document.getElementById('form-container');
    container.innerHTML = `
        <section>
            <h3 class="font-bold mb-2">Personal Details</h3>
            <div class="grid gap-2">
                <input class="border p-2 rounded w-full" value="${data.personal.firstName}" oninput="updateData('personal', 'firstName', this.value)" placeholder="First Name">
                <input class="border p-2 rounded w-full" value="${data.personal.lastName}" oninput="updateData('personal', 'lastName', this.value)" placeholder="Last Name">
                <input class="border p-2 rounded w-full" value="${data.personal.role}" oninput="updateData('personal', 'role', this.value)" placeholder="Role">
            </div>
        </section>
        
        <section>
             <div class="flex justify-between mb-2"><h3 class="font-bold">Work History</h3><button onclick="addItem('work')" class="text-blue-600 text-sm">+ Add</button></div>
             <div id="work-list" class="space-y-2"></div>
        </section>
    `;
    
    // Render Work Items dynamically
    const workList = document.getElementById('work-list');
    data.work.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = "border p-2 rounded bg-gray-50";
        div.innerHTML = `
            <div class="flex gap-2 mb-1">
                <input class="w-full bg-transparent font-bold" value="${item.title}" oninput="updateItem('work', ${idx}, 'title', this.value)">
                <input class="w-20 bg-transparent text-right text-gray-500" value="${item.year}" oninput="updateItem('work', ${idx}, 'year', this.value)">
            </div>
            <textarea class="w-full bg-transparent text-sm" rows="2" oninput="updateItem('work', ${idx}, 'desc', this.value)">${item.desc}</textarea>
        `;
        workList.appendChild(div);
    });

    // Expose functions to global scope so HTML oninput works
    window.updateData = (section, key, val) => {
        const copy = {...data[section]};
        copy[key] = val;
        data[section] = copy;
    };
    
    window.updateItem = (section, idx, key, val) => {
        const copy = [...data[section]];
        copy[idx][key] = val;
        data[section] = copy;
    };

    window.addItem = (section) => {
        const copy = [...data[section]];
        copy.push({ title: "New Role", year: "2024", desc: "Description..." });
        data[section] = copy;
        renderForm(); // Re-render form
    };
}