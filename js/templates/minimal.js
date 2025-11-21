export const render = (data) => {
    return `
    <div class="w-full h-full bg-white text-gray-800 p-12 template-container" style="font-family: 'Georgia', serif;">
        <div class="text-center border-b border-gray-200 pb-6 mb-10">
            <h1 class="text-3xl uppercase tracking-widest mb-2">${data.personal.firstName} <span class="font-bold text-black">${data.personal.lastName}</span></h1>
            <p class="italic text-gray-500 text-base mb-3">${data.personal.role}</p>
            <div class="flex justify-center space-x-4 text-[10px] font-sans uppercase tracking-wider text-gray-400">
                <span>${data.personal.email}</span>
                <span>|</span>
                <span>${data.personal.phone}</span>
                <span>|</span>
                <span>${data.personal.address}</span>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-8">
            <div class="col-span-1 space-y-8">
                <div>
                    <h3 class="font-sans font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-3">Education</h3>
                    ${data.education.map(edu => `
                        <div class="mb-3 break-inside-avoid">
                            <h4 class="font-bold text-xs">${edu.title}</h4>
                            <p class="text-[10px] text-gray-500 mt-0.5 leading-relaxed">${edu.desc}</p>
                        </div>
                    `).join('')}
                </div>

                <div>
                    <h3 class="font-sans font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-3">Languages</h3>
                    <ul class="space-y-1.5 text-xs">
                        ${data.languages.map(lang => `
                            <li class="flex justify-between border-b border-gray-100 pb-1 break-inside-avoid">
                                <span>${lang.name}</span>
                                <span class="text-gray-400 italic text-[10px]">Level ${lang.level}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div>
                    <h3 class="font-sans font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-3">Expertise</h3>
                    ${data.skills.map(skill => `
                        <div class="mb-2 break-inside-avoid">
                            <h4 class="font-bold text-xs">${skill.title}</h4>
                            <p class="text-[10px] text-gray-500">${skill.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="col-span-2">
                <div class="mb-8">
                    <h3 class="font-sans font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-3">Profile</h3>
                    <p class="text-xs leading-relaxed text-gray-600">${data.about.text}</p>
                </div>

                <div>
                    <h3 class="font-sans font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-4">Professional Experience</h3>
                    <div class="space-y-6 border-l border-gray-200 pl-6 relative">
                        ${data.work.map(job => `
                            <div class="relative break-inside-avoid">
                                <div class="absolute -left-[29px] top-1 w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></div>
                                <div class="flex justify-between items-baseline mb-1">
                                    <h4 class="font-bold text-base">${job.title}</h4>
                                    <span class="font-sans text-[10px] font-bold bg-gray-100 px-2 py-0.5 rounded text-gray-500">${job.year}</span>
                                </div>
                                <p class="text-xs text-gray-600 leading-relaxed">${job.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
};