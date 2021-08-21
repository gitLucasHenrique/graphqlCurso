class CustomLogger{
    public dateNow : Date = new Date;
    public prefix: string = ':> '

    say(file: string, message: string){
        const timestamp: number = Date.now();
        console.log(`${timestamp} ${this.prefix} '${file}' said : ${message}`);
    }
}

export = CustomLogger;