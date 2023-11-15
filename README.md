# Web User Dashboard

## Overview

This web application is designed to provide a user management dashboard with two main tabs: User Details and Account Creation. The User Details tab displays user information fetched from a placeholder database in a searchable table format, allowing users to search for specific entries. The Account Creation tab includes a form for username and password input. Below are the detailed instructions to set up and run the application.

## Requirements

1. **User Details Tab:**
   - Fetch user data from a placeholder database.
   - Implement a searchable table displaying user information: Username, Email, Phone, ID, and Creation date.
   - Enable a click action on any user in the search results to open a popup/modal with a button to generate a report for the selected user.

2. **Account Creation Tab:**
   - Create a form with fields for username and password.
   - Implement dummy request handling upon form submission.

3. **Dashboard Interface:**
   - Design a clean and intuitive dashboard layout with two tabs: User Details and Account Creation.

## Setup and Run Instructions

Follow the steps below to set up and run the web application:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the client directory:

   ```bash
   cd ./client
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Access the site on [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in your web browser.

## Usage

- Once the application is running, navigate to the User Details tab to search and view user information.
- Switch to the Account Creation tab to fill out the form and submit dummy data.
- Explore the clean and intuitive dashboard interface.

Feel free to customize and extend the application based on your specific needs. If you encounter any issues or have questions, refer to the documentation or contact the development team.

Happy coding!
