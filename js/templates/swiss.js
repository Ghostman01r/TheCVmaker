export const render = (data) => {
    return `
    <div class="w-full h-full bg-white text-slate-900 font-sans relative p-0 template-container" style="font-family: 'Helvetica', 'Arial', sans-serif;">
        <div class="grid grid-cols-12 h-full">
            <!-- Sidebar -->
            <div class="col-span-4 bg-blue-700 text-white p-8 flex flex-col justify-between h-full print:bg-blue-700" style="-webkit-print-color-adjust: exact; print-color-adjust: exact;">
                <div>
                    <h1 class="text-3xl font-black tracking-tighter uppercase leading-[0.9] mb-2 break-words">
                        ${data.personal.firstName}<br/>${data.personal.lastName}
                    </h1>
                    <p class="text-blue-200 font-medium text-sm mt-2 mb-8">${data.personal.role}</p>
                    
                    <div class="space-y-4 text-xs opacity-90">
                        <div class="border-t border-blue-500 pt-4">
                            <p class="font-bold text-blue-200 text-[10px] uppercase tracking-widest mb-1">Contact</p>
                            <p>${data.personal.phone}</p>
                            <p>${data.personal.email}</p>
                            <p>${data.personal.address}</p>
                            <p class="mt-2">${data.personal.website}</p>
                        </div>
                    </div>

                    <div class="mt-8 space-y-4">
                        <p class="font-bold text-blue-200 text-[10px] uppercase tracking-widest border-t border-blue-500 pt-4">Languages</p>
                        ${data.languages.map(lang => `
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span>${lang.name}</span> <span class="opacity-50">${lang.level}%</span></div>
                                <div class="w-full bg-blue-900 h-1"><div class="bg-white h-1" style="width: ${lang.level}%"></div></div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="mt-auto pt-8">
                    <div class="text-7xl font-black text-blue-800 leading-none -ml-1 opacity-50">${data.personal.year}</div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="col-span-8 p-8 pr-6">
                <div class="mb-8">
                    <h3 class="text-blue-700 font-black uppercase tracking-widest mb-4 text-xs">About Me</h3>
                    <p class="text-sm leading-relaxed font-light text-slate-700">${data.about.text}</p>
                </div>

                <div class="grid grid-cols-1 gap-8">
                    <div>
                        <h3 class="text-blue-700 font-black uppercase tracking-widest mb-4 text-xs border-b-2 border-blue-100 pb-1">Experience</h3>
                        <div class="space-y-6">
                            ${data.work.map(job => `
                                <div class="grid grid-cols-12 gap-3 break-inside-avoid">
                                    <div class="col-span-3 text-xs font-bold text-blue-700 pt-1">${job.year}</div>
                                    <div class="col-span-9">
                                        <h4 class="font-bold text-base">${job.title}</h4>
                                        <p class="text-slate-600 text-xs mt-0.5">${job.desc}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div>
                        <h3 class="text-blue-700 font-black uppercase tracking-widest mb-4 text-xs border-b-2 border-blue-100 pb-1">Education</h3>
                        <div class="space-y-4">
                            ${data.education.map(edu => `
                                <div class="break-inside-avoid">
                                    <h4 class="font-bold text-base">${edu.title}</h4>
                                    <p class="text-slate-600 text-xs">${edu.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                     <div>
                        <h3 class="text-blue-700 font-black uppercase tracking-widest mb-4 text-xs border-b-2 border-blue-100 pb-1">Expertise</h3>
                        <div class="grid grid-cols-2 gap-4">
                            ${data.skills.map(skill => `
                                <div class="bg-blue-50 p-3 rounded-lg break-inside-avoid">
                                    <h4 class="font-bold text-blue-900 text-sm">${skill.title}</h4>
                                    <p class="text-[10px] text-blue-700 mt-0.5">${skill.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
};