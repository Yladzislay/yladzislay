const calculateSkillLevel = (subSkills) => {
    const sum = Object.values(subSkills).reduce((acc, level) => acc + level ** 2, 0);
    const rms = Math.sqrt(sum / Object.keys(subSkills).length);
    return Math.round(rms);
};

module.exports = calculateSkillLevel;