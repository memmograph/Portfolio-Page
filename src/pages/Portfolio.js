import React from "react";
import Cards from "../components/Cards"
import Title from "../components/Title";
import Birthday from "../images/birthday.gif"
import FitnessTracker from "../images/fitness-tracker.gif"
import WeatherDashboard from "../images/weather.gif"
import Burger from "../images/burger.gif"
import Planner from "../images/planner.gif"
import EmployeeTracker from "../images/EmployeeTracker.gif"
import NoteTaker from "../images/notes.gif"
import EmployeeDirectory from "../images/employee-directory.gif"
import WorkoutTracker from "../images/Workout-tracker.gif"
import Footer from "../components/Footer"


function Portfolio(){
    return(
        <div>
                <main className="container">
                <row className="row">   
                <section className="col-lg-12">
                <main className="mt-5">
                <Title
                section="Portfolio"
                />
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 lg:mt-20 mt-4 mx-auto">
                       
                                <Cards 
                         
                                title="Fitness Tracker"
                                gif={FitnessTracker}
                                websiteName="Fitness Tracker Website"
                                projectName="Fitness Tracker"
                                webLink="https://evandev01.github.io/fitness-tracker/"
                                gitLink="https://github.com/evandev01/fitness-tracker"
                                technology="Materializecss"
                                technology2="OpenWeather API"
                                technology3="Rest API"
                                technology4="Google Visualization API"
                                technology5="jQuery"
                                technology6="HTML"
                                technology7="CSS"
                                />
                                 <Cards 
                                title="Employee Directory"
                                gif={EmployeeDirectory}
                                websiteName="Employee Directory Website"
                                projectName="Employee Directory"
                                webLink="https://llaraama.github.io/Employee-Directory/"
                                gitLink="https://github.com/llaraama/Employee-Directory"
                                technology="React"
                                technology2="Bootstrap"
                                technology3="Moment.js"
                                technology4="Axios"
                                technology5="Random User Generator API"
                                technology6="CSS"
                                />
                                    <Cards 
                                title="Workout Tracker"
                                gif={WorkoutTracker}
                                websiteName="Workout Tracker Website"
                                projectName="Workout Tracker"
                                webLink="https://fast-everglades-13912.herokuapp.com/"
                                gitLink="https://github.com/llaraama/Workout-Tracker"
                                technology="NoSQL"
                                technology2="Mongoose"
                                technology3="Express"
                                technology4="Javascript"
                                technology5="Bootstrap"
                                technology6="HTML"
                                technology7="CSS"
                                />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 lg:mt-20 mt-4 mx-auto">
                                <Cards 
                                title="Day Planner"
                                gif={Planner}
                                websiteName="Day Planner Website"
                                projectName="Day Planner"
                                webLink="https://llaraama.github.io/Work-Day-Scheduler/"
                                gitLink="https://github.com/llaraama/Work-Day-Scheduler"
                                technology="jQuery"
                                technology2="Moment.js"
                                technology3="HTML"
                                technology4="CSS"
                                technology5="Moment.js"
                                />
                                <Cards 
                                title="Employee Tracker"
                                gif={EmployeeTracker}
                                websiteName="App Functionality Video"
                                projectName="Employee Tracker"
                                webLink="https://drive.google.com/file/d/1z3hiMBjP2ii3ZuOWR4yV_jMXVkW6F0f_/view"
                                gitLink="https://github.com/llaraama/Employee-Tracker"
                                technology="Node"
                                technology2="Inquirer"
                                technology3="MySQL"
                                />
                                <Cards 
                                title="Note Taker"
                                gif={NoteTaker}
                                websiteName="Note Taker Website"
                                projectName="Note Taker"
                                webLink="https://vert-madame-21550.herokuapp.com/"
                                gitLink="https://github.com/llaraama/Note-Taker"
                                technology="Express"
                                technology2="Javascript"
                                technology3="Api Routes"
                                />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 lg:mt-20 mt-4 mx-auto">
                        <Cards 
                                title="Weather Dashboard"
                                gif={WeatherDashboard}
                                websiteName="Weather Dashboard Website"
                                projectName="Weather Dashboard"
                                webLink="https://llaraama.github.io/Weather-Dashboard/"
                                gitLink="https://github.com/llaraama/Weather-Dashboard"
                                technology="OpenWeather API"
                                technology2="jQuery"
                                technology3="Ajax Request"
                                technology4="HTML"
                                technology5="CSS"
                                />
                              <Cards 
                                title="Eat-Da-Burger"
                                gif={Burger}
                                websiteName="Eat-Da-Burger Website"
                                projectName="Eat-Da-Burger"
                                webLink="https://pacific-chamber-74565.herokuapp.com/"
                                gitLink="https://github.com/llaraama/Eat-Da-Burger"
                                technology="MySQL"
                                technology2="Node.js"
                                technology3="Express"
                                technology4="Express-Handlebars"
                                technology5="Javascript"
                                technology6="HTML"
                                technology7="CSS"
                                />
                                <Cards 
                                title="Birthday Master"
                                gif={Birthday}
                                websiteName="Birthday Master Website"
                                projectName="Birthday Master"
                                webLink="https://desolate-journey-79245.herokuapp.com/"
                                gitLink="https://github.com/llaraama/Birthday-Master"
                                technology="MySQL2"
                                technology2="jQuery"
                                technology3="Sequelize"
                                technology4="Express-Handlebars"
                                technology5="Express"
                                technology6="Bcrypt"
                                technology7="Passport.js"
                                />
                        </div>
                </main>
                <main className="mt-5"></main>
                </section>
                </row>
                </main> 
                <Footer></Footer>         
        </div>
    )
}
export default Portfolio;