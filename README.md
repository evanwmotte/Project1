# My Fitness Buddy

This is a mobile first app using HTML, CSS, Foundation CSS Framework, JavaScript, and jQuery. The app uses AJAX GET to call 3 APIs
   1) spoonacular API
   2) mapquest API (mapquest used for initial coordinate search)
   3) TomTom API (TomTom used for Point of Interest search)
 
 # Motivation
 
 The motivation behind this app was to provide a user-friendly way to manage one's daily nutrional info. The best way is to have a hub where not only are homecooked meals and restataunt/fast food options are made available, but also nutrional info can be tracked.
   
   
# How to Use and Screenshots   

This app has three main pieces of user interaction/functionality:

   1) "Overall Progress" tab contains initial user setup where the user will enter their daily calorie and carb limit and their daily protein goal.
   <p>
            <img width="100" height="150" src="pics_read/overall_prog_state_1.png" alt="Overall Progress tab in state 1">
   </p>
        - This info is saved to the user's local storage and drives progress bars showing the daily progress.
   <p>
            <img width="100" height="150" src="pics_read/overall_prog_state_2.png" alt="Overall Progress tab in state 2/ Progress bar">
   </p>         
        - The progress bars are refreshed at midnight everynight, but the initial user setup (limits and goals) persist.

   2) "Recipes" tab gives the user the ability to find recipes and associated nutritional info based on search criteria (meal type, cuisine type, and specific              craving).
        - Once a user chooses the recipe they are shown the nutritional info and given a link to the recipe site.
   <p>
             <img width="100" height="150" src="pics_read/recipe_ex.png" alt="Recipe Tab showing recipe">
   </p>      
        - If the use chooses the "Select this recipe and update tracker" button, a modal displays the the nutitional info and the user must input the serving size that they consumed.
    <p>
             <img width="100" height="150" src="pics_read/manual_update.png" alt="User Input for serving size on Recipe tab">
    </p>          
         -Once the user chooses the "Update" button, another modal displays the nutritional info based on the user's serving size.
    <p>
            <img width="100" height="150" src="pics_read/recipe_serving_size.png" alt="Confirm Screen for update to progress bar fro Recipe Tab">
    </p>        
          -Once the user chooses the "Submit Changes" button, the calories, carbs and protein associcated with the meal are fed into the progress bar on the                    Overall Progress tab.
    
   3) "Eat Out" tab gives the user the ability to find local restaurants based on search criteria (address, maximum distance, specific craving)
        - Once the user chooses a restaurant, they are presented with contact info for that restaurant
    <p>
            <img width="100" height="150" src="pics_read/eat_out_ex.png" alt="Eat Out tab">
    </p>    
        - Once the user clicks off the tab, a modal is displayed to remind the user to check the nutritional info of the food and to manually update the Overall Progress tab
