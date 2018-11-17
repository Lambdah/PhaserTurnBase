class BattleSystem{

    constructor(){
        this.action_cache = [];
    }


    print_action(){
        for (let i in this.action_cache){
            console.log(this.action_cache[i]);
        }
    }

    log_action(unit, action){
        let turn = {'unit':unit, 'action':action};
        this.action_cache.push(turn);
    }

    clear_cache(){
        this.action_cache = [];
    }

}