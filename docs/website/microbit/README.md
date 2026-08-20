# BBC micro:bit program

The driver dashboard reads the standard BBC micro:bit Bluetooth accelerometer service and Bluetooth temperature service.

You must flash a micro:bit program that enables those services.

## Tooling

* Use the [Microsoft MakeCode online application](https://makecode.microbit.org) for micro:bit. 
* Create a new project.
* Open Extensions.
* Add the Bluetooth extension.

## Required blocks/code

**You can use the Javascript file: `Microbit_code.js` and paste it into Microsoft MakeCode.** Just make sure you have the Bluetooth extension

Or, if you want to make it yourself, you can can use the block code:

* Add these blocks in the *on start* group:
  - Set Bluetooth transmit power to `7`.
  - `Enable` the Bluetooth temperature service.
  - `Enable` the Bluetooth accelerometer service.

* Add a forever group.
  - Show a simple animation.
    (This helps you confirm the program is running.)
 
## Flashing and operation

* Download the program to the micro:bit.
* Power the micro:bit with a battery pack during transport.
* Keep the micro:bit close to the protected object.
* Keep the micro:bit within Bluetooth range of the driver device.

## Troubleshooting
Web Bluetooth can only connect to one browser tab at a time.

Close other tabs that might still hold a connection.

If the device does not appear, reset the micro:bit and try again.

If the connection is unstable, reduce distance and remove metal shielding.
