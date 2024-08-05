Data Management Application
===========================

Overview
--------

This is a data management application that stores and manages people records in a CSV file. The application provides a simple interface to read, write, update, and delete records.

How to Run
----------

1. Install Node.js if you haven't already.
2. Open a terminal and navigate to the project directory.
3. Run `./run.sh` to install dependencies and set up the project.
4. The application is now ready to use.

Usage
-----

* `app.js` is the main entry point of the application.
* The application uses a CSV file `data/records.csv` to store records.
* The `dataManager.js` module provides functions to read, write, update, and delete records.
* The `sampleData.js` module generates sample records for the CSV file.

Files
-----

* `app.js`: Main application file
* `dataManager.js`: Data management module
* `sampleData.js`: Sample data generator
* `data/records.csv`: CSV file to store records
* `run.sh`: Bash run script
* `README.md`: This file

Note: Make sure to run the `run.sh` script to install dependencies and set up the project before using the application.