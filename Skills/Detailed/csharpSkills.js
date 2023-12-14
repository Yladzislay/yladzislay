// csharpSkills.js
const skillLevels = require('../skillLevels');
const calculateSkillLevel = require('../../Helpers/calculateSkillLevel');

const csharpSkills = {
    basics: {
        'Syntax and Structure': skillLevels.goodProficiency,
        'Data Types and Variables': skillLevels.goodProficiency,
        'Operators and Expressions': skillLevels.goodProficiency,
    },
    oop: {
        'Classes and Objects': skillLevels.goodProficiency,
        'Inheritance, Polymorphism, Encapsulation': skillLevels.goodProficiency,
        'Abstraction and Interfaces': skillLevels.goodProficiency,
    },
    memoryManagement: {
        'Reference and Value Types': skillLevels.goodProficiency,
        'Memory Management': skillLevels.averageExperience,
        'Garbage Collection': skillLevels.averageExperience,
    },
    asynchronousProgramming: {
        'Async Methods and Keywords': skillLevels.goodProficiency,
        'Working with Task and Task<T>': skillLevels.averageExperience,
        'Threads and Parallel Programming': skillLevels.averageExperience,
    },
    lambdaAndLINQ: {
        'Lambda Expressions': skillLevels.goodProficiency,
        'LINQ': skillLevels.averageExperience,
    },
    collections: {
        'List, Dictionary, HashSet': skillLevels.goodProficiency,
        'LINQ to Objects': skillLevels.averageExperience,
    },
    exceptions: {
        'try-catch-finally Blocks': skillLevels.goodProficiency,
        'Custom Exceptions': skillLevels.averageExperience,
    },
    fileAndIO: {
        'File System Operations': skillLevels.goodProficiency,
        'Input and Output': skillLevels.averageExperience,
    },
    databases: {
        'ADO.NET': skillLevels.goodProficiency,
        'Entity Framework and ORM': skillLevels.averageExperience,
    },
    testing: {
        'Unit Testing (NUnit, MSTest)': skillLevels.averageExperience,
        'Mock Objects and Testing': skillLevels.averageExperience,
    },
    developmentPlatforms: {
        '.NET Framework and .NET Core': skillLevels.goodProficiency,
        'Cross-Platform Development (.NET 5+)': skillLevels.averageExperience,
    },
    integrationAndWeb: {
        'Web Service Interaction': skillLevels.averageExperience,
        'ASP.NET MVC and ASP.NET Core': skillLevels.averageExperience,
    },
};

module.exports = calculateSkillLevel(csharpSkills);
