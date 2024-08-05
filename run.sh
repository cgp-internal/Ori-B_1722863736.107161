#!/bin/bash

# Install Node
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Initialize a new Node project
npm init -y

# Install necessary dependencies
npm install csv-parser fs-extra

echo "Node installed, project initialized, and dependencies installed."