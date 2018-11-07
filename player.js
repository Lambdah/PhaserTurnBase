class Player{
  // Template to create a player
  constructor(name, level, maxHealth, currentHealth, image, skillPoints, currentSkillPoints, controlled, currAction){
    this.name = name;
    this.level = level;
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.image = image;
    this.skillPoints = skillPoints;
    this.currentSkillPoints = currentSkillPoints;
    // Player controlled
    this.controlled = true;
    this.currAction = currAction;
  }


}
