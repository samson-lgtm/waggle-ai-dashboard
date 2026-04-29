import Papa from 'papaparse';
import { TicketData } from '../types/ticket';

const marchCSV = `Channel\tcreated at\tProduct\tIssue\tSub Type\tHandled
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t4g Mini\tDevice Removal\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\tPM\tSubs Cancellation\tFurther Steps\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Webapp\t2026-03-01\tPM\tUpgrade\tNewer Model\tHuman
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\t4g Mini\tNight Vision\tVideo Quality\tHuman
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\tPM\tSubs Activation\tCoupon Code Request\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\tPM\tSubs Upgrade\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tEmergency Fund\tInquiry\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Webapp\t2026-03-01\t\t\t\tBot
Webapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Webapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-01\tPM\tDNR\t\tHuman
Inapp\t2026-03-01\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Webapp\t2026-03-02\t\t\t\tBot
Webapp\t2026-03-02\t\t\t\tBot
Webapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Webapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\tPM\tDNR\t\tHuman
Webapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Webapp\t2026-03-02\t\t\t\tBot
Webapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\tPM\tDNR\t\tHuman
Inapp\t2026-03-02\t\t\t\tBot
Webapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Webapp\t2026-03-02\t\t\t\tBot
Webapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\tPM\tNot Turning On\t\tHuman
Inapp\t2026-03-02\tPM\tDNR\t\tHuman
Webapp\t2026-03-02\t4g Mini\tNot Turning On\t\tHuman
Inapp\t2026-03-02\tPM\tSubs Cancellation\t\tHuman
Webapp\t2026-03-02\tPM\tPresales\tGPS\tHuman
Webapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Webapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\t\t\t\tBot
Inapp\t2026-03-02\tPM\tDevice Transfer\t\tHuman
Webapp\t2026-03-02\t4g Mini\tPresales\tMotion Detection\tHuman
Webapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\tPM\tNot Charging\t\tHuman
Webapp\t2026-03-03\t\t\t\tBot
Webapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\tPM\tNot Charging\t\tHuman
Webapp\t2026-03-03\tPM\tPresales\tPrice inquiry\tHuman
Inapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\t\t\t\tBot
Webapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\t\t\t\tBot
Webapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\tPM\tSubs Cancellation\t\tHuman
Inapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\t\t\t\tBot
Webapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\t\t\t\tBot
Webapp\t2026-03-03\t4G Camera\tPresales\tFunctionalities\tHuman
Webapp\t2026-03-03\t\t\t\tBot
Webapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\tRV Mini Cam\tApp Navigation\tUnable to find\tHuman
Inapp\t2026-03-03\t\t\t\tBot
Webapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\t\t\t\tBot
Webapp\t2026-03-03\tRV Mini Cam\tApp Navigation\tJoystick Control\tHuman
Inapp\t2026-03-03\tWaggle Cam Pro\tApp Navigation\tJoystick Control\tHuman
Webapp\t2026-03-03\tPM\tUpgrade\t\tHuman
Webapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\tWaggle Cam Pro\tNot Turning On\t\tHuman
Webapp\t2026-03-03\t\t\t\tBot
Webapp\t2026-03-03\t\t\t\tBot
Inapp\t2026-03-03\t4g Mini\tApp Navigation\tJoystick Control\tHuman
Inapp\t2026-03-03\t4g Mini\tApp Navigation\tJoystick Control\tHuman
Inapp\t2026-03-03\tWaggle Cam Pro\tApp Navigation\tJoystick Control\tHuman
Inapp\t2026-03-03\t4g Mini\tApp Navigation\tJoystick Control\tHuman
Inapp\t2026-03-03\tWaggle Cam Pro\tTreat Toss\t\tHuman
Webapp\t2026-03-03\t\t\t\tBot
Webapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\tWaggle Cam Pro\tApp Navigation\tJoystick Control\tHuman
Inapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\tWaggle Cam Pro\tApp Navigation\tJoystick Control\tHuman
Webapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\tPM\tDNR\t\tHuman
Webapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\tPM\tSubs Activation\t\tHuman
Webapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\tWaggle Cam Pro\tReplacment\t\tHuman
Webapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-04\t\t\t\tBot
Inapp\t2026-03-04\t\t\t\tBot
Webapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t4g Mini\tApp Navigation\tJoystick Control\tHuman
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Webapp\t2026-03-05\tPM\tPresales\tSubs Inquiry\tHuman
Inapp\t2026-03-05\t\t\t\tBot
Webapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\tPM\tApp Navigation\tGeo Fence\tHuman
Webapp\t2026-03-05\t\t\t\tBot
Webapp\t2026-03-05\tPM\tCharging Query\tCharging LED Query\tHuman
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t4g Mini\tApp Navigation\tPW reset\tHuman
Webapp\t2026-03-05\t\t\t\tBot
Webapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\tPM\tApp Navigation\tTemp threshold\tHuman
Webapp\t2026-03-05\t4g Mini\tApp Issue\tUnable to activate\tHuman
Webapp\t2026-03-05\t4g Mini\tSubs Mapping\t\tHuman
Inapp\t2026-03-05\t4g Mini\tSubs Activation\tCombo plan\tHuman
Inapp\t2026-03-05\tPM\tSubs Cancellation\t\tHuman
Inapp\t2026-03-05\tPM\tDNR\t\tHuman
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\tPM\tApp Navigation\tGeo Fence\tHuman
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Webapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\tPM\tDNR\t\tHuman
Inapp\t2026-03-05\tPM\tDNR\t\tHuman
Webapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\tRV Mini Cam\tConnection\t\tHuman
Inapp\t2026-03-05\t\t\t\tBot
Webapp\t2026-03-05\t\t\t\tBot
Webapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\tPM\tSubs Activation\t\tHuman
Webapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Webapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t4g Mini\tApp Navigation\tMotion Detection\tHuman
Inapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-05\t4g Mini\tConnection\t\tHuman
Webapp\t2026-03-05\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t4g Mini\tmulti-user-access\t\tHuman
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\tWaggle Cam Pro\tConnection\t\tHuman
Inapp\t2026-03-06\tRV Mini Cam\tConnection\t\tHuman
Inapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\tApp Issue\tLoading\t\tHuman
Webapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\tApp Issue\tLoading\t\tHuman
Inapp\t2026-03-06\tPM\tPresales\toutside US\tHuman
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\tPM\tOrder Related\tShipping\tHuman
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\tPM\tSubs Activation\tCombo plan\tHuman
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\tPM\tPresales\tAQI\tHuman
Inapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t\t\t\tBot
Webapp\t2026-03-06\tPM\tApp Navigation\t\tHuman
Webapp\t2026-03-06\t4g Mini\tPresales\tFunctionalities\tHuman
Webapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\tPM\tDNR\t\tHuman
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\t4g Mini\tSubs Activation\t\tHuman
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-06\tPM\tSubs Mapping\t\tHuman
Inapp\t2026-03-06\t\t\t\tBot
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t4g Mini\tApp Navigation\tBattery Level\tHuman
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\tWaggle Cam Pro\tmulti-user-access\t\tHuman
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t\t\t\tBot
Webapp\t2026-03-07\t\t\t\tBot
Webapp\t2026-03-07\t\t\t\tBot
Webapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t4G Camera\tApp Navigation\tBattery Level\tHuman
Webapp\t2026-03-07\t\t\t\tBot
Webapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t\t\t\tBot
Webapp\t2026-03-07\t\t\t\tBot
Webapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t4g Mini\tPresales\tSubs Inquiry\tHuman
Inapp\t2026-03-07\t\t\t\tBot
Webapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\tPM\tDNR\t\tHuman
Inapp\t2026-03-07\tRV Mini Cam\tApp Navigation\tNoise Alerts\tHuman
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\tPM\tDNR\t\tHuman
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-07\t4G Camera\tApp Navigation\tNoise Alerts\tHuman
Webapp\t2026-03-07\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\tPM\tDNR\t\tHuman
Inapp\t2026-03-08\tPM\tPresales\tCombo plan\tHuman
Webapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t4g Mini\tApp Navigation\tTurn Off light\tHuman
Webapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-08\tPM\tDNR\t\tHuman
Webapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t4g Mini\tApp Navigation\t\tHuman
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\tRV Mini Cam\tDevice Removal\t\tHuman
Inapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Inapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-08\t\t\t\tBot
Webapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\tPM\tTemp Difference\t\tHuman
Webapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\tPM\tPresales\tNetwork Carrier\tHuman
Inapp\t2026-03-09\tWaggel Insurance\tNA\tNA\tHuman
Webapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\tPM\tDevice Query\tDisplay related\tHuman
Inapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t4g Mini\tApp Navigation\tRotation\tHuman
Inapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\t4G Camera\tApp Navigation\tDelete History\tHuman
Inapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t4G Camera\tApp Navigation\tMotion Alert Turn Off\tHuman
Inapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\tPM\tDevice Transfer\t\tHuman
Webapp\t2026-03-09\tPM\tSubs Activation\tSubs Inquiry\tHuman
Inapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\tNA\tNA\tNA\tHuman
Webapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\tPM\tPresales\t\tHuman
Inapp\t2026-03-09\t\t\t\tBot
Webapp\t2026-03-09\tPM\tOrder Related\tOOS\tHuman
Inapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-09\t\t\t\tBot
Inapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\tPM\tDevice Transfer\t\tHuman
Webapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t4G Camera\tSolar Panel\t\tHuman
Webapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\tPM\tUpgrade\t\tHuman
Inapp\t2026-03-10\t4g Mini\tApp Navigation\tBattery Level\tHuman
Inapp\t2026-03-10\tWaggel Insurance\tNA\tNA\tHuman
Webapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\tPM\tmulti-user-access\t\tHuman
Inapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t4g Mini\tSubs Mapping\t\tHuman
Inapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t4g Mini\tSubs Activation\tAdditional devices\tHuman
Inapp\t2026-03-10\tRV Mini Cam\tApp Navigation\tDelete Video\tHuman
Inapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\tRV Mini Cam\tSubs Activation\tPrice inquiry\tHuman
Webapp\t2026-03-10\tPM\tReplacment\t\tHuman
Inapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Webapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\tPM\tDNR\t\tHuman
Inapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\t\t\t\tBot
Inapp\t2026-03-10\tPM\tWarranty\tActivation\tHuman
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Webapp\t2026-03-11\t4g Mini\tApp Navigation\tSettings Icon\tHuman
Webapp\t2026-03-11\tRV Mini Cam\tPresales\tOffers Related\tHuman
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t4g Mini\tSubs Activation\tCombo plan\tHuman
Webapp\t2026-03-11\tPM\tReturn and Refund\t\tHuman
Inapp\t2026-03-11\t\t\t\tBot
Webapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\tPM\tDNR\t\tHuman
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Webapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Webapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\tPM\tApp Navigation\tSubs Related\tHuman
Inapp\t2026-03-11\t\t\t\tBot
Webapp\t2026-03-11\tRV Mini Cam\tPresales\tFunctionalities\tHuman
Inapp\t2026-03-11\t4g Mini\tApp Navigation\tBattery Level\tHuman
Inapp\t2026-03-11\t4g Mini\tSIM out of Service\t\tHuman
Webapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Webapp\t2026-03-11\t\t\t\tBot
Webapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t4g Mini\tApp Navigation\tBattery Level\tHuman
Webapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\tRV Mini Cam\tConnection\t\tHuman
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Webapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t4g Mini\tConnection\t\tHuman
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\tPM\tRegistration\tQR Code\tHuman
Webapp\t2026-03-11\t\t\t\tBot
Webapp\t2026-03-11\t\t\t\tBot
Inapp\t2026-03-11\tPM\tSubs Cancellation\t\tHuman
Inapp\t2026-03-12\tPM\tDevice Query\tReporting Interval\tHuman
Inapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\tRV Mini Cam\tApp Navigation\tPan Option\tHuman
Webapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\tRV Mini Cam\tConnection\t\tHuman
Inapp\t2026-03-12\tPM\tApp Navigation\tBattery Level\tHuman
Inapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t4G Camera\tLogin Related\t\tHuman
Inapp\t2026-03-12\t4G Camera\tDevice Query\tFunctionalities\tHuman
Webapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Inapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-12\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\tPM\tOrder Related\t\tHuman
Inapp\t2026-03-13\tPM\tEmail ID Change\t\tHuman
Inapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t4g Mini\tTrial Plan Query\t\tHuman
Inapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\tPM\tNot Turning On\t\tHuman
Inapp\t2026-03-13\t4g Mini\tTime Format Query\t\tHuman
Inapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Webapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\tPM\tCoverage area (Mexico)\t\tHuman
Webapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-13\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\tPM\tSubs Activation\tPrice inquiry\tHuman
Webapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\tPM\tOrder Related\tShipping Delay\tHuman
Webapp\t2026-03-14\tGeneral\tApp Download\t\tHuman
Inapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t4g Mini\tSubs Activation\tPrice inquiry\tHuman
Webapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t4g Mini\tDevice Removal\tSold\tHuman
Inapp\t2026-03-14\tPM\tDNR\t\tHuman
Inapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-14\t4g Mini\tApp Navigation\tMotion Detection\tHuman
Inapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Webapp\t2026-03-14\t\t\t\tBot
Inapp\t2026-03-15\t\t\t\tBot
Webapp\t2026-03-15\tPM\tDNR\t\tHuman
Webapp\t2026-03-15\tPM\tTemp Difference\tOld Device\tHuman
Webapp\t2026-03-15\t\t\t\tBot
Webapp\t2026-03-15\t4g Mini\tApp Navigation\tJoystick Control\tHuman
Inapp\t2026-03-15\t\t\t\tBot
Webapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\tWaggle Cam Pro\tApp Navigation\tPrivacy Settings\tHuman
Inapp\t2026-03-15\t4g Mini\tSubs Activation\tPrice inquiry\tHuman
Inapp\t2026-03-15\t\t\t\tBot
Webapp\t2026-03-15\tPM\tSubs Activation\tDiscount Request\tHuman
Webapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\tPM\tDNR\t\tHuman
Inapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\tRV Mini Cam\tApp Navigation\tErase Videos\tHuman
Inapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\t\t\t\tBot
Webapp\t2026-03-15\t4g Mini\tPresales\tFunctionalities\tHuman
Inapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\t4g Mini\tConnection\t\tHuman
Inapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\t\t\t\tBot
Webapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\tPM\tSubs Activation\tReactivation Query\tHuman
Webapp\t2026-03-15\t4g Mini\tSubs Activation\tAdditional devices\tHuman
Webapp\t2026-03-15\t\t\t\tBot
Webapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\t\t\t\tBot
Webapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\tRV Mini Cam\tConnection\t\tHuman
Webapp\t2026-03-15\tPM\tLogin Related\t\tHuman
Inapp\t2026-03-15\t\t\t\tBot
Webapp\t2026-03-15\t\t\t\tBot
Webapp\t2026-03-15\t\t\t\tBot
Inapp\t2026-03-15\tWaggle Cam Pro\tApp Navigation\tTreat Tossing\tHuman
Inapp\t2026-03-15\tPM\tTemp Difference\t\tHuman
Webapp\t2026-03-15\tPM\tDevice Query\tFunctionalities\tHuman
Inapp\t2026-03-16\t4g Mini\tConnection\t\tHuman
Inapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t4g Mini\tApp Navigation\tDelete Clips\tHuman
Inapp\t2026-03-16\t4g Mini\tSubs Activation\tBundle\tHuman
Webapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t4g Mini\tApp Navigation\tJoystick Control\tHuman
Webapp\t2026-03-16\tPM\tPresales\tFunctionalities\tHuman
Inapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\tPM\tDNR\t\tHuman
Webapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t4G Camera\tReturn and Refund\t\tHuman
Webapp\t2026-03-16\tPM\tPresales\tSubs Inquiry\tHuman
Inapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\tPM\tSubs Activation\tSubs Inquiry\tHuman
Inapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\tPM\tCamping Search\t\tHuman
Webapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\tRV Mini Cam\tConnection\t\tHuman
Webapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t\t\t\tBot
Inapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\tPM\tSubs Activation\tCombo plan\tHuman
Inapp\t2026-03-16\t\t\t\tBot
Webapp\t2026-03-16\t\t\t\tBot
Inapp	2026-03-16	PM	DNR		Human
Inapp	2026-03-16				Bot
Webapp	2026-03-17				Bot
Webapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Webapp	2026-03-17				Bot
Webapp	2026-03-17				Bot
Webapp	2026-03-17				Bot
Webapp	2026-03-17				Bot
Webapp	2026-03-17				Bot
Webapp	2026-03-17	4g Mini	Feature Request	Camera list management	Human
Inapp	2026-03-17				Bot
Webapp	2026-03-17	PM	DNR		Human
Webapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Inapp	2026-03-17	PM	DNR		Human
Inapp	2026-03-17				Bot
Webapp	2026-03-17				Bot
Webapp	2026-03-17				Bot
Inapp	2026-03-17	PM	App Navigation	Screen Color Change	Human
Inapp	2026-03-17	PM	DNR		Human
Webapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Webapp	2026-03-17	PM	Order Related	Shipping	Human
Inapp	2026-03-17				Bot
Webapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Webapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Inapp	2026-03-17				Bot
Webapp	2026-03-17	4g Mini	Auto Tracking		Human
Inapp	2026-03-17	4g Mini	Auto Tracking		Human
Webapp	2026-03-17				Bot
Webapp	2026-03-17				Bot
Inapp	2026-03-18				Bot
Webapp	2026-03-18				Bot
Webapp	2026-03-18				Bot
Inapp	2026-03-18	NA	NA	NA	Human
Inapp	2026-03-18	PM	App Issue	Profile Setup	Human
Inapp	2026-03-18	PM	Device Removal		Human
Inapp	2026-03-18				Bot
Webapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Webapp	2026-03-18				Bot
Webapp	2026-03-18				Bot
Inapp	2026-03-18	PM	Accessories		Human
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Webapp	2026-03-18				Bot
Webapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Webapp	2026-03-18	PM	Subs Activation	Second Monitor	Human
Webapp	2026-03-18	4G Camera	Presales	Functionalities	Human
Webapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18	4g Mini	multi-user-access		Human
Inapp	2026-03-18				Bot
Inapp	2026-03-18	Waggle Cam Pro	App Issue	Loading	Human
Inapp	2026-03-18	PM	Not Charging		Human
Webapp	2026-03-18				Bot
Webapp	2026-03-18				Bot
Inapp	2026-03-18	PM	Registration	Used Monitor	Human
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Webapp	2026-03-18	Older Waggle	Registration		Human
Inapp	2026-03-18				Bot
Inapp	2026-03-18				Bot
Inapp	2026-03-18	PM	Alerts not working		Human
Webapp	2026-03-18				Bot
Webapp	2026-03-19	PM	Subs Activation	Combo plan	Human
Webapp	2026-03-19				Bot
Webapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Webapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Webapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19	PM	Device Query	Display related	Human
Webapp	2026-03-19				Bot
Webapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19	PM	Accessories	Purchase	Human
Inapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19	4g Mini	Connection		Human
Webapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Webapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Webapp	2026-03-19				Bot
Webapp	2026-03-19	PM	Subs Cancellation		Human
Inapp	2026-03-19				Bot
Webapp	2026-03-19				Bot
Webapp	2026-03-19				Bot
Webapp	2026-03-19				Bot
Webapp	2026-03-19	PM	Replacment		Human
Webapp	2026-03-19	4g Mini	Presales	Subs Inquiry	Human
Inapp	2026-03-19				Bot
Inapp	2026-03-19	RV Mini Cam	App Navigation	Delete Clips	Human
Webapp	2026-03-19				Bot
Inapp	2026-03-19	PM	DNR		Human
Webapp	2026-03-19				Bot
Webapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Inapp	2026-03-19				Bot
Webapp	2026-03-19				Bot
Webapp	2026-03-20				Bot
Webapp	2026-03-20	PM	DNR		Human
Webapp	2026-03-20	PM	Subs Activation	Discount Request	Human
Inapp	2026-03-20	RV Mini Cam	Device Query	Turn Off Device	Human
Inapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Webapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Webapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Inapp	2026-03-20	Waggel Insurance	NA		Human
Webapp	2026-03-20				Bot
Webapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Inapp	2026-03-20	RV Mini Cam	Connection		Human
Webapp	2026-03-20				Bot
Inapp	2026-03-20	PM	App Navigation	Temp Report	Human
Inapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Webapp	2026-03-20				Bot
Webapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Webapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Webapp	2026-03-20				Bot
Inapp	2026-03-20	RV Mini Cam	Connection		Human
Inapp	2026-03-20				Bot
Webapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Inapp	2026-03-20	PM	DNR		Human
Inapp	2026-03-20				Bot
Webapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Webapp	2026-03-20	4g Mini	Subs Activation		Human
Webapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Inapp	2026-03-20	PM	Geo Fence Issue		Human
Inapp	2026-03-20				Bot
Webapp	2026-03-20				Bot
Webapp	2026-03-20	4g Mini	Presales	Color Request	Human
Inapp	2026-03-20	PM	Alerts not working		Human
Inapp	2026-03-20				Bot
Inapp	2026-03-20				Bot
Inapp	2026-03-20	PM	Temp Difference		Human
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Webapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Webapp	2026-03-21	4G Camera	App Navigation	Flip	Human
Inapp	2026-03-21	Waggel Insurance			Human
Webapp	2026-03-21				Bot
Webapp	2026-03-21				Bot
Inapp	2026-03-21	PM	Registration	Query	Human
Inapp	2026-03-21				Bot
Webapp	2026-03-21	4g Mini	Presales	Network Carrier	Human
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Webapp	2026-03-21				Bot
Webapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Webapp	2026-03-21	PM	Subs Activation	Flexi Plan Query	Human
Inapp	2026-03-21				Bot
Inapp	2026-03-21	RV Mini Cam	Connection		Human
Inapp	2026-03-21				Bot
Webapp	2026-03-21				Bot
Webapp	2026-03-21	PM	Presales	Network Carrier	Human
Inapp	2026-03-21	RV Mini Cam	App Navigation	Flip	Human
Webapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21	PM	App Issue	Device Selection	Human
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Webapp	2026-03-21				Bot
Webapp	2026-03-21				Bot
Webapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Webapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Webapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21	PM	App Navigation	Temp threshold	Human
Webapp	2026-03-21				Bot
Webapp	2026-03-21				Bot
Inapp	2026-03-21				Bot
Inapp	2026-03-21	4g Mini	Subs Cancellation		Human
Inapp	2026-03-22				Bot
Webapp	2026-03-22	4g Mini	Subs Cancellation		Human
Inapp	2026-03-22	4g Mini	App Issue	Loading	Human
Webapp	2026-03-22				Bot
Inapp	2026-03-22	4g Mini	App Navigation	Erase Videos	Human
Inapp	2026-03-22				Bot
Webapp	2026-03-22				Bot
Webapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Inapp	2026-03-22	4g Mini	Subs Activation	Discount Request	Human
Inapp	2026-03-22	4g Mini	Connection		Human
Inapp	2026-03-22				Bot
Webapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Inapp	2026-03-22	PM	AQI	Alerts related	Human
Inapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Inapp	2026-03-22	PM	DNR		Human
Webapp	2026-03-22	PM	Order Related	Delivery Issue	Human
Inapp	2026-03-22				Bot
Webapp	2026-03-22	PM	Presales	Subs Inquiry	Human
Webapp	2026-03-22				Bot
Inapp	2026-03-22	4g Mini	Hardware Damage		Human
Inapp	2026-03-22				Bot
Webapp	2026-03-22				Bot
Inapp	2026-03-22	PM	DNR		Human
Webapp	2026-03-22				Bot
Webapp	2026-03-22				Bot
Webapp	2026-03-22	RV Mini Cam	Presales	Purchase link	Human
Inapp	2026-03-22				Bot
Webapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Inapp	2026-03-22	PM	App Navigation	Pet Profile	Human
Inapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Webapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Inapp	2026-03-22				Bot
Inapp	2026-03-23				Bot
Inapp	2026-03-23	4g Mini	Connection	Streaming	Human
Webapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23	PM	Presales	Subs Inquiry	Human
Webapp	2026-03-23	PM	Replacment	Shipping	Human
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Webapp	2026-03-23	PM	Subs Activation	Combo plan	Human
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Inapp	2026-03-23	PM	DNR		Human
Webapp	2026-03-23				Bot
Inapp	2026-03-23	PM	Temp Difference		Human
Webapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Webapp	2026-03-23	PM	Alerts not working		Human
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23	PM	Presales	Discount Request	Human
Inapp	2026-03-23				Bot
Webapp	2026-03-23	4g Mini	Subs Activation	Combo plan	Human
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot
Webapp	2026-03-23				Bot
Inapp	2026-03-23	PM	DNR		Human
Webapp	2026-03-23	PM	DNR		Human
Inapp	2026-03-23	PM	Not Charging		Human
Inapp	2026-03-23				Bot
Inapp	2026-03-23				Bot`;

export async function loadMarchData(): Promise<TicketData[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(marchCSV, {
      header: true,
      delimiter: '\t',
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData: TicketData[] = results.data.map((row: any) => {
          // Convert date format from YYYY-MM-DD to DD-MM-YYYY
          const dateStr = row['created at'] || row.createdAt || row['Created at'] || '';
          let formattedDate = dateStr;
          if (dateStr && dateStr.includes('-')) {
            const parts = dateStr.split('-');
            if (parts.length === 3 && parts[0].length === 4) {
              // Format is YYYY-MM-DD, convert to DD-MM-YYYY
              const [year, month, day] = parts;
              formattedDate = `${day}-${month}-${year}`;
            }
          }
          
          return {
            channel: row.Channel || row.channel || '',
            createdAt: formattedDate,
            product: row.Product || row.product || '',
            issue: row.Issue || row.issue || '',
            subType: row['Sub Type'] || row.subType || '',
            handled: row.Handled || row.handled || ''
          };
        });
        resolve(parsedData);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
}