export class FizzBuzzService {
    CalculateValue(value : number)
    {
        if (value%3 == 0)
        {
            return "Fizz";
        }
        else if (value%5 == 0)
        {
            return "Buzz";
        }
        else
        {
            return value.toString();
        }
    }
}