# Epic-Fantasy-League

Built by Tommy Flynn 

With thanks for Excel help/ initial league creation to: 
Ryan Neptune | Alex Andrews

This is currently the platform for my existing league to use and track points. My intention is to build out the platform to allow for anyone to sign up and start an epic fantasy league. 

1. How it Works

- 10 Teams in the EFL League. Each team is required to pick:
- Three NFL Teams (30 total teams selected out of 32 possible teams)
- Three NBA Teams (30 teams selected out of 30 possible teams)
- Three NHL Teams (30 teams selected out of 31 possible teams)
- Three MLB Teams (30 teams selected out of 30 possible teams) 
- Two EPL teams (20 teams selected out of 20 possible teams) 

- 14 Teams in total for a total of 140 draft picks. 
    - Can draft any team from any league, as long as you end up with 3/3/3/3/2

- League pays out top three finishes 

2. Under the Hood

- React
- MongoDB
- Autho Login Integration
- APIs
    - EPL: API Football (100 calls per day for free) 
    - NBA: API NBA (unlimited for free) 
    - NHL: https://statsapi.web.nhl.com/api/v1/standings (unlimited for free)
    - MLB:  https://fantasydata.com/api/api-documentation/mlb#(but season hasn’t started)
    - NFL: https://fantasydata.com/api/api-documentation/nfl#/core (but season has ended)
- Bootstrap:
    - MDBReact Table
- Balsamiq for wireframe. 

3. Crunching the numbers
- States on States: Total Score =
    -   EPL 
    [(API Grab for EPL Team [1] Wins * 4.25) +   (API Grab for EPL Team[1] Ties)] + 
    [(API Grab for EPL Team[2]  Wins * 4.25) +   (API Grab for EPL Team[2] Ties)]  + 
    -   NBA 
    [(API Grab for NBA Team[1] Wins * 2) +
    [(API Grab for NBA Team[2] Wins * 2) +   
    [(API Grab for NBA Team[3] Wins * 2) +  
    -   NFL
    [(API Grab for NFL Team[1] Wins * 10) + 
    [(API Grab for NFL Team[2] Wins * 10) +
    [(API Grab for NFL Team[3] Wins * 10) +
    -   NHL
    [(API Grab for NHL Team[1] Wins * 2) + (API Grab for NHL Team[1] Ties)] +
    [(API Grab for NHL Team[2] Wins * 2) + (API Grab for NHL Team[2] Ties)] +
    [(API Grab for NHL Team[3] Wins * 2) + (API Grab for NHL Team[3] Ties)] +
    -   MLB
    [(API Grab for MLB  Team[1] Wins ) + 
    [(API Grab for MLB  Team[2] Wins ) + 
    [(API Grab for MLB  Team[3] Wins ) + 

4. Features I want to add:

    A. Add team colors to each individual page/draft 
    B. Use win percentage to project a user’s total points at the end of the season (on a projections page)
    C. Add Win/Loss record for each real life team.    
    D. Build the draft platform. 
    - Snake Draft 
    - Auction Draft 
    - Automated Draft (actually the easiest of the three)

Please contact me at TFly.Flynn@gmail.com with any questions about the app. 
