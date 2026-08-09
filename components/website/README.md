# Archivault Bluetooth

Archivault Bluetooth is a two page web system that supports the safe transport of fragile archaeological artifacts.
It was built for the 2025 to 2026 FIRST LEGO League Challenge UNEARTHED season.
The season asks teams to follow traces of the past and connect discovery to real world problem solving.
This project focuses on the conservation moment after discovery.

This project was built with Team Brickheads RollingStones in Pretoria, South Africa.
Brickheads is a community robotics club established in 2022.
Brickheads coaches teach robotics to more than forty children.
Team RollingStones is a team of four Pretoria boys aged thirteen to fifteen.

## Live apps

Driver dashboard: https://sanetpienaar.github.io/Archivault_bluetooth/
Curator dashboard: https://sanetpienaar.github.io/Archivault_bluetooth/curator

## What the system does

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

You must flash a micro:bit program that enables Bluetooth Low Energy services.
You must add the Bluetooth extension in the Microsoft MakeCode online application.
Set Bluetooth transmit power to 7.
Enable the Bluetooth temperature service.
Enable the Bluetooth accelerometer service.
A reference screenshot is in `microbit/makecode_bluetooth_blocks.png`.
Full instructions are in `microbit/README.md`.

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

## Safety and privacy

This tool logs location and timestamps.
Only use it with clear consent from the driver and the team.
Use your own Firebase project for public deployments.

## Credits

Built by Team Brickheads RollingStones and contributors.
Mentor and code support: Leon Pienaar.

## License

MIT License.
See `LICENSE`.

## Trademarks

FIRST, FIRST LEGO League, and UNEARTHED are trademarks of FIRST and its partners.
LEGO and micro:bit are trademarks of their respective owners.
This project is independent and is not endorsed by FIRST, the LEGO Group, or the Micro:bit Educational Foundation.
