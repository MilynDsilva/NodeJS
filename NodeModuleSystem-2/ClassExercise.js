class TV{
    constructor(brand,volume = 1,channel = 50,updatedVal){
        //let val1 = this.volume;
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
        this.updatedVal = updatedVal;
    }
    brandName(){
        return 'I am '+this.brand;
    }
    increaseVol(val = this.updatedVal){
       // return this.volume = val;
        if(val >=100 || val <=0){
            return 'Volue can be below 0 or above 100';
        }
        else{
            val += 1;
             this.volume= val;
       }
       return this.updatedVal = this.volume;

    }
    decreaseVol(val = this.updatedVal){
        if(val >=100 || val <=0){
            console.log( 'Volue can be below 0 or above 100');
        }
        else{
            val -= 1;
            this.volume = val;
      }
      return this.updatedVal = this.volume;
    }
    setChannel(chan){
        if(chan >this.channel || chan <=0){
            return chan = this.channel;
        }
        else
                return this.channel = chan; 
}
    resetChannel(){
        this.channel = 1;
        this.volume = 50;
    }
}

class Remote extends TV {
    constructor(brand,channel){
        super(brand,channel)
    }
    onTv(){
        return this.brandName() + ' at Channel '+this.channel+',Volume '+this.volume;
    }
}
newtv = new Remote("Panasonic");
console.log(newtv.onTv());

//newtv1 = new Remote("Panasonic1");
newtv1 = new Remote("Panasonic1",3,3);

//newtv1.increaseVol(1);


//newtv1.setChannel(1);
console.log(newtv1.onTv());
