# Reviews-Component

![reviews component](Deployed-Review-Component.gif)

Reviews-Component is a project which copied the functionality and styling of the TripAdvisor Reviews Component (example: https://www.tripadvisor.com/Hotel_Review-g34467-d268715-Reviews-Cove_Inn_on_Naples_Bay-Naples_Florida.html) from scratch.  It is a full stack web application created using React, Express and Sqlite3.  Both the component and the proxy server that links to it are deployed on AWS EC2, as shown below:

## Related Projects

  - Proxy Server - https://github.com/bengold14/Ben-Proxy 
  - Maps Component - https://github.com/hrnyc22-scarlet/Photo-Carousel-Component 
  - Author: [Raihan Hossain](https://github.com/mrh11)
  - Image Component - https://github.com/hrnyc22-scarlet/locationService 
  - Author: [Muin Syed](https://github.com/msyed1438)
## Getting Started 

From within the root directory:

```sh
npm install -g webpack
npm install

npm run bundle
npm run start

```

### Running on Local Machine (http://{LOCAL-HOST}:3002/hotels/{INSERTID#}/)

If running the project on a local machine comment out line 88 in index.jsx and uncomment out line 87 in the same file. This is to update the IP reference for the server.  The slice function may also need to be updated to return the hotel ID at the end of the URL.  (Works for endpoints 1-100 only)

### Deploying (http://{INSERT-IP-ADRRESS}:3002/hotels/{INSERT-ID#}/)

If running the project on a seperate IP address uncomment line 88 in index.jsx and comment out line 87 in the same file. This is to update the IP reference for the server.  The slice function may also need to be updated to return the hotel ID at the end of the URL. (Works for endpoints 1-100 only)

### Linking in the Proxy Server (http://{INSERT-IP-ADRRESS}:3003/hotels/{INSERT-ID#}/)

If using the proxy server linked in the related projects you will need to update the IP addresses in the Ben-Proxy/index.html file and if you are interested in linking the other related components those IP addresses will need to be uncommented out and updated as well.  You will need to make sure the Ben-Proxy/server.js file is running.  (Works for endpoints 1-100 only)


