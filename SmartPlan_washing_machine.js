1. 
A. 
B. washing machine


3.
Class WashingMachine

	State
		_name: name 
		_status: Boolean (true, false)
		_temperature: Number
		_modes: [String]
		_currentMode: Number
		
		
      
	Behavior	
      getName(): String
		getStatus(): Boolean
		on(): void
		off(): void
		increaseTemperature(): void
		decreaseTemperature(): void
		setTemperature(Number): void
      getTemperature(): Number
      getMode(): String
	  nextMode(): void
      previousMode(): void
		

		