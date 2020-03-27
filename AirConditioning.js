"use ctrict";
let i = 0;

class AirConditioning {
	constructor(name){
		this._name = name;
		this._temperature = 28;
		this._temperatureMode = "tropics";
		this._switchState = false;
		this._temperatureModeList = ["tropics", "temperate", "pole"];
	}
	getName(){
		return this._name;
	}
	get statusAirConditioning(){
		if(this._switchState == true){
			return "on";
		}
		else{
			return "off";
		}
	}
	switchOn(){
		this._switchState = true;
	} 
	switchOff(){
		this._switchState = false;
	}
	isCorrectData(value){
		if(typeof value == "number" && !isNaN(value)){
		return true;
		}
		else{
			return false;
		}
	}
	
	isCorrectTemperature(value){
		if(typeof value == "number" && !isNaN(value)){
				if(value <= 35 && value >= 27 && this._temperatureMode == "tropics"){
					return true;
				};
				
				if(value <= 26 && value >= 20 && this._temperatureMode == "temperate"){
					return true;
				};
				
				if(value <= 19 && value >= 15 && this._temperatureMode == "pole"){
					return true;
				};
						
		}
		else{
			return false;
		}
	}
	
	setTemperature(value){
		if(this.isCorrectTemperature(value)){
		this._temperature = value;
		}
	}
	get getTemperature(){// get get ???
		return this._temperature;
	}
	isCorrectInDeCreaseTemperature(){
				if(this._temperature <= 35 && this._temperature >= 27 && this._temperatureMode == "tropics"){
					return true;
				};
				if(this._temperature <= 26 && this._temperature >= 20 && this._temperatureMode == "temperate"){
					return true;
				};
				if(this._temperature <= 19 && this._temperature >= 15 && this._temperatureMode == "pole"){
					return true;
				};
				
	}
	increaseTemperature(){// ограничено увеличение - кроме крайних градусов диапозона!!! < вместо <= - необход. дублировать isCorrectInDeCreaseTemperature
		if(this.isCorrectInDeCreaseTemperature()){
			this._temperature++;
		}
	}
	decreaseTemperature(){// ограничено уменьшение
		if(this.isCorrectInDeCreaseTemperature()){
			this._temperature--;
		}
	}
	get temperatureMode(){
		return this._temperatureMode;
	}
	controlTemperature(){
		switch(this._temperatureMode){
				case "tropics": 
					if(this._temperature > 35 || this._temperature < 27){
						this._temperature = 30;
					};	
					break;
				case "temperate":
					if(this._temperature > 26 || this._temperature < 20){
						this._temperature = 22;
					};	
					break;
				case "pole":
				if(this._temperature > 19 || this._temperature < 15){
						this._temperature = 18;
					};	
					break;
				default:
				  console.log("Error");
		};			
	}
	setTemperatureMode(value){// Изменять температуру при изм. режима -  вынести Control в отдел код - подключить к nextMode!!!. раб со списком - tropics,temperate, pole		
	     if(value >= 0 && value < this._temperatureModeList.length && this.isCorrectData(value)){
			this._temperatureMode = this._temperatureModeList[value];
			airBedroom.controlTemperature();//работает! ???? не раб - AirConditioning.controlTemperature();
						
		};	
			/*switch(this._temperatureMode){// тоже раб
				case "tropics": 
					if(this._temperature > 35 || this._temperature < 27){
						this._temperature = 30;
					};	
					break;
				case "temperate":
					if(this._temperature > 26 || this._temperature < 20){
						this._temperature = 22;
					};	
					break;
				case "pole":
				if(this._temperature > 19 || this._temperature < 15){
						this._temperature = 18;
					};	
					break;
				default:
				  console.log("Error");
			};*/
	}
	nextMode(){
		i = this._temperatureModeList.indexOf(this._temperatureMode);
								
		if (i < 2){	
			i++;
			this._temperatureMode = this._temperatureModeList[i];//this.temperatureModeList[i++] ???
		}
		else{
			console.log("Выберите режим: 0 - 2");
		}
	}
	
    previousMode(){
		i = this._temperatureModeList.indexOf(this._temperatureMode);
								
		if (i > 0){	
			i--;
			this._temperatureMode = this._temperatureModeList[i];//this.temperatureModeList[i++] ???
		}
		else{
			console.log("Выберите режим: 0 - 2");
		}
	}
}

let airBedroom = new AirConditioning("airBedroom");
airBedroom.switchOn();
console.log(airBedroom.statusAirConditioning);
airBedroom._temperature = 30;
console.log(airBedroom._temperature);
airBedroom.decreaseTemperature();
console.log(airBedroom._temperature);
console.log(airBedroom.temperatureMode);
airBedroom.setTemperatureMode(1);
console.log(airBedroom.temperatureMode);
airBedroom.setTemperature(23);//  раб
//airBedroom._temperature = 40;// !!! устанавл 40 при любом режиме
//airBedroom.increaseTemperature();
/*console.log(airBedroom._temperature);
airBedroom.decreaseTemperature();
airBedroom.decreaseTemperature();*/
//airBedroom.setTemperature(38);
console.log(airBedroom._temperature);
console.log(airBedroom.getName());
//airBedroom.nextMode();
//airBedroom.previousMode();
//airBedroom.previousMode();
//airBedroom.previousMode();
//airBedroom.nextMode();
//airBedroom.nextMode();
airBedroom.setTemperatureMode(2);
console.log(airBedroom.temperatureMode);
console.log(airBedroom._temperature);


