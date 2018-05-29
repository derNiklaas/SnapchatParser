# SnapChat Parser

A small tool to parse a snap_history.json and convert it to a simple txt file.

## Usage

To use SnapchatParser you have to have a working NodeJS installation (including NPM).
You can download your snap_history.json directly from Snapchat: https://support.snapchat.com/en-US/a/download-my-data

Just parsing a file named snap_hsitory.json in the same folder as SnapchatParser:

```
npm start
```


To parse a file with a specific name or at a specific location (NOTE: blank spaces in file paths are NOT supported at the moment):

```
npm start file=Path/To/Your/File/Without/Blank/Spaces.json
```
