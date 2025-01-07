# React Todo App

A simple and interactive Todo application built with React that allows users to
manage their tasks with features like adding, deleting, and reordering tasks.

## Features

- Add new tasks with title and description
- Delete existing tasks
- Reorder tasks using move up/down functionality
- Input validation for task creation
- Clean and intuitive user interface

## Component Structure

The app consists of a single React component (`Todo`) that manages the following
state:

- List of todos (title and body for each task)
- Current task title input
- Current task body input

## Usage

### Adding a Task

1. Enter a task title in the "Task title" field
2. Optionally add a description in the "Task body" field
3. Click the "Add Task" button
4. The task will appear in the task list

### Managing Tasks

For each task in the list, you can:

- Delete it using the "Delete" button
- Move it up in the list using "Move up"
- Move it down in the list using "Move Down"

## Dependencies

- React
- React Hooks (`useState`)

## Future Improvements

Possible enhancements for the app:

1. Add task editing functionality
2. Implement task completion status
3. Add local storage persistence
4. Include task categories or tags
5. Add task due dates
6. Implement search and filter functionality
