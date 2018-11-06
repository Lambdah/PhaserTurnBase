// Skills are sorted by level
var skills = {
  "levelReq" : {
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
    },
    "8":{
      "levelReq" : 8,
      "name" : "Tailwhip",
      "learnable" : [ "dragon"],
      "basedamage" : 30,
      "levelMultiple" : 0.8,
      "cost" : 50,
      "effect" : null
    }
  }
};


exports.getSkill = function (){
  skill = JSON.parse(skills);
  return skill;
}
