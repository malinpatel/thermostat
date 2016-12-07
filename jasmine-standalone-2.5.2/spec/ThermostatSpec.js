'use strict';

describe ('Thermostat', function() {
  var thermostat;


  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('responds to temperature function', function(){
    expect(thermostat.temperature).not.toBeUndefined();
  });

  it ('responds to up function', function(){
    expect(thermostat.up).not.toBeUndefined();
  });

  it ('responds to up function', function(){
    expect(thermostat.down).not.toBeUndefined();
  });

  it ('should contain minimum temperature value', function(){
    expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
  });

  it ('should contain default maximum temperature value', function(){
    expect(thermostat._maximumTemperature).toEqual(25);
  });

  it ('should return true when powerSavingMode is on', function(){
    expect(thermostat._powerSavingMode).toBe(true)
  });

});
