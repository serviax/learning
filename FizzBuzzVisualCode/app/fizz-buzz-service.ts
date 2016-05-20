export class FizzBuzzService {
    CalculateValue(value : number)
    {
        var message:string="";
        if ( value %3==0||value%5==0){
            if (value%3 == 0)
            {
                message = "Fizz";
            }
            if (value%5 == 0)
            {
                message +="Buzz";
            }
        }
        else
        {
            message = value.toString();
        }
        
        return message;
    }
}