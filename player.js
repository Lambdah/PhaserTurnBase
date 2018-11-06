class Player{
  // Template to create a player
  constructor(name, level, maxHealth, currentHealth, image, skillPoints, currentSkillPoints){
    this.name = name;
    this.level = level;
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.image = image;
    this.skillPoints = skillPoints;
    this.currentSkillPoints = currentSkillPoints;
  }

  var skills = require('./skills/skills.js');
  function KnownSkills(){
    return skills;
  };
}
