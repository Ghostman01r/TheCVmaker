// Import your templates here
import { render as renderModern } from './templates/modern.js';
import { render as renderSwiss } from './templates/swiss.js';
import { render as renderMinimal } from './templates/minimal.js';

// Add them to this list
export const templates = {
    modern: { 
        name: 'Modern Red', 
        render: renderModern, 
        activeClass: 'text-red-600' 
    },
    swiss: { 
        name: 'Swiss Blue', 
        render: renderSwiss, 
        activeClass: 'text-blue-600' 
    },
    minimal: { 
        name: 'Minimalist', 
        render: renderMinimal, 
        activeClass: 'text-gray-800' 
    }
};