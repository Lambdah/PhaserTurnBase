class Enemy{
  // Template for enemy

  constructor(name, level, maxHealth, currentHealth, image, controlled, currAction, sprite){
    this.name = name;
    this.level = level;
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.image = image;
    this.currAction = currAction;
    this._sprite = sprite;
  }

  get sprite(){
    return this._sprite;
  }

  set sprite(newSprite){
    this._sprite = newSprite;
  }
  

}
