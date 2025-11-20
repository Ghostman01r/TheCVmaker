export const render = (data) => {
    return `
    <div class="w-full h-full bg-white text-[#111] font-cutive relative p-10 flex flex-row gap-8 template-container">
        <!-- Decor -->
        <div class="absolute top-14 left-14 w-8 h-8 bg-[#e82818] z-0 print:block"></div>
        <div class="absolute top-1/2 left-1/2 w-20 h-12 bg-[#e82818] transform -translate-x-1/2 -translate-y-1/4 z-0 block print:block"></div>

        <!-- Left Column -->
        <div class="flex-1 flex flex-col z-10 w-1/2">
            <div class="mb-8 pt-8">
                <h2 class="font-prata text-2xl border-b border-black pb-1 mb-4 inline-block w-full">Contact</h2>
                <div class="text-xs space-y-1.5">
                    <div class="flex items-center"><strong class="w-6">T</strong> ${data.personal.phone}</div>
                    <div class="flex items-center"><strong class="w-6">E</strong> ${data.personal.email}</div>
                    <div class="flex items-center"><strong class="w-6">A</strong> ${data.personal.address}</div>
                </div>
                <div class="w-6 h-1 bg-black mt-6"></div>
            </div>

            <div class="flex-1 flex flex-col justify-between min-h-[200px] mb-12 relative">
                <div class="w-16 h-16 border-2 border-black opacity-20"></div>
                <div class="text-right font-inter font-black text-5xl leading-[0.85] mt-auto pr-4 uppercase tracking-tighter break-words">
                    DE<br/>SIG<br/>NEW
                </div>
                <div class="mt-4 font-bold text-sm">${data.personal.website}</div>
            </div>

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
        </div>

        <!-- Right Column -->
        <div class="flex-1 flex flex-col text-right z-10 w-1/2">
            <div class="mb-8 pt-0">
                <div class="font-inter font-black text-7xl text-[#e82818] leading-none -ml-2 tracking-tighter">CV</div>
                <span class="font-inter font-bold block mt-2 text-base">${data.personal.year}</span>
                <h1 class="font-prata text-4xl uppercase leading-none mt-3 tracking-wider">
                    ${data.personal.firstName}<br/>${data.personal.lastName}
                </h1>
                <div class="w-6 h-1 bg-black mt-4 ml-auto"></div>
            </div>

            <div class="mb-8">
                <h2 class="font-prata text-2xl border-b border-black pb-1 mb-4 inline-block w-full">About</h2>
                <p class="text-xs leading-relaxed mb-4">${data.about.text}</p>
                <p class="text-[#e82818] font-bold text-xs mb-6">"${data.about.quote}"</p>
            </div>

            <div class="mt-4">
                <h2 class="font-prata text-2xl border-b border-black pb-1 mb-4 inline-block w-full">Work</h2>
                <div class="grid grid-cols-2 gap-4">
                    ${data.work.map(job => `
                        <div class="mb-3 break-inside-avoid">
                            <span class="font-bold block mb-1 text-sm">${job.title}</span>
                            <p class="text-xs text-gray-800 leading-tight mb-1">${job.desc}</p>
                            <span class="text-[#e82818] font-bold text-xs">${job.year}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
    `;
};