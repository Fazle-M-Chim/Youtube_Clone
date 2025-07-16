export const API_KEY = "sAIzaSyBe38scH-U2Da1SQzut9-ko9ZyaPiU1dO8";   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}