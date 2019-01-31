//SKILL CLASS 

class Skill {
    //constructor
    constructor(skill, description, experience, level) {
        this.skill = skill;
        this.description = description;
        this.experience = experience;
        this.level = level;
    }
    
    //getters
    // get name(){
    //     return this._name;
    // }
    // get department(){
    //     return this._department;
    // }
    // get remainingVacationDays(){
    //     return this._remainingVacationDays;
    // }
    // 
    // //methods
    // takeVacationDays(daysOff){
    //     return this._remainingVacationDays -= daysOff;
    // }
}

module.exports = Skill;
