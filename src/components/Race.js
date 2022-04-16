export default class Race {
    
    static TERRAN = new Race("terran")
    static PROTOSS = new Race("protoss")
    static ZERG = new Race("zerg")
    static RANDOM = new Race("random")
    
    constructor(name) {
        this.name = name
    }
}