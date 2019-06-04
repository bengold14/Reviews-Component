# Reviews-Component

Reviews-Component is a project which copied the functionality and styling of the TripAdvisor Reviews Component (example: https://www.tripadvisor.com/Hotel_Review-g34467-d268715-Reviews-Cove_Inn_on_Naples_Bay-Naples_Florida.html) from scratch.  It is a full stack web application created using React, Express and Sqlite3.  Both the component and the proxy server that links to it are deployed on AWS EC2, as shown below:

![reviews component](Deployed-Review-Component.gif)

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Getting Started 

From within the root directory:

```sh
npm install -g webpack
npm install

npm run bundle
npm run start

If running the project on a local machine comment out line in index.jsx and uncomment out line in the same file. \n This is to update the IP reference for the server.

If deploying the component you will need to update the IP address and update the slice function on line to get \n the hotel ID from the URL

If using the proxy server linked in the related projects you will need to update the IP addresses in the Ben-Proxy/index.html file and if you are interested in linking the other related components those IP addresses will need to be uncommented out and updated as well.  You will need to make sure the Ben-Proxy/server.js file is running.




```

