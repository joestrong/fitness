import NavigationController from "./NavigationController.js";
import OverviewController from "./OverviewController.js";
import ExercisesController from "./ExercisesController.js";
import ScheduleController from "./ScheduleController.js";

export default class AppController {

    constructor()
    {
        var navigation = new NavigationController();
        navigation.add('Overview', new OverviewController(), true);
        navigation.add('Exercises', new ExercisesController());
        navigation.add('Schedule', new ScheduleController());
    }
}
