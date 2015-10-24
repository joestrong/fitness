import NavigationController from "./NavigationController.js";
import OverviewController from "./OverviewController.js";
import ScheduleController from "./ScheduleController.js";

export default class AppController {

    constructor()
    {
        var navigation = new NavigationController();
        navigation.add('Overview', new OverviewController(), true);
        navigation.add('Schedule', new ScheduleController());
    }
}
