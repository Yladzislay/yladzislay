// technicalSkills.js
const skillLevels = require('./skillLevels');
const csharpSkills = require('./Detailed/csharpSkills');
const calculateSkillLevel = require('../Helpers/calculateSkillLevel');

const technicalSkills = {
    programmingLanguages: {
        'JavaScript': skillLevels.goodProficiency,
        'Python': skillLevels.onceUsedInRealProject,
        'C#': { "common-level": skillLevels.goodProficiency, "sub-skills": csharpSkills},
        'C++': skillLevels.minimalProficiency,
    },
    webDevelopment: {
        fundamental: {
            'HTML': skillLevels.averageExperience,
            'CSS': skillLevels.averageExperience,
            'JavaScript': skillLevels.averageExperience,
        },
        'Angular': skillLevels.onceUsedInRealProject,
        'Vue.js': skillLevels.onceUsedInRealProject,
        'Node.js': skillLevels.onceUsedInRealProject,
    },
    frameworks: {
        '.NET Framework': skillLevels.averageExperience,
        'devextreme': skillLevels.minimalProficiency
    },
    databases: {
        'SQL (MySQL, PostgreSQL)': skillLevels.averageExperience,
        'NoSQL (MongoDB, Firebase)': skillLevels.theoreticalKnowledge,
    },
    toolsTechnologies: {
        'Git': skillLevels.goodProficiency,
        'Docker': skillLevels.minimalProficiency,
        'CI/CD': skillLevels.averageExperience,
        'GraphQL': skillLevels.unfamiliar,
        'RESTful APIs': skillLevels.goodProficiency,
    },
    operatingSystems: {
        'Windows': skillLevels.highProficiency,
        'Linux': skillLevels.averageExperience,
        'macOS': skillLevels.averageExperience,
    },
    compositeTechnologies: {
        'Full-Stack Web Development': {
            'Front-End': {
                'HTML': skillLevels.averageExperience,
                'CSS': skillLevels.averageExperience,
                'JavaScript': skillLevels.averageExperience,
            },
            'Back-End': {
                'asp.net core': skillLevels.averageExperience,
            },
            'Database': {
                'SQL': skillLevels.averageExperience,
            }
        },
        'DevOps': {
            'Git': skillLevels.goodProficiency,
            'Docker': skillLevels.minimalProficiency,
            'CI/CD': skillLevels.minimalProficiency,
        },
        'Software Development Concepts': {
            'Object-Oriented Programming (OOP)': skillLevels.minimalProficiency,
            'Functional Programming': skillLevels.unfamiliar,
            'Asynchronous Programming': skillLevels.onceUsedInTestProject,
            'Microservices Architecture': skillLevels.onceUsedInTestProject,
            'Design Patterns': skillLevels.minimalProficiency,
        }
    }
};

Object.keys(technicalSkills).forEach(category => {
    if (category === 'compositeTechnologies') {
        Object.keys(technicalSkills[category]).forEach(subCategory => {
            Object.keys(technicalSkills[category][subCategory]).forEach(skill => {
                technicalSkills[category][subCategory][skill] = calculateSkillLevel(technicalSkills[category][subCategory][skill]);
            });
        });
    } else {
        Object.keys(technicalSkills[category]).forEach(skill => {
            technicalSkills[category][skill] = calculateSkillLevel(technicalSkills[category][skill]);
        });
    }
});

module.exports = technicalSkills;