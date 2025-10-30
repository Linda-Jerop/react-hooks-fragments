#!/bin/bash

# Script to increase file watcher limits and start the development server
echo "Setting up file watchers and starting React development server..."

# Increase file watcher limit
echo 524288 | sudo tee /proc/sys/fs/inotify/max_user_watches

# Start the development server
npm start