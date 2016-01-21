import NavigationController from "./NavigationController.js";
import OverviewController from "./OverviewController.js";
import ExercisesController from "./ExercisesController.js";
import ScheduleController from "./ScheduleController.js";

export default class AppController {

    constructor()
    {
        this.rootElement = document.querySelector('body');

        this.navigation = new NavigationController();

        this.navigation.add('Overview', new OverviewController(this), true);

        this.exercisesScreen = new ExercisesController(this);
        this.navigation.add('Exercises', this.exercisesScreen);

        this.scheduleScreen = new ScheduleController(this);
        this.navigation.add('Schedule', this.scheduleScreen);

        this.registerEvents();
    }

    switchToExercises()
    {
        this.navigation.switchView(this.exercisesScreen);
    }

    switchToSchedule()
    {
        this.navigation.switchView(this.scheduleScreen);
    }

    registerEvents()
    {
        window.exerciseUpdateEvent = new Event('exerciseUpdate');
    }
}
