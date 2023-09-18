# Milieu 
Milieu is a comprehensive community interaction app that serves as a bridge between small businesses, sole proprietors, and community members. It offers an intuitive and interactive map tool to help users discover and engage with the businesses and events around them. Built with a robust Sequelize backend and a responsive React frontend, it promises a seamless user experience.

## Table of Contents

- [Features](#features)
- [Demo Video](#demo-video)
- [Screenshots](#screenshots)
- [Quick Start](#quick-start)
- [Backend Setup](#backend-setup)
- [Technology Stack - Dependencies](#technology-stack---dependencies)
- [Contribution](#contribution)
- [License](#license)
- [Contact](#contact-the-creators)
- [Thank You](#thank-you-for-considering-milieu-for-your-community-interaction-needs-we-hope-it-serves-as-a-robust-tool-to-foster-vibrant-and-active-community-engagements)

## Features 🌟

- **Interactive Map Tool**: Integrated with Google Maps API to facilitate easy and smooth location navigation.
- **Business & Event Creation**: Allows registered users to create and edit their business profiles and events, making real-time updates accessible to the community.
- **Community Engagement**: Enables users to explore the vibrant activities and livelihoods happening in their locale.

## Demo Video 🎥

https://github.com/AlexTamayo/Milieu/assets/128196275/05926bfe-d823-409a-b41b-c55e01bd0562

## Screenshots 📸

![mil](https://github.com/AlexTamayo/Milieu/assets/128196275/543523ca-4cbc-46e5-be52-93f97ce37329)
![mil2](https://github.com/AlexTamayo/Milieu/assets/128196275/6d21da36-4191-4beb-8b85-96eafa0d8918)
![mil3](https://github.com/AlexTamayo/Milieu/assets/128196275/f3422e6d-c2a5-4add-b396-827acbfb7e89)

## Quick Start 🚀

### Frontend Setup

1. Navigate to the `frontend` folder.
2. Run `npm install` to install all necessary dependencies.
3. Obtain a Google Map API key and set up your `.env` file with the following configurations:
4. 
REACT_APP_MAPSKEY='your Google Map API key'
REACT_APP_API_BASE_URL=http://localhost:3001/api/
REACT_APP_API_KEY='your geoapify API key'

5. Start the client with `npm start`. The frontend client will run on port 3000 and connect to the database server, rendering the Milieu app in your browser.

## Backend Setup 🖥️

1. Navigate to the `backend` folder.
2. Run `npm install` to install all necessary dependencies.
3. Configure your PostgreSQL database with the following settings:
   - User: `development`
   - Password: `development`
   - Database: `milieu`
   - Host: `localhost`
4. Set up your `.env` file with the following configurations:

DB_USER=development
DB_PASS=development
DB_NAME=milieu
DB_HOST=localhost

5. Seed the database by running `npm run db:reset` in the `backend` directory.
6. Start the server with `npm start`. The backend will run on port 3001.

## Technology Stack 🛠️

### Dependencies

To run Milieu successfully, ensure you have the following dependencies installed:

- Node 12.22.12 or higher
- PostgreSQL 9.x
- React 18.2.0
- Axios 1.5.0
- Bcryptjs 2.4.3
- Sequelize 6.32.1 (for the backend)

You can find more dependencies in the `package.json` files in both the frontend and backend directories.

## Contribution

We welcome contributions to improve the Milieu app. Feel free to contact us if you want to contribute. 

## License

## Contact the Creators

### Alex Tamayo
- **LinkedIn:** [Alex Tamayo](https://www.linkedin.com/in/alexandertamayo/)
- **GitHub:** [AlexTamayo](https://github.com/AlexTamayo)

### Alex Broughton
- **LinkedIn:** [Alex Broughton](https://www.linkedin.com/in/okanoggin/)
- **GitHub:** [AlexWBroughton](https://github.com/AlexWBroughton)

### Filipe Moscovo
- **LinkedIn:** [Filipe Moscovo](https://www.linkedin.com/in/fmoscovo/)
- **GitHub:** [Fmoscovo](https://github.com/Fmoscovo)

## Thank you for considering Milieu for your community interaction needs. We hope it serves as a robust tool to foster vibrant and active community engagements.
