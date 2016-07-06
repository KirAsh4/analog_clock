# Module: analog_clock

The `analog_clock` module is  created for the MagicMirror project by Michael Teeuw
(https://github.com/MichMich/MagicMirror). The modules displays a simple round analog clock.

## Status
Whatever comes before BETA ... use at your own risk.

## Installing the module
Clone this repository in your `~/MagicMirror/modules/` folder `( $ cd ~/MagicMirror/modules/ )`:
````javascript
git clone https://github.com/KirAsh4/analog_clock
````

## Using the module
To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
			{
				module: 'analog_clock',
				position: 'top_left',
				config: {
						// The config property is optional
						// Without a config, a default month view is shown
						// Please see the 'Configuration Options' section for more information
				}
			}
]
````

## Configuration options
The `analog_clock` module is currently still being developed and thersfore has no defined configuration options yet.