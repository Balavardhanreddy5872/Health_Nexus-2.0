# Health_Nexus-2.0

Health_Nexus-2.0 is a web application designed to facilitate interactions between users, doctors, and administrators within the healthcare domain. Below are instructions to set up and run the application on your local machine.

## Setup Instructions

1. **Download and Unzip:**
   - Download the zip file containing the Health_Nexus-2.0 application.
   - Unzip the contents to your desired location.

2. **Install Dependencies:**
   - Open a terminal and navigate to the root directory of the unzipped folder.
   - Run the following command to install dependencies:
     ```
     npm install
     ```

3. **Install Client Dependencies:**
   - Navigate to the `client` folder within the root directory.
   - Run the following command to install client-side dependencies:
     ```
     npm install
     ```

4. **Run the Application:**
   - After installing dependencies, return to the root directory.
   - Run the following command to start the application:
     ```
     npm run dev
     ```

5. **Accessing the Application:**
   - Once the application is running, you can access the client interface by navigating to `localhost:3000` in your web browser.
   - The server-side functionalities will be available at `localhost:8080`.

## Usage Instructions

### User/Admin Login:
1. Navigate to the login page.
2. Enter your credentials to log in as a user or administrator.

### Doctor Login:
1. Visit the doctor portal.
2. Log in using the provided authentication mechanism.

## Additional Notes

- Ensure that you have Node.js and npm installed on your system before running the application.
- Make sure that ports 3000 and 8080 are not in use by any other applications on your machine.
- Ensure you have correct Nodejs Version and Mongodb commpass in your local Machine 

With these instructions, you should be able to successfully set up and run Health_Nexus-2.0 on your local machine.
