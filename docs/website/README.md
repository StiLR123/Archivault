# Website & Microbit source code

Here is a more detailed explanation of what the websites do and how to employ them:

## How the system works
The driver dashboard connects to a BBC micro:bit over Web Bluetooth.
It reads accelerometer and temperature telemetry.
It calculates the live g force magnitude.
It uploads telemetry and route points to Firebase Realtime Database.
It shows a full screen warning when a curator defined safety limit is exceeded.

The curator dashboard watches the same database.
It lists trips.
It shows a live map trace with event markers.
It plots shock and temperature over time.
It sets the global safety limit that the driver dashboard enforces.

## System design

Sensor node: BBC micro:bit broadcasting Bluetooth Low Energy services.
Driver dashboard: `index.html` running on a phone or laptop in the vehicle.
Curator dashboard: `curator.html` running in a control room or judge station.
Data layer: Firebase Realtime Database storing trips, locations, shocks, and safety settings.

## BBC micro:bit program

The driver dashboard reads the standard BBC micro:bit Bluetooth accelerometer service.
The driver dashboard also reads the standard BBC micro:bit Bluetooth temperature service.
You must flash a micro:bit program that enables those services.

### Tooling

Use the Microsoft MakeCode online application for micro:bit.
Create a new project.
Open Extensions.
Add the Bluetooth extension.

### Required blocks

Add these blocks in the on start group.
Set Bluetooth transmit power to 7.
Enable the Bluetooth temperature service.
Enable the Bluetooth accelerometer service.

Add a forever group.
Show a simple animation.
This helps you confirm the program is running.

A reference screenshot is in `makecode_bluetooth_blocks.png`.

### Flashing and operation

Download the program to the micro:bit.
Power the micro:bit with a battery pack during transport.
Keep the micro:bit close to the protected object.
Keep the micro:bit within Bluetooth range of the driver device.

### Troubleshooting

Web Bluetooth can only connect to one browser tab at a time.
Close other tabs that might still hold a connection.
If the device does not appear, reset the micro:bit and try again.
If the connection is unstable, reduce distance and remove metal shielding.
The full source code is in `microbit/microbit-bluetooth.js`.

## Driver dashboard workflow

1. Enter a Trip ID.
2. Enter an Artifact name.
3. Select Start monitoring.
4. Select the BBC micro:bit device in the browser Bluetooth dialog.
5. Allow location permissions for route logging.

Upload timing.

Shock samples upload every one second.
Location samples upload every five seconds.

## Curator dashboard workflow

1. Open the curator dashboard.
2. Select a trip.
3. Set the safety limit slider.
4. Monitor the map and the chart in real time.

## Data format

Firebase Realtime Database keys.

- `safety_settings/max_g` stores the safety limit in g.
- `trips/<tripId>/metadata` stores artifact name and start time.
- `trips/<tripId>/shocks` stores raw shock samples.
- `trips/<tripId>/locations` stores route points and peak shock per interval.

Example location record.

```json
{
  "lat": -25.7479,
  "lng": 28.2293,
  "maxG": "2.31",
  "temp": 24,
  "isViolation": true,
  "t": 1738920000000
}
```

## Requirements

Web Bluetooth requires a secure context.
Use Hypertext Transfer Protocol Secure hosting or localhost.
Google Chrome or Microsoft Edge are recommended.
Many mobile browsers and Apple iOS browsers do not support Web Bluetooth.

Location logging requires the browser geolocation permission.

## Local development

Serve the folder with a local web server.

```bash
python3 -m http.server 8000
```

Then open.

- http://localhost:8000/index.html
- http://localhost:8000/curator.html
