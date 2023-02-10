# Weather widget


Weather widget - weather forecast widget for your site
## Deploy: https://weather-widget-ravgusha.netlify.app/
![image](https://user-images.githubusercontent.com/62184992/218182069-aa9a0607-7e6c-4884-9dbf-9e16b952514c.png)
## Node.js version
v16.15.1
## Available Scripts
Installing modules from npm:
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Conditions:

1. Users should be able to add this widget to their websites as simple as inserting the snippet into an HTML-page: <weather-widget /> <script type="text/javascript" src="{URL to the app}"></script>

2. Get data for the widget from free public API. You must register an account at OpenWeather.

3. After clicking the ‘Gear’ button at the upper-right corner, switch the view to the following:

    Here, a user must be able to:

    a. Remove previously added cities.

    b. Reorder the cities by dragging and dropping them within the list using ‘Hamburger’ icon to the left from the city name.

    c. Add new locations.

4. Save the configuration in the local storage and restore it on future visits. A user should be able to configure the widget just once and then have the same view until they change the computer or clean the storage.

5. By default, on initial opening, request the current user’s location and display the weather in their city.
## I Used: 
- **axios** for data fetching
- **vuedraggable** for allowing drag-and-drop
- **vuex** for state managment
