// Skills are sorted by name then level
var skills = {
  "Name" : {
    "MMan":{
      "1":{
        "levelReq" : 1,
        "name" : "Flame",
        "learnable" : [ "MMan", "dragon"],
        "basedamage" : 50,
        "levelMultiple" : 3,
        "cost" : 15,
        "effect" : "burn"
      },
      "4":{
        "levelReq" : 4,
        "name" : "Blaster",
        "learnable" : [ "MMan"],
        "basedamage" : 100,
        "levelMultiple" : 0.5,
        "cost" : 30,
        "effect" : null
      }
    },
    "dragon":{
      "1":{
        "levelReq" : 1,
        "name" : "Flame",
        "learnable" : [ "MMan", "dragon"],
        "basedamage" : 50,
        "levelMultiple" : 3,
        "cost" : 15,
        "effect" : "burn"
      },
      "8" : {
      "levelReq" : 8,
      "name" : "Tailwhip",
      "learnable" : [ "dragon"],
      "basedamage" : 30,
      "levelMultiple" : 0.8,
      "cost" : 50,
      "effect" : null
      }
    }
  }
};


class UnitSkills{
  constructor(unit){
    this.unit = unit;
  }

  skill(){
    return skills["Name"][this.unit.name];
  }

}
