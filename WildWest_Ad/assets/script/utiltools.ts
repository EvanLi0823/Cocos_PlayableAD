export default class utiltools  {

    static getRandom(m1 , m2) { 
        let min = Math.min(m1 , m2);
        let max = Math.max(m1 , m2);
       return min + Math.floor((Math.random()*(max - min)))
   }



   
   
}