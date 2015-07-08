
dojo.provide("com.rc.TaskDuration");
dojo.require("dojo.date");
dojo.require("dojo.date.stamp");
dojo.require("com.ibm.team.workitem.api.common.WorkItemAttributes");

(function() {
var WorkItemAttributes = com.ibm.team.workitem.api.common.WorkItemAttributes;
var fromISOString = dojo.date.stamp.fromISOString;
  dojo.declare("com.rc.TaskDuration", null, {

    getValue: function(attribute, workItem, configuration) {
      var creationDate = fromISOString(workItem.getValue(WorkItemAttributes.CREATION_DATE));
      if (creationDate) {
        var ageInSeconds = (Date.now() - creationDate.getTime()) / 1000;

        var days         = parseInt(ageInSeconds / 86400);
        var hours        = parseInt((ageInSeconds-days * 86400) / 3600);
        var minutes      = parseInt((ageInSeconds-days * 86400 - hours * 3600) / 60);
                
        return days + " d, " +  hours + " hr, " + minutes  + " min";
      }
      return "";
    }
  });
})();