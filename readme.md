# The Concentrated Reef

## E-Commerce page for buying flowers, concentrates, and syrups

NOTE: If you are using this to view the source and want to run the server, please compile the TypeScript using `npm run build` or `yarn build` then run `npm start` or `yarn start`. Alternative if you don't care about having to build separately for production would be to use `npm run start-build` or `yarn start-build` and that will both build and start the server. For dev purposes use `npm run dev` or `yarn dev` to directly compile the TypeScript. Also note that the database won't be connected so you will have to insert your own MongoDB URI for Mongoose. There is a seeders folder, you just have to edit `seed.ts` in order for `npm run [seed | unseed]` or `yarn [seed | unseed]` to seed and unseed data from your database. Preferred method of seeder insertion is through file module import. If you also happen to have elastic beanstalk as your deployment service, there is a script that will build, zip, and ship exactly what is needed to your deployment environment. Modify for your purposes.

### How to Use
The TCR Website is quite simple and straight forward to use. You'll start on the homepage, and can then navigate to flowers, concentrates, or syrups from the navigation bar (or the hamgburger button for mobile). You can use this site completely as a guest or you can login. Not a previous user? Sign-up! After sign-up, you'll be automatically logged in so you can start saving your purchases right away!

"Uh-oh! My computer restarted overnight and closed my browser!"

Not a problem, your purchase data will be saved as long as you were logged in at the time of the shutdown. Just come on back and login and continue right where you left off!

Checkout bugging ya? Not a problem, in our website that's a feature! No need for pesky card information anymore! Checkout automatically detects if you have items in your cart and if it finds any, it removes them after purchasing! Yay!

### Routes
| Action | Route | Description |
| --- | --- | --- |
| / | GET | Homepage |
| /signup | GET | Show sign up page |
| /login | GET | Show login page |
| / | POST | Handle sign-up and login |
| /flower | GET | Show all flowers |
| /flower/:name | GET | Show specific flower |
| /concentrate | GET | Show all concentrates |
| /concentrate/:name | GET | Show specific concentrate |
| /syrup | GET | Show all syrups |
| /syrup/:name | GET | Show specific syrup |
| /cart | GET | Redirects to actual cart page |
| /cart/:user | GET | Show users current cart |
| /cart/:user | POST | Update users cart |
| /cart/:user/checkout | GET | Checks out user |

### Tech used
- Yarn
- Node.js
- TypeScript
- Express
- Express Sessions
- Mongoose
- PLACSS
- Bcrypt
- EJS
- Elastic Beanstalk CLI

### Insirpation
When my Dad was in college, he had built a DVD rental e-commerce page on a LAMP (Linux, Apache, MySQL, PHP) server. I enjoyed reading over his code and helping debug so much that I thought I'd take a crack at making an e-commerce site using tech that I only recently familiarized myself with. I decided to do a flower-based operation since that is one of my many hobbies, and flowers seemed like the best idea to transform into a retail website. The site needed something more than just flowers though, so as a step up I decided to incorporate the things I make from said flowers, and thats syrups and concentrates. Syrups are just viscous forms of the flowers we know and love. They are more potent in flavor and/or smell than their natural counterparts. Concentrates are just syrups reduced down even further into a solid, virtually no impurities exist in the material. That is what eventually finalized my plan for how to tackle the creation of this site.

### Current Bugstack
#### Deciphering Bug ID
##### C=Cart, F=Flower, CC=Concentrate, S=Syrup, SU=Sign-up, L=Login, D=Detail, M=Mobile, D=Desktop, FN=Function, SS=Styling
- \[C-FN-101\] - Checkout doesn't handle cards
- \[M-SS-0102\] (Patched) - Mobile text resize fails to resize until page refresh
- \[D-SS-0102\] (Patched) - Desktop text resize fails to reszie until page refresh