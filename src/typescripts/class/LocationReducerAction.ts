export default class LocationReducerAction {
    constructor( type: string, location: string)
    {
        this.type = type;
        this.location = location;
    }
    
    type: string;
    location: string;
}