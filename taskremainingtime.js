
dojo.provide("com.rc.TaskRemainingTime");
dojo.require("dojo.date");
dojo.require("dojo.date.stamp");
dojo.require("com.ibm.team.workitem.api.common.WorkItemAttributes");

(function() {
var workItemAttributes = com.ibm.team.workitem.api.common.WorkItemAttributes;
var fromISOString = dojo.date.stamp.fromISOString;
  dojo.declare("com.rc.TaskRemainingTime", null, {

    getValue: function(attribute, workItem, configuration) {
    
      //var creationDate = fromISOString(workItem.getValue(workItemAttributes.CREATION_DATE));
      var Estimate = workItem.getValue(workItemAttributes.ESTIMATE);
      var Corr_Estimate = workItem.getValue(workItemAttributes.CORRECTED_ESTIMATE);
      var Time_Spent = workItem.getValue(workItemAttributes.TIME_SPENT);
      
      if(Corr_Estimate != -1)
      var ageInSeconds = (Corr_Estimate - Time_Spent) / 1000;
      else
      var ageInSeconds = (Estimate - Time_Spent) / 1000;
        
        //var weeks        = parseInt(ageInSeconds / 604800);
        var days         = parseInt(ageInSeconds / 86400);
        var hours        = parseInt((ageInSeconds-days * 86400) / 3600);
        var minutes      = parseInt((ageInSeconds-days * 86400 - hours * 3600) / 60);
        
        return days + " d, " +  hours + " hr, " + minutes  + " min" ;
    }
  });
})();