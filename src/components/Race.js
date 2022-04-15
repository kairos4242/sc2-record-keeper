export default class Race {
    
    static TERRAN = new Race("terran")
    static PROTOSS = new Race("protoss")
    static ZERG = new Race("zerg")
    
    constructor(name) {
        this.name = name
    }
}