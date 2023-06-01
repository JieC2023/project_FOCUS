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
   - Models, Controllers
     - Users (Adrian)
       - create
       - getUserByEmail()
       - getUserByID()
     - Sessions (Adrian)
       - sessions.js middleware instead of model
       - Log In
       - Log Out
     - Lists (Kai)
       - create
       - getByUser()
       - getByID()
       - updateByID()
       - deleteByID()
     - Tasks (Kai)
       - getByList()
       - getByID()
       - updateByID()
       - deleteByID()
 - Database Code (Jie)
   - schema.sql
   - db.js

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