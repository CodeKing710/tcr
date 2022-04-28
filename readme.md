# The Concentrated Reef

## E-Commerce page for buying flowers, concentrates, and syrups

NOTE: If you are using this to view the source and want to run the server, please compile the TypeScript using `npm run build` or `yarn build` then run `npm start` or `yarn start`. Alternative if you don't care about having to build separately for production would be to use `npm run start-build` or `yarn start-build` and that will both build and start the server. For dev purposes use `npm run dev` or `yarn dev` to directly compile the TypeScript.

### Routes
| Action | Route | Description |
| --- | --- | --- |
| / | GET | Homepage |
| /signup | GET | Show sign up page |
| /login | GET | Show login page |
| / | POST | Handle sign-up and login |