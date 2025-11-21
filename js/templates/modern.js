export const render = (data) => {
    return `
    <div class="w-full h-full bg-white text-[#111] font-cutive relative p-10 flex flex-row gap-12 template-container">
        <!-- Decor: Red Squares -->
        <div class="absolute top-14 left-14 w-8 h-8 bg-[#e82818] z-0 print:block"></div>
        <div class="absolute top-1/2 left-1/2 w-20 h-12 bg-[#e82818] transform -translate-x-1/2 -translate-y-1/4 z-0 block print:block"></div>

        <!-- LEFT COLUMN -->
        <div class="flex-1 flex flex-col z-10 w-1/2">
            
            <!-- 1. Contact -->
            <div class="mb-10 pt-8">
                <h2 class="font-prata text-2xl border-b border-black pb-1 mb-4 inline-block w-full">Contact</h2>
                <div class="text-xs space-y-1.5">
                    <div class="flex items-center"><strong class="w-6">T</strong> ${data.personal.phone}</div>
                    <div class="flex items-center"><strong class="w-6">E</strong> ${data.personal.email}</div>
                    <div class="flex items-center"><strong class="w-6">A</strong> ${data.personal.address}</div>
                </div>
                <div class="w-6 h-1 bg-black mt-6"></div>
            </div>

            <!-- 2. Design Graphic (The big text) -->
            <div class="flex-1 flex flex-col justify-center min-h-[180px] mb-10 relative">
                <div class="w-16 h-16 border-2 border-black opacity-20 absolute top-0 left-0"></div>
                <div class="text-right font-inter font-black text-6xl leading-[0.85] pr-4 uppercase tracking-tighter break-words">
                    DE<br/>SIG<br/>NEW
                </div>
                <div class="mt-4 font-bold text-xs text-right pr-4">${data.personal.website}</div>
            </div>

            <!-- 3. Education -->
            <div class="mb-8">
                <h2 class="font-prata text-2xl border-b border-black pb-1 mb-4 inline-block w-full">Education</h2>
                ${data.education.map(edu => `
                    <div class="mb-4 break-inside-avoid">
                        <span class="font-bold block mb-1 text-sm">${edu.title}</span>
                        <p class="text-xs text-gray-800 leading-relaxed">${edu.desc}</p>
                    </div>
                `).join('')}
                <div class="w-6 h-1 bg-black mt-4"></div>
            </div>

            <!-- 4. Work (Moved back to Left Column) -->
            <div class="mt-2">
                <h2 class="font-prata text-2xl border-b border-black pb-1 mb-4 inline-block w-full">Work</h2>
                <div class="grid grid-cols-2 gap-x-4 gap-y-6">
                    ${data.work.map(job => `
                        <div class="break-inside-avoid">
                            <span class="font-bold block mb-1 text-sm">${job.title}</span>
                            <p class="text-xs text-gray-800 leading-tight mb-1">${job.desc}</p>
                            <span class="text-[#e82818] font-bold text-xs">${job.year}</span>
                        </div>
                    `).join('')}
                </div>
                <!-- Red block at bottom left -->
                <div class="w-16 h-10 bg-[#e82818] mt-8 ml-auto md:ml-0 block"></div>
            </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="flex-1 flex flex-col text-right z-10 w-1/2">
            
            <!-- 1. Header -->
            <div class="mb-10 pt-0">
                <div class="font-inter font-black text-7xl text-[#e82818] leading-none -ml-2 tracking-tighter">CV</div>
                <span class="font-inter font-bold block mt-2 text-base">${data.personal.year}</span>
                <h1 class="font-prata text-4xl uppercase leading-none mt-3 tracking-wider">
                    ${data.personal.firstName}<br/>${data.personal.lastName}
                </h1>
                <div class="w-6 h-1 bg-black mt-4 ml-auto"></div>
            </div>

            <!-- 2. About -->
            <div class="mb-10">
                <h2 class="font-prata text-2xl border-b border-black pb-1 mb-4 inline-block w-full">About</h2>
                <p class="text-xs leading-relaxed mb-4">${data.about.text}</p>
                <p class="text-[#e82818] font-bold text-xs mb-6">"${data.about.quote}"</p>
                <div class="flex justify-end"><div class="w-6 h-6 border-t-2 border-black relative after:content-['—'] after:absolute after:-right-4 after:-top-3 after:font-bold"></div></div>
            </div>

            <!-- 3. Expertise (Restored) -->
            <div class="mb-8">
                <h2 class="font-prata text-2xl border-b border-black pb-1 mb-4 inline-block w-full">Expertise</h2>
                ${data.skills.map(skill => `
                    <div class="mb-4 break-inside-avoid">
                        <span class="font-bold block mb-1 text-sm">${skill.title}</span>
                        <p class="text-xs text-gray-800">${skill.desc}</p>
                    </div>
                `).join('')}
            </div>

            <!-- 4. Languages (Restored) -->
            <div>
                <h2 class="font-prata text-2xl border-b border-black pb-1 mb-4 inline-block w-full">Languages</h2>
                ${data.languages.map(lang => `
                    <div class="mb-3 flex flex-col items-end break-inside-avoid">
                        <span class="font-bold mb-1 block text-sm">${lang.name}</span>
                        <div class="w-28 h-1.5 bg-gray-200 relative print:bg-gray-300">
                            <div class="absolute top-0 right-0 h-full bg-[#e82818] print:bg-[#e82818]" style="width: ${lang.level}%; -webkit-print-color-adjust: exact; print-color-adjust: exact;"></div>
                        </div>
                    </div>
                `).join('')}
                <div class="w-6 h-1 bg-black mt-6 ml-auto"></div>
            </div>
        </div>
    </div>
    `;
};