# BBC micro:bit program

The driver dashboard reads the standard BBC micro:bit Bluetooth accelerometer service.
The driver dashboard also reads the standard BBC micro:bit Bluetooth temperature service.
You must flash a micro:bit program that enables those services.

## Tooling

Use the Microsoft MakeCode online application for micro:bit.
Create a new project.
Open Extensions.
Add the Bluetooth extension.

## Required blocks

Add these blocks in the on start group.
Set Bluetooth transmit power to 7.
Enable the Bluetooth temperature service.
Enable the Bluetooth accelerometer service.

Add a forever group.
Show a simple animation.
This helps you confirm the program is running.

A reference screenshot is in `makecode_bluetooth_blocks.png`.

## Flashing and operation

Download the program to the micro:bit.
Power the micro:bit with a battery pack during transport.
Keep the micro:bit close to the protected object.
Keep the micro:bit within Bluetooth range of the driver device.

## Troubleshooting

Web Bluetooth can only connect to one browser tab at a time.
Close other tabs that might still hold a connection.
If the device does not appear, reset the micro:bit and try again.
If the connection is unstable, reduce distance and remove metal shielding.
