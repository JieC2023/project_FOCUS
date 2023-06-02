# Task breakdown
Planning:
 - User Stories (by MVP reqs) (team)
 - Wireframing (Adrian)
 - App Flowcharts (Adam)
 - Database Schematic & Diagrams (Jie)
   - Users, To-Do Lists (and Tasks maybe? If we want to compartmentalise data)

Base Code:
 - Node/Express Base
   - server.js (Adam)
 - MCC Architecture
   - Client
     - ~~index.html (Adam)~~
     - CSS (Kai)
     - Home Menu (Kai)
       - Header & Footer Setup
   - Models, Controllers
     - ~~Users (Adrian)~~
       - ~~create~~
       - ~~getUserByEmail()~~
       - ~~getUserByID()~~
     - Sessions (Adrian)
       - ~~sessions.js middleware instead of model~~
       - ~~Log In~~
       - Log Out
     - ~~Lists (Adam)~~
       - ~~create~~
       - ~~getByUser()~~
       - ~~getByID()~~
       - ~~updateByID()~~
       - ~~deleteByID()~~
     - ~~Tasks (Kai)~~
       - ~~create~~
       - ~~getByList()~~
       - ~~getByID()~~
       - ~~updateByID()~~
       - ~~deleteByID()~~
 - ~~Database Code (Jie)~~
   - ~~schema.sql~~
   - ~~db.js~~

# AFTER BASE COMPLETE
Functionality by priority:
 - To-Do List & Task Management
   - ~~Task CRUD (Adam & Jie)~~ - Just needs update (Adam)
   - List CRUD (Jie)
   - HTML for the process
     - ~~Step 1: One task~~
     - Step 2: "Well done! Let's make two more."
     - Step 3: List (Wait for list implementation)
     - Step 4: Account
 - ~~User Accounts~~
   - ~~user CRUD~~
   - ~~sessions~~
 - RTG (Random Task Generator)
   - ~~Surprise Me (Random Task)~~
   - Filters (Kai)
     - Filtered request (Kai)
   - Add generated task to list (if user logged in)
   - HTML for menu
 - RSG (Random Stuff) *Ideal, but drop if we have time issues
   - 
 - RJG (Random Jokes) *BONUS
   - 
 - Reminders Table *BONUS
   - 
 - Pixel Art Tool (ala Wk08 Checkpoint) *BONUS
   - 