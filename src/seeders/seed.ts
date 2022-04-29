import user from './user';
import flower from './flower';
import syrup from './syrup';
import concentrate from './concentrate';

(async () => {
  await user();
  await flower();
  await syrup();
  await concentrate();

  console.log("Seeding Successful");
  process.exit(0);
})();