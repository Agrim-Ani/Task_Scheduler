# Task_Scheduler
Helps the team lead to distribute daily tasks to his team

# iOS Scriptable Widget for Task Management

This project demonstrates how to create an iOS Scriptable widget for task management. Users can add tasks using an iOS Shortcut, and the widget will display the task of the day.

## Overview

- **Scriptable**: Scriptable is an iOS app that allows you to create JavaScript widgets and automations. In this project, we use Scriptable to create a widget that fetches and displays tasks from a backend service.

- **iOS Shortcuts**: We use iOS Shortcuts to add tasks to the backend service, allowing users to input tasks via a user-friendly interface.

- **Backend Service**: The backend service is hosted on GitHub and provides API endpoints for both adding and retrieving tasks. It's a simple Node.js and Express application.

## Prerequisites

- **Scriptable App**: You need to have the Scriptable app installed on your iOS device. You can download it from the App Store.

- **iOS Shortcuts**: Create a shortcut to add tasks to the backend service. The script is provided in the project.

## How to Use

1. **Set Up iOS Shortcut**:
   - Create a new iOS Shortcut.
   - Add an action to ask for input, which will prompt you for the task you want to add.
   - Add an action to run the Scriptable script `Scriptable-Widget-post.js` to save the task to the backend service.
   - Create the shortcut as shown in images.
   - ![image 1](https://github.com/Agrim-Ani/Task_Scheduler/blob/main/images/1.PNG)
   - ![image 2](https://github.com/Agrim-Ani/Task_Scheduler/blob/main/images/2.PNG)
   - ![image 3](https://github.com/Agrim-Ani/Task_Scheduler/blob/main/images/3.jpg)
   - Add Shortcut to the ios screen
   - ![image 4](https://github.com/Agrim-Ani/Task_Scheduler/blob/main/images/4.jpg)

2. **Add Scriptable Widget**:
   - Go to your iOS home screen.
   - Enter jiggle mode by holding an app icon.
   - Tap the "+" button in the top left corner.
   - Search for "Scriptable" and select it.
   - Choose a widget size (large) and add it to your home screen.
   - ![image 5](https://github.com/Agrim-Ani/Task_Scheduler/blob/main/images/5.jpg)
   - Tap and hold the widget to enter edit widget option.
   - ![image 6](https://github.com/Agrim-Ani/Task_Scheduler/blob/main/images/6.jpg)
   - Select `Scriptable-Widget-get.js` as the script to be run on interaction.

3. **Run The Shortcut**:
   - Now run the shortcut and select the number of tasks.
   - ![image 7](https://github.com/Agrim-Ani/Task_Scheduler/blob/main/images/7.jpg)
   - Now type the tasks.
   - ![image 8](https://github.com/Agrim-Ani/Task_Scheduler/blob/main/images/8.PNG)
   - Once the shortcut execution is complete, the widget would be updated.
   - ![image 9](https://github.com/Agrim-Ani/Task_Scheduler/blob/main/images/9.jpg)

4. **View Task of the Day**:
   - The Scriptable widget will display the "Task of the Day," which is fetched from the backend service.
   - The task is provided by your team lead.

## Project Structure

- **Scriptable-Widget-post.js**: This Scriptable script is designed to be run by an iOS Shortcut. It sends a POST request to the backend service to add a task.

- **Scriptable-Widget-get.js**: This Scriptable script creates the widget and fetches the "Task of the Day" from the backend service. It displays the data in the widget.

- **Backend Service**: The backend service is hosted on GitHub and provides two API endpoints:
  - `POST /api/items`: Adds a task to the database.
  - `GET /api/items`: Retrieves the "Task of the Day" from the database.

## Customize the Project

- You can customize the appearance of the widget, such as its colors and fonts, by modifying the `createWidget` function in `Scriptable-Widget-get.js`.

- To enhance the backend service or add more features, you can modify the routes in the Node.js and Express application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Scriptable community for inspiration and support.
- GitHub API documentation for providing the data source for this project.

Feel free to contribute to this project or use it as a template for your own Scriptable widgets!

