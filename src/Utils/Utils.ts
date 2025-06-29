export class Utils{
    public MAX_TOKEN_TIME = 5 * 60 +  1000;
     
    static generateVerificationToken(digit:number = 6){
        const digits = '01234567';
        let otp =  '';
        for (let i = 0; i < digit; i++) {
            otp += Math.floor(Math.random() * 10);
        }
        return parseInt(otp);
    }
}