'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('starts at 20 degrees',function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it ('can increase the temperature', function(){
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });

  it ('can decrease the temperature', function(){
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });

  it ('cannot go below 10 degrees', function() {
    for (var i = 0; i< 10; i++) {
      thermostat.down();
    }
    expect(function() {thermostat.down(); }).toThrowError('Cannot go below 10 degrees');
  });

});
