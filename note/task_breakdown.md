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
     - index.html (Adam)
     - CSS
     - Pages
       - Home (Adam & Jie)
         - Header & Footer Setup
       - To-Do List (Adam & Jie)
         - Step 1: One task
         - Step 2: Two more
         - Step 3: List
         - Step 4: Account
       - Random Task Generator (Kai & Adrian)
         - API Connection
           - Filters
               - Result
           - Adding generated task to list
   - Models, Controllers
     - ~~Users (Adrian)~~
       - ~~create~~
       - ~~getUserByEmail()~~
       - ~~getUserByID()~~
     - Sessions (Adrian)
       - ~~sessions.js middleware instead of model~~
       - ~~Log In~~
       - Log Out
     - Lists (Adam)
       - ~~create~~
       - getByUser()
       - getByID()
       - updateByID()
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
   - 
 - User Accounts
   - user CRUD
   - sessions
 - RTG (Random Task Generator)
   - 
 - RSG (Random Stuff) *Ideal, but drop if we have time issues
   - 
 - RJG (Random Jokes) *BONUS
   - 
 - Reminders Table *BONUS
   - 
 - Pixel Art Tool (ala Wk08 Checkpoint) *BONUS
   - 