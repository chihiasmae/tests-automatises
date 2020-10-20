export class Users {
    menus=[
        {
          email:'chihi@akka.eu',
          password:'chihi123',
          familialstatut:'celibatire',
          société:'COE DIGITAL',
          role: 'developpeur'
        },
        {
            email:'zinbi@akka.eu',
            password:'zinbi123',
            familialstatut:'celibatire',
            manager:'chihi',
            société:'COE DIGITAL',
            role: 'developpeur'
        },
        {
            email:'hemdi@akka.eu',
            password:'nihal123',
            familialstatut:'mariée',
            manager:'chihi',
            société:'COE DIGITAL',
            role: 'developpeur'
        },
        {
            email:'oumehdi@akka.eu',
            password:'amine123',
            familialstatut:'marié',
            manager:'chihi',
            société:'COE DIGITAL',
            role: 'developpeur'
        },
        {
            email:'safraoui@akka.eu',
            password:'badr123',
            familialstatut:'celibatire',
            manager:'chihi',
            société:'COE DIGITAL',
            role: 'developpeur'
        },
        {
            email:'nedlousi@akka.eu',
            password:'tarik123',
            familialstatut:'celibatire',
            manager:'chihi',
            société:'COE DIGITAL',
            role: 'developpeur'
        },
        {
            email:'imane@akka.eu',
            password:'imane123',
            familialstatut:'celibatire',
            role: 'ressource humaine'
          
            
        },
        {
            email:'rahmani@akka.eu',
            password:'rahmani123',
            familialstatut:'mariée',
            manager:'chihi',
            société:'COE DIGITAL',
            role: 'developpeur'
        },
    ]

    constructor(){}
    
    getUsersList(){
        return this.menus;
    }
}